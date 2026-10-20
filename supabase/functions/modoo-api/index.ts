import postgres from 'npm:postgres@3.4.5';
import {handle} from './game.ts';
const client=postgres(Deno.env.get('SUPABASE_DB_URL')!,{prepare:false,max:3});
const tables=['teams','participants','invitations','sessions','rounds','monthly_scores','limits'];
function query(q:string){let i=0;return q.replace(/\?/g,()=>'$'+(++i)).replace(/\bMAX\(/g,'GREATEST(').replace(/AS mentorPlayed/g,'AS "mentorPlayed"').replace(/AS menteePlayed/g,'AS "menteePlayed"').replace(/\bcount=count\+1/g,'count=limits.count+1').replace(new RegExp('\\b(FROM|JOIN|INTO|UPDATE) ('+tables.join('|')+')\\b','g'),'$1 modoo.$2')}
class Statement{q:string;args:any[]=[];constructor(q:string){this.q=query(q)}bind(...args:any[]){this.args=args;return this}async first(){return (await client.unsafe(this.q,this.args))[0]||null}async all(){return {results:await client.unsafe(this.q,this.args)}}async run(){return await client.unsafe(this.q,this.args)}}
const DB={prepare:(q:string)=>new Statement(q),batch:(statements:Statement[])=>client.begin(async tx=>{const out=[];for(const s of statements)out.push(await tx.unsafe(s.q,s.args));return out})};
const digest=async(s:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s))),x=>x.toString(16).padStart(2,'0')).join('');
Deno.serve(async req=>{try{
 const key=req.headers.get('x-modoo-key');if(!key||key.length>128)return Response.json({error:'Unauthorized'},{status:401});
 const config=await client`SELECT value FROM modoo.config WHERE key='bridge_hash'`;
 if(!config[0]||await digest(key)!==config[0].value)return Response.json({error:'Unauthorized'},{status:401});
 return await handle(req,{DB,MENTOR_MASTER_CODE:req.headers.get('x-mentor-master')});
}catch(e){console.error('modoo-api',e instanceof Error?e.message:'Unknown error');return Response.json({error:'서버 연결이 원활하지 않아요. 잠시 후 다시 시도해 주세요.'},{status:503})}});
