import {env} from 'cloudflare:workers';
export async function GET(req:Request){
 const config=env as unknown as Record<string,string>;
 const url=new URL(req.url),action=url.pathname.split('/').pop();
 if(!['state','create','join','enroll','leave','invitation','start','finish'].includes(action||''))return Response.json({error:'없는 요청입니다.'},{status:404});
 const origin=req.headers.get('origin');
 if(origin&&origin!==url.origin)return Response.json({error:'잘못된 요청입니다.'},{status:403});
 try{
 const headers=new Headers({'x-modoo-key':config.MODOO_BRIDGE_KEY,'x-mentor-master':config.MENTOR_MASTER_CODE||'','Content-Type':'application/json'});
 headers.set('cookie',req.headers.get('cookie')||'');
 headers.set('cf-connecting-ip',req.headers.get('cf-connecting-ip')||'anonymous');
 const response=await fetch(config.MODOO_API_URL+'/'+action,{method:req.method,headers,body:req.method==='POST'?await req.text():undefined,signal:AbortSignal.timeout(20000)});
 const resultHeaders=new Headers({'Content-Type':'application/json','Cache-Control':'no-store'});
 const cookie=response.headers.get('set-cookie');if(cookie)resultHeaders.set('set-cookie',cookie);
 return new Response(response.body,{status:response.status,headers:resultHeaders});
 }catch{return Response.json({error:'서버 연결이 원활하지 않아요. 잠시 후 다시 시도해 주세요.'},{status:503})}
}
export const POST=GET;
