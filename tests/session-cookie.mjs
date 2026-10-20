import {readFile,writeFile,unlink} from 'node:fs/promises';
import assert from 'node:assert/strict';
const path=new URL('./cookie-route-under-test.ts',import.meta.url);
await writeFile(path,(await readFile(new URL('../app/api/[action]/route.ts',import.meta.url),'utf8')).replace("import {env} from 'cloudflare:workers';","const env={MODOO_BRIDGE_KEY:'test-only',MENTOR_MASTER_CODE:'test-only',MODOO_API_URL:'https://upstream.test'};"));
const originalFetch=globalThis.fetch;let outgoing;
try{
const {POST}=await import(path.href);
for(const token of ['a'.repeat(64),'']){
 globalThis.fetch=async(url,options)=>{outgoing=options;return Response.json({ok:true},{headers:{'Set-Cookie':`mt_session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800, __cf_bm=upstream; Domain=supabase.co; Path=/; Secure`}})};
 const response=await POST(new Request('https://game.test/api/'+(token?'join':'leave'),{method:'POST',headers:{Origin:'https://game.test'},body:'{}'}));
 const cookie=response.headers.get('set-cookie');
 assert.equal(cookie,`mt_session=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${token?604800:0}`);
 const data=await response.json();assert.equal(data.sessionToken,token||undefined);
 assert.ok(!cookie.includes('supabase.co'));assert.ok(!cookie.includes('__cf_bm'));
}
globalThis.fetch=async(url,options)=>{outgoing=options;return Response.json({current:'test-team'})};
const token='b'.repeat(64);
const state=await POST(new Request('https://game.test/api/state',{headers:{'x-modoo-session':token}}));
assert.equal(state.status,200);assert.equal(outgoing.headers.get('cookie'),'mt_session='+token);
const invalid=await POST(new Request('https://game.test/api/state',{headers:{'x-modoo-session':'invalid'}}));assert.equal(invalid.status,401);
console.log('PASS: combined upstream cookies isolated; login and logout cookies valid for game origin.');
}finally{globalThis.fetch=originalFetch;await unlink(path)}
