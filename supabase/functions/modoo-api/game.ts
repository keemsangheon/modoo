const monthOf=(time:number)=>new Date(time+9*3600000).toISOString().slice(0,7);
const hex=(b:ArrayBuffer)=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
const newInvite=()=>hex(crypto.getRandomValues(new Uint8Array(6)).buffer).toUpperCase();
const sha=async(v:string)=>hex(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v)));
async function hash(password:string,salt:string){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:new TextEncoder().encode(salt),iterations:100000},key,256))}
const json=(v:unknown,status=200,headers={})=>Response.json(v,{status,headers:{'Cache-Control':'no-store',...headers}});
export async function handle(req:Request,env:any){const db=env.DB!;const action=new URL(req.url).pathname.split('/').pop();const now=Date.now();const raw=req.headers.get('cookie')?.match(/(?:^|; )mt_session=([a-f0-9]+)/)?.[1];const token=raw?await sha(raw):'';const session=token?await db.prepare("SELECT s.team,p.role,p.name FROM sessions s JOIN participants p ON p.id=s.participant AND p.team=s.team AND p.role=s.role WHERE s.token=? AND s.expires>?").bind(token,now).first():null;
if(req.method==='GET'&&action==='state'){const {results}=await db.prepare('SELECT t.id,t.name,COALESCE(m.mentor,0) AS mentor,COALESCE(m.mentee,0) AS mentee,t.created,COALESCE(m.mentor_played,0) AS mentorPlayed,COALESCE(m.mentee_played,0) AS menteePlayed FROM teams t LEFT JOIN monthly_scores m ON m.team=t.id AND m.month=? ORDER BY COALESCE(m.mentor,0)+COALESCE(m.mentee,0) DESC,t.created ASC').bind(monthOf(now)).all();const mentee= session?.role==='mentor'?await db.prepare("SELECT id FROM participants WHERE team=? AND role='mentee'").bind(session.team).first():null;return json({month:monthOf(now),teams:results,current:session?.team||null,role:session?.role||null,participantName:session?.name||null,menteeJoined:!!mentee})}
if(req.method!=='POST')return json({error:'지원하지 않는 요청입니다.'},405);
const origin=req.headers.get('origin');if(origin&&origin!==new URL(req.url).origin)return json({error:'잘못된 요청입니다.'},403);
let data:any;try{data=await req.json()}catch{return json({error:'입력값을 확인해 주세요.'},400)}
if(['create','join','enroll'].includes(action||'')){
const ip=req.headers.get('cf-connecting-ip')||'anonymous';const bucket=await sha(ip+Math.floor(now/60000));await db.prepare('INSERT INTO limits(key,count,reset) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1').bind(bucket,now+120000).run();const limit=await db.prepare('SELECT count FROM limits WHERE key=?').bind(bucket).first();if(limit&&limit.count>20)return json({error:'요청이 많아요. 1분 후 다시 시도해 주세요.'},429);
if(action==='create'){const master=(env as unknown as {MENTOR_MASTER_CODE?:string}).MENTOR_MASTER_CODE;if(!master)return json({error:'멘토 마스터 코드가 아직 설정되지 않았어요.'},503);if(typeof data.masterCode!=='string'||data.masterCode.length>128||await sha(data.masterCode.trim())!==await sha(master))return json({error:'멘토 마스터 코드를 확인해 주세요.',field:'masterCode'},403)}
const name=typeof data.name==='string'?data.name.trim().normalize('NFC'):'';
const participantName=typeof data.participantName==='string'?data.participantName.trim().normalize('NFC'):'';
const password=data.password;let issuedCode:string|undefined;
if(!name||name.length>20)return json({error:'팀 이름을 1~20자로 입력해 주세요.',field:'teamInput'},400);
if(!participantName||participantName.length>30)return json({error:'아이디를 1~30자로 입력해 주세요.',field:'participantInput'},400);
if(typeof password!=='string'||password.length<6||password.length>64)return json({error:'개인 비밀번호는 6~64자로 입력해 주세요.',field:'password'},400);
let t=await db.prepare('SELECT id,salt,hash FROM teams WHERE name=?').bind(name).first();
let member:{id:string,role:string,salt:string,hash:string}|null=null;
if(action==='join'){
if(t)member=await db.prepare('SELECT id,role,salt,hash FROM participants WHERE team=? AND name=?').bind(t.id,participantName).first();
if(!member||await hash(password,member.salt)!==member.hash)return json({error:'로그인 정보가 일치하지 않아요. 처음이라면 위의 ‘멘토 팀 만들기’ 또는 ‘멘티 첫 가입’을 선택해 주세요.'},401);
}else{
const invitationCode=action==='create'?newInvite():typeof data.invitationCode==='string'?data.invitationCode.trim():'';if(action==='create')issuedCode=invitationCode;
if(invitationCode.length<6||invitationCode.length>64)return json({error:'멘토에게 받은 가입 코드를 입력해 주세요.',field:'invitationCode'},400);
if(invitationCode===password)return json({error:'개인 비밀번호는 가입 코드와 다르게 정해 주세요.',field:'password'},400);
const memberId=crypto.randomUUID(),salt=crypto.randomUUID(),digest=await hash(password,salt);
if(action==='create'){
if(t){const existing=await db.prepare('SELECT id FROM participants WHERE team=?').bind(t.id).first();if(existing)return json({error:'이미 등록된 팀이에요. 로그인해 주세요.'},409);if(typeof data.legacyPassword!=='string'||data.legacyPassword.length>64||await hash(data.legacyPassword,t.salt)!==t.hash)return json({error:'기존 팀 기록을 연결하려면 아래에 이전 팀 비밀번호를 입력해 주세요.'},401);if(password===data.legacyPassword)return json({error:'개인 비밀번호는 이전에 공유한 팀 비밀번호와 다르게 정해 주세요.'},400)}
const teamId=t?.id||crypto.randomUUID(),inviteSalt=crypto.randomUUID(),inviteHash=await hash(invitationCode,inviteSalt);
const statements=[];
if(!t)statements.push(db.prepare('INSERT INTO teams(id,name,salt,hash,created) VALUES(?,?,?,?,?)').bind(teamId,name,salt,digest,now));
statements.push(db.prepare("INSERT INTO participants(id,team,name,role,salt,hash) VALUES(?,?,?,'mentor',?,?)").bind(memberId,teamId,participantName,salt,digest),db.prepare('INSERT INTO invitations(team,salt,hash) VALUES(?,?,?)').bind(teamId,inviteSalt,inviteHash));
try{await db.batch(statements)}catch{return json({error:'이미 등록된 팀이에요. 팀 이름을 확인해 주세요.'},409)}
t={id:teamId,salt,hash:digest};member={id:memberId,role:'mentor',salt,hash:digest};
}else{
const invite=t?await db.prepare('SELECT salt,hash FROM invitations WHERE team=?').bind(t.id).first():null;
if(!t||!invite||await hash(invitationCode,invite.salt)!==invite.hash)return json({error:'팀 이름과 가입 코드를 확인해 주세요. 이미 가입했다면 로그인해 주세요.'},401);
try{await db.batch([db.prepare("INSERT INTO participants(id,team,name,role,salt,hash) VALUES(?,?,?,'mentee',?,?)").bind(memberId,t.id,participantName,salt,digest),db.prepare('DELETE FROM invitations WHERE team=?').bind(t.id)])}catch{return json({error:'이미 멘티가 가입했거나 팀 안에 같은 아이디가 있어요. 아이디를 확인해 주세요.'},409)}
member={id:memberId,role:'mentee',salt,hash:digest};
}}
const secret=hex(crypto.getRandomValues(new Uint8Array(32)).buffer);await db.batch([db.prepare('INSERT INTO sessions(token,team,expires,role,participant) VALUES(?,?,?,?,?)').bind(await sha(secret),t!.id,now+7*86400000,member!.role,member!.id),db.prepare('DELETE FROM limits WHERE reset<?').bind(now),db.prepare('DELETE FROM sessions WHERE expires<?').bind(now),db.prepare('DELETE FROM rounds WHERE started<?').bind(now-86400000)]);
return json({current:t!.id,role:member!.role,participantName,invitationCode:issuedCode},200,{'Set-Cookie':`mt_session=${secret}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`})}
if(action==='leave'){if(token)await db.prepare('DELETE FROM sessions WHERE token=?').bind(token).run();return json({ok:true},200,{'Set-Cookie':'mt_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0'})}
if(!session)return json({error:'팀에 다시 입장해 주세요.'},401);
if(action==='invitation'){
if(session.role!=='mentor')return json({error:'멘토만 가입 코드를 발급할 수 있어요.'},403);
const joined=await db.prepare("SELECT id FROM participants WHERE team=? AND role='mentee'").bind(session.team).first();if(joined)return json({error:'멘티가 이미 가입했어요. 개인 비밀번호로 로그인해 주세요.'},409);
const code=newInvite(),salt=crypto.randomUUID();await db.prepare('INSERT INTO invitations(team,salt,hash) VALUES(?,?,?) ON CONFLICT(team) DO UPDATE SET salt=excluded.salt,hash=excluded.hash').bind(session.team,salt,await hash(code,salt)).run();return json({invitationCode:code})}
if(action==='start'){if(data.role!==undefined&&data.role!==session.role)return json({error:'로그인한 역할로만 참여할 수 있어요.'},403);const active=await db.prepare('SELECT id FROM rounds WHERE token=? AND started>? AND score IS NULL').bind(token,now-30000).first();if(active)return json({error:'진행 중인 도전이 있어요. 잠시 후 다시 시작해 주세요.'},409);const id=crypto.randomUUID();await db.prepare('INSERT INTO rounds(id,token,team,role,started) VALUES(?,?,?,?,?)').bind(id,token,session.team,session.role,now).run();return json({round:id,duration:30000})}
if(action==='finish'){if(typeof data.round!=='string'||!Number.isInteger(data.score)||data.score<0||data.score>2400)return json({error:'기록을 확인할 수 없어요.'},400);if(data.clicks!==undefined||data.feverClicks!==undefined){if(!Number.isInteger(data.clicks)||!Number.isInteger(data.feverClicks)||data.clicks<0||data.clicks>1200||data.feverClicks<0||data.feverClicks>1200||data.feverClicks>data.clicks||data.score!==data.clicks+data.feverClicks)return json({error:'점수 계산을 확인할 수 없어요.'},400)}const r=await db.prepare('SELECT role,started,score FROM rounds WHERE id=? AND token=? AND team=?').bind(data.round,token,session.team).first();if(!r)return json({error:'도전 정보를 찾지 못했어요.'},404);if(r.score!==null)return json({ok:true,month:monthOf(r.started)});if(now-r.started<30000||now-r.started>180000)return json({error:'도전 시간이 유효하지 않아요. 다시 도전해 주세요.'},400);const role=r.role==='mentor'?'mentor':'mentee';await db.batch([db.prepare('UPDATE rounds SET score=? WHERE id=? AND score IS NULL').bind(data.score,data.round),db.prepare(`INSERT INTO monthly_scores(team,month,${role},${role}_played) VALUES(?,?,(SELECT score FROM rounds WHERE id=?),1) ON CONFLICT(team,month) DO UPDATE SET ${role}=MAX(monthly_scores.${role},excluded.${role}),${role}_played=1`).bind(session.team,monthOf(r.started),data.round)]);return json({ok:true,month:monthOf(r.started)})}
return json({error:'없는 요청입니다.'},404)}
