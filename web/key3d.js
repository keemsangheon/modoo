(()=>{
const button=document.getElementById('key'),stage=document.getElementById('stage');
try{
const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0,0);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;button.append(renderer.domElement);renderer.domElement.setAttribute('aria-hidden','true');
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.1,100);camera.position.set(3.8,5.6,6.9);camera.lookAt(0,.5,0);
scene.add(new THREE.HemisphereLight(0xffffff,0xb19a53,2.8));const light=new THREE.DirectionalLight(0xfffdf0,4.5);light.position.set(-3,7,5);light.castShadow=true;light.shadow.mapSize.set(2048,2048);Object.assign(light.shadow.camera,{left:-5,right:5,top:5,bottom:-5});light.shadow.normalBias=.025;light.shadow.bias=-.0004;light.shadow.radius=5;scene.add(light);const fill=new THREE.DirectionalLight(0xffffff,1.7);fill.position.set(5,3,-4);scene.add(fill);
const floor=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShadowMaterial({opacity:.17}));floor.rotation.x=-Math.PI/2;floor.position.y=-.11;floor.receiveShadow=true;scene.add(floor);
const model=new THREE.Group();model.rotation.y=-.23;scene.add(model);
// Continuous rounded-square rings: smooth bevels, tapered walls, gently dished top.
function sculpt(rings){const verts=[],uv=[],idx=[],N=96;for(const [half,y,radius] of rings){for(let i=0;i<N;i++){const quadrant=Math.floor(i/24),angle=quadrant*Math.PI/2+(i%24)/24*Math.PI/2;const cx=[1,-1,-1,1][quadrant]*(half-radius),cz=[1,1,-1,-1][quadrant]*(half-radius);const x=cx+radius*Math.cos(angle),z=cz+radius*Math.sin(angle);verts.push(x,y,z);uv.push(.5+x/2.38,.5-z/2.38)}}for(let j=0;j<rings.length-1;j++)for(let i=0;i<N;i++){let a=j*N+i,b=j*N+(i+1)%N,c=(j+1)*N+i,d=(j+1)*N+(i+1)%N;idx.push(a,c,b,b,c,d)}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(idx);geo.computeVertexNormals();return geo}
const yellow=new THREE.MeshStandardMaterial({color:0xf8d77c,roughness:.48,metalness:.02});const baseMat=new THREE.MeshStandardMaterial({color:0xcaa66a,roughness:.45});const underMat=new THREE.MeshStandardMaterial({color:0x98774b,roughness:.6});
const base=new THREE.Mesh(sculpt([[1.38,-.07,.23],[1.46,-.01,.28],[1.47,.11,.3],[1.43,.18,.29],[.001,.18,.0005]]),baseMat);base.castShadow=true;base.receiveShadow=true;model.add(base);
const seam=new THREE.Mesh(sculpt([[1.32,.17,.24],[1.33,.30,.24],[.001,.30,.0005]]),underMat);model.add(seam);
const cap=new THREE.Group();model.add(cap);
const shell=new THREE.Mesh(sculpt([[1.31,.31,.23],[1.39,.36,.28],[1.41,.44,.3],[1.39,.55,.3],[1.23,1.05,.29],[1.19,1.12,.28],[1.13,1.16,.26]]),yellow);shell.castShadow=true;shell.receiveShadow=true;cap.add(shell);
const texCanvas=document.createElement('canvas');texCanvas.width=texCanvas.height=1024;const ctx=texCanvas.getContext('2d'),texture=new THREE.CanvasTexture(texCanvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();
const character=new Image();
function paint(){
ctx.fillStyle='#f8d77c';ctx.fillRect(0,0,1024,1024);
const artwork=character.complete&&character.naturalWidth?character:null;
if(artwork){const ratio=Math.min(980/artwork.width,980/artwork.height),w=artwork.width*ratio,h=artwork.height*ratio;ctx.drawImage(artwork,(1024-w)/2,(1024-h)/2,w,h)}
texture.needsUpdate=true}
character.onload=()=>paint();character.onerror=()=>console.warn('Character artwork failed to load.');character.src='/*CHUNSIK_IMAGE*/';paint();
const top=new THREE.Mesh(sculpt([[1.13,1.16,.26],[1.08,1.16,.25],[.90,1.145,.22],[.65,1.12,.18],[.30,1.105,.1],[.001,1.10,.0005]]),new THREE.MeshStandardMaterial({map:texture,roughness:.48,metalness:0}));top.castShadow=true;top.receiveShadow=true;cap.add(top);
function resize(){const w=stage.clientWidth,h=stage.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.set(3.8,5.6,6.9).multiplyScalar(w<420?1.13:1);camera.lookAt(0,.5,0);camera.updateProjectionMatrix()}new ResizeObserver(resize).observe(stage);resize();
let previous=performance.now();function draw(now){requestAnimationFrame(draw);const dt=Math.min((now-previous)/1000,.05);previous=now;const aim=window.keyAim||{x:0,y:0};const k=1-Math.exp(-dt*12);const turn=window.keyTurn||{yaw:-.23,pitch:0,auto:false};if(turn.auto&&document.body.dataset.screen==='home'&&!document.hidden)turn.yaw+=dt*.22;model.rotation.y+=(turn.yaw+aim.x*.12-model.rotation.y)*k;model.rotation.x+=(turn.pitch+aim.y*.08-model.rotation.x)*k;const target=button.classList.contains('pressed')?-.20:0;cap.position.y+=(target-cap.position.y)*(1-Math.exp(-dt*34));const glow=window.keyFever ? .28 : 0;yellow.emissive.setHex(0xff9a13);yellow.emissiveIntensity+=(glow-yellow.emissiveIntensity)*k;top.material.emissive.setHex(0xff9a13);top.material.emissiveIntensity+=(glow-top.material.emissiveIntensity)*k;renderer.render(scene,camera)}requestAnimationFrame(draw);
}catch(err){button.classList.add('fallback');console.warn('3D renderer unavailable; using button fallback.',err)}
})();
