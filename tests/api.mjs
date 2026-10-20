import {DatabaseSync} from 'node:sqlite';
import {readFile,writeFile,unlink,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
const sql=new DatabaseSync(':memory:');for(const file of (await readdir(new URL('../drizzle/',import.meta.url))).filter(x=>x.endsWith('.sql')).sort())sql.exec(await readFile(new URL('../drizzle/'+file,import.meta.url),'utf8'));
class Statement{constructor(q){this.q=q;this.args=[]}bind(...a){this.args=a;return this}async first(){return sql.prepare(this.q).get(...this.args)||null}async all(){return {results:sql.prepare(this.q).all(...this.args)}}async run(){return sql.prepare(this.q).run(...this.args)}}
globalThis.testEnv={MENTOR_MASTER_CODE:"test-master-only",DB:{prepare:q=>new Statement(q),batch:async statements=>{sql.exec('BEGIN');try{const out=[];for(const s of statements)out.push(await s.run());sql.exec('COMMIT');return out}catch(e){sql.exec('ROLLBACK');throw e}}}};
const file=new URL('./api-under-test.ts',import.meta.url);await writeFile(file,(await readFile(new URL('../supabase/functions/modoo-api/game.ts',import.meta.url),'utf8'))+ '\nexport async function GET(req:Request){return handle(req,(globalThis as any).testEnv)};export const POST=GET;' );
const {GET,POST}=await import(file.href);let time=Date.now();const originalNow=Date.now;Date.now=()=>time;
async function call(action,body,cookie){const req=new Request('https://game.test/api/'+action,{method:body?'POST':'GET',headers:{'Origin':'https://game.test',...(body?{'Content-Type':'application/json'}:{}),...(cookie?{Cookie:cookie}:{})},body:body?JSON.stringify(body):undefined});const res=await(body?POST:GET)(req);return {status:res.status,data:await res.json(),cookie:res.headers.get('Set-Cookie')?.split(';')[0]}}
try{
const create={name:'테스트 팀',participantName:'멘토테스트',password:'mentor-pass',invitationCode:'invite-test',masterCode:'test-master-only'};
assert.equal((await call('create',{...create,masterCode:undefined})).status,403);
assert.equal((await call('create',{...create,masterCode:'wrong'})).status,403);
assert.equal((await call('create',{...create,password:'short'})).status,400);
const one=await call('create',create);assert.equal(one.status,200);assert.equal(one.data.role,'mentor');assert.match(one.data.invitationCode,/^[A-F0-9]{12}$/);create.invitationCode=one.data.invitationCode;
const originalCode=create.invitationCode;const regenerated=await call('invitation',{},one.cookie);assert.equal(regenerated.status,200);create.invitationCode=regenerated.data.invitationCode;assert.notEqual(originalCode,create.invitationCode);assert.equal((await call('enroll',{name:create.name,participantName:'멘티테스트',password:'mentee-pass',invitationCode:originalCode})).status,401);
assert.equal((await call('create',create)).status,409);
assert.equal((await call('enroll',{name:create.name,participantName:'멘티테스트',password:'mentee-pass',invitationCode:'wrong-code'})).status,401);
assert.equal((await call('enroll',{name:create.name,participantName:create.participantName,password:'mentee-pass',invitationCode:create.invitationCode})).status,409);
const two=await call('enroll',{name:create.name,participantName:'멘티테스트',password:'mentee-pass',invitationCode:create.invitationCode,role:'mentor'});assert.equal(two.status,200);assert.equal(two.data.role,'mentee');assert.equal((await call('invitation',{},two.cookie)).status,403);assert.equal((await call('invitation',{},one.cookie)).status,409);assert.notEqual(one.cookie,two.cookie);
assert.equal((await call('enroll',{name:create.name,participantName:'다른멘티',password:'another-pass',invitationCode:create.invitationCode})).status,401);
assert.equal((await call('join',{name:create.name,participantName:create.participantName,password:'mentee-pass'})).status,401);
assert.equal((await call('join',{name:create.name,participantName:create.participantName,password:'invite-test'})).status,401);
const mentorAgain=await call('join',{name:create.name,participantName:create.participantName,password:'mentor-pass'});assert.equal(mentorAgain.status,200);assert.equal(mentorAgain.data.role,'mentor');
const menteeAgain=await call('join',{name:create.name,participantName:'멘티테스트',password:'mentee-pass',role:'mentor'});assert.equal(menteeAgain.status,200);assert.equal(menteeAgain.data.role,'mentee');
assert.equal((await call('state',null,one.cookie)).data.menteeJoined,true);
assert.equal((await call('state',null,two.cookie)).data.participantName,'멘티테스트');
const publicState=await call('state');assert.equal(publicState.data.participantName,null);assert.ok(!JSON.stringify(publicState).includes(create.password));assert.ok(!JSON.stringify(publicState).includes(create.participantName));
assert.equal((await call('start',{role:'mentor'},two.cookie)).status,403);
const r1=await call('start',{role:'mentor'},one.cookie),r2=await call('start',{role:'mentee'},two.cookie);assert.equal(r1.status,200);assert.equal(r2.status,200);
assert.equal((await call('finish',{round:r1.data.round,score:120},one.cookie)).status,400);assert.equal((await call('finish',{round:r1.data.round,score:120},two.cookie)).status,404);
time+=31000;assert.equal((await call('finish',{round:r1.data.round,score:120},one.cookie)).status,200);assert.equal((await call('finish',{round:r2.data.round,score:90},two.cookie)).status,200);
let state=await call('state',null,two.cookie);assert.equal(state.data.teams[0].mentor+state.data.teams[0].mentee,210);assert.equal(state.data.teams[0].mentorPlayed,1);assert.equal(state.data.teams[0].menteePlayed,1);
await call('finish',{round:r1.data.round,score:999},one.cookie);assert.equal((await call('state',null,one.cookie)).data.teams[0].mentor,120);
const next=await call('start',{role:'mentor'},one.cookie);time+=31000;await call('finish',{round:next.data.round,score:80},one.cookie);assert.equal((await call('state',null,two.cookie)).data.teams[0].mentor,120);
const bonus=await call('start',{role:'mentor'},one.cookie);time+=31000;assert.equal((await call('finish',{round:bonus.data.round,score:150,clicks:100,feverClicks:10},one.cookie)).status,400);assert.equal((await call('finish',{round:bonus.data.round,score:900,clicks:600,feverClicks:300},one.cookie)).status,200);
await call('leave',{},one.cookie);assert.equal((await call('start',{role:'mentor'},one.cookie)).status,401);assert.equal((await call('state',null,two.cookie)).data.current,two.data.current);
// A legacy team must be claimed with both the master and its old shared password.
const old=sql.prepare('SELECT salt,hash FROM teams WHERE id=?').get(one.data.current);
sql.prepare('INSERT INTO teams(id,name,salt,hash,created) VALUES(?,?,?,?,?)').run('legacy-id','기존팀',old.salt,old.hash,time);
sql.prepare('INSERT INTO monthly_scores(team,month,mentor,mentee) VALUES(?,?,?,?)').run('legacy-id',new Date(time+9*3600000).toISOString().slice(0,7),77,33);
const claim={...create,name:'기존팀',participantName:'기존멘토',password:'new-private',legacyPassword:'wrong'};
assert.equal((await call('create',claim)).status,401);
const migrated=await call('create',{...claim,legacyPassword:'mentor-pass'});assert.equal(migrated.status,200);assert.equal(migrated.data.current,'legacy-id');
assert.equal((await call('state',null,migrated.cookie)).data.teams.find(t=>t.id==='legacy-id').mentor,77);
assert.equal((await call('join',{name:'기존팀',participantName:'기존멘토',password:'mentor-pass'})).status,401);
assert.equal((await call('join',{name:'기존팀',participantName:'기존멘토',password:'new-private'})).status,200);
// Monthly boundaries use the round's starting month in Korea.
time=Date.parse('2026-10-31T23:59:50+09:00');
const boundary=await call('create',{...create,name:'월경계 팀'});assert.equal(boundary.status,200);
const across=await call('start',{role:'mentor'},boundary.cookie);assert.equal(across.status,200);assert.equal((await call('state',null,boundary.cookie)).data.month,'2026-10');
time+=31000;
const octoberFinish=await call('finish',{round:across.data.round,score:200},boundary.cookie);assert.equal(octoberFinish.status,200);assert.equal(octoberFinish.data.month,'2026-10');
let november=await call('state',null,boundary.cookie);assert.equal(november.data.month,'2026-11');assert.equal(november.data.teams.find(t=>t.id===boundary.data.current).mentor,0);assert.equal(november.data.teams.find(t=>t.id===boundary.data.current).mentorPlayed,0);
assert.equal(sql.prepare('SELECT mentor FROM monthly_scores WHERE team=? AND month=?').get(boundary.data.current,'2026-10').mentor,200);
const novRound=await call('start',{role:'mentor'},boundary.cookie);time+=31000;assert.equal((await call('finish',{round:novRound.data.round,score:40},boundary.cookie)).status,200);
assert.equal((await call('state',null,boundary.cookie)).data.teams.find(t=>t.id===boundary.data.current).mentor,40);
assert.equal((await call('join',{name:'월경계 팀',participantName:create.participantName,password:create.password})).status,200);
await call('finish',{round:across.data.round,score:999},boundary.cookie);assert.equal((await call('state',null,boundary.cookie)).data.teams.find(t=>t.id===boundary.data.current).mentor,40);
console.log('PASS: creation-only master code, single-use invitation, separate passwords, name/role binding, legacy record migration, monthly boundaries and score integrity.');
}finally{Date.now=originalNow;await unlink(file);sql.close()}
