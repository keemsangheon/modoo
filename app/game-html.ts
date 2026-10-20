export const gameHTML="<!doctype html><html lang=\"ko\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\"><meta name=\"theme-color\" content=\"#fff9dc\"><link rel=\"icon\" href=\"data:, \"><title>ëª¨ë‘ì˜ ë©˜í† ë§ Â· ìš°ë¦¬ íŒ€ì˜ 30ì´ˆ</title><style>:root{--ink:#24251f;--muted:#858477;--yellow:#ffde00;--line:#eee9d6}*{box-sizing:border-box}[hidden]{display:none!important}body{margin:0;background:linear-gradient(150deg,#fffdf5,#fff8d4);color:var(--ink);font-family:'Apple SD Gothic Neo','Malgun Gothic',Arial,sans-serif;min-height:100svh}button,input{font:inherit}button,a{touch-action:manipulation}button{cursor:pointer;color:inherit}button:disabled{cursor:default;opacity:.55}button:focus-visible,a:focus-visible,summary:focus-visible{outline:3px solid #9a85d1;outline-offset:5px}button{border:0}header{max-width:1240px;margin:auto;padding:25px 32px;display:flex;align-items:center;justify-content:space-between}.brand{font-size:22px;font-weight:900;letter-spacing:-1.5px;background:none;padding:0}.headtools{display:flex;align-items:center;gap:14px}.headnote{font-size:12px;color:var(--muted)}.sound{width:38px;height:38px;border-radius:50%;background:#ffffffc0;font-size:17px}.sound[aria-pressed=true]{background:var(--yellow)}main{max-width:1160px;margin:auto;padding:20px 32px 35px}.home-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:60px;padding:35px 10px 20px}.eyebrow{font-size:12px;color:#9b8c42;font-weight:650;letter-spacing:.3px}h1{font-size:58px;letter-spacing:-3px;line-height:1.2;margin:16px 0 22px}h1 span{white-space:nowrap}p{line-height:1.8}.lead{font-size:16px;color:#77786e;margin-bottom:27px}.raised{background:linear-gradient(#fff16c,#ffdc00);border:1px solid #e3c800;border-top:2px solid #fff8a6;border-radius:17px;box-shadow:0 7px 0 #c6aa11,0 9px 0 #bda41f,0 15px 22px #a38c2230,inset 0 1px 2px #fffad4;padding:17px 25px;font-weight:750;font-size:16px;transition:transform .1s,box-shadow .1s;min-height:56px}.raised:hover:not(:disabled){filter:brightness(1.025);transform:translateY(-2px)}.raised:active:not(:disabled){transform:translateY(6px);box-shadow:0 1px 0 #c6aa11,0 3px 0 #bda41f,0 5px 12px #a38c2220}.raised:disabled{transform:translateY(3px);box-shadow:0 3px 0 #c6aa11}.secondary{background:#fffef9;border:1px solid #e9e4d0;border-radius:14px;padding:15px 20px;font-size:14px;font-weight:600;min-height:48px}.secondary:hover{background:#f7f3e4}.actions{display:flex;flex-direction:column;gap:18px;max-width:340px}.actions .secondary{border:0;background:transparent;padding:9px}.mini-note{font-size:11px;color:#999584;margin:18px 0}.visual{position:relative;min-width:0}.stage{height:360px;width:100%;position:relative;touch-action:manipulation}.key{width:100%;height:100%;position:absolute;inset:0;background:none;border:0;padding:0;touch-action:manipulation;-webkit-tap-highlight-color:transparent;user-select:none}.key canvas{width:100%;height:100%;display:block}.key.fallback{inset:70px auto auto 50%;width:220px;height:185px;transform:translateX(-50%);border-radius:35px;background:linear-gradient(140deg,#fff078,#ffda00);box-shadow:0 16px #c4a800,0 24px #38392f,0 40px 26px #b9a75d45}.key.fallback:after{content:'ëª¨ë‘ì˜ ë©˜í† ë§';font-size:28px;letter-spacing:-2px;font-weight:bold}.key.fallback.pressed{margin-top:9px;box-shadow:0 7px #c4a800,0 15px #38392f,0 30px 26px #b9a75d45}.visual-hint{text-align:center;font-size:12px;color:#9b9479;margin:0}.home-bottom{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:38px}.panel{background:#ffffffb8;border:1px solid #f0ebd6;border-radius:22px;overflow:hidden}.panel summary{list-style:none;cursor:pointer;padding:21px 24px;font-size:15px;font-weight:750;display:flex;justify-content:space-between}.panel summary::-webkit-details-marker{display:none}.panel summary:after{content:'ï¼‹';color:#9c9475}.panel[open] summary:after{content:'âˆ’'}.panel-content{padding:0 24px 22px}.steps{display:flex;flex-direction:column;gap:18px}.step{display:flex;gap:15px;align-items:center;font-size:13px;color:#858477;line-height:1.6}.step strong{display:block;font-size:14px;color:#37382f;margin-bottom:3px}.step-icon{width:36px;height:36px;flex-shrink:0;display:grid;place-items:center;border-radius:11px;background:linear-gradient(135deg,#fff4a0,#ffdc3c);box-shadow:2px 3px #d4b53a;transform:rotate(-6deg);font-weight:750;color:#6d5e1c}.step:nth-child(2) .step-icon{background:linear-gradient(#e8dfff,#bca7ef);box-shadow:2px 3px #9e86ce;color:#695184;transform:rotate(6deg)}.step:nth-child(3) .step-icon{background:linear-gradient(#ddf3e2,#a9d6b3);box-shadow:2px 3px #87b594;color:#477253}.rank-note{font-size:11px;line-height:1.7;color:#999685;margin:0 0 9px}.rank-row{display:flex;gap:12px;align-items:center;padding:14px 0;border-top:1px solid #f0ecdc;font-size:13px}.rank-row .num{width:25px;font-size:17px;color:#a29a7d}.rank-row .name{flex:1;overflow-wrap:anywhere}.rank-row small{display:block;font-size:10px;color:#969284;margin-top:4px}.rank-row.me{background:#fff6be;border-radius:10px;padding:14px 10px;margin:0 -10px}.empty{padding:14px 0;font-size:13px;line-height:1.8;color:#999586}.back{background:none;font-size:13px;color:#8b8777;padding:8px 0}.auth{max-width:460px;margin:0 auto;padding-top:8px}.auth-card{margin-top:15px;background:#fffef8;border:1px solid #eee8d2;border-radius:27px;padding:32px}.auth h2{font-size:30px;letter-spacing:-1.5px;margin:12px 0}.auth p{font-size:13px;color:#8b887b}.tabs{display:flex;background:#f3f0e2;border-radius:12px;padding:4px;margin:23px 0}.tabs button{flex:1;padding:11px 5px;background:none;border-radius:9px;font-size:13px}.tabs button.active{background:#fff;box-shadow:0 2px 7px #00000008;font-weight:bold}label,legend{font-size:13px;font-weight:650;display:block;margin:19px 0 8px}input{width:100%;padding:14px;border-radius:12px;border:1px solid #e7e1cb;background:white;font-size:16px;min-width:0}input:focus{outline:2px solid #d5bd38;outline-offset:2px}fieldset{border:0;margin:0;padding:0}.roles{display:flex;gap:11px}.role-choice{flex:1;cursor:pointer;margin:0}.role-choice input{position:absolute;width:1px;height:1px;opacity:0}.role-choice span{display:block;text-align:center;border:1px solid #e8e2ce;border-radius:12px;padding:13px;background:#fff;font-size:14px}.role-choice input:checked+span{background:#fff3a3;border-color:#d9c033;box-shadow:0 2px #e1c839}.role-choice input:focus-visible+span{outline:3px solid #9a85d1}.error{font-size:12px;line-height:1.7;color:#ac543c;min-height:20px;margin:14px 0}.auth .raised{width:100%;font-size:15px}.auth-foot{text-align:center;font-size:11px;color:#99917d;margin:24px 0 0}.game-heading{display:flex;justify-content:space-between;align-items:center;gap:15px;margin:0 0 20px}.team-title{font-size:27px;letter-spacing:-1px;margin:7px 0;overflow-wrap:anywhere}.role-tag{font-size:11px;background:#fff0a4;border-radius:30px;padding:6px 10px;white-space:nowrap}.game-grid{display:grid;grid-template-columns:minmax(0,1fr) 295px;gap:45px;align-items:start}.play-area{text-align:center;min-width:0}.scoreboard{display:flex;justify-content:center;gap:35px;padding-top:15px}.metric{min-width:85px}.metric small{display:block;font-size:11px;color:#99937c;margin-bottom:5px}.metric strong{font-size:36px;font-variant-numeric:tabular-nums;letter-spacing:-1px}.metric.time strong{font-size:27px}.divider{width:1px;height:33px;background:#e8dfbf;align-self:center}.game-slot .stage{height:330px}.play-hint{font-size:11px;color:#a49a7b;margin:0 0 16px}.play-area .raised{min-width:270px}.progress{height:3px;border-radius:3px;background:#e6dfc5;width:235px;margin:23px auto 0;overflow:hidden}.progress i{display:block;width:100%;height:100%;background:#b39b35}.status{font-size:12px;color:#88816d;min-height:19px;margin:12px 0}.team-card{background:#fffef8;border:1px solid #f0ead8;border-radius:22px;padding:23px}.team-card h3{font-size:16px;margin:0 0 20px}.person{display:flex;justify-content:space-between;gap:12px;font-size:13px;margin:18px 0;align-items:center}.person span{color:#8b887c}.person strong{font-size:17px}.person strong.wait{font-size:11px;font-weight:500;color:#a69f89}.total{padding-top:19px;border-top:1px solid #ece7d7;display:flex;align-items:center;justify-content:space-between;font-size:13px}.total b{font-size:29px;letter-spacing:-1px}.partner-note{background:#faf5df;padding:12px;border-radius:11px;font-size:11px;color:#93886a;line-height:1.7;margin:17px 0 0}.team-actions{display:flex;gap:8px;margin-top:14px}.team-actions button{flex:1;padding:11px 5px;border-radius:10px;background:#f5f1e4;font-size:11px}.game-ranking{margin-top:16px}.game-ranking .rank-list{max-height:250px;overflow:auto}footer{max-width:1160px;margin:0 auto;padding:18px 32px 25px;font-size:10px;color:#aaa18a;display:flex;justify-content:space-between;gap:20px}.linkbtn{background:none;color:#9a917b;text-decoration:underline;padding:0;font-size:11px}.notice{font-size:11px;text-align:center;color:#9f9276;margin-top:14px}dialog{border:0;border-radius:25px;background:#fffef8;padding:29px;width:min(430px,calc(100% - 32px));box-shadow:0 25px 100px #00000020;color:var(--ink)}dialog::backdrop{background:#28251466;backdrop-filter:blur(5px)}dialog h2{font-size:25px;letter-spacing:-1px;margin:10px 0}dialog p{font-size:13px;color:#918770;line-height:1.7}#result{text-align:center}.result-score{font-size:70px;font-weight:bold;letter-spacing:-4px;margin:20px 0 8px}.result-score small{font-size:17px;letter-spacing:0}.result-team{background:#fff6cb;border-radius:13px;padding:13px;margin:16px 0;font-size:14px}.result-buttons{display:flex;flex-direction:column;gap:18px;margin-top:25px}.result-buttons .raised{font-size:14px}.close{float:right;background:none;font-size:23px}.changing{display:flex;gap:10px;margin-top:20px}.changing button{flex:1}body.playing .game-ranking,body.playing .team-actions{visibility:hidden}#milestone{position:absolute;top:0;left:0;right:0;font-size:16px;font-weight:bold;color:#8b7734;pointer-events:none}#fx{position:fixed;inset:0;pointer-events:none;overflow:hidden;perspective:800px;z-index:9}.particle{position:absolute;width:13px;height:13px;transform-style:preserve-3d}.particle i{position:absolute;inset:0;background:var(--color);border:1px solid #ffffff66}.particle i:nth-child(1){transform:translateZ(6px)}.particle i:nth-child(2){transform:rotateY(90deg) translateZ(6px);filter:brightness(.75)}.particle i:nth-child(3){transform:rotateX(90deg) translateZ(6px);filter:brightness(1.15)}.particle i:nth-child(4){transform:rotateY(180deg) translateZ(6px)}.particle i:nth-child(5){transform:rotateY(-90deg) translateZ(6px);filter:brightness(.75)}.particle i:nth-child(6){transform:rotateX(-90deg) translateZ(6px);filter:brightness(1.15)}\n@media(max-width:900px){.home-grid{gap:20px}.home-grid h1{font-size:47px}.game-grid{gap:23px;grid-template-columns:minmax(0,1fr) 260px}.scoreboard{gap:19px}.metric{min-width:70px}.game-slot .stage{height:300px}}\n@media(max-width:650px){header{padding:18px 20px}.brand{font-size:20px}.headnote{display:none}main{padding:8px 20px 25px}.home-grid{display:flex;flex-direction:column;gap:0;padding:10px 0;text-align:center}.home-copy{display:contents}.home-copy .eyebrow{order:0}.home-grid h1{order:1;font-size:38px;letter-spacing:-2px;margin:12px 0}.lead{order:2;font-size:13px;margin:0}.visual{order:3;width:100%}.stage{height:245px}.visual-hint{display:none}.actions{order:4;width:100%;max-width:360px;gap:14px}.mini-note{order:5;margin:10px 0 0;font-size:10px}.home-bottom{grid-template-columns:1fr;gap:13px;margin-top:23px}.panel summary{padding:19px 20px;font-size:14px}.panel-content{padding:0 20px 20px}.auth{padding-top:0}.auth-card{padding:25px 22px;margin-top:10px}.auth h2{font-size:28px}.game-heading{margin-bottom:9px;gap:8px}.team-title{font-size:21px;margin:4px 0;max-width:250px}.game-heading .eyebrow{font-size:10px}.game-heading .back{font-size:12px}.game-grid{display:flex;flex-direction:column;gap:20px}.play-area,.game-aside{width:100%}.scoreboard{padding-top:8px;gap:25px}.metric strong{font-size:32px}.metric.time strong{font-size:24px}.metric small{font-size:10px}.game-slot .stage{height:clamp(165px,34svh,285px)}.play-hint{font-size:10px;margin:0 0 12px}.play-area .raised{width:100%;min-width:0;padding:15px;font-size:15px;min-height:52px}.progress{margin-top:21px}.status{font-size:11px;margin:10px 0 0}.team-card{padding:19px}.team-card h3{font-size:14px;margin-bottom:12px}.person{display:inline-flex;width:calc(50% - 7px);gap:6px;margin:6px 0 14px;justify-content:flex-start;font-size:12px}.person+.person{margin-left:8px}.person strong{font-size:15px}.person strong.wait{font-size:10px}.total{padding-top:13px}.total b{font-size:24px}.partner-note{font-size:11px;margin-top:12px}.game-ranking{margin-top:13px}footer{padding:15px 20px 22px;font-size:9px;line-height:1.7}body[data-screen=game] footer{margin-top:0}.game-summary{display:block!important;background:#fff9de;border-radius:10px;padding:9px 12px;margin:12px 0 0;font-size:11px;color:#8a7b4d}.game-summary b{color:#514926}body.playing .game-aside{display:none}body.playing footer{display:none}}\n@media(max-width:650px) and (max-height:710px){body[data-screen=game] header{padding-top:10px;padding-bottom:10px}.game-heading{margin-bottom:4px}.game-slot .stage{height:clamp(135px,29svh,205px)}.game-summary{padding:7px 10px;margin-top:8px}.scoreboard{padding-top:4px}.play-hint{margin-bottom:8px}}\n@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}\n\n/* Start first, team creation secondary; authentication is a dialog. */\n.actions #create{font-size:12px;color:#968d73;line-height:1.7}.actions #create strong{color:#59543f;margin-left:5px;font-weight:650;text-decoration:underline;text-underline-offset:4px}\n.auth{width:min(460px,calc(100% - 32px));max-width:460px;max-height:calc(100dvh - 32px);overflow-y:auto;margin:auto;padding:24px;border-radius:26px;background:#fffef8;overscroll-behavior:contain}.auth .auth-card{margin:0;padding:12px 8px 8px;border:0;border-radius:0;background:none}.auth .close{position:absolute;right:18px;top:13px;width:32px;height:32px;color:#8b8675}.auth .eyebrow{font-size:11px}.auth h2{margin:12px 0;font-size:29px}.auth p{margin:0 0 10px}.auth label,.auth legend{margin-top:17px}.auth .role-choice{margin:0}.auth .error{margin-top:12px}.auth-switch{margin-top:25px;text-align:center}.auth-switch .linkbtn{font-size:12px}.auth .auth-foot{margin:18px 0 0;font-size:10px}.auth::backdrop{background:#302b1959;backdrop-filter:blur(7px)}\n@media(max-width:650px){.auth{padding:23px 18px;max-height:calc(100dvh - 24px)}.auth .auth-card{padding:8px 3px}.auth h2{font-size:27px}.actions #create{font-size:12px;padding:8px 3px}.auth input{padding:12px}.auth .role-choice span{padding:11px}.auth .raised{font-size:14px;padding:14px;min-height:50px}}\n\n/* Tap receipts originate at the pointer; last five seconds earn double points. */\n#tapEffects{position:absolute;inset:0;pointer-events:none;z-index:5;overflow:visible}.tap-point{position:absolute;font:900 35px Arial,sans-serif;line-height:1;color:#fffdf0;-webkit-text-stroke:1.2px #8f711b;text-shadow:0 3px 0 #977522,0 5px 9px #6d520044;transform:translate(-50%,-50%);pointer-events:none;will-change:transform,opacity}.tap-point.double{font-size:43px;color:#fff2a1;-webkit-text-stroke:1.3px #b85d15;text-shadow:0 3px 0 #bd6216,0 0 18px #ffa11f88}#feverBadge{position:absolute;top:4px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:10px;white-space:nowrap;padding:8px 14px;border-radius:30px;background:linear-gradient(140deg,#ffab36,#ffdf4a);border:1px solid #fff4bb;box-shadow:0 3px 0 #c98229,0 6px 24px #eea82b33;color:#683600;pointer-events:none;z-index:6}#feverBadge span{font-size:11px;font-weight:850;letter-spacing:1px}#feverBadge b{font-size:21px}#feverBadge small{font-size:11px;font-weight:bold;border-left:1px solid #c5844544;padding-left:10px}.stage:before{content:'';position:absolute;inset:12% 10%;border-radius:50%;background:radial-gradient(ellipse,#ffbc4266,transparent 67%);opacity:0;transition:opacity .3s;pointer-events:none}.fever .stage:before{opacity:1}.fever .scoreboard #score{color:#b96219}.fever .progress i{background:linear-gradient(90deg,#ff922c,#ffca38)}.fever #milestone{top:auto;bottom:8px;color:#a86d21;font-size:14px}.fever #start{background:linear-gradient(#ffe57b,#ffbb31);border-color:#dfa533;box-shadow:0 5px 0 #c78b24,0 12px 22px #e3a22630;color:#76420b;opacity:1}.result-breakdown{margin:0 0 16px!important;font-size:12px!important;color:#aa8643!important}@media(max-width:650px){.tap-point{font-size:31px}.tap-point.double{font-size:37px}#feverBadge{padding:5px 11px;gap:8px;top:0}#feverBadge span{font-size:9px}#feverBadge b{font-size:17px}#feverBadge small{font-size:10px}.play-hint{font-size:10px}}@media(prefers-reduced-motion:reduce){.tap-point{will-change:auto}.stage:before{transition:none}}\n\n/* Softer play space, with tactile accents around the key. */\nbody{background:radial-gradient(ellipse at 82% 17%,#fff1ae88,transparent 45%),linear-gradient(145deg,#fffdf0,#fff8d9 60%,#fff7e6);color:#3a392c}.brand{letter-spacing:-1.6px}.home-grid{padding-top:28px;gap:40px}.home-grid h1{font-weight:900;letter-spacing:-3.6px;line-height:1.23}.highlight{position:relative;display:inline-block;isolation:isolate}.highlight:before{content:'';position:absolute;left:-6px;right:-8px;bottom:4px;height:23px;background:#ffdf4c;z-index:-1;border-radius:48% 35% 44% 25%;transform:rotate(-3deg)}.highlight i{position:absolute;right:-37px;top:-3px;font-size:31px;font-style:normal;color:#b7a0d7;transform:rotate(12deg)}.lead{color:#8c8469;font-size:15px}.play-chips{display:flex;gap:8px;margin:0 0 15px}.play-chips span{background:#fff5bc;color:#9e8640;border-radius:20px;padding:7px 12px;font-size:11px;font-weight:600;transform:rotate(-2deg)}.play-chips span+span{background:#eee6fb;color:#9582ad;transform:rotate(2deg)}.visual{isolation:isolate}.play-orbit{position:absolute;inset:0;pointer-events:none;z-index:-1}.play-orbit:before{content:'';position:absolute;inset:14% 1% 16%;border-radius:45% 55% 55% 40%;background:linear-gradient(130deg,#fff1ab88,#ffe7c033);transform:rotate(-13deg)}.orb{position:absolute;border-radius:50%;box-shadow:inset -5px -5px 8px #0000000e,inset 3px 3px 5px #ffffff99,3px 7px 15px #00000008}.orb.mint{width:39px;height:39px;left:4%;top:28%;background:radial-gradient(circle at 28% 22%,#efffe5,#b7d5ad 72%,#9cbd94)}.orb.lilac{width:25px;height:25px;right:4%;top:64%;background:radial-gradient(circle at 28% 22%,#f6eaff,#c2abdd 72%,#a890c3)}.orbit-star{position:absolute;right:10%;top:12%;font-size:46px;color:#cfb7e5;text-shadow:2px 3px #a78bc2;transform:rotate(14deg)}.orbit-heart{position:absolute;left:15%;bottom:12%;font-size:27px;color:#eeb49b;text-shadow:2px 3px #d69b82;transform:rotate(-18deg)}.bubble-note{position:absolute;top:9%;left:2%;background:#fffdf6;border:1px solid #f2e7c7;padding:10px 14px;border-radius:20px 20px 20px 4px;transform:rotate(-8deg);font-size:11px;color:#9a8a61;box-shadow:0 4px 0 #efe4c744}.rotation-tools{display:flex;justify-content:center;gap:7px;margin:14px 0 0;position:relative;z-index:2}.rotation-tools button{background:#fffdf2;border:1px solid #eee5c6;padding:8px 11px;border-radius:20px;color:#a1946b;font-size:10px;box-shadow:0 2px 0 #eae0bd55;min-height:34px}.rotation-tools button[aria-pressed=true]{background:#fff2af;color:#8d773c}.key{cursor:grab;touch-action:none}.key.rotating{cursor:grabbing}.panel{border:1px solid #f0e6ca;background:#fffef7dc;border-radius:26px;box-shadow:0 5px 0 #eee3c340}.panel summary{color:#736a50}.panel summary:after{width:23px;height:23px;display:grid;place-items:center;background:#fff4c3;border-radius:50%;font-size:14px;margin-top:-2px}.step strong{color:#776a4f}.step{color:#a3977c}.team-card{border-radius:26px;background:#fffef8;box-shadow:0 5px 0 #eee3c340}.team-card h3{color:#8c7951}.partner-note{background:#f5efdf;color:#a38f6b;border-radius:15px}.auth{background:#fffef5;border-radius:30px}.role-choice span{border-radius:16px}.raised{border-radius:20px}.secondary{border-radius:18px}.status{color:#aa9463}.scoreboard .metric small{color:#af9a71}.team-title{color:#6c6043}.role-tag{background:#eae4f4;color:#9480ac}footer{color:#b3a484}\n@media(prefers-reduced-motion:no-preference){.orb.mint{animation:soft-drift 5s ease-in-out infinite}.orbit-star{animation:soft-drift 6s ease-in-out infinite reverse}.orb.lilac{animation:soft-drift 4s ease-in-out infinite}.panel{transition:box-shadow .2s,transform .2s}.panel:hover{box-shadow:0 7px 0 #eee3c350;transform:translateY(-2px)}}@keyframes soft-drift{50%{translate:0 -9px}}\n@media(max-width:650px){.home-grid{padding-top:8px;gap:0}.home-grid h1{font-size:39px;letter-spacing:-2.3px;margin-bottom:16px}.highlight:before{height:16px;bottom:2px}.highlight i{font-size:23px;right:-26px;top:-2px}.play-chips{order:2;margin:0 0 12px;justify-content:center}.lead{order:2;font-size:12px}.visual{margin:0 0 19px}.stage{height:242px}.rotation-tools{margin:0;gap:8px}.rotation-tools button{font-size:10px;padding:6px 10px}.play-orbit:before{inset:12% 5% 12%}.bubble-note{top:5%;left:2%;font-size:9px;padding:8px 10px}.orb.mint{width:26px;height:26px;left:5%;top:40%}.orbit-star{font-size:29px;right:9%;top:9%}.orb.lilac{width:18px;height:18px;right:3%;top:57%}.orbit-heart{font-size:21px;bottom:16%;left:9%}.panel{border-radius:22px}.home-bottom{margin-top:20px}.team-title{font-size:21px}}\n\n/* Warm custard and caramel accents for the cat keycap. */\n:root{--ink:#4a3528;--yellow:#f8c34f}body{color:#4a3528;background:radial-gradient(ellipse at 80% 20%,#ffe8a877,transparent 48%),linear-gradient(145deg,#fffbee,#fff6d6 65%,#fff1df)}.highlight:before{background:#f8ca64}.highlight i{color:#d5a579}.raised{background:linear-gradient(#ffe294,#f7bf43);border-color:#dfac40;border-top-color:#fff0bf;box-shadow:0 7px 0 #c99235,0 9px 0 #b98131,0 15px 22px #a38c2230,inset 0 1px 2px #fffad4;color:#60401f}.bubble-note{color:#97683d;background:#fffaf0;border-color:#efdbb4}.play-chips span+span{background:#f5e5d3;color:#9a7653}.orbit-star{color:#ebbb74;text-shadow:2px 3px #cc9b59}.key.fallback{background:linear-gradient(#ffdb80,#f0b34d)}.key.fallback:after{content:'â€¢ á´¥ â€¢';font-size:48px;color:#553721}.role-tag{background:#f5e5d3;color:#94704d}\n\n/* Original supplied Chunsik art on a cream key top; fallback uses the same artwork. */\n.key-fallback-art{display:none}.key.fallback .key-fallback-art{display:block;width:85%;height:85%;object-fit:contain;margin:auto;pointer-events:none}.key.fallback:after{content:none}.key.fallback{background:linear-gradient(#fff3cd,#ffe4a2)}.bubble-note{transform:rotate(-6deg);font-weight:650}.visual-hint{color:#98764f}\n\n/* One centered stage, with the primary action immediately underneath. */\n.home-grid{display:flex;flex-direction:column;gap:0;padding:12px 0 22px;text-align:center}.home-copy{display:contents}.home-grid .challenge-label{order:0;font-size:15px;font-weight:750;line-height:1.5;letter-spacing:-.35px;margin:0 0 12px;color:#82643f}.home-grid .play-chips{order:1;justify-content:center;margin:0 0 2px}.home-grid .visual{order:2;width:min(100%,620px);margin:0 auto 20px}.home-grid .stage{height:390px}.home-grid .visual-hint{margin:0 0 9px;font-size:12px}.home-grid .rotation-tools{margin-top:0}.home-grid .lead{order:3;font-size:13px;line-height:1.7;margin:0 0 20px;color:#8b795c}.home-grid .actions{order:4;width:min(100%,360px);margin:0 auto;gap:14px}.home-grid .mini-note{order:5;margin:13px 0 0}.home-bottom{max-width:900px;margin:12px auto 0}.play-orbit:before{inset:14% 7% 17%;background:radial-gradient(ellipse,#ffe5a977,#fff3ce11 72%)}.bubble-note{left:7%;top:15%}.orbit-star{right:13%;top:15%}.orb.mint{left:9%;top:47%}.orbit-heart{left:16%;bottom:20%}.key.fallback{background:#f8d77c}\n@media(max-width:650px){.home-grid{padding:8px 0 14px}.home-grid .challenge-label{font-size:14px;letter-spacing:-.3px;margin:0 0 10px}.home-grid .visual{width:100%;margin:0 0 16px}.home-grid .stage{height:280px}.home-grid .visual-hint{display:block;font-size:10px;margin:0 0 9px}.home-grid .lead{font-size:12px;margin:0 0 17px}.home-grid .mini-note{font-size:10px}.home-grid .play-chips{margin-bottom:0}.bubble-note{left:0;top:9%;font-size:9px}.orbit-star{right:5%;top:15%}.orb.mint{left:4%;top:46%}.home-bottom{margin-top:10px}}\n\n.home-grid .challenge-label{font-size:23px;letter-spacing:-.6px;margin-bottom:14px}@media(max-width:650px){.home-grid .challenge-label{font-size:21px;letter-spacing:-.5px;margin-bottom:12px}}\n\n/* Authentication content flows in separate rows, including long Korean labels. */\n.auth{position:fixed;padding:30px 26px 26px;line-height:1.5}.auth .auth-card{padding:10px 0 0;min-width:0}.auth .close{float:none;top:12px;right:12px;width:36px;height:36px;line-height:36px;padding:0;z-index:1}.auth .eyebrow{display:block;padding-right:30px;line-height:1.7;word-break:keep-all;overflow-wrap:anywhere}.auth h2{font-size:28px;line-height:1.35;margin:12px 0;word-break:keep-all;overflow-wrap:anywhere}.auth #authDescription{line-height:1.8;margin:0 0 22px;word-break:keep-all;overflow-wrap:anywhere}.auth #teamForm{display:grid;grid-template-columns:minmax(0,1fr);gap:10px}.auth #teamForm>label{margin:7px 0 0;line-height:1.5}.auth #teamForm>input{height:50px;padding:12px 14px;line-height:1.5;font-size:16px}.auth fieldset{min-width:0;margin:10px 0 0;padding:0}.auth legend{float:none;width:100%;margin:0;padding:0 0 10px;line-height:1.5}.auth .roles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.auth .role-choice{position:relative;min-width:0;margin:0}.auth .role-choice input{width:1px;height:1px;padding:0;border:0;margin:0;overflow:hidden;clip-path:inset(50%)}.auth .role-choice span{display:flex;align-items:center;justify-content:center;min-height:48px;padding:12px;line-height:1.5}.auth #formError{margin:0;line-height:1.7;overflow-wrap:anywhere}.auth #formError:empty{display:none}.auth #submitTeam{width:100%;margin:12px 0 8px;line-height:1.5;white-space:normal;word-break:keep-all}.auth-switch{margin-top:24px}.auth-switch .linkbtn{white-space:normal;line-height:1.8;word-break:keep-all}.auth .auth-foot{line-height:1.8;word-break:keep-all;overflow-wrap:anywhere}.team-actions{justify-content:flex-end}\n@media(max-width:650px){.auth{padding:28px 22px 24px}.auth h2{font-size:26px}.auth #authDescription{font-size:12px}.auth #submitTeam{font-size:14px}.auth .auth-foot{font-size:11px}}\n\n.auth-field{display:grid;gap:8px;min-width:0}.auth .auth-field label{margin:7px 0 0;line-height:1.5}.auth-field select{font:inherit;font-size:14px;min-height:50px;max-width:100%;width:100%;padding:12px;border:1px solid #e7e1cb;border-radius:12px;background:#fff;color:#60472c}.auth-field small{font-size:11px;line-height:1.7;color:#9a8566;word-break:keep-all}.auth-field input{height:50px;font-size:16px}.auth-field select:focus-visible{outline:2px solid #d5bd38;outline-offset:2px}\n\n.auth-switch{display:flex;flex-direction:column;gap:10px}.auth-switch .linkbtn{min-height:32px}.auth #legacyField{font-size:11px;line-height:1.7;color:#978160;margin-top:8px}.auth #legacyField summary{cursor:pointer}.auth #legacyField p{font-size:11px;margin:10px 0}.invite-notice{margin:14px 0;padding:12px 14px;background:#fff2bd;border-radius:14px;color:#8e703d;font-size:12px;line-height:1.8;overflow-wrap:anywhere}.role-tag{display:inline-block;max-width:220px;overflow-wrap:anywhere;line-height:1.5}\n\n.auth .auth-switch{display:grid;grid-template-columns:.8fr 1.2fr 1.1fr;gap:4px;margin:5px 0 23px;background:#f4eddc;border-radius:14px;padding:5px}.auth-switch button{font-size:12px;padding:11px 4px;line-height:1.5;border-radius:10px;background:transparent;color:#978365;word-break:keep-all}.auth-switch button[aria-pressed=true]{background:#fffdf6;color:#684b25;box-shadow:0 2px 5px #80652916;font-weight:750}.auth .auth-card>.eyebrow{display:none}.auth #showPassword{float:right;background:none;color:#8d733f;font-size:12px;padding:0 4px}.auth [aria-invalid=true]{border-color:#c76442;background:#fff7f2}.auth #formError{color:#ac543c;line-height:1.7;margin:8px 0 0;overflow-wrap:anywhere}.invite-notice strong{display:block;font-size:18px;letter-spacing:1.5px;user-select:all;margin:6px 0}.invite-notice button{padding:9px 12px;border-radius:10px;background:#fffdf3;color:#826333;font-size:12px}.invite-notice small{display:block;font-size:11px;line-height:1.7;margin-top:6px}.auth .close{top:7px;right:8px}.auth{padding-top:34px}\n\n.participation-guide h2{margin:0;padding:21px 24px;font-size:15px;font-weight:750;color:#736a50;line-height:1.5}\n@media(max-width:650px){.participation-guide h2{padding:19px 20px;font-size:14px}}\n</style></head><body data-screen=\"home\"><header><button class=\"brand\" id=\"homeLogo\" aria-label=\"ì²˜ìŒ í™”ë©´ìœ¼ë¡œ\">ëª¨ë‘ì˜ ë©˜í† ë§</button><div class=\"headtools\"><span class=\"headnote\">ê°ìžì˜ 30ì´ˆ, í•¨ê»˜ ë§Œë“œëŠ” ê¸°ë¡</span><button class=\"sound\" id=\"sound\" aria-label=\"ì†Œë¦¬ ì¼œê¸°\" aria-pressed=\"false\">â™ª</button></div></header><main>\n<section id=\"homeScreen\"><div class=\"home-grid\"><div class=\"home-copy\"><h1 class=\"challenge-label\">ìš°ë¦¬ íŒ€ì˜ 30ì´ˆ ì±Œë¦°ì§€</h1><div class=\"play-chips\"><span>30ì´ˆë©´ ì¶©ë¶„í•´</span><span>100ì ë§ˆë‹¤ 3ì´ˆ Ã—2</span></div><p class=\"lead\">ë©˜í† ì˜ ë„ì „ì— ë©˜í‹°ì˜ ë„ì „ì„ ë”í•´ìš”.<br>ê°ìžì˜ ìžë¦¬ì—ì„œ ë§Œë“œëŠ” ìš°ë¦¬ íŒ€ ìµœê³  ê¸°ë¡.</p><div class=\"actions\"><button class=\"raised\" id=\"join\">ì‹œìž‘í•˜ê¸° â†’</button><button class=\"secondary\" id=\"create\">ì•„ì§ íŒ€ì´ ì—†ë‚˜ìš”? <strong>ìš°ë¦¬ íŒ€ ë§Œë“¤ê¸°</strong></button><button class=\"secondary\" id=\"resume\" hidden>ìš°ë¦¬ íŒ€ìœ¼ë¡œ ëŒì•„ê°€ê¸° â†’</button></div><p class=\"mini-note\">ë©˜í† ê°€ íŒ€ì„ ë§Œë“¤ê³ , ë©˜í‹°ëŠ” ê°€ìž… ì½”ë“œë¡œ í•¨ê»˜í•´ìš”</p></div><div class=\"visual\"><div class=\"play-orbit\" aria-hidden=\"true\"><i class=\"orb mint\"></i><i class=\"orb lilac\"></i><span class=\"orbit-star\">âœ¦</span><span class=\"orbit-heart\">â™¥</span><span class=\"bubble-note\">ìš°ë¦¬ íŒ€ì„ ì‘ì›í•´!</span></div><div id=\"homeSlot\"><div class=\"stage\" id=\"stage\"><button class=\"key\" id=\"key\" aria-label=\"í‚¤ìº¡: í´ë¦­í•˜ë©´ ëˆ„ë¥´ê¸°, ë“œëž˜ê·¸í•˜ë©´ íšŒì „\"><span id=\"keytop\" hidden></span><img class=\"key-fallback-art\" src=\"data:image/webp;base64,UklGRug5AABXRUJQVlA4WAoAAAAQAAAAdQIAdQIAQUxQSGgOAAABHAVt2zANf9j7B0BETAD7ZUsrFab0JC0HaTnMbS/M/2+ttG3bz2AQKEwlqhKJrMP1eKmqqUEjkUhcFaYKw/FWh8PVNCsh+34cXYocbxUr6QjMIpkEMyQ9yu94m5lF+be/7/94jYgJkJrtfxVZP7P3XdTunoNEjUSOHBefFlBUgJ0CUgAV0AEdUAEdoJExmDzP/1zIkCFm9ncuiYgJQPJ/8n/yf/J/8n/yf/J/8n/yf/J/8v///Z/8/x+8i3M/tFXONmaR3xeTU00nflsTTS0Xd+8sky+XyVSSjJGt9kQxd3aTLJphlAR0NcG0IcRV/DIHEafZpZDAi9qQvd+RiQ4l9gQ8l6o23TgvIiJ2GoziERNM5m50sn3SLNJvc57gLYmM265/5hC7v6VgkEwibBikjKFnELUrtzYwSH0Nt83LIHftNcK39PHeTBKjJo+yXSTOd+rQg8Q6gDjVKPFWvFEOstXtaX5mjWfjJGYD0jyMEvWSk4ayErcBZx4Xidu+c0Y+y4Uuigac2Urk0zNn5C42Bc5UEnkH0qwjszlraI+LpANrFm4t1qVgDfRxSUcbhb3ERSBH1oC+JMqBNqCXqETRBo7TFrevgTeQtRv2fuIN4DRucjvqmQPQ44ZdH6gD0EMshjyAsrVRzHfsAWT1GIEo/gAwRGAopI9gpJAuApcxiIlASgZp1tyuTgxSr+37yCA6AvfOICqCAQxaRqApJLtC305hWnDoFGx4Bg51N21xBiTah5pyrOfa9OOyNpoDWNQEsiU25ofyeHgGkepAGuz67oI04NchhAHBngO0oNLybKq7EPmyyYBKayciw3MAdFvOoFLl5HcTIp8vshpUWsyyOoWAdhdMJaj0bpBrQNs12zyDS1vxdmHwfh7t3DfvINNKvLYIRKrF4tNg2l68BkxbiXe4Y5r32TPnYNpOvApMq8TbgmnvRs/8TjW1eDWY9m7y9KDaWtZtQTXPs+cMqm1kfc6oJps9Dai2kfX5mWsmTw2q1bI+PXNN76lBtQdZt9lXiel4/iqI4m2W7/dFUR4OZVkU+zxLkyjcLBeubTxFrcfgi9N2V9GuqM4d3+GtqQ/7bejPzScms57Dl4XprpOi7niaTZVHS+cpqWW9x+3cXERJVhzKPI0D1xhntkqK842n353yaGGOM9/EaV4ei2wb+eZj6DzqVuZuq56/ua+2S+ND7GVcNqzUW52HnvERhp8cOv7m2yldPI4JN3ErPPGHdrlvfJuzyc6s6O4Qe8a3LXYtf+g5slVXrdW3MDPp+OPbnfPPnGB/YcX3h9j7Z7Ntwx/fp7ba0P/W4wa+aXjcW+GZflrzg2zzte3mPY/bhobSUHVdhdu3c+I7vPJDvfEd1q7SbuPLjp/yPtA8MT/tO60T8ROfapyAn/pY2yxuzx2vNY114Se/nemZjJ/+g5bxWYCBjjlJ4GLolyWLMNQvtQwaU7f4LMSNbsmlcNQsVi8FdvRKwGJM9Eoph1qrGL0ceKZTFizIjU5JJJHrlEoSjU7pJMG2PpmzKBf6ZCWLSJ8kssj0yV4WlT45yuKiT86y6LWJ0cmCbU1iFCzMo6lFjILFWVkaxChZoJWlPYyCRVqZuiNjoZaG3tiyWHOtEbFgU42xYdFG2sLrZcMrTeE0LNzO1RLmicV7sXVEwQKuDP0Qs4h32mFxkxGvNYPdsJA7Ry+ULOaToRMiFnSqEdyrpNjXBkbNor5YuiBhYWeawL1Ki5dawKhZ3I2lA2IW+E4DOJ3Ebi7+ChZ5BT+fhR6AzzhLrbWwF7HYU+hZrdx6B3kJCz4Hnt1J7jbHXcqiL2Dn9LJjD3UpC78And1Jj+eYS1j8OeTMVn7XGeIiBmCKuAsCOgtvS4ZgiLcSAzXcnBsG2ENbwiDMwWa0KOhtrC0ZhiHW9jiooGZ2OGAHaRsGYqyymbdaLZe+Z8GgREKtqHlY1D1/vTnsghkA7BsS2FWQn134I+vEkd6GoRirxgrP/PHHlez2WKjUYqUdj3vyBWd0WOBst8uyPN9tkzgKg9XCtY3pBC2Pf1yIzWd8tudqvw18x7gzt+L7LCyhpQD5+u1y2AWeeS9Bz/d68WR2Bso/v52LyDNHM1K+42sksRljtq+2K2sM+8Aj/+XbmEtLXhvQ/OOtir2Psk587ydLXBlw/rHNl8YHGAe+/5MlrTN4mLnNl8b3FDzFypTVjCHcpvNvSnmaR1NUawwxc7Uxv7Lgqe5FtcXKpzGY2+3sH8zzZHgjqSNW+G0U5j6bE215up0jqA4sLyMx34r1bUJcGWKaM1iPo00+EdMaLZ9Ud3WktEULvyuOMymVcHlR3dUR0hkuR9VxLiPjBpffK+82F9Gc8fpFdZyJaAWYV+W1hoQiwLwoj30J7QDzg/oyCRWA+aS+1hDQCTD8rjz2BdQg5lV9W/kYjNgX9ZXycSDzg/oa+XiQ+aQ+tsTjQ4bf1eeJZ42ZV/UF4gkw86K+rXgizBzVl4knwczv1VeIZ4eZz+o7iCfDDL/BJwfNqyKGEUrx7EHzooT3n3QjFOIpQHNUwa+tkEfM/0Xh99N7/wlZzRiJeErQfJ5cZhIVPGYongNo+H1abz8hooRHXf6rwuu0LCJKeFxHPCVqXqYVkVnwuC2Jt0DNcVrd5sIjH/9l4Ydp3WEsnz1qfq84Tz45aj6rrTPkk6GG35WWk3x3sHlTmi+gBDYvKmsMAUU6IiEBB7A5Kuw6k9AKNj/ck7u3nCTsw+b397T361xEHmw+q2tHInZgw19U1c1kZODmTVURCbmFzauiToaUTrB5UdPVJSmXeiEiMe9gc1RSQXKOYfODimpLUGvY/F5BlxkJ2tUHjUOSNmHzWTmtS7K+oEa5nUfCLmHzrpZuQdJOYfOmlPOcxB3A5lUlpUXydjVAQhI3etS8KKNbkcwr8FVzEnqKmqMiAhL7Bnuu3Oao+UERG7lRA72t4HLQ/F4RpeA20GsENwPNJ0WwKTeqMfNZFXPBpZhRpi+4BfQCwRktZr4oIhYcZZh5V0QmOR95heSMFjJvijhIjjLgnUS3gMyrIs6iozPuWtlFuLvKzr7C7iY7KmDHwlvg7S8YoBNeXqb2demtYGcIj86oI+kHoOvEZzaYu4iPQszV8jPOkKvkRyvIlQCgCnF7BCwQt0MA5YBLIGC3eIsgQAHeVhigI1BeFeGCYN6jzQQBhWBrCIYF1ioc2A3UchyQD7UYCJSA5E0NayRQATQXCmYNs96AAjktQt6VUBEYFz1AvighRQOtbvhQ4xoOFGDMwQOF6PishJYQGYPjkxJKSFCMrxgTFELj90pYgII2N2D8oILWQAUte2jtCZdHXBxVsMFFzNCyYbFkYL4o4ESonHfYSlBh1YwtDxUFQ/N1eg2BMmJwpaDwb+B4m56HCadlcL5P7kyQNE+Mzi+TSzCRMzo/8+TnkAgYnp8mdyJEuj0+fj+5ABHWhfH5w+R8RJT81QEYx8k1Nh5iRuj0uITD4gaRl+lxBIZZwxAdFNC7UDCODPPaRELCQE+B4DPUfRjMGqw1NgoODPYCBDHDfQMB7waVQQ3tDADWhfE4jKHKAwD2LPVhjEcYim/Dsh3GePCdIzynk8AwxhN7EN6Rn+ZhjCc9EF3ED3e4h+GD5NnOBDfvHw8SC8FVDP2l2CLG/sUUmtODj7dCKxn917nIloz/g8SMswbglcBC1oFnQ1zGRQtwKK4168HWktZeE3AsrLtOF7SmrArWhpGsMn1wkRVO2oB9WXlXbVDIityTLugMWRF5ea8F2JMWkRXWOiCUFxF5WQe/RGREVnACxfAwYqERkbtrP2IQ3+Ncy43I3By/D+atKTkicpIGc2sSv7Es+o8YsNVtCIJ2VH/fczhIpY5tgqG3654QcXaX+pDFyxlh0dwc0JRZ9sxxnPl87jgz2yRcOskFShEB1d/3OFojhcgKKhR5WCEiJ7lAyIYLES3yTmWDjDrCrLk53JQl5Bo0RDSLz8gpcENE3q6FTQodImNV9JgJwUNEVnBEzBI/RDSLarjMIURE7rbHiokiohIqDeE4g8oRSAlUciCFUImBtLqTAQRrIC3uBIUekByo2EAypzCIrSUktxOQ+wlKNVD2UCqBkkApu4sBBBsoxXeBQg9Km7sahGdDyb+r7x6E1RKU51OSdoUlEyc5lqiFSQymGiYrMJUwccGUwsQEU4SSC4F5hZISTS5KUjRZKAnQRO2jGZ41D07Vo3naLTjlGGkIzjFGDnhaY2SHJxcjIZ5MjHh4ogtELECVCLkQoLcIKRAVICRBlIuQNaKM64MZnrI5oqh+ME95R5DO8VFhKsRHiikXHwGmjA4eLqbogI7OAFWMjiOB2kPHFlXUQmAYYQWrHAJj2rBaPojhWasJ1kb7lUFtT/sOV7T9ylM9PI4VsGb9E/Y4rxawKAHGgZBtHHERQovMAyp6G1tkbG8fMCBgT/D2Tt8HQQ9fROszHvaE8VUlrmGkywxkRO6uk9XI5zkB3VwVPQZOoUlgN9f7TnhdGToEeWOxrccbnpphQud96BqE/Nkmb8b558OTMs2uysKFRVrQCfLLWI99UMXtckhDf0aacbZKq/5JmX53KtJwOTdIWxpemJ/lcL1U+224dC3So9Yi2p9v9zXc16C8rj7k23DlzUjHml6YVd3dfO8wDOMo+tqcyiwJVwvHJA08XyXF+XZ3D7Q7V0WWhOvF3CYNbbqbpDjfnoS+qQ/7XRKufXdmkA433VWcV90D6pu6KvM0Dte+65ik6+1FkOxPndL6pq7K/S6JgtXCnZn0L4W2t4mzw/mqgr49nw5FniZRsPa9uW3Qv0LOFusoLU7N7U6u7aU+Hct9liZRsF4uXMc26F86jZnrb6Jklxfl4R/Lotjn2W6bxFEYrJe+585nlkH/93/yf/J/8n/yf/J/8n/yf/J/8n/yf/J/8n/y/5/gVlA4IForAADw+ACdASp2AnYCPm02mEkkIzqhIxLY61ANiWdu/C5z3OGfSlzd6aeyYP/y17+AumWpv3HZ/d/9D/eP3N9tbjvtZ9s/aPXH/k9wvxXk2dEfOB83f9z6ov017BH66+e/6svMb+4f7h+8j/2vXd/e/UF/wH+763X/Hf9r2Df2M9PH9z/iE/tX/a9LP//6xb5R/wvpn8EP0v+F9E+uD7T/GzgTtZ/k/4i/neuj+p7xfzL+g9AX8e/qX+Y3m22f/I9QX3j+yehT8v5n/yv+Q9gDzs72/1r2Av5p/ZP2Z9k7QN9bew1+xnpuewb92P///8/hv/ckUPFl/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv4VHhC36b3Be4L3Be4L3Be4L3Be4L2li8e4uUrqO6cr8sHxADQzZXRybTGVsNthtsNthtsNthtsNthtmBzQQ1DHx8PO/kgF9e/MEtVz2IB6GbQzaGbQzaGbQzaGbG43NYhYpPampjr4yAcvcMKWt6GbQzaGbQzaGbQzaGbQzHmr1zOX/0hUIdIQllJ4VeHJQD0M2hm0M2hm0M2hm0M2hbmyk6hUys2G2w22G2wvaBR3WBAl+oqTW4bJp+6LlsT6e7/j9mYG5iiimimg28TN1I34M3v8rmQRPRvp6aPefNFc52NnyQ+mcZSWv8VxiAehm0M2hmu9RiCfR/uwe5yw5KaF2y9LD57SMjoxiy/mX8y/mX8y/hprWZFL1lszQTgmbDbYbZnUUmeaU14LGiDreZfzL+ZfzL+ZfwunKVJnntkE32GSAY2w22LPKtwITRU0P3TNthtsNthtsNk2d+KTMdQhZfzL+ZfSO1wJOheM+mbQzaGbQzaGbQsEKOmyT/ugZfLt3/yfziGw5+tYNrVcKFXXL52tdXdOuY/zYbm/3lFZjF7oHHksbPzL+ZfzLI5Jeo7bnpDHg3H6l+T/jFo1U5x4JwhAJCJoLexBRk8KHmVZ4xqU6FAF74osuIeqh5MG+5EH2YazsGS915Qqho1/eoeZuw22G2w29gFqfDD0QMxPRCSWXKa0kduqpU1bjd+Gm6+9gnaKkaMnIG7n4p/Sabh2vohTRUnndiRXtuZD/RpxjFl/Mv9HCogRv8Mz6CMpKTy2bzONTkS8iyvJzPJFMobdUtsPAE4PMHgzkVoCJTvHodb7h8Av9C34sY19BvUCNv2KMNxfXrenlRtHqz9Wfq0McHJ5IZX8t/zE4ypkmS53V60NPItjpytJkpNUvJFuUYP1d8AML7EeUk9vnNu7+N9ySY2x7/xRNDbruxY4FtQzaGbQzXq6sYz2cDSrU0uOMtRjchGxcjAOacI4iRdOafUfUBt1hyxfL2Se3jKVL3CsZvEYfL9hglQj7pm2w2zQoKHfyNbXD7pq8O5YQDjdRfut/+hi4YbJM2IB6GbQzX8seD33xfuz2BybjFl/L4jOGiC41ioD93pJqxeDfgmVHYgHoZtDNgCXlgIVZQQWQ/91T1Z+rLTyuTZkJyqSfeCJ9n2SMOelLweBwGGcQu8y/mX8y/hYlKm/WGLIMgr5tEfWZjwyINM4/Ivk8E3AF2IgQ11btJ/Ay7jO/zZNbP72LrbP7/NP+t09kH4mh15K4u8ssgeaJeXR88IJQLo3TkRNQS/nVtxCIrg9411l7gvcF7gp9Io3rosQpLV1fpnE+0fNeGtXCoGBM1EJtpPMFbtl+AbodXM3tHV3uOV5k7OCxzTOQ17TehTvyQvANCvgDnlHLta2/wmhAumiKpm2w22G2c52M4n88nzbxaWSYoVBHdLQAPS0A0f+lRBOqD6SJa0H+ikaNjXUzXUwX/YUo0wU+b2c0Ky/oSEDAAnLLXHbk+hN3z/r1RPQzaGbARUpnK1bLuFV3U1iUfes8f6NYrzXJUCtCsnCRlgwN12SUhACfisWdyFLUxH1hCb7v/pI1BhL3mm14ENcQiQe8/tJZajaf91t1xZm2w22G2w2/2VJs8OMURoEREYGYMajzckt2s3JGJOvGPHIRE4LbwLazvz/vAOxpGul0X6PeZ72PZFCwLITT2EiAuM3N/VgI03jTJIwJm9zWs+9XDwzpJ6GbQzaGbQzX0TRySidkpsOdOAy0gNxr8wNzbzwKvfSz+XUzARp+K5Ao4gMCDOp255ljQ9JW+v8auOHUT0M2hm0M2hl3Rg/bglsE7Nk0/fZliLhRZHkn4K+hIVJ2IxKKkjKWdN//ZjxJCL7eEbQ8u4inwEpH4AbcdF19vp9BE1OjNgXn9CR5VVM22G2w22G2w2WFmVGlAu+CMVhyWkhwqrDopd5THYFv8Zo2Iga62DXRGGouQ6bhQzxG5tdPESh094iyDh/LGMWX8y/mX8y/mDjzpkiNSHd/Xu2L0BfIvyFJ+U6QxPrwz/KsmeNliWAZdo02XGLL+ZfzL+ZfzL+YN6vz19d/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l/Mv5l8wAD+/PZAAAAAAAAAAAAAAjoA4AtD3TE+0BAuVGm0hZ35wLy/QpYYJr9UFBVvNtNZrCiEx0LDQFeGateQIElYUAARkF6OnBgbP9KH7dmNSDwCHvgHwGQT5lTuuqj+GTfq40HiGc7oc9d7av0FV3PvzDvgs8zl8EGrddVFU8wUeUSTDF9R9pgY2dEyoipVzKhlrt9tWFu9PcbqbL0oAd//1H13E6Cfh2d1RJf7w8xxOvw5a6+q32hZ6rAPQNGLy7ujFfbd0ifNQoLXazeL2Ilcuv+RRAmN8yN5p1Ecc0nDYkE2i09o/v813Qq84YHmHxI1O5n3Mox8Te7qj1a+ExwACpM8UxpNxtUPhYMIaMl2fNCKjFQMrWqJH0Js54dXY2M6MlNZ3JZ3jBAWyJHpVk9L6iD5SXaakTsaep/vK/iPpOR+c5aSZIwKYeOyEvO8oGL68qXC4pyqfeRVLQAqfsGNmVMkrk//keJrQ4FYu2MjduzKRwsi85et5jsFkMWI6CxfWUu0I+pb0KgJZqHOyt0goTOqfCAQGeR2MlgKP2kfnO0E/R9vL4G1HRfvqStO7x/ZiuypBeG+4TAmPw7drqI+CsnPmHo3+5eDMvOW0aXBV+AAAOChp7X3E3I9Ug9Iz/SRYLNFDX2tMrwILpnnasG+AjKQkcC5U/ZT6gIyqLDhRfUI9Qh8x0YT9JtuNcRjzkTwXWG2y1PYW6KfIlTLBZ+U2txfB+j9/mi7ulFnZhdbv0yNFKLtc7nllO2mtRO+d/qFO7Eu4mtpE6Wv7Tw4C0olKM7/d10CkHBh1TTpzGQQH+om7jRvG5Z2XaYkj/w06WcnzNMdYofFj+SV1oyNP+3NeNtrKet99i6uMQJozJf3rmtngTd/xN60piZHHN/vVfevQAFmdUQga0a6oiwpqAjF5QtDwtjus8g8kQJmOkAP47RfW+EfSzstm0vnxmQibQdIVnmvu/9vhxOtnPxHrGKzcZDVVKresM7QBrvi1V6ywpYlwqIMjY36jvpa5t5wCu71HfsvNXJMrO683hc9WIPNdYYgtTNOQy5dYa3azgYorL4AGpncF7BTNd39JGvQFMVedm2/HS4WIYlk3Gy6VXuW3tyH0NHMJhw64uIPt1+MYAFB5eiPXEELVXpIsh4pOtlXiXok1jh3/mUuMHUme9BAj6QXYncovDDMJ0zU848a25tXwjJI1L6GiHP+sgXbleMxOuuQKrvtc/++VeMxn39nC7SZ8gsYB+FVZliDqa8ZzHfBo3t24Ig113p7qwBfeFQfwdKrwaewExPo6k9erGIdYLPfxxKAlHRcq5B6cMMwoj2BkVAPZiUIP6rDtuyWban7CubRqe5n5I1SprUGBOPL4VyYZTARVJgXmmeKlcYnieoaYmAaJprQDkcquIQWqn1Tu8Xe9UJCLvd6CiKVZIrtio2uivkj05cmTJIy6SJTF4pgiAyeJU54diXHOSEdN0egU+Yurg3YlcJN2pqXz5WXZbyxAd9fO9p6hKrrtDKvJQ+1IDm6Vu+84PPqArHVjwDDtlOzzB6dx3VvciNIbsPEN7GUHH4LCMkuW2b8qotHCSusb6BnDt3YVi2URSYC4A+PYMAKsbp9rU0kgN71Y2hWrO3nSrt7Dzp3CjjbrHy48wXM+MwYWQTsVwvpitRiwCfMOFXahPaRMqfppfnxgAAAAAAR+3PMCRt2JdH8qs9pcxb7a+A/1YZoFwM7AzZ4wBMygDXhe2uAINQLBMiGxio8OXr3IbdEwQY3w34SPYaulLOizQV/L/gty7K1Kt+oXrraV55oGSaZU2s1WcKIcOLAAg1LWCsxaudrC1QrpdcUYtwyFXNiJme1sGRg3xMNZFz/Sgmbp8LZAaQJdqKG3052JzoTfO0iGXdFvqTbpzJKaH8yQGM56dd+DEAWnsRi8ovlfQG72hzvnS0rWIjX4WJAriHkRkY+uwcXAMOZdpbJY27yc2suJpLa1BIBajY0wHN0bvhZgmJxM86WKQbHIlL19Ut3Mofzx85TzKR//89FasbeAO/i2s8M7YWJLgvCBn9NA5P1dxuDlLqtRpdfWCnCLDfdH0TzyC/rYEpqH5QiNPGaKn+sVpDEwymLlI0PgQpxkyKnpolibK38synApQBMUmeWrOKjbEwe/6Z28QF8Q5bWuNMCKRNaKJ+GoEfDCkOQfpZ5a8nrNaVB9J8l9tBI+HQNvNMCd2LDrQGAWoj3g9UjqlIeQoUPvqrUPGBZWCtOawR8IHLdCJ22dsovo1Q5D1D4Dy9APBMMMwu899Ez9UUKb8rMCthr6HmjIb9vS2U7z2XQctOZ2nm49MNRVor8ndtEp0CS7hqUHwvwg10Jxl9ZNq2CY1FfRm5Mg43NWPF3ED37nkbDd2y36MmIxnARHmVuvI7uOadTLec0LUHYMNnvk6Wq12bqHhlXUsWu3u2plT8dywCTCEQybHf1CO5h8WX/92RnQLOt81FRgtupAe0yrHl935LCpDjWREYl/O+VWj2DcR+6848Z2Wi4CwQdrvCZ5B6UVLuzCmI3xwPa96c3/q4D8TUxs68IK7zreNFSbSPMhry2gqHa9FXQ5VYczk1OAJHOR9oI8+0T96niR0aBvX3qB+bJrVtj6wxNTuFMgTzevYlDoryYUTL9up1VZsOPGdoZaEr1cObGommXcbV2GxFZLqknDIFZeIOclZPsnQWWulP7zy4v8+6C481sjL/ONc6eqMzrZ/SHMKRi12YoLC8WKCACnBnuAbrMpq0+Rw+7mU0rT4YaX6BfRLBdyk62zc8guIbkLxF2IpYe7yu6+0IcFLmuhWgRVa9NMGkGIngaZ3aWKS1EpWmIqnXAFji6Zxzwrq+BPQN9RqGGqIfI9nY4yA6pwno7jB8qZmdmuCAvz4o8+jgArjr4xkVaQIyTeuj9fR939IEulfFGriQv3dbqEsBsDVlPHu7Q82yveEl7jXYQy1m0QQCPituVQsvqJ3hsadF5qGb5N7VhQI/HErVDlvqnxJ83K/zTfu0qkBtmoUQUAoPwr+DLPw8T8rSCbw/MqevbtRzZ0oepaGqyDGw/WYKP27hH5XjBt1DzEwBxe6E/AFHFENSMcC0+nHI7rXxZopkur7NLahD3kP+ya486L6U4xOczmmQcc4c85SjI4B+FsknIOvOdtatZ2b5RkqrVlu7v9VeLnk5wgi7ri+mcBGsEdtc7efkHiSec7hnIwV60ozGsvMxVzexLkXHkuGkgA5LGuB/GYH14gOsI/YKq1grqjCO3OkJNzFYlo5nXYp6bYXjDa58ID8ak57sS/iyjNn0nchYlfA0LULpAvtfV3e46X6WH6e8fN8uEGZt7Jm3ymCuVRxTcUHmTdFWKVbpw8j7s0rKidY1+sR1zoE9i2LgMvZUeSebjgxZ5FIpr9V8hKfW8ANwU+bWZZiiUruZvYJ298+21pJFZtT7027/+0z66Jdx85MobUBBruvVEtgA9MYS0umMrdk11SZQp5cz9DrRU2KpIAd0eivvQiu7Q1FouxPVnVTzwcZICBEWZzFXbJzHlLKd8chHE99XJmWJ3FXFKhxgkBjl4t58Q5hyzlD6vqAYshdveR7+ecvYm/ztnPQd3u6MezXAqm+8LnUHYzixyTVH+rtN3ykxNaex/O3isCn8APVHTbqWetDkFleKnT88NpNTFH0ETMmWsWAzHnrfFt7BcU1xw6Dzrdb4t/XvKqwr0yrGIZemLXPbt7JvCiJcrtA2hsQL1CYGryqLw2s+wh5rTr9VzRX7sjW9JwMC5d9rxFWr5iLFD4uXtrI6B+K4m7Oyl+ErLRbh4JBLtV70FQr9Z2xr5++nyextoHz6rC4T33YZdPygPdyLPbWQ3K2LOavKBX3twI7Cf2tY80JZNaGhN/YW0kiKPkDzxeFIox9lIPIfudKV3UbiE3247gRe4BC6OpkHYWVxbIUThQsGoL7+5k07mR6FzM4iD1SBfQiQgw0WLC2/AbYwWswulbuAL6P4nF5fV6/8/9HLEXXjGL+PQhvD2GjZofLyx/NUawRFvQqCHqIh9UfCBbN9DbVaiidPFnQQlmLMNn/aOI9qAkjHd3VdBSx8tzWh/pkRcJy2o00zPnYXzWHJ+pSnGFMQZmtvC7+7YdVuzqWRphlt35iTTF+LlbA3CoJwKxgafmS7JtYp7pscPL0SG3OqizLo6QkLHLDVb82urQcHf9QT0I6Z4CK8OIhjA5LxaMLmb1TcA9rdyZLwG8BVMEzGtxBGKVnDyc4pqfeIANYQMzttrb5/5RFxi4NAJsKCcN7URLZUE1ZIDxRFmudDYvgIAzdjSLCTdvNSwqBDQFp18vYmnK2Cc9qtfvrrRWW0pkLPLxcUB8ddM4jxBpZOhJHCqDcv6H9e0EH3NwguL06oddujdA79yvYAe8GYWoJ/wR2/7JfZyEIVotAmqMtEhxsYap53Q7/sQZsetZO5NjgneQktA2BghA0lVUhhQfVKBTISOMlz+s0Nhsgcif1A2OP0WyCJvpqUV2PeZesWoEYnAzh37sQZlXdU3C5KWWjM6K+UKNyAscJExqh0AAzUl5szYPMDscQoC5bWKV+PK85VYexTEzUO7ap8MDrxw4C8NMxD7L2ICL5FTs5pBLn0J7cawwiKQh8rPAWgEYFgArNyWYU8AfLAUl9fFOvZqCZtpdrihBgrdlC/n0ydnIh9jhUpGYX5jbBVl2s1JvYATzTiyCmZ7ZBS/gk4LbisTyU5SSeRv6mgDaXesz5AmkVv/CC5LLcCYOsEbdWgofB1TnKJz0YEfp/QcBxkArGOfs3fBo146nFxlv/3dnXOhBcuqO5gCK665ADhIrg427STn4FrYS059ebd5KROjwUQTD8D0jC0HXFhEQsVRoVlE+mRMJ4qyJexECoCYEPtb8Bh6hktGikotsoXNAoDjz1dNNRRWpxC0Hp9Njud0gVT3iqNF3iKiIY/bO7QWgxImCLoL2xhhL3mLMKKqEzV8lohmn31JEikZ0RhtBicMo1Brav7ZPONFVett/74wCdPdpCzjgeJMXfukj3vAjdo2FEYQKBoDsDNRMbCMx8KkQbuPOY30Lt8c6WLwbboVbmVPB4XPh7Yx5eBwzYA53IhG74CY1RNZUG7W9huR5W8QLQvuCjudvr/GgfGoeUDHVC4iLg5dcfwp0wH49aR+rqADD2F5IO3MVgGBCp3+ytYJQz+BCsb72Jl9U8B0EzMMP65ggbcUfeeLN5J4yc6TUJW394vv3HkzP/LeswBpjRpv3yTLGliJIKt7aGrUVhVhkio1wtcdu+tumFjFSqMHcAK7MBtISYyTOzAiD2BgVXCw3tO76jn9oXYo8loPacLFwqETAoDrMzNLbtr2lgtMN0H5RgOcx+UofJXdovquXlO8lT4D9ZSj+dFRQ7ACihJ72ZtmwGOhFyOJLqWOlZswfffAPFEmf4ebHfEzfKgzCSdnvLthIwq6F91+4MZ4ktAyH90EZsg/bjX4ouMVdrUy0RDvgPlxcQ7rQQo5M3J6/2+Mrtz52CcyKHDI6AX8zXma2MzYm23Tfm+A3swarQvPWTXUtw+tE20HEVUxywnJOhggTv3yE+iC2+NGIYa+TT5eEkfhNTPmhg7GOfWOH9J9SKhdRzIn4hM+IeTcGUFQieihZ9ZrIwLVCgthe7KZmSmm9QbWBZsiVTgmUWMVHNINAcDO6hvcDjJDevJwmadLf5AeDi4odS3rH7Mo824D+SE56O4nOON+sqq7bKYyTly3BWolihNHyIrOxJEoWbAGl87E1h9AOljAAUzCpHUnWT6U7R9atavgMnI5tHp+YUkrO06eDjKLmrAsO9K6GAp4VNU+hLzU1pjhY25YLfiHQNasaaFaLkVi9JlmZjIzl1SYPWjra0kVM0xExHE1zkyZzp3/098zdTI3rRT/5dSTCxQsSP6xmPMpyo3DnwA0GakH3ynFYiKk2tHO7NqFgUGuuTv8Y502zV5iPmWi6JE1Njanb6ZAKMK9tAAefbn22D6/q2N1iS2gNJXgYJGKoylYLThdx63ePv6bjmfJQd/iuj+9kZQxoMCoz8LphSkv3phvftzHj0C26GpzEltBcX5k6RQ9lf94z0/Wfa2NswWp8/4SlPdtrXfy1AB6WXnLjcI0MatDIFBkAdzfdCLctE40DE7FFrcY2LE+RUHbyqYcfbpkuqKMsqFiJkELb3mmnNTxcT2yK/ZbM1mVrKuXPJcLnpS1T4Mqp6uXWMoVB9IYtWHkjfS8xx70NcbOdFvaB11s0hdayKkyQ4hCeGbMJT+/2u1CUStBuB5yXtOIc/i9VcFDN4Z4jmMDRF4GrXz0JHd8XRX5HS2U6jJtxQybOk7iWH7yXHb51h+xKpEChevr7gi4jBFCaNFUQQE5+nHnDLm2rCb6liEf/laarmgA97rm4bCOq4ySPhPG+jB6rpZswH1vUdd5fvrDv11Usp3gYULGHG36tLOqE0xGdVo6b4Ar77s6jQnoUznmfMLF+FHRLndyhHMlq0sfkdI76fAJgD0KaMZWMitrHMut8uMjyIj/j0NPaBFEMoR/coCGQMhHfSppEhT0QzU9mzO3jiOxrljiOlnZX5tPjVs0Q0L7OfRp7HXVQJLU4Gan/PiwnX+Hx2oCbbFb+sNPMCW52AUTdZxNBXTZV7YRT6yHyGfH0wbqkm5oNmzx8OyMA72XG4Kk9/hamISUPRNuuIusU3/gvbR5vkiPVHIXZ5mcIEixOzGCXG+gNvmyprgrqIICuOH22P+Mm2Vli/DxlcDcYTdzJ2F7ERW+LNGXp8ROrMHvhjf/F9httsKBy3EHWOw1H+855Mne1GXxGdQrerINHG1VpSwsBZZhC6APwToCJG+EHkuXM94E1Irmicb59H4CD9M3CsgVMuB1UB/Apa+KhHW5KfAE4WKDFMUjFRceYZjWbV2XP6XArxqi8DEMDlMKRn+fwNuXLjL8i/TrIK3Neu/8NcaIbP9TLTdVHENPXX99LRW16IjXEK4IbP/zvhxGmedUy20T05u6JyLhtCZCoNv5uxQY7RQL3aZwd3X5T3jGj1jv3+Lec82BcsY8dgg3LjwAjCvrXfcfK57imD3iPr85EubNR/VS+WRkLBJ9hol1EH40O6brzmmsBP3eYbojTxOw//8U/f3E6sEG1pJEsJDf37rDbiooLnA5URDx15dx08ZdKCkK3DJNjpYjwTpmfQLZkmKL9PckwG2eES9573YAnC++IJqS1tN6KmsVV7qB2fK6rrhi9F4vnQmTFH481JzZyyQxel5RYu2zSk5oN+u4fhwLffEA2AZs30VZejltrx7nGkCU8eTkabDM1t+mApFAuPadrh8yZMdDlnKTOLz7PiwdMmWl66FSW7uDTUTQT3TV29O+ltIW4Hkwa4/1+VIc/MsxwtuSDCOhZloboYdLNwpCj3KXAkIfCelJ4xsqvGMVS3XZk+isE/qkSHPScDypUqQVk7eDqbLt73NMBE/Bvk21JQQtpPW4S2w3q8CMII1KAVtIrUOfzJnrZoC8ZvuCFKfXXgwHVnTmKXYGeN7f/aAnEEfmp7Ntu01CE8Y3m2yS+uV5j6ZagTGO/qGSH9swoBD4O+Sa6pnv6f25cpugF6fbyEDu1PIIArZi0sh5lYWQqbos8Eras9kSPWkJ09H7klMzy+/8tFIyLhix5fbCkpDsGmVeTPUOre4atVe/u0U/5Pn4oQKIpD//qdiYeCTZKgAqQwhLEYNu8rTl1Rykg195TArb9TmGbVRirPqI4phr/y75b4XXIMq4byhkYiB1N0TMBkIUZCPCyU1zPznKz3rvXjUAzAsJxeOIld3pWNoa5cV2JSv89/xC+fAtM/JZMHVyXYRrg3k8x7IhP0jzDOlGSUCQYiMaDBNw3wzhpdHT8TAkGKFps9EQp0P0vC3JIZ/5RBwaxxADyTNcdu5RuILvn+nVWAnJWypJs3TxyogexanAnr1zAZmmrVIfKoeE+QyHK+WAmSD23GjfW76wucDT4TW6zQc26zCX1Ufn8lE0pjgLuaP1k53yHtjGa31CCJ1oYlcGza6lIvyZYqgWokpvd0ufmmBltwszdmdGIyt1nL71HB5EkTELaLSuRdV79IgdCq0FpR51N79XEsmnjQsoK85Jx5V9Wq+Fwiu1LU8d1FhzSHTFw7FPg3/eij//54MuIsr0Zn8SQtG0LQMHAN5/Tt5xJ58vy9wPVMbEN/dTHNEfBtB14G2QgJPyFwcKcEAUtztK49hrYmDTvfKF5Y9VmPULnUuvBB1PpDeZzq0N1TxtUExp7ouba774HTfB6RBf148uXkqqEp7XpMTdXgKd6seKipu+G6RscZXwmCc61Emlk/+IoplnrR1S6NYzaImkT65SmBOadZhwA0qBblskOemS2CBVLsu61ebwvSSxGUjl8WyIpqJj6LAqbRSfth+mT0cNpuBRZnVQPFYBCowHYfiSNOu5dWvOodmVSOiwy5w/a4qmYIr/SNUPgLgN/vrdfqFYrIuTZpJgyB3MEpOFd86Gci7TA0pkS906Ypdte3DY/XatagYj3dGvLEnfKsxgMDGA0j8/HKTj43tZjAQPQKIwMPb4YQ8pI7uKmPIlggM1+4JiJ236R03mtMtJyAtRDZ5eriTnAAJ73Ewdg/+It2NtIncftsldKYROeRcqg0WVzKO8JvGRpt8mn4GndGbA5D0ki9NgrGDbBiSJvz9mMmOA/QPG9UQ9GVadjLKGYJo9ZAtmOUy0Xu5FVTG5k/LvlIy9awlEIo9Ljx27u+UFfNi+EEcmnAejN1DAWmR2latHmyhh6ucArPusr65za5d3YBwAAMfDpP3oNvEPV8+gMTuu6EXqn/FOOfWSyXnBZiQdtc57uy0Z/Kr2vlyFLn/gxiqEDxm6IY2MBlB/kJdsn/OAM+hUWbNwDKFZkg09W3uK4i6O18gC0VCunPJtioZMgtiaxCOLfMOwvP4XREl82t7Es0dEym9XaAQf3D/yzOct0MHKrpPaHPd0FxbztcsYAM4f6b4Bkr9b6u7sQEYcFYp9tFqWtfJ/TcOwftVbm6ZdQdnMX0Q70A8Hw2nvAfI81dV9KztvmsrFPH93ONzcXxcGWMRIyzD1EYRk4IZnzaeXKj4O5s6JmtYqe0ylZJRw4zkCboJtKCAagQbmWl27NALAZhSpQt2PkwDk/igf/LGJ5PfP3wvshZSAl1Bhd/9bi6ouMQpJHQSeruWiq2nzcUJLyzg1QGQ6Zv2XxbfecdNMpFnL6KT+4OIrjY+KwVjHo76nPLfXUIy36tvZMSSvpdU1fqXIz1WNvJaLhvd+bYMWUXg0O9MJi+b/jao2kv1KawOgXndOfqgIfPMgqEaPSAooSD9S/NZczPLXRqcvLcGEmcfmYGMO9xZqdAZWvYOOAiBNO1XQk6nSJsZ9M/k24JAtpAjiDezqk5V4giA73PtHK/AqALmuGxeOX/eo+/35GYBpRyBsP6m/5FERQN0+g3q2hpI3v4joXcMO4HDSozFu8kNqzAr6SKeqReULj4kB9OUfn5CwIbfDtlUcoYvG8G+HG0YT5DQhB5yId+LfiMrOFE6tVAMubvo3jkdFif9VrQMGIQhnxZlAR6Mwytsz50vHsldRJyfv3eRYCdY7kYND8t0PCn+qsxTVDVZKGOSvsvv2+cW2/3t1gH55MqP04nfJjhrmZyfe+qDaR/SiD/RAhc9k8/t7pTQmuaDCcVt45mgjxqiGBW4cznmihmzV1nNkx+c0bQj/++Uva0ocFQ2+MAG1Dq2mEPEJwpGm+4Q5zAX4fWpf9HmBO7Gp2z683MrcD1fCCgaXQfAIVjKTe0oR7wnLoh+SrB/PjbFxSaFm0v4PYeSCroPJbcmzzcllGnW9pcPctsLgk843VZtR2WaxCX41pk2e8A5L4EwXgvEylBj2qYxbjde3sWXYoq0RNuOYmDAR2wjh4NrwNiFYwxJpFqDlPE8dqvsIamdZA5eYJoEB8jBoh02FWPxHDvHUWSXQ7yrA2WAMWZkGyzGMNbocGPzLGT4S7NyGH7ub1oV19R6p/5KSZDdqKQeXl0ry5YAz/gGB5Z7Fh3313jSUeqoMR+gQ/uJfXfWzJdAzDO4BlAPAusxYf5ERo3Kyq3VSwcsKP3TVeTYXGwPlGsMorGWzvb4Rk6jgojodNGPhSacUf32hfILsu5o0AY0aI1/fkdn2qgImMdJUWOxZvvcHOcFp3WAjF+k2sks2IYz2XgMcKNyNYnSNTRrK992zE2SuGPWwGeiK0XvN2QOQowAa3iFzVfdpxPTsT0kxwEYjh+oOVwxHwaYLChL73YmOe7KbGSD7kDlGrXVBYqMQqy27Zw5v65DTENG7D8ZNMr1ZSFxyxEluF6JL7+Q7zqjwxrqzKZoma/LJr3Pc7OvAr6eAsnYXBg+4hhuSBCdPStK2oizCoNoGQy7E1tSGIO+WP+zPcaiLjZn/zCD8l/cQtnOCCXgMGEElDyfM21S59E8TIPSLR6w0adv+TYchs4ahJZq/Tifnxe1JIkEY+WNp04No5Ki9XWlcTlzvkO5iMF0CqzSqC6f999+9V8NV6ym6mQrq3SLu/FTjn/kx8RQt6yio/3nTtQvKvX5CQsZ1TWrF3Dt71XcAJPXXrh+6/s9KhSDCi3rLDnJJ/94S22/JZ3kqu5AIUOSU6ZpFJUL57a33Y4kv5d+7EQMSYyQrJCiAubmME6l5u5PC39ik8FjS82UQ9abE42Qvexuz87ERXClmQ+8InNOq5d25lm7ftPEU7iODiLDFaQDtkcgyH1RfgraBGr1bNBZobapmh5Cq4mtLzS+FxUy9Bz6NLzceTgDPxalEd/6rNDuLjVY2LdJtt+cbhuTjDaanlj7thRQNDajIYXxbHrove1WQ9V566QTSvpc/83l40wdu+S5tUFAIJE9/PuSbE0SHpmhzoDTFiqadJxd1ruo7kHFax2cn7eJ3L5SPaGz/s6kWRLENqpH3GQTC4AX/fneMXkxfQ2waTvyHzRyYG/BVN+yU3RoXRESgjP1g4X0zXX7upUMr8+bYMtOZDS1srMZb6FdEBKyDwj2vMCsDTMUipif2fwzZBmSFbFqzHUxb3AjCLr1KC1FwXMeiRHz1SXA8M4C4F4JpgVZvyalM9eTkiJV/JZ3E8gDnYCl1E9WF94F7MduGwpXpUjX4VsGy7u3FG7aoHY8cB/G6dmumDGrrOBoKEgp0pcubKZoSlDYpsERroBt0AsUMlZF24irsdhyJRdKfXX4okPr5uK+EViUFCcA+3QWaSIDpcAOyQlt/ezWOqsmh04fqwLkINSEkx/9gwPJAP20h2UU0rBF+A1bNp2OAqqLlIS4KNdhKcUJ3rkXYb05qMnN27ZQxXvkHiQSqo2HtHb0REZ8yiWAXV7/CLD6YXTiPa5Ps45R5z2MNxeg5zRzw49Pk9XKBn6PWxBfARVfQyWtxaDSmWV5lSNOMpps5Cf71n8CGfE4Z8Bv/nCZEAPyi0AJeUDoN79BwTFaWFyv4ohHW4vU/7i+mf7k9158BVib96AzwB06SaWiw17MPd3v5zfMrpWFPE77eSpF3VF5uJGhmCgJVhmTymBZhI/tXWzRGPfhlY4f6ohKMParVyaE2WByWm5LK2yq/f0rVmPwoF4oPwodGMl+ifLvifMlllpt1CgV6L6Pin5vbvYpnZHYtbwFgJQHd+bk9av1tQDl/Mp1jv5uZZrLq6RvNanBsFdJSzzu1KDSHW4ez71PZzycAnaWUAbOojsEvonlE79HkwhteervuCQmNGjCgjpYp9pbQaEN6EZBoL3urJ+bCjedEfJHe1LooRZng41KWdhm64s7UxHY++O/ZMP0r1SZxqcbT5p7veHNX8O6yG4qxtFBO9NKQfAG5EU+6/7q3ttUYwefzlFtlxsSXMk3UeFuJ7I3P6VnoOMYLlG8qh9UXoC+vXCZpR+TWBvNZsGT+3uqX8g1/w9em36wj1Bnvcw/mTkSLfvrHk5XW4D2cn50AAdHE9IMg/AjrK9gwcLO1siXeXpPd6veFEDZE07i4dYBLM4RH2kvxRiI7rxIFQW4yHtAbYBsOV6awvsKrvpQBm64F7knaTYmwcDesMO3FubQ0oxL7DHuKLtzT/wPTr3C+UZnmwKnRvqdiplhiAQEqizFb99woY1hkd+EAAAAAAAAAAAAAAAAAAAAA\" alt=\"ìƒìžì— ë“¤ì–´ê°„ ì¶˜ì‹ì´\" draggable=\"false\"></button><div id=\"tapEffects\" aria-hidden=\"true\"></div><div id=\"feverBadge\" hidden><span>FEVER TIME</span><b>Ã—2</b><small id=\"feverCountdown\">3ì´ˆ</small></div><div id=\"milestone\" aria-live=\"polite\"></div></div></div><p class=\"visual-hint\">ì¶˜ì‹ì´ì™€ í•¨ê»˜, ë¹™ê¸€ ëŒë¦¬ê³  í†¡!</p><div class=\"rotation-tools\"><button id=\"rotateToggle\" aria-pressed=\"true\">ìžë™ íšŒì „ ì¼œì§</button><button id=\"spinOnce\">í•œ ë°”í€´ â†»</button><button id=\"resetView\">ì •ë©´ìœ¼ë¡œ</button></div></div></div><div class=\"home-bottom\"><section class=\"panel participation-guide\" aria-labelledby=\"participationTitle\"><h2 id=\"participationTitle\">ì–´ë–»ê²Œ ì°¸ì—¬í•˜ë‚˜ìš”?</h2><div class=\"panel-content steps\"><div class=\"step\"><span class=\"step-icon\">01</span><div><strong>ê°™ì€ íŒ€ìœ¼ë¡œ ìž…ìž¥í•´ìš”</strong>ë©˜í† ê°€ íŒ€ì„ ë§Œë“¤ê³  ê°€ìž… ì½”ë“œë¥¼ ì „ë‹¬í•˜ë©´, ë©˜í‹°ë„ ì•„ì´ë””ì™€ ê°œì¸ ë¹„ë°€ë²ˆí˜¸ë¥¼ ë“±ë¡í•´ìš”.</div></div><div class=\"step\"><span class=\"step-icon\">02</span><div><strong>ê°ìžì˜ ê¸°ê¸°ì—ì„œ 30ì´ˆ</strong>ê°ìžì˜ ì—­í• ë¡œ ë¡œê·¸ì¸í•˜ê³  ê¾¹! 100ì ë§ˆë‹¤ 3ì´ˆê°„ 2ë°° ì ìˆ˜!</div></div><div class=\"step\"><span class=\"step-icon\">03</span><div><strong>ìµœê³  ê¸°ë¡ì„ ë”í•´ìš”</strong>ì´ë²ˆ ë‹¬ ë©˜í†  ìµœê³  + ë©˜í‹° ìµœê³  = ìš°ë¦¬ íŒ€ ì ìˆ˜!</div></div></div></section><details class=\"panel\" id=\"homeRanking\"><summary><span class=\"ranking-month\">ì´ë²ˆ ë‹¬</span> íŒ€ ëž­í‚¹</summary><div class=\"panel-content\"><p class=\"rank-note\">ì´ë²ˆ ë‹¬ ë‘ ì‚¬ëžŒì˜ ìµœê³  ì ìˆ˜ í•©ì‚° Â· ë™ì ì€ ê³µë™ ìˆœìœ„</p><div class=\"rank-list\"></div><p class=\"rank-note\">ë§¤ì›” 1ì¼ 0ì‹œ ì´ˆê¸°í™” (í•œêµ­ ì‹œê°„)<br>ì›”ì„ ë„˜ê¸´ ë„ì „ì€ ì‹œìž‘í•œ ë‹¬ì— ë°˜ì˜ë¼ìš”.</p><p class=\"rank-note sync-note\"></p></div></details></div><p class=\"notice\" id=\"connectionNote\" aria-live=\"polite\"></p></section>\n<dialog id=\"authScreen\" class=\"auth\" aria-labelledby=\"authTitle\"><button class=\"close\" id=\"backAuth\" aria-label=\"ë¡œê·¸ì¸ ì°½ ë‹«ê¸°\">Ã—</button><div class=\"auth-card\"><nav class=\"auth-switch\" aria-label=\"ì°¸ì—¬ ë°©ë²•\"><button id=\"joinTab\" type=\"button\">ë¡œê·¸ì¸</button><button id=\"createTab\" type=\"button\">ë©˜í†  íŒ€ ë§Œë“¤ê¸°</button><button id=\"enrollTab\" type=\"button\">ë©˜í‹° ì²« ê°€ìž…</button></nav><span class=\"eyebrow\">ìš°ë¦¬ íŒ€ìœ¼ë¡œ ë§Œë‚˜ëŠ” ì²«ê±¸ìŒ</span><h2 id=\"authTitle\">ìš°ë¦¬ íŒ€ ë§Œë“¤ê¸°</h2><p id=\"authDescription\">ë‘˜ë§Œì˜ ì´ë¦„ì„ ì •í•˜ê³ , íŒ€ì›ê³¼ ë¹„ë°€ë²ˆí˜¸ë¥¼ ë‚˜ëˆ  ì£¼ì„¸ìš”.</p><form id=\"teamForm\" novalidate>\n<div id=\"masterField\" class=\"auth-field\" hidden><label for=\"masterCode\">íŒ€ ìƒì„±ìš© ë§ˆìŠ¤í„° ì½”ë“œ</label><input id=\"masterCode\" type=\"password\" autocomplete=\"off\" maxlength=\"128\" placeholder=\"ì‚¬ë¬´êµ­ì—ì„œ ë°›ì€ ì½”ë“œ\"><small>íŒ€ì„ ë§Œë“¤ ë•Œë§Œ í•„ìš”í•´ìš”.</small></div>\n<label for=\"teamInput\">íŒ€ ì´ë¦„</label><input id=\"teamInput\" required maxlength=\"20\" autocomplete=\"off\" placeholder=\"ì˜ˆ: ì°°ë–¡ ë©˜í† ë§\">\n<div id=\"invitationField\" class=\"auth-field\" hidden><label id=\"invitationLabel\" for=\"invitationCode\">íŒ€ ê°€ìž… ì½”ë“œ</label><input id=\"invitationCode\" type=\"text\" minlength=\"6\" maxlength=\"64\" autocomplete=\"off\" spellcheck=\"false\"><small id=\"invitationHelp\"></small></div>\n<label for=\"participantInput\">ì•„ì´ë””</label><input id=\"participantInput\" required maxlength=\"30\" autocomplete=\"username\" placeholder=\"ë“±ë¡í•œ ì•„ì´ë””ì„ ìž…ë ¥í•´ ì£¼ì„¸ìš”\">\n<label for=\"password\">ê°œì¸ ë¹„ë°€ë²ˆí˜¸ <button id=\"showPassword\" type=\"button\" aria-pressed=\"false\">ë³´ê¸°</button></label><input id=\"password\" type=\"password\" required minlength=\"6\" maxlength=\"64\" autocomplete=\"current-password\" placeholder=\"ë³¸ì¸ë§Œ ì‚¬ìš©í•  ë¹„ë°€ë²ˆí˜¸ Â· 6ìž ì´ìƒ\">\n\n<details id=\"legacyField\" hidden><summary>ì´ë¯¸ ë§Œë“  íŒ€ì˜ ê¸°ë¡ì„ ì—°ê²°í•˜ë ¤ë©´</summary><p>ë§ˆìŠ¤í„° ì½”ë“œì™€ ì´ì „ íŒ€ ë¹„ë°€ë²ˆí˜¸ë¥¼ í™•ì¸í•´ ë©˜í†  ê³„ì •ì„ ë“±ë¡í•´ìš”. ê°œì¸ ë¹„ë°€ë²ˆí˜¸ëŠ” ì´ì „ íŒ€ ë¹„ë°€ë²ˆí˜¸ì™€ ë‹¤ë¥´ê²Œ ì •í•´ ì£¼ì„¸ìš”.</p><label for=\"legacyPassword\">ì´ì „ íŒ€ ë¹„ë°€ë²ˆí˜¸</label><input id=\"legacyPassword\" type=\"password\" maxlength=\"64\" autocomplete=\"off\"></details>\n<p class=\"error\" id=\"formError\" aria-live=\"polite\"></p><button class=\"raised\" id=\"submitTeam\">ì‹œìž‘í•˜ê¸° â†’</button></form><p class=\"auth-foot\">ë¡œê·¸ì¸ì€ íŒ€ ì´ë¦„Â·ì•„ì´ë””Â·ê°œì¸ ë¹„ë°€ë²ˆí˜¸ë¡œ í•´ìš”. ì—­í• ì€ ìžë™ìœ¼ë¡œ ì •í•´ì ¸ìš”.</p></div></dialog>\n<section id=\"gameScreen\" hidden><div class=\"game-heading\"><div><div class=\"eyebrow\">ìš°ë¦¬ íŒ€ì˜ ë„ì „</div><h2 class=\"team-title\" id=\"teamName\"></h2></div><div><span class=\"role-tag\" id=\"roleTag\"></span> <button class=\"back\" id=\"gameHome\">í™ˆìœ¼ë¡œ â†—</button></div></div><div class=\"game-grid\"><section class=\"play-area\"><div class=\"scoreboard\"><div class=\"metric\"><small>íšë“ ì ìˆ˜</small><strong id=\"score\">0</strong></div><div class=\"divider\"></div><div class=\"metric time\"><small>ë‚¨ì€ ì‹œê°„</small><strong id=\"timer\">00:30</strong></div><div class=\"divider\"></div><div class=\"metric time\"><small>ì´ë²ˆ ë‹¬ ë‚´ ìµœê³ </small><strong id=\"best\">â€”</strong></div></div><div class=\"game-summary\" id=\"mobileTeam\" style=\"display:none\"></div><div class=\"game-slot\" id=\"gameSlot\"></div><p class=\"play-hint\">í†¡ ëˆ„ë¥´ë©´ ì ìˆ˜ Â· ë“œëž˜ê·¸í•˜ë©´ íšŒì „ Â· 100ì ë§ˆë‹¤ 3ì´ˆ í”¼ë²„</p><button class=\"raised\" id=\"start\">30ì´ˆ ë„ì „ ì‹œìž‘í•˜ê¸° â†’</button><div class=\"progress\"><i id=\"bar\"></i></div><p class=\"status\" id=\"status\" aria-live=\"polite\">ì¤€ë¹„ëë‚˜ìš”? ìš°ë¦¬ íŒ€ ê¸°ë¡ì— ë„ì „í•´ ë³´ì„¸ìš”.</p></section><aside class=\"game-aside\"><section class=\"team-card\"><h3>ì´ë²ˆ ë‹¬ ìš°ë¦¬ íŒ€ ê¸°ë¡</h3><div class=\"person\"><span>ë©˜í† </span><strong id=\"mentorScore\"></strong></div><div class=\"person\"><span>ë©˜í‹°</span><strong id=\"menteeScore\"></strong></div><div class=\"total\"><span>ìš°ë¦¬ íŒ€ í•©ì‚°</span><b id=\"teamTotal\"></b></div><p class=\"partner-note\" id=\"partnerNote\"></p><div id=\"inviteNotice\" class=\"invite-notice\" hidden><span id=\"inviteMessage\"></span><strong id=\"inviteValue\"></strong><button id=\"inviteAction\" type=\"button\">ê°€ìž… ì½”ë“œ ë³µì‚¬</button><small id=\"inviteFeedback\" aria-live=\"polite\"></small></div><div class=\"team-actions\"><button id=\"leave\">ë‚˜ê°€ê¸°</button></div></section><details class=\"panel game-ranking\"><summary><span class=\"ranking-month\">ì´ë²ˆ ë‹¬</span> íŒ€ ëž­í‚¹</summary><div class=\"panel-content\"><p class=\"rank-note\">ë§¤ì›” 1ì¼ 0ì‹œ ìƒˆ ëž­í‚¹ Â· í•œêµ­ ì‹œê°„ ê¸°ì¤€</p><div class=\"rank-list\"></div><p class=\"rank-note\">ë§¤ì›” 1ì¼ 0ì‹œ ì´ˆê¸°í™” (í•œêµ­ ì‹œê°„)<br>ì›”ì„ ë„˜ê¸´ ë„ì „ì€ ì‹œìž‘í•œ ë‹¬ì— ë°˜ì˜ë¼ìš”.</p><p class=\"rank-note sync-note\"></p></div></details></aside></div></section>\n</main><footer><span>ëª¨ë‘ì˜ ë©˜í† ë§ Â· í•¨ê»˜í•  ë•Œ ë” ì»¤ì§€ëŠ” ìš°ë¦¬</span></footer><div id=\"fx\"></div><dialog id=\"result\"><span class=\"eyebrow\">30ì´ˆ, ë©‹ì§€ê²Œ í•´ëƒˆì–´ìš”!</span><h2>ìš°ë¦¬ íŒ€, í•œ ê±¸ìŒ ë”!</h2><div class=\"result-score\"><span id=\"resultScore\">0</span> <small>ì </small></div><p id=\"resultBreakdown\" class=\"result-breakdown\"></p><p id=\"resultDetail\" aria-live=\"polite\"></p><div class=\"result-team\" id=\"resultTeam\"></div><button class=\"secondary\" id=\"retrySave\" hidden>ê¸°ë¡ ì €ìž¥ ë‹¤ì‹œ ì‹œë„</button><button class=\"linkbtn\" id=\"discardSave\" hidden>ì €ìž¥í•˜ì§€ ì•Šê³  ê¸°ë¡ ë¹„ìš°ê¸°</button><div class=\"result-buttons\"><button class=\"raised\" id=\"again\">í•œ ë²ˆ ë” ë„ì „í•˜ê¸°</button><button class=\"linkbtn\" id=\"closeResult\">íŒ€ ê¸°ë¡ í™•ì¸í•˜ê¸°</button></div></dialog><script>console.warn('Scripts \"build/three.js\" and \"build/three.min.js\" are deprecated with r150+, and will be removed with r160. Please use ES Modules or alternatives: https://threejs.org/docs/index.html#manual/en/introduction/Installation'),\n/**\n * @license\n * Copyright 2010-2023 Three.js Authors\n * SPDX-License-Identifier: MIT\n */\nfunction(t,e){\"object\"==typeof exports&&\"undefined\"!=typeof module?e(exports):\"function\"==typeof define&&define.amd?define([\"exports\"],e):e((t=\"undefined\"!=typeof globalThis?globalThis:t||self).THREE={})}(this,(function(t){\"use strict\";const e=\"160\",n=1,i=2,r=3,s=0,a=1,o=100,l=204,c=205,h=0,u=1,d=2,p=0,m=1,f=2,g=3,_=4,v=5,x=6,y=\"attached\",M=\"detached\",S=300,b=301,T=302,E=303,w=304,A=306,R=1e3,C=1001,L=1002,P=1003,I=1004,U=1005,D=1006,N=1007,O=1008,F=1009,B=1012,z=1013,G=1014,H=1015,V=1016,k=1017,W=1018,X=1020,j=1023,q=1026,Y=1027,Z=1029,J=1031,K=1033,$=33776,Q=33777,tt=33778,et=33779,nt=35840,it=35841,rt=35842,st=35843,at=36196,ot=37492,lt=37496,ct=37808,ht=37809,ut=37810,dt=37811,pt=37812,mt=37813,ft=37814,gt=37815,_t=37816,vt=37817,xt=37818,yt=37819,Mt=37820,St=37821,bt=36492,Tt=36494,Et=36495,wt=36284,At=36285,Rt=36286,Ct=2300,Lt=2301,Pt=2302,It=2400,Ut=2401,Dt=2402,Nt=2500,Ot=2501,Ft=3e3,Bt=3001,zt=\"\",Gt=\"srgb\",Ht=\"srgb-linear\",Vt=\"display-p3\",kt=\"display-p3-linear\",Wt=\"linear\",Xt=\"srgb\",jt=\"rec709\",qt=\"p3\",Yt=7680,Zt=35044,Jt=\"300 es\",Kt=1035,$t=2e3,Qt=2001;class te{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e)}hasEventListener(t,e){if(void 0===this._listeners)return!1;const n=this._listeners;return void 0!==n[t]&&-1!==n[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return;const n=this._listeners[t];if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}dispatchEvent(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const n=e.slice(0);for(let e=0,i=n.length;e<i;e++)n[e].call(this,t);t.target=null}}}const ee=[\"00\",\"01\",\"02\",\"03\",\"04\",\"05\",\"06\",\"07\",\"08\",\"09\",\"0a\",\"0b\",\"0c\",\"0d\",\"0e\",\"0f\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"1a\",\"1b\",\"1c\",\"1d\",\"1e\",\"1f\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",\"2a\",\"2b\",\"2c\",\"2d\",\"2e\",\"2f\",\"30\",\"31\",\"32\",\"33\",\"34\",\"35\",\"36\",\"37\",\"38\",\"39\",\"3a\",\"3b\",\"3c\",\"3d\",\"3e\",\"3f\",\"40\",\"41\",\"42\",\"43\",\"44\",\"45\",\"46\",\"47\",\"48\",\"49\",\"4a\",\"4b\",\"4c\",\"4d\",\"4e\",\"4f\",\"50\",\"51\",\"52\",\"53\",\"54\",\"55\",\"56\",\"57\",\"58\",\"59\",\"5a\",\"5b\",\"5c\",\"5d\",\"5e\",\"5f\",\"60\",\"61\",\"62\",\"63\",\"64\",\"65\",\"66\",\"67\",\"68\",\"69\",\"6a\",\"6b\",\"6c\",\"6d\",\"6e\",\"6f\",\"70\",\"71\",\"72\",\"73\",\"74\",\"75\",\"76\",\"77\",\"78\",\"79\",\"7a\",\"7b\",\"7c\",\"7d\",\"7e\",\"7f\",\"80\",\"81\",\"82\",\"83\",\"84\",\"85\",\"86\",\"87\",\"88\",\"89\",\"8a\",\"8b\",\"8c\",\"8d\",\"8e\",\"8f\",\"90\",\"91\",\"92\",\"93\",\"94\",\"95\",\"96\",\"97\",\"98\",\"99\",\"9a\",\"9b\",\"9c\",\"9d\",\"9e\",\"9f\",\"a0\",\"a1\",\"a2\",\"a3\",\"a4\",\"a5\",\"a6\",\"a7\",\"a8\",\"a9\",\"aa\",\"ab\",\"ac\",\"ad\",\"ae\",\"af\",\"b0\",\"b1\",\"b2\",\"b3\",\"b4\",\"b5\",\"b6\",\"b7\",\"b8\",\"b9\",\"ba\",\"bb\",\"bc\",\"bd\",\"be\",\"bf\",\"c0\",\"c1\",\"c2\",\"c3\",\"c4\",\"c5\",\"c6\",\"c7\",\"c8\",\"c9\",\"ca\",\"cb\",\"cc\",\"cd\",\"ce\",\"cf\",\"d0\",\"d1\",\"d2\",\"d3\",\"d4\",\"d5\",\"d6\",\"d7\",\"d8\",\"d9\",\"da\",\"db\",\"dc\",\"dd\",\"de\",\"df\",\"e0\",\"e1\",\"e2\",\"e3\",\"e4\",\"e5\",\"e6\",\"e7\",\"e8\",\"e9\",\"ea\",\"eb\",\"ec\",\"ed\",\"ee\",\"ef\",\"f0\",\"f1\",\"f2\",\"f3\",\"f4\",\"f5\",\"f6\",\"f7\",\"f8\",\"f9\",\"fa\",\"fb\",\"fc\",\"fd\",\"fe\",\"ff\"];let ne=1234567;const ie=Math.PI/180,re=180/Math.PI;function se(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ee[255&t]+ee[t>>8&255]+ee[t>>16&255]+ee[t>>24&255]+\"-\"+ee[255&e]+ee[e>>8&255]+\"-\"+ee[e>>16&15|64]+ee[e>>24&255]+\"-\"+ee[63&n|128]+ee[n>>8&255]+\"-\"+ee[n>>16&255]+ee[n>>24&255]+ee[255&i]+ee[i>>8&255]+ee[i>>16&255]+ee[i>>24&255]).toLowerCase()}function ae(t,e,n){return Math.max(e,Math.min(n,t))}function oe(t,e){return(t%e+e)%e}function le(t,e,n){return(1-n)*t+n*e}function ce(t){return 0==(t&t-1)&&0!==t}function he(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ue(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error(\"Invalid component type.\")}}function de(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw new Error(\"Invalid component type.\")}}const pe={DEG2RAD:ie,RAD2DEG:re,generateUUID:se,clamp:ae,euclideanModulo:oe,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:le,damp:function(t,e,n,i){return le(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(oe(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){void 0!==t&&(ne=t);let e=ne+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*ie},radToDeg:function(t){return t*re},isPowerOfTwo:ce,ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:he,setQuaternionFromProperEuler:function(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case\"XYX\":t.set(o*h,l*u,l*d,o*c);break;case\"YZY\":t.set(l*d,o*h,l*u,o*c);break;case\"ZXZ\":t.set(l*u,l*d,o*h,o*c);break;case\"XZX\":t.set(o*h,l*m,l*p,o*c);break;case\"YXY\":t.set(l*p,o*h,l*m,o*c);break;case\"ZYZ\":t.set(l*m,l*p,o*h,o*c);break;default:console.warn(\"THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: \"+r)}},normalize:de,denormalize:ue};class me{constructor(t=0,e=0){me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error(\"index is out of range: \"+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error(\"index is out of range: \"+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,i,r,s,a,o,l){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==t&&this.set(t,e,n,i,r,s,a,o,l)}set(t,e,n,i,r,s,a,o,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],u=n[2],d=n[5],p=n[8],m=i[0],f=i[3],g=i[6],_=i[1],v=i[4],x=i[7],y=i[2],M=i[5],S=i[8];return r[0]=s*m+a*_+o*y,r[3]=s*f+a*v+o*M,r[6]=s*g+a*x+o*S,r[1]=l*m+c*_+h*y,r[4]=l*f+c*v+h*M,r[7]=l*g+c*x+h*S,r[2]=u*m+d*_+p*y,r[5]=u*f+d*v+p*M,r[8]=u*g+d*x+p*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,p=e*h+n*u+i*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(i*l-c*n)*m,t[2]=(a*n-i*s)*m,t[3]=u*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*o-l*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ge.makeScale(t,e)),this}rotate(t){return this.premultiply(ge.makeRotation(-t)),this}translate(t,e){return this.premultiply(ge.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<9;t++)if(e[t]!==n[t])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return(new this.constructor).fromArray(this.elements)}}const ge=new fe;function _e(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}const ve={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function xe(t,e){return new ve[t](e)}function ye(t){return document.createElementNS(\"http://www.w3.org/1999/xhtml\",t)}function Me(){const t=ye(\"canvas\");return t.style.display=\"block\",t}const Se={};function be(t){t in Se||(Se[t]=!0,console.warn(t))}const Te=(new fe).set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ee=(new fe).set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),we={[Ht]:{transfer:Wt,primaries:jt,toReference:t=>t,fromReference:t=>t},[Gt]:{transfer:Xt,primaries:jt,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[kt]:{transfer:Wt,primaries:qt,toReference:t=>t.applyMatrix3(Ee),fromReference:t=>t.applyMatrix3(Te)},[Vt]:{transfer:Xt,primaries:qt,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ee),fromReference:t=>t.applyMatrix3(Te).convertLinearToSRGB()}},Ae=new Set([Ht,kt]),Re={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Ae.has(t))throw new Error(`Unsupported working color space, \"${t}\".`);this._workingColorSpace=t},convert:function(t,e,n){if(!1===this.enabled||e===n||!e||!n)return t;const i=we[e].toReference;return(0,we[n].fromReference)(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return we[t].primaries},getTransfer:function(t){return t===zt?Wt:we[t].transfer}};function Ce(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function Le(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}let Pe;class Ie{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if(\"undefined\"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{void 0===Pe&&(Pe=ye(\"canvas\")),Pe.width=t.width,Pe.height=t.height;const n=Pe.getContext(\"2d\");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pe}return e.width>2048||e.height>2048?(console.warn(\"THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons\",t),e.toDataURL(\"image/jpeg\",.6)):e.toDataURL(\"image/png\")}static sRGBToLinear(t){if(\"undefined\"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||\"undefined\"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||\"undefined\"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=ye(\"canvas\");e.width=t.width,e.height=t.height;const n=e.getContext(\"2d\");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let t=0;t<r.length;t++)r[t]=255*Ce(r[t]/255);return n.putImageData(i,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*Ce(e[t]/255)):e[t]=Ce(e[t]);return{data:e,width:t.width,height:t.height}}return console.warn(\"THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.\"),t}}let Ue=0;class De{constructor(t=null){this.isSource=!0,Object.defineProperty(this,\"id\",{value:Ue++}),this.uuid=se(),this.data=t,this.version=0}set needsUpdate(t){!0===t&&this.version++}toJSON(t){const e=void 0===t||\"string\"==typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const n={uuid:this.uuid,url:\"\"},i=this.data;if(null!==i){let t;if(Array.isArray(i)){t=[];for(let e=0,n=i.length;e<n;e++)i[e].isDataTexture?t.push(Ne(i[e].image)):t.push(Ne(i[e]))}else t=Ne(i);n.url=t}return e||(t.images[this.uuid]=n),n}}function Ne(t){return\"undefined\"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||\"undefined\"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||\"undefined\"!=typeof ImageBitmap&&t instanceof ImageBitmap?Ie.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn(\"THREE.Texture: Unable to serialize Texture.\"),{})}let Oe=0;class Fe extends te{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=Fe.DEFAULT_ANISOTROPY,c=\"\"){super(),this.isTexture=!0,Object.defineProperty(this,\"id\",{value:Oe++}),this.uuid=se(),this.name=\"\",this.source=new De(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,\"string\"==typeof c?this.colorSpace=c:(be(\"THREE.Texture: Property .encoding has been replaced by .colorSpace.\"),this.colorSpace=c===Bt?Gt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||\"string\"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const n={metadata:{version:4.6,type:\"Texture\",generator:\"Texture.toJSON\"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:\"dispose\"})}transformUv(t){if(this.mapping!==S)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case R:t.x=t.x-Math.floor(t.x);break;case C:t.x=t.x<0?0:1;break;case L:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case R:t.y=t.y-Math.floor(t.y);break;case C:t.y=t.y<0?0:1;break;case L:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return be(\"THREE.Texture: Property .encoding has been replaced by .colorSpace.\"),this.colorSpace===Gt?Bt:Ft}set encoding(t){be(\"THREE.Texture: Property .encoding has been replaced by .colorSpace.\"),this.colorSpace=t===Bt?Gt:zt}}Fe.DEFAULT_IMAGE=null,Fe.DEFAULT_MAPPING=S,Fe.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,i=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error(\"index is out of range: \"+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(\"index is out of range: \"+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const s=.01,a=.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],p=o[9],m=o[2],f=o[6],g=o[10];if(Math.abs(c-u)<s&&Math.abs(h-m)<s&&Math.abs(p-f)<s){if(Math.abs(c+u)<a&&Math.abs(h+m)<a&&Math.abs(p+f)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;e=Math.PI;const t=(l+1)/2,o=(d+1)/2,_=(g+1)/2,v=(c+u)/4,x=(h+m)/4,y=(p+f)/4;return t>o&&t>_?t<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(t),i=v/n,r=x/n):o>_?o<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(o),n=v/i,r=y/i):_<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=x/r,i=y/r),this.set(n,i,r,e),this}let _=Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(f-p)/_,this.y=(h-m)/_,this.z=(u-c)/_,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ze extends te{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const i={width:t,height:e,depth:1};void 0!==n.encoding&&(be(\"THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.\"),n.colorSpace=n.encoding===Bt?Gt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:D,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){this.width===t&&this.height===e&&this.depth===n||(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return(new this.constructor).copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new De(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:\"dispose\"})}}class Ge extends ze{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class He extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=P,this.minFilter=P,this.wrapR=C,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ve extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=P,this.minFilter=P,this.wrapR=C,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ke{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3];const u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3];if(0===a)return t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(1===a)return t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=m);if(h!==m||o!==u||l!==d||c!==p){let t=1-a;const e=o*u+l*d+c*p+h*m,n=e>=0?1:-1,i=1-e*e;if(i>Number.EPSILON){const r=Math.sqrt(i),s=Math.atan2(r,e*n);t=Math.sin(t*s)/r,a=Math.sin(a*s)/r}const r=a*n;if(o=o*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-a){const t=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=t,l*=t,c*=t,h*=t}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return t[e]=a*p+c*h+o*d-l*u,t[e+1]=o*p+c*u+l*h-a*d,t[e+2]=l*p+c*d+a*u-o*h,t[e+3]=c*p-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(r/2),u=o(n/2),d=o(i/2),p=o(r/2);switch(s){case\"XYZ\":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case\"YXZ\":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case\"ZXY\":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case\"ZYX\":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case\"YZX\":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case\"XZY\":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn(\"THREE.Quaternion: .setFromEuler() encountered an unknown order: \"+s)}return!0===e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=n+a+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-o)*t,this._y=(r-l)*t,this._z=(s-i)*t}else if(n>a&&n>h){const t=2*Math.sqrt(1+n-a-h);this._w=(c-o)/t,this._x=.25*t,this._y=(i+s)/t,this._z=(r+l)/t}else if(a>h){const t=2*Math.sqrt(1+a-n-h);this._w=(r-l)/t,this._x=(i+s)/t,this._y=.25*t,this._z=(o+c)/t}else{const t=2*Math.sqrt(1+h-n-a);this._w=(s-i)/t,this._x=(r+l)/t,this._y=(o+c)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(0===n)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const t=1-e;return this._w=t*s+e*this._w,this._x=t*n+e*this._x,this._y=t*i+e*this._y,this._z=t*r+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class We{constructor(t=0,e=0,n=0){We.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error(\"index is out of range: \"+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(\"index is out of range: \"+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(je.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(je.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*n),c=2*(a*e-r*i),h=2*(r*n-s*e);return this.x=e+o*l+s*h-a*c,this.y=n+o*c+a*l-r*h,this.z=i+o*h+r*c-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xe.copy(this).projectOnVector(t),this.sub(Xe)}reflect(t){return this.sub(Xe.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xe=new We,je=new ke;class qe{constructor(t=new We(1/0,1/0,1/0),e=new We(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(void 0!==n){const i=n.getAttribute(\"position\");if(!0===e&&void 0!==i&&!0!==t.isInstancedMesh)for(let e=0,n=i.count;e<n;e++)!0===t.isMesh?t.getVertexPosition(e,Ze):Ze.fromBufferAttribute(i,e),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else void 0!==t.boundingBox?(null===t.boundingBox&&t.computeBoundingBox(),Je.copy(t.boundingBox)):(null===n.boundingBox&&n.computeBoundingBox(),Je.copy(n.boundingBox)),Je.applyMatrix4(t.matrixWorld),this.union(Je)}const i=t.children;for(let t=0,n=i.length;t<n;t++)this.expandByObject(i[t],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rn),sn.subVectors(this.max,rn),Ke.subVectors(t.a,rn),$e.subVectors(t.b,rn),Qe.subVectors(t.c,rn),tn.subVectors($e,Ke),en.subVectors(Qe,$e),nn.subVectors(Ke,Qe);let e=[0,-tn.z,tn.y,0,-en.z,en.y,0,-nn.z,nn.y,tn.z,0,-tn.x,en.z,0,-en.x,nn.z,0,-nn.x,-tn.y,tn.x,0,-en.y,en.x,0,-nn.y,nn.x,0];return!!ln(e,Ke,$e,Qe,sn)&&(e=[1,0,0,0,1,0,0,0,1],!!ln(e,Ke,$e,Qe,sn)&&(an.crossVectors(tn,en),e=[an.x,an.y,an.z],ln(e,Ke,$e,Qe,sn)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(Ze).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ye=[new We,new We,new We,new We,new We,new We,new We,new We],Ze=new We,Je=new qe,Ke=new We,$e=new We,Qe=new We,tn=new We,en=new We,nn=new We,rn=new We,sn=new We,an=new We,on=new We;function ln(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){on.fromArray(t,s);const a=r.x*Math.abs(on.x)+r.y*Math.abs(on.y)+r.z*Math.abs(on.z),o=e.dot(on),l=n.dot(on),c=i.dot(on);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const cn=new qe,hn=new We,un=new We;class dn{constructor(t=new We,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;void 0!==e?n.copy(e):cn.setFromPoints(t).getCenter(n);let i=0;for(let e=0,r=t.length;e<r;e++)i=Math.max(i,n.distanceToSquared(t[e]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hn.subVectors(t,this.center);const e=hn.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),n=.5*(t-this.radius);this.center.addScaledVector(hn,n/t),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(!0===this.center.equals(t.center)?this.radius=Math.max(this.radius,t.radius):(un.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hn.copy(t.center).add(un)),this.expandByPoint(hn.copy(t.center).sub(un))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return(new this.constructor).copy(this)}}const pn=new We,mn=new We,fn=new We,gn=new We,_n=new We,vn=new We,xn=new We;class yn{constructor(t=new We,e=new We(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mn.copy(t).add(e).multiplyScalar(.5),fn.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(mn);const r=.5*t.distanceTo(e),s=-this.direction.dot(fn),a=gn.dot(this.direction),o=-gn.dot(fn),l=gn.lengthSq(),c=Math.abs(1-s*s);let h,u,d,p;if(c>0)if(h=s*o-a,u=s*a-o,p=r*c,h>=0)if(u>=-p)if(u<=p){const t=1/c;h*=t,u*=t,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(mn).addScaledVector(fn,u),d}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return null===n?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);if(0===e)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),c>=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return null!==this.intersectBox(t,pn)}intersectTriangle(t,e,n,i,r){_n.subVectors(e,t),vn.subVectors(n,t),xn.crossVectors(_n,vn);let s,a=this.direction.dot(xn);if(a>0){if(i)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}gn.subVectors(this.origin,t);const o=s*this.direction.dot(vn.crossVectors(gn,vn));if(o<0)return null;const l=s*this.direction.dot(_n.cross(gn));if(l<0)return null;if(o+l>a)return null;const c=-s*gn.dot(xn);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class Mn{constructor(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==t&&this.set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f)}set(t,e,n,i,r,s,a,o,l,c,h,u,d,p,m,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new Mn).fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Sn.setFromMatrixColumn(t,0).length(),r=1/Sn.setFromMatrixColumn(t,1).length(),s=1/Sn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if(\"XYZ\"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=n+i*l,e[5]=t-r*l,e[9]=-a*o,e[2]=r-t*l,e[6]=i+n*l,e[10]=s*o}else if(\"YXZ\"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t+r*a,e[4]=i*a-n,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=n*a-i,e[6]=r+t*a,e[10]=s*o}else if(\"ZXY\"===t.order){const t=o*c,n=o*h,i=l*c,r=l*h;e[0]=t-r*a,e[4]=-s*h,e[8]=i+n*a,e[1]=n+i*a,e[5]=s*c,e[9]=r-t*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(\"ZYX\"===t.order){const t=s*c,n=s*h,i=a*c,r=a*h;e[0]=o*c,e[4]=i*l-n,e[8]=t*l+r,e[1]=o*h,e[5]=r*l+t,e[9]=n*l-i,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(\"YZX\"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=r-t*h,e[8]=i*h+n,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=n*h+i,e[10]=t-r*h}else if(\"XZY\"===t.order){const t=s*o,n=s*l,i=a*o,r=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=n*h-i,e[2]=i*h-n,e[6]=a*c,e[10]=r*h+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tn,t,En)}lookAt(t,e,n){const i=this.elements;return Rn.subVectors(t,e),0===Rn.lengthSq()&&(Rn.z=1),Rn.normalize(),wn.crossVectors(n,Rn),0===wn.lengthSq()&&(1===Math.abs(n.z)?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),wn.crossVectors(n,Rn)),wn.normalize(),An.crossVectors(Rn,wn),i[0]=wn.x,i[4]=An.x,i[8]=Rn.x,i[1]=wn.y,i[5]=An.y,i[9]=Rn.y,i[2]=wn.z,i[6]=An.z,i[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],u=n[9],d=n[13],p=n[2],m=n[6],f=n[10],g=n[14],_=n[3],v=n[7],x=n[11],y=n[15],M=i[0],S=i[4],b=i[8],T=i[12],E=i[1],w=i[5],A=i[9],R=i[13],C=i[2],L=i[6],P=i[10],I=i[14],U=i[3],D=i[7],N=i[11],O=i[15];return r[0]=s*M+a*E+o*C+l*U,r[4]=s*S+a*w+o*L+l*D,r[8]=s*b+a*A+o*P+l*N,r[12]=s*T+a*R+o*I+l*O,r[1]=c*M+h*E+u*C+d*U,r[5]=c*S+h*w+u*L+d*D,r[9]=c*b+h*A+u*P+d*N,r[13]=c*T+h*R+u*I+d*O,r[2]=p*M+m*E+f*C+g*U,r[6]=p*S+m*w+f*L+g*D,r[10]=p*b+m*A+f*P+g*N,r[14]=p*T+m*R+f*I+g*O,r[3]=_*M+v*E+x*C+y*U,r[7]=_*S+v*w+x*L+y*D,r[11]=_*b+v*A+x*P+y*N,r[15]=_*T+v*R+x*I+y*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+r*o*h-i*l*h-r*a*u+n*l*u+i*a*d-n*o*d)+t[7]*(+e*o*d-e*l*u+r*s*u-i*s*d+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+n*s*d+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*u+i*s*h-n*s*u+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],m=t[13],f=t[14],g=t[15],_=h*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,v=p*u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,x=c*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,y=p*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,M=e*_+n*v+i*x+r*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=_*S,t[1]=(m*u*r-h*f*r-m*i*d+n*f*d+h*i*g-n*u*g)*S,t[2]=(a*f*r-m*o*r+m*i*l-n*f*l-a*i*g+n*o*g)*S,t[3]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*d-n*o*d)*S,t[4]=v*S,t[5]=(c*f*r-p*u*r+p*i*d-e*f*d-c*i*g+e*u*g)*S,t[6]=(p*o*r-s*f*r-p*i*l+e*f*l+s*i*g-e*o*g)*S,t[7]=(s*u*r-c*o*r+c*i*l-e*u*l-s*i*d+e*o*d)*S,t[8]=x*S,t[9]=(p*h*r-c*m*r-p*n*d+e*m*d+c*n*g-e*h*g)*S,t[10]=(s*m*r-p*a*r+p*n*l-e*m*l-s*n*g+e*a*g)*S,t[11]=(c*a*r-s*h*r-c*n*l+e*h*l+s*n*d-e*a*d)*S,t[12]=y*S,t[13]=(c*m*i-p*h*i+p*n*u-e*m*u-c*n*f+e*h*f)*S,t[14]=(p*a*i-s*m*i-p*n*o+e*m*o+s*n*f-e*a*f)*S,t[15]=(s*h*i-c*a*i+c*n*o-e*h*o-s*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=a*h,_=o*l,v=o*c,x=o*h,y=n.x,M=n.y,S=n.z;return i[0]=(1-(m+g))*y,i[1]=(d+x)*y,i[2]=(p-v)*y,i[3]=0,i[4]=(d-x)*M,i[5]=(1-(u+g))*M,i[6]=(f+_)*M,i[7]=0,i[8]=(p+v)*S,i[9]=(f-_)*S,i[10]=(1-(u+m))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Sn.set(i[0],i[1],i[2]).length();const s=Sn.set(i[4],i[5],i[6]).length(),a=Sn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],bn.copy(this);const o=1/r,l=1/s,c=1/a;return bn.elements[0]*=o,bn.elements[1]*=o,bn.elements[2]*=o,bn.elements[4]*=l,bn.elements[5]*=l,bn.elements[6]*=l,bn.elements[8]*=c,bn.elements[9]*=c,bn.elements[10]*=c,e.setFromRotationMatrix(bn),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=2e3){const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let d,p;if(a===$t)d=-(s+r)/(s-r),p=-2*s*r/(s-r);else{if(a!==Qt)throw new Error(\"THREE.Matrix4.makePerspective(): Invalid coordinate system: \"+a);d=-s/(s-r),p=-s*r/(s-r)}return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=2e3){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(s-r),u=(e+t)*l,d=(n+i)*c;let p,m;if(a===$t)p=(s+r)*h,m=-2*h;else{if(a!==Qt)throw new Error(\"THREE.Matrix4.makeOrthographic(): Invalid coordinate system: \"+a);p=r*h,m=-1*h}return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=m,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let t=0;t<16;t++)if(e[t]!==n[t])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Sn=new We,bn=new Mn,Tn=new We(0,0,0),En=new We(1,1,1),wn=new We,An=new We,Rn=new We,Cn=new Mn,Ln=new ke;class Pn{constructor(t=0,e=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],u=i[6],d=i[10];switch(e){case\"XYZ\":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case\"YXZ\":this._x=Math.asin(-ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case\"ZXY\":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case\"ZYX\":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case\"YZX\":this._z=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case\"XZY\":this._z=Math.asin(-ae(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn(\"THREE.Euler: .setFromRotationMatrix() encountered an unknown order: \"+e)}return this._order=e,!0===n&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cn.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cn,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ln.setFromEuler(this),this.setFromQuaternion(Ln,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER=\"XYZ\";class In{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return 0!=(this.mask&t.mask)}isEnabled(t){return 0!=(this.mask&(1<<t|0))}}let Un=0;const Dn=new We,Nn=new ke,On=new Mn,Fn=new We,Bn=new We,zn=new We,Gn=new ke,Hn=new We(1,0,0),Vn=new We(0,1,0),kn=new We(0,0,1),Wn={type:\"added\"},Xn={type:\"removed\"};class jn extends te{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,\"id\",{value:Un++}),this.uuid=se(),this.name=\"\",this.type=\"Object3D\",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const t=new We,e=new Pn,n=new ke,i=new We(1,1,1);e._onChange((function(){n.setFromEuler(e,!1)})),n._onChange((function(){e.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mn},normalMatrix:{value:new fe}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new In,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(t,e){return Nn.setFromAxisAngle(t,e),this.quaternion.premultiply(Nn),this}rotateX(t){return this.rotateOnAxis(Hn,t)}rotateY(t){return this.rotateOnAxis(Vn,t)}rotateZ(t){return this.rotateOnAxis(kn,t)}translateOnAxis(t,e){return Dn.copy(t).applyQuaternion(this.quaternion),this.position.add(Dn.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hn,t)}translateY(t){return this.translateOnAxis(Vn,t)}translateZ(t){return this.translateOnAxis(kn,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fn.copy(t):Fn.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Bn,Fn,this.up):On.lookAt(Fn,Bn,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Nn.setFromRotationMatrix(On),this.quaternion.premultiply(Nn.invert()))}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error(\"THREE.Object3D.add: object can't be added as a child of itself.\",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wn)):console.error(\"THREE.Object3D.add: object not an instance of THREE.Object3D.\",t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return-1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xn)),this}removeFromParent(){const t=this.parent;return null!==t&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty(\"id\",t)}getObjectByName(t){return this.getObjectByProperty(\"name\",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const i=this.children[n].getObjectByProperty(t,e);if(void 0!==i)return i}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,t,zn),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bn,Gn,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(!1===this.visible)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const i=e[n];!0!==i.matrixWorldAutoUpdate&&!0!==t||i.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(!0===t&&null!==n&&!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children;for(let e=0,n=t.length;e<n;e++){const n=t[e];!0===n.matrixWorldAutoUpdate&&n.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=void 0===t||\"string\"==typeof t,n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:\"Object\",generator:\"Object3D.toJSON\"});const i={};function r(e,n){return void 0===e[n.uuid]&&(e[n.uuid]=n.toJSON(t)),n.uuid}if(i.uuid=this.uuid,i.type=this.type,\"\"!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type=\"InstancedMesh\",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type=\"BatchedMesh\",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((t=>({boxInitialized:t.boxInitialized,boxMin:t.box.min.toArray(),boxMax:t.box.max.toArray(),sphereInitialized:t.sphereInitialized,sphereRadius:t.sphere.radius,sphereCenter:t.sphere.center.toArray()}))),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),null!==this.boundingSphere&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),null!==this.boundingBox&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const n=e.shapes;if(Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const i=n[e];r(t.shapes,i)}else r(t.shapes,n)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let n=0,i=this.material.length;n<i;n++)e.push(r(t.materials,this.material[n]));i.material=e}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let e=0;e<this.children.length;e++)i.children.push(this.children[e].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let e=0;e<this.animations.length;e++){const n=this.animations[e];i.animations.push(r(t.animations,n))}}if(e){const e=s(t.geometries),i=s(t.materials),r=s(t.textures),a=s(t.images),o=s(t.shapes),l=s(t.skeletons),c=s(t.animations),h=s(t.nodes);e.length>0&&(n.geometries=e),i.length>0&&(n.materials=i),r.length>0&&(n.textures=r),a.length>0&&(n.images=a),o.length>0&&(n.shapes=o),l.length>0&&(n.skeletons=l),c.length>0&&(n.animations=c),h.length>0&&(n.nodes=h)}return n.object=i,n;function s(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i)}return e}}clone(t){return(new this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const n=t.children[e];this.add(n.clone())}return this}}jn.DEFAULT_UP=new We(0,1,0),jn.DEFAULT_MATRIX_AUTO_UPDATE=!0,jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new We,Yn=new We,Zn=new We,Jn=new We,Kn=new We,$n=new We,Qn=new We,ti=new We,ei=new We,ni=new We;let ii=!1;class ri{constructor(t=new We,e=new We,n=new We){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qn.subVectors(t,e),i.cross(qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qn.subVectors(i,e),Yn.subVectors(n,e),Zn.subVectors(t,e);const s=qn.dot(qn),a=qn.dot(Yn),o=qn.dot(Zn),l=Yn.dot(Yn),c=Yn.dot(Zn),h=s*l-a*a;if(0===h)return r.set(0,0,0),null;const u=1/h,d=(l*o-a*c)*u,p=(s*c-a*o)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return null!==this.getBarycoord(t,e,n,i,Jn)&&(Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1)}static getUV(t,e,n,i,r,s,a,o){return!1===ii&&(console.warn(\"THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().\"),ii=!0),this.getInterpolation(t,e,n,i,r,s,a,o)}static getInterpolation(t,e,n,i,r,s,a,o){return null===this.getBarycoord(t,e,n,i,Jn)?(o.x=0,o.y=0,\"z\"in o&&(o.z=0),\"w\"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Jn.x),o.addScaledVector(s,Jn.y),o.addScaledVector(a,Jn.z),o)}static isFrontFacing(t,e,n,i){return qn.subVectors(n,e),Yn.subVectors(t,e),qn.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),.5*qn.cross(Yn).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return!1===ii&&(console.warn(\"THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().\"),ii=!0),ri.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return ri.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;Kn.subVectors(i,n),$n.subVectors(r,n),ti.subVectors(t,n);const o=Kn.dot(ti),l=$n.dot(ti);if(o<=0&&l<=0)return e.copy(n);ei.subVectors(t,i);const c=Kn.dot(ei),h=$n.dot(ei);if(c>=0&&h<=c)return e.copy(i);const u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(n).addScaledVector(Kn,s);ni.subVectors(t,r);const d=Kn.dot(ni),p=$n.dot(ni);if(p>=0&&d<=p)return e.copy(r);const m=d*l-o*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector($n,a);const f=c*p-d*h;if(f<=0&&h-c>=0&&d-p>=0)return Qn.subVectors(r,i),a=(h-c)/(h-c+(d-p)),e.copy(i).addScaledVector(Qn,a);const g=1/(f+m+u);return s=m*g,a=u*g,e.copy(n).addScaledVector(Kn,s).addScaledVector($n,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const si={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},oi={h:0,s:0,l:0};function li(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+6*(e-t)*(2/3-n):t}class ci{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(void 0===e&&void 0===n){const e=t;e&&e.isColor?this.copy(e):\"number\"==typeof e?this.setHex(e):\"string\"==typeof e&&this.setStyle(e)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Gt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Re.workingColorSpace){if(t=oe(t,1),e=ae(e,0,1),n=ae(n,0,1),0===e)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+e):n+e-n*e,r=2*n-i;this.r=li(r,i,t+1/3),this.g=li(r,i,t),this.b=li(r,i,t-1/3)}return Re.toWorkingColorSpace(this,i),this}setStyle(t,e=Gt){function n(e){void 0!==e&&parseFloat(e)<1&&console.warn(\"THREE.Color: Alpha component of \"+t+\" will be ignored.\")}let i;if(i=/^(\\w+)\\(([^\\)]*)\\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case\"rgb\":case\"rgba\":if(r=/^\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case\"hsl\":case\"hsla\":if(r=/^\\s*(\\d*\\.?\\d+)\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn(\"THREE.Color: Unknown color model \"+t)}}else if(i=/^\\#([A-Fa-f\\d]+)$/.exec(t)){const n=i[1],r=n.length;if(3===r)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(6===r)return this.setHex(parseInt(n,16),e);console.warn(\"THREE.Color: Invalid hex color \"+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Gt){const n=si[t.toLowerCase()];return void 0!==n?this.setHex(n,e):console.warn(\"THREE.Color: Unknown color \"+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ce(t.r),this.g=Ce(t.g),this.b=Ce(t.b),this}copyLinearToSRGB(t){return this.r=Le(t.r),this.g=Le(t.g),this.b=Le(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gt){return Re.fromWorkingColorSpace(hi.copy(this),t),65536*Math.round(ae(255*hi.r,0,255))+256*Math.round(ae(255*hi.g,0,255))+Math.round(ae(255*hi.b,0,255))}getHexString(t=Gt){return(\"000000\"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.fromWorkingColorSpace(hi.copy(this),e);const n=hi.r,i=hi.g,r=hi.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const t=s-a;switch(l=c<=.5?t/(s+a):t/(2-s-a),s){case n:o=(i-r)/t+(i<r?6:0);break;case i:o=(r-n)/t+2;break;case r:o=(n-i)/t+4}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Re.workingColorSpace){return Re.fromWorkingColorSpace(hi.copy(this),e),t.r=hi.r,t.g=hi.g,t.b=hi.b,t}getStyle(t=Gt){Re.fromWorkingColorSpace(hi.copy(this),t);const e=hi.r,n=hi.g,i=hi.b;return t!==Gt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(oi);const n=le(ai.h,oi.h,e),i=le(ai.s,oi.s,e),r=le(ai.l,oi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hi=new ci;ci.NAMES=si;let ui=0;class di extends te{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,\"id\",{value:ui++}),this.uuid=se(),this.name=\"\",this.type=\"Material\",this.blending=1,this.side=s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=l,this.blendDst=c,this.blendEquation=o,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ci(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yt,this.stencilZFail=Yt,this.stencilZPass=Yt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const n=t[e];if(void 0===n){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];void 0!==i?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){const e=void 0===t||\"string\"==typeof t;e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:\"Material\",generator:\"Material.toJSON\"}};function i(t){const e=[];for(const n in t){const i=t[n];delete i.metadata,e.push(i)}return e}if(n.uuid=this.uuid,n.type=this.type,\"\"!==this.name&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),void 0!==this.roughness&&(n.roughness=this.roughness),void 0!==this.metalness&&(n.metalness=this.metalness),void 0!==this.sheen&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(n.shininess=this.shininess),void 0!==this.clearcoat&&(n.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(n.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(n.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),void 0!==this.anisotropy&&(n.anisotropy=this.anisotropy),void 0!==this.anisotropyRotation&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(n.combine=this.combine)),void 0!==this.envMapIntensity&&(n.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(n.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(n.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(n.size=this.size),null!==this.shadowSide&&(n.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(n.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(n.blending=this.blending),this.side!==s&&(n.side=this.side),!0===this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=!0),this.blendSrc!==l&&(n.blendSrc=this.blendSrc),this.blendDst!==c&&(n.blendDst=this.blendDst),this.blendEquation!==o&&(n.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(n.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(n.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(n.blendAlpha=this.blendAlpha),3!==this.depthFunc&&(n.depthFunc=this.depthFunc),!1===this.depthTest&&(n.depthTest=this.depthTest),!1===this.depthWrite&&(n.depthWrite=this.depthWrite),!1===this.colorWrite&&(n.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(n.stencilWriteMask=this.stencilWriteMask),519!==this.stencilFunc&&(n.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(n.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yt&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yt&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yt&&(n.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(n.stencilWrite=this.stencilWrite),void 0!==this.rotation&&0!==this.rotation&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),0!==this.polygonOffsetFactor&&(n.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(n.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(n.linewidth=this.linewidth),void 0!==this.dashSize&&(n.dashSize=this.dashSize),void 0!==this.gapSize&&(n.gapSize=this.gapSize),void 0!==this.scale&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaHash&&(n.alphaHash=!0),!0===this.alphaToCoverage&&(n.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=!0),!0===this.forceSinglePass&&(n.forceSinglePass=!0),!0===this.wireframe&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),\"round\"!==this.wireframeLinecap&&(n.wireframeLinecap=this.wireframeLinecap),\"round\"!==this.wireframeLinejoin&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=!0),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),!1===this.fog&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){const e=i(t.textures),r=i(t.images);e.length>0&&(n.textures=e),r.length>0&&(n.images=r)}return n}clone(){return(new this.constructor).copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(null!==e){const t=e.length;n=new Array(t);for(let i=0;i!==t;++i)n[i]=e[i].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:\"dispose\"})}set needsUpdate(t){!0===t&&this.version++}}class pi extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type=\"MeshBasicMaterial\",this.color=new ci(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=\"round\",this.wireframeLinejoin=\"round\",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mi=fi();function fi(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(i[t]=0,i[256|t]=32768,r[t]=24,r[256|t]=24):e<-14?(i[t]=1024>>-e-14,i[256|t]=1024>>-e-14|32768,r[t]=-e-1,r[256|t]=-e-1):e<=15?(i[t]=e+15<<10,i[256|t]=e+15<<10|32768,r[t]=13,r[256|t]=13):e<128?(i[t]=31744,i[256|t]=64512,r[t]=24,r[256|t]=24):(i[t]=31744,i[256|t]=64512,r[t]=13,r[256|t]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,n=0;for(;0==(8388608&e);)e<<=1,n-=8388608;e&=-8388609,n+=947912704,s[t]=e|n}for(let t=1024;t<2048;++t)s[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)a[t]=t<<23;a[31]=1199570944,a[32]=2147483648;for(let t=33;t<63;++t)a[t]=2147483648+(t-32<<23);a[63]=3347054592;for(let t=1;t<64;++t)32!==t&&(o[t]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function gi(t){Math.abs(t)>65504&&console.warn(\"THREE.DataUtils.toHalfFloat(): Value out of range.\"),t=ae(t,-65504,65504),mi.floatView[0]=t;const e=mi.uint32View[0],n=e>>23&511;return mi.baseTable[n]+((8388607&e)>>mi.shiftTable[n])}function _i(t){const e=t>>10;return mi.uint32View[0]=mi.mantissaTable[mi.offsetTable[e]+(1023&t)]+mi.exponentTable[e],mi.floatView[0]}const vi={toHalfFloat:gi,fromHalfFloat:_i},xi=new We,yi=new me;class Mi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError(\"THREE.BufferAttribute: array should be a Typed Array.\");this.isBufferAttribute=!0,this.name=\"\",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=n,this.usage=Zt,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=H,this.version=0}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}get updateRange(){return console.warn(\"THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.\"),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(2===this.itemSize)for(let e=0,n=this.count;e<n;e++)yi.fromBufferAttribute(this,e),yi.applyMatrix3(t),this.setXY(e,yi.x,yi.y);else if(3===this.itemSize)for(let e=0,n=this.count;e<n;e++)xi.fromBufferAttribute(this,e),xi.applyMatrix3(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xi.fromBufferAttribute(this,e),xi.applyMatrix4(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xi.fromBufferAttribute(this,e),xi.applyNormalMatrix(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xi.fromBufferAttribute(this,e),xi.transformDirection(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ue(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ue(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ue(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ue(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ue(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return\"\"!==this.name&&(t.name=this.name),this.usage!==Zt&&(t.usage=this.usage),t}}class Si extends Mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bi extends Mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ti extends Mi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ei=0;const wi=new Mn,Ai=new jn,Ri=new We,Ci=new qe,Li=new qe,Pi=new We;class Ii extends te{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,\"id\",{value:Ei++}),this.uuid=se(),this.name=\"\",this.type=\"BufferGeometry\",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_e(t)?bi:Si)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(void 0!==n){const e=(new fe).getNormalMatrix(t);n.applyNormalMatrix(e),n.needsUpdate=!0}const i=this.attributes.tangent;return void 0!==i&&(i.transformDirection(t),i.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,n){return wi.makeTranslation(t,e,n),this.applyMatrix4(wi),this}scale(t,e,n){return wi.makeScale(t,e,n),this.applyMatrix4(wi),this}lookAt(t){return Ai.lookAt(t),Ai.updateMatrix(),this.applyMatrix4(Ai.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const i=t[n];e.push(i.x,i.y,i.z||0)}return this.setAttribute(\"position\",new Ti(e,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new qe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set \"mesh.frustumCulled\" to \"false\".',this),void this.boundingBox.set(new We(-1/0,-1/0,-1/0),new We(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Ci.setFromBufferAttribute(n),this.morphTargetsRelative?(Pi.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Pi),Pi.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Pi)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set \"mesh.frustumCulled\" to \"false\".',this),void this.boundingSphere.set(new We,1/0);if(t){const n=this.boundingSphere.center;if(Ci.setFromBufferAttribute(t),e)for(let t=0,n=e.length;t<n;t++){const n=e[t];Li.setFromBufferAttribute(n),this.morphTargetsRelative?(Pi.addVectors(Ci.min,Li.min),Ci.expandByPoint(Pi),Pi.addVectors(Ci.max,Li.max),Ci.expandByPoint(Pi)):(Ci.expandByPoint(Li.min),Ci.expandByPoint(Li.max))}Ci.getCenter(n);let i=0;for(let e=0,r=t.count;e<r;e++)Pi.fromBufferAttribute(t,e),i=Math.max(i,n.distanceToSquared(Pi));if(e)for(let r=0,s=e.length;r<s;r++){const s=e[r],a=this.morphTargetsRelative;for(let e=0,r=s.count;e<r;e++)Pi.fromBufferAttribute(s,e),a&&(Ri.fromBufferAttribute(t,e),Pi.add(Ri)),i=Math.max(i,n.distanceToSquared(Pi))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error(\"THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)\");const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;!1===this.hasAttribute(\"tangent\")&&this.setAttribute(\"tangent\",new Mi(new Float32Array(4*a),4));const o=this.getAttribute(\"tangent\").array,l=[],c=[];for(let t=0;t<a;t++)l[t]=new We,c[t]=new We;const h=new We,u=new We,d=new We,p=new me,m=new me,f=new me,g=new We,_=new We;function v(t,e,n){h.fromArray(i,3*t),u.fromArray(i,3*e),d.fromArray(i,3*n),p.fromArray(s,2*t),m.fromArray(s,2*e),f.fromArray(s,2*n),u.sub(h),d.sub(h),m.sub(p),f.sub(p);const r=1/(m.x*f.y-f.x*m.y);isFinite(r)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(r),_.copy(d).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(r),l[t].add(g),l[e].add(g),l[n].add(g),c[t].add(_),c[e].add(_),c[n].add(_))}let x=this.groups;0===x.length&&(x=[{start:0,count:n.length}]);for(let t=0,e=x.length;t<e;++t){const e=x[t],i=e.start;for(let t=i,r=i+e.count;t<r;t+=3)v(n[t+0],n[t+1],n[t+2])}const y=new We,M=new We,S=new We,b=new We;function T(t){S.fromArray(r,3*t),b.copy(S);const e=l[t];y.copy(e),y.sub(S.multiplyScalar(S.dot(e))).normalize(),M.crossVectors(b,e);const n=M.dot(c[t])<0?-1:1;o[4*t]=y.x,o[4*t+1]=y.y,o[4*t+2]=y.z,o[4*t+3]=n}for(let t=0,e=x.length;t<e;++t){const e=x[t],i=e.start;for(let t=i,r=i+e.count;t<r;t+=3)T(n[t+0]),T(n[t+1]),T(n[t+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute(\"position\");if(void 0!==e){let n=this.getAttribute(\"normal\");if(void 0===n)n=new Mi(new Float32Array(3*e.count),3),this.setAttribute(\"normal\",n);else for(let t=0,e=n.count;t<e;t++)n.setXYZ(t,0,0,0);const i=new We,r=new We,s=new We,a=new We,o=new We,l=new We,c=new We,h=new We;if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(n,d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(c),o.add(c),l.add(c),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let t=0,a=e.count;t<a;t+=3)i.fromBufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(t+0,c.x,c.y,c.z),n.setXYZ(t+1,c.x,c.y,c.z),n.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pi.fromBufferAttribute(t,e),Pi.normalize(),t.setXYZ(e,Pi.x,Pi.y,Pi.z)}toNonIndexed(){function t(t,e){const n=t.array,i=t.itemSize,r=t.normalized,s=new n.constructor(e.length*i);let a=0,o=0;for(let r=0,l=e.length;r<l;r++){a=t.isInterleavedBufferAttribute?e[r]*t.data.stride+t.offset:e[r]*i;for(let t=0;t<i;t++)s[o++]=n[a++]}return new Mi(s,i,r)}if(null===this.index)return console.warn(\"THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.\"),this;const e=new Ii,n=this.index.array,i=this.attributes;for(const r in i){const s=t(i[r],n);e.setAttribute(r,s)}const r=this.morphAttributes;for(const i in r){const s=[],a=r[i];for(let e=0,i=a.length;e<i;e++){const i=t(a[e],n);s.push(i)}e.morphAttributes[i]=s}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let t=0,n=s.length;t<n;t++){const n=s[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:\"BufferGeometry\",generator:\"BufferGeometry.toJSON\"}};if(t.uuid=this.uuid,t.type=this.type,\"\"!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const e in n){const i=n[e];t.data.attributes[e]=i.toJSON(t.data)}const i={};let r=!1;for(const e in this.morphAttributes){const n=this.morphAttributes[e],s=[];for(let e=0,i=n.length;e<i;e++){const i=n[e];s.push(i.toJSON(t.data))}s.length>0&&(i[e]=s,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return null!==a&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return(new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;null!==n&&this.setIndex(n.clone(e));const i=t.attributes;for(const t in i){const n=i[t];this.setAttribute(t,n.clone(e))}const r=t.morphAttributes;for(const t in r){const n=[],i=r[t];for(let t=0,r=i.length;t<r;t++)n.push(i[t].clone(e));this.morphAttributes[t]=n}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let t=0,e=s.length;t<e;t++){const e=s[t];this.addGroup(e.start,e.count,e.materialIndex)}const a=t.boundingBox;null!==a&&(this.boundingBox=a.clone());const o=t.boundingSphere;return null!==o&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:\"dispose\"})}}const Ui=new Mn,Di=new yn,Ni=new dn,Oi=new We,Fi=new We,Bi=new We,zi=new We,Gi=new We,Hi=new We,Vi=new me,ki=new me,Wi=new me,Xi=new We,ji=new We,qi=new We,Yi=new We,Zi=new We;class Ji extends jn{constructor(t=new Ii,e=new pi){super(),this.isMesh=!0,this.type=\"Mesh\",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(void 0!==n){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=n.length;t<e;t++){const e=n[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Hi.set(0,0,0);for(let n=0,i=r.length;n<i;n++){const i=a[n],o=r[n];0!==i&&(Gi.fromBufferAttribute(o,t),s?Hi.addScaledVector(Gi,i):Hi.addScaledVector(Gi.sub(e),i))}e.add(Hi)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(void 0!==i){if(null===n.boundingSphere&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!1===Ni.containsPoint(Di.origin)){if(null===Di.intersectSphere(Ni,Oi))return;if(Di.origin.distanceToSquared(Oi)>(t.far-t.near)**2)return}Ui.copy(r).invert(),Di.copy(t.ray).applyMatrix4(Ui),null!==n.boundingBox&&!1===Di.intersectsBox(n.boundingBox)||this._computeIntersections(t,e,Di)}}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(null!==a)if(Array.isArray(s))for(let r=0,o=u.length;r<o;r++){const o=u[r],p=s[o.materialIndex];for(let r=Math.max(o.start,d.start),s=Math.min(a.count,Math.min(o.start+o.count,d.start+d.count));r<s;r+=3){i=Ki(this,p,t,n,l,c,h,a.getX(r),a.getX(r+1),a.getX(r+2)),i&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=o.materialIndex,e.push(i))}}else{for(let r=Math.max(0,d.start),o=Math.min(a.count,d.start+d.count);r<o;r+=3){i=Ki(this,s,t,n,l,c,h,a.getX(r),a.getX(r+1),a.getX(r+2)),i&&(i.faceIndex=Math.floor(r/3),e.push(i))}}else if(void 0!==o)if(Array.isArray(s))for(let r=0,a=u.length;r<a;r++){const a=u[r],p=s[a.materialIndex];for(let r=Math.max(a.start,d.start),s=Math.min(o.count,Math.min(a.start+a.count,d.start+d.count));r<s;r+=3){i=Ki(this,p,t,n,l,c,h,r,r+1,r+2),i&&(i.faceIndex=Math.floor(r/3),i.face.materialIndex=a.materialIndex,e.push(i))}}else{for(let r=Math.max(0,d.start),a=Math.min(o.count,d.start+d.count);r<a;r+=3){i=Ki(this,s,t,n,l,c,h,r,r+1,r+2),i&&(i.faceIndex=Math.floor(r/3),e.push(i))}}}}function Ki(t,e,n,i,r,o,l,c,h,u){t.getVertexPosition(c,Fi),t.getVertexPosition(h,Bi),t.getVertexPosition(u,zi);const d=function(t,e,n,i,r,o,l,c){let h;if(h=e.side===a?i.intersectTriangle(l,o,r,!0,c):i.intersectTriangle(r,o,l,e.side===s,c),null===h)return null;Zi.copy(c),Zi.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Zi);return u<n.near||u>n.far?null:{distance:u,point:Zi.clone(),object:t}}(t,e,n,i,Fi,Bi,zi,Yi);if(d){r&&(Vi.fromBufferAttribute(r,c),ki.fromBufferAttribute(r,h),Wi.fromBufferAttribute(r,u),d.uv=ri.getInterpolation(Yi,Fi,Bi,zi,Vi,ki,Wi,new me)),o&&(Vi.fromBufferAttribute(o,c),ki.fromBufferAttribute(o,h),Wi.fromBufferAttribute(o,u),d.uv1=ri.getInterpolation(Yi,Fi,Bi,zi,Vi,ki,Wi,new me),d.uv2=d.uv1),l&&(Xi.fromBufferAttribute(l,c),ji.fromBufferAttribute(l,h),qi.fromBufferAttribute(l,u),d.normal=ri.getInterpolation(Yi,Fi,Bi,zi,Xi,ji,qi,new We),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const t={a:c,b:h,c:u,normal:new We,materialIndex:0};ri.getNormal(Fi,Bi,zi,t.normal),d.face=t}return d}class $i extends Ii{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type=\"BoxGeometry\",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],h=[];let u=0,d=0;function p(t,e,n,i,r,s,p,m,f,g,_){const v=s/f,x=p/g,y=s/2,M=p/2,S=m/2,b=f+1,T=g+1;let E=0,w=0;const A=new We;for(let s=0;s<T;s++){const a=s*x-M;for(let o=0;o<b;o++){const u=o*v-y;A[t]=u*i,A[e]=a*r,A[n]=S,l.push(A.x,A.y,A.z),A[t]=0,A[e]=0,A[n]=m>0?1:-1,c.push(A.x,A.y,A.z),h.push(o/f),h.push(1-s/g),E+=1}}for(let t=0;t<g;t++)for(let e=0;e<f;e++){const n=u+e+b*t,i=u+e+b*(t+1),r=u+(e+1)+b*(t+1),s=u+(e+1)+b*t;o.push(n,i,s),o.push(i,r,s),w+=6}a.addGroup(d,w,_),d+=w,u+=E}p(\"z\",\"y\",\"x\",-1,-1,n,e,t,s,r,0),p(\"z\",\"y\",\"x\",1,-1,n,e,-t,s,r,1),p(\"x\",\"z\",\"y\",1,1,t,n,e,i,s,2),p(\"x\",\"z\",\"y\",1,-1,t,n,-e,i,s,3),p(\"x\",\"y\",\"z\",1,-1,t,e,n,i,r,4),p(\"x\",\"y\",\"z\",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute(\"position\",new Ti(l,3)),this.setAttribute(\"normal\",new Ti(c,3)),this.setAttribute(\"uv\",new Ti(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn(\"UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().\"),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tr(t){const e={};for(let n=0;n<t.length;n++){const i=Qi(t[n]);for(const t in i)e[t]=i[t]}return e}function er(t){return null===t.getRenderTarget()?t.outputColorSpace:Re.workingColorSpace}const nr={clone:Qi,merge:tr};class ir extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type=\"ShaderMaterial\",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=\"void main() {\\n\\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}\",this.fragmentShader=\"void main() {\\n\\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\\n}\",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=function(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const i=this.uniforms[n].value;i&&i.isTexture?e.uniforms[n]={type:\"t\",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[n]={type:\"c\",value:i.getHex()}:i&&i.isVector2?e.uniforms[n]={type:\"v2\",value:i.toArray()}:i&&i.isVector3?e.uniforms[n]={type:\"v3\",value:i.toArray()}:i&&i.isVector4?e.uniforms[n]={type:\"v4\",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[n]={type:\"m3\",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[n]={type:\"m4\",value:i.toArray()}:e.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const t in this.extensions)!0===this.extensions[t]&&(n[t]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rr extends jn{constructor(){super(),this.isCamera=!0,this.type=\"Camera\",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=$t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}class sr extends rr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=\"PerspectiveCamera\",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*re*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*ie*this.fov);return.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*re*Math.atan(Math.tan(.5*ie*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*ie*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(null!==this.view&&this.view.enabled){const t=s.fullWidth,a=s.fullHeight;r+=s.offsetX*i/t,e-=s.offsetY*n/a,i*=s.width/t,n*=s.height/a}const a=this.filmOffset;0!==a&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ar=-90;class or extends jn{constructor(t,e,n){super(),this.type=\"CubeCamera\",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sr(ar,1,t,e);i.layers=this.layers,this.add(i);const r=new sr(ar,1,t,e);r.layers=this.layers,this.add(r);const s=new sr(ar,1,t,e);s.layers=this.layers,this.add(s);const a=new sr(ar,1,t,e);a.layers=this.layers,this.add(a);const o=new sr(ar,1,t,e);o.layers=this.layers,this.add(o);const l=new sr(ar,1,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const t of e)this.remove(t);if(t===$t)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else{if(t!==Qt)throw new Error(\"THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: \"+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1)}for(const t of e)this.add(t),t.updateMatrixWorld()}update(t,e){null===this.parent&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(h,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class lr extends Fe{constructor(t,e,n,i,r,s,a,o,l,c){super(t=void 0!==t?t:[],e=void 0!==e?e:b,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cr extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];void 0!==e.encoding&&(be(\"THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.\"),e.colorSpace=e.encoding===Bt?Gt:zt),this.texture=new lr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:D}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:\"\\n\\n\\t\\t\\t\\tvarying vec3 vWorldDirection;\\n\\n\\t\\t\\t\\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\\n\\n\\t\\t\\t\\t\\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\\n\\n\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\tvoid main() {\\n\\n\\t\\t\\t\\t\\tvWorldDirection = transformDirection( position, modelMatrix );\\n\\n\\t\\t\\t\\t\\t#include <begin_vertex>\\n\\t\\t\\t\\t\\t#include <project_vertex>\\n\\n\\t\\t\\t\\t}\\n\\t\\t\\t\",fragmentShader:\"\\n\\n\\t\\t\\t\\tuniform sampler2D tEquirect;\\n\\n\\t\\t\\t\\tvarying vec3 vWorldDirection;\\n\\n\\t\\t\\t\\t#include <common>\\n\\n\\t\\t\\t\\tvoid main() {\\n\\n\\t\\t\\t\\t\\tvec3 direction = normalize( vWorldDirection );\\n\\n\\t\\t\\t\\t\\tvec2 sampleUV = equirectUv( direction );\\n\\n\\t\\t\\t\\t\\tgl_FragColor = texture2D( tEquirect, sampleUV );\\n\\n\\t\\t\\t\\t}\\n\\t\\t\\t\"},i=new $i(5,5,5),r=new ir({name:\"CubemapFromEquirect\",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:a,blending:0});r.uniforms.tEquirect.value=e;const s=new Ji(i,r),o=e.minFilter;e.minFilter===O&&(e.minFilter=D);return new or(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(r)}}const hr=new We,ur=new We,dr=new fe;class pr{constructor(t=new We(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hr.subVectors(n,e).cross(ur.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hr),i=this.normal.dot(n);if(0===i)return 0===this.distanceToPoint(t.start)?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dr.getNormalMatrix(t),i=this.coplanarPoint(hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return(new this.constructor).copy(this)}}const mr=new dn,fr=new We;class gr{constructor(t=new pr,e=new pr,n=new pr,i=new pr,r=new pr,s=new pr){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],p=i[9],m=i[10],f=i[11],g=i[12],_=i[13],v=i[14],x=i[15];if(n[0].setComponents(o-r,u-l,f-d,x-g).normalize(),n[1].setComponents(o+r,u+l,f+d,x+g).normalize(),n[2].setComponents(o+s,u+c,f+p,x+_).normalize(),n[3].setComponents(o-s,u-c,f-p,x-_).normalize(),n[4].setComponents(o-a,u-h,f-m,x-v).normalize(),e===$t)n[5].setComponents(o+a,u+h,f+m,x+v).normalize();else{if(e!==Qt)throw new Error(\"THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: \"+e);n[5].setComponents(a,h,m,v).normalize()}return this}intersectsObject(t){if(void 0!==t.boundingSphere)null===t.boundingSphere&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;null===e.boundingSphere&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let t=0;t<6;t++){if(e[t].distanceToPoint(n)<i)return!1}return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fr.x=i.normal.x>0?t.max.x:t.min.x,fr.y=i.normal.y>0?t.max.y:t.min.y,fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}function _r(){let t=null,e=!1,n=null,i=null;function r(e,s){n(e,s),i=t.requestAnimationFrame(r)}return{start:function(){!0!==e&&null!==n&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(t){n=t},setContext:function(e){t=e}}}function vr(t,e){const n=e.isWebGL2,i=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),i.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const n=i.get(e);n&&(t.deleteBuffer(n.buffer),i.delete(e))},update:function(e,r){if(e.isGLBufferAttribute){const t=i.get(e);return void((!t||t.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const s=i.get(e);if(void 0===s)i.set(e,function(e,i){const r=e.array,s=e.usage,a=r.byteLength,o=t.createBuffer();let l;if(t.bindBuffer(i,o),t.bufferData(i,r,s),e.onUploadCallback(),r instanceof Float32Array)l=t.FLOAT;else if(r instanceof Uint16Array)if(e.isFloat16BufferAttribute){if(!n)throw new Error(\"THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.\");l=t.HALF_FLOAT}else l=t.UNSIGNED_SHORT;else if(r instanceof Int16Array)l=t.SHORT;else if(r instanceof Uint32Array)l=t.UNSIGNED_INT;else if(r instanceof Int32Array)l=t.INT;else if(r instanceof Int8Array)l=t.BYTE;else if(r instanceof Uint8Array)l=t.UNSIGNED_BYTE;else{if(!(r instanceof Uint8ClampedArray))throw new Error(\"THREE.WebGLAttributes: Unsupported buffer data format: \"+r);l=t.UNSIGNED_BYTE}return{buffer:o,type:l,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version,size:a}}(e,r));else if(s.version<e.version){if(s.size!==e.array.byteLength)throw new Error(\"THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.\");!function(e,i,r){const s=i.array,a=i._updateRange,o=i.updateRanges;if(t.bindBuffer(r,e),-1===a.count&&0===o.length&&t.bufferSubData(r,0,s),0!==o.length){for(let e=0,i=o.length;e<i;e++){const i=o[e];n?t.bufferSubData(r,i.start*s.BYTES_PER_ELEMENT,s,i.start,i.count):t.bufferSubData(r,i.start*s.BYTES_PER_ELEMENT,s.subarray(i.start,i.start+i.count))}i.clearUpdateRanges()}-1!==a.count&&(n?t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1),i.onUploadCallback()}(s.buffer,e,r),s.version=e.version}}}}class xr extends Ii{constructor(t=1,e=1,n=1,i=1){super(),this.type=\"PlaneGeometry\",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,u=e/o,d=[],p=[],m=[],f=[];for(let t=0;t<c;t++){const e=t*u-s;for(let n=0;n<l;n++){const i=n*h-r;p.push(i,-e,0),m.push(0,0,1),f.push(n/a),f.push(1-t/o)}}for(let t=0;t<o;t++)for(let e=0;e<a;e++){const n=e+l*t,i=e+l*(t+1),r=e+1+l*(t+1),s=e+1+l*t;d.push(n,i,s),d.push(i,r,s)}this.setIndex(d),this.setAttribute(\"position\",new Ti(p,3)),this.setAttribute(\"normal\",new Ti(m,3)),this.setAttribute(\"uv\",new Ti(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.widthSegments,t.heightSegments)}}const yr={alphahash_fragment:\"#ifdef USE_ALPHAHASH\\n\\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\\n#endif\",alphahash_pars_fragment:\"#ifdef USE_ALPHAHASH\\n\\tconst float ALPHA_HASH_SCALE = 0.05;\\n\\tfloat hash2D( vec2 value ) {\\n\\t\\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\\n\\t}\\n\\tfloat hash3D( vec3 value ) {\\n\\t\\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\\n\\t}\\n\\tfloat getAlphaHashThreshold( vec3 position ) {\\n\\t\\tfloat maxDeriv = max(\\n\\t\\t\\tlength( dFdx( position.xyz ) ),\\n\\t\\t\\tlength( dFdy( position.xyz ) )\\n\\t\\t);\\n\\t\\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\\n\\t\\tvec2 pixScales = vec2(\\n\\t\\t\\texp2( floor( log2( pixScale ) ) ),\\n\\t\\t\\texp2( ceil( log2( pixScale ) ) )\\n\\t\\t);\\n\\t\\tvec2 alpha = vec2(\\n\\t\\t\\thash3D( floor( pixScales.x * position.xyz ) ),\\n\\t\\t\\thash3D( floor( pixScales.y * position.xyz ) )\\n\\t\\t);\\n\\t\\tfloat lerpFactor = fract( log2( pixScale ) );\\n\\t\\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\\n\\t\\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\\n\\t\\tvec3 cases = vec3(\\n\\t\\t\\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\\n\\t\\t\\t( x - 0.5 * a ) / ( 1.0 - a ),\\n\\t\\t\\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\\n\\t\\t);\\n\\t\\tfloat threshold = ( x < ( 1.0 - a ) )\\n\\t\\t\\t? ( ( x < a ) ? cases.x : cases.y )\\n\\t\\t\\t: cases.z;\\n\\t\\treturn clamp( threshold , 1.0e-6, 1.0 );\\n\\t}\\n#endif\",alphamap_fragment:\"#ifdef USE_ALPHAMAP\\n\\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\\n#endif\",alphamap_pars_fragment:\"#ifdef USE_ALPHAMAP\\n\\tuniform sampler2D alphaMap;\\n#endif\",alphatest_fragment:\"#ifdef USE_ALPHATEST\\n\\tif ( diffuseColor.a < alphaTest ) discard;\\n#endif\",alphatest_pars_fragment:\"#ifdef USE_ALPHATEST\\n\\tuniform float alphaTest;\\n#endif\",aomap_fragment:\"#ifdef USE_AOMAP\\n\\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\\n\\treflectedLight.indirectDiffuse *= ambientOcclusion;\\n\\t#if defined( USE_CLEARCOAT ) \\n\\t\\tclearcoatSpecularIndirect *= ambientOcclusion;\\n\\t#endif\\n\\t#if defined( USE_SHEEN ) \\n\\t\\tsheenSpecularIndirect *= ambientOcclusion;\\n\\t#endif\\n\\t#if defined( USE_ENVMAP ) && defined( STANDARD )\\n\\t\\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\\n\\t\\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\\n\\t#endif\\n#endif\",aomap_pars_fragment:\"#ifdef USE_AOMAP\\n\\tuniform sampler2D aoMap;\\n\\tuniform float aoMapIntensity;\\n#endif\",batching_pars_vertex:\"#ifdef USE_BATCHING\\n\\tattribute float batchId;\\n\\tuniform highp sampler2D batchingTexture;\\n\\tmat4 getBatchingMatrix( const in float i ) {\\n\\t\\tint size = textureSize( batchingTexture, 0 ).x;\\n\\t\\tint j = int( i ) * 4;\\n\\t\\tint x = j % size;\\n\\t\\tint y = j / size;\\n\\t\\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\\n\\t\\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\\n\\t\\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\\n\\t\\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\\n\\t\\treturn mat4( v1, v2, v3, v4 );\\n\\t}\\n#endif\",batching_vertex:\"#ifdef USE_BATCHING\\n\\tmat4 batchingMatrix = getBatchingMatrix( batchId );\\n#endif\",begin_vertex:\"vec3 transformed = vec3( position );\\n#ifdef USE_ALPHAHASH\\n\\tvPosition = vec3( position );\\n#endif\",beginnormal_vertex:\"vec3 objectNormal = vec3( normal );\\n#ifdef USE_TANGENT\\n\\tvec3 objectTangent = vec3( tangent.xyz );\\n#endif\",bsdfs:\"float G_BlinnPhong_Implicit( ) {\\n\\treturn 0.25;\\n}\\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\\n\\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\\n}\\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\\n\\tvec3 halfDir = normalize( lightDir + viewDir );\\n\\tfloat dotNH = saturate( dot( normal, halfDir ) );\\n\\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\\n\\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\\n\\tfloat G = G_BlinnPhong_Implicit( );\\n\\tfloat D = D_BlinnPhong( shininess, dotNH );\\n\\treturn F * ( G * D );\\n} // validated\",iridescence_fragment:\"#ifdef USE_IRIDESCENCE\\n\\tconst mat3 XYZ_TO_REC709 = mat3(\\n\\t\\t 3.2404542, -0.9692660,  0.0556434,\\n\\t\\t-1.5371385,  1.8760108, -0.2040259,\\n\\t\\t-0.4985314,  0.0415560,  1.0572252\\n\\t);\\n\\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\\n\\t\\tvec3 sqrtF0 = sqrt( fresnel0 );\\n\\t\\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\\n\\t}\\n\\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\\n\\t\\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\\n\\t}\\n\\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\\n\\t\\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\\n\\t}\\n\\tvec3 evalSensitivity( float OPD, vec3 shift ) {\\n\\t\\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\\n\\t\\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\\n\\t\\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\\n\\t\\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\\n\\t\\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\\n\\t\\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\\n\\t\\txyz /= 1.0685e-7;\\n\\t\\tvec3 rgb = XYZ_TO_REC709 * xyz;\\n\\t\\treturn rgb;\\n\\t}\\n\\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\\n\\t\\tvec3 I;\\n\\t\\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\\n\\t\\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\\n\\t\\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\\n\\t\\tif ( cosTheta2Sq < 0.0 ) {\\n\\t\\t\\treturn vec3( 1.0 );\\n\\t\\t}\\n\\t\\tfloat cosTheta2 = sqrt( cosTheta2Sq );\\n\\t\\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\\n\\t\\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\\n\\t\\tfloat T121 = 1.0 - R12;\\n\\t\\tfloat phi12 = 0.0;\\n\\t\\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\\n\\t\\tfloat phi21 = PI - phi12;\\n\\t\\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\\t\\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\\n\\t\\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\\n\\t\\tvec3 phi23 = vec3( 0.0 );\\n\\t\\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\\n\\t\\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\\n\\t\\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\\n\\t\\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\\n\\t\\tvec3 phi = vec3( phi21 ) + phi23;\\n\\t\\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\\n\\t\\tvec3 r123 = sqrt( R123 );\\n\\t\\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\\n\\t\\tvec3 C0 = R12 + Rs;\\n\\t\\tI = C0;\\n\\t\\tvec3 Cm = Rs - T121;\\n\\t\\tfor ( int m = 1; m <= 2; ++ m ) {\\n\\t\\t\\tCm *= r123;\\n\\t\\t\\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\\n\\t\\t\\tI += Cm * Sm;\\n\\t\\t}\\n\\t\\treturn max( I, vec3( 0.0 ) );\\n\\t}\\n#endif\",bumpmap_pars_fragment:\"#ifdef USE_BUMPMAP\\n\\tuniform sampler2D bumpMap;\\n\\tuniform float bumpScale;\\n\\tvec2 dHdxy_fwd() {\\n\\t\\tvec2 dSTdx = dFdx( vBumpMapUv );\\n\\t\\tvec2 dSTdy = dFdy( vBumpMapUv );\\n\\t\\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\\n\\t\\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\\n\\t\\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\\n\\t\\treturn vec2( dBx, dBy );\\n\\t}\\n\\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\\n\\t\\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\\n\\t\\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\\n\\t\\tvec3 vN = surf_norm;\\n\\t\\tvec3 R1 = cross( vSigmaY, vN );\\n\\t\\tvec3 R2 = cross( vN, vSigmaX );\\n\\t\\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\\n\\t\\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\\n\\t\\treturn normalize( abs( fDet ) * surf_norm - vGrad );\\n\\t}\\n#endif\",clipping_planes_fragment:\"#if NUM_CLIPPING_PLANES > 0\\n\\tvec4 plane;\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\\n\\t\\tplane = clippingPlanes[ i ];\\n\\t\\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\\n\\t}\\n\\t#pragma unroll_loop_end\\n\\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\\n\\t\\tbool clipped = true;\\n\\t\\t#pragma unroll_loop_start\\n\\t\\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\\n\\t\\t\\tplane = clippingPlanes[ i ];\\n\\t\\t\\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\\n\\t\\t}\\n\\t\\t#pragma unroll_loop_end\\n\\t\\tif ( clipped ) discard;\\n\\t#endif\\n#endif\",clipping_planes_pars_fragment:\"#if NUM_CLIPPING_PLANES > 0\\n\\tvarying vec3 vClipPosition;\\n\\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\\n#endif\",clipping_planes_pars_vertex:\"#if NUM_CLIPPING_PLANES > 0\\n\\tvarying vec3 vClipPosition;\\n#endif\",clipping_planes_vertex:\"#if NUM_CLIPPING_PLANES > 0\\n\\tvClipPosition = - mvPosition.xyz;\\n#endif\",color_fragment:\"#if defined( USE_COLOR_ALPHA )\\n\\tdiffuseColor *= vColor;\\n#elif defined( USE_COLOR )\\n\\tdiffuseColor.rgb *= vColor;\\n#endif\",color_pars_fragment:\"#if defined( USE_COLOR_ALPHA )\\n\\tvarying vec4 vColor;\\n#elif defined( USE_COLOR )\\n\\tvarying vec3 vColor;\\n#endif\",color_pars_vertex:\"#if defined( USE_COLOR_ALPHA )\\n\\tvarying vec4 vColor;\\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\\n\\tvarying vec3 vColor;\\n#endif\",color_vertex:\"#if defined( USE_COLOR_ALPHA )\\n\\tvColor = vec4( 1.0 );\\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\\n\\tvColor = vec3( 1.0 );\\n#endif\\n#ifdef USE_COLOR\\n\\tvColor *= color;\\n#endif\\n#ifdef USE_INSTANCING_COLOR\\n\\tvColor.xyz *= instanceColor.xyz;\\n#endif\",common:\"#define PI 3.141592653589793\\n#define PI2 6.283185307179586\\n#define PI_HALF 1.5707963267948966\\n#define RECIPROCAL_PI 0.3183098861837907\\n#define RECIPROCAL_PI2 0.15915494309189535\\n#define EPSILON 1e-6\\n#ifndef saturate\\n#define saturate( a ) clamp( a, 0.0, 1.0 )\\n#endif\\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\\nfloat pow2( const in float x ) { return x*x; }\\nvec3 pow2( const in vec3 x ) { return x*x; }\\nfloat pow3( const in float x ) { return x*x*x; }\\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\\nhighp float rand( const in vec2 uv ) {\\n\\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\\n\\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\\n\\treturn fract( sin( sn ) * c );\\n}\\n#ifdef HIGH_PRECISION\\n\\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\\n#else\\n\\tfloat precisionSafeLength( vec3 v ) {\\n\\t\\tfloat maxComponent = max3( abs( v ) );\\n\\t\\treturn length( v / maxComponent ) * maxComponent;\\n\\t}\\n#endif\\nstruct IncidentLight {\\n\\tvec3 color;\\n\\tvec3 direction;\\n\\tbool visible;\\n};\\nstruct ReflectedLight {\\n\\tvec3 directDiffuse;\\n\\tvec3 directSpecular;\\n\\tvec3 indirectDiffuse;\\n\\tvec3 indirectSpecular;\\n};\\n#ifdef USE_ALPHAHASH\\n\\tvarying vec3 vPosition;\\n#endif\\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\\n\\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\\n}\\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\\n\\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\\n}\\nmat3 transposeMat3( const in mat3 m ) {\\n\\tmat3 tmp;\\n\\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\\n\\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\\n\\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\\n\\treturn tmp;\\n}\\nfloat luminance( const in vec3 rgb ) {\\n\\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\\n\\treturn dot( weights, rgb );\\n}\\nbool isPerspectiveMatrix( mat4 m ) {\\n\\treturn m[ 2 ][ 3 ] == - 1.0;\\n}\\nvec2 equirectUv( in vec3 dir ) {\\n\\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\\n\\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\\n\\treturn vec2( u, v );\\n}\\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\\n\\treturn RECIPROCAL_PI * diffuseColor;\\n}\\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\\n\\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\\n\\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\\n}\\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\\n\\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\\n\\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\\n} // validated\",cube_uv_reflection_fragment:\"#ifdef ENVMAP_TYPE_CUBE_UV\\n\\t#define cubeUV_minMipLevel 4.0\\n\\t#define cubeUV_minTileSize 16.0\\n\\tfloat getFace( vec3 direction ) {\\n\\t\\tvec3 absDirection = abs( direction );\\n\\t\\tfloat face = - 1.0;\\n\\t\\tif ( absDirection.x > absDirection.z ) {\\n\\t\\t\\tif ( absDirection.x > absDirection.y )\\n\\t\\t\\t\\tface = direction.x > 0.0 ? 0.0 : 3.0;\\n\\t\\t\\telse\\n\\t\\t\\t\\tface = direction.y > 0.0 ? 1.0 : 4.0;\\n\\t\\t} else {\\n\\t\\t\\tif ( absDirection.z > absDirection.y )\\n\\t\\t\\t\\tface = direction.z > 0.0 ? 2.0 : 5.0;\\n\\t\\t\\telse\\n\\t\\t\\t\\tface = direction.y > 0.0 ? 1.0 : 4.0;\\n\\t\\t}\\n\\t\\treturn face;\\n\\t}\\n\\tvec2 getUV( vec3 direction, float face ) {\\n\\t\\tvec2 uv;\\n\\t\\tif ( face == 0.0 ) {\\n\\t\\t\\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\\n\\t\\t} else if ( face == 1.0 ) {\\n\\t\\t\\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\\n\\t\\t} else if ( face == 2.0 ) {\\n\\t\\t\\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\\n\\t\\t} else if ( face == 3.0 ) {\\n\\t\\t\\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\\n\\t\\t} else if ( face == 4.0 ) {\\n\\t\\t\\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\\n\\t\\t} else {\\n\\t\\t\\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\\n\\t\\t}\\n\\t\\treturn 0.5 * ( uv + 1.0 );\\n\\t}\\n\\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\\n\\t\\tfloat face = getFace( direction );\\n\\t\\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\\n\\t\\tmipInt = max( mipInt, cubeUV_minMipLevel );\\n\\t\\tfloat faceSize = exp2( mipInt );\\n\\t\\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\\n\\t\\tif ( face > 2.0 ) {\\n\\t\\t\\tuv.y += faceSize;\\n\\t\\t\\tface -= 3.0;\\n\\t\\t}\\n\\t\\tuv.x += face * faceSize;\\n\\t\\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\\n\\t\\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\\n\\t\\tuv.x *= CUBEUV_TEXEL_WIDTH;\\n\\t\\tuv.y *= CUBEUV_TEXEL_HEIGHT;\\n\\t\\t#ifdef texture2DGradEXT\\n\\t\\t\\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\\n\\t\\t#else\\n\\t\\t\\treturn texture2D( envMap, uv ).rgb;\\n\\t\\t#endif\\n\\t}\\n\\t#define cubeUV_r0 1.0\\n\\t#define cubeUV_m0 - 2.0\\n\\t#define cubeUV_r1 0.8\\n\\t#define cubeUV_m1 - 1.0\\n\\t#define cubeUV_r4 0.4\\n\\t#define cubeUV_m4 2.0\\n\\t#define cubeUV_r5 0.305\\n\\t#define cubeUV_m5 3.0\\n\\t#define cubeUV_r6 0.21\\n\\t#define cubeUV_m6 4.0\\n\\tfloat roughnessToMip( float roughness ) {\\n\\t\\tfloat mip = 0.0;\\n\\t\\tif ( roughness >= cubeUV_r1 ) {\\n\\t\\t\\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\\n\\t\\t} else if ( roughness >= cubeUV_r4 ) {\\n\\t\\t\\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\\n\\t\\t} else if ( roughness >= cubeUV_r5 ) {\\n\\t\\t\\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\\n\\t\\t} else if ( roughness >= cubeUV_r6 ) {\\n\\t\\t\\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\\n\\t\\t} else {\\n\\t\\t\\tmip = - 2.0 * log2( 1.16 * roughness );\\t\\t}\\n\\t\\treturn mip;\\n\\t}\\n\\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\\n\\t\\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\\n\\t\\tfloat mipF = fract( mip );\\n\\t\\tfloat mipInt = floor( mip );\\n\\t\\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\\n\\t\\tif ( mipF == 0.0 ) {\\n\\t\\t\\treturn vec4( color0, 1.0 );\\n\\t\\t} else {\\n\\t\\t\\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\\n\\t\\t\\treturn vec4( mix( color0, color1, mipF ), 1.0 );\\n\\t\\t}\\n\\t}\\n#endif\",defaultnormal_vertex:\"vec3 transformedNormal = objectNormal;\\n#ifdef USE_TANGENT\\n\\tvec3 transformedTangent = objectTangent;\\n#endif\\n#ifdef USE_BATCHING\\n\\tmat3 bm = mat3( batchingMatrix );\\n\\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\\n\\ttransformedNormal = bm * transformedNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\ttransformedTangent = bm * transformedTangent;\\n\\t#endif\\n#endif\\n#ifdef USE_INSTANCING\\n\\tmat3 im = mat3( instanceMatrix );\\n\\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\\n\\ttransformedNormal = im * transformedNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\ttransformedTangent = im * transformedTangent;\\n\\t#endif\\n#endif\\ntransformedNormal = normalMatrix * transformedNormal;\\n#ifdef FLIP_SIDED\\n\\ttransformedNormal = - transformedNormal;\\n#endif\\n#ifdef USE_TANGENT\\n\\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\\n\\t#ifdef FLIP_SIDED\\n\\t\\ttransformedTangent = - transformedTangent;\\n\\t#endif\\n#endif\",displacementmap_pars_vertex:\"#ifdef USE_DISPLACEMENTMAP\\n\\tuniform sampler2D displacementMap;\\n\\tuniform float displacementScale;\\n\\tuniform float displacementBias;\\n#endif\",displacementmap_vertex:\"#ifdef USE_DISPLACEMENTMAP\\n\\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\\n#endif\",emissivemap_fragment:\"#ifdef USE_EMISSIVEMAP\\n\\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\\n\\ttotalEmissiveRadiance *= emissiveColor.rgb;\\n#endif\",emissivemap_pars_fragment:\"#ifdef USE_EMISSIVEMAP\\n\\tuniform sampler2D emissiveMap;\\n#endif\",colorspace_fragment:\"gl_FragColor = linearToOutputTexel( gl_FragColor );\",colorspace_pars_fragment:\"\\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\\n\\tvec3( 0.8224621, 0.177538, 0.0 ),\\n\\tvec3( 0.0331941, 0.9668058, 0.0 ),\\n\\tvec3( 0.0170827, 0.0723974, 0.9105199 )\\n);\\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\\n\\tvec3( 1.2249401, - 0.2249404, 0.0 ),\\n\\tvec3( - 0.0420569, 1.0420571, 0.0 ),\\n\\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\\n);\\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\\n\\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\\n}\\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\\n\\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\\n}\\nvec4 LinearTransferOETF( in vec4 value ) {\\n\\treturn value;\\n}\\nvec4 sRGBTransferOETF( in vec4 value ) {\\n\\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\\n}\\nvec4 LinearToLinear( in vec4 value ) {\\n\\treturn value;\\n}\\nvec4 LinearTosRGB( in vec4 value ) {\\n\\treturn sRGBTransferOETF( value );\\n}\",envmap_fragment:\"#ifdef USE_ENVMAP\\n\\t#ifdef ENV_WORLDPOS\\n\\t\\tvec3 cameraToFrag;\\n\\t\\tif ( isOrthographic ) {\\n\\t\\t\\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\\n\\t\\t} else {\\n\\t\\t\\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\\n\\t\\t}\\n\\t\\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\\n\\t\\t#ifdef ENVMAP_MODE_REFLECTION\\n\\t\\t\\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\\n\\t\\t#else\\n\\t\\t\\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\\n\\t\\t#endif\\n\\t#else\\n\\t\\tvec3 reflectVec = vReflect;\\n\\t#endif\\n\\t#ifdef ENVMAP_TYPE_CUBE\\n\\t\\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\\n\\t#else\\n\\t\\tvec4 envColor = vec4( 0.0 );\\n\\t#endif\\n\\t#ifdef ENVMAP_BLENDING_MULTIPLY\\n\\t\\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\\n\\t#elif defined( ENVMAP_BLENDING_MIX )\\n\\t\\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\\n\\t#elif defined( ENVMAP_BLENDING_ADD )\\n\\t\\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\\n\\t#endif\\n#endif\",envmap_common_pars_fragment:\"#ifdef USE_ENVMAP\\n\\tuniform float envMapIntensity;\\n\\tuniform float flipEnvMap;\\n\\t#ifdef ENVMAP_TYPE_CUBE\\n\\t\\tuniform samplerCube envMap;\\n\\t#else\\n\\t\\tuniform sampler2D envMap;\\n\\t#endif\\n\\t\\n#endif\",envmap_pars_fragment:\"#ifdef USE_ENVMAP\\n\\tuniform float reflectivity;\\n\\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\\n\\t\\t#define ENV_WORLDPOS\\n\\t#endif\\n\\t#ifdef ENV_WORLDPOS\\n\\t\\tvarying vec3 vWorldPosition;\\n\\t\\tuniform float refractionRatio;\\n\\t#else\\n\\t\\tvarying vec3 vReflect;\\n\\t#endif\\n#endif\",envmap_pars_vertex:\"#ifdef USE_ENVMAP\\n\\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\\n\\t\\t#define ENV_WORLDPOS\\n\\t#endif\\n\\t#ifdef ENV_WORLDPOS\\n\\t\\t\\n\\t\\tvarying vec3 vWorldPosition;\\n\\t#else\\n\\t\\tvarying vec3 vReflect;\\n\\t\\tuniform float refractionRatio;\\n\\t#endif\\n#endif\",envmap_physical_pars_fragment:\"#ifdef USE_ENVMAP\\n\\tvec3 getIBLIrradiance( const in vec3 normal ) {\\n\\t\\t#ifdef ENVMAP_TYPE_CUBE_UV\\n\\t\\t\\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\\n\\t\\t\\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\\n\\t\\t\\treturn PI * envMapColor.rgb * envMapIntensity;\\n\\t\\t#else\\n\\t\\t\\treturn vec3( 0.0 );\\n\\t\\t#endif\\n\\t}\\n\\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\\n\\t\\t#ifdef ENVMAP_TYPE_CUBE_UV\\n\\t\\t\\tvec3 reflectVec = reflect( - viewDir, normal );\\n\\t\\t\\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\\n\\t\\t\\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\\n\\t\\t\\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\\n\\t\\t\\treturn envMapColor.rgb * envMapIntensity;\\n\\t\\t#else\\n\\t\\t\\treturn vec3( 0.0 );\\n\\t\\t#endif\\n\\t}\\n\\t#ifdef USE_ANISOTROPY\\n\\t\\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\\n\\t\\t\\t#ifdef ENVMAP_TYPE_CUBE_UV\\n\\t\\t\\t\\tvec3 bentNormal = cross( bitangent, viewDir );\\n\\t\\t\\t\\tbentNormal = normalize( cross( bentNormal, bitangent ) );\\n\\t\\t\\t\\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\\n\\t\\t\\t\\treturn getIBLRadiance( viewDir, bentNormal, roughness );\\n\\t\\t\\t#else\\n\\t\\t\\t\\treturn vec3( 0.0 );\\n\\t\\t\\t#endif\\n\\t\\t}\\n\\t#endif\\n#endif\",envmap_vertex:\"#ifdef USE_ENVMAP\\n\\t#ifdef ENV_WORLDPOS\\n\\t\\tvWorldPosition = worldPosition.xyz;\\n\\t#else\\n\\t\\tvec3 cameraToVertex;\\n\\t\\tif ( isOrthographic ) {\\n\\t\\t\\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\\n\\t\\t} else {\\n\\t\\t\\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\\n\\t\\t}\\n\\t\\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\\n\\t\\t#ifdef ENVMAP_MODE_REFLECTION\\n\\t\\t\\tvReflect = reflect( cameraToVertex, worldNormal );\\n\\t\\t#else\\n\\t\\t\\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\\n\\t\\t#endif\\n\\t#endif\\n#endif\",fog_vertex:\"#ifdef USE_FOG\\n\\tvFogDepth = - mvPosition.z;\\n#endif\",fog_pars_vertex:\"#ifdef USE_FOG\\n\\tvarying float vFogDepth;\\n#endif\",fog_fragment:\"#ifdef USE_FOG\\n\\t#ifdef FOG_EXP2\\n\\t\\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\\n\\t#else\\n\\t\\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\\n\\t#endif\\n\\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\\n#endif\",fog_pars_fragment:\"#ifdef USE_FOG\\n\\tuniform vec3 fogColor;\\n\\tvarying float vFogDepth;\\n\\t#ifdef FOG_EXP2\\n\\t\\tuniform float fogDensity;\\n\\t#else\\n\\t\\tuniform float fogNear;\\n\\t\\tuniform float fogFar;\\n\\t#endif\\n#endif\",gradientmap_pars_fragment:\"#ifdef USE_GRADIENTMAP\\n\\tuniform sampler2D gradientMap;\\n#endif\\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\\n\\tfloat dotNL = dot( normal, lightDirection );\\n\\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\\n\\t#ifdef USE_GRADIENTMAP\\n\\t\\treturn vec3( texture2D( gradientMap, coord ).r );\\n\\t#else\\n\\t\\tvec2 fw = fwidth( coord ) * 0.5;\\n\\t\\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\\n\\t#endif\\n}\",lightmap_fragment:\"#ifdef USE_LIGHTMAP\\n\\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\\n\\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\\n\\treflectedLight.indirectDiffuse += lightMapIrradiance;\\n#endif\",lightmap_pars_fragment:\"#ifdef USE_LIGHTMAP\\n\\tuniform sampler2D lightMap;\\n\\tuniform float lightMapIntensity;\\n#endif\",lights_lambert_fragment:\"LambertMaterial material;\\nmaterial.diffuseColor = diffuseColor.rgb;\\nmaterial.specularStrength = specularStrength;\",lights_lambert_pars_fragment:\"varying vec3 vViewPosition;\\nstruct LambertMaterial {\\n\\tvec3 diffuseColor;\\n\\tfloat specularStrength;\\n};\\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\\n\\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\\n\\tvec3 irradiance = dotNL * directLight.color;\\n\\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n}\\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\\n\\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n}\\n#define RE_Direct\\t\\t\\t\\tRE_Direct_Lambert\\n#define RE_IndirectDiffuse\\t\\tRE_IndirectDiffuse_Lambert\",lights_pars_begin:\"uniform bool receiveShadow;\\nuniform vec3 ambientLightColor;\\n#if defined( USE_LIGHT_PROBES )\\n\\tuniform vec3 lightProbe[ 9 ];\\n#endif\\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\\n\\tfloat x = normal.x, y = normal.y, z = normal.z;\\n\\tvec3 result = shCoefficients[ 0 ] * 0.886227;\\n\\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\\n\\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\\n\\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\\n\\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\\n\\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\\n\\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\\n\\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\\n\\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\\n\\treturn result;\\n}\\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\\n\\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\\n\\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\\n\\treturn irradiance;\\n}\\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\\n\\tvec3 irradiance = ambientLightColor;\\n\\treturn irradiance;\\n}\\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\\n\\t#if defined ( LEGACY_LIGHTS )\\n\\t\\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\\n\\t\\t\\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\\n\\t\\t}\\n\\t\\treturn 1.0;\\n\\t#else\\n\\t\\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\\n\\t\\tif ( cutoffDistance > 0.0 ) {\\n\\t\\t\\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\\n\\t\\t}\\n\\t\\treturn distanceFalloff;\\n\\t#endif\\n}\\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\\n\\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\\n}\\n#if NUM_DIR_LIGHTS > 0\\n\\tstruct DirectionalLight {\\n\\t\\tvec3 direction;\\n\\t\\tvec3 color;\\n\\t};\\n\\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\\n\\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\\n\\t\\tlight.color = directionalLight.color;\\n\\t\\tlight.direction = directionalLight.direction;\\n\\t\\tlight.visible = true;\\n\\t}\\n#endif\\n#if NUM_POINT_LIGHTS > 0\\n\\tstruct PointLight {\\n\\t\\tvec3 position;\\n\\t\\tvec3 color;\\n\\t\\tfloat distance;\\n\\t\\tfloat decay;\\n\\t};\\n\\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\\n\\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\\n\\t\\tvec3 lVector = pointLight.position - geometryPosition;\\n\\t\\tlight.direction = normalize( lVector );\\n\\t\\tfloat lightDistance = length( lVector );\\n\\t\\tlight.color = pointLight.color;\\n\\t\\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\\n\\t\\tlight.visible = ( light.color != vec3( 0.0 ) );\\n\\t}\\n#endif\\n#if NUM_SPOT_LIGHTS > 0\\n\\tstruct SpotLight {\\n\\t\\tvec3 position;\\n\\t\\tvec3 direction;\\n\\t\\tvec3 color;\\n\\t\\tfloat distance;\\n\\t\\tfloat decay;\\n\\t\\tfloat coneCos;\\n\\t\\tfloat penumbraCos;\\n\\t};\\n\\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\\n\\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\\n\\t\\tvec3 lVector = spotLight.position - geometryPosition;\\n\\t\\tlight.direction = normalize( lVector );\\n\\t\\tfloat angleCos = dot( light.direction, spotLight.direction );\\n\\t\\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\\n\\t\\tif ( spotAttenuation > 0.0 ) {\\n\\t\\t\\tfloat lightDistance = length( lVector );\\n\\t\\t\\tlight.color = spotLight.color * spotAttenuation;\\n\\t\\t\\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\\n\\t\\t\\tlight.visible = ( light.color != vec3( 0.0 ) );\\n\\t\\t} else {\\n\\t\\t\\tlight.color = vec3( 0.0 );\\n\\t\\t\\tlight.visible = false;\\n\\t\\t}\\n\\t}\\n#endif\\n#if NUM_RECT_AREA_LIGHTS > 0\\n\\tstruct RectAreaLight {\\n\\t\\tvec3 color;\\n\\t\\tvec3 position;\\n\\t\\tvec3 halfWidth;\\n\\t\\tvec3 halfHeight;\\n\\t};\\n\\tuniform sampler2D ltc_1;\\tuniform sampler2D ltc_2;\\n\\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\\n#endif\\n#if NUM_HEMI_LIGHTS > 0\\n\\tstruct HemisphereLight {\\n\\t\\tvec3 direction;\\n\\t\\tvec3 skyColor;\\n\\t\\tvec3 groundColor;\\n\\t};\\n\\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\\n\\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\\n\\t\\tfloat dotNL = dot( normal, hemiLight.direction );\\n\\t\\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\\n\\t\\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\\n\\t\\treturn irradiance;\\n\\t}\\n#endif\",lights_toon_fragment:\"ToonMaterial material;\\nmaterial.diffuseColor = diffuseColor.rgb;\",lights_toon_pars_fragment:\"varying vec3 vViewPosition;\\nstruct ToonMaterial {\\n\\tvec3 diffuseColor;\\n};\\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\\n\\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\\n\\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n}\\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\\n\\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n}\\n#define RE_Direct\\t\\t\\t\\tRE_Direct_Toon\\n#define RE_IndirectDiffuse\\t\\tRE_IndirectDiffuse_Toon\",lights_phong_fragment:\"BlinnPhongMaterial material;\\nmaterial.diffuseColor = diffuseColor.rgb;\\nmaterial.specularColor = specular;\\nmaterial.specularShininess = shininess;\\nmaterial.specularStrength = specularStrength;\",lights_phong_pars_fragment:\"varying vec3 vViewPosition;\\nstruct BlinnPhongMaterial {\\n\\tvec3 diffuseColor;\\n\\tvec3 specularColor;\\n\\tfloat specularShininess;\\n\\tfloat specularStrength;\\n};\\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\\n\\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\\n\\tvec3 irradiance = dotNL * directLight.color;\\n\\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n\\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\\n}\\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\\n\\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n}\\n#define RE_Direct\\t\\t\\t\\tRE_Direct_BlinnPhong\\n#define RE_IndirectDiffuse\\t\\tRE_IndirectDiffuse_BlinnPhong\",lights_physical_fragment:\"PhysicalMaterial material;\\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\\nmaterial.roughness = min( material.roughness, 1.0 );\\n#ifdef IOR\\n\\tmaterial.ior = ior;\\n\\t#ifdef USE_SPECULAR\\n\\t\\tfloat specularIntensityFactor = specularIntensity;\\n\\t\\tvec3 specularColorFactor = specularColor;\\n\\t\\t#ifdef USE_SPECULAR_COLORMAP\\n\\t\\t\\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\\n\\t\\t#endif\\n\\t\\t#ifdef USE_SPECULAR_INTENSITYMAP\\n\\t\\t\\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\\n\\t\\t#endif\\n\\t\\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\\n\\t#else\\n\\t\\tfloat specularIntensityFactor = 1.0;\\n\\t\\tvec3 specularColorFactor = vec3( 1.0 );\\n\\t\\tmaterial.specularF90 = 1.0;\\n\\t#endif\\n\\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\\n#else\\n\\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\\n\\tmaterial.specularF90 = 1.0;\\n#endif\\n#ifdef USE_CLEARCOAT\\n\\tmaterial.clearcoat = clearcoat;\\n\\tmaterial.clearcoatRoughness = clearcoatRoughness;\\n\\tmaterial.clearcoatF0 = vec3( 0.04 );\\n\\tmaterial.clearcoatF90 = 1.0;\\n\\t#ifdef USE_CLEARCOATMAP\\n\\t\\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\\n\\t#endif\\n\\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\\n\\t\\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\\n\\t#endif\\n\\tmaterial.clearcoat = saturate( material.clearcoat );\\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\\n\\tmaterial.clearcoatRoughness += geometryRoughness;\\n\\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\\n#endif\\n#ifdef USE_IRIDESCENCE\\n\\tmaterial.iridescence = iridescence;\\n\\tmaterial.iridescenceIOR = iridescenceIOR;\\n\\t#ifdef USE_IRIDESCENCEMAP\\n\\t\\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\\n\\t#endif\\n\\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\\n\\t\\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\\n\\t#else\\n\\t\\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\\n\\t#endif\\n#endif\\n#ifdef USE_SHEEN\\n\\tmaterial.sheenColor = sheenColor;\\n\\t#ifdef USE_SHEEN_COLORMAP\\n\\t\\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\\n\\t#endif\\n\\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\\n\\t#ifdef USE_SHEEN_ROUGHNESSMAP\\n\\t\\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\\n\\t#endif\\n#endif\\n#ifdef USE_ANISOTROPY\\n\\t#ifdef USE_ANISOTROPYMAP\\n\\t\\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\\n\\t\\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\\n\\t\\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\\n\\t#else\\n\\t\\tvec2 anisotropyV = anisotropyVector;\\n\\t#endif\\n\\tmaterial.anisotropy = length( anisotropyV );\\n\\tif( material.anisotropy == 0.0 ) {\\n\\t\\tanisotropyV = vec2( 1.0, 0.0 );\\n\\t} else {\\n\\t\\tanisotropyV /= material.anisotropy;\\n\\t\\tmaterial.anisotropy = saturate( material.anisotropy );\\n\\t}\\n\\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\\n\\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\\n\\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\\n#endif\",lights_physical_pars_fragment:\"struct PhysicalMaterial {\\n\\tvec3 diffuseColor;\\n\\tfloat roughness;\\n\\tvec3 specularColor;\\n\\tfloat specularF90;\\n\\t#ifdef USE_CLEARCOAT\\n\\t\\tfloat clearcoat;\\n\\t\\tfloat clearcoatRoughness;\\n\\t\\tvec3 clearcoatF0;\\n\\t\\tfloat clearcoatF90;\\n\\t#endif\\n\\t#ifdef USE_IRIDESCENCE\\n\\t\\tfloat iridescence;\\n\\t\\tfloat iridescenceIOR;\\n\\t\\tfloat iridescenceThickness;\\n\\t\\tvec3 iridescenceFresnel;\\n\\t\\tvec3 iridescenceF0;\\n\\t#endif\\n\\t#ifdef USE_SHEEN\\n\\t\\tvec3 sheenColor;\\n\\t\\tfloat sheenRoughness;\\n\\t#endif\\n\\t#ifdef IOR\\n\\t\\tfloat ior;\\n\\t#endif\\n\\t#ifdef USE_TRANSMISSION\\n\\t\\tfloat transmission;\\n\\t\\tfloat transmissionAlpha;\\n\\t\\tfloat thickness;\\n\\t\\tfloat attenuationDistance;\\n\\t\\tvec3 attenuationColor;\\n\\t#endif\\n\\t#ifdef USE_ANISOTROPY\\n\\t\\tfloat anisotropy;\\n\\t\\tfloat alphaT;\\n\\t\\tvec3 anisotropyT;\\n\\t\\tvec3 anisotropyB;\\n\\t#endif\\n};\\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\\nvec3 sheenSpecularDirect = vec3( 0.0 );\\nvec3 sheenSpecularIndirect = vec3(0.0 );\\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\\n    float x2 = x * x;\\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\\n}\\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\\n\\tfloat a2 = pow2( alpha );\\n\\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\\n\\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\\n\\treturn 0.5 / max( gv + gl, EPSILON );\\n}\\nfloat D_GGX( const in float alpha, const in float dotNH ) {\\n\\tfloat a2 = pow2( alpha );\\n\\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\\n\\treturn RECIPROCAL_PI * a2 / pow2( denom );\\n}\\n#ifdef USE_ANISOTROPY\\n\\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\\n\\t\\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\\n\\t\\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\\n\\t\\tfloat v = 0.5 / ( gv + gl );\\n\\t\\treturn saturate(v);\\n\\t}\\n\\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\\n\\t\\tfloat a2 = alphaT * alphaB;\\n\\t\\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\\n\\t\\thighp float v2 = dot( v, v );\\n\\t\\tfloat w2 = a2 / v2;\\n\\t\\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\\n\\t}\\n#endif\\n#ifdef USE_CLEARCOAT\\n\\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\\n\\t\\tvec3 f0 = material.clearcoatF0;\\n\\t\\tfloat f90 = material.clearcoatF90;\\n\\t\\tfloat roughness = material.clearcoatRoughness;\\n\\t\\tfloat alpha = pow2( roughness );\\n\\t\\tvec3 halfDir = normalize( lightDir + viewDir );\\n\\t\\tfloat dotNL = saturate( dot( normal, lightDir ) );\\n\\t\\tfloat dotNV = saturate( dot( normal, viewDir ) );\\n\\t\\tfloat dotNH = saturate( dot( normal, halfDir ) );\\n\\t\\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\\n\\t\\tvec3 F = F_Schlick( f0, f90, dotVH );\\n\\t\\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\\n\\t\\tfloat D = D_GGX( alpha, dotNH );\\n\\t\\treturn F * ( V * D );\\n\\t}\\n#endif\\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\\n\\tvec3 f0 = material.specularColor;\\n\\tfloat f90 = material.specularF90;\\n\\tfloat roughness = material.roughness;\\n\\tfloat alpha = pow2( roughness );\\n\\tvec3 halfDir = normalize( lightDir + viewDir );\\n\\tfloat dotNL = saturate( dot( normal, lightDir ) );\\n\\tfloat dotNV = saturate( dot( normal, viewDir ) );\\n\\tfloat dotNH = saturate( dot( normal, halfDir ) );\\n\\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\\n\\tvec3 F = F_Schlick( f0, f90, dotVH );\\n\\t#ifdef USE_IRIDESCENCE\\n\\t\\tF = mix( F, material.iridescenceFresnel, material.iridescence );\\n\\t#endif\\n\\t#ifdef USE_ANISOTROPY\\n\\t\\tfloat dotTL = dot( material.anisotropyT, lightDir );\\n\\t\\tfloat dotTV = dot( material.anisotropyT, viewDir );\\n\\t\\tfloat dotTH = dot( material.anisotropyT, halfDir );\\n\\t\\tfloat dotBL = dot( material.anisotropyB, lightDir );\\n\\t\\tfloat dotBV = dot( material.anisotropyB, viewDir );\\n\\t\\tfloat dotBH = dot( material.anisotropyB, halfDir );\\n\\t\\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\\n\\t\\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\\n\\t#else\\n\\t\\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\\n\\t\\tfloat D = D_GGX( alpha, dotNH );\\n\\t#endif\\n\\treturn F * ( V * D );\\n}\\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\\n\\tconst float LUT_SIZE = 64.0;\\n\\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\\n\\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\\n\\tfloat dotNV = saturate( dot( N, V ) );\\n\\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\\n\\tuv = uv * LUT_SCALE + LUT_BIAS;\\n\\treturn uv;\\n}\\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\\n\\tfloat l = length( f );\\n\\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\\n}\\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\\n\\tfloat x = dot( v1, v2 );\\n\\tfloat y = abs( x );\\n\\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\\n\\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\\n\\tfloat v = a / b;\\n\\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\\n\\treturn cross( v1, v2 ) * theta_sintheta;\\n}\\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\\n\\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\\n\\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\\n\\tvec3 lightNormal = cross( v1, v2 );\\n\\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\\n\\tvec3 T1, T2;\\n\\tT1 = normalize( V - N * dot( V, N ) );\\n\\tT2 = - cross( N, T1 );\\n\\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\\n\\tvec3 coords[ 4 ];\\n\\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\\n\\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\\n\\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\\n\\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\\n\\tcoords[ 0 ] = normalize( coords[ 0 ] );\\n\\tcoords[ 1 ] = normalize( coords[ 1 ] );\\n\\tcoords[ 2 ] = normalize( coords[ 2 ] );\\n\\tcoords[ 3 ] = normalize( coords[ 3 ] );\\n\\tvec3 vectorFormFactor = vec3( 0.0 );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\\n\\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\\n\\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\\n\\treturn vec3( result );\\n}\\n#if defined( USE_SHEEN )\\nfloat D_Charlie( float roughness, float dotNH ) {\\n\\tfloat alpha = pow2( roughness );\\n\\tfloat invAlpha = 1.0 / alpha;\\n\\tfloat cos2h = dotNH * dotNH;\\n\\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\\n\\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\\n}\\nfloat V_Neubelt( float dotNV, float dotNL ) {\\n\\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\\n}\\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\\n\\tvec3 halfDir = normalize( lightDir + viewDir );\\n\\tfloat dotNL = saturate( dot( normal, lightDir ) );\\n\\tfloat dotNV = saturate( dot( normal, viewDir ) );\\n\\tfloat dotNH = saturate( dot( normal, halfDir ) );\\n\\tfloat D = D_Charlie( sheenRoughness, dotNH );\\n\\tfloat V = V_Neubelt( dotNV, dotNL );\\n\\treturn sheenColor * ( D * V );\\n}\\n#endif\\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\\n\\tfloat dotNV = saturate( dot( normal, viewDir ) );\\n\\tfloat r2 = roughness * roughness;\\n\\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\\n\\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\\n\\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\\n\\treturn saturate( DG * RECIPROCAL_PI );\\n}\\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\\n\\tfloat dotNV = saturate( dot( normal, viewDir ) );\\n\\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\\n\\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\\n\\tvec4 r = roughness * c0 + c1;\\n\\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\\n\\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\\n\\treturn fab;\\n}\\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\\n\\tvec2 fab = DFGApprox( normal, viewDir, roughness );\\n\\treturn specularColor * fab.x + specularF90 * fab.y;\\n}\\n#ifdef USE_IRIDESCENCE\\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\\n#else\\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\\n#endif\\n\\tvec2 fab = DFGApprox( normal, viewDir, roughness );\\n\\t#ifdef USE_IRIDESCENCE\\n\\t\\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\\n\\t#else\\n\\t\\tvec3 Fr = specularColor;\\n\\t#endif\\n\\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\\n\\tfloat Ess = fab.x + fab.y;\\n\\tfloat Ems = 1.0 - Ess;\\n\\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\\n\\tsingleScatter += FssEss;\\n\\tmultiScatter += Fms * Ems;\\n}\\n#if NUM_RECT_AREA_LIGHTS > 0\\n\\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\\n\\t\\tvec3 normal = geometryNormal;\\n\\t\\tvec3 viewDir = geometryViewDir;\\n\\t\\tvec3 position = geometryPosition;\\n\\t\\tvec3 lightPos = rectAreaLight.position;\\n\\t\\tvec3 halfWidth = rectAreaLight.halfWidth;\\n\\t\\tvec3 halfHeight = rectAreaLight.halfHeight;\\n\\t\\tvec3 lightColor = rectAreaLight.color;\\n\\t\\tfloat roughness = material.roughness;\\n\\t\\tvec3 rectCoords[ 4 ];\\n\\t\\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\\t\\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\\n\\t\\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\\n\\t\\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\\n\\t\\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\\n\\t\\tvec4 t1 = texture2D( ltc_1, uv );\\n\\t\\tvec4 t2 = texture2D( ltc_2, uv );\\n\\t\\tmat3 mInv = mat3(\\n\\t\\t\\tvec3( t1.x, 0, t1.y ),\\n\\t\\t\\tvec3(    0, 1,    0 ),\\n\\t\\t\\tvec3( t1.z, 0, t1.w )\\n\\t\\t);\\n\\t\\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\\n\\t\\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\\n\\t\\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\\n\\t}\\n#endif\\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\\n\\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\\n\\tvec3 irradiance = dotNL * directLight.color;\\n\\t#ifdef USE_CLEARCOAT\\n\\t\\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\\n\\t\\tvec3 ccIrradiance = dotNLcc * directLight.color;\\n\\t\\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\\n\\t#endif\\n\\t#ifdef USE_SHEEN\\n\\t\\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\\n\\t#endif\\n\\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\\n\\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n}\\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\\n\\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\\n}\\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\\n\\t#ifdef USE_CLEARCOAT\\n\\t\\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\\n\\t#endif\\n\\t#ifdef USE_SHEEN\\n\\t\\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\\n\\t#endif\\n\\tvec3 singleScattering = vec3( 0.0 );\\n\\tvec3 multiScattering = vec3( 0.0 );\\n\\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\\n\\t#ifdef USE_IRIDESCENCE\\n\\t\\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\\n\\t#else\\n\\t\\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\\n\\t#endif\\n\\tvec3 totalScattering = singleScattering + multiScattering;\\n\\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\\n\\treflectedLight.indirectSpecular += radiance * singleScattering;\\n\\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\\n\\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\\n}\\n#define RE_Direct\\t\\t\\t\\tRE_Direct_Physical\\n#define RE_Direct_RectArea\\t\\tRE_Direct_RectArea_Physical\\n#define RE_IndirectDiffuse\\t\\tRE_IndirectDiffuse_Physical\\n#define RE_IndirectSpecular\\t\\tRE_IndirectSpecular_Physical\\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\\n\\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\\n}\",lights_fragment_begin:\"\\nvec3 geometryPosition = - vViewPosition;\\nvec3 geometryNormal = normal;\\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\\nvec3 geometryClearcoatNormal = vec3( 0.0 );\\n#ifdef USE_CLEARCOAT\\n\\tgeometryClearcoatNormal = clearcoatNormal;\\n#endif\\n#ifdef USE_IRIDESCENCE\\n\\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\\n\\tif ( material.iridescenceThickness == 0.0 ) {\\n\\t\\tmaterial.iridescence = 0.0;\\n\\t} else {\\n\\t\\tmaterial.iridescence = saturate( material.iridescence );\\n\\t}\\n\\tif ( material.iridescence > 0.0 ) {\\n\\t\\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\\n\\t\\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\\n\\t}\\n#endif\\nIncidentLight directLight;\\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\\n\\tPointLight pointLight;\\n\\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\\n\\tPointLightShadow pointLightShadow;\\n\\t#endif\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\\n\\t\\tpointLight = pointLights[ i ];\\n\\t\\tgetPointLightInfo( pointLight, geometryPosition, directLight );\\n\\t\\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\\n\\t\\tpointLightShadow = pointLightShadows[ i ];\\n\\t\\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\\n\\t\\t#endif\\n\\t\\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\\n\\t}\\n\\t#pragma unroll_loop_end\\n#endif\\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\\n\\tSpotLight spotLight;\\n\\tvec4 spotColor;\\n\\tvec3 spotLightCoord;\\n\\tbool inSpotLightMap;\\n\\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\\n\\tSpotLightShadow spotLightShadow;\\n\\t#endif\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\\n\\t\\tspotLight = spotLights[ i ];\\n\\t\\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\\n\\t\\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\\n\\t\\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\\n\\t\\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\\n\\t\\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\\n\\t\\t#else\\n\\t\\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\\n\\t\\t#endif\\n\\t\\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\\n\\t\\t\\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\\n\\t\\t\\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\\n\\t\\t\\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\\n\\t\\t\\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\\n\\t\\t#endif\\n\\t\\t#undef SPOT_LIGHT_MAP_INDEX\\n\\t\\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\\n\\t\\tspotLightShadow = spotLightShadows[ i ];\\n\\t\\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\\n\\t\\t#endif\\n\\t\\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\\n\\t}\\n\\t#pragma unroll_loop_end\\n#endif\\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\\n\\tDirectionalLight directionalLight;\\n\\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\\n\\tDirectionalLightShadow directionalLightShadow;\\n\\t#endif\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\\n\\t\\tdirectionalLight = directionalLights[ i ];\\n\\t\\tgetDirectionalLightInfo( directionalLight, directLight );\\n\\t\\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\\n\\t\\tdirectionalLightShadow = directionalLightShadows[ i ];\\n\\t\\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\\n\\t\\t#endif\\n\\t\\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\\n\\t}\\n\\t#pragma unroll_loop_end\\n#endif\\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\\n\\tRectAreaLight rectAreaLight;\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\\n\\t\\trectAreaLight = rectAreaLights[ i ];\\n\\t\\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\\n\\t}\\n\\t#pragma unroll_loop_end\\n#endif\\n#if defined( RE_IndirectDiffuse )\\n\\tvec3 iblIrradiance = vec3( 0.0 );\\n\\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\\n\\t#if defined( USE_LIGHT_PROBES )\\n\\t\\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\\n\\t#endif\\n\\t#if ( NUM_HEMI_LIGHTS > 0 )\\n\\t\\t#pragma unroll_loop_start\\n\\t\\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\\n\\t\\t\\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\\n\\t\\t}\\n\\t\\t#pragma unroll_loop_end\\n\\t#endif\\n#endif\\n#if defined( RE_IndirectSpecular )\\n\\tvec3 radiance = vec3( 0.0 );\\n\\tvec3 clearcoatRadiance = vec3( 0.0 );\\n#endif\",lights_fragment_maps:\"#if defined( RE_IndirectDiffuse )\\n\\t#ifdef USE_LIGHTMAP\\n\\t\\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\\n\\t\\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\\n\\t\\tirradiance += lightMapIrradiance;\\n\\t#endif\\n\\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\\n\\t\\tiblIrradiance += getIBLIrradiance( geometryNormal );\\n\\t#endif\\n#endif\\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\\n\\t#ifdef USE_ANISOTROPY\\n\\t\\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\\n\\t#else\\n\\t\\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\\n\\t#endif\\n\\t#ifdef USE_CLEARCOAT\\n\\t\\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\\n\\t#endif\\n#endif\",lights_fragment_end:\"#if defined( RE_IndirectDiffuse )\\n\\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\\n#endif\\n#if defined( RE_IndirectSpecular )\\n\\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\\n#endif\",logdepthbuf_fragment:\"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\\n\\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\\n#endif\",logdepthbuf_pars_fragment:\"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\\n\\tuniform float logDepthBufFC;\\n\\tvarying float vFragDepth;\\n\\tvarying float vIsPerspective;\\n#endif\",logdepthbuf_pars_vertex:\"#ifdef USE_LOGDEPTHBUF\\n\\t#ifdef USE_LOGDEPTHBUF_EXT\\n\\t\\tvarying float vFragDepth;\\n\\t\\tvarying float vIsPerspective;\\n\\t#else\\n\\t\\tuniform float logDepthBufFC;\\n\\t#endif\\n#endif\",logdepthbuf_vertex:\"#ifdef USE_LOGDEPTHBUF\\n\\t#ifdef USE_LOGDEPTHBUF_EXT\\n\\t\\tvFragDepth = 1.0 + gl_Position.w;\\n\\t\\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\\n\\t#else\\n\\t\\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\\n\\t\\t\\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\\n\\t\\t\\tgl_Position.z *= gl_Position.w;\\n\\t\\t}\\n\\t#endif\\n#endif\",map_fragment:\"#ifdef USE_MAP\\n\\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\\n\\t#ifdef DECODE_VIDEO_TEXTURE\\n\\t\\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\\n\\t\\n\\t#endif\\n\\tdiffuseColor *= sampledDiffuseColor;\\n#endif\",map_pars_fragment:\"#ifdef USE_MAP\\n\\tuniform sampler2D map;\\n#endif\",map_particle_fragment:\"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\\n\\t#if defined( USE_POINTS_UV )\\n\\t\\tvec2 uv = vUv;\\n\\t#else\\n\\t\\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\\n\\t#endif\\n#endif\\n#ifdef USE_MAP\\n\\tdiffuseColor *= texture2D( map, uv );\\n#endif\\n#ifdef USE_ALPHAMAP\\n\\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\\n#endif\",map_particle_pars_fragment:\"#if defined( USE_POINTS_UV )\\n\\tvarying vec2 vUv;\\n#else\\n\\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\\n\\t\\tuniform mat3 uvTransform;\\n\\t#endif\\n#endif\\n#ifdef USE_MAP\\n\\tuniform sampler2D map;\\n#endif\\n#ifdef USE_ALPHAMAP\\n\\tuniform sampler2D alphaMap;\\n#endif\",metalnessmap_fragment:\"float metalnessFactor = metalness;\\n#ifdef USE_METALNESSMAP\\n\\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\\n\\tmetalnessFactor *= texelMetalness.b;\\n#endif\",metalnessmap_pars_fragment:\"#ifdef USE_METALNESSMAP\\n\\tuniform sampler2D metalnessMap;\\n#endif\",morphcolor_vertex:\"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\\n\\tvColor *= morphTargetBaseInfluence;\\n\\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\\n\\t\\t#if defined( USE_COLOR_ALPHA )\\n\\t\\t\\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\\n\\t\\t#elif defined( USE_COLOR )\\n\\t\\t\\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\\n\\t\\t#endif\\n\\t}\\n#endif\",morphnormal_vertex:\"#ifdef USE_MORPHNORMALS\\n\\tobjectNormal *= morphTargetBaseInfluence;\\n\\t#ifdef MORPHTARGETS_TEXTURE\\n\\t\\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\\n\\t\\t\\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\\n\\t\\t}\\n\\t#else\\n\\t\\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\\n\\t\\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\\n\\t\\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\\n\\t\\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\\n\\t#endif\\n#endif\",morphtarget_pars_vertex:\"#ifdef USE_MORPHTARGETS\\n\\tuniform float morphTargetBaseInfluence;\\n\\t#ifdef MORPHTARGETS_TEXTURE\\n\\t\\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\\n\\t\\tuniform sampler2DArray morphTargetsTexture;\\n\\t\\tuniform ivec2 morphTargetsTextureSize;\\n\\t\\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\\n\\t\\t\\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\\n\\t\\t\\tint y = texelIndex / morphTargetsTextureSize.x;\\n\\t\\t\\tint x = texelIndex - y * morphTargetsTextureSize.x;\\n\\t\\t\\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\\n\\t\\t\\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\\n\\t\\t}\\n\\t#else\\n\\t\\t#ifndef USE_MORPHNORMALS\\n\\t\\t\\tuniform float morphTargetInfluences[ 8 ];\\n\\t\\t#else\\n\\t\\t\\tuniform float morphTargetInfluences[ 4 ];\\n\\t\\t#endif\\n\\t#endif\\n#endif\",morphtarget_vertex:\"#ifdef USE_MORPHTARGETS\\n\\ttransformed *= morphTargetBaseInfluence;\\n\\t#ifdef MORPHTARGETS_TEXTURE\\n\\t\\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\\n\\t\\t\\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\\n\\t\\t}\\n\\t#else\\n\\t\\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\\n\\t\\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\\n\\t\\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\\n\\t\\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\\n\\t\\t#ifndef USE_MORPHNORMALS\\n\\t\\t\\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\\n\\t\\t\\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\\n\\t\\t\\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\\n\\t\\t\\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\\n\\t\\t#endif\\n\\t#endif\\n#endif\",normal_fragment_begin:\"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\\n#ifdef FLAT_SHADED\\n\\tvec3 fdx = dFdx( vViewPosition );\\n\\tvec3 fdy = dFdy( vViewPosition );\\n\\tvec3 normal = normalize( cross( fdx, fdy ) );\\n#else\\n\\tvec3 normal = normalize( vNormal );\\n\\t#ifdef DOUBLE_SIDED\\n\\t\\tnormal *= faceDirection;\\n\\t#endif\\n#endif\\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\\n\\t#ifdef USE_TANGENT\\n\\t\\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\\n\\t#else\\n\\t\\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\\n\\t\\t#if defined( USE_NORMALMAP )\\n\\t\\t\\tvNormalMapUv\\n\\t\\t#elif defined( USE_CLEARCOAT_NORMALMAP )\\n\\t\\t\\tvClearcoatNormalMapUv\\n\\t\\t#else\\n\\t\\t\\tvUv\\n\\t\\t#endif\\n\\t\\t);\\n\\t#endif\\n\\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\\n\\t\\ttbn[0] *= faceDirection;\\n\\t\\ttbn[1] *= faceDirection;\\n\\t#endif\\n#endif\\n#ifdef USE_CLEARCOAT_NORMALMAP\\n\\t#ifdef USE_TANGENT\\n\\t\\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\\n\\t#else\\n\\t\\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\\n\\t#endif\\n\\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\\n\\t\\ttbn2[0] *= faceDirection;\\n\\t\\ttbn2[1] *= faceDirection;\\n\\t#endif\\n#endif\\nvec3 nonPerturbedNormal = normal;\",normal_fragment_maps:\"#ifdef USE_NORMALMAP_OBJECTSPACE\\n\\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\\n\\t#ifdef FLIP_SIDED\\n\\t\\tnormal = - normal;\\n\\t#endif\\n\\t#ifdef DOUBLE_SIDED\\n\\t\\tnormal = normal * faceDirection;\\n\\t#endif\\n\\tnormal = normalize( normalMatrix * normal );\\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\\n\\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\\n\\tmapN.xy *= normalScale;\\n\\tnormal = normalize( tbn * mapN );\\n#elif defined( USE_BUMPMAP )\\n\\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\\n#endif\",normal_pars_fragment:\"#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\tvarying vec3 vTangent;\\n\\t\\tvarying vec3 vBitangent;\\n\\t#endif\\n#endif\",normal_pars_vertex:\"#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n\\t#ifdef USE_TANGENT\\n\\t\\tvarying vec3 vTangent;\\n\\t\\tvarying vec3 vBitangent;\\n\\t#endif\\n#endif\",normal_vertex:\"#ifndef FLAT_SHADED\\n\\tvNormal = normalize( transformedNormal );\\n\\t#ifdef USE_TANGENT\\n\\t\\tvTangent = normalize( transformedTangent );\\n\\t\\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\\n\\t#endif\\n#endif\",normalmap_pars_fragment:\"#ifdef USE_NORMALMAP\\n\\tuniform sampler2D normalMap;\\n\\tuniform vec2 normalScale;\\n#endif\\n#ifdef USE_NORMALMAP_OBJECTSPACE\\n\\tuniform mat3 normalMatrix;\\n#endif\\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\\n\\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\\n\\t\\tvec3 q0 = dFdx( eye_pos.xyz );\\n\\t\\tvec3 q1 = dFdy( eye_pos.xyz );\\n\\t\\tvec2 st0 = dFdx( uv.st );\\n\\t\\tvec2 st1 = dFdy( uv.st );\\n\\t\\tvec3 N = surf_norm;\\n\\t\\tvec3 q1perp = cross( q1, N );\\n\\t\\tvec3 q0perp = cross( N, q0 );\\n\\t\\tvec3 T = q1perp * st0.x + q0perp * st1.x;\\n\\t\\tvec3 B = q1perp * st0.y + q0perp * st1.y;\\n\\t\\tfloat det = max( dot( T, T ), dot( B, B ) );\\n\\t\\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\\n\\t\\treturn mat3( T * scale, B * scale, N );\\n\\t}\\n#endif\",clearcoat_normal_fragment_begin:\"#ifdef USE_CLEARCOAT\\n\\tvec3 clearcoatNormal = nonPerturbedNormal;\\n#endif\",clearcoat_normal_fragment_maps:\"#ifdef USE_CLEARCOAT_NORMALMAP\\n\\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\\n\\tclearcoatMapN.xy *= clearcoatNormalScale;\\n\\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\\n#endif\",clearcoat_pars_fragment:\"#ifdef USE_CLEARCOATMAP\\n\\tuniform sampler2D clearcoatMap;\\n#endif\\n#ifdef USE_CLEARCOAT_NORMALMAP\\n\\tuniform sampler2D clearcoatNormalMap;\\n\\tuniform vec2 clearcoatNormalScale;\\n#endif\\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\\n\\tuniform sampler2D clearcoatRoughnessMap;\\n#endif\",iridescence_pars_fragment:\"#ifdef USE_IRIDESCENCEMAP\\n\\tuniform sampler2D iridescenceMap;\\n#endif\\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\\n\\tuniform sampler2D iridescenceThicknessMap;\\n#endif\",opaque_fragment:\"#ifdef OPAQUE\\ndiffuseColor.a = 1.0;\\n#endif\\n#ifdef USE_TRANSMISSION\\ndiffuseColor.a *= material.transmissionAlpha;\\n#endif\\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );\",packing:\"vec3 packNormalToRGB( const in vec3 normal ) {\\n\\treturn normalize( normal ) * 0.5 + 0.5;\\n}\\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\\n\\treturn 2.0 * rgb.xyz - 1.0;\\n}\\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\\nconst float ShiftRight8 = 1. / 256.;\\nvec4 packDepthToRGBA( const in float v ) {\\n\\tvec4 r = vec4( fract( v * PackFactors ), v );\\n\\tr.yzw -= r.xyz * ShiftRight8;\\treturn r * PackUpscale;\\n}\\nfloat unpackRGBAToDepth( const in vec4 v ) {\\n\\treturn dot( v, UnpackFactors );\\n}\\nvec2 packDepthToRG( in highp float v ) {\\n\\treturn packDepthToRGBA( v ).yx;\\n}\\nfloat unpackRGToDepth( const in highp vec2 v ) {\\n\\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\\n}\\nvec4 pack2HalfToRGBA( vec2 v ) {\\n\\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\\n\\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\\n}\\nvec2 unpackRGBATo2Half( vec4 v ) {\\n\\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\\n}\\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\\n\\treturn ( viewZ + near ) / ( near - far );\\n}\\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\\n\\treturn depth * ( near - far ) - near;\\n}\\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\\n\\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\\n}\\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\\n\\treturn ( near * far ) / ( ( far - near ) * depth - far );\\n}\",premultiplied_alpha_fragment:\"#ifdef PREMULTIPLIED_ALPHA\\n\\tgl_FragColor.rgb *= gl_FragColor.a;\\n#endif\",project_vertex:\"vec4 mvPosition = vec4( transformed, 1.0 );\\n#ifdef USE_BATCHING\\n\\tmvPosition = batchingMatrix * mvPosition;\\n#endif\\n#ifdef USE_INSTANCING\\n\\tmvPosition = instanceMatrix * mvPosition;\\n#endif\\nmvPosition = modelViewMatrix * mvPosition;\\ngl_Position = projectionMatrix * mvPosition;\",dithering_fragment:\"#ifdef DITHERING\\n\\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\\n#endif\",dithering_pars_fragment:\"#ifdef DITHERING\\n\\tvec3 dithering( vec3 color ) {\\n\\t\\tfloat grid_position = rand( gl_FragCoord.xy );\\n\\t\\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\\n\\t\\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\\n\\t\\treturn color + dither_shift_RGB;\\n\\t}\\n#endif\",roughnessmap_fragment:\"float roughnessFactor = roughness;\\n#ifdef USE_ROUGHNESSMAP\\n\\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\\n\\troughnessFactor *= texelRoughness.g;\\n#endif\",roughnessmap_pars_fragment:\"#ifdef USE_ROUGHNESSMAP\\n\\tuniform sampler2D roughnessMap;\\n#endif\",shadowmap_pars_fragment:\"#if NUM_SPOT_LIGHT_COORDS > 0\\n\\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\\n#endif\\n#if NUM_SPOT_LIGHT_MAPS > 0\\n\\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\\n#endif\\n#ifdef USE_SHADOWMAP\\n\\t#if NUM_DIR_LIGHT_SHADOWS > 0\\n\\t\\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\\n\\t\\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\\n\\t\\tstruct DirectionalLightShadow {\\n\\t\\t\\tfloat shadowBias;\\n\\t\\t\\tfloat shadowNormalBias;\\n\\t\\t\\tfloat shadowRadius;\\n\\t\\t\\tvec2 shadowMapSize;\\n\\t\\t};\\n\\t\\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\\n\\t#endif\\n\\t#if NUM_SPOT_LIGHT_SHADOWS > 0\\n\\t\\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\\n\\t\\tstruct SpotLightShadow {\\n\\t\\t\\tfloat shadowBias;\\n\\t\\t\\tfloat shadowNormalBias;\\n\\t\\t\\tfloat shadowRadius;\\n\\t\\t\\tvec2 shadowMapSize;\\n\\t\\t};\\n\\t\\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\\n\\t#endif\\n\\t#if NUM_POINT_LIGHT_SHADOWS > 0\\n\\t\\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\\n\\t\\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\\n\\t\\tstruct PointLightShadow {\\n\\t\\t\\tfloat shadowBias;\\n\\t\\t\\tfloat shadowNormalBias;\\n\\t\\t\\tfloat shadowRadius;\\n\\t\\t\\tvec2 shadowMapSize;\\n\\t\\t\\tfloat shadowCameraNear;\\n\\t\\t\\tfloat shadowCameraFar;\\n\\t\\t};\\n\\t\\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\\n\\t#endif\\n\\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\\n\\t\\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\\n\\t}\\n\\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\\n\\t\\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\\n\\t}\\n\\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\\n\\t\\tfloat occlusion = 1.0;\\n\\t\\tvec2 distribution = texture2DDistribution( shadow, uv );\\n\\t\\tfloat hard_shadow = step( compare , distribution.x );\\n\\t\\tif (hard_shadow != 1.0 ) {\\n\\t\\t\\tfloat distance = compare - distribution.x ;\\n\\t\\t\\tfloat variance = max( 0.00000, distribution.y * distribution.y );\\n\\t\\t\\tfloat softness_probability = variance / (variance + distance * distance );\\t\\t\\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\\t\\t\\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\\n\\t\\t}\\n\\t\\treturn occlusion;\\n\\t}\\n\\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\\n\\t\\tfloat shadow = 1.0;\\n\\t\\tshadowCoord.xyz /= shadowCoord.w;\\n\\t\\tshadowCoord.z += shadowBias;\\n\\t\\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\\n\\t\\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\\n\\t\\tif ( frustumTest ) {\\n\\t\\t#if defined( SHADOWMAP_TYPE_PCF )\\n\\t\\t\\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\\n\\t\\t\\tfloat dx0 = - texelSize.x * shadowRadius;\\n\\t\\t\\tfloat dy0 = - texelSize.y * shadowRadius;\\n\\t\\t\\tfloat dx1 = + texelSize.x * shadowRadius;\\n\\t\\t\\tfloat dy1 = + texelSize.y * shadowRadius;\\n\\t\\t\\tfloat dx2 = dx0 / 2.0;\\n\\t\\t\\tfloat dy2 = dy0 / 2.0;\\n\\t\\t\\tfloat dx3 = dx1 / 2.0;\\n\\t\\t\\tfloat dy3 = dy1 / 2.0;\\n\\t\\t\\tshadow = (\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\\n\\t\\t\\t) * ( 1.0 / 17.0 );\\n\\t\\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\\n\\t\\t\\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\\n\\t\\t\\tfloat dx = texelSize.x;\\n\\t\\t\\tfloat dy = texelSize.y;\\n\\t\\t\\tvec2 uv = shadowCoord.xy;\\n\\t\\t\\tvec2 f = fract( uv * shadowMapSize + 0.5 );\\n\\t\\t\\tuv -= f * texelSize;\\n\\t\\t\\tshadow = (\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\\n\\t\\t\\t\\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t f.x ) +\\n\\t\\t\\t\\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t f.x ) +\\n\\t\\t\\t\\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t f.y ) +\\n\\t\\t\\t\\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t f.y ) +\\n\\t\\t\\t\\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t\\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t\\t  f.x ),\\n\\t\\t\\t\\t\\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t\\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\\n\\t\\t\\t\\t\\t\\t  f.x ),\\n\\t\\t\\t\\t\\t f.y )\\n\\t\\t\\t) * ( 1.0 / 9.0 );\\n\\t\\t#elif defined( SHADOWMAP_TYPE_VSM )\\n\\t\\t\\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\\n\\t\\t#else\\n\\t\\t\\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\\n\\t\\t#endif\\n\\t\\t}\\n\\t\\treturn shadow;\\n\\t}\\n\\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\\n\\t\\tvec3 absV = abs( v );\\n\\t\\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\\n\\t\\tabsV *= scaleToCube;\\n\\t\\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\\n\\t\\tvec2 planar = v.xy;\\n\\t\\tfloat almostATexel = 1.5 * texelSizeY;\\n\\t\\tfloat almostOne = 1.0 - almostATexel;\\n\\t\\tif ( absV.z >= almostOne ) {\\n\\t\\t\\tif ( v.z > 0.0 )\\n\\t\\t\\t\\tplanar.x = 4.0 - v.x;\\n\\t\\t} else if ( absV.x >= almostOne ) {\\n\\t\\t\\tfloat signX = sign( v.x );\\n\\t\\t\\tplanar.x = v.z * signX + 2.0 * signX;\\n\\t\\t} else if ( absV.y >= almostOne ) {\\n\\t\\t\\tfloat signY = sign( v.y );\\n\\t\\t\\tplanar.x = v.x + 2.0 * signY + 2.0;\\n\\t\\t\\tplanar.y = v.z * signY - 2.0;\\n\\t\\t}\\n\\t\\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\\n\\t}\\n\\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\\n\\t\\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\\n\\t\\tvec3 lightToPosition = shadowCoord.xyz;\\n\\t\\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\\t\\tdp += shadowBias;\\n\\t\\tvec3 bd3D = normalize( lightToPosition );\\n\\t\\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\\n\\t\\t\\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\\n\\t\\t\\treturn (\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\\n\\t\\t\\t\\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\\n\\t\\t\\t) * ( 1.0 / 9.0 );\\n\\t\\t#else\\n\\t\\t\\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\\n\\t\\t#endif\\n\\t}\\n#endif\",shadowmap_pars_vertex:\"#if NUM_SPOT_LIGHT_COORDS > 0\\n\\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\\n\\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\\n#endif\\n#ifdef USE_SHADOWMAP\\n\\t#if NUM_DIR_LIGHT_SHADOWS > 0\\n\\t\\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\\n\\t\\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\\n\\t\\tstruct DirectionalLightShadow {\\n\\t\\t\\tfloat shadowBias;\\n\\t\\t\\tfloat shadowNormalBias;\\n\\t\\t\\tfloat shadowRadius;\\n\\t\\t\\tvec2 shadowMapSize;\\n\\t\\t};\\n\\t\\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\\n\\t#endif\\n\\t#if NUM_SPOT_LIGHT_SHADOWS > 0\\n\\t\\tstruct SpotLightShadow {\\n\\t\\t\\tfloat shadowBias;\\n\\t\\t\\tfloat shadowNormalBias;\\n\\t\\t\\tfloat shadowRadius;\\n\\t\\t\\tvec2 shadowMapSize;\\n\\t\\t};\\n\\t\\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\\n\\t#endif\\n\\t#if NUM_POINT_LIGHT_SHADOWS > 0\\n\\t\\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\\n\\t\\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\\n\\t\\tstruct PointLightShadow {\\n\\t\\t\\tfloat shadowBias;\\n\\t\\t\\tfloat shadowNormalBias;\\n\\t\\t\\tfloat shadowRadius;\\n\\t\\t\\tvec2 shadowMapSize;\\n\\t\\t\\tfloat shadowCameraNear;\\n\\t\\t\\tfloat shadowCameraFar;\\n\\t\\t};\\n\\t\\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\\n\\t#endif\\n#endif\",shadowmap_vertex:\"#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\\n\\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\\n\\tvec4 shadowWorldPosition;\\n#endif\\n#if defined( USE_SHADOWMAP )\\n\\t#if NUM_DIR_LIGHT_SHADOWS > 0\\n\\t\\t#pragma unroll_loop_start\\n\\t\\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\\n\\t\\t\\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\\n\\t\\t\\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\\n\\t\\t}\\n\\t\\t#pragma unroll_loop_end\\n\\t#endif\\n\\t#if NUM_POINT_LIGHT_SHADOWS > 0\\n\\t\\t#pragma unroll_loop_start\\n\\t\\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\\n\\t\\t\\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\\n\\t\\t\\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\\n\\t\\t}\\n\\t\\t#pragma unroll_loop_end\\n\\t#endif\\n#endif\\n#if NUM_SPOT_LIGHT_COORDS > 0\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\\n\\t\\tshadowWorldPosition = worldPosition;\\n\\t\\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\\n\\t\\t\\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\\n\\t\\t#endif\\n\\t\\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\\n\\t}\\n\\t#pragma unroll_loop_end\\n#endif\",shadowmask_pars_fragment:\"float getShadowMask() {\\n\\tfloat shadow = 1.0;\\n\\t#ifdef USE_SHADOWMAP\\n\\t#if NUM_DIR_LIGHT_SHADOWS > 0\\n\\tDirectionalLightShadow directionalLight;\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\\n\\t\\tdirectionalLight = directionalLightShadows[ i ];\\n\\t\\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\\n\\t}\\n\\t#pragma unroll_loop_end\\n\\t#endif\\n\\t#if NUM_SPOT_LIGHT_SHADOWS > 0\\n\\tSpotLightShadow spotLight;\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\\n\\t\\tspotLight = spotLightShadows[ i ];\\n\\t\\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\\n\\t}\\n\\t#pragma unroll_loop_end\\n\\t#endif\\n\\t#if NUM_POINT_LIGHT_SHADOWS > 0\\n\\tPointLightShadow pointLight;\\n\\t#pragma unroll_loop_start\\n\\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\\n\\t\\tpointLight = pointLightShadows[ i ];\\n\\t\\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\\n\\t}\\n\\t#pragma unroll_loop_end\\n\\t#endif\\n\\t#endif\\n\\treturn shadow;\\n}\",skinbase_vertex:\"#ifdef USE_SKINNING\\n\\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\\n\\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\\n\\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\\n\\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\\n#endif\",skinning_pars_vertex:\"#ifdef USE_SKINNING\\n\\tuniform mat4 bindMatrix;\\n\\tuniform mat4 bindMatrixInverse;\\n\\tuniform highp sampler2D boneTexture;\\n\\tmat4 getBoneMatrix( const in float i ) {\\n\\t\\tint size = textureSize( boneTexture, 0 ).x;\\n\\t\\tint j = int( i ) * 4;\\n\\t\\tint x = j % size;\\n\\t\\tint y = j / size;\\n\\t\\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\\n\\t\\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\\n\\t\\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\\n\\t\\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\\n\\t\\treturn mat4( v1, v2, v3, v4 );\\n\\t}\\n#endif\",skinning_vertex:\"#ifdef USE_SKINNING\\n\\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\\n\\tvec4 skinned = vec4( 0.0 );\\n\\tskinned += boneMatX * skinVertex * skinWeight.x;\\n\\tskinned += boneMatY * skinVertex * skinWeight.y;\\n\\tskinned += boneMatZ * skinVertex * skinWeight.z;\\n\\tskinned += boneMatW * skinVertex * skinWeight.w;\\n\\ttransformed = ( bindMatrixInverse * skinned ).xyz;\\n#endif\",skinnormal_vertex:\"#ifdef USE_SKINNING\\n\\tmat4 skinMatrix = mat4( 0.0 );\\n\\tskinMatrix += skinWeight.x * boneMatX;\\n\\tskinMatrix += skinWeight.y * boneMatY;\\n\\tskinMatrix += skinWeight.z * boneMatZ;\\n\\tskinMatrix += skinWeight.w * boneMatW;\\n\\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\\n\\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\\n\\t#ifdef USE_TANGENT\\n\\t\\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\\n\\t#endif\\n#endif\",specularmap_fragment:\"float specularStrength;\\n#ifdef USE_SPECULARMAP\\n\\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\\n\\tspecularStrength = texelSpecular.r;\\n#else\\n\\tspecularStrength = 1.0;\\n#endif\",specularmap_pars_fragment:\"#ifdef USE_SPECULARMAP\\n\\tuniform sampler2D specularMap;\\n#endif\",tonemapping_fragment:\"#if defined( TONE_MAPPING )\\n\\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\\n#endif\",tonemapping_pars_fragment:\"#ifndef saturate\\n#define saturate( a ) clamp( a, 0.0, 1.0 )\\n#endif\\nuniform float toneMappingExposure;\\nvec3 LinearToneMapping( vec3 color ) {\\n\\treturn saturate( toneMappingExposure * color );\\n}\\nvec3 ReinhardToneMapping( vec3 color ) {\\n\\tcolor *= toneMappingExposure;\\n\\treturn saturate( color / ( vec3( 1.0 ) + color ) );\\n}\\nvec3 OptimizedCineonToneMapping( vec3 color ) {\\n\\tcolor *= toneMappingExposure;\\n\\tcolor = max( vec3( 0.0 ), color - 0.004 );\\n\\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\\n}\\nvec3 RRTAndODTFit( vec3 v ) {\\n\\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\\n\\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\\n\\treturn a / b;\\n}\\nvec3 ACESFilmicToneMapping( vec3 color ) {\\n\\tconst mat3 ACESInputMat = mat3(\\n\\t\\tvec3( 0.59719, 0.07600, 0.02840 ),\\t\\tvec3( 0.35458, 0.90834, 0.13383 ),\\n\\t\\tvec3( 0.04823, 0.01566, 0.83777 )\\n\\t);\\n\\tconst mat3 ACESOutputMat = mat3(\\n\\t\\tvec3(  1.60475, -0.10208, -0.00327 ),\\t\\tvec3( -0.53108,  1.10813, -0.07276 ),\\n\\t\\tvec3( -0.07367, -0.00605,  1.07602 )\\n\\t);\\n\\tcolor *= toneMappingExposure / 0.6;\\n\\tcolor = ACESInputMat * color;\\n\\tcolor = RRTAndODTFit( color );\\n\\tcolor = ACESOutputMat * color;\\n\\treturn saturate( color );\\n}\\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\\n\\tvec3( 1.6605, - 0.1246, - 0.0182 ),\\n\\tvec3( - 0.5876, 1.1329, - 0.1006 ),\\n\\tvec3( - 0.0728, - 0.0083, 1.1187 )\\n);\\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\\n\\tvec3( 0.6274, 0.0691, 0.0164 ),\\n\\tvec3( 0.3293, 0.9195, 0.0880 ),\\n\\tvec3( 0.0433, 0.0113, 0.8956 )\\n);\\nvec3 agxDefaultContrastApprox( vec3 x ) {\\n\\tvec3 x2 = x * x;\\n\\tvec3 x4 = x2 * x2;\\n\\treturn + 15.5 * x4 * x2\\n\\t\\t- 40.14 * x4 * x\\n\\t\\t+ 31.96 * x4\\n\\t\\t- 6.868 * x2 * x\\n\\t\\t+ 0.4298 * x2\\n\\t\\t+ 0.1191 * x\\n\\t\\t- 0.00232;\\n}\\nvec3 AgXToneMapping( vec3 color ) {\\n\\tconst mat3 AgXInsetMatrix = mat3(\\n\\t\\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\\n\\t\\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\\n\\t\\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\\n\\t);\\n\\tconst mat3 AgXOutsetMatrix = mat3(\\n\\t\\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\\n\\t\\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\\n\\t\\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\\n\\t);\\n\\tconst float AgxMinEv = - 12.47393;\\tconst float AgxMaxEv = 4.026069;\\n\\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\\n\\tcolor *= toneMappingExposure;\\n\\tcolor = AgXInsetMatrix * color;\\n\\tcolor = max( color, 1e-10 );\\tcolor = log2( color );\\n\\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\\n\\tcolor = clamp( color, 0.0, 1.0 );\\n\\tcolor = agxDefaultContrastApprox( color );\\n\\tcolor = AgXOutsetMatrix * color;\\n\\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\\n\\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\\n\\treturn color;\\n}\\nvec3 CustomToneMapping( vec3 color ) { return color; }\",transmission_fragment:\"#ifdef USE_TRANSMISSION\\n\\tmaterial.transmission = transmission;\\n\\tmaterial.transmissionAlpha = 1.0;\\n\\tmaterial.thickness = thickness;\\n\\tmaterial.attenuationDistance = attenuationDistance;\\n\\tmaterial.attenuationColor = attenuationColor;\\n\\t#ifdef USE_TRANSMISSIONMAP\\n\\t\\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\\n\\t#endif\\n\\t#ifdef USE_THICKNESSMAP\\n\\t\\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\\n\\t#endif\\n\\tvec3 pos = vWorldPosition;\\n\\tvec3 v = normalize( cameraPosition - pos );\\n\\tvec3 n = inverseTransformDirection( normal, viewMatrix );\\n\\tvec4 transmitted = getIBLVolumeRefraction(\\n\\t\\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\\n\\t\\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\\n\\t\\tmaterial.attenuationColor, material.attenuationDistance );\\n\\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\\n\\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\\n#endif\",transmission_pars_fragment:\"#ifdef USE_TRANSMISSION\\n\\tuniform float transmission;\\n\\tuniform float thickness;\\n\\tuniform float attenuationDistance;\\n\\tuniform vec3 attenuationColor;\\n\\t#ifdef USE_TRANSMISSIONMAP\\n\\t\\tuniform sampler2D transmissionMap;\\n\\t#endif\\n\\t#ifdef USE_THICKNESSMAP\\n\\t\\tuniform sampler2D thicknessMap;\\n\\t#endif\\n\\tuniform vec2 transmissionSamplerSize;\\n\\tuniform sampler2D transmissionSamplerMap;\\n\\tuniform mat4 modelMatrix;\\n\\tuniform mat4 projectionMatrix;\\n\\tvarying vec3 vWorldPosition;\\n\\tfloat w0( float a ) {\\n\\t\\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\\n\\t}\\n\\tfloat w1( float a ) {\\n\\t\\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\\n\\t}\\n\\tfloat w2( float a ){\\n\\t\\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\\n\\t}\\n\\tfloat w3( float a ) {\\n\\t\\treturn ( 1.0 / 6.0 ) * ( a * a * a );\\n\\t}\\n\\tfloat g0( float a ) {\\n\\t\\treturn w0( a ) + w1( a );\\n\\t}\\n\\tfloat g1( float a ) {\\n\\t\\treturn w2( a ) + w3( a );\\n\\t}\\n\\tfloat h0( float a ) {\\n\\t\\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\\n\\t}\\n\\tfloat h1( float a ) {\\n\\t\\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\\n\\t}\\n\\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\\n\\t\\tuv = uv * texelSize.zw + 0.5;\\n\\t\\tvec2 iuv = floor( uv );\\n\\t\\tvec2 fuv = fract( uv );\\n\\t\\tfloat g0x = g0( fuv.x );\\n\\t\\tfloat g1x = g1( fuv.x );\\n\\t\\tfloat h0x = h0( fuv.x );\\n\\t\\tfloat h1x = h1( fuv.x );\\n\\t\\tfloat h0y = h0( fuv.y );\\n\\t\\tfloat h1y = h1( fuv.y );\\n\\t\\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\\n\\t\\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\\n\\t\\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\\n\\t\\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\\n\\t\\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\\n\\t\\t\\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\\n\\t}\\n\\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\\n\\t\\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\\n\\t\\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\\n\\t\\tvec2 fLodSizeInv = 1.0 / fLodSize;\\n\\t\\tvec2 cLodSizeInv = 1.0 / cLodSize;\\n\\t\\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\\n\\t\\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\\n\\t\\treturn mix( fSample, cSample, fract( lod ) );\\n\\t}\\n\\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\\n\\t\\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\\n\\t\\tvec3 modelScale;\\n\\t\\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\\n\\t\\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\\n\\t\\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\\n\\t\\treturn normalize( refractionVector ) * thickness * modelScale;\\n\\t}\\n\\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\\n\\t\\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\\n\\t}\\n\\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\\n\\t\\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\\n\\t\\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\\n\\t}\\n\\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\\n\\t\\tif ( isinf( attenuationDistance ) ) {\\n\\t\\t\\treturn vec3( 1.0 );\\n\\t\\t} else {\\n\\t\\t\\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\\n\\t\\t\\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\\t\\t\\treturn transmittance;\\n\\t\\t}\\n\\t}\\n\\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\\n\\t\\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\\n\\t\\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\\n\\t\\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\\n\\t\\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\\n\\t\\tvec3 refractedRayExit = position + transmissionRay;\\n\\t\\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\\n\\t\\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\\n\\t\\trefractionCoords += 1.0;\\n\\t\\trefractionCoords /= 2.0;\\n\\t\\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\\n\\t\\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\\n\\t\\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\\n\\t\\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\\n\\t\\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\\n\\t\\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\\n\\t}\\n#endif\",uv_pars_fragment:\"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\\n\\tvarying vec2 vUv;\\n#endif\\n#ifdef USE_MAP\\n\\tvarying vec2 vMapUv;\\n#endif\\n#ifdef USE_ALPHAMAP\\n\\tvarying vec2 vAlphaMapUv;\\n#endif\\n#ifdef USE_LIGHTMAP\\n\\tvarying vec2 vLightMapUv;\\n#endif\\n#ifdef USE_AOMAP\\n\\tvarying vec2 vAoMapUv;\\n#endif\\n#ifdef USE_BUMPMAP\\n\\tvarying vec2 vBumpMapUv;\\n#endif\\n#ifdef USE_NORMALMAP\\n\\tvarying vec2 vNormalMapUv;\\n#endif\\n#ifdef USE_EMISSIVEMAP\\n\\tvarying vec2 vEmissiveMapUv;\\n#endif\\n#ifdef USE_METALNESSMAP\\n\\tvarying vec2 vMetalnessMapUv;\\n#endif\\n#ifdef USE_ROUGHNESSMAP\\n\\tvarying vec2 vRoughnessMapUv;\\n#endif\\n#ifdef USE_ANISOTROPYMAP\\n\\tvarying vec2 vAnisotropyMapUv;\\n#endif\\n#ifdef USE_CLEARCOATMAP\\n\\tvarying vec2 vClearcoatMapUv;\\n#endif\\n#ifdef USE_CLEARCOAT_NORMALMAP\\n\\tvarying vec2 vClearcoatNormalMapUv;\\n#endif\\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\\n\\tvarying vec2 vClearcoatRoughnessMapUv;\\n#endif\\n#ifdef USE_IRIDESCENCEMAP\\n\\tvarying vec2 vIridescenceMapUv;\\n#endif\\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\\n\\tvarying vec2 vIridescenceThicknessMapUv;\\n#endif\\n#ifdef USE_SHEEN_COLORMAP\\n\\tvarying vec2 vSheenColorMapUv;\\n#endif\\n#ifdef USE_SHEEN_ROUGHNESSMAP\\n\\tvarying vec2 vSheenRoughnessMapUv;\\n#endif\\n#ifdef USE_SPECULARMAP\\n\\tvarying vec2 vSpecularMapUv;\\n#endif\\n#ifdef USE_SPECULAR_COLORMAP\\n\\tvarying vec2 vSpecularColorMapUv;\\n#endif\\n#ifdef USE_SPECULAR_INTENSITYMAP\\n\\tvarying vec2 vSpecularIntensityMapUv;\\n#endif\\n#ifdef USE_TRANSMISSIONMAP\\n\\tuniform mat3 transmissionMapTransform;\\n\\tvarying vec2 vTransmissionMapUv;\\n#endif\\n#ifdef USE_THICKNESSMAP\\n\\tuniform mat3 thicknessMapTransform;\\n\\tvarying vec2 vThicknessMapUv;\\n#endif\",uv_pars_vertex:\"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\\n\\tvarying vec2 vUv;\\n#endif\\n#ifdef USE_MAP\\n\\tuniform mat3 mapTransform;\\n\\tvarying vec2 vMapUv;\\n#endif\\n#ifdef USE_ALPHAMAP\\n\\tuniform mat3 alphaMapTransform;\\n\\tvarying vec2 vAlphaMapUv;\\n#endif\\n#ifdef USE_LIGHTMAP\\n\\tuniform mat3 lightMapTransform;\\n\\tvarying vec2 vLightMapUv;\\n#endif\\n#ifdef USE_AOMAP\\n\\tuniform mat3 aoMapTransform;\\n\\tvarying vec2 vAoMapUv;\\n#endif\\n#ifdef USE_BUMPMAP\\n\\tuniform mat3 bumpMapTransform;\\n\\tvarying vec2 vBumpMapUv;\\n#endif\\n#ifdef USE_NORMALMAP\\n\\tuniform mat3 normalMapTransform;\\n\\tvarying vec2 vNormalMapUv;\\n#endif\\n#ifdef USE_DISPLACEMENTMAP\\n\\tuniform mat3 displacementMapTransform;\\n\\tvarying vec2 vDisplacementMapUv;\\n#endif\\n#ifdef USE_EMISSIVEMAP\\n\\tuniform mat3 emissiveMapTransform;\\n\\tvarying vec2 vEmissiveMapUv;\\n#endif\\n#ifdef USE_METALNESSMAP\\n\\tuniform mat3 metalnessMapTransform;\\n\\tvarying vec2 vMetalnessMapUv;\\n#endif\\n#ifdef USE_ROUGHNESSMAP\\n\\tuniform mat3 roughnessMapTransform;\\n\\tvarying vec2 vRoughnessMapUv;\\n#endif\\n#ifdef USE_ANISOTROPYMAP\\n\\tuniform mat3 anisotropyMapTransform;\\n\\tvarying vec2 vAnisotropyMapUv;\\n#endif\\n#ifdef USE_CLEARCOATMAP\\n\\tuniform mat3 clearcoatMapTransform;\\n\\tvarying vec2 vClearcoatMapUv;\\n#endif\\n#ifdef USE_CLEARCOAT_NORMALMAP\\n\\tuniform mat3 clearcoatNormalMapTransform;\\n\\tvarying vec2 vClearcoatNormalMapUv;\\n#endif\\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\\n\\tuniform mat3 clearcoatRoughnessMapTransform;\\n\\tvarying vec2 vClearcoatRoughnessMapUv;\\n#endif\\n#ifdef USE_SHEEN_COLORMAP\\n\\tuniform mat3 sheenColorMapTransform;\\n\\tvarying vec2 vSheenColorMapUv;\\n#endif\\n#ifdef USE_SHEEN_ROUGHNESSMAP\\n\\tuniform mat3 sheenRoughnessMapTransform;\\n\\tvarying vec2 vSheenRoughnessMapUv;\\n#endif\\n#ifdef USE_IRIDESCENCEMAP\\n\\tuniform mat3 iridescenceMapTransform;\\n\\tvarying vec2 vIridescenceMapUv;\\n#endif\\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\\n\\tuniform mat3 iridescenceThicknessMapTransform;\\n\\tvarying vec2 vIridescenceThicknessMapUv;\\n#endif\\n#ifdef USE_SPECULARMAP\\n\\tuniform mat3 specularMapTransform;\\n\\tvarying vec2 vSpecularMapUv;\\n#endif\\n#ifdef USE_SPECULAR_COLORMAP\\n\\tuniform mat3 specularColorMapTransform;\\n\\tvarying vec2 vSpecularColorMapUv;\\n#endif\\n#ifdef USE_SPECULAR_INTENSITYMAP\\n\\tuniform mat3 specularIntensityMapTransform;\\n\\tvarying vec2 vSpecularIntensityMapUv;\\n#endif\\n#ifdef USE_TRANSMISSIONMAP\\n\\tuniform mat3 transmissionMapTransform;\\n\\tvarying vec2 vTransmissionMapUv;\\n#endif\\n#ifdef USE_THICKNESSMAP\\n\\tuniform mat3 thicknessMapTransform;\\n\\tvarying vec2 vThicknessMapUv;\\n#endif\",uv_vertex:\"#if defined( USE_UV ) || defined( USE_ANISOTROPY )\\n\\tvUv = vec3( uv, 1 ).xy;\\n#endif\\n#ifdef USE_MAP\\n\\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_ALPHAMAP\\n\\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_LIGHTMAP\\n\\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_AOMAP\\n\\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_BUMPMAP\\n\\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_NORMALMAP\\n\\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_DISPLACEMENTMAP\\n\\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_EMISSIVEMAP\\n\\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_METALNESSMAP\\n\\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_ROUGHNESSMAP\\n\\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_ANISOTROPYMAP\\n\\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_CLEARCOATMAP\\n\\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_CLEARCOAT_NORMALMAP\\n\\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\\n\\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_IRIDESCENCEMAP\\n\\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\\n\\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_SHEEN_COLORMAP\\n\\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_SHEEN_ROUGHNESSMAP\\n\\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_SPECULARMAP\\n\\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_SPECULAR_COLORMAP\\n\\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_SPECULAR_INTENSITYMAP\\n\\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_TRANSMISSIONMAP\\n\\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\\n#endif\\n#ifdef USE_THICKNESSMAP\\n\\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\\n#endif\",worldpos_vertex:\"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\\n\\tvec4 worldPosition = vec4( transformed, 1.0 );\\n\\t#ifdef USE_BATCHING\\n\\t\\tworldPosition = batchingMatrix * worldPosition;\\n\\t#endif\\n\\t#ifdef USE_INSTANCING\\n\\t\\tworldPosition = instanceMatrix * worldPosition;\\n\\t#endif\\n\\tworldPosition = modelMatrix * worldPosition;\\n#endif\",background_vert:\"varying vec2 vUv;\\nuniform mat3 uvTransform;\\nvoid main() {\\n\\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\\n\\tgl_Position = vec4( position.xy, 1.0, 1.0 );\\n}\",background_frag:\"uniform sampler2D t2D;\\nuniform float backgroundIntensity;\\nvarying vec2 vUv;\\nvoid main() {\\n\\tvec4 texColor = texture2D( t2D, vUv );\\n\\t#ifdef DECODE_VIDEO_TEXTURE\\n\\t\\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\\n\\t#endif\\n\\ttexColor.rgb *= backgroundIntensity;\\n\\tgl_FragColor = texColor;\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n}\",backgroundCube_vert:\"varying vec3 vWorldDirection;\\n#include <common>\\nvoid main() {\\n\\tvWorldDirection = transformDirection( position, modelMatrix );\\n\\t#include <begin_vertex>\\n\\t#include <project_vertex>\\n\\tgl_Position.z = gl_Position.w;\\n}\",backgroundCube_frag:\"#ifdef ENVMAP_TYPE_CUBE\\n\\tuniform samplerCube envMap;\\n#elif defined( ENVMAP_TYPE_CUBE_UV )\\n\\tuniform sampler2D envMap;\\n#endif\\nuniform float flipEnvMap;\\nuniform float backgroundBlurriness;\\nuniform float backgroundIntensity;\\nvarying vec3 vWorldDirection;\\n#include <cube_uv_reflection_fragment>\\nvoid main() {\\n\\t#ifdef ENVMAP_TYPE_CUBE\\n\\t\\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\\n\\t#elif defined( ENVMAP_TYPE_CUBE_UV )\\n\\t\\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\\n\\t#else\\n\\t\\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\\n\\t#endif\\n\\ttexColor.rgb *= backgroundIntensity;\\n\\tgl_FragColor = texColor;\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n}\",cube_vert:\"varying vec3 vWorldDirection;\\n#include <common>\\nvoid main() {\\n\\tvWorldDirection = transformDirection( position, modelMatrix );\\n\\t#include <begin_vertex>\\n\\t#include <project_vertex>\\n\\tgl_Position.z = gl_Position.w;\\n}\",cube_frag:\"uniform samplerCube tCube;\\nuniform float tFlip;\\nuniform float opacity;\\nvarying vec3 vWorldDirection;\\nvoid main() {\\n\\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\\n\\tgl_FragColor = texColor;\\n\\tgl_FragColor.a *= opacity;\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n}\",depth_vert:\"#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvarying vec2 vHighPrecisionZW;\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#ifdef USE_DISPLACEMENTMAP\\n\\t\\t#include <beginnormal_vertex>\\n\\t\\t#include <morphnormal_vertex>\\n\\t\\t#include <skinnormal_vertex>\\n\\t#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvHighPrecisionZW = gl_Position.zw;\\n}\",depth_frag:\"#if DEPTH_PACKING == 3200\\n\\tuniform float opacity;\\n#endif\\n#include <common>\\n#include <packing>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvarying vec2 vHighPrecisionZW;\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( 1.0 );\\n\\t#if DEPTH_PACKING == 3200\\n\\t\\tdiffuseColor.a = opacity;\\n\\t#endif\\n\\t#include <map_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\t#include <logdepthbuf_fragment>\\n\\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\\n\\t#if DEPTH_PACKING == 3200\\n\\t\\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\\n\\t#elif DEPTH_PACKING == 3201\\n\\t\\tgl_FragColor = packDepthToRGBA( fragCoordZ );\\n\\t#endif\\n}\",distanceRGBA_vert:\"#define DISTANCE\\nvarying vec3 vWorldPosition;\\n#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#ifdef USE_DISPLACEMENTMAP\\n\\t\\t#include <beginnormal_vertex>\\n\\t\\t#include <morphnormal_vertex>\\n\\t\\t#include <skinnormal_vertex>\\n\\t#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvWorldPosition = worldPosition.xyz;\\n}\",distanceRGBA_frag:\"#define DISTANCE\\nuniform vec3 referencePosition;\\nuniform float nearDistance;\\nuniform float farDistance;\\nvarying vec3 vWorldPosition;\\n#include <common>\\n#include <packing>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main () {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( 1.0 );\\n\\t#include <map_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\tfloat dist = length( vWorldPosition - referencePosition );\\n\\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\\n\\tdist = saturate( dist );\\n\\tgl_FragColor = packDepthToRGBA( dist );\\n}\",equirect_vert:\"varying vec3 vWorldDirection;\\n#include <common>\\nvoid main() {\\n\\tvWorldDirection = transformDirection( position, modelMatrix );\\n\\t#include <begin_vertex>\\n\\t#include <project_vertex>\\n}\",equirect_frag:\"uniform sampler2D tEquirect;\\nvarying vec3 vWorldDirection;\\n#include <common>\\nvoid main() {\\n\\tvec3 direction = normalize( vWorldDirection );\\n\\tvec2 sampleUV = equirectUv( direction );\\n\\tgl_FragColor = texture2D( tEquirect, sampleUV );\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n}\",linedashed_vert:\"uniform float scale;\\nattribute float lineDistance;\\nvarying float vLineDistance;\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\tvLineDistance = scale * lineDistance;\\n\\t#include <uv_vertex>\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <fog_vertex>\\n}\",linedashed_frag:\"uniform vec3 diffuse;\\nuniform float opacity;\\nuniform float dashSize;\\nuniform float totalSize;\\nvarying float vLineDistance;\\n#include <common>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\\n\\t\\tdiscard;\\n\\t}\\n\\tvec3 outgoingLight = vec3( 0.0 );\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\toutgoingLight = diffuseColor.rgb;\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n}\",meshbasic_vert:\"#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <envmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <batching_vertex>\\n\\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\\n\\t\\t#include <beginnormal_vertex>\\n\\t\\t#include <morphnormal_vertex>\\n\\t\\t#include <skinbase_vertex>\\n\\t\\t#include <skinnormal_vertex>\\n\\t\\t#include <defaultnormal_vertex>\\n\\t#endif\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <envmap_vertex>\\n\\t#include <fog_vertex>\\n}\",meshbasic_frag:\"uniform vec3 diffuse;\\nuniform float opacity;\\n#ifndef FLAT_SHADED\\n\\tvarying vec3 vNormal;\\n#endif\\n#include <common>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <envmap_common_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\t#include <specularmap_fragment>\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\t#ifdef USE_LIGHTMAP\\n\\t\\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\\n\\t\\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\\n\\t#else\\n\\t\\treflectedLight.indirectDiffuse += vec3( 1.0 );\\n\\t#endif\\n\\t#include <aomap_fragment>\\n\\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\\n\\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\\n\\t#include <envmap_fragment>\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",meshlambert_vert:\"#define LAMBERT\\nvarying vec3 vViewPosition;\\n#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <envmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <normal_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <normal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n\\t#include <worldpos_vertex>\\n\\t#include <envmap_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",meshlambert_frag:\"#define LAMBERT\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform float opacity;\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <envmap_common_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <normal_pars_fragment>\\n#include <lights_lambert_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\tvec3 totalEmissiveRadiance = emissive;\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\t#include <specularmap_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\t#include <emissivemap_fragment>\\n\\t#include <lights_lambert_fragment>\\n\\t#include <lights_fragment_begin>\\n\\t#include <lights_fragment_maps>\\n\\t#include <lights_fragment_end>\\n\\t#include <aomap_fragment>\\n\\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\\n\\t#include <envmap_fragment>\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",meshmatcap_vert:\"#define MATCAP\\nvarying vec3 vViewPosition;\\n#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <color_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <normal_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <normal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <fog_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n}\",meshmatcap_frag:\"#define MATCAP\\nuniform vec3 diffuse;\\nuniform float opacity;\\nuniform sampler2D matcap;\\nvarying vec3 vViewPosition;\\n#include <common>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <normal_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\tvec3 viewDir = normalize( vViewPosition );\\n\\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\\n\\tvec3 y = cross( viewDir, x );\\n\\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\\n\\t#ifdef USE_MATCAP\\n\\t\\tvec4 matcapColor = texture2D( matcap, uv );\\n\\t#else\\n\\t\\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\\n\\t#endif\\n\\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",meshnormal_vert:\"#define NORMAL\\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\\n\\tvarying vec3 vViewPosition;\\n#endif\\n#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <normal_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <normal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\\n\\tvViewPosition = - mvPosition.xyz;\\n#endif\\n}\",meshnormal_frag:\"#define NORMAL\\nuniform float opacity;\\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\\n\\tvarying vec3 vViewPosition;\\n#endif\\n#include <packing>\\n#include <uv_pars_fragment>\\n#include <normal_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\\n\\t#ifdef OPAQUE\\n\\t\\tgl_FragColor.a = 1.0;\\n\\t#endif\\n}\",meshphong_vert:\"#define PHONG\\nvarying vec3 vViewPosition;\\n#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <envmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <normal_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <normal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n\\t#include <worldpos_vertex>\\n\\t#include <envmap_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",meshphong_frag:\"#define PHONG\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform vec3 specular;\\nuniform float shininess;\\nuniform float opacity;\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <envmap_common_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <normal_pars_fragment>\\n#include <lights_phong_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\tvec3 totalEmissiveRadiance = emissive;\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\t#include <specularmap_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\t#include <emissivemap_fragment>\\n\\t#include <lights_phong_fragment>\\n\\t#include <lights_fragment_begin>\\n\\t#include <lights_fragment_maps>\\n\\t#include <lights_fragment_end>\\n\\t#include <aomap_fragment>\\n\\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\\n\\t#include <envmap_fragment>\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",meshphysical_vert:\"#define STANDARD\\nvarying vec3 vViewPosition;\\n#ifdef USE_TRANSMISSION\\n\\tvarying vec3 vWorldPosition;\\n#endif\\n#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <normal_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <normal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n\\t#include <worldpos_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n#ifdef USE_TRANSMISSION\\n\\tvWorldPosition = worldPosition.xyz;\\n#endif\\n}\",meshphysical_frag:\"#define STANDARD\\n#ifdef PHYSICAL\\n\\t#define IOR\\n\\t#define USE_SPECULAR\\n#endif\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform float roughness;\\nuniform float metalness;\\nuniform float opacity;\\n#ifdef IOR\\n\\tuniform float ior;\\n#endif\\n#ifdef USE_SPECULAR\\n\\tuniform float specularIntensity;\\n\\tuniform vec3 specularColor;\\n\\t#ifdef USE_SPECULAR_COLORMAP\\n\\t\\tuniform sampler2D specularColorMap;\\n\\t#endif\\n\\t#ifdef USE_SPECULAR_INTENSITYMAP\\n\\t\\tuniform sampler2D specularIntensityMap;\\n\\t#endif\\n#endif\\n#ifdef USE_CLEARCOAT\\n\\tuniform float clearcoat;\\n\\tuniform float clearcoatRoughness;\\n#endif\\n#ifdef USE_IRIDESCENCE\\n\\tuniform float iridescence;\\n\\tuniform float iridescenceIOR;\\n\\tuniform float iridescenceThicknessMinimum;\\n\\tuniform float iridescenceThicknessMaximum;\\n#endif\\n#ifdef USE_SHEEN\\n\\tuniform vec3 sheenColor;\\n\\tuniform float sheenRoughness;\\n\\t#ifdef USE_SHEEN_COLORMAP\\n\\t\\tuniform sampler2D sheenColorMap;\\n\\t#endif\\n\\t#ifdef USE_SHEEN_ROUGHNESSMAP\\n\\t\\tuniform sampler2D sheenRoughnessMap;\\n\\t#endif\\n#endif\\n#ifdef USE_ANISOTROPY\\n\\tuniform vec2 anisotropyVector;\\n\\t#ifdef USE_ANISOTROPYMAP\\n\\t\\tuniform sampler2D anisotropyMap;\\n\\t#endif\\n#endif\\nvarying vec3 vViewPosition;\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <iridescence_fragment>\\n#include <cube_uv_reflection_fragment>\\n#include <envmap_common_pars_fragment>\\n#include <envmap_physical_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <lights_pars_begin>\\n#include <normal_pars_fragment>\\n#include <lights_physical_pars_fragment>\\n#include <transmission_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <clearcoat_pars_fragment>\\n#include <iridescence_pars_fragment>\\n#include <roughnessmap_pars_fragment>\\n#include <metalnessmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\tvec3 totalEmissiveRadiance = emissive;\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\t#include <roughnessmap_fragment>\\n\\t#include <metalnessmap_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\t#include <clearcoat_normal_fragment_begin>\\n\\t#include <clearcoat_normal_fragment_maps>\\n\\t#include <emissivemap_fragment>\\n\\t#include <lights_physical_fragment>\\n\\t#include <lights_fragment_begin>\\n\\t#include <lights_fragment_maps>\\n\\t#include <lights_fragment_end>\\n\\t#include <aomap_fragment>\\n\\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\\n\\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\\n\\t#include <transmission_fragment>\\n\\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\\n\\t#ifdef USE_SHEEN\\n\\t\\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\\n\\t\\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\\n\\t#endif\\n\\t#ifdef USE_CLEARCOAT\\n\\t\\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\\n\\t\\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\\n\\t\\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\\n\\t#endif\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",meshtoon_vert:\"#define TOON\\nvarying vec3 vViewPosition;\\n#include <common>\\n#include <batching_pars_vertex>\\n#include <uv_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <normal_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <batching_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <normal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <displacementmap_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\tvViewPosition = - mvPosition.xyz;\\n\\t#include <worldpos_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",meshtoon_frag:\"#define TOON\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform float opacity;\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <gradientmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <normal_pars_fragment>\\n#include <lights_toon_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n\\tvec3 totalEmissiveRadiance = emissive;\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\t#include <normal_fragment_begin>\\n\\t#include <normal_fragment_maps>\\n\\t#include <emissivemap_fragment>\\n\\t#include <lights_toon_fragment>\\n\\t#include <lights_fragment_begin>\\n\\t#include <lights_fragment_maps>\\n\\t#include <lights_fragment_end>\\n\\t#include <aomap_fragment>\\n\\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n\\t#include <dithering_fragment>\\n}\",points_vert:\"uniform float size;\\nuniform float scale;\\n#include <common>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\n#ifdef USE_POINTS_UV\\n\\tvarying vec2 vUv;\\n\\tuniform mat3 uvTransform;\\n#endif\\nvoid main() {\\n\\t#ifdef USE_POINTS_UV\\n\\t\\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\\n\\t#endif\\n\\t#include <color_vertex>\\n\\t#include <morphcolor_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <project_vertex>\\n\\tgl_PointSize = size;\\n\\t#ifdef USE_SIZEATTENUATION\\n\\t\\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\\n\\t\\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\\n\\t#endif\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <fog_vertex>\\n}\",points_frag:\"uniform vec3 diffuse;\\nuniform float opacity;\\n#include <common>\\n#include <color_pars_fragment>\\n#include <map_particle_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec3 outgoingLight = vec3( 0.0 );\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_particle_fragment>\\n\\t#include <color_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\toutgoingLight = diffuseColor.rgb;\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n\\t#include <premultiplied_alpha_fragment>\\n}\",shadow_vert:\"#include <common>\\n#include <batching_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <shadowmap_pars_vertex>\\nvoid main() {\\n\\t#include <batching_vertex>\\n\\t#include <beginnormal_vertex>\\n\\t#include <morphnormal_vertex>\\n\\t#include <skinbase_vertex>\\n\\t#include <skinnormal_vertex>\\n\\t#include <defaultnormal_vertex>\\n\\t#include <begin_vertex>\\n\\t#include <morphtarget_vertex>\\n\\t#include <skinning_vertex>\\n\\t#include <project_vertex>\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <worldpos_vertex>\\n\\t#include <shadowmap_vertex>\\n\\t#include <fog_vertex>\\n}\",shadow_frag:\"uniform vec3 color;\\nuniform float opacity;\\n#include <common>\\n#include <packing>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <logdepthbuf_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <shadowmask_pars_fragment>\\nvoid main() {\\n\\t#include <logdepthbuf_fragment>\\n\\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n}\",sprite_vert:\"uniform float rotation;\\nuniform vec2 center;\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\nvoid main() {\\n\\t#include <uv_vertex>\\n\\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\\n\\tvec2 scale;\\n\\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\\n\\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\\n\\t#ifndef USE_SIZEATTENUATION\\n\\t\\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\\n\\t\\tif ( isPerspective ) scale *= - mvPosition.z;\\n\\t#endif\\n\\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\\n\\tvec2 rotatedPosition;\\n\\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\\n\\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\\n\\tmvPosition.xy += rotatedPosition;\\n\\tgl_Position = projectionMatrix * mvPosition;\\n\\t#include <logdepthbuf_vertex>\\n\\t#include <clipping_planes_vertex>\\n\\t#include <fog_vertex>\\n}\",sprite_frag:\"uniform vec3 diffuse;\\nuniform float opacity;\\n#include <common>\\n#include <uv_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <alphatest_pars_fragment>\\n#include <alphahash_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\nvoid main() {\\n\\t#include <clipping_planes_fragment>\\n\\tvec3 outgoingLight = vec3( 0.0 );\\n\\tvec4 diffuseColor = vec4( diffuse, opacity );\\n\\t#include <logdepthbuf_fragment>\\n\\t#include <map_fragment>\\n\\t#include <alphamap_fragment>\\n\\t#include <alphatest_fragment>\\n\\t#include <alphahash_fragment>\\n\\toutgoingLight = diffuseColor.rgb;\\n\\t#include <opaque_fragment>\\n\\t#include <tonemapping_fragment>\\n\\t#include <colorspace_fragment>\\n\\t#include <fog_fragment>\\n}\"},Mr={common:{diffuse:{value:new ci(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ci(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ci(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ci(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Sr={basic:{uniforms:tr([Mr.common,Mr.specularmap,Mr.envmap,Mr.aomap,Mr.lightmap,Mr.fog]),vertexShader:yr.meshbasic_vert,fragmentShader:yr.meshbasic_frag},lambert:{uniforms:tr([Mr.common,Mr.specularmap,Mr.envmap,Mr.aomap,Mr.lightmap,Mr.emissivemap,Mr.bumpmap,Mr.normalmap,Mr.displacementmap,Mr.fog,Mr.lights,{emissive:{value:new ci(0)}}]),vertexShader:yr.meshlambert_vert,fragmentShader:yr.meshlambert_frag},phong:{uniforms:tr([Mr.common,Mr.specularmap,Mr.envmap,Mr.aomap,Mr.lightmap,Mr.emissivemap,Mr.bumpmap,Mr.normalmap,Mr.displacementmap,Mr.fog,Mr.lights,{emissive:{value:new ci(0)},specular:{value:new ci(1118481)},shininess:{value:30}}]),vertexShader:yr.meshphong_vert,fragmentShader:yr.meshphong_frag},standard:{uniforms:tr([Mr.common,Mr.envmap,Mr.aomap,Mr.lightmap,Mr.emissivemap,Mr.bumpmap,Mr.normalmap,Mr.displacementmap,Mr.roughnessmap,Mr.metalnessmap,Mr.fog,Mr.lights,{emissive:{value:new ci(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yr.meshphysical_vert,fragmentShader:yr.meshphysical_frag},toon:{uniforms:tr([Mr.common,Mr.aomap,Mr.lightmap,Mr.emissivemap,Mr.bumpmap,Mr.normalmap,Mr.displacementmap,Mr.gradientmap,Mr.fog,Mr.lights,{emissive:{value:new ci(0)}}]),vertexShader:yr.meshtoon_vert,fragmentShader:yr.meshtoon_frag},matcap:{uniforms:tr([Mr.common,Mr.bumpmap,Mr.normalmap,Mr.displacementmap,Mr.fog,{matcap:{value:null}}]),vertexShader:yr.meshmatcap_vert,fragmentShader:yr.meshmatcap_frag},points:{uniforms:tr([Mr.points,Mr.fog]),vertexShader:yr.points_vert,fragmentShader:yr.points_frag},dashed:{uniforms:tr([Mr.common,Mr.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yr.linedashed_vert,fragmentShader:yr.linedashed_frag},depth:{uniforms:tr([Mr.common,Mr.displacementmap]),vertexShader:yr.depth_vert,fragmentShader:yr.depth_frag},normal:{uniforms:tr([Mr.common,Mr.bumpmap,Mr.normalmap,Mr.displacementmap,{opacity:{value:1}}]),vertexShader:yr.meshnormal_vert,fragmentShader:yr.meshnormal_frag},sprite:{uniforms:tr([Mr.sprite,Mr.fog]),vertexShader:yr.sprite_vert,fragmentShader:yr.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yr.background_vert,fragmentShader:yr.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:yr.backgroundCube_vert,fragmentShader:yr.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yr.cube_vert,fragmentShader:yr.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yr.equirect_vert,fragmentShader:yr.equirect_frag},distanceRGBA:{uniforms:tr([Mr.common,Mr.displacementmap,{referencePosition:{value:new We},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yr.distanceRGBA_vert,fragmentShader:yr.distanceRGBA_frag},shadow:{uniforms:tr([Mr.lights,Mr.fog,{color:{value:new ci(0)},opacity:{value:1}}]),vertexShader:yr.shadow_vert,fragmentShader:yr.shadow_frag}};Sr.physical={uniforms:tr([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ci(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ci(0)},specularColor:{value:new ci(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:yr.meshphysical_vert,fragmentShader:yr.meshphysical_frag};const br={r:0,b:0,g:0};function Tr(t,e,n,i,r,o,l){const c=new ci(0);let h,u,d=!0===o?0:1,p=null,m=0,f=null;function g(e,n){e.getRGB(br,er(t)),i.buffers.color.setClear(br.r,br.g,br.b,n,l)}return{getClearColor:function(){return c},setClearColor:function(t,e=1){c.set(t),d=e,g(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(t){d=t,g(c,d)},render:function(o,_){let v=!1,x=!0===_.isScene?_.background:null;if(x&&x.isTexture){x=(_.backgroundBlurriness>0?n:e).get(x)}null===x?g(c,d):x&&x.isColor&&(g(x,1),v=!0);const y=t.xr.getEnvironmentBlendMode();\"additive\"===y?i.buffers.color.setClear(0,0,0,1,l):\"alpha-blend\"===y&&i.buffers.color.setClear(0,0,0,0,l),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===A)?(void 0===u&&(u=new Ji(new $i(1,1,1),new ir({name:\"BackgroundCubeMaterial\",uniforms:Qi(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:a,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(\"normal\"),u.geometry.deleteAttribute(\"uv\"),u.onBeforeRender=function(t,e,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,\"envMap\",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&!1===x.isRenderTargetTexture?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Re.getTransfer(x.colorSpace)!==Xt,p===x&&m===x.version&&f===t.toneMapping||(u.material.needsUpdate=!0,p=x,m=x.version,f=t.toneMapping),u.layers.enableAll(),o.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(void 0===h&&(h=new Ji(new xr(2,2),new ir({name:\"BackgroundMaterial\",uniforms:Qi(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:s,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute(\"normal\"),Object.defineProperty(h.material,\"map\",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Re.getTransfer(x.colorSpace)!==Xt,!0===x.matrixAutoUpdate&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),p===x&&m===x.version&&f===t.toneMapping||(h.material.needsUpdate=!0,p=x,m=x.version,f=t.toneMapping),h.layers.enableAll(),o.unshift(h,h.geometry,h.material,0,0,null))}}}function Er(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get(\"OES_vertex_array_object\"),a=i.isWebGL2||null!==s,o={},l=p(null);let c=l,h=!1;function u(e){return i.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function d(e){return i.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function p(t){const e=[],n=[],i=[];for(let t=0;t<r;t++)e[t]=0,n[t]=0,i[t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:n,attributeDivisors:i,object:t,attributes:{},index:null}}function m(){const t=c.newAttributes;for(let e=0,n=t.length;e<n;e++)t[e]=0}function f(t){g(t,0)}function g(n,r){const s=c.newAttributes,a=c.enabledAttributes,o=c.attributeDivisors;if(s[n]=1,0===a[n]&&(t.enableVertexAttribArray(n),a[n]=1),o[n]!==r){(i.isWebGL2?t:e.get(\"ANGLE_instanced_arrays\"))[i.isWebGL2?\"vertexAttribDivisor\":\"vertexAttribDivisorANGLE\"](n,r),o[n]=r}}function _(){const e=c.newAttributes,n=c.enabledAttributes;for(let i=0,r=n.length;i<r;i++)n[i]!==e[i]&&(t.disableVertexAttribArray(i),n[i]=0)}function v(e,n,i,r,s,a,o){!0===o?t.vertexAttribIPointer(e,n,i,s,a):t.vertexAttribPointer(e,n,i,r,s,a)}function x(){y(),h=!0,c!==l&&(c=l,u(c.object))}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(r,l,d,x,y){let M=!1;if(a){const e=function(e,n,r){const a=!0===r.wireframe;let l=o[e.id];void 0===l&&(l={},o[e.id]=l);let c=l[n.id];void 0===c&&(c={},l[n.id]=c);let h=c[a];void 0===h&&(h=p(i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),c[a]=h);return h}(x,d,l);c!==e&&(c=e,u(c.object)),M=function(t,e,n,i){const r=c.attributes,s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){const n=r[e];let i=s[e];if(void 0===i&&(\"instanceMatrix\"===e&&t.instanceMatrix&&(i=t.instanceMatrix),\"instanceColor\"===e&&t.instanceColor&&(i=t.instanceColor)),void 0===n)return!0;if(n.attribute!==i)return!0;if(i&&n.data!==i.data)return!0;a++}}return c.attributesNum!==a||c.index!==i}(r,x,d,y),M&&function(t,e,n,i){const r={},s=e.attributes;let a=0;const o=n.getAttributes();for(const e in o){if(o[e].location>=0){let n=s[e];void 0===n&&(\"instanceMatrix\"===e&&t.instanceMatrix&&(n=t.instanceMatrix),\"instanceColor\"===e&&t.instanceColor&&(n=t.instanceColor));const i={};i.attribute=n,n&&n.data&&(i.data=n.data),r[e]=i,a++}}c.attributes=r,c.attributesNum=a,c.index=i}(r,x,d,y)}else{const t=!0===l.wireframe;c.geometry===x.id&&c.program===d.id&&c.wireframe===t||(c.geometry=x.id,c.program=d.id,c.wireframe=t,M=!0)}null!==y&&n.update(y,t.ELEMENT_ARRAY_BUFFER),(M||h)&&(h=!1,function(r,s,a,o){if(!1===i.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===e.get(\"ANGLE_instanced_arrays\"))return;m();const l=o.attributes,c=a.getAttributes(),h=s.defaultAttributeValues;for(const e in c){const s=c[e];if(s.location>=0){let a=l[e];if(void 0===a&&(\"instanceMatrix\"===e&&r.instanceMatrix&&(a=r.instanceMatrix),\"instanceColor\"===e&&r.instanceColor&&(a=r.instanceColor)),void 0!==a){const e=a.normalized,l=a.itemSize,c=n.get(a);if(void 0===c)continue;const h=c.buffer,u=c.type,d=c.bytesPerElement,p=!0===i.isWebGL2&&(u===t.INT||u===t.UNSIGNED_INT||a.gpuType===z);if(a.isInterleavedBufferAttribute){const n=a.data,i=n.stride,c=a.offset;if(n.isInstancedInterleavedBuffer){for(let t=0;t<s.locationSize;t++)g(s.location+t,n.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let t=0;t<s.locationSize;t++)f(s.location+t);t.bindBuffer(t.ARRAY_BUFFER,h);for(let t=0;t<s.locationSize;t++)v(s.location+t,l/s.locationSize,u,e,i*d,(c+l/s.locationSize*t)*d,p)}else{if(a.isInstancedBufferAttribute){for(let t=0;t<s.locationSize;t++)g(s.location+t,a.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=a.meshPerAttribute*a.count)}else for(let t=0;t<s.locationSize;t++)f(s.location+t);t.bindBuffer(t.ARRAY_BUFFER,h);for(let t=0;t<s.locationSize;t++)v(s.location+t,l/s.locationSize,u,e,l*d,l/s.locationSize*t*d,p)}}else if(void 0!==h){const n=h[e];if(void 0!==n)switch(n.length){case 2:t.vertexAttrib2fv(s.location,n);break;case 3:t.vertexAttrib3fv(s.location,n);break;case 4:t.vertexAttrib4fv(s.location,n);break;default:t.vertexAttrib1fv(s.location,n)}}}}_()}(r,l,d,x),null!==y&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(y).buffer))},reset:x,resetDefaultState:y,dispose:function(){x();for(const t in o){const e=o[t];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t]}delete o[t]}},releaseStatesOfGeometry:function(t){if(void 0===o[t.id])return;const e=o[t.id];for(const t in e){const n=e[t];for(const t in n)d(n[t].object),delete n[t];delete e[t]}delete o[t.id]},releaseStatesOfProgram:function(t){for(const e in o){const n=o[e];if(void 0===n[t.id])continue;const i=n[t.id];for(const t in i)d(i[t].object),delete i[t];delete n[t.id]}},initAttributes:m,enableAttribute:f,disableUnusedAttributes:_}}function wr(t,e,n,i){const r=i.isWebGL2;let s;this.setMode=function(t){s=t},this.render=function(e,i){t.drawArrays(s,e,i),n.update(i,s,1)},this.renderInstances=function(i,a,o){if(0===o)return;let l,c;if(r)l=t,c=\"drawArraysInstanced\";else if(l=e.get(\"ANGLE_instanced_arrays\"),c=\"drawArraysInstancedANGLE\",null===l)return void console.error(\"THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.\");l[c](s,i,a,o),n.update(a,s,o)},this.renderMultiDraw=function(t,i,r){if(0===r)return;const a=e.get(\"WEBGL_multi_draw\");if(null===a)for(let e=0;e<r;e++)this.render(t[e],i[e]);else{a.multiDrawArraysWEBGL(s,t,0,i,0,r);let e=0;for(let t=0;t<r;t++)e+=i[t];n.update(e,s,1)}}}function Ar(t,e,n){let i;function r(e){if(\"highp\"===e){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return\"highp\";e=\"mediump\"}return\"mediump\"===e&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?\"mediump\":\"lowp\"}const s=\"undefined\"!=typeof WebGL2RenderingContext&&\"WebGL2RenderingContext\"===t.constructor.name;let a=void 0!==n.precision?n.precision:\"highp\";const o=r(a);o!==a&&(console.warn(\"THREE.WebGLRenderer:\",a,\"not supported, using\",o,\"instead.\"),a=o);const l=s||e.has(\"WEBGL_draw_buffers\"),c=!0===n.logarithmicDepthBuffer,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),u=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=u>0,x=s||e.has(\"OES_texture_float\");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==i)return i;if(!0===e.has(\"EXT_texture_filter_anisotropic\")){const n=e.get(\"EXT_texture_filter_anisotropic\");i=t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:v&&x,maxSamples:s?t.getParameter(t.MAX_SAMPLES):0}}function Rr(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new pr,o=new fe,l={value:null,needsUpdate:!1};function c(t,n,i,r){const s=null!==t?t.length:0;let c=null;if(0!==s){if(c=l.value,!0!==r||null===c){const e=i+4*s,r=n.matrixWorldInverse;o.getNormalMatrix(r),(null===c||c.length<e)&&(c=new Float32Array(e));for(let e=0,n=i;e!==s;++e,n+=4)a.copy(t[e]).applyMatrix4(r,o),a.normal.toArray(c,n),c[n+3]=a.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=s,e.numIntersection=0,c}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e){const n=0!==t.length||e||0!==i||r;return r=e,i=t.length,n},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(t,e){n=c(t,e,0)},this.setState=function(a,o,h){const u=a.clippingPlanes,d=a.clipIntersection,p=a.clipShadows,m=t.get(a);if(!r||null===u||0===u.length||s&&!p)s?c(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0);e.numPlanes=i,e.numIntersection=0}();else{const t=s?0:i,e=4*t;let r=m.clippingState||null;l.value=r,r=c(u,o,e,h);for(let t=0;t!==e;++t)r[t]=n[t];m.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=t}}}function Cr(t){let e=new WeakMap;function n(t,e){return e===E?t.mapping=b:e===w&&(t.mapping=T),t}function i(t){const n=t.target;n.removeEventListener(\"dispose\",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose())}return{get:function(r){if(r&&r.isTexture){const s=r.mapping;if(s===E||s===w){if(e.has(r)){return n(e.get(r).texture,r.mapping)}{const s=r.image;if(s&&s.height>0){const a=new cr(s.height/2);return a.fromEquirectangularTexture(t,r),e.set(r,a),r.addEventListener(\"dispose\",i),n(a.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}class Lr extends rr{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type=\"OrthographicCamera\",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,s=r+t*this.view.width,a-=e*this.view.offsetY,o=a-e*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}const Pr=[.125,.215,.35,.446,.526,.582],Ir=20,Ur=new Lr,Dr=new ci;let Nr=null,Or=0,Fr=0;const Br=(1+Math.sqrt(5))/2,zr=1/Br,Gr=[new We(1,1,1),new We(-1,1,1),new We(1,1,-1),new We(-1,1,-1),new We(0,Br,zr),new We(0,Br,-zr),new We(zr,0,Br),new We(-zr,0,Br),new We(Br,zr,0),new We(-Br,zr,0)];class Hr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Nr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=Xr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nr,Or,Fr),t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===b||t.mapping===T?this._setSize(0===t.image.length?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:D,minFilter:D,generateMipmaps:!1,type:V,format:j,colorSpace:Ht,depthBuffer:!1},i=Vr(t,e,n);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=Vr(t,e,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(t){const e=[],n=[],i=[];let r=t;const s=t-4+1+Pr.length;for(let a=0;a<s;a++){const s=Math.pow(2,r);n.push(s);let o=1/s;a>t-4?o=Pr[a-t+4-1]:0===a&&(o=0),i.push(o);const l=1/(s-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,p=6,m=3,f=2,g=1,_=new Float32Array(m*p*d),v=new Float32Array(f*p*d),x=new Float32Array(g*p*d);for(let t=0;t<d;t++){const e=t%3*2/3-1,n=t>2?0:-1,i=[e,n,0,e+2/3,n,0,e+2/3,n+1,0,e,n,0,e+2/3,n+1,0,e,n+1,0];_.set(i,m*p*t),v.set(u,f*p*t);const r=[t,t,t,t,t,t];x.set(r,g*p*t)}const y=new Ii;y.setAttribute(\"position\",new Mi(_,m)),y.setAttribute(\"uv\",new Mi(v,f)),y.setAttribute(\"faceIndex\",new Mi(x,g)),e.push(y),r>4&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}(i)),this._blurMaterial=function(t,e,n){const i=new Float32Array(Ir),r=new We(0,1,0),s=new ir({name:\"SphericalGaussianBlur\",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jr(),fragmentShader:\"\\n\\n\\t\\t\\tprecision mediump float;\\n\\t\\t\\tprecision mediump int;\\n\\n\\t\\t\\tvarying vec3 vOutputDirection;\\n\\n\\t\\t\\tuniform sampler2D envMap;\\n\\t\\t\\tuniform int samples;\\n\\t\\t\\tuniform float weights[ n ];\\n\\t\\t\\tuniform bool latitudinal;\\n\\t\\t\\tuniform float dTheta;\\n\\t\\t\\tuniform float mipInt;\\n\\t\\t\\tuniform vec3 poleAxis;\\n\\n\\t\\t\\t#define ENVMAP_TYPE_CUBE_UV\\n\\t\\t\\t#include <cube_uv_reflection_fragment>\\n\\n\\t\\t\\tvec3 getSample( float theta, vec3 axis ) {\\n\\n\\t\\t\\t\\tfloat cosTheta = cos( theta );\\n\\t\\t\\t\\t// Rodrigues' axis-angle rotation\\n\\t\\t\\t\\tvec3 sampleDirection = vOutputDirection * cosTheta\\n\\t\\t\\t\\t\\t+ cross( axis, vOutputDirection ) * sin( theta )\\n\\t\\t\\t\\t\\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\\n\\n\\t\\t\\t\\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\\n\\n\\t\\t\\t}\\n\\n\\t\\t\\tvoid main() {\\n\\n\\t\\t\\t\\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\\n\\n\\t\\t\\t\\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\\n\\n\\t\\t\\t\\t\\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\\n\\n\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\taxis = normalize( axis );\\n\\n\\t\\t\\t\\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\\n\\t\\t\\t\\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\\n\\n\\t\\t\\t\\tfor ( int i = 1; i < n; i++ ) {\\n\\n\\t\\t\\t\\t\\tif ( i >= samples ) {\\n\\n\\t\\t\\t\\t\\t\\tbreak;\\n\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\tfloat theta = dTheta * float( i );\\n\\t\\t\\t\\t\\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\\n\\t\\t\\t\\t\\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\\n\\n\\t\\t\\t\\t}\\n\\n\\t\\t\\t}\\n\\t\\t\",blending:0,depthTest:!1,depthWrite:!1});return s}(i,t,e)}return i}_compileMaterial(t){const e=new Ji(this._lodPlanes[0],t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,i){const r=new sr(90,1,e,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Dr),l.toneMapping=p,l.autoClear=!1;const u=new pi({name:\"PMREM.Background\",side:a,depthWrite:!1,depthTest:!1}),d=new Ji(new $i,u);let m=!1;const f=t.background;f?f.isColor&&(u.color.copy(f),t.background=null,m=!0):(u.color.copy(Dr),m=!0);for(let e=0;e<6;e++){const n=e%3;0===n?(r.up.set(0,s[e],0),r.lookAt(o[e],0,0)):1===n?(r.up.set(0,0,s[e]),r.lookAt(0,o[e],0)):(r.up.set(0,s[e],0),r.lookAt(0,0,o[e]));const a=this._cubeSize;kr(i,n*a,e>2?a:0,a,a),l.setRenderTarget(i),m&&l.render(d,r),l.render(t,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===b||t.mapping===T;i?(null===this._cubemapMaterial&&(this._cubemapMaterial=Xr()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===t.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=Wr());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ji(this._lodPlanes[0],r);r.uniforms.envMap.value=t;const a=this._cubeSize;kr(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(s,Ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const n=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),i=Gr[(e-1)%Gr.length];this._blur(t,e-1,e,n,i)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,\"latitudinal\",r),this._halfBlur(s,t,n,n,i,\"longitudinal\",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;\"latitudinal\"!==s&&\"longitudinal\"!==s&&console.error(\"blur direction must be either latitudinal or longitudinal!\");const c=new Ji(this._lodPlanes[i],l),h=l.uniforms,u=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,p=r/d,m=isFinite(r)?1+Math.floor(3*p):Ir;m>Ir&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const f=[];let g=0;for(let t=0;t<Ir;++t){const e=t/p,n=Math.exp(-e*e/2);f.push(n),0===t?g+=n:t<m&&(g+=2*n)}for(let t=0;t<f.length;t++)f[t]=f[t]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=\"latitudinal\"===s,a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=d,h.mipInt.value=_-n;const v=this._sizeLods[i];kr(e,3*v*(i>_-4?i-_+4:0),4*(this._cubeSize-v),3*v,2*v),o.setRenderTarget(e),o.render(c,Ur)}}function Vr(t,e,n){const i=new Ge(t,e,n);return i.texture.mapping=A,i.texture.name=\"PMREM.cubeUv\",i.scissorTest=!0,i}function kr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Wr(){return new ir({name:\"EquirectangularToCubeUV\",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:\"\\n\\n\\t\\t\\tprecision mediump float;\\n\\t\\t\\tprecision mediump int;\\n\\n\\t\\t\\tvarying vec3 vOutputDirection;\\n\\n\\t\\t\\tuniform sampler2D envMap;\\n\\n\\t\\t\\t#include <common>\\n\\n\\t\\t\\tvoid main() {\\n\\n\\t\\t\\t\\tvec3 outputDirection = normalize( vOutputDirection );\\n\\t\\t\\t\\tvec2 uv = equirectUv( outputDirection );\\n\\n\\t\\t\\t\\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\\n\\n\\t\\t\\t}\\n\\t\\t\",blending:0,depthTest:!1,depthWrite:!1})}function Xr(){return new ir({name:\"CubemapToCubeUV\",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:\"\\n\\n\\t\\t\\tprecision mediump float;\\n\\t\\t\\tprecision mediump int;\\n\\n\\t\\t\\tuniform float flipEnvMap;\\n\\n\\t\\t\\tvarying vec3 vOutputDirection;\\n\\n\\t\\t\\tuniform samplerCube envMap;\\n\\n\\t\\t\\tvoid main() {\\n\\n\\t\\t\\t\\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\\n\\n\\t\\t\\t}\\n\\t\\t\",blending:0,depthTest:!1,depthWrite:!1})}function jr(){return\"\\n\\n\\t\\tprecision mediump float;\\n\\t\\tprecision mediump int;\\n\\n\\t\\tattribute float faceIndex;\\n\\n\\t\\tvarying vec3 vOutputDirection;\\n\\n\\t\\t// RH coordinate system; PMREM face-indexing convention\\n\\t\\tvec3 getDirection( vec2 uv, float face ) {\\n\\n\\t\\t\\tuv = 2.0 * uv - 1.0;\\n\\n\\t\\t\\tvec3 direction = vec3( uv, 1.0 );\\n\\n\\t\\t\\tif ( face == 0.0 ) {\\n\\n\\t\\t\\t\\tdirection = direction.zyx; // ( 1, v, u ) pos x\\n\\n\\t\\t\\t} else if ( face == 1.0 ) {\\n\\n\\t\\t\\t\\tdirection = direction.xzy;\\n\\t\\t\\t\\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\\n\\n\\t\\t\\t} else if ( face == 2.0 ) {\\n\\n\\t\\t\\t\\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\\n\\n\\t\\t\\t} else if ( face == 3.0 ) {\\n\\n\\t\\t\\t\\tdirection = direction.zyx;\\n\\t\\t\\t\\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\\n\\n\\t\\t\\t} else if ( face == 4.0 ) {\\n\\n\\t\\t\\t\\tdirection = direction.xzy;\\n\\t\\t\\t\\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\\n\\n\\t\\t\\t} else if ( face == 5.0 ) {\\n\\n\\t\\t\\t\\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\\n\\n\\t\\t\\t}\\n\\n\\t\\t\\treturn direction;\\n\\n\\t\\t}\\n\\n\\t\\tvoid main() {\\n\\n\\t\\t\\tvOutputDirection = getDirection( uv, faceIndex );\\n\\t\\t\\tgl_Position = vec4( position, 1.0 );\\n\\n\\t\\t}\\n\\t\"}function qr(t){let e=new WeakMap,n=null;function i(t){const n=t.target;n.removeEventListener(\"dispose\",i);const r=e.get(n);void 0!==r&&(e.delete(n),r.dispose())}return{get:function(r){if(r&&r.isTexture){const s=r.mapping,a=s===E||s===w,o=s===b||s===T;if(a||o){if(r.isRenderTargetTexture&&!0===r.needsPMREMUpdate){r.needsPMREMUpdate=!1;let i=e.get(r);return null===n&&(n=new Hr(t)),i=a?n.fromEquirectangular(r,i):n.fromCubemap(r,i),e.set(r,i),i.texture}if(e.has(r))return e.get(r).texture;{const s=r.image;if(a&&s&&s.height>0||o&&s&&function(t){let e=0;const n=6;for(let i=0;i<n;i++)void 0!==t[i]&&e++;return e===n}(s)){null===n&&(n=new Hr(t));const s=a?n.fromEquirectangular(r):n.fromCubemap(r);return e.set(r,s),r.addEventListener(\"dispose\",i),s.texture}return null}}}return r},dispose:function(){e=new WeakMap,null!==n&&(n.dispose(),n=null)}}}function Yr(t){const e={};function n(n){if(void 0!==e[n])return e[n];let i;switch(n){case\"WEBGL_depth_texture\":i=t.getExtension(\"WEBGL_depth_texture\")||t.getExtension(\"MOZ_WEBGL_depth_texture\")||t.getExtension(\"WEBKIT_WEBGL_depth_texture\");break;case\"EXT_texture_filter_anisotropic\":i=t.getExtension(\"EXT_texture_filter_anisotropic\")||t.getExtension(\"MOZ_EXT_texture_filter_anisotropic\")||t.getExtension(\"WEBKIT_EXT_texture_filter_anisotropic\");break;case\"WEBGL_compressed_texture_s3tc\":i=t.getExtension(\"WEBGL_compressed_texture_s3tc\")||t.getExtension(\"MOZ_WEBGL_compressed_texture_s3tc\")||t.getExtension(\"WEBKIT_WEBGL_compressed_texture_s3tc\");break;case\"WEBGL_compressed_texture_pvrtc\":i=t.getExtension(\"WEBGL_compressed_texture_pvrtc\")||t.getExtension(\"WEBKIT_WEBGL_compressed_texture_pvrtc\");break;default:i=t.getExtension(n)}return e[n]=i,i}return{has:function(t){return null!==n(t)},init:function(t){t.isWebGL2?(n(\"EXT_color_buffer_float\"),n(\"WEBGL_clip_cull_distance\")):(n(\"WEBGL_depth_texture\"),n(\"OES_texture_float\"),n(\"OES_texture_half_float\"),n(\"OES_texture_half_float_linear\"),n(\"OES_standard_derivatives\"),n(\"OES_element_index_uint\"),n(\"OES_vertex_array_object\"),n(\"ANGLE_instanced_arrays\")),n(\"OES_texture_float_linear\"),n(\"EXT_color_buffer_half_float\"),n(\"WEBGL_multisampled_render_to_texture\")},get:function(t){const e=n(t);return null===e&&console.warn(\"THREE.WebGLRenderer: \"+t+\" extension not supported.\"),e}}}function Zr(t,e,n,i){const r={},s=new WeakMap;function a(t){const o=t.target;null!==o.index&&e.remove(o.index);for(const t in o.attributes)e.remove(o.attributes[t]);for(const t in o.morphAttributes){const n=o.morphAttributes[t];for(let t=0,i=n.length;t<i;t++)e.remove(n[t])}o.removeEventListener(\"dispose\",a),delete r[o.id];const l=s.get(o);l&&(e.remove(l),s.delete(o)),i.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,n.memory.geometries--}function o(t){const n=[],i=t.index,r=t.attributes.position;let a=0;if(null!==i){const t=i.array;a=i.version;for(let e=0,i=t.length;e<i;e+=3){const i=t[e+0],r=t[e+1],s=t[e+2];n.push(i,r,r,s,s,i)}}else{if(void 0===r)return;{const t=r.array;a=r.version;for(let e=0,i=t.length/3-1;e<i;e+=3){const t=e+0,i=e+1,r=e+2;n.push(t,i,i,r,r,t)}}}const o=new(_e(n)?bi:Si)(n,1);o.version=a;const l=s.get(t);l&&e.remove(l),s.set(t,o)}return{get:function(t,e){return!0===r[e.id]||(e.addEventListener(\"dispose\",a),r[e.id]=!0,n.memory.geometries++),e},update:function(n){const i=n.attributes;for(const n in i)e.update(i[n],t.ARRAY_BUFFER);const r=n.morphAttributes;for(const n in r){const i=r[n];for(let n=0,r=i.length;n<r;n++)e.update(i[n],t.ARRAY_BUFFER)}},getWireframeAttribute:function(t){const e=s.get(t);if(e){const n=t.index;null!==n&&e.version<n.version&&o(t)}else o(t);return s.get(t)}}}function Jr(t,e,n,i){const r=i.isWebGL2;let s,a,o;this.setMode=function(t){s=t},this.setIndex=function(t){a=t.type,o=t.bytesPerElement},this.render=function(e,i){t.drawElements(s,i,a,e*o),n.update(i,s,1)},this.renderInstances=function(i,l,c){if(0===c)return;let h,u;if(r)h=t,u=\"drawElementsInstanced\";else if(h=e.get(\"ANGLE_instanced_arrays\"),u=\"drawElementsInstancedANGLE\",null===h)return void console.error(\"THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.\");h[u](s,l,a,i*o,c),n.update(l,s,c)},this.renderMultiDraw=function(t,i,r){if(0===r)return;const l=e.get(\"WEBGL_multi_draw\");if(null===l)for(let e=0;e<r;e++)this.render(t[e]/o,i[e]);else{l.multiDrawElementsWEBGL(s,i,0,a,t,0,r);let e=0;for(let t=0;t<r;t++)e+=i[t];n.update(e,s,1)}}}function Kr(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error(\"THREE.WebGLInfo: Unknown draw mode:\",i)}}}}function $r(t,e){return t[0]-e[0]}function Qr(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ts(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Be,o=[];for(let t=0;t<8;t++)o[t]=[t,0];return{update:function(l,c,h){const u=l.morphTargetInfluences;if(!0===e.isWebGL2){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=void 0!==d?d.length:0;let m=s.get(c);if(void 0===m||m.count!==p){void 0!==m&&m.texture.dispose();const _=void 0!==c.morphAttributes.position,v=void 0!==c.morphAttributes.normal,x=void 0!==c.morphAttributes.color,y=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let b=0;!0===_&&(b=1),!0===v&&(b=2),!0===x&&(b=3);let T=c.attributes.position.count*b,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*E*4*p),A=new He(w,T,E,p);A.type=H,A.needsUpdate=!0;const R=4*b;for(let L=0;L<p;L++){const P=y[L],I=M[L],U=S[L],D=T*E*4*L;for(let N=0;N<P.count;N++){const O=N*R;!0===_&&(a.fromBufferAttribute(P,N),w[D+O+0]=a.x,w[D+O+1]=a.y,w[D+O+2]=a.z,w[D+O+3]=0),!0===v&&(a.fromBufferAttribute(I,N),w[D+O+4]=a.x,w[D+O+5]=a.y,w[D+O+6]=a.z,w[D+O+7]=0),!0===x&&(a.fromBufferAttribute(U,N),w[D+O+8]=a.x,w[D+O+9]=a.y,w[D+O+10]=a.z,w[D+O+11]=4===U.itemSize?a.w:1)}}function C(){A.dispose(),s.delete(c),c.removeEventListener(\"dispose\",C)}m={count:p,texture:A,size:new me(T,E)},s.set(c,m),c.addEventListener(\"dispose\",C)}let f=0;for(let F=0;F<u.length;F++)f+=u[F];const g=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,\"morphTargetBaseInfluence\",g),h.getUniforms().setValue(t,\"morphTargetInfluences\",u),h.getUniforms().setValue(t,\"morphTargetsTexture\",m.texture,n),h.getUniforms().setValue(t,\"morphTargetsTextureSize\",m.size)}else{const B=void 0===u?0:u.length;let z=i[c.id];if(void 0===z||z.length!==B){z=[];for(let X=0;X<B;X++)z[X]=[X,0];i[c.id]=z}for(let j=0;j<B;j++){const q=z[j];q[0]=j,q[1]=u[j]}z.sort(Qr);for(let Y=0;Y<8;Y++)Y<B&&z[Y][1]?(o[Y][0]=z[Y][0],o[Y][1]=z[Y][1]):(o[Y][0]=Number.MAX_SAFE_INTEGER,o[Y][1]=0);o.sort($r);const G=c.morphAttributes.position,V=c.morphAttributes.normal;let k=0;for(let Z=0;Z<8;Z++){const J=o[Z],K=J[0],$=J[1];K!==Number.MAX_SAFE_INTEGER&&$?(G&&c.getAttribute(\"morphTarget\"+Z)!==G[K]&&c.setAttribute(\"morphTarget\"+Z,G[K]),V&&c.getAttribute(\"morphNormal\"+Z)!==V[K]&&c.setAttribute(\"morphNormal\"+Z,V[K]),r[Z]=$,k+=$):(G&&!0===c.hasAttribute(\"morphTarget\"+Z)&&c.deleteAttribute(\"morphTarget\"+Z),V&&!0===c.hasAttribute(\"morphNormal\"+Z)&&c.deleteAttribute(\"morphNormal\"+Z),r[Z]=0)}const W=c.morphTargetsRelative?1:1-k;h.getUniforms().setValue(t,\"morphTargetBaseInfluence\",W),h.getUniforms().setValue(t,\"morphTargetInfluences\",r)}}}}function es(t,e,n,i){let r=new WeakMap;function s(t){const e=t.target;e.removeEventListener(\"dispose\",s),n.remove(e.instanceMatrix),null!==e.instanceColor&&n.remove(e.instanceColor)}return{update:function(a){const o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(!1===a.hasEventListener(\"dispose\",s)&&a.addEventListener(\"dispose\",s),r.get(a)!==o&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),null!==a.instanceColor&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){const t=a.skeleton;r.get(t)!==o&&(t.update(),r.set(t,o))}return c},dispose:function(){r=new WeakMap}}}class ns extends Fe{constructor(t,e,n,i,r,s,a,o,l,c){if((c=void 0!==c?c:q)!==q&&c!==Y)throw new Error(\"DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat\");void 0===n&&c===q&&(n=G),void 0===n&&c===Y&&(n=X),super(null,i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=void 0!==a?a:P,this.minFilter=void 0!==o?o:P,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return null!==this.compareFunction&&(e.compareFunction=this.compareFunction),e}}const is=new Fe,rs=new ns(1,1);rs.compareFunction=515;const ss=new He,as=new Ve,os=new lr,ls=[],cs=[],hs=new Float32Array(16),us=new Float32Array(9),ds=new Float32Array(4);function ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ls[r];if(void 0===s&&(s=new Float32Array(r),ls[r]=s),0!==e){i.toArray(s,0);for(let i=1,r=0;i!==e;++i)r+=n,t[i].toArray(s,r)}return s}function ms(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function fs(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gs(t,e){let n=cs[e];void 0===n&&(n=new Int32Array(e),cs[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _s(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vs(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ms(n,e))return;t.uniform2fv(this.addr,e),fs(n,e)}}function xs(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(void 0!==e.r)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ms(n,e))return;t.uniform3fv(this.addr,e),fs(n,e)}}function ys(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ms(n,e))return;t.uniform4fv(this.addr,e),fs(n,e)}}function Ms(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(ms(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),fs(n,e)}else{if(ms(n,i))return;ds.set(i),t.uniformMatrix2fv(this.addr,!1,ds),fs(n,i)}}function Ss(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(ms(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),fs(n,e)}else{if(ms(n,i))return;us.set(i),t.uniformMatrix3fv(this.addr,!1,us),fs(n,i)}}function bs(t,e){const n=this.cache,i=e.elements;if(void 0===i){if(ms(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),fs(n,e)}else{if(ms(n,i))return;hs.set(i),t.uniformMatrix4fv(this.addr,!1,hs),fs(n,i)}}function Ts(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Es(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ms(n,e))return;t.uniform2iv(this.addr,e),fs(n,e)}}function ws(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ms(n,e))return;t.uniform3iv(this.addr,e),fs(n,e)}}function As(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ms(n,e))return;t.uniform4iv(this.addr,e),fs(n,e)}}function Rs(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Cs(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ms(n,e))return;t.uniform2uiv(this.addr,e),fs(n,e)}}function Ls(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ms(n,e))return;t.uniform3uiv(this.addr,e),fs(n,e)}}function Ps(t,e){const n=this.cache;if(void 0!==e.x)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ms(n,e))return;t.uniform4uiv(this.addr,e),fs(n,e)}}function Is(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?rs:is;n.setTexture2D(e||s,r)}function Us(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||as,r)}function Ds(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||os,r)}function Ns(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ss,r)}function Os(t,e){t.uniform1fv(this.addr,e)}function Fs(t,e){const n=ps(e,this.size,2);t.uniform2fv(this.addr,n)}function Bs(t,e){const n=ps(e,this.size,3);t.uniform3fv(this.addr,n)}function zs(t,e){const n=ps(e,this.size,4);t.uniform4fv(this.addr,n)}function Gs(t,e){const n=ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Hs(t,e){const n=ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Vs(t,e){const n=ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ks(t,e){t.uniform1iv(this.addr,e)}function Ws(t,e){t.uniform2iv(this.addr,e)}function Xs(t,e){t.uniform3iv(this.addr,e)}function js(t,e){t.uniform4iv(this.addr,e)}function qs(t,e){t.uniform1uiv(this.addr,e)}function Ys(t,e){t.uniform2uiv(this.addr,e)}function Zs(t,e){t.uniform3uiv(this.addr,e)}function Js(t,e){t.uniform4uiv(this.addr,e)}function Ks(t,e,n){const i=this.cache,r=e.length,s=gs(n,r);ms(i,s)||(t.uniform1iv(this.addr,s),fs(i,s));for(let t=0;t!==r;++t)n.setTexture2D(e[t]||is,s[t])}function $s(t,e,n){const i=this.cache,r=e.length,s=gs(n,r);ms(i,s)||(t.uniform1iv(this.addr,s),fs(i,s));for(let t=0;t!==r;++t)n.setTexture3D(e[t]||as,s[t])}function Qs(t,e,n){const i=this.cache,r=e.length,s=gs(n,r);ms(i,s)||(t.uniform1iv(this.addr,s),fs(i,s));for(let t=0;t!==r;++t)n.setTextureCube(e[t]||os,s[t])}function ta(t,e,n){const i=this.cache,r=e.length,s=gs(n,r);ms(i,s)||(t.uniform1iv(this.addr,s),fs(i,s));for(let t=0;t!==r;++t)n.setTexture2DArray(e[t]||ss,s[t])}class ea{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(t){switch(t){case 5126:return _s;case 35664:return vs;case 35665:return xs;case 35666:return ys;case 35674:return Ms;case 35675:return Ss;case 35676:return bs;case 5124:case 35670:return Ts;case 35667:case 35671:return Es;case 35668:case 35672:return ws;case 35669:case 35673:return As;case 5125:return Rs;case 36294:return Cs;case 36295:return Ls;case 36296:return Ps;case 35678:case 36198:case 36298:case 36306:case 35682:return Is;case 35679:case 36299:case 36307:return Us;case 35680:case 36300:case 36308:case 36293:return Ds;case 36289:case 36303:case 36311:case 36292:return Ns}}(e.type)}}class na{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(t){switch(t){case 5126:return Os;case 35664:return Fs;case 35665:return Bs;case 35666:return zs;case 35674:return Gs;case 35675:return Hs;case 35676:return Vs;case 5124:case 35670:return ks;case 35667:case 35671:return Ws;case 35668:case 35672:return Xs;case 35669:case 35673:return js;case 5125:return qs;case 36294:return Ys;case 36295:return Zs;case 36296:return Js;case 35678:case 36198:case 36298:case 36306:case 35682:return Ks;case 35679:case 36299:case 36307:return $s;case 35680:case 36300:case 36308:case 36293:return Qs;case 36289:case 36303:case 36311:case 36292:return ta}}(e.type)}}class ia{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const ra=/(\\w+)(\\])?(\\[|\\.)?/g;function sa(t,e){t.seq.push(e),t.map[e.id]=e}function aa(t,e,n){const i=t.name,r=i.length;for(ra.lastIndex=0;;){const s=ra.exec(i),a=ra.lastIndex;let o=s[1];const l=\"]\"===s[2],c=s[3];if(l&&(o|=0),void 0===c||\"[\"===c&&a+2===r){sa(n,void 0===c?new ea(o,t,e):new na(o,t,e));break}{let t=n.map[o];void 0===t&&(t=new ia(o),sa(n,t)),n=t}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const n=t.getActiveUniform(e,i);aa(n,t.getUniformLocation(e,n.name),this)}}setValue(t,e,n,i){const r=this.map[e];void 0!==r&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];void 0!==i&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const s=e[r],a=n[s.id];!1!==a.needsUpdate&&s.setValue(t,a.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function la(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ca=37297;let ha=0;function ua(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&\"\"===r)return\"\";const s=/ERROR: 0:(\\d+)/.exec(r);if(s){const i=parseInt(s[1]);return n.toUpperCase()+\"\\n\\n\"+r+\"\\n\\n\"+function(t,e){const n=t.split(\"\\n\"),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let t=r;t<s;t++){const r=t+1;i.push(`${r===e?\">\":\" \"} ${r}: ${n[t]}`)}return i.join(\"\\n\")}(t.getShaderSource(e),i)}return r}function da(t,e){const n=function(t){const e=Re.getPrimaries(Re.workingColorSpace),n=Re.getPrimaries(t);let i;switch(e===n?i=\"\":e===qt&&n===jt?i=\"LinearDisplayP3ToLinearSRGB\":e===jt&&n===qt&&(i=\"LinearSRGBToLinearDisplayP3\"),t){case Ht:case kt:return[i,\"LinearTransferOETF\"];case Gt:case Vt:return[i,\"sRGBTransferOETF\"];default:return console.warn(\"THREE.WebGLProgram: Unsupported color space:\",t),[i,\"LinearTransferOETF\"]}}(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pa(t,e){let n;switch(e){case m:n=\"Linear\";break;case f:n=\"Reinhard\";break;case g:n=\"OptimizedCineon\";break;case _:n=\"ACESFilmic\";break;case x:n=\"AgX\";break;case v:n=\"Custom\";break;default:console.warn(\"THREE.WebGLProgram: Unsupported toneMapping:\",e),n=\"Linear\"}return\"vec3 \"+t+\"( vec3 color ) { return \"+n+\"ToneMapping( color ); }\"}function ma(t){return\"\"!==t}function fa(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ga(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _a=/^[ \\t]*#include +<([\\w\\d./]+)>/gm;function va(t){return t.replace(_a,ya)}const xa=new Map([[\"encodings_fragment\",\"colorspace_fragment\"],[\"encodings_pars_fragment\",\"colorspace_pars_fragment\"],[\"output_fragment\",\"opaque_fragment\"]]);function ya(t,e){let n=yr[e];if(void 0===n){const t=xa.get(e);if(void 0===t)throw new Error(\"Can not resolve #include <\"+e+\">\");n=yr[t],console.warn('THREE.WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.',e,t)}return va(n)}const Ma=/#pragma unroll_loop_start\\s+for\\s*\\(\\s*int\\s+i\\s*=\\s*(\\d+)\\s*;\\s*i\\s*<\\s*(\\d+)\\s*;\\s*i\\s*\\+\\+\\s*\\)\\s*{([\\s\\S]+?)}\\s+#pragma unroll_loop_end/g;function Sa(tßM{o+^²‰¢¶×ÛÛœÝO]Û—NÈLHOOZI‰™Kœ\Ú
ˆÙYš[™HŠÛŠ×ˆŠÚJ_\™]\›ˆKš›Ú[Š——Š_J
KO[Ë˜Ü™X]T›ÙÜ˜[J
NÛ]Ë‹Ï\Ë™ÛÛ™\œÚ[Û×ˆÝ™\œÚ[ÛˆŠÜË™ÛÛ™\œÚ[ÛŠ×——Ž——ŽÜËš\Ô˜]ÔÚY\“X]\šX[ÊÏV×ˆÙYš[™HÒQT—ÕTHŠÜËœÚY\•\KˆÙYš[™HÒQT—ÓSQHŠÜËœÚY\“˜[YK×K™š[\ŠXJKš›Ú[Š——ŠKË›[™ÝŒ	‰ŠÊÏW——ŠKVÞKˆÙYš[™HÒQT—ÕTHŠÜËœÚY\•\KˆÙYš[™HÒQT—ÓSQHŠÜËœÚY\“˜[YK×K™š[\ŠXJKš›Ú[Š——ŠK‹›[™ÝŒ	‰ŠŠÏW——ŠJNŠÏVÕJÊKˆÙYš[™HÒQT—ÕTHŠÜËœÚY\•\KˆÙYš[™HÒQT—ÓSQHŠÜËœÚY\“˜[YKËË™^[œÚ[ÛÛ\Ý[\Ý[˜ÙO×ˆÙYš[™HTÑWÐÓTÑTÕSÑWŽ——‹Ë˜˜]Ú[™Ï×ˆÙYš[™HTÑWÐUÒS‘×Ž——‹Ëš[œÝ[˜Ú[™Ï×ˆÙYš[™HTÑWÒS”ÕSÒS‘×Ž——‹Ëš[œÝ[˜Ú[™ÐÛÛÜ×ˆÙYš[™HTÑWÒS”ÕSÒS‘×ÐÓÓÔ—Ž——‹Ë\ÙQ›ÙÉ‰œË™›ÙÏ×ˆÙYš[™HTÑWÑ“Ñ×Ž——‹Ë\ÙQ›ÙÉ‰œË™›ÙÑ^×ˆÙYš[™H“Ñ×ÑV—Ž——‹Ë›X\×ˆÙYš[™HTÑWÓPTŽ——‹Ë™[“X\×ˆÙYš[™HTÑWÑS•“PTŽ——‹Ë™[“X\×ˆÙYš[™HŠ×Î——‹Ë›YÚX\×ˆÙYš[™HTÑWÓQÒPTŽ——‹Ë˜[ÓX\×ˆÙYš[™HTÑWÐSÓPTŽ——‹Ë˜[\X\×ˆÙYš[™HTÑWÐ•STPTŽ——‹Ë››Ü›X[X\×ˆÙYš[™HTÑWÓ“Ô“PSPTŽ——‹Ë››Ü›X[X\Øš™XÝÜXÙO×ˆÙYš[™HTÑWÓ“Ô“PSPTÓÐ’‘PÕÔPÑWŽ——‹Ë››Ü›X[X\[™Ù[ÜXÙO×ˆÙYš[™HTÑWÓ“Ô“PSPTÕS‘ÑS•ÔPÑWŽ——‹Ë™\ÜXÙ[Y[X\×ˆÙYš[™HTÑWÑTÔPÑSQS•PTŽ——‹Ë™[Z\ÜÚ]™SX\×ˆÙYš[™HTÑWÑSRTÔÒU‘SPTŽ——‹Ë˜[š\ÛÝ›ÜO×ˆÙYš[™HTÑWÐS’TÓÕ“ÔWŽ——‹Ë˜[š\ÛÝ›ÜSX\×ˆÙYš[™HTÑWÐS’TÓÕ“ÔSPTŽ——‹Ë˜ÛX\˜ÛØ]X\×ˆÙYš[™HTÑWÐÓPTÓÐUPTŽ——‹Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\×ˆÙYš[™HTÑWÐÓPTÓÐUÔ“ÕQÒ‘TÔÓPTŽ——‹Ë˜ÛX\˜ÛØ]›Ü›X[X\×ˆÙYš[™HTÑWÐÓPTÓÐUÓ“Ô“PSPTŽ——‹Ëš\šY\ØÙ[˜ÙSX\×ˆÙYš[™HTÑWÒT’QTÐÑSÑSPTŽ——‹Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\×ˆÙYš[™HTÑWÒT’QTÐÑSÑWÕPÒÓ‘TÔÓPTŽ——‹ËœÜXÝ[\“X\×ˆÙYš[™HTÑWÔÔPÕST“PTŽ——‹ËœÜXÝ[\ÛÛÜ“X\×ˆÙYš[™HTÑWÔÔPÕST—ÐÓÓÔ“PTŽ——‹ËœÜXÝ[\’[[œÚ]SX\×ˆÙYš[™HTÑWÔÔPÕST—ÒS•S”ÒUSPTŽ——‹Ëœ›ÝYÚ™\ÜÓX\×ˆÙYš[™HTÑWÔ“ÕQÒ‘TÔÓPTŽ——‹Ë›Y][™\ÜÓX\×ˆÙYš[™HTÑWÓQUS‘TÔÓPTŽ——‹Ë˜[SX\×ˆÙYš[™HTÑWÐSSPTŽ——‹Ë˜[R\Ú×ˆÙYš[™HTÑWÐSRTÒŽ——‹Ë˜[œÛZ\ÜÚ[Û×ˆÙYš[™HTÑWÕS”ÓRTÔÒSÓ—Ž——‹Ë˜[œÛZ\ÜÚ[Û“X\×ˆÙYš[™HTÑWÕS”ÓRTÔÒSÓ“PTŽ——‹ËXÚÛ™\ÜÓX\×ˆÙYš[™HTÑWÕPÒÓ‘TÔÓPTŽ——‹ËœÚY[ÛÛÜ“X\×ˆÙYš[™HTÑWÔÒQS—ÐÓÓÔ“PTŽ——‹ËœÚY[”›ÝYÚ™\ÜÓX\×ˆÙYš[™HTÑWÔÒQS—Ô“ÕQÒ‘TÔÓPTŽ——‹Ë›X\]×ˆÙYš[™HPTÕUˆŠÜË›X\]Ž——‹Ë˜[SX\]×ˆÙYš[™HSSPTÕUˆŠÜË˜[SX\]Ž——‹Ë›YÚX\]×ˆÙYš[™HQÒPTÕUˆŠÜË›YÚX\]Ž——‹Ë˜[ÓX\]×ˆÙYš[™HSÓPTÕUˆŠÜË˜[ÓX\]Ž——‹Ë™[Z\ÜÚ]™SX\]×ˆÙYš[™HSRTÔÒU‘SPTÕUˆŠÜË™[Z\ÜÚ]™SX\]Ž——‹Ë˜[\X\]×ˆÙYš[™H•STPTÕUˆŠÜË˜[\X\]Ž——‹Ë››Ü›X[X\]×ˆÙYš[™H“Ô“PSPTÕUˆŠÜË››Ü›X[X\]Ž——‹Ë™\ÜXÙ[Y[X\]×ˆÙYš[™HTÔPÑSQS•PTÕUˆŠÜË™\ÜXÙ[Y[X\]Ž——‹Ë›Y][™\ÜÓX\]×ˆÙYš[™HQUS‘TÔÓPTÕUˆŠÜË›Y][™\ÜÓX\]Ž——‹Ëœ›ÝYÚ™\ÜÓX\]×ˆÙYš[™H“ÕQÒ‘TÔÓPTÕUˆŠÜËœ›ÝYÚ™\ÜÓX\]Ž——‹Ë˜[š\ÛÝ›ÜSX\]×ˆÙYš[™HS’TÓÕ“ÔSPTÕUˆŠÜË˜[š\ÛÝ›ÜSX\]Ž——‹Ë˜ÛX\˜ÛØ]X\]×ˆÙYš[™HÓPTÓÐUPTÕUˆŠÜË˜ÛX\˜ÛØ]X\]Ž——‹Ë˜ÛX\˜ÛØ]›Ü›X[X\]×ˆÙYš[™HÓPTÓÐUÓ“Ô“PSPTÕUˆŠÜË˜ÛX\˜ÛØ]›Ü›X[X\]Ž——‹Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\]×ˆÙYš[™HÓPTÓÐUÔ“ÕQÒ‘TÔÓPTÕUˆŠÜË˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\]Ž——‹Ëš\šY\ØÙ[˜ÙSX\]×ˆÙYš[™HT’QTÐÑSÑSPTÕUˆŠÜËš\šY\ØÙ[˜ÙSX\]Ž——‹Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\]×ˆÙYš[™HT’QTÐÑSÑWÕPÒÓ‘TÔÓPTÕUˆŠÜËš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\]Ž——‹ËœÚY[ÛÛÜ“X\]×ˆÙYš[™HÒQS—ÐÓÓÔ“PTÕUˆŠÜËœÚY[ÛÛÜ“X\]Ž——‹ËœÚY[”›ÝYÚ™\ÜÓX\]×ˆÙYš[™HÒQS—Ô“ÕQÒ‘TÔÓPTÕUˆŠÜËœÚY[”›ÝYÚ™\ÜÓX\]Ž——‹ËœÜXÝ[\“X\]×ˆÙYš[™HÔPÕST“PTÕUˆŠÜËœÜXÝ[\“X\]Ž——‹ËœÜXÝ[\ÛÛÜ“X\]×ˆÙYš[™HÔPÕST—ÐÓÓÔ“PTÕUˆŠÜËœÜXÝ[\ÛÛÜ“X\]Ž——‹ËœÜXÝ[\’[[œÚ]SX\]×ˆÙYš[™HÔPÕST—ÒS•S”ÒUSPTÕUˆŠÜËœÜXÝ[\’[[œÚ]SX\]Ž——‹Ë˜[œÛZ\ÜÚ[Û“X\]×ˆÙYš[™HS”ÓRTÔÒSÓ“PTÕUˆŠÜË˜[œÛZ\ÜÚ[Û“X\]Ž——‹ËXÚÛ™\ÜÓX\]×ˆÙYš[™HPÒÓ‘TÔÓPTÕUˆŠÜËXÚÛ™\ÜÓX\]Ž——‹Ë™\^[™Ù[É‰ˆLOOO\Ë™›]ÚY[™Ï×ˆÙYš[™HTÑWÕS‘ÑS•Ž——‹Ë™\^ÛÛÜœÏ×ˆÙYš[™HTÑWÐÓÓÔ—Ž——‹Ë™\^[\Ï×ˆÙYš[™HTÑWÐÓÓÔ—ÐSWŽ——‹Ë™\^]Œ\Ï×ˆÙYš[™HTÑWÕUŒWŽ——‹Ë™\^]ŒœÏ×ˆÙYš[™HTÑWÕUŒ—Ž——‹Ë™\^]ŒÜÏ×ˆÙYš[™HTÑWÕUŒ×Ž——‹ËœÚ[Õ]œÏ×ˆÙYš[™HTÑWÔÒS•×ÕU—Ž——‹Ë™›]ÚY[™Ï×ˆÙYš[™H“UÔÒQQŽ——‹ËœÚÚ[›š[™Ï×ˆÙYš[™HTÑWÔÒÒS“’S‘×Ž——‹Ë›[Üœ\™Ù]Ï×ˆÙYš[™HTÑWÓSÔ”T‘ÑU×Ž——‹Ë›[Üœ›Ü›X[É‰ˆLOOO\Ë™›]ÚY[™Ï×ˆÙYš[™HTÑWÓSÔ”“Ô“PS×Ž——‹Ë›[ÜœÛÛÜœÉ‰œËš\ÕÙX‘Ó×ˆÙYš[™HTÑWÓSÔ”ÓÓÔ”×Ž——‹Ë›[Üœ\™Ù]ÐÛÝ[Œ	‰œËš\ÕÙX‘Ó×ˆÙYš[™HSÔ”T‘ÑU×ÕVT‘WŽ——‹Ë›[Üœ\™Ù]ÐÛÝ[Œ	‰œËš\ÕÙX‘Ó×ˆÙYš[™HSÔ”T‘ÑU×ÕVT‘WÔÕ’QHŠÜË›[Üœ^\™TÝšYN——‹Ë›[Üœ\™Ù]ÐÛÝ[Œ	‰œËš\ÕÙX‘Ó×ˆÙYš[™HSÔ”T‘ÑU×ÐÓÕS•ŠÜË›[Üœ\™Ù]ÐÛÝ[——‹Ë™ÝX›TÚYY×ˆÙYš[™HÕP“WÔÒQQŽ——‹Ë™›\ÚYY×ˆÙYš[™H“TÔÒQQŽ——‹ËœÚYÝÓX\[˜X›Y×ˆÙYš[™HTÑWÔÒQÕÓPTŽ——‹ËœÚYÝÓX\[˜X›Y×ˆÙYš[™HŠÙŽ——‹ËœÚ^™P][X][Û×ˆÙYš[™HTÑWÔÒV‘PUS•PUSÓ—Ž——‹Ë›[SYÚ›Ø™\ÏŒ×ˆÙYš[™HTÑWÓQÒÔ“Ð‘T×Ž——‹Ë\ÙSYØXÞSYÚÏ×ˆÙYš[™HQÐPÖWÓQÒ×Ž——‹Ë›ÙØ\š]ZXÑ\Y™™\×ˆÙYš[™HTÑWÓÑÑT•Q—Ž——‹Ë›ÙØ\š]ZXÑ\Y™™\‰‰œËœ™[™\™\‘^[œÚ[Û‘œ˜YÑ\×ˆÙYš[™HTÑWÓÑÑT•Q—ÑVŽ——‹[šY›Ü›HX][Ù[X]š^×‹[šY›Ü›HX][Ù[šY]ÓX]š^×‹[šY›Ü›HX]›Ú™XÝ[Û“X]š^×‹[šY›Ü›HX]šY]ÓX]š^×‹[šY›Ü›HX]È›Ü›X[X]š^×‹[šY›Ü›H™XÌÈØ[Y\˜TÜÚ][ÛŽ×‹[šY›Ü›H›ÛÛ\ÓÜÙÜ˜\XÎ×‹ˆÚY™YˆTÑWÒS”ÕSÒS‘×‹—]šX]HX][œÝ[˜ÙSX]š^×‹ˆÙ[™Y—‹ˆÚY™YˆTÑWÒS”ÕSÒS‘×ÐÓÓÔ—‹—]šX]H™XÌÈ[œÝ[˜ÙPÛÛÜŽ×‹ˆÙ[™Y—‹˜]šX]H™XÌÈÜÚ][ÛŽ×‹˜]šX]H™XÌÈ›Ü›X[×‹˜]šX]H™XÌˆ]Ž×‹ˆÚY™YˆTÑWÕUŒW‹—]šX]H™XÌˆ]ŒN×‹ˆÙ[™Y—‹ˆÚY™YˆTÑWÕUŒ—‹—]šX]H™XÌˆ]ŒŽ×‹ˆÙ[™Y—‹ˆÚY™YˆTÑWÕUŒ×‹—]šX]H™XÌˆ]ŒÎ×‹ˆÙ[™Y—‹ˆÚY™YˆTÑWÕS‘ÑS•‹—]šX]H™XÍ[™Ù[×‹ˆÙ[™Y—‹ˆÚYˆYš[™Y
TÑWÐÓÓÔ—ÐSH
W‹—]šX]H™XÍÛÛÜŽ×‹ˆÙ[YˆYš[™Y
TÑWÐÓÓÔˆ
W‹—]šX]H™XÌÈÛÛÜŽ×‹ˆÙ[™Y—‹ˆÚYˆ
Yš[™Y
TÑWÓSÔ”T‘ÑUÈ
H	‰ˆHYš[™Y
SÔ”T‘ÑU×ÕVT‘H
H
W‹—]šX]H™XÌÈ[Üœ\™Ù]×‹—]šX]H™XÌÈ[Üœ\™Ù]N×‹—]šX]H™XÌÈ[Üœ\™Ù]Ž×‹—]šX]H™XÌÈ[Üœ\™Ù]Î×‹—ÚY™YˆTÑWÓSÔ”“Ô“PS×‹—]šX]H™XÌÈ[Üœ›Ü›X[×‹—]šX]H™XÌÈ[Üœ›Ü›X[N×‹—]šX]H™XÌÈ[Üœ›Ü›X[Ž×‹—]šX]H™XÌÈ[Üœ›Ü›X[Î×‹—Ù[ÙW‹—]šX]H™XÌÈ[Üœ\™Ù]×‹—]šX]H™XÌÈ[Üœ\™Ù]N×‹—]šX]H™XÌÈ[Üœ\™Ù]Ž×‹—]šX]H™XÌÈ[Üœ\™Ù]Î×‹—Ù[™Y—‹ˆÙ[™Y—‹ˆÚY™YˆTÑWÔÒÒS“’S‘×‹—]šX]H™XÍÚÚ[’[™^×‹—]šX]H™XÍÚÚ[•ÙZYÚ×‹ˆÙ[™Y—‹———K™š[\ŠXJKš›Ú[Š——ŠKVÞKJÊKˆÙYš[™HÒQT—ÕTHŠÜËœÚY\•\KˆÙYš[™HÒQT—ÓSQHŠÜËœÚY\“˜[YKËË\ÙQ›ÙÉ‰œË™›ÙÏ×ˆÙYš[™HTÑWÑ“Ñ×Ž——‹Ë\ÙQ›ÙÉ‰œË™›ÙÑ^×ˆÙYš[™H“Ñ×ÑV—Ž——‹Ë›X\×ˆÙYš[™HTÑWÓPTŽ——‹Ë›X]Ø\×ˆÙYš[™HTÑWÓPUÐTŽ——‹Ë™[“X\×ˆÙYš[™HTÑWÑS•“PTŽ——‹Ë™[“X\×ˆÙYš[™HŠÙÎ——‹Ë™[“X\×ˆÙYš[™HŠ×Î——‹Ë™[“X\×ˆÙYš[™HŠÝŽ——‹×ˆÙYš[™HÕP‘UU—ÕVSÕÒQŠÞ^[ÚY——‹×ˆÙYš[™HÕP‘UU—ÕVSÒRQÒŠÞ^[ZYÚ——‹×ˆÙYš[™HÕP‘UU—ÓPVÓRTŠÞ›X^Z\
×‹ŒŽ——‹Ë›YÚX\×ˆÙYš[™HTÑWÓQÒPTŽ——‹Ë˜[ÓX\×ˆÙYš[™HTÑWÐSÓPTŽ——‹Ë˜[\X\×ˆÙYš[™HTÑWÐ•STPTŽ——‹Ë››Ü›X[X\×ˆÙYš[™HTÑWÓ“Ô“PSPTŽ——‹Ë››Ü›X[X\Øš™XÝÜXÙO×ˆÙYš[™HTÑWÓ“Ô“PSPTÓÐ’‘PÕÔPÑWŽ——‹Ë››Ü›X[X\[™Ù[ÜXÙO×ˆÙYš[™HTÑWÓ“Ô“PSPTÕS‘ÑS•ÔPÑWŽ——‹Ë™[Z\ÜÚ]™SX\×ˆÙYš[™HTÑWÑSRTÔÒU‘SPTŽ——‹Ë˜[š\ÛÝ›ÜO×ˆÙYš[™HTÑWÐS’TÓÕ“ÔWŽ——‹Ë˜[š\ÛÝ›ÜSX\×ˆÙYš[™HTÑWÐS’TÓÕ“ÔSPTŽ——‹Ë˜ÛX\˜ÛØ]×ˆÙYš[™HTÑWÐÓPTÓÐUŽ——‹Ë˜ÛX\˜ÛØ]X\×ˆÙYš[™HTÑWÐÓPTÓÐUPTŽ——‹Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\×ˆÙYš[™HTÑWÐÓPTÓÐUÔ“ÕQÒ‘TÔÓPTŽ——‹Ë˜ÛX\˜ÛØ]›Ü›X[X\×ˆÙYš[™HTÑWÐÓPTÓÐUÓ“Ô“PSPTŽ——‹Ëš\šY\ØÙ[˜ÙO×ˆÙYš[™HTÑWÒT’QTÐÑSÑWŽ——‹Ëš\šY\ØÙ[˜ÙSX\×ˆÙYš[™HTÑWÒT’QTÐÑSÑSPTŽ——‹Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\×ˆÙYš[™HTÑWÒT’QTÐÑSÑWÕPÒÓ‘TÔÓPTŽ——‹ËœÜXÝ[\“X\×ˆÙYš[™HTÑWÔÔPÕST“PTŽ——‹ËœÜXÝ[\ÛÛÜ“X\×ˆÙYš[™HTÑWÔÔPÕST—ÐÓÓÔ“PTŽ——‹ËœÜXÝ[\’[[œÚ]SX\×ˆÙYš[™HTÑWÔÔPÕST—ÒS•S”ÒUSPTŽ——‹Ëœ›ÝYÚ™\ÜÓX\×ˆÙYš[™HTÑWÔ“ÕQÒ‘TÔÓPTŽ——‹Ë›Y][™\ÜÓX\×ˆÙYš[™HTÑWÓQUS‘TÔÓPTŽ——‹Ë˜[SX\×ˆÙYš[™HTÑWÐSSPTŽ——‹Ë˜[U\Ý×ˆÙYš[™HTÑWÐSUTÕŽ——‹Ë˜[R\Ú×ˆÙYš[™HTÑWÐSRTÒŽ——‹ËœÚY[×ˆÙYš[™HTÑWÔÒQS—Ž——‹ËœÚY[ÛÛÜ“X\×ˆÙYš[™HTÑWÔÒQS—ÐÓÓÔ“PTŽ——‹ËœÚY[”›ÝYÚ™\ÜÓX\×ˆÙYš[™HTÑWÔÒQS—Ô“ÕQÒ‘TÔÓPTŽ——‹Ë˜[œÛZ\ÜÚ[Û×ˆÙYš[™HTÑWÕS”ÓRTÔÒSÓ—Ž——‹Ë˜[œÛZ\ÜÚ[Û“X\×ˆÙYš[™HTÑWÕS”ÓRTÔÒSÓ“PTŽ——‹ËXÚÛ™\ÜÓX\×ˆÙYš[™HTÑWÕPÒÓ‘TÔÓPTŽ——‹Ë™\^[™Ù[É‰ˆLOOO\Ë™›]ÚY[™Ï×ˆÙYš[™HTÑWÕS‘ÑS•Ž——‹Ë™\^ÛÛÜœßËš[œÝ[˜Ú[™ÐÛÛÜ×ˆÙYš[™HTÑWÐÓÓÔ—Ž——‹Ë™\^[\Ï×ˆÙYš[™HTÑWÐÓÓÔ—ÐSWŽ——‹Ë™\^]Œ\Ï×ˆÙYš[™HTÑWÕUŒWŽ——‹Ë™\^]ŒœÏ×ˆÙYš[™HTÑWÕUŒ—Ž——‹Ë™\^]ŒÜÏ×ˆÙYš[™HTÑWÕUŒ×Ž——‹ËœÚ[Õ]œÏ×ˆÙYš[™HTÑWÔÒS•×ÕU—Ž——‹Ë™Ü˜YY[X\×ˆÙYš[™HTÑWÑÔQQS•PTŽ——‹Ë™›]ÚY[™Ï×ˆÙYš[™H“UÔÒQQŽ——‹Ë™ÝX›TÚYY×ˆÙYš[™HÕP“WÔÒQQŽ——‹Ë™›\ÚYY×ˆÙYš[™H“TÔÒQQŽ——‹ËœÚYÝÓX\[˜X›Y×ˆÙYš[™HTÑWÔÒQÕÓPTŽ——‹ËœÚYÝÓX\[˜X›Y×ˆÙYš[™HŠÙŽ——‹Ëœ™[][\YY[O×ˆÙYš[™H‘SUSTQQÐSWŽ——‹Ë›[SYÚ›Ø™\ÏŒ×ˆÙYš[™HTÑWÓQÒÔ“Ð‘T×Ž——‹Ë\ÙSYØXÞSYÚÏ×ˆÙYš[™HQÐPÖWÓQÒ×Ž——‹Ë™XÛÙUšY[Õ^\™O×ˆÙYš[™HPÓÑWÕ’QS×ÕVT‘WŽ——‹Ë›ÙØ\š]ZXÑ\Y™™\×ˆÙYš[™HTÑWÓÑÑT•Q—Ž——‹Ë›ÙØ\š]ZXÑ\Y™™\‰‰œËœ™[™\™\‘^[œÚ[Û‘œ˜YÑ\×ˆÙYš[™HTÑWÓÑÑT•Q—ÑVŽ——‹[šY›Ü›HX]šY]ÓX]š^×‹[šY›Ü›H™XÌÈØ[Y\˜TÜÚ][ÛŽ×‹[šY›Ü›H›ÛÛ\ÓÜÙÜ˜\XÎ×‹ËÛ™SX\[™ÈOO\×ˆÙYš[™HÓ‘WÓPTS‘×Ž——‹ËÛ™SX\[™ÈOO\Þ\‹Û™[X\[™×Ü\œ×Ùœ˜YÛY[——‹ËÛ™SX\[™ÈOO\ÜJÛ™SX\[™×‹ËÛ™SX\[™ÊN——‹Ë™]\š[™Ï×ˆÙYš[™HUT’S‘×Ž——‹Ë›Ü\]YO×ˆÙYš[™HÔTUQWŽ——‹\‹˜ÛÛÜœÜXÙWÜ\œ×Ùœ˜YÛY[J›[™X\•ÓÝ]]^[‹Ë›Ý]]ÛÛÜ”ÜXÙJKË\ÙQ\XÚÚ[™Ï×ˆÙYš[™HTÔPÒÒS‘ÈŠÜË™\XÚÚ[™Î——‹———K™š[\ŠXJKš›Ú[Š——ŠJKÏ]˜JÊKÏY˜JËÊKÏYØJËÊKO]˜JJKOY˜JKÊKOYØJKÊKÏTØJÊKOTØJJKËš\ÕÙX‘Ó‰‰ˆLOO\Ëš\Ô˜]ÔÚY\“X]\šX[	‰ŠÏWˆÝ™\œÚ[ÛˆÌ\×—‹ÏVÓKœ™XÚ\Ú[ÛˆYY][\Ø[\\Œ‘\œ˜^N×‹ˆÙYš[™H]šX]H[—‹ˆÙYš[™H˜\žZ[™ÈÝ]‹ˆÙYš[™H^\™L‘^\™W—Kš›Ú[Š——ŠJ×——ŠÝËV×œ™XÚ\Ú[ÛˆYY][\Ø[\\Œ‘\œ˜^N×‹ˆÙYš[™H˜\žZ[™È[—‹Ë™ÛÛ™\œÚ[ÛOOR×—Ž—›^[Ý]
ØØ][ÛˆH
HÝ]YÚ™XÍ×Ùœ˜YÐÛÛÜŽ×‹Ë™ÛÛ™\œÚ[ÛOOR×—Ž—ˆÙYš[™HÛÑœ˜YÐÛÛÜˆ×Ùœ˜YÐÛÛÜ—‹ˆÙYš[™HÛÑœ˜YÑ\VÛÑœ˜YÑ\‹ˆÙYš[™H^\™L‘^\™W‹ˆÙYš[™H^\™PÝX™H^\™W‹ˆÙYš[™H^\™L‘›Úˆ^\™T›Ú—‹ˆÙYš[™H^\™L‘ÙV^\™SÙ‹ˆÙYš[™H^\™L‘›Ú“ÙV^\™T›Ú“Ù‹ˆÙYš[™H^\™PÝX™SÙV^\™SÙ‹ˆÙYš[™H^\™L‘Ü˜YV^\™QÜ˜Y‹ˆÙYš[™H^\™L‘›Ú‘Ü˜YV^\™T›Ú‘Ü˜Y‹ˆÙYš[™H^\™PÝX™QÜ˜YV^\™QÜ˜Y—Kš›Ú[Š——ŠJ×——ŠÔŠNØÛÛœÝPÊÝÊØËPÊÔŠÛKO[JËË•‘T•VÔÒQT‹
KO[JËË‘”QÓQS•ÔÒQT‹
NÙ[˜Ý[Ûˆ
J^ÚYŠ™XYË˜ÚXÚÔÚY\‘\œ›ÜœÊ^ØÛÛœÝ[Ë™Ù]›ÙÜ˜[R[™›ÓÙÊJKš[J
KO[Ë™Ù]ÚY\’[™›ÓÙÊJKš[J
K[Ë™Ù]ÚY\’[™›ÓÙÊJKš[J
NÛ]ÏHLOHLÚYŠLOOO[Ë™Ù]›ÙÜ˜[T\˜[Y]\ŠKË“S’×ÔÕUTÊJZYŠÏHLK™[˜Ý[Û—O]\[Ùˆ™XYË›Û”ÚY\‘\œ›ÜŠ]™XYË›Û”ÚY\‘\œ›ÜŠËKKJNÙ[Ù^ØÛÛœÝ]XJËK™\^ŠKO]XJËK™œ˜YÛY[ŠNØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó›ÙÜ˜[NˆÚY\ˆ\œ›ÜˆŠÛË™Ù]\œ›ÜŠ
J×ˆHSQUWÔÕUTÈŠÛË™Ù]›ÙÜ˜[T\˜[Y]\ŠKË•SQUWÔÕUTÊJ×——”›ÙÜ˜[H[™›ÈÙÎˆŠÛŠ×——ŠÝ
×——ŠÙJ_Y[ÙW—ˆOO[ØÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó›ÙÜ˜[Nˆ›ÙÜ˜[H[™›ÈÙÎ—‹ŠN——ˆOOZI‰——ˆOO\Ÿ
OHLJNØI‰ŠK™XYÛ›ÜÝXÜÏ^Ü[›˜X›NœË›ÙÜ˜[SÙÎ›‹™\^ÚY\ŽžÛÙÎšK™Yš^ßKœ˜YÛY[ÚY\ŽžÛÙÎœ‹™Yš^”Ÿ_J_[Ë™[]TÚY\ŠJKË™[]TÚY\ŠJK[™]ÈØJËJKÏY[˜Ý[ÛŠJ^ØÛÛœÝ^ßKO]™Ù]›ÙÜ˜[T\˜[Y]\ŠKPÕU‘WÐU’P•UTÊNÙ›ÜŠ]LÜNÜŠÊÊ^ØÛÛœÝO]™Ù]XÝ]™P]šXŠKŠKÏZK›˜[YNÛ]OLNÚK\OOO]‘“ÐUÓPU‰‰ŠOLŠKK\OOO]‘“ÐUÓPUÉ‰ŠOLÊKK\OOO]‘“ÐUÓPU	‰ŠOM
K–Ü×O^Ý\NšK\KØØ][ÛŽ™Ù]]šX“ØØ][ÛŠKÊKØØ][Û”Ú^™N˜__\™]\›ˆŸJËJ_[]‹ÎÛË˜]XÚÚY\ŠKJKË˜]XÚÚY\ŠKJK›ÚYOO\Ëš[™^]šX]S˜[YOÛË˜š[™]šX“ØØ][ÛŠKËš[™^]šX]S˜[YJNˆLOO\Ë›[Üœ\™Ù]É‰›Ë˜š[™]šX“ØØ][ÛŠKœÜÚ][Û—ŠKË›[šÔ›ÙÜ˜[JJK\Ë™Ù][šY›Ü›\ÏY[˜Ý[ÛŠ
^Ü™]\›ˆ›ÚYOOS‰‰‘
\ÊKŸK\Ë™Ù]]šX]\ÏY[˜Ý[ÛŠ
^Ü™]\›ˆ›ÚYOOSÉ‰‘
\ÊKßNÛ]HLOOO\Ëœ™[™\™\‘^[œÚ[Û”\˜[[ÚY\ÛÛ\[NÜ™]\›ˆ\Ëš\Ô™XYOY[˜Ý[ÛŠ
^Ü™]\›ˆLOOOQ‰‰Š[Ë™Ù]›ÙÜ˜[T\˜[Y]\ŠKØJJKŸK\Ë™\Ý›ÞOY[˜Ý[ÛŠ
^ØKœ™[X\ÙTÝ]\ÓÙ”›ÙÜ˜[J\ÊKË™[]T›ÙÜ˜[JJK\Ëœ›ÙÜ˜[O]›ÚYK\Ë\O\ËœÚY\•\K\Ë›˜[YO\ËœÚY\“˜[YK\ËšYZJÊË\Ë˜ØXÚRÙ^OYK\Ë\ÙY[Y\ÏLK\Ëœ›ÙÜ˜[OQK\Ë™\^ÚY\RK\Ë™œ˜YÛY[ÚY\UK\ß[]ØOLØÛ\ÜÈX^ØÛÛœÝXÝÜŠ
^Ý\ËœÚY\ØXÚO[™]ÈX\\Ë›X]\šX[ØXÚO[™]ÈX\]\]J
^ØÛÛœÝO]™\^ÚY\‹]™œ˜YÛY[ÚY\‹O]\Ë—ÙÙ]ÚY\”ÝYÙJJK]\Ë—ÙÙ]ÚY\”ÝYÙJŠKÏ]\Ë—ÙÙ]ÚY\ØXÚQ›Ü“X]\šX[

NÜ™]\›ˆLOOO\Ëš\ÊJI‰ŠË˜Y
JKK\ÙY[Y\ÊÊÊKLOOO\Ëš\ÊŠI‰ŠË˜Y
ŠK‹\ÙY[Y\ÊÊÊK\ß\™[[Ý™J
^ØÛÛœÝO]\Ë›X]\šX[ØXÚK™Ù]

NÙ›ÜŠÛÛœÝÙˆJ]\ÙY[Y\ËKKOO]\ÙY[Y\É‰\ËœÚY\ØXÚK™[]J˜ÛÙJNÜ™]\›ˆ\Ë›X]\šX[ØXÚK™[]J
K\ßYÙ]™\^ÚY\’Q

^Ü™]\›ˆ\Ë—ÙÙ]ÚY\”ÝYÙJ™\^ÚY\ŠKšYYÙ]œ˜YÛY[ÚY\’Q

^Ü™]\›ˆ\Ë—ÙÙ]ÚY\”ÝYÙJ™œ˜YÛY[ÚY\ŠKšYY\ÜÜÙJ
^Ý\ËœÚY\ØXÚK˜ÛX\Š
K\Ë›X]\šX[ØXÚK˜ÛX\Š
_WÙÙ]ÚY\ØXÚQ›Ü“X]\šX[

^ØÛÛœÝO]\Ë›X]\šX[ØXÚNÛ]YK™Ù]

NÜ™]\›ˆ›ÚYOO[‰‰Š[™]ÈÙ]KœÙ]
ŠJKŸWÙÙ]ÚY\”ÝYÙJ
^ØÛÛœÝO]\ËœÚY\ØXÚNÛ]YK™Ù]

NÜ™]\›ˆ›ÚYOO[‰‰Š[™]È˜J
KKœÙ]
ŠJKŸ_XÛ\ÜÈ˜^ØÛÛœÝXÝÜŠ
^Ý\ËšY]ØJÊË\Ë˜ÛÙO]\Ë\ÙY[Y\ÏL_Y[˜Ý[ÛˆØJK‹K‹ËÊ^ØÛÛœÝ[™]È[‹Ï[™]ÈXKV×KO\‹š\ÕÙX‘Ó‹\‹›ÙØ\š]ZXÑ\Y™™\‹O\‹™\^^\™\ÎÛ]\‹œ™XÚ\Ú[ÛŽØÛÛœÝÏ^ÓY\Ú\X]\šX[—™\‹Y\Ú\Ý[˜ÙSX]\šX[—™\Ý[˜ÙT‘ÐW‹Y\Ú›Ü›X[X]\šX[—››Ü›X[‹Y\Ú˜\ÚXÓX]\šX[—˜˜\ÚX×‹Y\Ú[X™\X]\šX[—›[X™\‹Y\ÚÛ™ÓX]\šX[—œÛ™×‹Y\ÚÛÛ“X]\šX[—ÛÛ—‹Y\ÚÝ[™\™X]\šX[—œ\ÚXØ[‹Y\Ú\ÚXØ[X]\šX[—œ\ÚXØ[‹Y\ÚX]Ø\X]\šX[—›X]Ø\‹[™P˜\ÚXÓX]\šX[—˜˜\ÚX×‹[™Q\ÚYX]\šX[—™\ÚY‹Ú[ÓX]\šX[—œÚ[×‹ÚYÝÓX]\šX[—œÚYÝ×‹Üš]SX]\šX[—œÜš]WŸNÙ[˜Ý[ÛˆÊ
^Ü™]\›ˆOO]×]—Ž˜]‰ÝX\™]\›žÙÙ]\˜[Y]\œÎ™[˜Ý[ÛŠË‹
^ØÛÛœÝO]‹™›ÙËO^™Ù[ÛY]žKÏ\Ëš\ÓY\ÚÝ[™\™X]\šX[Ý‹™[š\›Û›Y[›[JËš\ÓY\ÚÝ[™\™X]\šX[ÛŽ™JK™Ù]
Ë™[“X\ÊKX‰‰˜‹›X\[™ÏOOPOØ‹š[XYÙKšZYÚ›[OYÖÜË\WNÛ[OO\Ëœ™XÚ\Ú[Û‰‰Š\‹™Ù]X^™XÚ\Ú[ÛŠËœ™XÚ\Ú[ÛŠKˆOO\Ëœ™XÚ\Ú[Û‰‰˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó›ÙÜ˜[K™Ù]\˜[Y]\œÎ—‹Ëœ™XÚ\Ú[Û‹››ÝÝ\ÜY\Ú[™×‹‹š[œÝXY—ŠJNØÛÛœÝÏSK›[Üœ]šX]\ËœÜÚ][ÛŸK›[Üœ]šX]\Ë››Ü›X[K›[Üœ]šX]\Ë˜ÛÛÜ‹]›ÚYOO]ÏÝË›[™ÝŒÛ]ËKOLÚYŠ›ÚYOOSK›[Üœ]šX]\ËœÜÚ][Û‰‰ŠOLJK›ÚYOOSK›[Üœ]šX]\Ë››Ü›X[	‰ŠOLŠK›ÚYOOSK›[Üœ]šX]\Ë˜ÛÛÜ‰‰ŠOLÊKJ^ØÛÛœÝTÜ–ÑWNÐÏ]™\^ÚY\‹]™œ˜YÛY[ÚY\ŸY[ÙHÏ\Ë™\^ÚY\‹\Ë™œ˜YÛY[ÚY\‹Ë\]JÊKXË™Ù]™\^ÚY\’Q
ÊKOXË™Ù]œ˜YÛY[ÚY\’Q
ÊNØÛÛœÝ]™Ù]™[™\•\™Ù]

KHLOO^š\Ò[œÝ[˜ÙYY\ÚÏHLOO^š\Ð˜]ÚYY\ÚHH\Ë›X\HH\Ë›X]Ø\HHX‹ÏHH\Ë˜[ÓX\HH\Ë›YÚX\HH\Ë˜[\X\ÏHH\Ë››Ü›X[X\ÏHH\Ë™\ÜXÙ[Y[X\HH\Ë™[Z\ÜÚ]™SX\HH\Ë›Y][™\ÜÓX\OHH\Ëœ›ÝYÚ™\ÜÓX\O\Ë˜[š\ÛÝ›ÜOŒ\Ë˜ÛX\˜ÛØ]Œ\Ëš\šY\ØÙ[˜ÙOŒÏ\ËœÚY[Œ	\Ë˜[œÛZ\ÜÚ[ÛŒOVI‰ˆH\Ë˜[š\ÛÝ›ÜSX\V‰‰ˆH\Ë˜ÛX\˜ÛØ]X\]V‰‰ˆH\Ë˜ÛX\˜ÛØ]›Ü›X[X\V‰‰ˆH\Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\]R‰‰ˆH\Ëš\šY\ØÙ[˜ÙSX\R‰‰ˆH\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\ÝRÉ‰ˆH\ËœÚY[ÛÛÜ“X\]RÉ‰ˆH\ËœÚY[”›ÝYÚ™\ÜÓX\ÝHH\ËœÜXÝ[\“X\HH\ËœÜXÝ[\ÛÛÜ“X\ÝHH\ËœÜXÝ[\’[[œÚ]SX\I	‰ˆH\Ë˜[œÛZ\ÜÚ[Û“X\]I	‰ˆH\ËXÚÛ™\ÜÓX\HH\Ë™Ü˜YY[X\HH\Ë˜[SX\]\Ë˜[U\ÝŒHH\Ë˜[R\ÚÝHH\Ë™^[œÚ[ÛœËÝHHSK˜]šX]\Ë]ŒKHHSK˜]šX]\Ë]Œ‹HHSK˜]šX]\Ë]ŒÎÛ]]\Ü™]\›ˆËÛ™SX\Y	‰Š[OOQ	‰ˆLOOQš\Ö”™[™\•\™Ù]
]]Û™SX\[™ÊJKÚ\ÕÙX‘ÓŽKÚY\’Q‘KÚY\•\NœË\KÚY\“˜[YNœË›˜[YK™\^ÚY\ŽËœ˜YÛY[ÚY\Ž“Yš[™\ÎœË™Yš[™\ËÝ\ÝÛU™\^ÚY\’Q”Ý\ÝÛQœ˜YÛY[ÚY\’Q’K\Ô˜]ÔÚY\“X]\šX[ˆLOO\Ëš\Ô˜]ÔÚY\“X]\šX[ÛÛ™\œÚ[ÛŽœË™ÛÛ™\œÚ[Û‹™XÚ\Ú[ÛŽ™‹˜]Ú[™Î“Ë[œÝ[˜Ú[™Î“‹[œÝ[˜Ú[™ÐÛÛÜŽ“‰‰›[OO^š[œÝ[˜ÙPÛÛÜ‹Ý\ÜÕ™\^^\™\Î›KÝ]]ÛÛÜ”ÜXÙN›[OOQÝ›Ý]]ÛÛÜ”ÜXÙNˆLOOQš\Ö”™[™\•\™Ù]Ñ^\™K˜ÛÛÜ”ÜXÙN’X\‘‹X]Ø\‹[“X\ž‹[“X\[ÙNž‰‰˜‹›X\[™Ë[“X\ÝX™UU’ZYÚ•[ÓX\‘ËYÚX\’[\X\•‹›Ü›X[X\šË\ÜXÙ[Y[X\›I‰•Ë[Z\ÜÚ]™SX\–›Ü›X[X\Øš™XÝÜXÙNšÉ‰ŒOOO\Ë››Ü›X[X\\K›Ü›X[X\[™Ù[ÜXÙNšÉ‰ŒOO\Ë››Ü›X[X\\KY][™\ÜÓX\š‹›ÝYÚ™\ÜÓX\œK[š\ÛÝ›ÜN–K[š\ÛÝ›ÜSX\”KÛX\˜ÛØ]–‹ÛX\˜ÛØ]X\ÛX\˜ÛØ]›Ü›X[X\™]ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\›\šY\ØÙ[˜ÙN’‹\šY\ØÙ[˜ÙSX\š]\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\œÚY[Ž’ËÚY[ÛÛÜ“X\œÝÚY[”›ÝYÚ™\ÜÓX\˜]ÜXÝ[\“X\›ÝÜXÝ[\ÛÛÜ“X\›ÜXÝ[\’[[œÚ]SX\˜Ý˜[œÛZ\ÜÚ[ÛŽ‰˜[œÛZ\ÜÚ[Û“X\šXÚÛ™\ÜÓX\]Ü˜YY[X\™Ü\]YNˆLOOO\Ë˜[œÜ\™[	‰ŒOOO\Ë˜›[™[™Ë[SX\œ[U\Ý›][R\Ú™ÛÛXš[™NœË˜ÛÛXš[™KX\]Ž‘‰‰—ÊË›X\˜Ú[›™[
K[ÓX\]Ž‘É‰—ÊË˜[ÓX\˜Ú[›™[
KYÚX\]Ž’	‰—ÊË›YÚX\˜Ú[›™[
K[\X\]Ž•‰‰—ÊË˜[\X\˜Ú[›™[
K›Ü›X[X\]ŽšÉ‰—ÊË››Ü›X[X\˜Ú[›™[
K\ÜXÙ[Y[X\]Ž•É‰—ÊË™\ÜXÙ[Y[X\˜Ú[›™[
K[Z\ÜÚ]™SX\]Ž–	‰—ÊË™[Z\ÜÚ]™SX\˜Ú[›™[
KY][™\ÜÓX\]Žš‰‰—ÊË›Y][™\ÜÓX\˜Ú[›™[
K›ÝYÚ™\ÜÓX\]ŽœI‰—ÊËœ›ÝYÚ™\ÜÓX\˜Ú[›™[
K[š\ÛÝ›ÜSX\]Ž”I‰—ÊË˜[š\ÛÝ›ÜSX\˜Ú[›™[
KÛX\˜ÛØ]X\]Ž	‰—ÊË˜ÛX\˜ÛØ]X\˜Ú[›™[
KÛX\˜ÛØ]›Ü›X[X\]Ž™]	‰—ÊË˜ÛX\˜ÛØ]›Ü›X[X\˜Ú[›™[
KÛX\˜ÛØ]›ÝYÚ™\ÜÓX\]Ž›	‰—ÊË˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\˜Ú[›™[
K\šY\ØÙ[˜ÙSX\]Žš]	‰—ÊËš\šY\ØÙ[˜ÙSX\˜Ú[›™[
K\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\]Žœ	‰—ÊËš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\˜Ú[›™[
KÚY[ÛÛÜ“X\]ŽœÝ	‰—ÊËœÚY[ÛÛÜ“X\˜Ú[›™[
KÚY[”›ÝYÚ™\ÜÓX\]Ž˜]	‰—ÊËœÚY[”›ÝYÚ™\ÜÓX\˜Ú[›™[
KÜXÝ[\“X\]Ž›Ý	‰—ÊËœÜXÝ[\“X\˜Ú[›™[
KÜXÝ[\ÛÛÜ“X\]Ž›	‰—ÊËœÜXÝ[\ÛÛÜ“X\˜Ú[›™[
KÜXÝ[\’[[œÚ]SX\]Ž˜Ý	‰—ÊËœÜXÝ[\’[[œÚ]SX\˜Ú[›™[
K˜[œÛZ\ÜÚ[Û“X\]Žš	‰—ÊË˜[œÛZ\ÜÚ[Û“X\˜Ú[›™[
KXÚÛ™\ÜÓX\]Ž]	‰—ÊËXÚÛ™\ÜÓX\˜Ú[›™[
K[SX\]Žœ	‰—ÊË˜[SX\˜Ú[›™[
K™\^[™Ù[ÎˆHSK˜]šX]\Ë[™Ù[	‰ŠßJK™\^ÛÛÜœÎœË™\^ÛÛÜœË™\^[\ÎˆLOO\Ë™\^ÛÛÜœÉ‰ˆHSK˜]šX]\Ë˜ÛÛÜ‰‰OOSK˜]šX]\Ë˜ÛÛÜ‹š][TÚ^™K™\^]Œ\Î—Ý™\^]ŒœÎ™\^]ŒÜÎžÚ[Õ]œÎˆLOO^š\ÔÚ[É‰ˆHSK˜]šX]\Ë]‰‰ŠŸ
K›ÙÎˆH^K\ÙQ›ÙÎˆLOO\Ë™›ÙË›ÙÑ^ŽžI‰žKš\Ñ›ÙÑ^‹›]ÚY[™ÎˆLOO\Ë™›]ÚY[™ËÚ^™P][X][ÛŽˆLOO\ËœÚ^™P][X][Û‹ÙØ\š]ZXÑ\Y™™\Ž™ÚÚ[›š[™ÎˆLOO^š\ÔÚÚ[›™YY\Ú[Üœ\™Ù]Î›ÚYOOSK›[Üœ]šX]\ËœÜÚ][Û‹[Üœ›Ü›X[Î›ÚYOOSK›[Üœ]šX]\Ë››Ü›X[[ÜœÛÛÜœÎ›ÚYOOSK›[Üœ]šX]\Ë˜ÛÛÜ‹[Üœ\™Ù]ÐÛÝ[”‹[Üœ^\™TÝšYN•K[Q\“YÚÎ›™\™XÝ[Û˜[›[™Ý[TÚ[YÚÎ›œÚ[›[™Ý[TÜÝYÚÎ›œÜÝ›[™Ý[TÜÝYÚX\Î›œÜÝYÚX\›[™Ý[T™XÝ\™XSYÚÎ›œ™XÝ\™XK›[™Ý[R[ZSYÚÎ›š[ZK›[™Ý[Q\“YÚÚYÝÜÎ›™\™XÝ[Û˜[ÚYÝÓX\›[™Ý[TÚ[YÚÚYÝÜÎ›œÚ[ÚYÝÓX\›[™Ý[TÜÝYÚÚYÝÜÎ›œÜÝÚYÝÓX\›[™Ý[TÜÝYÚÚYÝÜÕÚ]X\Î››[TÜÝYÚÚYÝÜÕÚ]X\Ë[SYÚ›Ø™\Î››[SYÚ›Ø™\Ë[PÛ\[™Ô[™\Î›Ë›[T[™\Ë[PÛ\[\œÙXÝ[ÛŽ›Ë›[R[\œÙXÝ[Û‹]\š[™ÎœË™]\š[™ËÚYÝÓX\[˜X›YœÚYÝÓX\™[˜X›Y	‰š›[™ÝŒÚYÝÓX\\NœÚYÝÓX\\KÛ™SX\[™Îž]\ÙSYØXÞSYÚÎ—Ý\ÙSYØXÞSYÚËXÛÙUšY[Õ^\™N‘‰‰ˆLOO\Ë›X\š\ÕšY[Õ^\™I‰”™K™Ù]˜[œÙ™\ŠË›X\˜ÛÛÜ”ÜXÙJOOOV™[][\YY[NœËœ™[][\YY[KÝX›TÚYYŒOO\ËœÚYK›\ÚYYœËœÚYOOOXK\ÙQ\XÚÚ[™ÎœË™\XÚÚ[™ÏL\XÚÚ[™ÎœË™\XÚÚ[™ß[™^]šX]S˜[YNœËš[™^]šX]S˜[YK^[œÚ[Û‘\š]˜]]™\Î™Ý	‰ˆLOO\Ë™^[œÚ[ÛœË™\š]˜]]™\Ë^[œÚ[Û‘œ˜YÑ\™Ý	‰ˆLOO\Ë™^[œÚ[ÛœË™œ˜YÑ\^[œÚ[Û‘˜]ÐY™™\œÎ™Ý	‰ˆLOO\Ë™^[œÚ[ÛœË™˜]ÐY™™\œË^[œÚ[Û”ÚY\•^\™SÑ™Ý	‰ˆLOO\Ë™^[œÚ[ÛœËœÚY\•^\™SÑ^[œÚ[ÛÛ\Ý[\Ý[˜ÙN™Ý	‰œË™^[œÚ[ÛœË˜Û\Ý[\Ý[˜ÙI‰šKš\Ê•ÑP‘ÓØÛ\ØÝ[Ù\Ý[˜ÙWŠK™[™\™\‘^[œÚ[Û‘œ˜YÑ\_Kš\Ê‘VÙœ˜Y×Ù\ŠK™[™\™\‘^[œÚ[Û‘˜]ÐY™™\œÎ_Kš\Ê•ÑP‘ÓÙ˜]×ØY™™\œ×ŠK™[™\™\‘^[œÚ[Û”ÚY\•^\™SÙ_Kš\Ê‘VÜÚY\—Ý^\™WÛÙŠK™[™\™\‘^[œÚ[Û”\˜[[ÚY\ÛÛ\[NšKš\Ê’Ò—Ü\˜[[ÜÚY\—ØÛÛ\[WŠKÝ\ÝÛT›ÙÜ˜[PØXÚRÙ^NœË˜Ý\ÝÛT›ÙÜ˜[PØXÚRÙ^J
__KÙ]›ÙÜ˜[PØXÚRÙ^N™[˜Ý[ÛŠJ^ØÛÛœÝV×NÚYŠKœÚY\’QÛ‹œ\Ú
KœÚY\’Q
NŠ‹œ\Ú
K˜Ý\ÝÛU™\^ÚY\’Q
K‹œ\Ú
K˜Ý\ÝÛQœ˜YÛY[ÚY\’Q
JK›ÚYOOYK™Yš[™\ÊY›ÜŠÛÛœÝ[ˆK™Yš[™\Ê[‹œ\Ú

K‹œ\Ú
K™Yš[™\ÖÝJNÜ™]\›ˆLOOOYKš\Ô˜]ÔÚY\“X]\šX[	‰ŠY[˜Ý[ÛŠJ^Ýœ\Ú
Kœ™XÚ\Ú[ÛŠKœ\Ú
K›Ý]]ÛÛÜ”ÜXÙJKœ\Ú
K™[“X\[ÙJKœ\Ú
K™[“X\ÝX™UU’ZYÚ
Kœ\Ú
K›X\]ŠKœ\Ú
K˜[SX\]ŠKœ\Ú
K›YÚX\]ŠKœ\Ú
K˜[ÓX\]ŠKœ\Ú
K˜[\X\]ŠKœ\Ú
K››Ü›X[X\]ŠKœ\Ú
K™\ÜXÙ[Y[X\]ŠKœ\Ú
K™[Z\ÜÚ]™SX\]ŠKœ\Ú
K›Y][™\ÜÓX\]ŠKœ\Ú
Kœ›ÝYÚ™\ÜÓX\]ŠKœ\Ú
K˜[š\ÛÝ›ÜSX\]ŠKœ\Ú
K˜ÛX\˜ÛØ]X\]ŠKœ\Ú
K˜ÛX\˜ÛØ]›Ü›X[X\]ŠKœ\Ú
K˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\]ŠKœ\Ú
Kš\šY\ØÙ[˜ÙSX\]ŠKœ\Ú
Kš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\]ŠKœ\Ú
KœÚY[ÛÛÜ“X\]ŠKœ\Ú
KœÚY[”›ÝYÚ™\ÜÓX\]ŠKœ\Ú
KœÜXÝ[\“X\]ŠKœ\Ú
KœÜXÝ[\ÛÛÜ“X\]ŠKœ\Ú
KœÜXÝ[\’[[œÚ]SX\]ŠKœ\Ú
K˜[œÛZ\ÜÚ[Û“X\]ŠKœ\Ú
KXÚÛ™\ÜÓX\]ŠKœ\Ú
K˜ÛÛXš[™JKœ\Ú
K™›ÙÑ^ŠKœ\Ú
KœÚ^™P][X][ÛŠKœ\Ú
K›[Üœ\™Ù]ÐÛÝ[
Kœ\Ú
K›[Üœ]šX]PÛÝ[
Kœ\Ú
K›[Q\“YÚÊKœ\Ú
K›[TÚ[YÚÊKœ\Ú
K›[TÜÝYÚÊKœ\Ú
K›[TÜÝYÚX\ÊKœ\Ú
K›[R[ZSYÚÊKœ\Ú
K›[T™XÝ\™XSYÚÊKœ\Ú
K›[Q\“YÚÚYÝÜÊKœ\Ú
K›[TÚ[YÚÚYÝÜÊKœ\Ú
K›[TÜÝYÚÚYÝÜÊKœ\Ú
K›[TÜÝYÚÚYÝÜÕÚ]X\ÊKœ\Ú
K›[SYÚ›Ø™\ÊKœ\Ú
KœÚYÝÓX\\JKœ\Ú
KÛ™SX\[™ÊKœ\Ú
K›[PÛ\[™Ô[™\ÊKœ\Ú
K›[PÛ\[\œÙXÝ[ÛŠKœ\Ú
K™\XÚÚ[™Ê_J‹JK[˜Ý[ÛŠJ^Û™\ØX›P[

KKš\ÕÙX‘Ó‰‰›™[˜X›J
NÙKœÝ\ÜÕ™\^^\™\É‰›™[˜X›JJNÙKš[œÝ[˜Ú[™É‰›™[˜X›JŠNÙKš[œÝ[˜Ú[™ÐÛÛÜ‰‰›™[˜X›JÊNÙK›X]Ø\	‰›™[˜X›J
NÙK™[“X\	‰›™[˜X›JJNÙK››Ü›X[X\Øš™XÝÜXÙI‰›™[˜X›JŠNÙK››Ü›X[X\[™Ù[ÜXÙI‰›™[˜X›JÊNÙK˜ÛX\˜ÛØ]	‰›™[˜X›J
NÙKš\šY\ØÙ[˜ÙI‰›™[˜X›JJNÙK˜[U\Ý	‰›™[˜X›JL
NÙK™\^ÛÛÜœÉ‰›™[˜X›JLJNÙK™\^[\É‰›™[˜X›JLŠNÙK™\^]Œ\É‰›™[˜X›JLÊNÙK™\^]ŒœÉ‰›™[˜X›JM
NÙK™\^]ŒÜÉ‰›™[˜X›JMJNÙK™\^[™Ù[É‰›™[˜X›JMŠNÙK˜[š\ÛÝ›ÜI‰›™[˜X›JMÊNÙK˜[R\Ú	‰›™[˜X›JN
NÙK˜˜]Ú[™É‰›™[˜X›JNJNÝœ\Ú
›X\ÚÊK™\ØX›P[

KK™›ÙÉ‰›™[˜X›J
NÙK\ÙQ›ÙÉ‰›™[˜X›JJNÙK™›]ÚY[™É‰›™[˜X›JŠNÙK›ÙØ\š]ZXÑ\Y™™\‰‰›™[˜X›JÊNÙKœÚÚ[›š[™É‰›™[˜X›J
NÙK›[Üœ\™Ù]É‰›™[˜X›JJNÙK›[Üœ›Ü›X[É‰›™[˜X›JŠNÙK›[ÜœÛÛÜœÉ‰›™[˜X›JÊNÙKœ™[][\YY[I‰›™[˜X›J
NÙKœÚYÝÓX\[˜X›Y	‰›™[˜X›JJNÙK\ÙSYØXÞSYÚÉ‰›™[˜X›JL
NÙK™ÝX›TÚYY	‰›™[˜X›JLJNÙK™›\ÚYY	‰›™[˜X›JLŠNÙK\ÙQ\XÚÚ[™É‰›™[˜X›JLÊNÙK™]\š[™É‰›™[˜X›JM
NÙK˜[œÛZ\ÜÚ[Û‰‰›™[˜X›JMJNÙKœÚY[‰‰›™[˜X›JMŠNÙK›Ü\]YI‰›™[˜X›JMÊNÙKœÚ[Õ]œÉ‰›™[˜X›JN
NÙK™XÛÙUšY[Õ^\™I‰›™[˜X›JNJNÝœ\Ú
›X\ÚÊ_J‹JK‹œ\Ú
›Ý]]ÛÛÜ”ÜXÙJJK‹œ\Ú
K˜Ý\ÝÛT›ÙÜ˜[PØXÚRÙ^JK‹š›Ú[Š
_KÙ][šY›Ü›\Î™[˜Ý[ÛŠ
^ØÛÛœÝOYÖÝ\WNÛ]ŽÚYŠJ^ØÛÛœÝTÜ–ÙWNÛ[œ‹˜ÛÛ™J[šY›Ü›\Ê_Y[ÙH][šY›Ü›\ÎÜ™]\›ˆŸKXÜ]Z\™T›ÙÜ˜[N™[˜Ý[ÛŠKŠ^Û]NÙ›ÜŠ]LOZ›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOZÝNÚYŠK˜ØXÚRÙ^OOO[Š^ÚOYK
ÊÚK\ÙY[Y\ÎØœ™XZß_\™]\›ˆ›ÚYOOZI‰ŠO[™]ÈXJ‹KÊKœ\Ú
JJK_K™[X\ÙT›ÙÜ˜[N™[˜Ý[ÛŠ
^ÚYŠOKK]\ÙY[Y\Ê^ØÛÛœÝOZš[™^ÙŠ
NÚÙWOZÚ›[™ÝLWKœÜ

K™\Ý›ÞJ
__K™[X\ÙTÚY\ØXÚN™[˜Ý[ÛŠ
^ØËœ™[[Ý™J
_K›ÙÜ˜[\Îš\ÜÜÙN™[˜Ý[ÛŠ
^ØË™\ÜÜÙJ
___Y[˜Ý[ÛˆJ
^Û][™]ÈÙXZÓX\Ü™]\›žÙÙ]™[˜Ý[ÛŠJ^Û]]™Ù]
JNÜ™]\›ˆ›ÚYOO[‰‰Š^ßKœÙ]
KŠJKŸK™[[Ý™N™[˜Ý[ÛŠJ^Ý™[]JJ_K\]N™[˜Ý[ÛŠK‹J^Ý™Ù]
JVÛ—OZ_K\ÜÜÙN™[˜Ý[ÛŠ
^Ý[™]ÈÙXZÓX\__Y[˜Ý[ÛˆJJ^Ü™]\›ˆ™Ü›Ý\Ü™\ˆOOYK™Ü›Ý\Ü™\Ý™Ü›Ý\Ü™\‹YK™Ü›Ý\Ü™\Žœ™[™\“Ü™\ˆOOYKœ™[™\“Ü™\Ýœ™[™\“Ü™\‹YKœ™[™\“Ü™\Ž›X]\šX[šYOOYK›X]\šX[šYÝ›X]\šX[šYYK›X]\šX[šYžˆOOYKžÝž‹YKžŽšYYKšYY[˜Ý[ÛˆXJJ^Ü™]\›ˆ™Ü›Ý\Ü™\ˆOOYK™Ü›Ý\Ü™\Ý™Ü›Ý\Ü™\‹YK™Ü›Ý\Ü™\Žœ™[™\“Ü™\ˆOOYKœ™[™\“Ü™\Ýœ™[™\“Ü™\‹YKœ™[™\“Ü™\ŽžˆOOYKžÙKž‹]žŽšYYKšYY[˜Ý[ÛˆXJ
^ØÛÛœÝV×NÛ]OLØÛÛœÝV×KOV×KV×NÙ[˜Ý[ÛˆÊ‹K‹ËKÊ^Û]]ÙWNÜ™]\›ˆ›ÚYOO[Ê^ÚY›‹šYØš™XÝ›‹Ù[ÛY]žNšKX]\šX[œ‹Ü›Ý\Ü™\ŽœË™[™\“Ü™\Ž›‹œ™[™\“Ü™\‹Ž˜KÜ›Ý\›ßKÙWO[
NŠšY[‹šY›Øš™XÝ[‹™Ù[ÛY]žOZK›X]\šX[\‹™Ü›Ý\Ü™\\Ëœ™[™\“Ü™\[‹œ™[™\“Ü™\‹žXK™Ü›Ý\[ÊKJÊË\™]\›žÛÜ\]YN›‹˜[œÛZ\ÜÚ]™NšK˜[œÜ\™[œ‹[š]™[˜Ý[ÛŠ
^ÙOL‹›[™ÝLK›[™ÝL‹›[™ÝLK\Ú™[˜Ý[ÛŠKKËÊ^ØÛÛœÝ\ÊKKËÊNØK˜[œÛZ\ÜÚ[ÛŒÚKœ\Ú

NˆLOOXK˜[œÜ\™[Ü‹œ\Ú

N›‹œ\Ú

_K[œÚY™[˜Ý[ÛŠKKËÊ^ØÛÛœÝ\ÊKKËÊNØK˜[œÛZ\ÜÚ[ÛŒÚK[œÚY

NˆLOOXK˜[œÜ\™[Ü‹[œÚY

N›‹[œÚY

_Kš[š\Ú™[˜Ý[ÛŠ
^Ù›ÜŠ]YKO]›[™ÝÛNÛŠÊÊ^ØÛÛœÝO]Û—NÚYŠ[OOYKšY
Xœ™XZÎÙKšY[[K›Øš™XÝ[[K™Ù[ÛY]žO[[K›X]\šX[[[K™Ü›Ý\[[_KÛÜ™[˜Ý[ÛŠJ^Û‹›[™ÝŒI‰›‹œÛÜ
JKK›[™ÝŒI‰šKœÛÜ
_XJK‹›[™ÝŒI‰œ‹œÛÜ
_XJ___Y[˜Ý[ÛˆJ
^Û][™]ÈÙXZÓX\Ü™]\›žÙÙ]™[˜Ý[ÛŠKŠ^ØÛÛœÝO]™Ù]
JNÛ]ŽÜ™]\›ˆ›ÚYOOZOÊ[™]ÈXKœÙ]
KÜ—JJN›ZK›[™ÝÊ[™]ÈXKKœ\Ú
ŠJNœZVÛ—KŸK\ÜÜÙN™[˜Ý[ÛŠ
^Ý[™]ÈÙXZÓX\__Y[˜Ý[Ûˆ˜J
^ØÛÛœÝ^ßNÜ™]\›žÙÙ]™[˜Ý[ÛŠJ^ÚYŠ›ÚYOO]ÙKšYJ\™]\›ˆÙKšYNÛ]ŽÜÝÚ]Ú
K\J^ØØ\ÙW‘\™XÝ[Û˜[YÚŽ›^Ù\™XÝ[ÛŽ›™]ÈÙKÛÛÜŽ›™]ÈÚ_NØœ™XZÎØØ\ÙW”ÜÝYÚŽ›^ÜÜÚ][ÛŽ›™]ÈÙK\™XÝ[ÛŽ›™]ÈÙKÛÛÜŽ›™]ÈÚK\Ý[˜ÙNŒÛÛ™PÛÜÎŒ[[Xœ˜PÛÜÎŒXØ^NŒNØœ™XZÎØØ\ÙW”Ú[YÚŽ›^ÜÜÚ][ÛŽ›™]ÈÙKÛÛÜŽ›™]ÈÚK\Ý[˜ÙNŒXØ^NŒNØœ™XZÎØØ\ÙW’[Z\Ü\™SYÚŽ›^Ù\™XÝ[ÛŽ›™]ÈÙKÚÞPÛÛÜŽ›™]ÈÚKÜ›Ý[™ÛÛÜŽ›™]ÈÚ_NØœ™XZÎØØ\ÙW”™XÝ\™XSYÚŽ›^ØÛÛÜŽ›™]ÈÚKÜÚ][ÛŽ›™]ÈÙK[•ÚY›™]ÈÙK[’ZYÚ›™]ÈÙ__\™]\›ˆÙKšYO[‹Ÿ__[]ØOLÙ[˜Ý[Ûˆ˜JJ^Ü™]\›ŠK˜Ø\ÝÚYÝÏÌŽŒ
KJ˜Ø\ÝÚYÝÏÌŽŒ
JÊK›X\ÌNŒ
KJ›X\ÌNŒ
_Y[˜Ý[Ûˆ˜JJ^ØÛÛœÝ[™]È˜KOY[˜Ý[ÛŠ
^ØÛÛœÝ^ßNÜ™]\›žÙÙ]™[˜Ý[ÛŠJ^ÚYŠ›ÚYOO]ÙKšYJ\™]\›ˆÙKšYNÛ]ŽÜÝÚ]Ú
K\J^ØØ\ÙW‘\™XÝ[Û˜[YÚŽ˜Ø\ÙW”ÜÝYÚŽ›^ÜÚYÝÐšX\ÎŒÚYÝÓ›Ü›X[šX\ÎŒÚYÝÔ˜Y]\ÎŒKÚYÝÓX\Ú^™N›™]ÈY_NØœ™XZÎØØ\ÙW”Ú[YÚŽ›^ÜÚYÝÐšX\ÎŒÚYÝÓ›Ü›X[šX\ÎŒÚYÝÔ˜Y]\ÎŒKÚYÝÓX\Ú^™N›™]ÈYKÚYÝÐØ[Y\˜S™X\ŽŒKÚYÝÐØ[Y\˜Q˜\ŽŒYLß_\™]\›ˆÙKšYO[‹Ÿ__J
K^Ý™\œÚ[ÛŽŒ\ÚžÙ\™XÝ[Û˜[[™Ý‹LKÚ[[™Ý‹LKÜÝ[™Ý‹LK™XÝ\™XS[™Ý‹LK[ZS[™Ý‹LK[Q\™XÝ[Û˜[ÚYÝÜÎ‹LK[TÚ[ÚYÝÜÎ‹LK[TÜÝÚYÝÜÎ‹LK[TÜÝX\Î‹LK[SYÚ›Ø™\Î‹L_K[XšY[–ÌK›Ø™N–×K\™XÝ[Û˜[–×K\™XÝ[Û˜[ÚYÝÎ–×K\™XÝ[Û˜[ÚYÝÓX\–×K\™XÝ[Û˜[ÚYÝÓX]š^–×KÜÝ–×KÜÝYÚX\–×KÜÝÚYÝÎ–×KÜÝÚYÝÓX\–×KÜÝYÚX]š^–×K™XÝ\™XN–×K™XÝ\™XSÌN›[™XÝ\™XSÌŽ›[Ú[–×KÚ[ÚYÝÎ–×KÚ[ÚYÝÓX\–×KÚ[ÚYÝÓX]š^–×K[ZN–×K[TÜÝYÚÚYÝÜÕÚ]X\ÎŒ[SYÚ›Ø™\ÎŒNÙ›ÜŠ]LÝNÝ
ÊÊ\‹œ›Ø™Kœ\Ú
™]ÈÙJNØÛÛœÝÏ[™]ÈÙKO[™]È[‹Ï[™]È[ŽÜ™]\›žÜÙ]\™[˜Ý[ÛŠËJ^Û]ÏLLÏLÙ›ÜŠ]LÝNÝ
ÊÊ\‹œ›Ø™VÝKœÙ]

NÛ]LOLLLOLLÏLÏLLLOLÜËœÛÜ
˜JNØÛÛœÝOHLOOXOÓX]”NŒNÙ›ÜŠ]LO\Ë›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO\ÖÝKOYK˜ÛÛÜ‹ÏYKš[[œÚ]KYK™\Ý[˜ÙKYKœÚYÝÉ‰™KœÚYÝË›X\ÙKœÚYÝË›X\^\™N›[ÚYŠKš\Ð[XšY[YÚ
[ÊÏXKœŠ”Ê“K
ÏXK™Ê”Ê“KÊÏXK˜Š”Ê“NÙ[ÙHYŠKš\ÓYÚ›Ø™J^Ù›ÜŠ]LÝNÝ
ÊÊ\‹œ›Ø™VÝK˜YØØ[Y™XÝÜŠKœÚ˜ÛÙY™šXÚY[ÖÝKÊNÞJÊßY[ÙHYŠKš\Ñ\™XÝ[Û˜[YÚ
^ØÛÛœÝ[‹™Ù]
JNÚYŠ˜ÛÛÜ‹˜ÛÜJK˜ÛÛÜŠK›][\TØØ[\ŠKš[[œÚ]J“JKK˜Ø\ÝÚYÝÊ^ØÛÛœÝYKœÚYÝËZK™Ù]
JNÛ‹œÚYÝÐšX\Ï]˜šX\Ë‹œÚYÝÓ›Ü›X[šX\Ï]››Ü›X[šX\Ë‹œÚYÝÔ˜Y]\Ï]œ˜Y]\Ë‹œÚYÝÓX\Ú^™O]›X\Ú^™K‹™\™XÝ[Û˜[ÚYÝÖÚO[‹‹™\™XÝ[Û˜[ÚYÝÓX\ÚOU‹™\™XÝ[Û˜[ÚYÝÓX]š^ÚOYKœÚYÝË›X]š^ŠÊß\‹™\™XÝ[Û˜[ÚO]
ÊßY[ÙHYŠKš\ÔÜÝYÚ
^ØÛÛœÝ[‹™Ù]
JNÝœÜÚ][Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠK›X]š^ÛÜ›
K˜ÛÛÜ‹˜ÛÜJJK›][\TØØ[\ŠÊ“JK™\Ý[˜ÙOX‹˜ÛÛ™PÛÜÏSX]˜ÛÜÊK˜[™ÛJKœ[[Xœ˜PÛÜÏSX]˜ÛÜÊK˜[™ÛJŠKYKœ[[Xœ˜JJK™XØ^OYK™XØ^K‹œÜÝÙO]ØÛÛœÝÏYKœÚYÝÎÚYŠK›X\	‰Š‹œÜÝYÚX\Ý—OYK›X\ŠÊËË\]SX]šXÙ\ÊJKK˜Ø\ÝÚYÝÉ‰ž
ÊÊK‹œÜÝYÚX]š^ÙO\Ë›X]š^K˜Ø\ÝÚYÝÊ^ØÛÛœÝZK™Ù]
JNÝœÚYÝÐšX\Ï\Ë˜šX\ËœÚYÝÓ›Ü›X[šX\Ï\Ë››Ü›X[šX\ËœÚYÝÔ˜Y]\Ï\Ëœ˜Y]\ËœÚYÝÓX\Ú^™O\Ë›X\Ú^™K‹œÜÝÚYÝÖÙO]‹œÜÝÚYÝÓX\ÙOUÊÊßY
ÊßY[ÙHYŠKš\Ô™XÝ\™XSYÚ
^ØÛÛœÝ[‹™Ù]
JNÝ˜ÛÛÜ‹˜ÛÜJJK›][\TØØ[\ŠÊKš[•ÚYœÙ]
J™KÚY
Kš[’ZYÚœÙ]
J™KšZYÚ
K‹œ™XÝ\™XVÜO]
ÊßY[ÙHYŠKš\ÔÚ[YÚ
^ØÛÛœÝ[‹™Ù]
JNÚYŠ˜ÛÛÜ‹˜ÛÜJK˜ÛÛÜŠK›][\TØØ[\ŠKš[[œÚ]J“JK™\Ý[˜ÙOYK™\Ý[˜ÙK™XØ^OYK™XØ^KK˜Ø\ÝÚYÝÊ^ØÛÛœÝYKœÚYÝËZK™Ù]
JNÛ‹œÚYÝÐšX\Ï]˜šX\Ë‹œÚYÝÓ›Ü›X[šX\Ï]››Ü›X[šX\Ë‹œÚYÝÔ˜Y]\Ï]œ˜Y]\Ë‹œÚYÝÓX\Ú^™O]›X\Ú^™K‹œÚYÝÐØ[Y\˜S™X\]˜Ø[Y\˜K›™X\‹‹œÚYÝÐØ[Y\˜Q˜\]˜Ø[Y\˜K™˜\‹‹œÚ[ÚYÝÖÝWO[‹‹œÚ[ÚYÝÓX\ÝWOU‹œÚ[ÚYÝÓX]š^ÝWOYKœÚYÝË›X]š^ÊÊß\‹œÚ[ÝWO]JÊßY[ÙHYŠKš\Ò[Z\Ü\™SYÚ
^ØÛÛœÝ[‹™Ù]
JNÝœÚÞPÛÛÜ‹˜ÛÜJK˜ÛÛÜŠK›][\TØØ[\ŠÊ“JK™Ü›Ý[™ÛÛÜ‹˜ÛÜJK™Ü›Ý[™ÛÛÜŠK›][\TØØ[\ŠÊ“JK‹š[ZVÛWO]JÊß_\Œ	‰ŠKš\ÕÙX‘ÓÈLOO]š\Ê“ÑT×Ý^\™WÙ›Ø]Û[™X\—ŠOÊ‹œ™XÝ\™XSÌOS\‹“×Ñ“ÐUÌK‹œ™XÝ\™XSÌS\‹“×Ñ“ÐUÌŠNŠ‹œ™XÝ\™XSÌOS\‹“×ÒS—ÌK‹œ™XÝ\™XSÌS\‹“×ÒS—ÌŠNˆLOO]š\Ê“ÑT×Ý^\™WÙ›Ø]Û[™X\—ŠOÊ‹œ™XÝ\™XSÌOS\‹“×Ñ“ÐUÌK‹œ™XÝ\™XSÌS\‹“×Ñ“ÐUÌŠNˆLOO]š\Ê“ÑT×Ý^\™WÚ[—Ù›Ø]Û[™X\—ŠOÊ‹œ™XÝ\™XSÌOS\‹“×ÒS—ÌK‹œ™XÝ\™XSÌS\‹“×ÒS—ÌŠN˜ÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\Žˆ[˜X›HÈ\ÙH™XÝ\™XSYÚˆZ\ÜÚ[™ÈÙX‘Ó^[œÚ[ÛœË—ŠJK‹˜[XšY[ÌO[Ë‹˜[XšY[ÌWO[‹˜[XšY[Ì—OXÎØÛÛœÝÏ\‹š\ÚÔË™\™XÝ[Û˜[[™ÝOOZ	‰”ËœÚ[[™ÝOO]I‰”ËœÜÝ[™ÝOOY	‰”Ëœ™XÝ\™XS[™ÝOO\	‰”Ëš[ZS[™ÝOO[I‰”Ë›[Q\™XÝ[Û˜[ÚYÝÜÏOOY‰‰”Ë›[TÚ[ÚYÝÜÏOOYÉ‰”Ë›[TÜÝÚYÝÜÏOOWÉ‰”Ë›[TÜÝX\ÏOO]‰‰”Ë›[SYÚ›Ø™\ÏOO^_
‹™\™XÝ[Û˜[›[™ÝZ‹œÜÝ›[™ÝY‹œ™XÝ\™XK›[™Ý\‹œÚ[›[™Ý]K‹š[ZK›[™Ý[K‹™\™XÝ[Û˜[ÚYÝË›[™ÝY‹‹™\™XÝ[Û˜[ÚYÝÓX\›[™ÝY‹‹œÚ[ÚYÝË›[™ÝYË‹œÚ[ÚYÝÓX\›[™ÝYË‹œÜÝÚYÝË›[™ÝWË‹œÜÝÚYÝÓX\›[™ÝWË‹™\™XÝ[Û˜[ÚYÝÓX]š^›[™ÝY‹‹œÚ[ÚYÝÓX]š^›[™ÝYË‹œÜÝYÚX]š^›[™ÝWÊÝ‹^‹œÜÝYÚX\›[™Ý]‹‹›[TÜÝYÚÚYÝÜÕÚ]X\Ï^‹›[SYÚ›Ø™\Ï^KË™\™XÝ[Û˜[[™ÝZËœÚ[[™Ý]KËœÜÝ[™ÝYËœ™XÝ\™XS[™Ý\Ëš[ZS[™Ý[KË›[Q\™XÝ[Û˜[ÚYÝÜÏY‹Ë›[TÚ[ÚYÝÜÏYËË›[TÜÝÚYÝÜÏWËË›[TÜÝX\Ï]‹Ë›[SYÚ›Ø™\Ï^K‹™\œÚ[ÛSØJÊÊ_KÙ]\šY]Î™[˜Ý[ÛŠJ^Û]LOLLÏLLØÛÛœÝOYK›X]š^ÛÜ›[™\œÙNÙ›ÜŠ]OL]›[™ÝÙOÙJÊÊ^ØÛÛœÝ]ÙWNÚYŠš\Ñ\™XÝ[Û˜[YÚ
^ØÛÛœÝ\‹™\™XÝ[Û˜[Û—NÝ™\™XÝ[Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
KËœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\™Ù]›X]š^ÛÜ›
K™\™XÝ[Û‹œÝXŠÊK™\™XÝ[Û‹˜[œÙ›Ü›Q\™XÝ[ÛŠJKŠÊßY[ÙHYŠš\ÔÜÝYÚ
^ØÛÛœÝ\‹œÜÝÛNÝœÜÚ][Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
KœÜÚ][Û‹˜\SX]š^
JK™\™XÝ[Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
KËœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\™Ù]›X]š^ÛÜ›
K™\™XÝ[Û‹œÝXŠÊK™\™XÝ[Û‹˜[œÙ›Ü›Q\™XÝ[ÛŠJK
ÊßY[ÙHYŠš\Ô™XÝ\™XSYÚ
^ØÛÛœÝ\‹œ™XÝ\™XVØ×NÝœÜÚ][Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
KœÜÚ][Û‹˜\SX]š^
JKËšY[]J
KK˜ÛÜJ›X]š^ÛÜ›
KKœ™[][\JJKË™^˜XÝ›Ý][ÛŠJKš[•ÚYœÙ]
J™ÚY
Kš[’ZYÚœÙ]
J™šZYÚ
Kš[•ÚY˜\SX]š^
ÊKš[’ZYÚ˜\SX]š^
ÊKÊÊßY[ÙHYŠš\ÔÚ[YÚ
^ØÛÛœÝ\‹œÚ[ÚWNÝœÜÚ][Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
KœÜÚ][Û‹˜\SX]š^
JKJÊßY[ÙHYŠš\Ò[Z\Ü\™SYÚ
^ØÛÛœÝ\‹š[ZVÚNÝ™\™XÝ[Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
K™\™XÝ[Û‹˜[œÙ›Ü›Q\™XÝ[ÛŠJK
Êß__KÝ]NœŸ_Y[˜Ý[Ûˆ˜JJ^ØÛÛœÝ[™]È˜JJKOV×KV×NÜ™]\›žÚ[š]™[˜Ý[ÛŠ
^ÚK›[™ÝL‹›[™ÝLKÝ]NžÛYÚÐ\œ˜^NšKÚYÝÜÐ\œ˜^Nœ‹YÚÎ›ŸKÙ]\YÚÎ™[˜Ý[ÛŠ
^Û‹œÙ]\
K
_KÙ]\YÚÕšY]Î™[˜Ý[ÛŠ
^Û‹œÙ]\šY]ÊK
_K\ÚYÚ™[˜Ý[ÛŠ
^ÚKœ\Ú

_K\ÚÚYÝÎ™[˜Ý[ÛŠ
^Ü‹œ\Ú

___Y[˜Ý[ÛˆØJJ^Û][™]ÈÙXZÓX\Ü™]\›žÙÙ]™[˜Ý[ÛŠKL
^ØÛÛœÝÏ[‹™Ù]
JNÛ]NÜ™]\›ˆ›ÚYOO\ÏÊO[™]È˜JJK‹œÙ]
KØWJJNœ\Ë›[™ÝÊO[™]È˜JJKËœ\Ú
JJN˜O\ÖÜ—K_K\ÜÜÙN™[˜Ý[ÛŠ
^Û[™]ÈÙXZÓX\__XÛ\ÜÈH^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\Ú\X]\šX[HL\Ë\OW“Y\Ú\X]\šX[‹\Ë™\XÚÚ[™ÏLÌŒ\Ë›X\[[\Ë˜[SX\[[\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\ËÚ\™Yœ˜[YOHLK\ËÚ\™Yœ˜[YS[™]ÚYLK\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë™\XÚÚ[™Ï]™\XÚÚ[™Ë\Ë›X\]›X\\Ë˜[SX\]˜[SX\\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\ËÚ\™Yœ˜[YO]Ú\™Yœ˜[YK\ËÚ\™Yœ˜[YS[™]ÚY]Ú\™Yœ˜[YS[™]ÚY\ß_XÛ\ÜÈ˜H^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\Ú\Ý[˜ÙSX]\šX[HL\Ë\OW“Y\Ú\Ý[˜ÙSX]\šX[‹\Ë›X\[[\Ë˜[SX\[[\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë›X\]›X\\Ë˜[SX\]˜[SX\\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\ß_Y[˜Ý[ÛˆØJKJ^Û]Ï[™]ÈÜŽØÛÛœÝ[™]ÈYKÏ[™]ÈYK[™]È™KO[™]ÈJÙ\XÚÚ[™ÎŒÌŒ_JK[™]È˜K^ßKOZK›X^^\™TÚ^™K^ÖÜ×N˜KØWNœËŽŒŸKÏ[™]È\ŠÙYš[™\ÎžÕ”ÓWÔÐSTTÎŽK[šY›Ü›\ÎžÜÚYÝ×Ü\ÜÎžÝ˜[YN›[K™\ÛÛ][ÛŽžÝ˜[YN›™]ÈY_K˜Y]\ÎžÝ˜[YN_K™\^ÚY\Ž—›ÚYXZ[Š
H×—ÛÔÜÚ][ÛˆH™XÍ
ÜÚ][Û‹KŒ
N×ŸW‹œ˜YÛY[ÚY\Ž—[šY›Ü›HØ[\\Œ‘ÚYÝ×Ü\ÜÎ×[šY›Ü›H™XÌˆ™\ÛÛ][ÛŽ×[šY›Ü›H›Ø]˜Y]\Î×ˆÚ[˜ÛYHXÚÚ[™Ï—›ÚYXZ[Š
H×—ÛÛœÝ›Ø]Ø[\\ÈH›Ø]
”ÓWÔÐSTTÈ
N×—›Ø]YX[ˆHŒ×—›Ø]Ü]X\™YÛYX[ˆHŒ×—›Ø]]”ÝšYHHØ[\\ÈHKŒÈŒˆ‹ŒÈ
Ø[\\ÈHKŒ
N×—›Ø]]”Ý\HØ[\\ÈHKŒÈŒˆHKŒ×—›Üˆ
›Ø]HHŒÈHØ[\\ÎÈH
ÊÈ
H×—›Ø]]“Ù™œÙ]H]”Ý\
ÈH
ˆ]”ÝšYN×—ÚY™YˆÔ’V“Ó•SÔTÔ×—™XÌˆ\ÝšX][ÛˆH[œXÚÔ‘ÐUÌ’[Š^\™L‘
ÚYÝ×Ü\ÜË
ÛÑœ˜YÐÛÛÜ™žH
È™XÌŠ]“Ù™œÙ]Œ
H
ˆ˜Y]\È
HÈ™\ÛÛ][Ûˆ
H
N×—YX[ˆ
ÏH\ÝšX][Û‹ž×—Ü]X\™YÛYX[ˆ
ÏH\ÝšX][Û‹žH
ˆ\ÝšX][Û‹žH
È\ÝšX][Û‹ž
ˆ\ÝšX][Û‹ž×—Ù[ÙW—›Ø]\H[œXÚÔ‘ÐUÑ\
^\™L‘
ÚYÝ×Ü\ÜË
ÛÑœ˜YÐÛÛÜ™žH
È™XÌŠŒ]“Ù™œÙ]
H
ˆ˜Y]\È
HÈ™\ÛÛ][Ûˆ
H
N×—YX[ˆ
ÏH\×—Ü]X\™YÛYX[ˆ
ÏH\
ˆ\×—Ù[™Y——W—YX[ˆHYX[ˆÈØ[\\Î×—Ü]X\™YÛYX[ˆHÜ]X\™YÛYX[ˆÈØ[\\Î×—›Ø]ÝÙ]ˆHÜ\
Ü]X\™YÛYX[ˆHYX[ˆ
ˆYX[ˆ
N×—ÛÑœ˜YÐÛÛÜˆHXÚÌ’[•Ô‘ÐJ™XÌŠYX[‹ÝÙ]ˆ
H
N×ŸWŸJKÏYË˜ÛÛ™J
N×Ë™Yš[™\Ë’Ô’V“Ó•SÔTÔÏLNØÛÛœÝ[™]ÈZNÝ‹œÙ]]šX]JœÜÚ][Û—‹™]ÈZJ™]È›Ø]Ì\œ˜^JËLKLKKËLKKLKËWJKÊJNØÛÛœÝ[™]ÈšJ‹ÊKO]\ÎÝ\Ë™[˜X›YHLK\Ë˜]]Õ\]OHL\Ë›™YYÕ\]OHLK\Ë\O[ŽÛ]O]\Ë\NÙ[˜Ý[ÛˆÊ‹J^ØÛÛœÝYK\]J
NÙË™Yš[™\Ë•”ÓWÔÐSTTÈOO[‹˜›\”Ø[\\É‰ŠË™Yš[™\Ë•”ÓWÔÐSTTÏ[‹˜›\”Ø[\\ËË™Yš[™\Ë•”ÓWÔÐSTTÏ[‹˜›\”Ø[\\ËË›™YYÕ\]OHLË›™YYÕ\]OHL
K[OO[‹›X\\ÜÉ‰Š‹›X\\ÜÏ[™]ÈÙJžžJJKË[šY›Ü›\ËœÚYÝ×Ü\ÜË˜[YO[‹›X\^\™KË[šY›Ü›\Ëœ™\ÛÛ][Û‹˜[YO[‹›X\Ú^™KË[šY›Ü›\Ëœ˜Y]\Ë˜[YO[‹œ˜Y]\ËœÙ]™[™\•\™Ù]
‹›X\\ÜÊK˜ÛX\Š
Kœ™[™\Y™™\‘\™XÝ
K[‹Ë[
KË[šY›Ü›\ËœÚYÝ×Ü\ÜË˜[YO[‹›X\\ÜË^\™KË[šY›Ü›\Ëœ™\ÛÛ][Û‹˜[YO[‹›X\Ú^™KË[šY›Ü›\Ëœ˜Y]\Ë˜[YO[‹œ˜Y]\ËœÙ]™[™\•\™Ù]
‹›X\
K˜ÛX\Š
Kœ™[™\Y™™\‘\™XÝ
K[‹Ë[
_Y[˜Ý[ÛˆŠK‹KÊ^Û]O[[ØÛÛœÝÏHLOOZKš\ÔÚ[YÚÙK˜Ý\ÝÛQ\Ý[˜ÙSX]\šX[™K˜Ý\ÝÛQ\X]\šX[ÚYŠ›ÚYOO[ÊXO[ÎÙ[ÙHYŠOHLOOZKš\ÔÚ[YÚÙK›ØØ[Û\[™Ñ[˜X›Y	‰ˆLOO[‹˜Û\ÚYÝÜÉ‰\œ˜^Kš\Ð\œ˜^J‹˜Û\[™Ô[™\ÊI‰ŒOO[‹˜Û\[™Ô[™\Ë›[™Ý‹™\ÜXÙ[Y[X\	‰ŒOO[‹™\ÜXÙ[Y[ØØ[_‹˜[SX\	‰›‹˜[U\ÝŒ‹›X\	‰›‹˜[U\ÝŒ
^ØÛÛœÝXK]ZYO[‹]ZYÛ]O\ÝNÝ›ÚYOOZI‰ŠO^ßKÝOZJNÛ]ZVÙWNÝ›ÚYOO\‰‰ŠXK˜ÛÛ™J
KVÙWO\‹‹˜Y]™[\Ý[™\Š™\ÜÜÙW‹JJKO\ŸZYŠKš\ÚX›O[‹š\ÚX›KKÚ\™Yœ˜[YO[‹Ú\™Yœ˜[YKKœÚYO\ÏOO\Û[OO[‹œÚYÝÔÚYOÛ‹œÚYÝÔÚYN›‹œÚYN›[OO[‹œÚYÝÔÚYOÛ‹œÚYÝÔÚYN™–Û‹œÚYWKK˜[SX\[‹˜[SX\K˜[U\Ý[‹˜[U\ÝK›X\[‹›X\K˜Û\ÚYÝÜÏ[‹˜Û\ÚYÝÜËK˜Û\[™Ô[™\Ï[‹˜Û\[™Ô[™\ËK˜Û\[\œÙXÝ[Û[‹˜Û\[\œÙXÝ[Û‹K™\ÜXÙ[Y[X\[‹™\ÜXÙ[Y[X\K™\ÜXÙ[Y[ØØ[O[‹™\ÜXÙ[Y[ØØ[KK™\ÜXÙ[Y[šX\Ï[‹™\ÜXÙ[Y[šX\ËKÚ\™Yœ˜[YS[™]ÚY[‹Ú\™Yœ˜[YS[™]ÚYK›[™]ÚY[‹›[™]ÚYLOOZKš\ÔÚ[YÚ	‰ˆLOOXKš\ÓY\Ú\Ý[˜ÙSX]\šX[
^Ýœ›Ü\Y\Ë™Ù]
JK›YÚZ_\™]\›ˆ_Y[˜Ý[Ûˆ
‹KËK
^ÚYŠLOOO[‹š\ÚX›J\™]\›ŽÚYŠ‹›^Y\œË\Ý
K›^Y\œÊI‰Š‹š\ÓY\Ú‹š\Ó[™_‹š\ÔÚ[ÊI‰Š‹˜Ø\ÝÚYÝß‹œ™XÙZ]™TÚYÝÉ‰›OO\ŠI‰Š[‹™œ\Ý[PÝ[YËš[\œÙXÝÓØš™XÝ
ŠJJ^Û‹›[Ù[šY]ÓX]š^›][\SX]šXÙ\ÊË›X]š^ÛÜ›[™\œÙK‹›X]š^ÛÜ›
NØÛÛœÝYK\]JŠKÏ[‹›X]\šX[ÚYŠ\œ˜^Kš\Ð\œ˜^JÊJ^ØÛÛœÝO\‹™Ü›Ý\ÎÙ›ÜŠ]ÏLYK›[™ÝØÏØÊÊÊ^ØÛÛœÝYVØ×KO[ÖÚ›X]\šX[[™^NÚYŠI‰Kš\ÚX›J^ØÛÛœÝOXŠ‹KK
NÛ‹›Û™Y›Ü™TÚYÝÊ‹KË‹K
Kœ™[™\Y™™\‘\™XÝ
Ë[‹K‹
K‹›ÛY\”ÚYÝÊ‹KË‹K
___Y[ÙHYŠËš\ÚX›J^ØÛÛœÝOXŠ‹ËK
NÛ‹›Û™Y›Ü™TÚYÝÊ‹KË‹K[
Kœ™[™\Y™™\‘\™XÝ
Ë[‹K‹[
K‹›ÛY\”ÚYÝÊ‹KË‹K[
__XÛÛœÝÏ[‹˜Ú[™[ŽÙ›ÜŠ]LOXË›[™ÝÝNÝ
ÊÊU
ÖÝKKËK
_Y[˜Ý[ÛˆJ
^Ý\™Ù]œ™[[Ý™Q]™[\Ý[™\Š™\ÜÜÙW‹JNÙ›ÜŠÛÛœÝH[ˆ
^ØÛÛœÝ\ÙWKO]\™Ù]]ZYÚYŠH[ˆŠ^Û–ÚWK™\ÜÜÙJ
K[]H–ÚW___]\Ëœ™[™\Y[˜Ý[ÛŠK‹J^ÚYŠLOOO^K™[˜X›Y
\™]\›ŽÚYŠLOOO^K˜]]Õ\]I‰ˆLOOO^K›™YYÕ\]J\™]\›ŽÚYŠOOYK›[™Ý
\™]\›ŽØÛÛœÝÏ]™Ù]™[™\•\™Ù]

KO]™Ù]XÝ]™PÝX™Q˜XÙJ
KO]™Ù]XÝ]™SZ\X\]™[

K]œÝ]NÙœÙ]›[™[™Ê
K˜Y™™\œË˜ÛÛÜ‹œÙ]ÛX\ŠKKKJK˜Y™™\œË™\œÙ]\Ý
L
KœÙ]ØÚ\ÜÛÜ•\Ý
LJNØÛÛœÝSHOO\‰‰\Ë\OOO\‹SOOO\‰‰\Ë\HOO\ŽÙ›ÜŠ]ÏLOYK›[™ÝÜÏNÜÊÊÊ^ØÛÛœÝOYVÜ×KOXKœÚYÝÎÚYŠ›ÚYOO]J^ØÛÛœÛÛKØ\›Š•‘QK•ÙX‘ÓÚYÝÓX\—‹Kš\È›ÈÚYÝË—ŠNØÛÛ[Y_ZYŠLOOO]K˜]]Õ\]I‰ˆLOOO]K›™YYÕ\]JXÛÛ[YNÛ˜ÛÜJK›X\Ú^™JNØÛÛœÝÏ]K™Ù]œ˜[YQ^[Ê
NÚYŠ›][\JÊKË˜ÛÜJK›X\Ú^™JK
ž›_žO›JI‰Šž›I‰ŠËžSX]™›ÛÜŠKÙËž
KžXËž
™ËžK›X\Ú^™KžXËž
KžO›I‰ŠËžOSX]™›ÛÜŠKÙËžJKžOXËžJ™ËžKK›X\Ú^™KžOXËžJJK[OO]K›X\LOO\LOOYŠ^ØÛÛœÝ]\Ë\HOO\ÞÛZ[‘š[\Ž”XYÑš[\Ž”NžßNÛ[OO]K›X\	‰K›X\™\ÜÜÙJ
KK›X\[™]ÈÙJžžK
KK›X\^\™K›˜[YOXK›˜[YJ×‹œÚYÝÓX\‹K˜Ø[Y\˜K\]T›Ú™XÝ[Û“X]š^

_]œÙ]™[™\•\™Ù]
K›X\
K˜ÛX\Š
NØÛÛœÝÏ]K™Ù]šY]ÜÜÛÝ[

NÙ›ÜŠ]LÝÎÝ
ÊÊ^ØÛÛœÝO]K™Ù]šY]ÜÜ

NÚœÙ]
Ëž
™KžËžJ™KžKËž
™Kž‹ËžJ™KÊKšY]ÜÜ

KK\]SX]šXÙ\ÊK
KÏ]K™Ù]œ\Ý[J
K
‹KK˜Ø[Y\˜KK\Ë\J_HLOO]Kš\ÔÚ[YÚÚYÝÉ‰\Ë\OOO\‰‰”ÊKJKK›™YYÕ\]OHL_SO]\Ë\KK›™YYÕ\]OHLKœÙ]™[™\•\™Ù]
ËKJ__Y[˜Ý[ÛˆØJKŠ^ØÛÛœÝO[‹š\ÕÙX‘ÓŽØÛÛœÝ[™]È[˜Ý[ÛŠ
^Û]OHLNØÛÛœÝ[™]È™NÛ]O[[ØÛÛœÝ[™]È™J
NÜ™]\›žÜÙ]X\ÚÎ™[˜Ý[ÛŠŠ^ÚOOO[Ÿ_
˜ÛÛÜ“X\ÚÊ‹‹‹ŠKO[Š_KÙ]ØÚÙY™[˜Ý[ÛŠ
^ÙO]KÙ]ÛX\Ž™[˜Ý[ÛŠKKËKÊ^ÈLOO[É‰ŠJXKJXKÊXJK‹œÙ]
KKËJKLOOO\‹™\]X[ÊŠI‰Š˜ÛX\ÛÛÜŠKKËJK‹˜ÛÜJŠJ_K™\Ù]™[˜Ý[ÛŠ
^ÙOHLKO[[‹œÙ]
LK
___KÏ[™]È[˜Ý[ÛŠ
^Û]OHLK[[O[[[[Ü™]\›žÜÙ]\Ý™[˜Ý[ÛŠJ^ÙOÚŠ‘TÕTÕ
NœJ‘TÕTÕ
_KÙ]X\ÚÎ™[˜Ý[ÛŠJ^ÛOOZ__
™\X\ÚÊJKZJ_KÙ][˜Î™[˜Ý[ÛŠJ^ÚYŠHOOYJ^ÜÝÚ]Ú
J^ØØ\ÙH™\[˜Ê“‘U‘TŠNØœ™XZÎØØ\ÙHN™\[˜ÊSÐVTÊNØœ™XZÎØØ\ÙHŽ™\[˜Ê“TÔÊNØœ™XZÎØØ\ÙHÎ™Y˜][™\[˜Ê“TUPS
NØœ™XZÎØØ\ÙH™\[˜Ê‘TUPS
NØœ™XZÎØØ\ÙHN™\[˜Ê‘ÑTUPS
NØœ™XZÎØØ\ÙHŽ™\[˜Ê‘Ô‘PUTŠNØœ™XZÎØØ\ÙHÎ™\[˜Ê““ÕTUPS
_ZOY__KÙ]ØÚÙY™[˜Ý[ÛŠ
^ÙO]KÙ]ÛX\Ž™[˜Ý[ÛŠJ^ÜˆOOYI‰Š˜ÛX\‘\
JKYJ_K™\Ù]™[˜Ý[ÛŠ
^ÙOHLK[[O[[[[__K[™]È[˜Ý[ÛŠ
^Û]OHLK[[O[[[[Ï[[O[[Ï[[[[Ï[[Ü™]\›žÜÙ]\Ý™[˜Ý[ÛŠŠ^Ù_
ÚŠ”ÕSÒSÕTÕ
NœJ”ÕSÒSÕTÕ
J_KÙ]X\ÚÎ™[˜Ý[ÛŠJ^ÛOOZ__
œÝ[˜Ú[X\ÚÊJKZJ_KÙ][˜Î™[˜Ý[ÛŠK‹J^ÚOOOYI‰œOO[‰‰œÏOOX_
œÝ[˜Ú[[˜ÊK‹JKOYK[‹ÏXJ_KÙ]Ü™[˜Ý[ÛŠK‹J^ØOOOYI‰›ÏOO[‰‰›OOZ_
œÝ[˜Ú[Ü
K‹JKOYKÏ[‹ZJ_KÙ]ØÚÙY™[˜Ý[ÛŠ
^ÙO]KÙ]ÛX\Ž™[˜Ý[ÛŠJ^ØÈOOYI‰Š˜ÛX\”Ý[˜Ú[
JKÏYJ_K™\Ù]™[˜Ý[ÛŠ
^ÙOHLK[[O[[[[Ï[[O[[Ï[[[[Ï[[__KO[™]ÈÙXZÓX\[™]ÈÙXZÓX\Û]^ßKO^ßK[™]ÈÙXZÓX\ÏV×KÏ[[HLK[[O[[O[[Ï[[[[[[O[[Ï[™]ÈÚJ
KOLHLKÏ[[[[[[O[[O[[ØÛÛœÝ]™Ù]\˜[Y]\Š“PVÐÓÓP’S‘QÕVT‘WÒSPQÑWÕS’UÊNÛ]HLKÏLØÛÛœÝ]™Ù]\˜[Y]\Š•‘T”ÒSÓŠNËLHOOQ‹š[™^ÙŠ•ÙX‘ÓŠOÊÏ\\œÙQ›Ø]
×•ÙX‘Ó

KË™^XÊŠVÌWJKSÏLJN‹LHOOQ‹š[™^ÙŠ“Ü[‘ÓT×ŠI‰ŠÏ\\œÙQ›Ø]
×“Ü[‘ÓTÈ

KË™^XÊŠVÌWJKSÏLŠNÛ][[^ßNØÛÛœÝÏ]™Ù]\˜[Y]\Š”ÐÒTÔÓÔ—Ð“Ö
K]™Ù]\˜[Y]\Š•’QUÔÔ•
KJ™]È™JK™œ›ÛP\œ˜^JÊKÏJ™]È™JK™œ›ÛP\œ˜^J
NÙ[˜Ý[ÛˆÊK‹‹Ê^ØÛÛœÝO[™]ÈZ[\œ˜^J
KÏ]˜Ü™X]U^\™J
NÝ˜š[™^\™JKÊK^\˜[Y]\šJK•VT‘WÓRS—Ñ’ST‹“‘PT‘TÕ
K^\˜[Y]\šJK•VT‘WÓPQ×Ñ’ST‹“‘PT‘TÕ
NÙ›ÜŠ]ÏLÛÏŽÛÊÊÊHZ_HOO]•VT‘WÌÑ	‰™HOO]•VT‘WÌ‘ÐT”VOÝ^[XYÙL‘
ŠÛË”‘ÐKKK”‘ÐK•S”ÒQÓ‘QÐ–UKJN^[XYÙLÑ
‹”‘ÐKKKË”‘ÐK•S”ÒQÓ‘QÐ–UKJNÜ™]\›ˆßXÛÛœÝ^ßNÙ[˜Ý[ÛˆŠJ^ÈLOO\ÙWI‰Š™[˜X›JJKÙWOHL
_Y[˜Ý[ÛˆJJ^ÈLHOO\ÙWI‰Š™\ØX›JJKÙWOHLJ_VÝ•VT‘WÌ‘OUÊ•VT‘WÌ‘•VT‘WÌ‘JKÝ•VT‘WÐÕP‘WÓPTOUÊ•VT‘WÐÕP‘WÓPT•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖŠKI‰ŠÝ•VT‘WÌ‘ÐT”VWOUÊ•VT‘WÌ‘ÐT”VK•VT‘WÌ‘ÐT”VKKJKÝ•VT‘WÌÑOUÊ•VT‘WÌÑ•VT‘WÌÑKJJK‹œÙ]ÛX\ŠJKËœÙ]ÛX\ŠJKœÙ]ÛX\Š
KŠ‘TÕTÕ
KËœÙ][˜ÊÊKÊLJK	
JKŠÕSÑPÑJKŠ
NØÛÛœÝO^ÖÛ×N‘•S×ÐQLN‘•S×ÔÕP•PÕLŽ‘•S×Ô‘U‘T”ÑWÔÕP•PÕNÚYŠJVVÌL×O]“RS‹VÌLO]“PVÙ[Ù^ØÛÛœÝYK™Ù]
‘VØ›[™ÛZ[›X^ŠNÛ[OO]	‰ŠVÌL×O]“RS—ÑVVÌLO]“PVÑV
_XÛÛœÝ^ÌŒ–‘T“ËŒN“Ó‘KŒŽ”Ô×ÐÓÓÔ‹ÛN”Ô×ÐSKŒL”Ô×ÐSWÔÐUTUKŒ‘ÕÐÓÓÔ‹ŒŽ‘ÕÐSKŒÎ“Ó‘WÓRS•T×ÔÔ×ÐÓÓÔ‹Ø×N“Ó‘WÓRS•T×ÔÔ×ÐSKŒN“Ó‘WÓRS•T×ÑÕÐÓÓÔ‹ŒÎ“Ó‘WÓRS•T×ÑÕÐSKŒLNÓÓ”ÕS•ÐÓÓÔ‹ŒLŽ“Ó‘WÓRS•T×ÐÓÓ”ÕS•ÐÓÓÔ‹ŒLÎÓÓ”ÕS•ÐSKŒM“Ó‘WÓRS•T×ÐÓÓ”ÕS•ÐS_NÙ[˜Ý[ÛˆŠK‹K‹ËKËJ^ÚYŠOOYJ^ÚYŠLOOO]‰‰ŠŠ“S‘
KHL
KOOOYJ\Ï\ß‹OX_K[‹OO^I‰œÏOOXŸ
˜›[™\]X][Û”Ù\\˜]JVÛ—KVÜ×JKO[‹\ÊKOOOSI‰œOOTÉ‰˜OOOU	‰›OOQ_
˜›[™[˜ÔÙ\\˜]J–ÚWK–Ü—K–ØWK–ÛJKOZKÏ\‹XKO[
KLHOOXË™\]X[ÊÊI‰šOOP_
˜›[™ÛÛÜŠËœ‹Ë™ËË˜‹
KË˜ÛÜJÊKOZ
KYKHLNÙ[ÙHYŠHOO^HOOTŠ^ÚYŠOOO[É‰˜OO[ß
˜›[™\]X][ÛŠ‘•S×ÐQ
KO[Ë[ÊKJ\ÝÚ]Ú
J^ØØ\ÙHN˜›[™[˜ÔÙ\\˜]J“Ó‘K“Ó‘WÓRS•T×ÔÔ×ÐSK“Ó‘K“Ó‘WÓRS•T×ÔÔ×ÐSJNØœ™XZÎØØ\ÙHŽ˜›[™[˜Ê“Ó‘K“Ó‘JNØœ™XZÎØØ\ÙHÎ˜›[™[˜ÔÙ\\˜]J–‘T“Ë“Ó‘WÓRS•T×ÔÔ×ÐÓÓÔ‹–‘T“Ë“Ó‘JNØœ™XZÎØØ\ÙH˜›[™[˜ÔÙ\\˜]J–‘T“Ë”Ô×ÐÓÓÔ‹–‘T“Ë”Ô×ÐSJNØœ™XZÎÙY˜][˜ÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]Nˆ[˜[Y›[™[™Îˆ‹J_Y[ÙHÝÚ]Ú
J^ØØ\ÙHN˜›[™[˜ÔÙ\\˜]J”Ô×ÐSK“Ó‘WÓRS•T×ÔÔ×ÐSK“Ó‘K“Ó‘WÓRS•T×ÔÔ×ÐSJNØœ™XZÎØØ\ÙHŽ˜›[™[˜Ê”Ô×ÐSK“Ó‘JNØœ™XZÎØØ\ÙHÎ˜›[™[˜ÔÙ\\˜]J–‘T“Ë“Ó‘WÓRS•T×ÔÔ×ÐÓÓÔ‹–‘T“Ë“Ó‘JNØœ™XZÎØØ\ÙH˜›[™[˜Ê–‘T“Ë”Ô×ÐÓÓÔŠNØœ™XZÎÙY˜][˜ÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]Nˆ[˜[Y›[™[™Îˆ‹J_SO[[Ï[[[[O[[ËœÙ]

KOLYK]__Y[ÙHLOO]‰‰ŠJ“S‘
KHLJ_Y[˜Ý[ÛˆÊJ^ÐÈOOYI‰ŠOÝ™œ›Û˜XÙJÕÊN™œ›Û˜XÙJÐÕÊKÏYJ_Y[˜Ý[Ûˆ	
J^ÌOOYOÊŠÕSÑPÑJKHOOS	‰ŠOOOYOÝ˜Ý[˜XÙJPÒÊNŒOOYOÝ˜Ý[˜XÙJ‘”“Ó•
N˜Ý[˜XÙJ‘”“Ó•ÐS‘ÐPÒÊJJNœJÕSÑPÑJKY_Y[˜Ý[ÛˆJK‹J^ÙOÊŠ”ÓQÓÓ—ÓÑ‘”ÑUÑ’S
KOOO[‰‰•OOOZ_
œÛYÛÛ“Ù™œÙ]
‹JKO[‹OZJJNœJ”ÓQÓÓ—ÓÑ‘”ÑUÑ’S
_\™]\›žØY™™\œÎžØÛÛÜŽœ‹\œËÝ[˜Ú[šK[˜X›Nš‹\ØX›NœKš[™œ˜[YXY™™\Ž™[˜Ý[ÛŠKŠ^Ü™]\›ˆVÙWHOO[‰‰Š˜š[™œ˜[YXY™™\ŠKŠKVÙWO[‹I‰ŠOOO]‘U×Ñ”SQP•Q‘‘T‰‰ŠVÝ‘”SQP•Q‘‘T—O[ŠKOOO]‘”SQP•Q‘‘T‰‰ŠVÝ‘U×Ñ”SQP•Q‘‘T—O[ŠJKL
_K˜]ÐY™™\œÎ™[˜Ý[ÛŠKŠ^Û]ÏYËOHLNÚYŠJZYŠÏY‹™Ù]
ŠK›ÚYOO\É‰ŠÏV×K‹œÙ]
‹ÊJKKš\ÕÙX‘Ó][\T™[™\•\™Ù]Ê^ØÛÛœÝOZK^\™NÚYŠË›[™ÝOOYK›[™ÝÖÌHOO]ÓÓÔ—ÐUPÒQS•
^Ù›ÜŠ]LOYK›[™ÝÛNÛŠÊÊ\ÖÛ—O]ÓÓÔ—ÐUPÒQS•
ÛŽÜË›[™ÝYK›[™ÝOHL_Y[ÙHÖÌHOO]ÓÓÔ—ÐUPÒQS•	‰ŠÖÌO]ÓÓÔ—ÐUPÒQS•OHL
NÙ[ÙHÖÌHOO]PÒÉ‰ŠÖÌO]PÒËOHL
NØI‰Š‹š\ÕÙX‘ÓÝ™˜]ÐY™™\œÊÊN™K™Ù]
•ÑP‘ÓÙ˜]×ØY™™\œ×ŠK™˜]ÐY™™\œÕÑP‘Ó
ÊJ_K\ÙT›ÙÜ˜[N™[˜Ý[ÛŠJ^Ü™]\›ˆÈOOYI‰Š\ÙT›ÙÜ˜[JJKÏYKL
_KÙ]›[™[™Î’‹Ù]X]\šX[™[˜Ý[ÛŠKŠ^ÌOOYKœÚYOÜJÕSÑPÑJNšŠÕSÑPÑJNÛ]OYKœÚYOOOXNÛ‰‰ŠOHZJKÊJKOOOYK˜›[™[™É‰ˆLOOOYK˜[œÜ\™[ÒŠ
N’ŠK˜›[™[™ËK˜›[™\]X][Û‹K˜›[™Ü˜ËK˜›[™ÝK˜›[™\]X][Û[KK˜›[™Ü˜Ð[KK˜›[™Ý[KK˜›[™ÛÛÜ‹K˜›[™[KKœ™[][\YY[JKËœÙ][˜ÊK™\[˜ÊKËœÙ]\Ý
K™\\Ý
KËœÙ]X\ÚÊK™\Üš]JK‹œÙ]X\ÚÊK˜ÛÛÜ•Üš]JNØÛÛœÝÏYKœÝ[˜Ú[Üš]NÚœÙ]\Ý
ÊKÉ‰ŠœÙ]X\ÚÊKœÝ[˜Ú[Üš]SX\ÚÊKœÙ][˜ÊKœÝ[˜Ú[[˜ËKœÝ[˜Ú[™Y‹KœÝ[˜Ú[[˜ÓX\ÚÊKœÙ]Ü
KœÝ[˜Ú[˜Z[KœÝ[˜Ú[‘˜Z[KœÝ[˜Ú[”\ÜÊJKJKœÛYÛÛ“Ù™œÙ]KœÛYÛÛ“Ù™œÙ]˜XÝÜ‹KœÛYÛÛ“Ù™œÙ][š]ÊKLOOYK˜[UÐÛÝ™\˜YÙOÚŠ”ÐSTWÐSWÕ×ÐÓÕ‘TQÑJNœJ”ÐSTWÐSWÕ×ÐÓÕ‘TQÑJ_KÙ]›\ÚYY’ËÙ]Ý[˜XÙN‰Ù][™UÚY™[˜Ý[ÛŠJ^ÙHOOT	‰Š‰‰›[™UÚY
JKYJ_KÙ]ÛYÛÛ“Ù™œÙ]”KÙ]ØÚ\ÜÛÜ•\Ý™[˜Ý[ÛŠJ^ÙOÚŠ”ÐÒTÔÓÔ—ÕTÕ
NœJ”ÐÒTÔÓÔ—ÕTÕ
_KXÝ]™U^\™N™[˜Ý[ÛŠJ^Ý›ÚYOOYI‰ŠO]•VT‘L
ÑLJKˆOOYI‰Š˜XÝ]™U^\™JJKYJ_Kš[™^\™N™[˜Ý[ÛŠK‹J^Ý›ÚYOOZI‰ŠO[[OOPÝ•VT‘L
ÑLNŠNÛ]^–ÚWNÝ›ÚYOO\‰‰Š^Ý\N›ÚY^\™N›ÚYK–ÚWO\ŠK‹\OOOYI‰œ‹^\™OOO[Ÿ
ˆOOZI‰Š˜XÝ]™U^\™JJKZJK˜š[™^\™JKŸÙWJK‹\OYK‹^\™O[Š_K[˜š[™^\™N™[˜Ý[ÛŠ
^ØÛÛœÝO^–Ð—NÝ›ÚYOOYI‰›ÚYOOYK\I‰Š˜š[™^\™JK\K[
KK\O]›ÚYK^\™O]›ÚY
_KÛÛ\™\ÜÙY^[XYÙL‘™[˜Ý[ÛŠ
^Ýž^Ý˜ÛÛ\™\ÜÙY^[XYÙL‘˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__KÛÛ\™\ÜÙY^[XYÙLÑ™[˜Ý[ÛŠ
^Ýž^Ý˜ÛÛ\™\ÜÙY^[XYÙLÑ˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__K^[XYÙL‘™[˜Ý[ÛŠ
^Ýž^Ý^[XYÙL‘˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__K^[XYÙLÑ™[˜Ý[ÛŠ
^Ýž^Ý^[XYÙLÑ˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__K\]UP“ÓX\[™Î™[˜Ý[ÛŠKŠ^Û]OY™Ù]
ŠNÝ›ÚYOOZI‰ŠO[™]ÈÙXZÓX\œÙ]
‹JJNÛ]ZK™Ù]
JNÝ›ÚYOO\‰‰Š]™Ù][šY›Ü›P›ØÚÒ[™^
‹K›˜[YJKKœÙ]
KŠJ_K[šY›Ü›P›ØÚÐš[™[™Î™[˜Ý[ÛŠKŠ^ØÛÛœÝOY™Ù]
ŠK™Ù]
JNÝK™Ù]
ŠHOOZI‰Š[šY›Ü›P›ØÚÐš[™[™Ê‹KK—×Øš[™[™ÔÚ[[™^
KKœÙ]
‹JJ_K^ÝÜ˜YÙL‘™[˜Ý[ÛŠ
^Ýž^Ý^ÝÜ˜YÙL‘˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__K^ÝÜ˜YÙLÑ™[˜Ý[ÛŠ
^Ýž^Ý^ÝÜ˜YÙLÑ˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__K^ÝX’[XYÙL‘™[˜Ý[ÛŠ
^Ýž^Ý^ÝX’[XYÙL‘˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__K^ÝX’[XYÙLÑ™[˜Ý[ÛŠ
^Ýž^Ý^ÝX’[XYÙLÑ˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__KÛÛ\™\ÜÙY^ÝX’[XYÙL‘™[˜Ý[ÛŠ
^Ýž^Ý˜ÛÛ\™\ÜÙY^ÝX’[XYÙL‘˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__KÛÛ\™\ÜÙY^ÝX’[XYÙLÑ™[˜Ý[ÛŠ
^Ýž^Ý˜ÛÛ\™\ÜÙY^ÝX’[XYÙLÑ˜\J\™Ý[Y[Ê_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘ÓÝ]N—‹
__KØÚ\ÜÛÜŽ™[˜Ý[ÛŠJ^ÈLOOOU‹™\]X[ÊJI‰ŠœØÚ\ÜÛÜŠKžKžKKž‹KÊK‹˜ÛÜJJJ_KšY]ÜÜ™[˜Ý[ÛŠJ^ÈLOOOZË™\]X[ÊJI‰ŠšY]ÜÜ
KžKžKKž‹KÊKË˜ÛÜJJJ_K™\Ù]™[˜Ý[ÛŠ
^Ý™\ØX›J“S‘
K™\ØX›JÕSÑPÑJK™\ØX›J‘TÕTÕ
K™\ØX›J”ÓQÓÓ—ÓÑ‘”ÑUÑ’S
K™\ØX›J”ÐÒTÔÓÔ—ÕTÕ
K™\ØX›J”ÕSÒSÕTÕ
K™\ØX›J”ÐSTWÐSWÕ×ÐÓÕ‘TQÑJK˜›[™\]X][ÛŠ‘•S×ÐQ
K˜›[™[˜Ê“Ó‘K–‘T“ÊK˜›[™[˜ÔÙ\\˜]J“Ó‘K–‘T“Ë“Ó‘K–‘T“ÊK˜›[™ÛÛÜŠ
K˜ÛÛÜ“X\ÚÊLLLL
K˜ÛX\ÛÛÜŠ
K™\X\ÚÊL
K™\[˜Ê“TÔÊK˜ÛX\‘\
JKœÝ[˜Ú[X\ÚÊŽMMÌŽMJKœÝ[˜Ú[[˜ÊSÐVTËŽMMÌŽMJKœÝ[˜Ú[Ü
’ÑQT’ÑQT’ÑQT
K˜ÛX\”Ý[˜Ú[

K˜Ý[˜XÙJPÒÊK™œ›Û˜XÙJÐÕÊKœÛYÛÛ“Ù™œÙ]

K˜XÝ]™U^\™J•VT‘L
K˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹[
KLOOZI‰Š˜š[™œ˜[YXY™™\Š‘U×Ñ”SQP•Q‘‘T‹[
K˜š[™œ˜[YXY™™\Š”‘PQÑ”SQP•Q‘‘T‹[
JK\ÙT›ÙÜ˜[J[
K›[™UÚY
JKœØÚ\ÜÛÜŠ˜Ø[˜\ËÚY˜Ø[˜\ËšZYÚ
KšY]ÜÜ
˜Ø[˜\ËÚY˜Ø[˜\ËšZYÚ
K^ßK[[^ßKO^ßK[™]ÈÙXZÓX\ÏV×KÏ[[HLK[[O[[O[[Ï[[[[[[O[[Ï[™]ÈÚJ
KOLHLKÏ[[[[[[O[[O[[‹œÙ]
˜Ø[˜\ËÚY˜Ø[˜\ËšZYÚ
KËœÙ]
˜Ø[˜\ËÚY˜Ø[˜\ËšZYÚ
K‹œ™\Ù]

KËœ™\Ù]

Kœ™\Ù]

___Y[˜Ý[ÛˆJK‹K‹ËJ^ØÛÛœÝÏ\‹š\ÕÙX‘Ó‹YKš\Ê•ÑP‘ÓÛ][\Ø[\YÜ™[™\—Ý×Ý^\™WŠOÙK™Ù]
•ÑP‘ÓÛ][\Ø[\YÜ™[™\—Ý×Ý^\™WŠN›[ÏW[™Yš[™YˆO]\[Ùˆ˜]šYØ]Ü‰‰‹ÓØÝ[\Ðœ›ÝÜÙ\‹ÙË\Ý
˜]šYØ]Ü‹\Ù\YÙ[
K[™]ÈÙXZÓX\Û]NØÛÛœÝ[™]ÈÙXZÓX\Û]HLNÝž^ÜW[™Yš[™YˆO]\[ÙˆÙ™œØÜ™Y[Ø[˜\É‰›[OO[™]ÈÙ™œØÜ™Y[Ø[˜\ÊKJK™Ù]ÛÛ^
Œ™Š_XØ]Ú

^ßY[˜Ý[ÛˆJJ^Ü™]\›ˆÛ™]ÈÙ™œØÜ™Y[Ø[˜\ÊJNžYJ˜Ø[˜\×Š_Y[˜Ý[ÛˆŠK‹J^Û]LNÚYŠ
ÚYš_šZYÚšJI‰ŠZKÓX]›X^
ÚYšZYÚ
JK_LOOYJ^ÚYŠ[™Yš[™YˆO]\[ÙˆS[XYÙQ[[Y[	‰[œÝ[˜Ù[ÙˆS[XYÙQ[[Y[[™Yš[™YˆO]\[ÙˆSØ[˜\Ñ[[Y[	‰[œÝ[˜Ù[ÙˆSØ[˜\Ñ[[Y[[™Yš[™YˆO]\[Ùˆ[XYÙPš]X\	‰[œÝ[˜Ù[Ùˆ[XYÙPš]X\
^ØÛÛœÝOYOÚN“X]™›ÛÜ‹ÏZJŠÚY
KOZJŠšZYÚ
NÝ›ÚYOO]I‰ŠO[JËJJNØÛÛœÝÏ[ÛJËJNNÛËÚY\ËËšZYÚXNÜ™]\›ˆË™Ù]ÛÛ^
Œ™ŠK™˜]Ò[XYÙJËJKÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ^\™H\È™Y[ˆ™\Ú^™Yœ›ÛH
ŠÝÚY
×žŠÝšZYÚ
×ŠHÈ
ŠÜÊ×žŠØJ×ŠK—ŠKß\™]\›—™]Wš[ˆ	‰˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ[XYÙH[ˆ]U^\™H\ÈÛÈšYÈ
ŠÝÚY
×žŠÝšZYÚ
×ŠK—ŠK\™]\›ˆY[˜Ý[ÛˆÊ
^Ü™]\›ˆÙJÚY
I‰˜ÙJšZYÚ
_Y[˜Ý[ÛˆÊJ^Ü™]\›ˆ™Ù[™\˜]SZ\X\É‰™I‰›Z[‘š[\ˆOOT	‰›Z[‘š[\ˆOOQY[˜Ý[ÛˆŠJ^Ý™Ù[™\˜]SZ\X\
J_Y[˜Ý[Ûˆ
‹K‹ËOHLJ^ÚYŠLOOO[Ê\™]\›ˆNÚYŠ[OO[Š^ÚYŠ›ÚYOO]Û—J\™]\›ˆÛ—NØÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ][\È\ÙH›Û‹Y^\Ý[™ÈÙX‘Ó[\›˜[›Ü›X]	×ŠÛŠ×‰×Š_[]ZNÚYŠOOO]”‘Q	‰ŠOO]‘“ÐU	‰Š]”ŒÌ‘ŠKOO]’S—Ñ“ÐU	‰Š]”ŒM‘ŠKOO]•S”ÒQÓ‘QÐ–UI‰Š]”Ž
JKOOO]”‘QÒS•QÑT‰‰ŠOO]•S”ÒQÓ‘QÐ–UI‰Š]”ŽRJKOO]•S”ÒQÓ‘QÔÒÔ•	‰Š]”ŒM•RJKOO]•S”ÒQÓ‘QÒS•	‰Š]”ŒÌ•RJKOO]–UI‰Š]”ŽJKOO]”ÒÔ•	‰Š]”ŒM’JKOO]’S•	‰Š]”ŒÌ’JJKOOO]”‘É‰ŠOO]‘“ÐU	‰Š]”‘ÌÌ‘ŠKOO]’S—Ñ“ÐU	‰Š]”‘ÌM‘ŠKOO]•S”ÒQÓ‘QÐ–UI‰Š]”‘Î
JKOOO]”‘ÐJ^ØÛÛœÝOXOÕÝ”™K™Ù]˜[œÙ™\ŠÊNÜOO]‘“ÐU	‰Š]”‘ÐLÌ‘ŠKOO]’S—Ñ“ÐU	‰Š]”‘ÐLM‘ŠKOO]•S”ÒQÓ‘QÐ–UI‰ŠYOOOVÝ”Ô‘ÐŽÐSN”‘ÐN
KOO]•S”ÒQÓ‘QÔÒÔ•ÍÍÍÍ	‰Š]”‘ÐM
KOO]•S”ÒQÓ‘QÔÒÔ•ÍWÍWÍWÌI‰Š]”‘ÐWÐLJ_\™]\›ˆOO]”ŒM‘‰‰›OO]”ŒÌ‘‰‰›OO]”‘ÌM‘‰‰›OO]”‘ÌÌ‘‰‰›OO]”‘ÐLM‘‰‰›OO]”‘ÐLÌ‘ŸK™Ù]
‘VØÛÛÜ—ØY™™\—Ù›Ø]ŠKY[˜Ý[ÛˆJKŠ^Ü™]\›ˆLOOWÊŠ_š\Ñœ˜[YXY™™\•^\™I‰›Z[‘š[\ˆOOT	‰›Z[‘š[\ˆOOQÓX]›ÙÌŠX]›X^
KÚYKšZYÚ
JJÌN›ÚYOO]›Z\X\É‰›Z\X\Ë›[™ÝŒÝ›Z\X\Ë›[™Ýš\ÐÛÛ\™\ÜÙY^\™I‰\œ˜^Kš\Ð\œ˜^Jš[XYÙJOÙK›Z\X\Ë›[™ÝŒ_Y[˜Ý[ÛˆJJ^Ü™]\›ˆOOOTOOOR_OOOUOÝ“‘PT‘TÕ“S‘PTŸY[˜Ý[ÛˆÊ
^ØÛÛœÝO]\™Ù]ÙKœ™[[Ý™Q]™[\Ý[™\Š™\ÜÜÙW‹ÊK[˜Ý[ÛŠ
^ØÛÛœÝOZK™Ù]

NÚYŠ›ÚYOOYK—×ÝÙX™Û[š]
\™]\›ŽØÛÛœÝ]œÛÝ\˜ÙKY™Ù]
ŠNÚYŠŠ^ØÛÛœÝO\–ÙK—×ØØXÚRÙ^WNÚK\ÙY[Y\ËKKOOZK\ÙY[Y\É‰•

KOOSØš™XÝšÙ^\ÊŠK›[™Ý	‰™™[]JŠ_ZKœ™[[Ý™J
_JJKKš\ÕšY[Õ^\™I‰š™[]JJ_Y[˜Ý[ÛˆŠJ^ØÛÛœÝYK\™Ù]Û‹œ™[[Ý™Q]™[\Ý[™\Š™\ÜÜÙW‹ŠK[˜Ý[ÛŠJ^ØÛÛœÝYK^\™KZK™Ù]
JKÏZK™Ù]
ŠNÝ›ÚYOO\Ë—×ÝÙX™Û^\™I‰Š™[]U^\™JË—×ÝÙX™Û^\™JKK›Y[[ÜžK^\™\ËKJNÙK™\^\™I‰™K™\^\™K™\ÜÜÙJ
NÚYŠKš\ÕÙX‘ÓÝX™T™[™\•\™Ù]
Y›ÜŠ]OLÙOŽÙJÊÊ^ÚYŠ\œ˜^Kš\Ð\œ˜^J‹—×ÝÙX™Ûœ˜[YXY™™\–ÙWJJY›ÜŠ]LÛ‹—×ÝÙX™Ûœ˜[YXY™™\–ÙWK›[™ÝÛŠÊÊ]™[]Qœ˜[YXY™™\Š‹—×ÝÙX™Ûœ˜[YXY™™\–ÙWVÛ—JNÙ[ÙH™[]Qœ˜[YXY™™\Š‹—×ÝÙX™Ûœ˜[YXY™™\–ÙWJNÜ‹—×ÝÙX™Û\Y™™\‰‰™[]T™[™\˜Y™™\Š‹—×ÝÙX™Û\Y™™\–ÙWJ_Y[Ù^ÚYŠ\œ˜^Kš\Ð\œ˜^J‹—×ÝÙX™Ûœ˜[YXY™™\ŠJY›ÜŠ]OLÙO‹—×ÝÙX™Ûœ˜[YXY™™\‹›[™ÝÙJÊÊ]™[]Qœ˜[YXY™™\Š‹—×ÝÙX™Ûœ˜[YXY™™\–ÙWJNÙ[ÙH™[]Qœ˜[YXY™™\Š‹—×ÝÙX™Ûœ˜[YXY™™\ŠNÚYŠ‹—×ÝÙX™Û\Y™™\‰‰™[]T™[™\˜Y™™\Š‹—×ÝÙX™Û\Y™™\ŠK‹—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\‰‰™[]Qœ˜[YXY™™\Š‹—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\ŠK‹—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\ŠY›ÜŠ]OLÙO‹—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\‹›[™ÝÙJÊÊ\‹—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\–ÙWI‰™[]T™[™\˜Y™™\Š‹—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\–ÙWJNÜ‹—×ÝÙX™Û\™[™\˜Y™™\‰‰™[]T™[™\˜Y™™\Š‹—×ÝÙX™Û\™[™\˜Y™™\Š_ZYŠKš\ÕÙX‘Ó][\T™[™\•\™Ù]ÊY›ÜŠ]OL[‹›[™ÝÙOŽÙJÊÊ^ØÛÛœÝZK™Ù]
–ÙWJNÜ‹—×ÝÙX™Û^\™I‰Š™[]U^\™J‹—×ÝÙX™Û^\™JKK›Y[[ÜžK^\™\ËKJKKœ™[[Ý™J–ÙWJ_ZKœ™[[Ý™JŠKKœ™[[Ý™JJ_JŠ_Y[˜Ý[Ûˆ
J^ØÛÛœÝZK™Ù]
JNÝ™[]U^\™J‹—×ÝÙX™Û^\™JNØÛÛœÝYKœÛÝ\˜ÙNÙ[]H™Ù]
ŠVÛ‹—×ØØXÚRÙ^WKK›Y[[ÜžK^\™\ËK_[]OLÙ[˜Ý[ÛˆÊKŠ^ØÛÛœÝÏZK™Ù]
JNÚYŠKš\ÕšY[Õ^\™I‰™[˜Ý[ÛŠ
^ØÛÛœÝOXKœ™[™\‹™œ˜[YNÚ™Ù]

HOOYI‰ŠœÙ]
JK\]J
J_JJKLOOOYKš\Ô™[™\•\™Ù]^\™I‰™K™\œÚ[ÛŒ	‰œË—×Ý™\œÚ[ÛˆOOYK™\œÚ[ÛŠ^ØÛÛœÝYKš[XYÙNÚYŠ[OO]
XÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ^\™HX\šÙY›Üˆ\]H]›È[XYÙH]H›Ý[™—ŠNÙ[Ù^ÚYŠLHOO]˜ÛÛ\]J\™]\›ˆ›ÚYŠËKŠNØÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ^\™HX\šÙY›Üˆ\]H][XYÙH\È[˜ÛÛ\]WŠ__[‹˜š[™^\™J•VT‘WÌ‘Ë—×ÝÙX™Û^\™K•VT‘L
ÜŠ_XÛÛœÝO^ÖÔ—N”‘TPUÐ×NÓSTÕ×ÑQÑKÓN“RT”“Ô‘QÔ‘TPUK^ÖÔN“‘PT‘TÕÒWN“‘PT‘TÕÓRTPTÓ‘PT‘TÕÕWN“‘PT‘TÕÓRTPTÓS‘PT‹ÑN“S‘PT‹Ó—N“S‘PT—ÓRTPTÓ‘PT‘TÕÓ×N“S‘PT—ÓRTPTÓS‘PTŸKÏ^ÍLLŽ“‘U‘T‹LNNSÐVTËLLÎ“TÔËLMN“TUPSLM‘TUPSLN‘ÑTUPSLMŽ‘Ô‘PUT‹LMÎ““ÕTUPSNÙ[˜Ý[ÛˆÊ‹ËJ^ÚYŠOÊ^\˜[Y]\šJ‹•VT‘WÕÔTÔËVÜËÜ˜\×JK^\˜[Y]\šJ‹•VT‘WÕÔTÕVÜËÜ˜\JKˆOO]•VT‘WÌÑ	‰›ˆOO]•VT‘WÌ‘ÐT”V_^\˜[Y]\šJ‹•VT‘WÕÔTÔ‹VÜËÜ˜\—JK^\˜[Y]\šJ‹•VT‘WÓPQ×Ñ’ST‹–ÜË›XYÑš[\—JK^\˜[Y]\šJ‹•VT‘WÓRS—Ñ’ST‹–ÜË›Z[‘š[\—JJNŠ^\˜[Y]\šJ‹•VT‘WÕÔTÔËÓSTÕ×ÑQÑJK^\˜[Y]\šJ‹•VT‘WÕÔTÕÓSTÕ×ÑQÑJKˆOO]•VT‘WÌÑ	‰›ˆOO]•VT‘WÌ‘ÐT”V_^\˜[Y]\šJ‹•VT‘WÕÔTÔ‹ÓSTÕ×ÑQÑJKËÜ˜\ÏOOPÉ‰œËÜ˜\OOPßÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ^\™H\È›ÝÝÙ\ˆÙˆÛËˆ^\™KÜ˜\È[™^\™KÜ˜\ÚÝ[™HÙ]È‘QKÛ[\ÑYÙUÜ˜\[™Ë—ŠK^\˜[Y]\šJ‹•VT‘WÓPQ×Ñ’ST‹JË›XYÑš[\ŠJK^\˜[Y]\šJ‹•VT‘WÓRS—Ñ’ST‹JË›Z[‘š[\ŠJKË›Z[‘š[\ˆOOT	‰œË›Z[‘š[\ˆOOQ	‰˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ^\™H\È›ÝÝÙ\ˆÙˆÛËˆ^\™K›Z[‘š[\ˆÚÝ[™HÙ]È‘QK“™X\™\Ýš[\ˆÜˆ‘QK“[™X\‘š[\‹—ŠJKË˜ÛÛ\\™Q[˜Ý[Û‰‰Š^\˜[Y]\šJ‹•VT‘WÐÓÓTT‘WÓSÑKÓÓTT‘WÔ‘Q—Õ×ÕVT‘JK^\˜[Y]\šJ‹•VT‘WÐÓÓTT‘WÑ•SËÖÜË˜ÛÛ\\™Q[˜Ý[Û—JJKLOOYKš\Ê‘VÝ^\™WÙš[\—Ø[š\ÛÝ›ÜX×ŠJ^ØÛÛœÝOYK™Ù]
‘VÝ^\™WÙš[\—Ø[š\ÛÝ›ÜX×ŠNÚYŠË›XYÑš[\OOT
\™]\›ŽÚYŠË›Z[‘š[\ˆOOUI‰œË›Z[‘š[\ˆOOSÊ\™]\›ŽÚYŠË\OOOR	‰ˆLOOOYKš\Ê“ÑT×Ý^\™WÙ›Ø]Û[™X\—ŠJ\™]\›ŽÚYŠLOOO[É‰œË\OOOU‰‰ˆLOOOYKš\Ê“ÑT×Ý^\™WÚ[—Ù›Ø]Û[™X\—ŠJ\™]\›ŽÊË˜[š\ÛÝ›ÜOŒ_K™Ù]
ÊK—×ØÝ\œ™[[š\ÛÝ›ÜJI‰Š^\˜[Y]\™Š‹K•VT‘WÓPVÐS’TÓÕ“ÔWÑVX]›Z[ŠË˜[š\ÛÝ›ÜK‹™Ù]X^[š\ÛÝ›ÜJ
JJKK™Ù]
ÊK—×ØÝ\œ™[[š\ÛÝ›ÜO\Ë˜[š\ÛÝ›ÜJ__Y[˜Ý[ÛˆŠKŠ^Û]OHLNÝ›ÚYOOYK—×ÝÙX™Û[š]	‰ŠK—×ÝÙX™Û[š]HL‹˜Y]™[\Ý[™\Š™\ÜÜÙW‹ÊJNØÛÛœÝ[‹œÛÝ\˜ÙNÛ]ÏY™Ù]
ŠNÝ›ÚYOO\É‰ŠÏ^ßKœÙ]
‹ÊJNØÛÛœÝÏY[˜Ý[ÛŠ
^ØÛÛœÝOV×NÜ™]\›ˆKœ\Ú
Ü˜\ÊKKœ\Ú
Ü˜\
KKœ\Ú
Ü˜\Ÿ
KKœ\Ú
›XYÑš[\ŠKKœ\Ú
›Z[‘š[\ŠKKœ\Ú
˜[š\ÛÝ›ÜJKKœ\Ú
š[\›˜[›Ü›X]
KKœ\Ú
™›Ü›X]
KKœ\Ú
\JKKœ\Ú
™Ù[™\˜]SZ\X\ÊKKœ\Ú
œ™[][\P[JKKœ\Ú
™›\JKKœ\Ú
[œXÚÐ[YÛ›Y[
KKœ\Ú
˜ÛÛÜ”ÜXÙJKKš›Ú[Š
_JŠNÚYŠÈOOYK—×ØØXÚRÙ^J^Ý›ÚYOO\ÖÛ×I‰ŠÖÛ×O^Ý^\™N˜Ü™X]U^\™J
K\ÙY[Y\ÎŒKK›Y[[ÜžK^\™\ÊÊËOHL
KÖÛ×K\ÙY[Y\ÊÊÎØÛÛœÝ\ÖÙK—×ØØXÚRÙ^WNÝ›ÚYOO\‰‰ŠÖÙK—×ØØXÚRÙ^WK\ÙY[Y\ËKKOO\‹\ÙY[Y\É‰•
ŠJKK—×ØØXÚRÙ^O[ËK—×ÝÙX™Û^\™O\ÖÛ×K^\™_\™]\›ˆ_Y[˜Ý[ÛˆŠKK
^Û]Ï]•VT‘WÌ‘ÊKš\Ñ]P\œ˜^U^\™_Kš\ÐÛÛ\™\ÜÙY\œ˜^U^\™JI‰ŠÏ]•VT‘WÌ‘ÐT”VJKKš\Ñ]LÑ^\™I‰ŠÏ]•VT‘WÌÑ
NØÛÛœÝVŠKJKOXKœÛÝ\˜ÙNÛ‹˜š[™^\™JËK—×ÝÙX™Û^\™K•VT‘L
Û
NØÛÛœÝZK™Ù]
JNÚYŠK™\œÚ[ÛˆOOY—×Ý™\œÚ[ÛŸLOOZ
^Û‹˜XÝ]™U^\™J•VT‘L
Û
NØÛÛœÝOT™K™Ù]š[X\šY\Ê™KÛÜšÚ[™ÐÛÛÜ”ÜXÙJKOXK˜ÛÛÜ”ÜXÙOOO^Û[”™K™Ù]š[X\šY\ÊK˜ÛÛÜ”ÜXÙJKXK˜ÛÛÜ”ÜXÙOOO^OOOZOÝ““Ó‘N”“ÕÔÑT—ÑQUSÕÑP‘ÓÝœ^[ÝÜ™ZJ•S”PÒ×Ñ“TÖWÕÑP‘ÓK™›\JKœ^[ÝÜ™ZJ•S”PÒ×Ô‘SUSTWÐSWÕÑP‘ÓKœ™[][\P[JKœ^[ÝÜ™ZJ•S”PÒ×ÐSQÓ“QS•K[œXÚÐ[YÛ›Y[
Kœ^[ÝÜ™ZJ•S”PÒ×ÐÓÓÔ”ÔPÑWÐÓÓ•‘T”ÒSÓ—ÕÑP‘Ó
NØÛÛœÝOY[˜Ý[ÛŠ
^Ü™]\›ˆ[É‰ŠÜ˜\ÈOOPßÜ˜\OOPß›Z[‘š[\ˆOOT	‰›Z[‘š[\ˆOOQ
_JJI‰ˆLOOOYÊKš[XYÙJNÛ]OYŠKš[XYÙKKLK‹›X^^\™TÚ^™JNÓO[
KJNØÛÛœÝÏYÊJ_Ë\Ë˜ÛÛ™\
K™›Ü›X]K˜ÛÛÜ”ÜXÙJNÛ]O\Ë˜ÛÛ™\
K\JKÏ^
Kš[\›˜[›Ü›X]‹KK˜ÛÛÜ”ÜXÙKKš\ÕšY[Õ^\™JNÕÊËKÊNØÛÛœÝOXK›Z\X\Ë[É‰ˆLOOXKš\ÕšY[Õ^\™I‰ÈOOX]]›ÚYOOY—×Ý™\œÚ[ÛŸLOOZO^JKKÊNÚYŠKš\Ñ\^\™J]Ï]‘TÐÓÓTÓ‘S•ÏÝÏXK\OOORÝ‘TÐÓÓTÓ‘S•Ì‘Ž˜K\OOOQÏÝ‘TÐÓÓTÓ‘S•˜K\OOOVÝ‘TÔÕSÒS‘TÐÓÓTÓ‘S•MŽ˜K\OOOR	‰˜ÛÛœÛÛK™\œ›ÜŠ•ÙX‘Ó™[™\™\Žˆ›Ø][™ÈÚ[\^\™H™\]Z\™\ÈÙX‘Ó‹—ŠKK™›Ü›X]OO\I‰ÏOO]‘TÐÓÓTÓ‘S•	‰˜K\HOOP‰‰˜K\HOOQÉ‰ŠÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ\ÙH[œÚYÛ™YÚÜ\HÜˆ[œÚYÛ™Y[\H›Üˆ\›Ü›X]\^\™K—ŠKK\OQËO\Ë˜ÛÛ™\
K\JJKK™›Ü›X]OOVI‰ÏOO]‘TÐÓÓTÓ‘S•	‰ŠÏ]‘TÔÕSÒSK\HOOV	‰ŠÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ\ÙH[œÚYÛ™Y[\H›Üˆ\Ý[˜Ú[›Ü›X]\^\™K—ŠKK\OVO\Ë˜ÛÛ™\
K\JJJK	‰ŠÛ‹^ÝÜ˜YÙL‘
•VT‘WÌ‘KËKÚYKšZYÚ
N›‹^[XYÙL‘
•VT‘WÌ‘ËKÚYKšZYÚ‹K[
JNÙ[ÙHYŠKš\Ñ]U^\™JZYŠK›[™ÝŒ	‰”Ê^Ô‰‰“	‰›‹^ÝÜ˜YÙL‘
•VT‘WÌ‘KËVÌKÚYVÌKšZYÚ
NÙ›ÜŠ]OLOPK›[™ÝÙONÙJÊÊUPVÙWKÛ‹^ÝX’[XYÙL‘
•VT‘WÌ‘KÚYšZYÚ‹K™]JN›‹^[XYÙL‘
•VT‘WÌ‘KËÚYšZYÚ‹K™]JNØK™Ù[™\˜]SZ\X\ÏHL_Y[ÙHÊ	‰›‹^ÝÜ˜YÙL‘
•VT‘WÌ‘KËKÚYKšZYÚ
K‹^ÝX’[XYÙL‘
•VT‘WÌ‘KÚYKšZYÚ‹KK™]JJN›‹^[XYÙL‘
•VT‘WÌ‘ËKÚYKšZYÚ‹KK™]JNÙ[ÙHYŠKš\ÐÛÛ\™\ÜÙY^\™JZYŠKš\ÐÛÛ\™\ÜÙY\œ˜^U^\™J^Ô‰‰“	‰›‹^ÝÜ˜YÙLÑ
•VT‘WÌ‘ÐT”VKKËVÌKÚYVÌKšZYÚK™\
NÙ›ÜŠ]OLOPK›[™ÝÙONÙJÊÊUPVÙWKK™›Ü›X]OOZÛ[OOXÔÛ‹˜ÛÛ\™\ÜÙY^ÝX’[XYÙLÑ
•VT‘WÌ‘ÐT”VKKÚYšZYÚK™\‹™]K
N›‹˜ÛÛ\™\ÜÙY^[XYÙLÑ
•VT‘WÌ‘ÐT”VKKËÚYšZYÚK™\™]K
N˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ][\ÈØY[œÝ\ÜYÛÛ\™\ÜÙY^\™H›Ü›X][ˆ\ØY^\™J
WŠN”Û‹^ÝX’[XYÙLÑ
•VT‘WÌ‘ÐT”VKKÚYšZYÚK™\‹K™]JN›‹^[XYÙLÑ
•VT‘WÌ‘ÐT”VKKËÚYšZYÚK™\‹K™]J_Y[Ù^Ô‰‰“	‰›‹^ÝÜ˜YÙL‘
•VT‘WÌ‘KËVÌKÚYVÌKšZYÚ
NÙ›ÜŠ]OLOPK›[™ÝÙONÙJÊÊUPVÙWKK™›Ü›X]OOZÛ[OOXÔÛ‹˜ÛÛ\™\ÜÙY^ÝX’[XYÙL‘
•VT‘WÌ‘KÚYšZYÚ‹™]JN›‹˜ÛÛ\™\ÜÙY^[XYÙL‘
•VT‘WÌ‘KËÚYšZYÚ™]JN˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ][\ÈØY[œÝ\ÜYÛÛ\™\ÜÙY^\™H›Ü›X][ˆ\ØY^\™J
WŠN”Û‹^ÝX’[XYÙL‘
•VT‘WÌ‘KÚYšZYÚ‹K™]JN›‹^[XYÙL‘
•VT‘WÌ‘KËÚYšZYÚ‹K™]J_Y[ÙHYŠKš\Ñ]P\œ˜^U^\™JTÊ	‰›‹^ÝÜ˜YÙLÑ
•VT‘WÌ‘ÐT”VKKËKÚYKšZYÚK™\
K‹^ÝX’[XYÙLÑ
•VT‘WÌ‘ÐT”VKKÚYKšZYÚK™\‹KK™]JJN›‹^[XYÙLÑ
•VT‘WÌ‘ÐT”VKËKÚYKšZYÚK™\‹KK™]JNÙ[ÙHYŠKš\Ñ]LÑ^\™JTÊ	‰›‹^ÝÜ˜YÙLÑ
•VT‘WÌÑKËKÚYKšZYÚK™\
K‹^ÝX’[XYÙLÑ
•VT‘WÌÑKÚYKšZYÚK™\‹KK™]JJN›‹^[XYÙLÑ
•VT‘WÌÑËKÚYKšZYÚK™\‹KK™]JNÙ[ÙHYŠKš\Ñœ˜[YXY™™\•^\™J^ÚYŠ
ZYŠŠ[‹^ÝÜ˜YÙL‘
•VT‘WÌ‘KËKÚYKšZYÚ
NÙ[Ù^Û]OSKÚYOSKšZYÚÙ›ÜŠ]LÜNÜŠÊÊ[‹^[XYÙL‘
•VT‘WÌ‘‹ËKK‹K[
KOLKOL__Y[ÙHYŠK›[™ÝŒ	‰”Ê^Ô‰‰“	‰›‹^ÝÜ˜YÙL‘
•VT‘WÌ‘KËVÌKÚYVÌKšZYÚ
NÙ›ÜŠ]OLOPK›[™ÝÙONÙJÊÊUPVÙWKÛ‹^ÝX’[XYÙL‘
•VT‘WÌ‘K‹K
N›‹^[XYÙL‘
•VT‘WÌ‘KË‹K
NØK™Ù[™\˜]SZ\X\ÏHL_Y[ÙHÊ	‰›‹^ÝÜ˜YÙL‘
•VT‘WÌ‘KËKÚYKšZYÚ
K‹^ÝX’[XYÙL‘
•VT‘WÌ‘‹KJJN›‹^[XYÙL‘
•VT‘WÌ‘Ë‹KJN×ÊKÊI‰ŠÊK—×Ý™\œÚ[Û]K™\œÚ[Û‹K›Û•\]I‰˜K›Û•\]JJ_YK—×Ý™\œÚ[ÛXK™\œÚ[ÛŸY[˜Ý[ÛˆÊK‹KËË
^ØÛÛœÝO\Ë˜ÛÛ™\
K™›Ü›X]K˜ÛÛÜ”ÜXÙJK\Ë˜ÛÛ™\
K\JK^
Kš[\›˜[›Ü›X]KK˜ÛÛÜ”ÜXÙJNÚYŠZK™Ù]
ŠK—×Ú\Ñ^\›˜[^\™\Ê^ØÛÛœÝOSX]›X^
K‹ÚYš
KOSX]›X^
K‹šZYÚš
NØÏOO]•VT‘WÌÑÏOO]•VT‘WÌ‘ÐT”VOÛ‹^[XYÙLÑ
ËKK‹™\K[
N›‹^[XYÙL‘
ËKKK[
_[‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹JK]
ŠOÛ™œ˜[YXY™™\•^\™L‘][\Ø[\QV
‘”SQP•Q‘‘T‹ËËK™Ù]
JK—×ÝÙX™Û^\™K
ŠJNŠÏOO]•VT‘WÌ‘Ï]•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ	‰˜Ï]•VT‘WÐÕP‘WÓPTÓ‘QÐUU‘WÖŠI‰™œ˜[YXY™™\•^\™L‘
‘”SQP•Q‘‘T‹ËËK™Ù]
JK—×ÝÙX™Û^\™K
K‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹[
_Y[˜Ý[Ûˆ	
K‹J^ÚYŠ˜š[™™[™\˜Y™™\Š”‘S‘T•Q‘‘T‹JK‹™\Y™™\‰‰ˆ[‹œÝ[˜Ú[Y™™\Š^Û]HLOO[ÏÝ‘TÐÓÓTÓ‘S•‘TÐÓÓTÓ‘S•MŽÚYŠ_]
ŠJ^ØÛÛœÝO[‹™\^\™NÙI‰™Kš\Ñ\^\™I‰ŠK\OOORÜ]‘TÐÓÓTÓ‘S•Ì‘Ž™K\OOOQÉ‰Š]‘TÐÓÓTÓ‘S•
JNØÛÛœÝO]
ŠNÙ]
ŠOÛœ™[™\˜Y™™\”ÝÜ˜YÙS][\Ø[\QV
”‘S‘T•Q‘‘T‹K‹‹ÚY‹šZYÚ
Nœ™[™\˜Y™™\”ÝÜ˜YÙS][\Ø[\J”‘S‘T•Q‘‘T‹K‹‹ÚY‹šZYÚ
_Y[ÙHœ™[™\˜Y™™\”ÝÜ˜YÙJ”‘S‘T•Q‘‘T‹‹‹ÚY‹šZYÚ
NÝ™œ˜[YXY™™\”™[™\˜Y™™\Š‘”SQP•Q‘‘T‹‘TÐUPÒQS•”‘S‘T•Q‘‘T‹J_Y[ÙHYŠ‹™\Y™™\‰‰›‹œÝ[˜Ú[Y™™\Š^ØÛÛœÝ]
ŠNÚI‰ˆLOOOY]
ŠOÝœ™[™\˜Y™™\”ÝÜ˜YÙS][\Ø[\J”‘S‘T•Q‘‘T‹‹‘TÔÕSÒS‹ÚY‹šZYÚ
N™]
ŠOÛœ™[™\˜Y™™\”ÝÜ˜YÙS][\Ø[\QV
”‘S‘T•Q‘‘T‹‹‘TÔÕSÒS‹ÚY‹šZYÚ
Nœ™[™\˜Y™™\”ÝÜ˜YÙJ”‘S‘T•Q‘‘T‹‘TÔÕSÒS‹ÚY‹šZYÚ
K™œ˜[YXY™™\”™[™\˜Y™™\Š‘”SQP•Q‘‘T‹‘TÔÕSÒSÐUPÒQS•”‘S‘T•Q‘‘T‹J_Y[Ù^ØÛÛœÝOHLOO[‹š\ÕÙX‘Ó][\T™[™\•\™Ù]ÏÛ‹^\™N–Û‹^\™WNÙ›ÜŠ]LÜK›[™ÝÜŠÊÊ^ØÛÛœÝOYVÜ—KÏ\Ë˜ÛÛ™\
K™›Ü›X]K˜ÛÛÜ”ÜXÙJKÏ\Ë˜ÛÛ™\
K\JK^
Kš[\›˜[›Ü›X]ËËK˜ÛÛÜ”ÜXÙJKO]
ŠNÚI‰ˆLOOOY]
ŠOÝœ™[™\˜Y™™\”ÝÜ˜YÙS][\Ø[\J”‘S‘T•Q‘‘T‹K‹ÚY‹šZYÚ
N™]
ŠOÛœ™[™\˜Y™™\”ÝÜ˜YÙS][\Ø[\QV
”‘S‘T•Q‘‘T‹K‹ÚY‹šZYÚ
Nœ™[™\˜Y™™\”ÝÜ˜YÙJ”‘S‘T•Q‘‘T‹‹ÚY‹šZYÚ
__]˜š[™™[™\˜Y™™\Š”‘S‘T•Q‘‘T‹[
_Y[˜Ý[ÛˆJJ^ØÛÛœÝZK™Ù]
JKÏHLOOYKš\ÕÙX‘ÓÝX™T™[™\•\™Ù]ÚYŠK™\^\™I‰ˆ\‹—×Ø]]Ð[ØØ]Q\Y™™\Š^ÚYŠÊ]›ÝÈ™]È\œ›ÜŠ\™Ù]™\^\™H›ÝÝ\ÜY[ˆÝX™H™[™\ˆ\™Ù]×ŠNÈY[˜Ý[ÛŠKŠ^ÚYŠ‰‰œ‹š\ÕÙX‘ÓÝX™T™[™\•\™Ù]
]›ÝÈ™]È\œ›ÜŠ‘\^\™HÚ]ÝX™H™[™\ˆ\™Ù]È\È›ÝÝ\ÜYŠNÚYŠ‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹JK\‹™\^\™_\‹™\^\™Kš\Ñ\^\™J]›ÝÈ™]È\œ›ÜŠœ™[™\•\™Ù]™\^\™H]\Ý™H[ˆ[œÝ[˜ÙHÙˆ‘QK‘\^\™WŠNÚK™Ù]
‹™\^\™JK—×ÝÙX™Û^\™I‰œ‹™\^\™Kš[XYÙKÚYOO\‹ÚY	‰œ‹™\^\™Kš[XYÙKšZYÚOO\‹šZYÚ
‹™\^\™Kš[XYÙKÚY\‹ÚY‹™\^\™Kš[XYÙKšZYÚ\‹šZYÚ‹™\^\™K›™YYÕ\]OHL
KÊ‹™\^\™K
NØÛÛœÝÏZK™Ù]
‹™\^\™JK—×ÝÙX™Û^\™KO]
ŠNÚYŠ‹™\^\™K™›Ü›X]OO\JY]
ŠOÛ™œ˜[YXY™™\•^\™L‘][\Ø[\QV
‘”SQP•Q‘‘T‹‘TÐUPÒQS••VT‘WÌ‘ËJN™œ˜[YXY™™\•^\™L‘
‘”SQP•Q‘‘T‹‘TÐUPÒQS••VT‘WÌ‘Ë
NÙ[Ù^ÚYŠ‹™\^\™K™›Ü›X]OOVJ]›ÝÈ™]È\œ›ÜŠ•[šÛ›ÝÛˆ\^\™H›Ü›X]ŠNÙ]
ŠOÛ™œ˜[YXY™™\•^\™L‘][\Ø[\QV
‘”SQP•Q‘‘T‹‘TÔÕSÒSÐUPÒQS••VT‘WÌ‘ËJN™œ˜[YXY™™\•^\™L‘
‘”SQP•Q‘‘T‹‘TÔÕSÒSÐUPÒQS••VT‘WÌ‘Ë
__J‹—×ÝÙX™Ûœ˜[YXY™™\‹J_Y[ÙHYŠÊ^Ü‹—×ÝÙX™Û\Y™™\V×NÙ›ÜŠ]OLÚOŽÚJÊÊ[‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹‹—×ÝÙX™Ûœ˜[YXY™™\–ÚWJK‹—×ÝÙX™Û\Y™™\–ÚWO]˜Ü™X]T™[™\˜Y™™\Š
K	
‹—×ÝÙX™Û\Y™™\–ÚWKKLJ_Y[ÙH‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹‹—×ÝÙX™Ûœ˜[YXY™™\ŠK‹—×ÝÙX™Û\Y™™\]˜Ü™X]T™[™\˜Y™™\Š
K	
‹—×ÝÙX™Û\Y™™\‹KLJNÛ‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹[
_Y[˜Ý[Ûˆ

^Ü™]\›ˆX]›Z[Š‹›X^Ø[\\ËœØ[\\Ê_Y[˜Ý[Ûˆ]

^ØÛÛœÝZK™Ù]

NÜ™]\›ˆÉ‰œØ[\\ÏŒ	‰ˆLOOYKš\Ê•ÑP‘ÓÛ][\Ø[\YÜ™[™\—Ý×Ý^\™WŠI‰ˆLHOO[‹—×Ý\ÙT™[™\•Õ^\™_Y[˜Ý[Ûˆ
Š^ØÛÛœÝO]˜ÛÛÜ”ÜXÙK]™›Ü›X]Ï]\NÜ™]\›ˆLOO]š\ÐÛÛ\™\ÜÙY^\™_LOO]š\ÕšY[Õ^\™_™›Ü›X]OORÝHOOR	‰šHOO^	‰Š™K™Ù]˜[œÙ™\ŠJOOOVÈLOOO[ÏÈLOOYKš\Ê‘VÜÔ‘Ð—ŠI‰œOOZÊ™›Ü›X]RÝ›Z[‘š[\Q™Ù[™\˜]SZ\X\ÏHLJN›RYKœÔ‘Ð•Ó[™X\ŠŠNœOOZ‰‰œÏOOQŸÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó^\™\ÎˆÔ‘Ðˆ[˜ÛÙY^\™\È]™HÈ\ÙH‘ÐQ›Ü›X][™[œÚYÛ™Yž]U\K—ŠN˜ÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó^\™\Îˆ[œÝ\ÜY^\™HÛÛÜˆÜXÙN—‹JJKŸ]\Ë˜[ØØ]U^\™U[š]Y[˜Ý[ÛŠ
^ØÛÛœÝQNÜ™]\›ˆ\‹›X^^\™\É‰˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó^\™\ÎˆžZ[™ÈÈ\ÙHŠÝ
×ˆ^\™H[š]ÈÚ[H\ÈÔHÝ\ÜÈÛ›HŠÜ‹›X^^\™\ÊKJÏLKK\Ëœ™\Ù]^\™U[š]ÏY[˜Ý[ÛŠ
^ÑOLK\ËœÙ]^\™L‘]Ë\ËœÙ]^\™L‘\œ˜^OY[˜Ý[ÛŠKŠ^ØÛÛœÝÏZK™Ù]
JNÙK™\œÚ[ÛŒ	‰œË—×Ý™\œÚ[ÛˆOOYK™\œÚ[ÛÒŠËKŠN›‹˜š[™^\™J•VT‘WÌ‘ÐT”VKË—×ÝÙX™Û^\™K•VT‘L
ÜŠ_K\ËœÙ]^\™LÑY[˜Ý[ÛŠKŠ^ØÛÛœÝÏZK™Ù]
JNÙK™\œÚ[ÛŒ	‰œË—×Ý™\œÚ[ÛˆOOYK™\œÚ[ÛÒŠËKŠN›‹˜š[™^\™J•VT‘WÌÑË—×ÝÙX™Û^\™K•VT‘L
ÜŠ_K\ËœÙ]^\™PÝX™OY[˜Ý[ÛŠKJ^ØÛÛœÝZK™Ù]
JNÙK™\œÚ[ÛŒ	‰›—×Ý™\œÚ[ÛˆOOYK™\œÚ[ÛÙ[˜Ý[ÛŠKK
^ÚYŠˆOOXKš[XYÙK›[™Ý
\™]\›ŽØÛÛœÝÏVŠKJKXKœÛÝ\˜ÙNÛ‹˜š[™^\™J•VT‘WÐÕP‘WÓPTK—×ÝÙX™Û^\™K•VT‘L
Û
NØÛÛœÝOZK™Ù]

NÚYŠ™\œÚ[ÛˆOO]K—×Ý™\œÚ[ÛŸLOOXÊ^Û‹˜XÝ]™U^\™J•VT‘L
Û
NØÛÛœÝOT™K™Ù]š[X\šY\Ê™KÛÜšÚ[™ÐÛÛÜ”ÜXÙJKOXK˜ÛÛÜ”ÜXÙOOO^Û[”™K™Ù]š[X\šY\ÊK˜ÛÛÜ”ÜXÙJKXK˜ÛÛÜ”ÜXÙOOO^OOOZOÝ““Ó‘N”“ÕÔÑT—ÑQUSÕÑP‘ÓÝœ^[ÝÜ™ZJ•S”PÒ×Ñ“TÖWÕÑP‘ÓK™›\JKœ^[ÝÜ™ZJ•S”PÒ×Ô‘SUSTWÐSWÕÑP‘ÓKœ™[][\P[JKœ^[ÝÜ™ZJ•S”PÒ×ÐSQÓ“QS•K[œXÚÐ[YÛ›Y[
Kœ^[ÝÜ™ZJ•S”PÒ×ÐÓÓÔ”ÔPÑWÐÓÓ•‘T”ÒSÓ—ÕÑP‘Ó
NØÛÛœÝXKš\ÐÛÛ\™\ÜÙY^\™_Kš[XYÙVÌKš\ÐÛÛ\™\ÜÙY^\™KOXKš[XYÙVÌI‰˜Kš[XYÙVÌKš\Ñ]U^\™KOV×NÙ›ÜŠ]LÝŽÝ
ÊÊSVÝO\OÛOØKš[XYÙVÝKš[XYÙN˜Kš[XYÙVÝN™ŠKš[XYÙVÝKLKL‹›X^ÝX™[X\Ú^™JKVÝO[
KVÝJNØÛÛœÝÏSVÌKYÊÊ_Ë\Ë˜ÛÛ™\
K™›Ü›X]K˜ÛÛÜ”ÜXÙJKO\Ë˜ÛÛ™\
K\JKÏ^
Kš[\›˜[›Ü›X]KK˜ÛÛÜ”ÜXÙJKO[É‰ˆLOOXKš\ÕšY[Õ^\™K]›ÚYOO]K—×Ý™\œÚ[ÛŸLOOXÎÛ]Ë^JKËŠNÚYŠÊ•VT‘WÐÕP‘WÓPTKŠK
^ÐI‰”‰‰›‹^ÝÜ˜YÙL‘
•VT‘WÐÕP‘WÓPTËËÚYËšZYÚ
NÙ›ÜŠ]OLÙOŽÙJÊÊ^ÐÏSVÙWK›Z\X\ÎÙ›ÜŠ]OLÚOË›[™ÝÚJÊÊ^ØÛÛœÝPÖÚWNØK™›Ü›X]OOZÛ[OOUÐOÛ‹˜ÛÛ\™\ÜÙY^ÝX’[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKK‹ÚY‹šZYÚ‹™]JN›‹˜ÛÛ\™\ÜÙY^[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKKË‹ÚY‹šZYÚ‹™]JN˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ][\ÈØY[œÝ\ÜYÛÛ\™\ÜÙY^\™H›Ü›X][ˆœÙ]^\™PÝX™J
WŠNOÛ‹^ÝX’[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKK‹ÚY‹šZYÚK‹™]JN›‹^[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKKË‹ÚY‹šZYÚK‹™]J___Y[Ù^ÐÏXK›Z\X\ËI‰”‰‰ŠË›[™ÝŒ	‰“
ÊË‹^ÝÜ˜YÙL‘
•VT‘WÐÕP‘WÓPTËVÌKÚYVÌKšZYÚ
JNÙ›ÜŠ]OLÙOŽÙJÊÊZYŠJ^ÐOÛ‹^ÝX’[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKVÙWKÚYVÙWKšZYÚKVÙWK™]JN›‹^[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKËVÙWKÚYVÙWKšZYÚKVÙWK™]JNÙ›ÜŠ]OLÚOË›[™ÝÚJÊÊ^ØÛÛœÝPÖÚWKš[XYÙVÙWKš[XYÙNÐOÛ‹^ÝX’[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKJÌK‹ÚY‹šZYÚK‹™]JN›‹^[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKJÌKË‹ÚY‹šZYÚK‹™]J__Y[Ù^ÐOÛ‹^ÝX’[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKKVÙWJN›‹^[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKËKVÙWJNÙ›ÜŠ]OLÚOË›[™ÝÚJÊÊ^ØÛÛœÝPÖÚWNÐOÛ‹^ÝX’[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKJÌKK‹š[XYÙVÙWJN›‹^[XYÙL‘
•VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKJÌKËK‹š[XYÙVÙWJ___WÊKŠI‰Š•VT‘WÐÕP‘WÓPT
KK—×Ý™\œÚ[ÛZ™\œÚ[Û‹K›Û•\]I‰˜K›Û•\]JJ_YK—×Ý™\œÚ[ÛXK™\œÚ[ÛŸJKJN›‹˜š[™^\™J•VT‘WÐÕP‘WÓPT—×ÝÙX™Û^\™K•VT‘L
ØJ_K\Ëœ™Xš[™^\™\ÏY[˜Ý[ÛŠK‹Š^ØÛÛœÝÏZK™Ù]
JNÝ›ÚYOO[‰‰’ÊË—×ÝÙX™Ûœ˜[YXY™™\‹KK^\™KÓÓÔ—ÐUPÒQS••VT‘WÌ‘
K›ÚYOO\‰‰”JJ_K\ËœÙ]\™[™\•\™Ù]Y[˜Ý[ÛŠJ^ØÛÛœÝYK^\™KÏZK™Ù]
JKZK™Ù]

NÙK˜Y]™[\Ý[™\Š™\ÜÜÙW‹ŠKLOOYKš\ÕÙX‘Ó][\T™[™\•\™Ù]É‰Š›ÚYOOZ—×ÝÙX™Û^\™I‰Š—×ÝÙX™Û^\™O]˜Ü™X]U^\™J
JK—×Ý™\œÚ[Û[™\œÚ[Û‹K›Y[[ÜžK^\™\ÊÊÊNØÛÛœÝOHLOOYKš\ÕÙX‘ÓÝX™T™[™\•\™Ù]HLOOYKš\ÕÙX‘Ó][\T™[™\•\™Ù]ËYÊJ_ÎÚYŠJ^ØË—×ÝÙX™Ûœ˜[YXY™™\V×NÙ›ÜŠ]OLÙOŽÙJÊÊZYŠÉ‰››Z\X\É‰››Z\X\Ë›[™ÝŒ
^ØË—×ÝÙX™Ûœ˜[YXY™™\–ÙWOV×NÙ›ÜŠ]LÛ›Z\X\Ë›[™ÝÛŠÊÊXË—×ÝÙX™Ûœ˜[YXY™™\–ÙWVÛ—O]˜Ü™X]Qœ˜[YXY™™\Š
_Y[ÙHË—×ÝÙX™Ûœ˜[YXY™™\–ÙWO]˜Ü™X]Qœ˜[YXY™™\Š
_Y[Ù^ÚYŠÉ‰››Z\X\É‰››Z\X\Ë›[™ÝŒ
^ØË—×ÝÙX™Ûœ˜[YXY™™\V×NÙ›ÜŠ]OLÙO›Z\X\Ë›[™ÝÙJÊÊXË—×ÝÙX™Ûœ˜[YXY™™\–ÙWO]˜Ü™X]Qœ˜[YXY™™\Š
_Y[ÙHË—×ÝÙX™Ûœ˜[YXY™™\]˜Ü™X]Qœ˜[YXY™™\Š
NÚYŠ
ZYŠ‹™˜]ÐY™™\œÊ^ØÛÛœÝYK^\™NÙ›ÜŠ]OL[‹›[™ÝÙOŽÙJÊÊ^ØÛÛœÝZK™Ù]
–ÙWJNÝ›ÚYOO\‹—×ÝÙX™Û^\™I‰Š‹—×ÝÙX™Û^\™O]˜Ü™X]U^\™J
KK›Y[[ÜžK^\™\ÊÊÊ__Y[ÙHÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\ŽˆÙX‘Ó][\T™[™\•\™Ù]ÈØ[ˆÛ›H™H\ÙYÚ]ÙX‘ÓˆÜˆÑP‘ÓÙ˜]×ØY™™\œÈ^[œÚ[Û‹—ŠNÚYŠÉ‰™KœØ[\\ÏŒ	‰ˆLOOOY]
JJ^ØÛÛœÝOYÛ–ÛNØË—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\]˜Ü™X]Qœ˜[YXY™™\Š
KË—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\V×K‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹Ë—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\ŠNÙ›ÜŠ]LÛK›[™ÝÛŠÊÊ^ØÛÛœÝZVÛ—NØË—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\–Û—O]˜Ü™X]T™[™\˜Y™™\Š
K˜š[™™[™\˜Y™™\Š”‘S‘T•Q‘‘T‹Ë—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\–Û—JNØÛÛœÝO\Ë˜ÛÛ™\
‹™›Ü›X]‹˜ÛÛÜ”ÜXÙJKÏ\Ë˜ÛÛ™\
‹\JK^
‹š[\›˜[›Ü›X]KË‹˜ÛÛÜ”ÜXÙKLOOYKš\Ö”™[™\•\™Ù]
K]
JNÝœ™[™\˜Y™™\”ÝÜ˜YÙS][\Ø[\J”‘S‘T•Q‘‘T‹KÚYKšZYÚ
K™œ˜[YXY™™\”™[™\˜Y™™\Š‘”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS•
Û‹”‘S‘T•Q‘‘T‹Ë—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\–Û—J_]˜š[™™[™\˜Y™™\Š”‘S‘T•Q‘‘T‹[
KK™\Y™™\‰‰ŠË—×ÝÙX™Û\™[™\˜Y™™\]˜Ü™X]T™[™\˜Y™™\Š
K	
Ë—×ÝÙX™Û\™[™\˜Y™™\‹KL
JK‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹[
__ZYŠJ^Û‹˜š[™^\™J•VT‘WÐÕP‘WÓPT—×ÝÙX™Û^\™JKÊ•VT‘WÐÕP‘WÓPT
NÙ›ÜŠ]LÛŽÛŠÊÊZYŠÉ‰››Z\X\É‰››Z\X\Ë›[™ÝŒ
Y›ÜŠ]OLÚO›Z\X\Ë›[™ÝÚJÊÊRÊË—×ÝÙX™Ûœ˜[YXY™™\–Û—VÚWKKÓÓÔ—ÐUPÒQS••VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
Û‹JNÙ[ÙHÊË—×ÝÙX™Ûœ˜[YXY™™\–Û—KKÓÓÔ—ÐUPÒQS••VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
Û‹
N×Ê
I‰Š•VT‘WÐÕP‘WÓPT
K‹[˜š[™^\™J
_Y[ÙHYŠ
^ØÛÛœÝYK^\™NÙ›ÜŠ]ÏLO\‹›[™ÝÜÏNÜÊÊÊ^ØÛÛœÝO\–Ü×KÏZK™Ù]
JNÛ‹˜š[™^\™J•VT‘WÌ‘Ë—×ÝÙX™Û^\™JKÊ•VT‘WÌ‘K
KÊË—×ÝÙX™Ûœ˜[YXY™™\‹KKÓÓÔ—ÐUPÒQS•
ÜË•VT‘WÌ‘
KÊK
I‰Š•VT‘WÌ‘
_[‹[˜š[™^\™J
_Y[Ù^Û]O]•VT‘WÌ‘ÚYŠ
Kš\ÕÙX‘ÓÑ™[™\•\™Ù]Kš\ÕÙX‘Ó\œ˜^T™[™\•\™Ù]
I‰ŠÏÚOYKš\ÕÙX‘ÓÑ™[™\•\™Ù]Ý•VT‘WÌÑ•VT‘WÌ‘ÐT”VN˜ÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó^\™\Îˆ‘QK‘]LÑ^\™H[™‘QK‘]P\œ˜^U^\™HÛ›HÝ\ÜYÚ]ÙX‘Ó‹—ŠJK‹˜š[™^\™JK—×ÝÙX™Û^\™JKÊK
KÉ‰››Z\X\É‰››Z\X\Ë›[™ÝŒ
Y›ÜŠ]LÛ›Z\X\Ë›[™ÝÛŠÊÊRÊË—×ÝÙX™Ûœ˜[YXY™™\–Û—KKÓÓÔ—ÐUPÒQS•KŠNÙ[ÙHÊË—×ÝÙX™Ûœ˜[YXY™™\‹KÓÓÔ—ÐUPÒQS•K
N×Ê
I‰ŠJK‹[˜š[™^\™J
_YK™\Y™™\‰‰”JJ_K\Ë\]T™[™\•\™Ù]Z\X\Y[˜Ý[ÛŠJ^ØÛÛœÝYÊJ_ËÏHLOOYKš\ÕÙX‘Ó][\T™[™\•\™Ù]ÏÙK^\™N–ÙK^\™WNÙ›ÜŠ]OLÏ\Ë›[™ÝØOÎØJÊÊ^ØÛÛœÝÏ\ÖØWNÚYŠÊËŠJ^ØÛÛœÝYKš\ÕÙX‘ÓÝX™T™[™\•\™Ù]Ý•VT‘WÐÕP‘WÓPT•VT‘WÌ‘ÏZK™Ù]
ÊK—×ÝÙX™Û^\™NÛ‹˜š[™^\™J‹ÊKŠŠK‹[˜š[™^\™J
___K\Ë\]S][\Ø[\T™[™\•\™Ù]Y[˜Ý[ÛŠJ^ÚYŠÉ‰™KœØ[\\ÏŒ	‰ˆLOOOY]
JJ^ØÛÛœÝYKš\ÕÙX‘Ó][\T™[™\•\™Ù]ÏÙK^\™N–ÙK^\™WKÏYKÚYOYKšZYÚÛ]Ï]ÓÓÔ—Ð•Q‘‘T—Ð’UØÛÛœÝV×KYKœÝ[˜Ú[Y™™\Ý‘TÔÕSÒSÐUPÒQS•‘TÐUPÒQS•OZK™Ù]
JKHLOOYKš\ÕÙX‘Ó][\T™[™\•\™Ù]ÎÚYŠ
Y›ÜŠ]OLÙO‹›[™ÝÙJÊÊ[‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹K—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\ŠK™œ˜[YXY™™\”™[™\˜Y™™\Š‘”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS•
ÙK”‘S‘T•Q‘‘T‹[
K‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹K—×ÝÙX™Ûœ˜[YXY™™\ŠK™œ˜[YXY™™\•^\™L‘
‘U×Ñ”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS•
ÙK•VT‘WÌ‘[
NÛ‹˜š[™œ˜[YXY™™\Š”‘PQÑ”SQP•Q‘‘T‹K—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\ŠK‹˜š[™œ˜[YXY™™\Š‘U×Ñ”SQP•Q‘‘T‹K—×ÝÙX™Ûœ˜[YXY™™\ŠNÙ›ÜŠ]LÛ‹›[™ÝÛŠÊÊ^Ûœ\Ú
ÓÓÔ—ÐUPÒQS•
ÛŠKK™\Y™™\‰‰›œ\Ú

NØÛÛœÝ]›ÚYOO]K—×ÚYÛ›Ü™Q\˜[Y\É‰K—×ÚYÛ›Ü™Q\˜[Y\ÎÚYŠLOOO\	‰ŠK™\Y™™\‰‰Šß]‘TÐ•Q‘‘T—Ð’U
KKœÝ[˜Ú[Y™™\‰‰Šß]”ÕSÒSÐ•Q‘‘T—Ð’U
JK	‰™œ˜[YXY™™\”™[™\˜Y™™\Š”‘PQÑ”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS•”‘S‘T•Q‘‘T‹K—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\–Û—JKLOO\	‰Šš[˜[Y]Qœ˜[YXY™™\Š”‘PQÑ”SQP•Q‘‘T‹ÚJKš[˜[Y]Qœ˜[YXY™™\Š‘U×Ñ”SQP•Q‘‘T‹ÚJJK
^ØÛÛœÝOZK™Ù]
–Û—JK—×ÝÙX™Û^\™NÝ™œ˜[YXY™™\•^\™L‘
‘U×Ñ”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS••VT‘WÌ‘K
_]˜›]œ˜[YXY™™\ŠËKËKË“‘PT‘TÕ
KÉ‰š[˜[Y]Qœ˜[YXY™™\Š”‘PQÑ”SQP•Q‘‘T‹
_ZYŠ‹˜š[™œ˜[YXY™™\Š”‘PQÑ”SQP•Q‘‘T‹[
K‹˜š[™œ˜[YXY™™\Š‘U×Ñ”SQP•Q‘‘T‹[
K
Y›ÜŠ]OLÙO‹›[™ÝÙJÊÊ^Û‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹K—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\ŠK™œ˜[YXY™™\”™[™\˜Y™™\Š‘”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS•
ÙK”‘S‘T•Q‘‘T‹K—×ÝÙX™ÛÛÛÜ”™[™\˜Y™™\–ÙWJNØÛÛœÝÏZK™Ù]
–ÙWJK—×ÝÙX™Û^\™NÛ‹˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹K—×ÝÙX™Ûœ˜[YXY™™\ŠK™œ˜[YXY™™\•^\™L‘
‘U×Ñ”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS•
ÙK•VT‘WÌ‘Ë
_[‹˜š[™œ˜[YXY™™\Š‘U×Ñ”SQP•Q‘‘T‹K—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\Š__K\ËœÙ]\\™[™\˜Y™™\TK\ËœÙ]\œ˜[YPY™™\•^\™ORË\Ë\ÙS][\Ø[\Y•Y]Y[˜Ý[Ûˆ˜JKŠ^ØÛÛœÝO[‹š\ÕÙX‘ÓŽÜ™]\›žØÛÛ™\™[˜Ý[ÛŠ‹W—Š^Û]ÎØÛÛœÝOT™K™Ù]˜[œÙ™\ŠŠNÚYŠOOQŠ\™]\›ˆ•S”ÒQÓ‘QÐ–UNÚYŠOOZÊ\™]\›ˆ•S”ÒQÓ‘QÔÒÔ•ÍÍÍÍÚYŠOOUÊ\™]\›ˆ•S”ÒQÓ‘QÔÒÔ•ÍWÍWÍWÌNÚYŠLLOO[Š\™]\›ˆ–UNÚYŠLLOOO[Š\™]\›ˆ”ÒÔ•ÚYŠOOPŠ\™]\›ˆ•S”ÒQÓ‘QÔÒÔ•ÚYŠOO^Š\™]\›ˆ’S•ÚYŠOOQÊ\™]\›ˆ•S”ÒQÓ‘QÒS•ÚYŠOOR
\™]\›ˆ‘“ÐUÚYŠOOUŠ\™]\›ˆOÝ’S—Ñ“ÐUŠÏYK™Ù]
“ÑT×Ý^\™WÚ[—Ù›Ø]ŠK[OO\ÏÜË’S—Ñ“ÐUÓÑTÎ›[
NÚYŠLŒOOO[Š\™]\›ˆSNÚYŠOOZŠ\™]\›ˆ”‘ÐNÚYŠLOO[Š\™]\›ˆ“SRSSÑNÚYŠLOOO[Š\™]\›ˆ“SRSSÑWÐSNÚYŠOO\J\™]\›ˆ‘TÐÓÓTÓ‘S•ÚYŠOOVJ\™]\›ˆ‘TÔÕSÒSÚYŠOORÝ
\™]\›ˆÏYK™Ù]
‘VÜÔ‘Ð—ŠK[OO\ÏÜË”Ô‘Ð—ÐSWÑV›[ÚYŠLŽOO[Š\™]\›ˆ”‘QÚYŠOOVŠ\™]\›ˆ”‘QÒS•QÑTŽÚYŠLÌOO[Š\™]\›ˆ”‘ÎÚYŠOORŠ\™]\›ˆ”‘×ÒS•QÑTŽÚYŠOORÊ\™]\›ˆ”‘ÐWÒS•QÑTŽÚYŠOOIOOT_OO]OOY]
ZYŠOOOV
^ÚYŠÏYK™Ù]
•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÜÌÝ×ÜÜ™Ø—ŠK[OO\Ê\™]\›ˆ[ÚYŠOOI
\™]\›ˆËÓÓT‘TÔÑQÔÔ‘Ð—ÔÌÕ×ÑWÑVÚYŠOOTJ\™]\›ˆËÓÓT‘TÔÑQÔÔ‘Ð—ÐSWÔÌÕ×ÑWÑVÚYŠOO]
\™]\›ˆËÓÓT‘TÔÑQÔÔ‘Ð—ÐSWÔÌÕ×Ñ×ÑVÚYŠOOY]
\™]\›ˆËÓÓT‘TÔÑQÔÔ‘Ð—ÐSWÔÌÕ×ÑWÑVY[Ù^ÚYŠÏYK™Ù]
•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÜÌÝ×ŠK[OO\Ê\™]\›ˆ[ÚYŠOOI
\™]\›ˆËÓÓT‘TÔÑQÔ‘Ð—ÔÌÕ×ÑWÑVÚYŠOOTJ\™]\›ˆËÓÓT‘TÔÑQÔ‘ÐWÔÌÕ×ÑWÑVÚYŠOO]
\™]\›ˆËÓÓT‘TÔÑQÔ‘ÐWÔÌÕ×Ñ×ÑVÚYŠOOY]
\™]\›ˆËÓÓT‘TÔÑQÔ‘ÐWÔÌÕ×ÑWÑVZYŠOO[OOZ]OO\OO\Ý
^ÚYŠÏYK™Ù]
•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÜœ×ŠK[OO\Ê\™]\›ˆ[ÚYŠOO[
\™]\›ˆËÓÓT‘TÔÑQÔ‘Ð—Ô”•×Í”ŒWÒSQÎÚYŠOOZ]
\™]\›ˆËÓÓT‘TÔÑQÔ‘Ð—Ô”•×Ì”ŒWÒSQÎÚYŠOO\
\™]\›ˆËÓÓT‘TÔÑQÔ‘ÐWÔ”•×Í”ŒWÒSQÎÚYŠOO\Ý
\™]\›ˆËÓÓT‘TÔÑQÔ‘ÐWÔ”•×Ì”ŒWÒSQßZYŠOOX]
\™]\›ˆÏYK™Ù]
•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÙ]ÌWŠK[OO\ÏÜËÓÓT‘TÔÑQÔ‘Ð—ÑUÌWÕÑP‘Ó›[ÚYŠOO[ÝOO[
^ÚYŠÏYK™Ù]
•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÙ]×ŠK[OO\Ê\™]\›ˆ[ÚYŠOO[Ý
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÑUÌŽœËÓÓT‘TÔÑQÔ‘ÐŽÑUÌŽÚYŠOO[
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÑUÌ—ÑPPÎœËÓÓT‘TÔÑQÔ‘ÐNÑUÌ—ÑPPßZYŠOOXÝOOZOO]]OOYOO\OO[]OOYOOYÝOOWÝOO]OO^OO^]OOS]OOTÝ
^ÚYŠÏYK™Ù]
•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WØ\Ý×ŠK[OO\Ê\™]\›ˆ[ÚYŠOOXÝ
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÍÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÍÒÒŽÚYŠOOZ
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×Í^ÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×Í^ÒÒŽÚYŠOO]]
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×Í^WÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×Í^WÒÒŽÚYŠOOY
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÍžWÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÍžWÒÒŽÚYŠOO\
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×Íž—ÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×Íž—ÒÒŽÚYŠOO[]
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÎWÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÎWÒÒŽÚYŠOOY
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×Î—ÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×Î—ÒÒŽÚYŠOOYÝ
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÎÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÎÒÒŽÚYŠOOWÝ
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÌLWÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÌLWÒÒŽÚYŠOO]
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÌL—ÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÌL—ÒÒŽÚYŠOO^
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÌLÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÌLÒÒŽÚYŠOO^]
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÌLLÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÌLLÒÒŽÚYŠOOS]
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÌLžLÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÌLžLÒÒŽÚYŠOOTÝ
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘ÐŽÐSNÐTÕ×ÌLžL—ÒÒŽœËÓÓT‘TÔÑQÔ‘ÐWÐTÕ×ÌLžL—ÒÒŸZYŠOOXOOUOOQ]
^ÚYŠÏYK™Ù]
‘VÝ^\™WØÛÛ\™\ÜÚ[Û—Øœ×ŠK[OO\Ê\™]\›ˆ[ÚYŠOOX
\™]\›ˆOOOVÜËÓÓT‘TÔÑQÔÔ‘Ð—ÐSWÐ”×ÕS“Ô“WÑVœËÓÓT‘TÔÑQÔ‘ÐWÐ”×ÕS“Ô“WÑVÚYŠOOU
\™]\›ˆËÓÓT‘TÔÑQÔ‘Ð—Ð”×ÔÒQÓ‘QÑ“ÐUÑVÚYŠOOQ]
\™]\›ˆËÓÓT‘TÔÑQÔ‘Ð—Ð”×ÕS”ÒQÓ‘QÑ“ÐUÑVZYŠÍŒŽÏOO[ŸOO]ÝOOP]OOT
^ÚYŠÏYK™Ù]
‘VÝ^\™WØÛÛ\™\ÜÚ[Û—Ü™Ý×ŠK[OO\Ê\™]\›ˆ[ÚYŠOOX
\™]\›ˆËÓÓT‘TÔÑQÔ‘QÔ‘ÕÌWÑVÚYŠOO]Ý
\™]\›ˆËÓÓT‘TÔÑQÔÒQÓ‘QÔ‘QÔ‘ÕÌWÑVÚYŠOOP]
\™]\›ˆËÓÓT‘TÔÑQÔ‘QÑÔ‘QS—Ô‘ÕÌ—ÑVÚYŠOOT
\™]\›ˆËÓÓT‘TÔÑQÔÒQÓ‘QÔ‘QÑÔ‘QS—Ô‘ÕÌ—ÑV\™]\›ˆOOVÚOÝ•S”ÒQÓ‘QÒS•ÌÎŠÏYK™Ù]
•ÑP‘ÓÙ\Ý^\™WŠK[OO\ÏÜË•S”ÒQÓ‘QÒS•ÌÎÕÑP‘Ó›[
N›ÚYOO]Û—OÝÛ—N›[__XÛ\ÜÈXH^[™ÈÜžØÛÛœÝXÝÜŠV×J^ÜÝ\\Š
K\Ëš\Ð\œ˜^PØ[Y\˜OHL\Ë˜Ø[Y\˜\Ï]_XÛ\ÜÈXH^[™È›žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÑÜ›Ý\HL\Ë\OW‘Ü›Ý\Ÿ_XÛÛœÝ˜O^Ý\N—›[Ý™WŸNØÛ\ÜÈ˜^ØÛÛœÝXÝÜŠ
^Ý\Ë—Ý\™Ù]˜^O[[\Ë—ÙÜš\[[\Ë—Ú[™[[YÙ][™ÜXÙJ
^Ü™]\›ˆ[OO]\Ë—Ú[™	‰Š\Ë—Ú[™[™]ÈXK\Ë—Ú[™›X]š^]]Õ\]OHLK\Ë—Ú[™š\ÚX›OHLK\Ë—Ú[™š›Ú[Ï^ßK\Ë—Ú[™š[œ]Ý]O^Ü[˜Ú[™ÎˆL_JK\Ë—Ú[™YÙ]\™Ù]˜^TÜXÙJ
^Ü™]\›ˆ[OO]\Ë—Ý\™Ù]˜^I‰Š\Ë—Ý\™Ù]˜^O[™]ÈXK\Ë—Ý\™Ù]˜^K›X]š^]]Õ\]OHLK\Ë—Ý\™Ù]˜^Kš\ÚX›OHLK\Ë—Ý\™Ù]˜^Kš\Ó[™X\•™[ØÚ]OHLK\Ë—Ý\™Ù]˜^K›[™X\•™[ØÚ]O[™]ÈÙK\Ë—Ý\™Ù]˜^Kš\Ð[™Ý[\•™[ØÚ]OHLK\Ë—Ý\™Ù]˜^K˜[™Ý[\•™[ØÚ]O[™]ÈÙJK\Ë—Ý\™Ù]˜^_YÙ]Üš\ÜXÙJ
^Ü™]\›ˆ[OO]\Ë—ÙÜš\	‰Š\Ë—ÙÜš\[™]ÈXK\Ë—ÙÜš\›X]š^]]Õ\]OHLK\Ë—ÙÜš\š\ÚX›OHLK\Ë—ÙÜš\š\Ó[™X\•™[ØÚ]OHLK\Ë—ÙÜš\›[™X\•™[ØÚ]O[™]ÈÙK\Ë—ÙÜš\š\Ð[™Ý[\•™[ØÚ]OHLK\Ë—ÙÜš\˜[™Ý[\•™[ØÚ]O[™]ÈÙJK\Ë—ÙÜš\Y\Ü]Ú]™[

^Ü™]\›ˆ[OO]\Ë—Ý\™Ù]˜^I‰\Ë—Ý\™Ù]˜^K™\Ü]Ú]™[

K[OO]\Ë—ÙÜš\	‰\Ë—ÙÜš\™\Ü]Ú]™[

K[OO]\Ë—Ú[™	‰\Ë—Ú[™™\Ü]Ú]™[

K\ßXÛÛ›™XÝ

^ÚYŠ	‰š[™
^ØÛÛœÝO]\Ë—Ú[™ÚYŠJY›ÜŠÛÛœÝˆÙˆš[™˜[Y\Ê
J]\Ë—ÙÙ][™›Ú[
KŠ_\™]\›ˆ\Ë™\Ü]Ú]™[
Ý\N—˜ÛÛ›™XÝY‹]NJK\ßY\ØÛÛ›™XÝ

^Ü™]\›ˆ\Ë™\Ü]Ú]™[
Ý\N—™\ØÛÛ›™XÝY‹]NJK[OO]\Ë—Ý\™Ù]˜^I‰Š\Ë—Ý\™Ù]˜^Kš\ÚX›OHLJK[OO]\Ë—ÙÜš\	‰Š\Ë—ÙÜš\š\ÚX›OHLJK[OO]\Ë—Ú[™	‰Š\Ë—Ú[™š\ÚX›OHLJK\ß]\]JKŠ^Û]O[[[[Ï[[ØÛÛœÝO]\Ë—Ý\™Ù]˜^KÏ]\Ë—ÙÜš\]\Ë—Ú[™ÚYŠ	‰—š\ÚX›KX›\œ™YˆOOYKœÙ\ÜÚ[Û‹š\ÚXš[]TÝ]J^ÚYŠ	‰š[™
^ÜÏHLÙ›ÜŠÛÛœÝHÙˆš[™˜[Y\Ê
J^ØÛÛœÝYK™Ù]›Ú[ÜÙJKŠK]\Ë—ÙÙ][™›Ú[
JNÛ[OO]	‰Š‹›X]š^™œ›ÛP\œ˜^J˜[œÙ›Ü›K›X]š^
K‹›X]š^™XÛÛ\ÜÙJ‹œÜÚ][Û‹‹œ›Ý][Û‹‹œØØ[JK‹›X]š^ÛÜ›™YYÕ\]OHL‹š›Ú[˜Y]\Ï]œ˜Y]\ÊK‹š\ÚX›O[[OO]XÛÛœÝO[š›Ú[Ö×š[™^Yš[™Ù\‹]\—K[š›Ú[Ö×[X‹]\—KOZKœÜÚ][Û‹™\Ý[˜ÙUÊ‹œÜÚ][ÛŠKÏKŒ‹ÏKŒNÛš[œ]Ý]Kœ[˜Ú[™É‰˜O›ÊØÏÊš[œ]Ý]Kœ[˜Ú[™ÏHLK\Ë™\Ü]Ú]™[
Ý\N—œ[˜Ú[™‹[™Y™\ÜÎš[™Y™\ÜË\™Ù]\ßJJNˆ[š[œ]Ý]Kœ[˜Ú[™É‰˜O[ËXÉ‰Šš[œ]Ý]Kœ[˜Ú[™ÏHL\Ë™\Ü]Ú]™[
Ý\N—œ[˜ÚÝ\‹[™Y™\ÜÎš[™Y™\ÜË\™Ù]\ßJJ_Y[ÙH[OO[É‰™Üš\ÜXÙI‰ŠYK™Ù]ÜÙJ™Üš\ÜXÙKŠK[OO\‰‰ŠË›X]š^™œ›ÛP\œ˜^J‹˜[œÙ›Ü›K›X]š^
KË›X]š^™XÛÛ\ÜÙJËœÜÚ][Û‹Ëœ›Ý][Û‹ËœØØ[JKË›X]š^ÛÜ›™YYÕ\]OHL‹›[™X\•™[ØÚ]OÊËš\Ó[™X\•™[ØÚ]OHLË›[™X\•™[ØÚ]K˜ÛÜJ‹›[™X\•™[ØÚ]JJN›Ëš\Ó[™X\•™[ØÚ]OHLK‹˜[™Ý[\•™[ØÚ]OÊËš\Ð[™Ý[\•™[ØÚ]OHLË˜[™Ý[\•™[ØÚ]K˜ÛÜJ‹˜[™Ý[\•™[ØÚ]JJN›Ëš\Ð[™Ý[\•™[ØÚ]OHLJJNÛ[OOXI‰ŠOYK™Ù]ÜÙJ\™Ù]˜^TÜXÙKŠK[OOZI‰›[OO\‰‰ŠO\ŠK[OOZI‰ŠK›X]š^™œ›ÛP\œ˜^JK˜[œÙ›Ü›K›X]š^
KK›X]š^™XÛÛ\ÜÙJKœÜÚ][Û‹Kœ›Ý][Û‹KœØØ[JKK›X]š^ÛÜ›™YYÕ\]OHLK›[™X\•™[ØÚ]OÊKš\Ó[™X\•™[ØÚ]OHLK›[™X\•™[ØÚ]K˜ÛÜJK›[™X\•™[ØÚ]JJN˜Kš\Ó[™X\•™[ØÚ]OHLKK˜[™Ý[\•™[ØÚ]OÊKš\Ð[™Ý[\•™[ØÚ]OHLK˜[™Ý[\•™[ØÚ]K˜ÛÜJK˜[™Ý[\•™[ØÚ]JJN˜Kš\Ð[™Ý[\•™[ØÚ]OHLK\Ë™\Ü]Ú]™[
˜JJJ_\™]\›ˆ[OOXI‰ŠKš\ÚX›O[[OOZJK[OO[É‰ŠËš\ÚX›O[[OO\ŠK[OO[	‰Šš\ÚX›O[[OO\ÊK\ßWÙÙ][™›Ú[
J^ÚYŠ›ÚYOO]š›Ú[ÖÙKš›Ú[˜[YWJ^ØÛÛœÝ[™]ÈXNÛ‹›X]š^]]Õ\]OHLK‹š\ÚX›OHLKš›Ú[ÖÙKš›Ú[˜[YWO[‹˜Y
Š_\™]\›ˆš›Ú[ÖÙKš›Ú[˜[YW__XÛ\ÜÈØH^[™È^ØÛÛœÝXÝÜŠJ^ÜÝ\\Š
NØÛÛœÝ]\ÎÛ]O[[LKÏ[[OW›ØØ[Y›ÛÜ—‹ÏLK[[Ï[[[[O[[[[[[ØÛÛœÝOYK™Ù]ÛÛ^]šX]\Ê
NÛ][[Ï[[ØÛÛœÝÏV×KV×K[™]ÈYNÛ]O[[ØÛÛœÝO[™]ÈÜŽÓK›^Y\œË™[˜X›JJKKšY]ÜÜ[™]È™NØÛÛœÝÏ[™]ÈÜŽÔË›^Y\œË™[˜X›JŠKËšY]ÜÜ[™]È™NØÛÛœÝVÓK×K[™]ÈXNÕ›^Y\œË™[˜X›JJK›^Y\œË™[˜X›JŠNÛ]O[[Ï[[Ù[˜Ý[ÛˆJ
^ØÛÛœÝO]‹š[™^ÙŠš[œ]ÛÝ\˜ÙJNÚYŠLOOOYJ\™]\›ŽØÛÛœÝWÖÙWNÝ›ÚYOO[‰‰Š‹\]Jš[œ]ÛÝ\˜ÙK™œ˜[YKÊK‹™\Ü]Ú]™[
Ý\N\K]Nš[œ]ÛÝ\˜Ù_JJ_Y[˜Ý[ÛˆŠ
^ÚKœ™[[Ý™Q]™[\Ý[™\ŠœÙ[XÝ‹JKKœ™[[Ý™Q]™[\Ý[™\ŠœÙ[XÝÝ\‹JKKœ™[[Ý™Q]™[\Ý[™\ŠœÙ[XÝ[™‹JKKœ™[[Ý™Q]™[\Ý[™\ŠœÜ]YY^™W‹JKKœ™[[Ý™Q]™[\Ý[™\ŠœÜ]YY^™\Ý\‹JKKœ™[[Ý™Q]™[\Ý[™\ŠœÜ]YY^™Y[™‹JKKœ™[[Ý™Q]™[\Ý[™\Š™[™‹ŠKKœ™[[Ý™Q]™[\Ý[™\Šš[œ]ÛÝ\˜Ù\ØÚ[™ÙW‹ÊNÙ›ÜŠ]LÝË›[™ÝÝ
ÊÊ^ØÛÛœÝO]–ÝNÛ[OOYI‰Š–ÝO[[ÖÝK™\ØÛÛ›™XÝ
JJ_QO[[Ï[[œÙ]™[™\•\™Ù]
ŠK[[O[[[[O[[Ï[[œÝÜ

K‹š\Ô™\Ù[[™ÏHLKœÙ]^[˜][ÊJKœÙ]Ú^™JÚYšZYÚLJK‹™\Ü]Ú]™[
Ý\N—œÙ\ÜÚ[Û™[™ŸJ_Y[˜Ý[ÛˆÊ
^Ù›ÜŠ]OLÙOœ™[[Ý™Y›[™ÝÙJÊÊ^ØÛÛœÝ]œ™[[Ý™YÙWKO]‹š[™^ÙŠŠNÚOL	‰Š–ÚWO[[ÖÚWK™\ØÛÛ›™XÝ
ŠJ_Y›ÜŠ]OLÙO˜YY›[™ÝÙJÊÊ^ØÛÛœÝ]˜YYÙWNÛ]O]‹š[™^ÙŠŠNÚYŠLOOOZJ^Ù›ÜŠ]LÝË›[™ÝÝ
ÊÊ^ÚYŠ]‹›[™Ý
^Ý‹œ\Ú
ŠKO]Øœ™XZßZYŠ[OO]–ÝJ^Ý–ÝO[‹O]Øœ™XZß_ZYŠLOOOZJXœ™XZßXÛÛœÝWÖÚWNÜ‰‰œ‹˜ÛÛ›™XÝ
Š__]\Ë˜Ø[Y\˜P]]Õ\]OHL\Ë™[˜X›YHLK\Ëš\Ô™\Ù[[™ÏHLK\Ë™Ù]ÛÛ›Û\Y[˜Ý[ÛŠ
^Û]OWÖÝNÜ™]\›ˆ›ÚYOOYI‰ŠO[™]È˜KÖÝOYJKK™Ù]\™Ù]˜^TÜXÙJ
_K\Ë™Ù]ÛÛ›Û\‘Üš\Y[˜Ý[ÛŠ
^Û]OWÖÝNÜ™]\›ˆ›ÚYOOYI‰ŠO[™]È˜KÖÝOYJKK™Ù]Üš\ÜXÙJ
_K\Ë™Ù][™Y[˜Ý[ÛŠ
^Û]OWÖÝNÜ™]\›ˆ›ÚYOOYI‰ŠO[™]È˜KÖÝOYJKK™Ù][™ÜXÙJ
_K\ËœÙ]œ˜[YXY™™\”ØØ[Q˜XÝÜY[˜Ý[ÛŠ
^Ü]LOO[‹š\Ô™\Ù[[™É‰˜ÛÛœÛÛKØ\›Š•‘QK•ÙX–“X[˜YÙ\ŽˆØ[››ÝÚ[™ÙHœ˜[YXY™™\ˆØØ[HÚ[H™\Ù[[™Ë—Š_K\ËœÙ]™Y™\™[˜ÙTÜXÙU\OY[˜Ý[ÛŠ
^ØO]LOO[‹š\Ô™\Ù[[™É‰˜ÛÛœÛÛKØ\›Š•‘QK•ÙX–“X[˜YÙ\ŽˆØ[››ÝÚ[™ÙH™Y™\™[˜ÙHÜXÙH\HÚ[H™\Ù[[™Ë—Š_K\Ë™Ù]™Y™\™[˜ÙTÜXÙOY[˜Ý[ÛŠ
^Ü™]\›ˆßK\ËœÙ]™Y™\™[˜ÙTÜXÙOY[˜Ý[ÛŠ
^Û]K\Ë™Ù]˜\ÙS^Y\Y[˜Ý[ÛŠ
^Ü™]\›ˆ[OO]OÝN™K\Ë™Ù]š[™[™ÏY[˜Ý[ÛŠ
^Ü™]\›ˆK\Ë™Ù]œ˜[YOY[˜Ý[ÛŠ
^Ü™]\›ˆK\Ë™Ù]Ù\ÜÚ[ÛY[˜Ý[ÛŠ
^Ü™]\›ˆ_K\ËœÙ]Ù\ÜÚ[ÛX\Þ[˜È[˜Ý[ÛŠÊ^ÚYŠOXË[OOZJ^ÚYŠ]™Ù]™[™\•\™Ù]

KK˜Y]™[\Ý[™\ŠœÙ[XÝ‹JKK˜Y]™[\Ý[™\ŠœÙ[XÝÝ\‹JKK˜Y]™[\Ý[™\ŠœÙ[XÝ[™‹JKK˜Y]™[\Ý[™\ŠœÜ]YY^™W‹JKK˜Y]™[\Ý[™\ŠœÜ]YY^™\Ý\‹JKK˜Y]™[\Ý[™\ŠœÜ]YY^™Y[™‹JKK˜Y]™[\Ý[™\Š™[™‹ŠKK˜Y]™[\Ý[™\Šš[œ]ÛÝ\˜Ù\ØÚ[™ÙW‹ÊKLOO[KžÛÛ\]X›I‰˜]ØZ]K›XZÙVÛÛ\]X›J
KO]™Ù]^[˜][Ê
K™Ù]Ú^™J
K›ÚYOOZKœ™[™\”Ý]K›^Y\œßLOOO]˜Ø\Xš[]Y\Ëš\ÕÙX‘ÓŠ^ØÛÛœÝ^Ø[X[X\Î›ÚYOOZKœ™[™\”Ý]K›^Y\œßK˜[X[X\Ë[NˆL\›K™\Ý[˜Ú[›KœÝ[˜Ú[œ˜[YXY™™\”ØØ[Q˜XÝÜŽœŸNÙ[™]È•ÙX‘Ó^Y\ŠKKŠKK\]T™[™\”Ý]JØ˜\ÙS^Y\Ž™JKœÙ]^[˜][ÊJKœÙ]Ú^™J™œ˜[YXY™™\•ÚY™œ˜[YXY™™\’ZYÚLJKÏ[™]ÈÙJ™œ˜[YXY™™\•ÚY™œ˜[YXY™™\’ZYÚÙ›Ü›X]š‹\N‘‹ÛÛÜ”ÜXÙN›Ý]]ÛÛÜ”ÜXÙKÝ[˜Ú[Y™™\Ž›KœÝ[˜Ú[J_Y[Ù^Û][[Ï[[O[[ÛK™\	‰ŠO[KœÝ[˜Ú[ÙK‘TÔÕSÒS™K‘TÐÓÓTÓ‘S•[KœÝ[˜Ú[ÖNœKÏ[KœÝ[˜Ú[Ö‘ÊNØÛÛœÝÏ^ØÛÛÜ‘›Ü›X]™K”‘ÐN\›Ü›X]˜KØØ[Q˜XÝÜŽœŸNÚ[™]È•ÙX‘Óš[™[™ÊKJKOZ˜Ü™X]T›Ú™XÝ[Û“^Y\ŠÊKK\]T™[™\”Ý]JÛ^Y\œÎ–ÝW_JKœÙ]^[˜][ÊJKœÙ]Ú^™JK^\™UÚYK^\™RZYÚLJKÏ[™]ÈÙJK^\™UÚYK^\™RZYÚÙ›Ü›X]š‹\N‘‹\^\™N›™]ÈœÊK^\™UÚYK^\™RZYÚË›ÚY›ÚY›ÚY›ÚY›ÚY›ÚYŠKÝ[˜Ú[Y™™\Ž›KœÝ[˜Ú[ÛÛÜ”ÜXÙN›Ý]]ÛÛÜ”ÜXÙKØ[\\Î›K˜[X[X\ÏÍŒJNÝœ›Ü\Y\Ë™Ù]
ÊK—×ÚYÛ›Ü™Q\˜[Y\Ï]KšYÛ›Ü™Q\˜[Y\ßYËš\Ö”™[™\•\™Ù]HL\ËœÙ]›Ý™X][ÛŠÊK[[ÏX]ØZ]Kœ™\]Y\Ý™Y™\™[˜ÙTÜXÙJJKœÙ]ÛÛ^
JKœÝ\

K‹š\Ô™\Ù[[™ÏHL‹™\Ü]Ú]™[
Ý\N—œÙ\ÜÚ[ÛœÝ\ŸJ__K\Ë™Ù][š\›Û›Y[›[™[ÙOY[˜Ý[ÛŠ
^ÚYŠ[OOZJ\™]\›ˆK™[š\›Û›Y[›[™[Ù_NØÛÛœÝ[™]ÈÙK[™]ÈÙNÙ[˜Ý[ÛˆJJ^Û[OOYOÝ›X]š^ÛÜ›˜ÛÜJ›X]š^
N›X]š^ÛÜ››][\SX]šXÙ\ÊK›X]š^ÛÜ››X]š^
K›X]š^ÛÜ›[™\œÙK˜ÛÜJ›X]š^ÛÜ›
Kš[™\

_]\Ë\]PØ[Y\˜OY[˜Ý[ÛŠ
^ÚYŠ[OOZJ\™]\›ŽÕ›™X\TË›™X\SK›™X\]›™X\‹™˜\TË™˜\SK™˜\]™˜\‹OOOU›™X\‰‰ÏOOU™˜\Ÿ
K\]T™[™\”Ý]JÙ\™X\Ž•›™X\‹\˜\Ž•™˜\ŸJKOU›™X\‹ÏU™˜\ŠNØÛÛœÝO]œ\™[U˜Ø[Y\˜\ÎÒJJNÙ›ÜŠ]LÝ‹›[™ÝÝ
ÊÊRJ–ÝKJNÌOO[‹›[™ÝÙ[˜Ý[ÛŠKŠ^ÓœÙ]œ›ÛSX]š^ÜÚ][ÛŠK›X]š^ÛÜ›
KœÙ]œ›ÛSX]š^ÜÚ][ÛŠ‹›X]š^ÛÜ›
NØÛÛœÝOS™\Ý[˜ÙUÊ
KYKœ›Ú™XÝ[Û“X]š^™[[Y[ËÏ[‹œ›Ú™XÝ[Û“X]š^™[[Y[ËO\–ÌMKÊ–ÌLKLJKÏ\–ÌMKÊ–ÌLJÌJKJ–ÎWJÌJKÜ–ÍWKÏJ–ÎWKLJKÜ–ÍWKJ–ÎKLJKÜ–ÌKOJÖÎJÌJKÜÖÌKXJšXJKOZKÊZ
ÝJK[J‹ZÙK›X]š^ÛÜ›™XÛÛ\ÜÙJœÜÚ][Û‹œ]X]\›š[Û‹œØØ[JK˜[œÛ]V
ŠK˜[œÛ]VŠJK›X]š^ÛÜ›˜ÛÛ\ÜÙJœÜÚ][Û‹œ]X]\›š[Û‹œØØ[JK›X]š^ÛÜ›[™\œÙK˜ÛÜJ›X]š^ÛÜ›
Kš[™\

NØÛÛœÝÏXJÛKÏ[ÊÛKYY‹\
ÊKYŠKO[
›Ë×Ê™ËOXÊ›Ë×Ê™ÎÝœ›Ú™XÝ[Û“X]š^›XZÙT\œÜXÝ]™J‹KKËÊKœ›Ú™XÝ[Û“X]š^[™\œÙK˜ÛÜJœ›Ú™XÝ[Û“X]š^
Kš[™\

_JKÊN•œ›Ú™XÝ[Û“X]š^˜ÛÜJKœ›Ú™XÝ[Û“X]š^
K[˜Ý[ÛŠKŠ^Û[OO[Ý›X]š^˜ÛÜJK›X]š^ÛÜ›
NŠ›X]š^˜ÛÜJ‹›X]š^ÛÜ›
K›X]š^š[™\

K›X]š^›][\JK›X]š^ÛÜ›
JNÝ›X]š^™XÛÛ\ÜÙJœÜÚ][Û‹œ]X]\›š[Û‹œØØ[JK\]SX]š^ÛÜ›
L
Kœ›Ú™XÝ[Û“X]š^˜ÛÜJKœ›Ú™XÝ[Û“X]š^
Kœ›Ú™XÝ[Û“X]š^[™\œÙK˜ÛÜJKœ›Ú™XÝ[Û“X]š^[™\œÙJKš\Ô\œÜXÝ]™PØ[Y\˜I‰Š™›ÝLŠœ™J“X]˜][ŠKÝœ›Ú™XÝ[Û“X]š^™[[Y[ÖÍWJKž›ÛÛOLJ_JJ_K\Ë™Ù]Ø[Y\˜OY[˜Ý[ÛŠ
^Ü™]\›ˆK\Ë™Ù]›Ý™X][ÛY[˜Ý[ÛŠ
^ÚYŠ[OO]_[OOY
\™]\›ˆßK\ËœÙ]›Ý™X][ÛY[˜Ý[ÛŠ
^ÛÏ][OO]I‰ŠK™š^Y›Ý™X][Û]
K[OOY	‰›ÚYOOY™š^Y›Ý™X][Û‰‰Š™š^Y›Ý™X][Û]
_NÛ]O[[ØÛÛœÝ[™]ÈÜŽÑœÙ][š[X][Û“ÛÜ

[˜Ý[ÛŠKJ^ÚYŠÏZK™Ù]šY]Ù\”ÜÙJÊKZK[OOXÊ^ØÛÛœÝOXËšY]ÜÎÛ[OOY	‰ŠœÙ]™[™\•\™Ù]œ˜[YXY™™\ŠË™œ˜[YXY™™\ŠKœÙ]™[™\•\™Ù]
ÊJNÛ]HLNÙK›[™ÝOOU˜Ø[Y\˜\Ë›[™Ý	‰Š˜Ø[Y\˜\Ë›[™ÝLHL
NÙ›ÜŠ]OLÚOK›[™ÝÚJÊÊ^ØÛÛœÝYVÚWNÛ]Ï[[ÚYŠ[OOY
\ÏY™Ù]šY]ÜÜ
ŠNÙ[Ù^ØÛÛœÝOZ™Ù]šY]ÔÝX’[XYÙJKŠNÜÏYKšY]ÜÜOOZI‰ŠœÙ]™[™\•\™Ù]^\™\ÊËK˜ÛÛÜ•^\™KKšYÛ›Ü™Q\˜[Y\ÏÝ›ÚY™K™\Ý[˜Ú[^\™JKœÙ]™[™\•\™Ù]
ÊJ_[]OX–ÚWNÝ›ÚYOOXI‰ŠO[™]ÈÜ‹K›^Y\œË™[˜X›JJKKšY]ÜÜ[™]È™K–ÚWOXJKK›X]š^™œ›ÛP\œ˜^J‹˜[œÙ›Ü›K›X]š^
KK›X]š^™XÛÛ\ÜÙJKœÜÚ][Û‹Kœ]X]\›š[Û‹KœØØ[JKKœ›Ú™XÝ[Û“X]š^™œ›ÛP\œ˜^J‹œ›Ú™XÝ[Û“X]š^
KKœ›Ú™XÝ[Û“X]š^[™\œÙK˜ÛÜJKœ›Ú™XÝ[Û“X]š^
Kš[™\

KKšY]ÜÜœÙ]
ËžËžKËÚYËšZYÚ
KOOZI‰Š›X]š^˜ÛÜJK›X]š^
K›X]š^™XÛÛ\ÜÙJœÜÚ][Û‹œ]X]\›š[Û‹œØØ[JJKLOO[‰‰•˜Ø[Y\˜\Ëœ\Ú
J__Y›ÜŠ]LÝË›[™ÝÝ
ÊÊ^ØÛÛœÝO]–ÝKWÖÝNÛ[OOYI‰›ÚYOO[‰‰›‹\]JKKÊ_UI‰•JKJKK™]XÝY[™\É‰›‹™\Ü]Ú]™[
Ý\N—œ[™\Ù]XÝY‹]Nš_JK[[JJK\ËœÙ][š[X][Û“ÛÜY[˜Ý[ÛŠ
^ÕO]K\Ë™\ÜÜÙOY[˜Ý[ÛŠ
^ß__Y[˜Ý[Ûˆ	JJ^Ù[˜Ý[ÛˆŠJ^ÈLOO]›X]š^]]Õ\]I‰\]SX]š^

KK˜[YK˜ÛÜJ›X]š^
_Y[˜Ý[ÛˆJKŠ^ÚK›ÜXÚ]K˜[YO\‹›ÜXÚ]K‹˜ÛÛÜ‰‰šK™Y™\ÙK˜[YK˜ÛÜJ‹˜ÛÛÜŠK‹™[Z\ÜÚ]™I‰šK™[Z\ÜÚ]™K˜[YK˜ÛÜJ‹™[Z\ÜÚ]™JK›][\TØØ[\Š‹™[Z\ÜÚ]™R[[œÚ]JK‹›X\	‰ŠK›X\˜[YO\‹›X\Š‹›X\K›X\˜[œÙ›Ü›JJK‹˜[SX\	‰ŠK˜[SX\˜[YO\‹˜[SX\Š‹˜[SX\K˜[SX\˜[œÙ›Ü›JJK‹˜[\X\	‰ŠK˜[\X\˜[YO\‹˜[\X\Š‹˜[\X\K˜[\X\˜[œÙ›Ü›JKK˜[\ØØ[K˜[YO\‹˜[\ØØ[K‹œÚYOOOXI‰ŠK˜[\ØØ[K˜[YJKLJJK‹››Ü›X[X\	‰ŠK››Ü›X[X\˜[YO\‹››Ü›X[X\Š‹››Ü›X[X\K››Ü›X[X\˜[œÙ›Ü›JKK››Ü›X[ØØ[K˜[YK˜ÛÜJ‹››Ü›X[ØØ[JK‹œÚYOOOXI‰šK››Ü›X[ØØ[K˜[YK›™YØ]J
JK‹™\ÜXÙ[Y[X\	‰ŠK™\ÜXÙ[Y[X\˜[YO\‹™\ÜXÙ[Y[X\Š‹™\ÜXÙ[Y[X\K™\ÜXÙ[Y[X\˜[œÙ›Ü›JKK™\ÜXÙ[Y[ØØ[K˜[YO\‹™\ÜXÙ[Y[ØØ[KK™\ÜXÙ[Y[šX\Ë˜[YO\‹™\ÜXÙ[Y[šX\ÊK‹™[Z\ÜÚ]™SX\	‰ŠK™[Z\ÜÚ]™SX\˜[YO\‹™[Z\ÜÚ]™SX\Š‹™[Z\ÜÚ]™SX\K™[Z\ÜÚ]™SX\˜[œÙ›Ü›JJK‹œÜXÝ[\“X\	‰ŠKœÜXÝ[\“X\˜[YO\‹œÜXÝ[\“X\Š‹œÜXÝ[\“X\KœÜXÝ[\“X\˜[œÙ›Ü›JJK‹˜[U\ÝŒ	‰ŠK˜[U\Ý˜[YO\‹˜[U\Ý
NØÛÛœÝÏYK™Ù]
ŠK™[“X\ÚYŠÉ‰ŠK™[“X\˜[YO\ËK™›\[“X\˜[YO\Ëš\ÐÝX™U^\™I‰ˆLOOO\Ëš\Ô™[™\•\™Ù]^\™OËLNŒKKœ™Y›XÝ]š]K˜[YO\‹œ™Y›XÝ]š]KKš[Ü‹˜[YO\‹š[Ü‹Kœ™Yœ˜XÝ[Û”˜][Ë˜[YO\‹œ™Yœ˜XÝ[Û”˜][ÊK‹›YÚX\
^ÚK›YÚX\˜[YO\‹›YÚX\ØÛÛœÝOHLOO]—Ý\ÙSYØXÞSYÚÏÓX]”NŒNÚK›YÚX\[[œÚ]K˜[YO\‹›YÚX\[[œÚ]J™KŠ‹›YÚX\K›YÚX\˜[œÙ›Ü›J_\‹˜[ÓX\	‰ŠK˜[ÓX\˜[YO\‹˜[ÓX\K˜[ÓX\[[œÚ]K˜[YO\‹˜[ÓX\[[œÚ]KŠ‹˜[ÓX\K˜[ÓX\˜[œÙ›Ü›JJ_\™]\›žÜ™Yœ™\Ú›ÙÕ[šY›Ü›\Î™[˜Ý[ÛŠKŠ^Û‹˜ÛÛÜ‹™Ù]‘ÐŠK™›ÙÐÛÛÜ‹˜[YK\Š
JK‹š\Ñ›ÙÏÊK™›ÙÓ™X\‹˜[YO[‹›™X\‹K™›ÙÑ˜\‹˜[YO[‹™˜\ŠN›‹š\Ñ›ÙÑ^‰‰ŠK™›ÙÑ[œÚ]K˜[YO[‹™[œÚ]J_K™Yœ™\ÚX]\šX[[šY›Ü›\Î™[˜Ý[ÛŠ‹ËË
^Ü‹š\ÓY\Ú˜\ÚXÓX]\šX[‹š\ÓY\Ú[X™\X]\šX[ÚJŠNœ‹š\ÓY\ÚÛÛ“X]\šX[ÊJŠK[˜Ý[ÛŠJ^ÙK™Ü˜YY[X\	‰Š™Ü˜YY[X\˜[YOYK™Ü˜YY[X\
_JŠJNœ‹š\ÓY\ÚÛ™ÓX]\šX[ÊJŠK[˜Ý[ÛŠJ^ÝœÜXÝ[\‹˜[YK˜ÛÜJKœÜXÝ[\ŠKœÚ[š[™\ÜË˜[YOSX]›X^
KœÚ[š[™\ÜËYKM
_JŠJNœ‹š\ÓY\ÚÝ[™\™X]\šX[ÊJŠK[˜Ý[ÛŠJ^Ý›Y][™\ÜË˜[YOZK›Y][™\ÜËK›Y][™\ÜÓX\	‰Š›Y][™\ÜÓX\˜[YOZK›Y][™\ÜÓX\ŠK›Y][™\ÜÓX\›Y][™\ÜÓX\˜[œÙ›Ü›JJNÝœ›ÝYÚ™\ÜË˜[YOZKœ›ÝYÚ™\ÜËKœ›ÝYÚ™\ÜÓX\	‰Šœ›ÝYÚ™\ÜÓX\˜[YOZKœ›ÝYÚ™\ÜÓX\ŠKœ›ÝYÚ™\ÜÓX\œ›ÝYÚ™\ÜÓX\˜[œÙ›Ü›JJNØÛÛœÝYK™Ù]
JK™[“X\Ü‰‰Š™[“X\[[œÚ]K˜[YOZK™[“X\[[œÚ]J_JŠK‹š\ÓY\Ú\ÚXØ[X]\šX[	‰™[˜Ý[ÛŠKJ^Ýš[Ü‹˜[YOYKš[Ü‹KœÚY[Œ	‰ŠœÚY[ÛÛÜ‹˜[YK˜ÛÜJKœÚY[ÛÛÜŠK›][\TØØ[\ŠKœÚY[ŠKœÚY[”›ÝYÚ™\ÜË˜[YOYKœÚY[”›ÝYÚ™\ÜËKœÚY[ÛÛÜ“X\	‰ŠœÚY[ÛÛÜ“X\˜[YOYKœÚY[ÛÛÜ“X\ŠKœÚY[ÛÛÜ“X\œÚY[ÛÛÜ“X\˜[œÙ›Ü›JJKKœÚY[”›ÝYÚ™\ÜÓX\	‰ŠœÚY[”›ÝYÚ™\ÜÓX\˜[YOYKœÚY[”›ÝYÚ™\ÜÓX\ŠKœÚY[”›ÝYÚ™\ÜÓX\œÚY[”›ÝYÚ™\ÜÓX\˜[œÙ›Ü›JJJNÙK˜ÛX\˜ÛØ]Œ	‰Š˜ÛX\˜ÛØ]˜[YOYK˜ÛX\˜ÛØ]˜ÛX\˜ÛØ]›ÝYÚ™\ÜË˜[YOYK˜ÛX\˜ÛØ]›ÝYÚ™\ÜËK˜ÛX\˜ÛØ]X\	‰Š˜ÛX\˜ÛØ]X\˜[YOYK˜ÛX\˜ÛØ]X\ŠK˜ÛX\˜ÛØ]X\˜ÛX\˜ÛØ]X\˜[œÙ›Ü›JJKK˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\	‰Š˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\˜[YOYK˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\ŠK˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\˜[œÙ›Ü›JJKK˜ÛX\˜ÛØ]›Ü›X[X\	‰Š˜ÛX\˜ÛØ]›Ü›X[X\˜[YOYK˜ÛX\˜ÛØ]›Ü›X[X\ŠK˜ÛX\˜ÛØ]›Ü›X[X\˜ÛX\˜ÛØ]›Ü›X[X\˜[œÙ›Ü›JK˜ÛX\˜ÛØ]›Ü›X[ØØ[K˜[YK˜ÛÜJK˜ÛX\˜ÛØ]›Ü›X[ØØ[JKKœÚYOOOXI‰˜ÛX\˜ÛØ]›Ü›X[ØØ[K˜[YK›™YØ]J
JJNÙKš\šY\ØÙ[˜ÙOŒ	‰Šš\šY\ØÙ[˜ÙK˜[YOYKš\šY\ØÙ[˜ÙKš\šY\ØÙ[˜ÙRSÔ‹˜[YOYKš\šY\ØÙ[˜ÙRSÔ‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓZ[š[][K˜[YOYKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙVÌKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX^[][K˜[YOYKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙVÌWKKš\šY\ØÙ[˜ÙSX\	‰Šš\šY\ØÙ[˜ÙSX\˜[YOYKš\šY\ØÙ[˜ÙSX\ŠKš\šY\ØÙ[˜ÙSX\š\šY\ØÙ[˜ÙSX\˜[œÙ›Ü›JJKKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\	‰Šš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\˜[YOYKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\ŠKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\˜[œÙ›Ü›JJJNÙK˜[œÛZ\ÜÚ[ÛŒ	‰Š˜[œÛZ\ÜÚ[Û‹˜[YOYK˜[œÛZ\ÜÚ[Û‹˜[œÛZ\ÜÚ[Û”Ø[\\“X\˜[YOZK^\™K˜[œÛZ\ÜÚ[Û”Ø[\\”Ú^™K˜[YKœÙ]
KÚYKšZYÚ
KK˜[œÛZ\ÜÚ[Û“X\	‰Š˜[œÛZ\ÜÚ[Û“X\˜[YOYK˜[œÛZ\ÜÚ[Û“X\ŠK˜[œÛZ\ÜÚ[Û“X\˜[œÛZ\ÜÚ[Û“X\˜[œÙ›Ü›JJKXÚÛ™\ÜË˜[YOYKXÚÛ™\ÜËKXÚÛ™\ÜÓX\	‰ŠXÚÛ™\ÜÓX\˜[YOYKXÚÛ™\ÜÓX\ŠKXÚÛ™\ÜÓX\XÚÛ™\ÜÓX\˜[œÙ›Ü›JJK˜][X][Û‘\Ý[˜ÙK˜[YOYK˜][X][Û‘\Ý[˜ÙK˜][X][ÛÛÛÜ‹˜[YK˜ÛÜJK˜][X][ÛÛÛÜŠJNÙK˜[š\ÛÝ›ÜOŒ	‰Š˜[š\ÛÝ›ÜU™XÝÜ‹˜[YKœÙ]
K˜[š\ÛÝ›ÜJ“X]˜ÛÜÊK˜[š\ÛÝ›ÜT›Ý][ÛŠKK˜[š\ÛÝ›ÜJ“X]œÚ[ŠK˜[š\ÛÝ›ÜT›Ý][ÛŠJKK˜[š\ÛÝ›ÜSX\	‰Š˜[š\ÛÝ›ÜSX\˜[YOYK˜[š\ÛÝ›ÜSX\ŠK˜[š\ÛÝ›ÜSX\˜[š\ÛÝ›ÜSX\˜[œÙ›Ü›JJJNÝœÜXÝ[\’[[œÚ]K˜[YOYKœÜXÝ[\’[[œÚ]KœÜXÝ[\ÛÛÜ‹˜[YK˜ÛÜJKœÜXÝ[\ÛÛÜŠKKœÜXÝ[\ÛÛÜ“X\	‰ŠœÜXÝ[\ÛÛÜ“X\˜[YOYKœÜXÝ[\ÛÛÜ“X\ŠKœÜXÝ[\ÛÛÜ“X\œÜXÝ[\ÛÛÜ“X\˜[œÙ›Ü›JJNÙKœÜXÝ[\’[[œÚ]SX\	‰ŠœÜXÝ[\’[[œÚ]SX\˜[YOYKœÜXÝ[\’[[œÚ]SX\ŠKœÜXÝ[\’[[œÚ]SX\œÜXÝ[\’[[œÚ]SX\˜[œÙ›Ü›JJ_J‹
JNœ‹š\ÓY\ÚX]Ø\X]\šX[ÊJŠK[˜Ý[ÛŠJ^ÙK›X]Ø\	‰Š›X]Ø\˜[YOYK›X]Ø\
_JŠJNœ‹š\ÓY\Ú\X]\šX[ÚJŠNœ‹š\ÓY\Ú\Ý[˜ÙSX]\šX[ÊJŠK[˜Ý[ÛŠŠ^ØÛÛœÝOYK™Ù]
ŠK›YÚÝœ™Y™\™[˜ÙTÜÚ][Û‹˜[YKœÙ]œ›ÛSX]š^ÜÚ][ÛŠK›X]š^ÛÜ›
K›™X\‘\Ý[˜ÙK˜[YOZKœÚYÝË˜Ø[Y\˜K›™X\‹™˜\‘\Ý[˜ÙK˜[YOZKœÚYÝË˜Ø[Y\˜K™˜\ŸJŠJNœ‹š\ÓY\Ú›Ü›X[X]\šX[ÚJŠNœ‹š\Ó[™P˜\ÚXÓX]\šX[Ê[˜Ý[ÛŠJ^Ý™Y™\ÙK˜[YK˜ÛÜJK˜ÛÛÜŠK›ÜXÚ]K˜[YOYK›ÜXÚ]KK›X\	‰Š›X\˜[YOYK›X\ŠK›X\›X\˜[œÙ›Ü›JJ_JŠK‹š\Ó[™Q\ÚYX]\šX[	‰™[˜Ý[ÛŠJ^Ý™\ÚÚ^™K˜[YOYK™\ÚÚ^™KÝ[Ú^™K˜[YOYK™\ÚÚ^™JÙK™Ø\Ú^™KœØØ[K˜[YOYKœØØ[_JŠJNœ‹š\ÔÚ[ÓX]\šX[Ù[˜Ý[ÛŠKKŠ^Ý™Y™\ÙK˜[YK˜ÛÜJK˜ÛÛÜŠK›ÜXÚ]K˜[YOYK›ÜXÚ]KœÚ^™K˜[YOYKœÚ^™JšKœØØ[K˜[YOKJœ‹K›X\	‰Š›X\˜[YOYK›X\ŠK›X\]•˜[œÙ›Ü›JJNÙK˜[SX\	‰Š˜[SX\˜[YOYK˜[SX\ŠK˜[SX\˜[SX\˜[œÙ›Ü›JJNÙK˜[U\ÝŒ	‰Š˜[U\Ý˜[YOYK˜[U\Ý
_J‹ËÊNœ‹š\ÔÜš]SX]\šX[Ù[˜Ý[ÛŠJ^Ý™Y™\ÙK˜[YK˜ÛÜJK˜ÛÛÜŠK›ÜXÚ]K˜[YOYK›ÜXÚ]Kœ›Ý][Û‹˜[YOYKœ›Ý][Û‹K›X\	‰Š›X\˜[YOYK›X\ŠK›X\›X\˜[œÙ›Ü›JJNÙK˜[SX\	‰Š˜[SX\˜[YOYK˜[SX\ŠK˜[SX\˜[SX\˜[œÙ›Ü›JJNÙK˜[U\ÝŒ	‰Š˜[U\Ý˜[YOYK˜[U\Ý
_JŠNœ‹š\ÔÚYÝÓX]\šX[Ê˜ÛÛÜ‹˜[YK˜ÛÜJ‹˜ÛÛÜŠK›ÜXÚ]K˜[YO\‹›ÜXÚ]JNœ‹š\ÔÚY\“X]\šX[	‰Š‹[šY›Ü›\Ó™YY\]OHLJ___Y[˜Ý[ÛˆXJK‹J^Û]^ßKÏ^ßKOV×NØÛÛœÝÏ[‹š\ÕÙX‘ÓÝ™Ù]\˜[Y]\Š“PVÕS’Q“Ô“WÐ•Q‘‘T—Ð’S‘S‘ÔÊNŒÙ[˜Ý[Ûˆ
K‹J^ØÛÛœÝ]˜[YKÏYJ×—×ŠÛŽÚYŠ›ÚYOOZVÜ×J\™]\›ˆVÜ×OW›[X™\—O]\[ÙˆŸ˜›ÛÛX[—O]\[ÙˆÜŽœ‹˜ÛÛ™J
KLÞØÛÛœÝZVÜ×NÚYŠ›[X™\—O]\[ÙˆŸ˜›ÛÛX[—O]\[ÙˆŠ^ÚYŠOO\Š\™]\›ˆVÜ×O\‹LY[ÙHYŠLOOO]™\]X[ÊŠJ\™]\›ˆ˜ÛÜJŠKL\™]\›ˆL_Y[˜Ý[ÛˆÊ
^ØÛÛœÝO^Ø›Ý[™\žNŒÝÜ˜YÙNŒNÜ™]\›—›[X™\—O]\[Ùˆ˜›ÛÛX[—O]\[ÙˆÊK˜›Ý[™\žOMKœÝÜ˜YÙOM
Nš\Õ™XÝÜŒÊK˜›Ý[™\žONKœÝÜ˜YÙON
Nš\Õ™XÝÜŒßš\ÐÛÛÜÊK˜›Ý[™\žOLM‹KœÝÜ˜YÙOLLŠNš\Õ™XÝÜÊK˜›Ý[™\žOLM‹KœÝÜ˜YÙOLMŠNš\ÓX]š^ÏÊK˜›Ý[™\žOMKœÝÜ˜YÙOM
Nš\ÓX]š^ÊK˜›Ý[™\žOMKœÝÜ˜YÙOM
Nš\Õ^\™OØÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ^\™HØ[\\œÈØ[ˆ›Ý™H\Ùˆ[ˆ[šY›Ü›\ÈÜ›Ý\—ŠN˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ[œÝ\ÜY[šY›Ü›H˜[YH\K—‹
K_Y[˜Ý[Ûˆ
J^ØÛÛœÝYK\™Ù]Û‹œ™[[Ý™Q]™[\Ý[™\Š™\ÜÜÙW‹
NØÛÛœÝOXKš[™^ÙŠ‹—×Øš[™[™ÔÚ[[™^
NØKœÜXÙJKJK™[]PY™™\Š–Û‹šYJK[]H–Û‹šYK[]HÖÛ‹šY_\™]\›žØš[™™[˜Ý[ÛŠJ^ØÛÛœÝYKœ›ÙÜ˜[NÚK[šY›Ü›P›ØÚÐš[™[™ÊŠ_K\]N™[˜Ý[ÛŠ‹J^Û]\–Û‹šYNÝ›ÚYOOY	‰ŠY[˜Ý[ÛŠ
^ØÛÛœÝO][šY›Ü›\ÎÛ]LØÛÛœÝOLMŽÙ›ÜŠ]LYK›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝP\œ˜^Kš\Ð\œ˜^JVÝJOÙVÝN–ÙVÝWNÙ›ÜŠ]LO\‹›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO\–ÝKÏP\œ˜^Kš\Ð\œ˜^JK˜[YJOÙK˜[YN–ÙK˜[YWNÙ›ÜŠ]L\Ë›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝXÊÖÝJKO[‰ZNÌOOXI‰šKXO‹˜›Ý[™\žI‰ŠŠÏZKXJKK—×Ù]O[™]È›Ø]Ì\œ˜^J‹œÝÜ˜YÙKÑ›Ø]Ì\œ˜^K–UT×ÔT—ÑSSQS•
KK—×ÛÙ™œÙ][‹ŠÏ\‹œÝÜ˜YÙ___XÛÛœÝ[‰ZNÜŒ	‰ŠŠÏZK\ŠNÝ—×ÜÚ^™O[‹—×ØØXÚO^ß_JŠKY[˜Ý[ÛŠJ^ØÛÛœÝY[˜Ý[ÛŠ
^Ù›ÜŠ]LÝÎÝ
ÊÊZYŠLOOOXKš[™^ÙŠ
J\™]\›ˆKœ\Ú

KÜ™]\›ˆÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\ŽˆX^[][H[X™\ˆÙˆÚ[][[™[Ý\ÛH\ØX›H[šY›Ü›\ÈÜ›Ý\È™XXÚY—ŠKJ
NÙK—×Øš[™[™ÔÚ[[™^[ŽØÛÛœÝO]˜Ü™X]PY™™\Š
KYK—×ÜÚ^™KÏYK\ØYÙNÜ™]\›ˆ˜š[™Y™™\Š•S’Q“Ô“WÐ•Q‘‘T‹JK˜Y™™\‘]J•S’Q“Ô“WÐ•Q‘‘T‹‹ÊK˜š[™Y™™\Š•S’Q“Ô“WÐ•Q‘‘T‹[
K˜š[™Y™™\˜\ÙJ•S’Q“Ô“WÐ•Q‘‘T‹‹JK_JŠK–Û‹šYOY‹˜Y]™[\Ý[™\Š™\ÜÜÙW‹
JNØÛÛœÝ]Kœ›ÙÜ˜[NÚK\]UP“ÓX\[™Ê‹
NØÛÛœÝOYKœ™[™\‹™œ˜[YNÜÖÛ‹šYHOO[I‰ŠY[˜Ý[ÛŠJ^ØÛÛœÝ\–ÙKšYKOYK[šY›Ü›\ËÏYK—×ØØXÚNÝ˜š[™Y™™\Š•S’Q“Ô“WÐ•Q‘‘T‹ŠNÙ›ÜŠ]OLZK›[™ÝÙOŽÙJÊÊ^ØÛÛœÝP\œ˜^Kš\Ð\œ˜^JVÙWJOÚVÙWN–ÚVÙWWNÙ›ÜŠ]OL[‹›[™ÝÚOŽÚJÊÊ^ØÛÛœÝ[–ÚWNÚYŠLOO[
‹KKÊJ^ØÛÛœÝO\‹—×ÛÙ™œÙ]P\œ˜^Kš\Ð\œ˜^J‹˜[YJOÜ‹˜[YN–Ü‹˜[YWNÛ]OLÙ›ÜŠ]ÏLÜÏ‹›[™ÝÜÊÊÊ^ØÛÛœÝO[–Ü×KÏXÊJN×›[X™\—O]\[Ùˆ_˜›ÛÛX[—O]\[ÙˆOÊ‹—×Ù]VÌOXK˜Y™™\”ÝX‘]J•S’Q“Ô“WÐ•Q‘‘T‹JÚK‹—×Ù]JJN˜Kš\ÓX]š^ÏÊ‹—×Ù]VÌOXK™[[Y[ÖÌK‹—×Ù]VÌWOXK™[[Y[ÖÌWK‹—×Ù]VÌ—OXK™[[Y[ÖÌ—K‹—×Ù]VÌ×OL‹—×Ù]VÍOXK™[[Y[ÖÌ×K‹—×Ù]VÍWOXK™[[Y[ÖÍK‹—×Ù]VÍ—OXK™[[Y[ÖÍWK‹—×Ù]VÍ×OL‹—×Ù]VÎOXK™[[Y[ÖÍ—K‹—×Ù]VÎWOXK™[[Y[ÖÍ×K‹—×Ù]VÌLOXK™[[Y[ÖÎK‹—×Ù]VÌLWOL
NŠKÐ\œ˜^J‹—×Ù]KJKJÏ[ËœÝÜ˜YÙKÑ›Ø]Ì\œ˜^K–UT×ÔT—ÑSSQS•
_]˜Y™™\”ÝX‘]J•S’Q“Ô“WÐ•Q‘‘T‹K‹—×Ù]J___]˜š[™Y™™\Š•S’Q“Ô“WÐ•Q‘‘T‹[
_JŠKÖÛ‹šYO[J_K\ÜÜÙN™[˜Ý[ÛŠ
^Ù›ÜŠÛÛœÝH[ˆŠ]™[]PY™™\Š–ÙWJNØOV×K^ßKÏ^ß___XÛ\ÜÈÞØÛÛœÝXÝÜŠ^ßJ^ØÛÛœÝØØ[˜\Î›SYJ
KÛÛ^šO[[\œHLÝ[˜Ú[›ÏHL[N›HLK[X[X\Î˜ÏHLK™[][\YY[NšHL™\Ù\™Q˜]Ú[™ÐY™™\ŽOHLKÝÙ\”™Y™\™[˜ÙN™W™Y˜][‹˜Z[Y“XZ›Ü”\™›Ü›X[˜ÙPØ]™X]›OHL_O]Û]ŽÝ\Ëš\ÕÙX‘Ó™[™\™\HL[[OOZOÚK™Ù]ÛÛ^]šX]\Ê
K˜[N›ØÛÛœÝÏ[™]ÈZ[Ì\œ˜^J
KÏ[™]È[Ì\œ˜^J
NÛ][[[[ØÛÛœÝOV×KOV×NÝ\Ë™ÛQ[[Y[[‹\Ë™XYÏ^ØÚXÚÔÚY\‘\œ›ÜœÎˆLÛ”ÚY\‘\œ›ÜŽ›[K\Ë˜]]ÐÛX\HL\Ë˜]]ÐÛX\ÛÛÜHL\Ë˜]]ÐÛX\‘\HL\Ë˜]]ÐÛX\”Ý[˜Ú[HL\ËœÛÜØš™XÝÏHL\Ë˜Û\[™Ô[™\ÏV×K\Ë›ØØ[Û\[™Ñ[˜X›YHLK\Ë—ÛÝ]]ÛÛÜ”ÜXÙOQÝ\Ë—Ý\ÙSYØXÞSYÚÏHLK\ËÛ™SX\[™Ï\\ËÛ™SX\[™Ñ^ÜÝ\™OLNØÛÛœÝÏ]\ÎÛ]HLKLOLÏ[[OKLK[[ØÛÛœÝÏ[™]È™K[™]È™NÛ][[ØÛÛœÝO[™]ÈÚJ
NÛ]OL[‹ÚY[‹šZYÚLKO[[O[[ØÛÛœÝ	[™]È™JŠKO[™]È™JŠNÛ]HLNØÛÛœÝ][™]ÈÜŽÛ]HLK]HLK[[ØÛÛœÝÝ[™]È[‹][™]ÈYKÝ[™]ÈÙK^Ø˜XÚÙÜ›Ý[™›[›ÙÎ›[[š\›Û›Y[›[Ý™\œšYSX]\šX[›[\ÔØÙ[™NˆLNÙ[˜Ý[ÛˆÝ

^Ü™]\›ˆ[OO]ÏÞŽŒ_[]]]ÝÝ]]Ý]Ý]Ý]]ZNÙ[˜Ý[Ûˆ
J^Ù›ÜŠ]OLÚO›[™ÝÚJÊÊ^ØÛÛœÝ]ÚWKÏ[‹™Ù]ÛÛ^
‹JNÚYŠ[OO\Ê\™]\›ˆß\™]\›ˆ[]ž^ØÛÛœÝ^Ø[NˆL\œ‹Ý[˜Ú[›Ë[X[X\Î˜Ë™[][\YY[Nš™\Ù\™Q˜]Ú[™ÐY™™\ŽKÝÙ\”™Y™\™[˜ÙN™˜Z[Y“XZ›Ü”\™›Ü›X[˜ÙPØ]™X]›_NÚYŠœÙ]]šX]Wš[ˆ‰‰›‹œÙ]]šX]J™]KY[™Ú[™W‹™YKšœÈ‰Ù_X
K‹˜Y]™[\Ý[™\ŠÙX™ÛÛÛ^ÜÝ‹LJK‹˜Y]™[\Ý[™\ŠÙX™ÛÛÛ^™\ÝÜ™Y‹LJK‹˜Y]™[\Ý[™\ŠÙX™ÛÛÛ^Ü™X][Û™\œ›Ü—‹LJK[OOQ
^ØÛÛœÝOV×ÙX™Û—‹ÙX™Û‹™^\š[Y[[]ÙX™Û—NÚYŠLOOTËš\ÕÙX‘ÓT™[™\™\‰‰™KœÚY

KS
K
K[OOQ
]›ÝÈ
JOÛ™]È\œ›ÜŠ‘\œ›ÜˆÜ™X][™ÈÙX‘ÓÛÛ^Ú][Ý\ˆÙ[XÝY]šX]\Ë—ŠN›™]È\œ›ÜŠ‘\œ›ÜˆÜ™X][™ÈÙX‘ÓÛÛ^—Š_W[™Yš[™YˆO]\[ÙˆÙX‘Ó™[™\š[™ÐÛÛ^	‰‘[œÝ[˜Ù[ÙˆÙX‘Ó™[™\š[™ÐÛÛ^	‰˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\ŽˆÙX‘ÓHÝ\ÜØ\È\™XØ]Y[ˆŒMLÈ[™Ú[™H™[[Ý™Y[ˆŒMŒË—ŠK›ÚYOOQ™Ù]ÚY\”™XÚ\Ú[Û‘›Ü›X]	‰Š™Ù]ÚY\”™XÚ\Ú[Û‘›Ü›X]Y[˜Ý[ÛŠ
^Ü™]\›žÜ˜[™ÙSZ[ŽŒK˜[™ÙSX^ŒK™XÚ\Ú[ÛŽŒ__J_XØ]Ú

^Ý›ÝÈÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\ŽˆŠÝ›Y\ÜØYÙJKY[˜Ý[ÛˆÝ

^Ú[™]È\Š
K][™]È\Š
Kš[š]
]
K[™]È˜J]
K[™]ÈØJ]
K[™]ÈÜŠ
K][™]ÈK[™]ÈJ]]
KÝ[™]ÈÜŠÊKÝ[™]È\ŠÊK[™]ÈœŠ]
K][™]È\Š]
K[™]ÈœŠ]
K][™]È\Ê
K[™]ÈÊ]
K][™]ÈœŠ]
K][™]ÈØJËÝÝ]]]
KÝ[™]È	JË]
K[™]ÈK[™]ÈØJ]
K][™]ÈŠËÝÝ]‹
KÝ[™]ÈØJË]]
K][™]ÈXJ]
KÝ[™]ÈÜŠ]
K[™]ÈœŠ]
Kœ›ÙÜ˜[\ÏS]œ›ÙÜ˜[\ËË˜Ø\Xš[]Y\Ï]]Ë™^[œÚ[ÛœÏZËœ›Ü\Y\Ï[]Ëœ™[™\“\ÝÏXËœÚYÝÓX\]ÝËœÝ]OYËš[™›Ï\SÝ

NØÛÛœÝ[™]ÈØJË
NÙ[˜Ý[Ûˆ

^Ýœ™]™[Y˜][

KÛÛœÛÛK›ÙÊ•‘QK•ÙX‘Ó™[™\™\ŽˆÛÛ^ÜÝ—ŠKHLY[˜Ý[Ûˆ

^ØÛÛœÛÛK›ÙÊ•‘QK•ÙX‘Ó™[™\™\ŽˆÛÛ^™\ÝÜ™Y—ŠKHLNØÛÛœÝ\˜]]Ô™\Ù]O]Ý™[˜X›Y]Ý˜]]Õ\]KO]Ý›™YYÕ\]K]Ý\NÓÝ

K˜]]Ô™\Ù]]Ý™[˜X›YYKÝ˜]]Õ\]O[‹Ý›™YYÕ\]OZKÝ\O\ŸY[˜Ý[Ûˆ

^ØÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\ŽˆHÙX‘ÓÛÛ^ÛÝ[›Ý™HÜ™X]Yˆ™X\ÛÛŽˆ‹œÝ]\ÓY\ÜØYÙJ_Y[˜Ý[ÛˆÝ

^ØÛÛœÝO]\™Ù]ÙKœ™[[Ý™Q]™[\Ý[™\Š™\ÜÜÙW‹Ý
K[˜Ý[ÛŠ
^Ê[˜Ý[ÛŠ
^ØÛÛœÝO[]™Ù]

Kœ›ÙÜ˜[\ÎÝ›ÚYOOYI‰ŠK™›Ü‘XXÚ

[˜Ý[ÛŠ
^Ó]œ™[X\ÙT›ÙÜ˜[J
_JJKš\ÔÚY\“X]\šX[	‰“]œ™[X\ÙTÚY\ØXÚJ
J_JJ
K]œ™[[Ý™J
_JJ_Y[˜Ý[ÛˆÝ
KŠ^ÈLOO]˜[œÜ\™[	‰ŒOO]œÚYI‰ˆLOOO]™›Ü˜ÙTÚ[™ÛT\ÜÏÊœÚYOXK›™YYÕ\]OHL]
KŠKœÚYO\Ë›™YYÕ\]OHL]
KŠKœÚYOLŠN”]
KŠ_]\ËžQ\Ë™Ù]ÛÛ^Y[˜Ý[ÛŠ
^Ü™]\›ˆK\Ë™Ù]ÛÛ^]šX]\ÏY[˜Ý[ÛŠ
^Ü™]\›ˆ™Ù]ÛÛ^]šX]\Ê
_K\Ë™›Ü˜ÙPÛÛ^ÜÜÏY[˜Ý[ÛŠ
^ØÛÛœÝZ™Ù]
•ÑP‘ÓÛÜÙWØÛÛ^ŠNÝ	‰›ÜÙPÛÛ^

_K\Ë™›Ü˜ÙPÛÛ^™\ÝÜ™OY[˜Ý[ÛŠ
^ØÛÛœÝZ™Ù]
•ÑP‘ÓÛÜÙWØÛÛ^ŠNÝ	‰œ™\ÝÜ™PÛÛ^

_K\Ë™Ù]^[˜][ÏY[˜Ý[ÛŠ
^Ü™]\›ˆŸK\ËœÙ]^[˜][ÏY[˜Ý[ÛŠ
^Ý›ÚYOO]	‰Š]\ËœÙ]Ú^™J‹LJJ_K\Ë™Ù]Ú^™OY[˜Ý[ÛŠ
^Ü™]\›ˆœÙ]
Š_K\ËœÙ]Ú^™OY[˜Ý[ÛŠKOHL
^Ñš\Ô™\Ù[[™ÏØÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\ŽˆØ[‰ÝÚ[™ÙHÚ^™HÚ[H”ˆ]šXÙH\È™\Ù[[™Ë—ŠNŠ]YK‹ÚYSX]™›ÛÜŠ
žŠK‹šZYÚSX]™›ÛÜŠJžŠKLOOZI‰Š‹œÝ[KÚY]
×œ‹‹œÝ[KšZYÚYJ×œŠK\ËœÙ]šY]ÜÜ
JJ_K\Ë™Ù]˜]Ú[™ÐY™™\”Ú^™OY[˜Ý[ÛŠ
^Ü™]\›ˆœÙ]

ž‹ŠžŠK™›ÛÜŠ
_K\ËœÙ]˜]Ú[™ÐY™™\”Ú^™OY[˜Ý[ÛŠKJ^Ñ]YKZK‹ÚYSX]™›ÛÜŠ
šJK‹šZYÚSX]™›ÛÜŠJšJK\ËœÙ]šY]ÜÜ
J_K\Ë™Ù]Ý\œ™[šY]ÜÜY[˜Ý[ÛŠ
^Ü™]\›ˆ˜ÛÜJÊ_K\Ë™Ù]šY]ÜÜY[˜Ý[ÛŠ
^Ü™]\›ˆ˜ÛÜJ	
_K\ËœÙ]šY]ÜÜY[˜Ý[ÛŠK‹J^Ýš\Õ™XÝÜÉœÙ]
žžKž‹ÊN‰œÙ]
K‹JKšY]ÜÜ
Ë˜ÛÜJ	
K›][\TØØ[\ŠŠK™›ÛÜŠ
J_K\Ë™Ù]ØÚ\ÜÛÜY[˜Ý[ÛŠ
^Ü™]\›ˆ˜ÛÜJJ_K\ËœÙ]ØÚ\ÜÛÜY[˜Ý[ÛŠK‹J^Ýš\Õ™XÝÜÔKœÙ]
žžKž‹ÊN”KœÙ]
K‹JKœØÚ\ÜÛÜŠ˜ÛÜJJK›][\TØØ[\ŠŠK™›ÛÜŠ
J_K\Ë™Ù]ØÚ\ÜÛÜ•\ÝY[˜Ý[ÛŠ
^Ü™]\›ˆK\ËœÙ]ØÚ\ÜÛÜ•\ÝY[˜Ý[ÛŠ
^ÙœÙ]ØÚ\ÜÛÜ•\Ý
]
_K\ËœÙ]Ü\]YTÛÜY[˜Ý[ÛŠ
^ÜO]K\ËœÙ]˜[œÜ\™[ÛÜY[˜Ý[ÛŠ
^ÖO]K\Ë™Ù]ÛX\ÛÛÜY[˜Ý[ÛŠ
^Ü™]\›ˆ˜ÛÜJ]™Ù]ÛX\ÛÛÜŠ
J_K\ËœÙ]ÛX\ÛÛÜY[˜Ý[ÛŠ
^Ð]œÙ]ÛX\ÛÛÜ‹˜\J]\™Ý[Y[Ê_K\Ë™Ù]ÛX\[OY[˜Ý[ÛŠ
^Ü™]\›ˆ]™Ù]ÛX\[J
_K\ËœÙ]ÛX\[OY[˜Ý[ÛŠ
^Ð]œÙ]ÛX\[K˜\J]\™Ý[Y[Ê_K\Ë˜ÛX\Y[˜Ý[ÛŠHLOHLHL
^Û]OLÚYŠ
^Û]HLNÚYŠ[OO]Ê^ØÛÛœÝO]Ë^\™K™›Ü›X]ÝYOOORßOOORŸOOOVŸZYŠ
^ØÛÛœÝ]Ë^\™K\KO]OOQŸOOQßOOPŸOOVOOZßOOUËP]™Ù]ÛX\ÛÛÜŠ
KOP]™Ù]ÛX\[J
K[‹œ‹Ï[‹™ËO[‹˜ŽÙOÊÖÌO\‹ÖÌWO\ËÖÌ—OXKÖÌ×OZK˜ÛX\Y™™\Z]ŠÓÓÔ‹ÊJNŠÖÌO\‹ÖÌWO\ËÖÌ—OXKÖÌ×OZK˜ÛX\Y™™\š]ŠÓÓÔ‹ÊJ_Y[ÙH_QÓÓÔ—Ð•Q‘‘T—Ð’UYI‰Š_Q‘TÐ•Q‘‘T—Ð’U
K‰‰Š_Q”ÕSÒSÐ•Q‘‘T—Ð’U\ËœÝ]K˜Y™™\œËœÝ[˜Ú[œÙ]X\ÚÊŽMMÌŽMJJK˜ÛX\ŠJ_K\Ë˜ÛX\ÛÛÜY[˜Ý[ÛŠ
^Ý\Ë˜ÛX\ŠLLKLJ_K\Ë˜ÛX\‘\Y[˜Ý[ÛŠ
^Ý\Ë˜ÛX\ŠLKLLJ_K\Ë˜ÛX\”Ý[˜Ú[Y[˜Ý[ÛŠ
^Ý\Ë˜ÛX\ŠLKLKL
_K\Ë™\ÜÜÙOY[˜Ý[ÛŠ
^Û‹œ™[[Ý™Q]™[\Ý[™\ŠÙX™ÛÛÛ^ÜÝ‹LJK‹œ™[[Ý™Q]™[\Ý[™\ŠÙX™ÛÛÛ^™\ÝÜ™Y‹LJK‹œ™[[Ý™Q]™[\Ý[™\ŠÙX™ÛÛÛ^Ü™X][Û™\œ›Ü—‹LJK™\ÜÜÙJ
K™\ÜÜÙJ
K]™\ÜÜÙJ
KÝ™\ÜÜÙJ
KÝ™\ÜÜÙJ
K]™\ÜÜÙJ
K]™\ÜÜÙJ
K]™\ÜÜÙJ
K]™\ÜÜÙJ
K™\ÜÜÙJ
Kœ™[[Ý™Q]™[\Ý[™\ŠœÙ\ÜÚ[ÛœÝ\‹
Kœ™[[Ý™Q]™[\Ý[™\ŠœÙ\ÜÚ[Û™[™‹]
K	‰Š™\ÜÜÙJ
K[[
K]œÝÜ

_K\Ëœ™[™\Y™™\‘\™XÝY[˜Ý[ÛŠK‹K‹Ê^Û[OOYI‰ŠO[
NØÛÛœÝO\‹š\ÓY\Ú	‰œ‹›X]š^ÛÜ›™]\›Z[˜[

OÏY[˜Ý[ÛŠK‹KŠ^ÈLOOYKš\ÔØÙ[™I‰ŠO[
NÙœ™\Ù]^\™U[š]Ê
NØÛÛœÝÏYK™›ÙËOZKš\ÓY\ÚÝ[™\™X]\šX[ÙK™[š\›Û›Y[›[Ï[[OO]ÏÔË›Ý]]ÛÛÜ”ÜXÙNˆLOO]Ëš\Ö”™[™\•\™Ù]ÝË^\™K˜ÛÛÜ”ÜXÙN’JKš\ÓY\ÚÝ[™\™X]\šX[×Ý™Ý
K™Ù]
K™[“X\JKÏHLOOZK™\^ÛÛÜœÉ‰ˆH[‹˜]šX]\Ë˜ÛÛÜ‰‰OO[‹˜]šX]\Ë˜ÛÛÜ‹š][TÚ^™KHH[‹˜]šX]\Ë[™Ù[	‰ŠHZK››Ü›X[X\K˜[š\ÛÝ›ÜOŒ
KOHH[‹›[Üœ]šX]\ËœÜÚ][Û‹HH[‹›[Üœ]šX]\Ë››Ü›X[OHH[‹›[Üœ]šX]\Ë˜ÛÛÜŽÛ]\ÚKÛ™SX\Y	‰Š[OO]É‰ˆLOO]Ëš\Ö”™[™\•\™Ù]
TËÛ™SX\[™ÊJNØÛÛœÝÏ[‹›[Üœ]šX]\ËœÜÚ][ÛŸ‹›[Üœ]šX]\Ë››Ü›X[‹›[Üœ]šX]\Ë˜ÛÛÜ‹Ï]›ÚYOOYÏÙË›[™ÝŒ[]™Ù]
JKO^œÝ]K›YÚÎÚYŠLOO[	‰ŠLOOZ]OOTŠJ^ØÛÛœÝO]OOT‰‰šKšYOOPNÑ]œÙ]Ý]JKJ_[]OHLNÚK™\œÚ[ÛOO]‹—×Ý™\œÚ[ÛÝ‹›™YYÓYÚÉ‰‹›YÚÔÝ]U™\œÚ[ÛˆOO^KœÝ]K™\œÚ[ÛŸ‹›Ý]]ÛÛÜ”ÜXÙHOO[ß‹š\Ð˜]ÚYY\Ú	‰ˆLOOO]‹˜˜]Ú[™ÏÓOHLœ‹š\Ð˜]ÚYY\ÚLOO]‹˜˜]Ú[™ÏÜ‹š\Ò[œÝ[˜ÙYY\Ú	‰ˆLOOO]‹š[œÝ[˜Ú[™ÏÓOHLœ‹š\Ò[œÝ[˜ÙYY\ÚLOO]‹š[œÝ[˜Ú[™ÏÜ‹š\ÔÚÚ[›™YY\Ú	‰ˆLOOO]‹œÚÚ[›š[™ÏÓOHLœ‹š\ÔÚÚ[›™YY\ÚLOO]‹œÚÚ[›š[™ÏÜ‹š\Ò[œÝ[˜ÙYY\Ú	‰ˆLOO]‹š[œÝ[˜Ú[™ÐÛÛÜ‰‰›[OO\‹š[œÝ[˜ÙPÛÛÜŸ‹š\Ò[œÝ[˜ÙYY\Ú	‰ˆLOOO]‹š[œÝ[˜Ú[™ÐÛÛÜ‰‰›[OO\‹š[œÝ[˜ÙPÛÛÜŸ‹™[“X\OO[LOOZK™›ÙÉ‰‹™›ÙÈOO\ÏÓOHL›ÚYOO]‹›[PÛ\[™Ô[™\ß‹›[PÛ\[™Ô[™\ÏOOQ]›[T[™\É‰‹›[R[\œÙXÝ[ÛOOQ]›[R[\œÙXÝ[ÛÊ‹™\^[\ÈOOXß‹™\^[™Ù[ÈOOZ‹›[Üœ\™Ù]ÈOO]_‹›[Üœ›Ü›X[ÈOOY‹›[ÜœÛÛÜœÈOO[_‹Û™SX\[™ÈOOYŸLOO]]š\ÕÙX‘Ó‰‰‹›[Üœ\™Ù]ÐÛÝ[OOWÊI‰ŠOHL
N“OHL“OHL“OHL“OHLŠOHL‹—×Ý™\œÚ[ÛZK™\œÚ[ÛŠNÛ]]‹˜Ý\œ™[›ÙÜ˜[NÈLOOSI‰ŠT]
KKŠJNÛ]HLKOHLKÏHLNØÛÛœÝX‹™Ù][šY›Ü›\Ê
K]‹[šY›Ü›\ÎÙ\ÙT›ÙÜ˜[J‹œ›ÙÜ˜[JI‰ŠHLOHLÏHL
NÚKšYOOPI‰ŠOZKšYOHL
NÚYŠˆOO]
^ÓœÙ]˜[YJœ›Ú™XÝ[Û“X]š^‹œ›Ú™XÝ[Û“X]š^
KœÙ]˜[YJšY]ÓX]š^‹›X]š^ÛÜ›[™\œÙJNØÛÛœÝOS›X\˜Ø[Y\˜TÜÚ][ÛŽÝ›ÚYOOYI‰™KœÙ]˜[YJÝœÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
JK]›ÙØ\š]ZXÑ\Y™™\‰‰“œÙ]˜[YJ›ÙÑ\Y‘×‹‹ÊX]›ÙÊ™˜\ŠÌJKÓX]“ŒŠJK
Kš\ÓY\ÚÛ™ÓX]\šX[Kš\ÓY\ÚÛÛ“X]\šX[Kš\ÓY\Ú[X™\X]\šX[Kš\ÓY\Ú˜\ÚXÓX]\šX[Kš\ÓY\ÚÝ[™\™X]\šX[Kš\ÔÚY\“X]\šX[
I‰“œÙ]˜[YJš\ÓÜÙÜ˜\X×‹LOO]š\ÓÜÙÜ˜\XÐØ[Y\˜JKˆOO]	‰Š]OHLÏHL
_ZYŠ‹š\ÔÚÚ[›™YY\Ú
^ÓœÙ]Ü[Û˜[
‹˜š[™X]š^ŠKœÙ]Ü[Û˜[
‹˜š[™X]š^[™\œÙWŠNØÛÛœÝ\‹œÚÙ[]ÛŽÝ	‰Š]™›Ø]™\^^\™\ÏÊ[OO]˜›Û™U^\™I‰˜ÛÛ\]P›Û™U^\™J
KœÙ]˜[YJ˜›Û™U^\™W‹˜›Û™U^\™K
JN˜ÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\ŽˆÚÚ[›™YY\ÚØ[ˆÛ›H™H\ÙYÚ]ÙX‘Ó‹ˆÚ]ÙX‘ÓHÑT×Ý^\™WÙ›Ø][™™\^^\™\ÈÝ\Ü\È™\]Z\™Y—ŠJ_\‹š\Ð˜]ÚYY\Ú	‰ŠœÙ]Ü[Û˜[
‹˜˜]Ú[™Õ^\™WŠKœÙ]˜[YJ˜˜]Ú[™Õ^\™W‹‹—ÛX]šXÙ\Õ^\™K
JNØÛÛœÝO[‹›[Üœ]šX]\ÎÊ›ÚYOORKœÜÚ][ÛŸ›ÚYOORK››Ü›X[›ÚYOORK˜ÛÛÜ‰‰ˆLOO]]š\ÕÙX‘ÓŠI‰”\]J‹‹ŠNÊ_‹œ™XÙZ]™TÚYÝÈOO\‹œ™XÙZ]™TÚYÝÊI‰Š‹œ™XÙZ]™TÚYÝÏ\‹œ™XÙZ]™TÚYÝËœÙ]˜[YJœ™XÙZ]™TÚYÝ×‹‹œ™XÙZ]™TÚYÝÊJNÚKš\ÓY\ÚÛÝ\˜]YX]\šX[	‰›[OOZK™[“X\	‰Š™[“X\˜[YO[™›\[“X\˜[YO[š\ÐÝX™U^\™I‰ˆLOOO[š\Ô™[™\•\™Ù]^\™OËLNŒJNÑI‰ŠœÙ]˜[YJÛ™SX\[™Ñ^ÜÝ\™W‹ËÛ™SX\[™Ñ^ÜÝ\™JK‹›™YYÓYÚÉ‰ŠPË
OT
K˜[XšY[YÚÛÛÜ‹›™YYÕ\]OQK›YÚ›Ø™K›™YYÕ\]OQK™\™XÝ[Û˜[YÚË›™YYÕ\]OQK™\™XÝ[Û˜[YÚÚYÝÜË›™YYÕ\]OQKœÚ[YÚË›™YYÕ\]OQKœÚ[YÚÚYÝÜË›™YYÕ\]OQKœÜÝYÚË›™YYÕ\]OQKœÜÝYÚÚYÝÜË›™YYÕ\]OQKœ™XÝ\™XSYÚË›™YYÕ\]OQKš[Z\Ü\™SYÚË›™YYÕ\]OQ
KÉ‰ˆLOOZK™›ÙÉ‰”Ýœ™Yœ™\Ú›ÙÕ[šY›Ü›\ÊÊKÝœ™Yœ™\ÚX]\šX[[šY›Ü›\ÊK‹‹
KØK\ØY
JŠK
JNÝ˜\ˆKÚKš\ÔÚY\“X]\šX[	‰ˆLOOZK[šY›Ü›\Ó™YY\]I‰ŠØK\ØY
JŠK
KK[šY›Ü›\Ó™YY\]OHLJNÚKš\ÔÜš]SX]\šX[	‰“œÙ]˜[YJ˜Ù[\—‹‹˜Ù[\ŠNÚYŠœÙ]˜[YJ›[Ù[šY]ÓX]š^‹‹›[Ù[šY]ÓX]š^
KœÙ]˜[YJ››Ü›X[X]š^‹‹››Ü›X[X]š^
KœÙ]˜[YJ›[Ù[X]š^‹‹›X]š^ÛÜ›
KKš\ÔÚY\“X]\šX[Kš\Ô˜]ÔÚY\“X]\šX[
^ØÛÛœÝZK[šY›Ü›\ÑÜ›Ý\ÎÙ›ÜŠ]OL]›[™ÝÙOŽÙJÊÊZYŠ]š\ÕÙX‘ÓŠ^ØÛÛœÝ]ÙWNÕ]\]J‹ŠK]˜š[™
‹Š_Y[ÙHÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ[šY›Ü›HY™™\ˆØš™XÝÈØ[ˆÛ›H™H\ÙYÚ]ÙX‘Ó‹—Š_\™]\›ˆŸJK‹KŠNÙœÙ]X]\šX[
KJNÛ][‹š[™^ÏLNÚYŠLOOZKÚ\™Yœ˜[YJ^ÚYŠ^™Ù]Ú\™Yœ˜[YP]šX]JŠK›ÚYOO[
\™]\›ŽØÏLŸXÛÛœÝ[‹™˜]Ô˜[™ÙKO[‹˜]šX]\ËœÜÚ][ÛŽÛ]ZœÝ\
˜ËOJœÝ\
Ú˜ÛÝ[
J˜ÎÛ[OO\É‰ŠSX]›X^
ËœÝ\
˜ÊKOSX]›Z[ŠK
ËœÝ\
ÜË˜ÛÝ[
J˜ÊJK[OO[ÊSX]›X^

KOSX]›Z[ŠK˜ÛÝ[
JN›[O]I‰ŠSX]›X^

KOSX]›Z[ŠKK˜ÛÝ[
JNØÛÛœÝ[KYÚYŠOOLKÌ
\™]\›ŽÛ]ÎÒ]œÙ]\
‹KË‹
NÛ]ÏPÝÚYŠ[OO[	‰ŠÏ]™Ù]

KÏSËœÙ][™^
ÊJK‹š\ÓY\Ú
HLOOZKÚ\™Yœ˜[YOÊœÙ][™UÚY
KÚ\™Yœ˜[YS[™]ÚY
˜Ý

JKËœÙ][ÙJ“S‘TÊJN—ËœÙ][ÙJ•’PS‘ÓTÊNÙ[ÙHYŠ‹š\Ó[™J^Û]ZK›[™]ÚYÝ›ÚYOO]	‰ŠLJKœÙ][™UÚY

˜Ý

JK‹š\Ó[™TÙYÛY[Ï×ËœÙ][ÙJ“S‘TÊNœ‹š\Ó[™SÛÜ×ËœÙ][ÙJ“S‘WÓÓÔ
N—ËœÙ][ÙJ“S‘WÔÕ’T
_Y[ÙH‹š\ÔÚ[Ï×ËœÙ][ÙJ”ÒS•ÊNœ‹š\ÔÜš]I‰—ËœÙ][ÙJ•’PS‘ÓTÊNÚYŠ‹š\Ð˜]ÚYY\Ú
WËœ™[™\“][Q˜]Ê‹—Û][Q˜]ÔÝ\Ë‹—Û][Q˜]ÐÛÝ[Ë‹—Û][Q˜]ÐÛÝ[
NÙ[ÙHYŠ‹š\Ò[œÝ[˜ÙYY\Ú
WËœ™[™\’[œÝ[˜Ù\Ê‹‹˜ÛÝ[
NÙ[ÙHYŠ‹š\Ò[œÝ[˜ÙYY™™\‘Ù[ÛY]žJ^ØÛÛœÝ]›ÚYOO[‹—ÛX^[œÝ[˜ÙPÛÝ[Û‹—ÛX^[œÝ[˜ÙPÛÝ[ŒKÌOSX]›Z[Š‹š[œÝ[˜ÙPÛÝ[
N×Ëœ™[™\’[œÝ[˜Ù\Ê‹J_Y[ÙHËœ™[™\ŠŠ_K\Ë˜ÛÛ\[OY[˜Ý[ÛŠK[[
^Û[OO[‰‰Š]
KU™Ù]
ŠKš[š]

KKœ\Ú

K‹˜]™\œÙUš\ÚX›J
[˜Ý[ÛŠ
^Ýš\ÓYÚ	‰›^Y\œË\Ý
K›^Y\œÊI‰Šœ\ÚYÚ

K˜Ø\ÝÚYÝÉ‰žœ\ÚÚYÝÊ
J_JJKOO[‰‰˜]™\œÙUš\ÚX›J
[˜Ý[ÛŠ
^Ýš\ÓYÚ	‰›^Y\œË\Ý
K›^Y\œÊI‰Šœ\ÚYÚ

K˜Ø\ÝÚYÝÉ‰žœ\ÚÚYÝÊ
J_JJKœÙ]\YÚÊË—Ý\ÙSYØXÞSYÚÊNØÛÛœÝO[™]ÈÙ]Ü™]\›ˆ˜]™\œÙJ
[˜Ý[ÛŠ
^ØÛÛœÝO]›X]\šX[ÚYŠJZYŠ\œ˜^Kš\Ð\œ˜^JJJY›ÜŠ]LÜK›[™ÝÜŠÊÊ^ØÛÛœÝÏYVÜ—NÕÝ
Ë‹
KK˜Y
Ê_Y[ÙHÝ
K‹
KK˜Y
J_JJKKœÜ

K[[_K\Ë˜ÛÛ\[P\Þ[˜ÏY[˜Ý[ÛŠK[[
^ØÛÛœÝO]\Ë˜ÛÛ\[JKŠNÜ™]\›ˆ™]È›ÛZ\ÙJ
OOžÙ[˜Ý[ÛˆŠ
^ÚK™›Ü‘XXÚ

[˜Ý[ÛŠ
^Û]™Ù]

K˜Ý\œ™[›ÙÜ˜[Kš\Ô™XYJ
I‰šK™[]J
_JJKOOZKœÚ^™OÜÙ][Y[Ý]
‹L
N™J
_[[OOZ™Ù]
’Ò—Ü\˜[[ÜÚY\—ØÛÛ\[WŠOÛŠ
NœÙ][Y[Ý]
‹L
_JJ_NÛ][[Ù[˜Ý[Ûˆ

^Ö]œÝÜ

_Y[˜Ý[Ûˆ]

^Ö]œÝ\

_XÛÛœÝ][™]ÈÜŽÙ[˜Ý[Ûˆ
K‹J^ÚYŠLOOO]š\ÚX›J\™]\›ŽÚYŠ›^Y\œË\Ý
K›^Y\œÊJZYŠš\ÑÜ›Ý\
[]œ™[™\“Ü™\ŽÙ[ÙHYŠš\ÓÑ
HLOO]˜]]Õ\]I‰\]JJNÙ[ÙHYŠš\ÓYÚ
^œ\ÚYÚ

K˜Ø\ÝÚYÝÉ‰žœ\ÚÚYÝÊ
NÙ[ÙHYŠš\ÔÜš]J^ÚYŠ]™œ\Ý[PÝ[Y]š[\œÙXÝÔÜš]J
J^ÚI‰›ÝœÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
K˜\SX]š^
Ý
NØÛÛœÝO^]\]J
K]›X]\šX[Ü‹š\ÚX›I‰‹œ\Ú
K‹‹Ýž‹[
__Y[ÙHYŠ
š\ÓY\Úš\Ó[™_š\ÔÚ[ÊI‰Š]™œ\Ý[PÝ[Y]š[\œÙXÝÓØš™XÝ

JJ^ØÛÛœÝO^]\]J
K]›X]\šX[ÚYŠI‰Š›ÚYOO]˜›Ý[™[™ÔÜ\™OÊ[OO]˜›Ý[™[™ÔÜ\™I‰˜ÛÛ\]P›Ý[™[™ÔÜ\™J
KÝ˜ÛÜJ˜›Ý[™[™ÔÜ\™K˜Ù[\ŠJNŠ[OOYK˜›Ý[™[™ÔÜ\™I‰™K˜ÛÛ\]P›Ý[™[™ÔÜ\™J
KÝ˜ÛÜJK˜›Ý[™[™ÔÜ\™K˜Ù[\ŠJKÝ˜\SX]š^
›X]š^ÛÜ›
K˜\SX]š^
Ý
JK\œ˜^Kš\Ð\œ˜^JŠJ^ØÛÛœÝOYK™Ü›Ý\ÎÙ›ÜŠ]ÏLOZK›[™ÝÜÏNÜÊÊÊ^ØÛÛœÝOZVÜ×KÏ\–ØK›X]\šX[[™^NÛÉ‰›Ëš\ÚX›I‰‹œ\Ú
KË‹Ýž‹J__Y[ÙH‹š\ÚX›I‰‹œ\Ú
K‹‹Ýž‹[
_XÛÛœÝ]˜Ú[™[ŽÙ›ÜŠ]LÏ\‹›[™ÝÝÎÝ
ÊÊV
–ÝKK‹J_Y[˜Ý[Ûˆ
K‹J^ØÛÛœÝ]›Ü\]YKÏ]˜[œÛZ\ÜÚ]™KÏ]˜[œÜ\™[ÞœÙ]\YÚÕšY]ÊŠKLOO[	‰‘]œÙ]ÛØ˜[Ý]JË˜Û\[™Ô[™\ËŠKË›[™ÝŒ	‰™[˜Ý[ÛŠK‹J^ØÛÛœÝHLOO[‹š\ÔØÙ[™OÛ‹›Ý™\œšYSX]\šX[›[ÚYŠ[OO\Š\™]\›ŽØÛÛœÝÏ]]š\ÕÙX‘ÓŽÛ[OO\	‰Š[™]ÈÙJKKÙÙ[™\˜]SZ\X\ÎˆL\Nšš\Ê‘VØÛÛÜ—ØY™™\—Ú[—Ù›Ø]ŠOÕŽ‘‹Z[‘š[\Ž“ËØ[\\ÎœÏÍŒJJNÔË™Ù]˜]Ú[™ÐY™™\”Ú^™J]
KÏÜœÙ]Ú^™J]ž]žJNœœÙ]Ú^™JJ]ž
KJ]žJJNØÛÛœÝÏTË™Ù]™[™\•\™Ù]

NÔËœÙ]™[™\•\™Ù]

KË™Ù]ÛX\ÛÛÜŠJKOTË™Ù]ÛX\[J
KOI‰”ËœÙ]ÛX\ÛÛÜŠMÍÍÌŒMKJNÔË˜ÛX\Š
NØÛÛœÝTËÛ™SX\[™ÎÔËÛ™SX\[™Ï\Ý
‹JK\]S][\Ø[\T™[™\•\™Ù]

K\]T™[™\•\™Ù]Z\X\

NÛ]ÏHLNÙ›ÜŠ]LYK›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝYVÝKÏ\‹›Øš™XÝÏ\‹™Ù[ÛY]žK\‹›X]\šX[\‹™Ü›Ý\ÚYŠOO[œÚYI‰œË›^Y\œË\Ý
K›^Y\œÊJ^ØÛÛœÝ[œÚYNÛœÚYOXK›™YYÕ\]OHL	
Ë‹KË
KœÚYO]›™YYÕ\]OHLÏHL_HLOOXÉ‰Š\]S][\Ø[\T™[™\•\™Ù]

K\]T™[™\•\™Ù]Z\X\

JNÔËœÙ]™[™\•\™Ù]
ÊKËœÙ]ÛX\ÛÛÜŠKJKËÛ™SX\[™Ï[J‹ËKŠKI‰™šY]ÜÜ
Ë˜ÛÜJJJK‹›[™ÝŒ	‰’Ý
‹KŠKË›[™ÝŒ	‰’Ý
ËKŠKË›[™ÝŒ	‰’Ý
ËKŠK˜Y™™\œË™\œÙ]\Ý
L
K˜Y™™\œË™\œÙ]X\ÚÊL
K˜Y™™\œË˜ÛÛÜ‹œÙ]X\ÚÊL
KœÙ]ÛYÛÛ“Ù™œÙ]
LJ_Y[˜Ý[ÛˆÝ
KŠ^ØÛÛœÝOHLOOYKš\ÔØÙ[™OÙK›Ý™\œšYSX]\šX[›[Ù›ÜŠ]LÏ]›[™ÝÜÎÜŠÊÊ^ØÛÛœÝÏ]Ü—KO\Ë›Øš™XÝÏ\Ë™Ù[ÛY]žK[[OOZOÜË›X]\šX[šKÏ\Ë™Ü›Ý\ØK›^Y\œË\Ý
‹›^Y\œÊI‰‰
KK‹ËÊ__Y[˜Ý[Ûˆ	
K‹K‹Ê^Ý›Û™Y›Ü™T™[™\ŠËK‹K‹ÊK›[Ù[šY]ÓX]š^›][\SX]šXÙ\Ê‹›X]š^ÛÜ›[™\œÙK›X]š^ÛÜ›
K››Ü›X[X]š^™Ù]›Ü›X[X]š^
›[Ù[šY]ÓX]š^
K‹›Û™Y›Ü™T™[™\ŠËK‹KÊKLOO\‹˜[œÜ\™[	‰ŒOO\‹œÚYI‰ˆLOOO\‹™›Ü˜ÙTÚ[™ÛT\ÜÏÊ‹œÚYOXK‹›™YYÕ\]OHLËœ™[™\Y™™\‘\™XÝ
‹KK‹ÊK‹œÚYO\Ë‹›™YYÕ\]OHLËœ™[™\Y™™\‘\™XÝ
‹KK‹ÊK‹œÚYOLŠN”Ëœ™[™\Y™™\‘\™XÝ
‹KK‹ÊK›ÛY\”™[™\ŠËK‹K‹Ê_Y[˜Ý[Ûˆ]
KŠ^ÈLOOYKš\ÔØÙ[™I‰ŠO[
NØÛÛœÝO[]™Ù]

K^œÝ]K›YÚËÏ^œÝ]KœÚYÝÜÐ\œ˜^KO\‹œÝ]K™\œÚ[Û‹ÏS]™Ù]\˜[Y]\œÊ‹œÝ]KËKŠKS]™Ù]›ÙÜ˜[PØXÚRÙ^JÊNÛ]ÏZKœ›ÙÜ˜[\ÎÚK™[š\›Û›Y[]š\ÓY\ÚÝ[™\™X]\šX[ÙK™[š\›Û›Y[›[K™›ÙÏYK™›ÙËK™[“X\Jš\ÓY\ÚÝ[™\™X]\šX[×Ý™Ý
K™Ù]
™[“X\K™[š\›Û›Y[
K›ÚYOOXÉ‰Š˜Y]™[\Ý[™\Š™\ÜÜÙW‹Ý
KÏ[™]ÈX\Kœ›ÙÜ˜[\ÏXÊNÛ]XË™Ù]

NÚYŠ›ÚYOOZ
^ÚYŠK˜Ý\œ™[›ÙÜ˜[OOOZ	‰šK›YÚÔÝ]U™\œÚ[ÛOOXJ\™]\›ˆYJÊKY[ÙHË[šY›Ü›\ÏS]™Ù][šY›Ü›\Ê
K›ÛZ[
‹ËÊK›Û™Y›Ü™PÛÛ\[JËÊKS]˜XÜ]Z\™T›ÙÜ˜[JË
KËœÙ]

KK[šY›Ü›\Ï[Ë[šY›Ü›\ÎØÛÛœÝOZK[šY›Ü›\ÎÜ™]\›Šš\ÔÚY\“X]\šX[š\Ô˜]ÔÚY\“X]\šX[
I‰ˆLOO]˜Û\[™ß
K˜Û\[™Ô[™\ÏQ][šY›Ü›JKYJÊKK›™YYÓYÚÏY[˜Ý[ÛŠ
^Ü™]\›ˆš\ÓY\Ú[X™\X]\šX[š\ÓY\ÚÛÛ“X]\šX[š\ÓY\ÚÛ™ÓX]\šX[š\ÓY\ÚÝ[™\™X]\šX[š\ÔÚYÝÓX]\šX[š\ÔÚY\“X]\šX[	‰ˆLOO]›YÚßJ
KK›YÚÔÝ]U™\œÚ[ÛXKK›™YYÓYÚÉ‰ŠK˜[XšY[YÚÛÛÜ‹˜[YO\‹œÝ]K˜[XšY[K›YÚ›Ø™K˜[YO\‹œÝ]Kœ›Ø™KK™\™XÝ[Û˜[YÚË˜[YO\‹œÝ]K™\™XÝ[Û˜[K™\™XÝ[Û˜[YÚÚYÝÜË˜[YO\‹œÝ]K™\™XÝ[Û˜[ÚYÝËKœÜÝYÚË˜[YO\‹œÝ]KœÜÝKœÜÝYÚÚYÝÜË˜[YO\‹œÝ]KœÜÝÚYÝËKœ™XÝ\™XSYÚË˜[YO\‹œÝ]Kœ™XÝ\™XKK›×ÌK˜[YO\‹œÝ]Kœ™XÝ\™XSÌKK›×Ì‹˜[YO\‹œÝ]Kœ™XÝ\™XSÌ‹KœÚ[YÚË˜[YO\‹œÝ]KœÚ[KœÚ[YÚÚYÝÜË˜[YO\‹œÝ]KœÚ[ÚYÝËKš[Z\Ü\™SYÚË˜[YO\‹œÝ]Kš[ZKK™\™XÝ[Û˜[ÚYÝÓX\˜[YO\‹œÝ]K™\™XÝ[Û˜[ÚYÝÓX\K™\™XÝ[Û˜[ÚYÝÓX]š^˜[YO\‹œÝ]K™\™XÝ[Û˜[ÚYÝÓX]š^KœÜÝÚYÝÓX\˜[YO\‹œÝ]KœÜÝÚYÝÓX\KœÜÝYÚX]š^˜[YO\‹œÝ]KœÜÝYÚX]š^KœÜÝYÚX\˜[YO\‹œÝ]KœÜÝYÚX\KœÚ[ÚYÝÓX\˜[YO\‹œÝ]KœÚ[ÚYÝÓX\KœÚ[ÚYÝÓX]š^˜[YO\‹œÝ]KœÚ[ÚYÝÓX]š^
KK˜Ý\œ™[›ÙÜ˜[OZK[šY›Ü›\Ó\Ý[[Y[˜Ý[ÛˆJ
^ÚYŠ[OO][šY›Ü›\Ó\Ý
^ØÛÛœÝO]˜Ý\œ™[›ÙÜ˜[K™Ù][šY›Ü›\Ê
NÝ[šY›Ü›\Ó\Ý[ØKœÙ\UÚ]˜[YJKœÙ\K[šY›Ü›\Ê_\™]\›ˆ[šY›Ü›\Ó\ÝY[˜Ý[ÛˆYJJ^ØÛÛœÝ[]™Ù]

NÛ‹›Ý]]ÛÛÜ”ÜXÙOYK›Ý]]ÛÛÜ”ÜXÙK‹˜˜]Ú[™ÏYK˜˜]Ú[™Ë‹š[œÝ[˜Ú[™ÏYKš[œÝ[˜Ú[™Ë‹š[œÝ[˜Ú[™ÐÛÛÜYKš[œÝ[˜Ú[™ÐÛÛÜ‹‹œÚÚ[›š[™ÏYKœÚÚ[›š[™Ë‹›[Üœ\™Ù]ÏYK›[Üœ\™Ù]Ë‹›[Üœ›Ü›X[ÏYK›[Üœ›Ü›X[Ë‹›[ÜœÛÛÜœÏYK›[ÜœÛÛÜœË‹›[Üœ\™Ù]ÐÛÝ[YK›[Üœ\™Ù]ÐÛÝ[‹›[PÛ\[™Ô[™\ÏYK›[PÛ\[™Ô[™\Ë‹›[R[\œÙXÝ[ÛYK›[PÛ\[\œÙXÝ[Û‹‹™\^[\ÏYK™\^[\Ë‹™\^[™Ù[ÏYK™\^[™Ù[Ë‹Û™SX\[™ÏYKÛ™SX\[™ßV]œÙ][š[X][Û“ÛÜ

[˜Ý[ÛŠ
^Ö	‰–

_JJK[™Yš[™YˆO]\[ÙˆÙ[‰‰–]œÙ]ÛÛ^
Ù[ŠK\ËœÙ][š[X][Û“ÛÜY[˜Ý[ÛŠ
^Ö]œÙ][š[X][Û“ÛÜ

K[OO]Ö]œÝÜ

N–]œÝ\

_K˜Y]™[\Ý[™\ŠœÙ\ÜÚ[ÛœÝ\‹
K˜Y]™[\Ý[™\ŠœÙ\ÜÚ[Û™[™‹]
K\Ëœ™[™\Y[˜Ý[ÛŠJ^ÚYŠ›ÚYOOYI‰ˆLOOYKš\ÐØ[Y\˜J\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\‹œ™[™\ŽˆØ[Y\˜H\È›Ý[ˆ[œÝ[˜ÙHÙˆ‘QKØ[Y\˜K—ŠNÚYŠLOOXŠ\™]\›ŽÈLOO]›X]š^ÛÜ›]]Õ\]I‰\]SX]š^ÛÜ›

K[OOYKœ\™[	‰ˆLOOYK›X]š^ÛÜ›]]Õ\]I‰™K\]SX]š^ÛÜ›

KLOOQ™[˜X›Y	‰ˆLOOQš\Ô™\Ù[[™É‰ŠLOOQ˜Ø[Y\˜P]]Õ\]I‰‘\]PØ[Y\˜JJKOQ™Ù]Ø[Y\˜J
JKLOO]š\ÔØÙ[™I‰›Û™Y›Ü™T™[™\ŠËKÊKU™Ù]
K›[™Ý
Kš[š]

KKœ\Ú

KÝ›][\SX]šXÙ\ÊKœ›Ú™XÝ[Û“X]š^K›X]š^ÛÜ›[™\œÙJK]œÙ]œ›ÛT›Ú™XÝ[Û“X]š^
Ý
K]]\Ë›ØØ[Û\[™Ñ[˜X›YQ]š[š]
\Ë˜Û\[™Ô[™\Ë]
KX™Ù]
K›[™Ý
K‹š[š]

KKœ\Ú
ŠK
KËœÛÜØš™XÝÊK‹™š[š\Ú

KLOOTËœÛÜØš™XÝÉ‰‹œÛÜ
KJK\Ëš[™›Ëœ™[™\‹™œ˜[YJÊËLOO[	‰‘]˜™YÚ[”ÚYÝÜÊ
NØÛÛœÝ^œÝ]KœÚYÝÜÐ\œ˜^NÚYŠÝœ™[™\Š‹JKLOO[	‰‘]™[™ÚYÝÜÊ
KLOO]\Ëš[™›Ë˜]]Ô™\Ù]	‰\Ëš[™›Ëœ™\Ù]

K]œ™[™\Š‹
KœÙ]\YÚÊË—Ý\ÙSYØXÞSYÚÊKKš\Ð\œ˜^PØ[Y\˜J^ØÛÛœÝYK˜Ø[Y\˜\ÎÙ›ÜŠ]OLO[‹›[™ÝÙONÙJÊÊ^ØÛÛœÝO[–ÙWNÒ
‹KKšY]ÜÜ
__Y[ÙH
‹JNÛ[OO]É‰Š\]S][\Ø[\T™[™\•\™Ù]
ÊK\]T™[™\•\™Ù]Z\X\
ÊJKLOO]š\ÔØÙ[™I‰›ÛY\”™[™\ŠËJK]œ™\Ù]Y˜][Ý]J
KOKLK[[KœÜ

KSK›[™ÝŒÓVÓK›[™ÝLWN›[KœÜ

K^K›[™ÝŒÞVÞK›[™ÝLWN›[K\Ë™Ù]XÝ]™PÝX™Q˜XÙOY[˜Ý[ÛŠ
^Ü™]\›ˆK\Ë™Ù]XÝ]™SZ\X\]™[Y[˜Ý[ÛŠ
^Ü™]\›ˆ_K\Ë™Ù]™[™\•\™Ù]Y[˜Ý[ÛŠ
^Ü™]\›ˆßK\ËœÙ]™[™\•\™Ù]^\™\ÏY[˜Ý[ÛŠKŠ^Û]™Ù]
^\™JK—×ÝÙX™Û^\™OYK]™Ù]
™\^\™JK—×ÝÙX™Û^\™O[ŽØÛÛœÝO[]™Ù]

NÚK—×Ú\Ñ^\›˜[^\™\ÏHLK—×Ú\Ñ^\›˜[^\™\É‰ŠK—×Ø]]Ð[ØØ]Q\Y™™\]›ÚYOO[‹K—×Ø]]Ð[ØØ]Q\Y™™\ŸLOOZš\Ê•ÑP‘ÓÛ][\Ø[\YÜ™[™\—Ý×Ý^\™WŠI‰ŠÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ™[™\‹]Ë]^\™H^[œÚ[ÛˆØ\È\ØX›Y™XØ]\ÙH[ˆ^\›˜[^\™HØ\È›ÝšYYŠKK—×Ý\ÙT™[™\•Õ^\™OHLJJ_K\ËœÙ]™[™\•\™Ù]œ˜[YXY™™\Y[˜Ý[ÛŠJ^ØÛÛœÝ[]™Ù]

NÛ‹—×ÝÙX™Ûœ˜[YXY™™\YK‹—×Ý\ÙQY˜][œ˜[YXY™™\]›ÚYOOY_K\ËœÙ]™[™\•\™Ù]Y[˜Ý[ÛŠOLL
^ÝÏ]YKO[ŽÛ]OHL[[ÏHLKOHLNÚYŠ
^ØÛÛœÝÏ[]™Ù]

NÝ›ÚYOO[Ë—×Ý\ÙQY˜][œ˜[YXY™™\Ê˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹[
KOHLJN›ÚYOO[Ë—×ÝÙX™Ûœ˜[YXY™™\ÙœÙ]\™[™\•\™Ù]

N›Ë—×Ú\Ñ^\›˜[^\™\É‰™œ™Xš[™^\™\Ê]™Ù]
^\™JK—×ÝÙX™Û^\™K]™Ù]
™\^\™JK—×ÝÙX™Û^\™JNØÛÛœÝ]^\™NÊš\Ñ]LÑ^\™_š\Ñ]P\œ˜^U^\™_š\ÐÛÛ\™\ÜÙY\œ˜^U^\™JI‰ŠOHL
NØÛÛœÝÏ[]™Ù]

K—×ÝÙX™Ûœ˜[YXY™™\ŽÝš\ÕÙX‘ÓÝX™T™[™\•\™Ù]ÊP\œ˜^Kš\Ð\œ˜^JÖÙWJOØÖÙWVÛ—N˜ÖÙWKÏHL
Nœ]]š\ÕÙX‘Ó‰‰œØ[\\ÏŒ	‰ˆLOOOY\ÙS][\Ø[\Y•

OÛ]™Ù]

K—×ÝÙX™Û][\Ø[\Yœ˜[YXY™™\Ž\œ˜^Kš\Ð\œ˜^JÊOØÖÛ—N˜ËË˜ÛÜJšY]ÜÜ
K˜ÛÜJœØÚ\ÜÛÜŠK]œØÚ\ÜÛÜ•\ÝY[ÙHË˜ÛÜJ	
K›][\TØØ[\ŠŠK™›ÛÜŠ
K˜ÛÜJJK›][\TØØ[\ŠŠK™›ÛÜŠ
K]ÚYŠ˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹ŠI‰]™˜]ÐY™™\œÉ‰šI‰™™˜]ÐY™™\œÊŠKšY]ÜÜ
ÊKœØÚ\ÜÛÜŠ
KœÙ]ØÚ\ÜÛÜ•\Ý

KÊ^ØÛÛœÝO[]™Ù]
^\™JNÑ™œ˜[YXY™™\•^\™L‘
‘”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS••VT‘WÐÕP‘WÓPTÔÔÒUU‘WÖ
ÙKK—×ÝÙX™Û^\™KŠ_Y[ÙHYŠJ^ØÛÛœÝO[]™Ù]
^\™JKY_Ñ™œ˜[YXY™™\•^\™S^Y\Š‘”SQP•Q‘‘T‹ÓÓÔ—ÐUPÒQS•K—×ÝÙX™Û^\™KŸŠ_POKL_K\Ëœ™XY™[™\•\™Ù]^[ÏY[˜Ý[ÛŠK‹K‹ËJ^ÚYŠ]]š\ÕÙX‘Ó™[™\•\™Ù]
\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\‹œ™XY™[™\•\™Ù]^[Îˆ™[™\•\™Ù]\È›Ý‘QK•ÙX‘Ó™[™\•\™Ù]—ŠNÛ]Ï[]™Ù]

K—×ÝÙX™Ûœ˜[YXY™™\ŽÚYŠš\ÕÙX‘ÓÝX™T™[™\•\™Ù]	‰›ÚYOOXI‰ŠÏ[ÖØWJKÊ^Ù˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹ÊNÝž^ØÛÛœÝO]^\™KÏXK™›Ü›X]XK\NÚYŠÈOOZ‰‰”˜ÛÛ™\
ÊHOOQ™Ù]\˜[Y]\Š’STSQS•USÓ—ÐÓÓÔ—Ô‘PQÑ“Ô“PU
J\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\‹œ™XY™[™\•\™Ù]^[Îˆ™[™\•\™Ù]\È›Ý[ˆ‘ÐHÜˆ[\[Y[][ÛˆYš[™Y›Ü›X]—ŠNØÛÛœÝÏ[OOU‰‰Šš\Ê‘VØÛÛÜ—ØY™™\—Ú[—Ù›Ø]Š_]š\ÕÙX‘Ó‰‰šš\Ê‘VØÛÛÜ—ØY™™\—Ù›Ø]ŠJNÚYŠJOOQŸ˜ÛÛ™\

OOOQ™Ù]\˜[Y]\Š’STSQS•USÓ—ÐÓÓÔ—Ô‘PQÕTJ_OOR	‰Š]š\ÕÙX‘ÓŸš\Ê“ÑT×Ý^\™WÙ›Ø]Š_š\Ê•ÑP‘ÓØÛÛÜ—ØY™™\—Ù›Ø]ŠJ_ÊJ\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK•ÙX‘Ó™[™\™\‹œ™XY™[™\•\™Ù]^[Îˆ™[™\•\™Ù]\È›Ý[ˆ[œÚYÛ™Yž]U\HÜˆ[\[Y[][ÛˆYš[™Y\K—ŠNÙOL	‰™O]ÚYZI‰›L	‰›]šZYÚ\‰‰‘œ™XY^[ÊK‹K‹˜ÛÛ™\
ÊK˜ÛÛ™\

KÊ_Yš[˜[^ØÛÛœÝ[[OO]ÏÛ]™Ù]
ÊK—×ÝÙX™Ûœ˜[YXY™™\Ž›[Ù˜š[™œ˜[YXY™™\Š‘”SQP•Q‘‘T‹
___K\Ë˜ÛÜQœ˜[YXY™™\•Õ^\™OY[˜Ý[ÛŠKL
^ØÛÛœÝOSX]œÝÊ‹[ŠKSX]™›ÛÜŠKš[XYÙKÚY
šJKÏSX]™›ÛÜŠKš[XYÙKšZYÚ
šJNÙœÙ]^\™L‘
K
K˜ÛÜU^ÝX’[XYÙL‘
•VT‘WÌ‘‹žžK‹ÊK[˜š[™^\™J
_K\Ë˜ÛÜU^\™UÕ^\™OY[˜Ý[ÛŠK‹OL
^ØÛÛœÝYKš[XYÙKÚYÏYKš[XYÙKšZYÚOT˜ÛÛ™\
‹™›Ü›X]
KÏT˜ÛÛ™\
‹\JNÙœÙ]^\™L‘
‹
Kœ^[ÝÜ™ZJ•S”PÒ×Ñ“TÖWÕÑP‘Ó‹™›\JKœ^[ÝÜ™ZJ•S”PÒ×Ô‘SUSTWÐSWÕÑP‘Ó‹œ™[][\P[JKœ^[ÝÜ™ZJ•S”PÒ×ÐSQÓ“QS•‹[œXÚÐ[YÛ›Y[
KKš\Ñ]U^\™OÑ^ÝX’[XYÙL‘
•VT‘WÌ‘KžžK‹ËKËKš[XYÙK™]JN™Kš\ÐÛÛ\™\ÜÙY^\™OÑ˜ÛÛ\™\ÜÙY^ÝX’[XYÙL‘
•VT‘WÌ‘KžžKK›Z\X\ÖÌKÚYK›Z\X\ÖÌKšZYÚKK›Z\X\ÖÌK™]JN‘^ÝX’[XYÙL‘
•VT‘WÌ‘KžžKKËKš[XYÙJKOOZI‰›‹™Ù[™\˜]SZ\X\É‰‘™Ù[™\˜]SZ\X\
•VT‘WÌ‘
K[˜š[™^\™J
_K\Ë˜ÛÜU^\™UÕ^\™LÑY[˜Ý[ÛŠK‹KL
^ÚYŠËš\ÕÙX‘ÓT™[™\™\Š\™]\›ˆ›ÚYÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\‹˜ÛÜU^\™UÕ^\™LÑˆØ[ˆÛ›H™H\ÙYÚ]ÙX‘Ó‹—ŠNØÛÛœÝÏ]›X^ž]›Z[‹ž
ÌKO]›X^žK]›Z[‹žJÌKÏ]›X^ž‹]›Z[‹žŠÌKT˜ÛÛ™\
K™›Ü›X]
KÏT˜ÛÛ™\
K\JNÛ]ÚYŠKš\Ñ]LÑ^\™JYœÙ]^\™LÑ
K
KQ•VT‘WÌÑÙ[Ù^ÚYŠZKš\Ñ]P\œ˜^U^\™I‰ˆZKš\ÐÛÛ\™\ÜÙY\œ˜^U^\™J\™]\›ˆ›ÚYÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\‹˜ÛÜU^\™UÕ^\™LÑˆÛ›HÝ\ÜÈ‘QK‘]U^\™LÑ[™‘QK‘]U^\™L‘\œ˜^K—ŠNÙœÙ]^\™L‘\œ˜^JK
KQ•VT‘WÌ‘ÐT”V_Qœ^[ÝÜ™ZJ•S”PÒ×Ñ“TÖWÕÑP‘ÓK™›\JKœ^[ÝÜ™ZJ•S”PÒ×Ô‘SUSTWÐSWÕÑP‘ÓKœ™[][\P[JKœ^[ÝÜ™ZJ•S”PÒ×ÐSQÓ“QS•K[œXÚÐ[YÛ›Y[
NØÛÛœÝOQ™Ù]\˜[Y]\Š•S”PÒ×Ô“Õ×ÓS‘Õ
KQ™Ù]\˜[Y]\Š•S”PÒ×ÒSPQÑWÒRQÒ
KQ™Ù]\˜[Y]\Š•S”PÒ×ÔÒÒTÔVSÊKOQ™Ù]\˜[Y]\Š•S”PÒ×ÔÒÒTÔ“ÕÔÊKQ™Ù]\˜[Y]\Š•S”PÒ×ÔÒÒTÒSPQÑTÊKÏ[‹š\ÐÛÛ\™\ÜÙY^\™OÛ‹›Z\X\ÖÜ—N›‹š[XYÙNÑœ^[ÝÜ™ZJ•S”PÒ×Ô“Õ×ÓS‘ÕËÚY
Kœ^[ÝÜ™ZJ•S”PÒ×ÒSPQÑWÒRQÒËšZYÚ
Kœ^[ÝÜ™ZJ•S”PÒ×ÔÒÒTÔVSË›Z[‹ž
Kœ^[ÝÜ™ZJ•S”PÒ×ÔÒÒTÔ“ÕÔË›Z[‹žJKœ^[ÝÜ™ZJ•S”PÒ×ÔÒÒTÒSPQÑTË›Z[‹žŠK‹š\Ñ]U^\™_‹š\Ñ]LÑ^\™OÑ^ÝX’[XYÙLÑ
‹KžKžKKž‹ËKËËË™]JN›‹š\ÐÛÛ\™\ÜÙY\œ˜^U^\™OÊÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\‹˜ÛÜU^\™UÕ^\™LÑˆ[\ÝYÝ\Ü›ÜˆÛÛ\™\ÜÙYÜ˜Õ^\™K—ŠK˜ÛÛ\™\ÜÙY^ÝX’[XYÙLÑ
‹KžKžKKž‹ËKËË™]JJN‘^ÝX’[XYÙLÑ
‹KžKžKKž‹ËKËËÊKœ^[ÝÜ™ZJ•S”PÒ×Ô“Õ×ÓS‘ÕJKœ^[ÝÜ™ZJ•S”PÒ×ÒSPQÑWÒRQÒ
Kœ^[ÝÜ™ZJ•S”PÒ×ÔÒÒTÔVSË
Kœ^[ÝÜ™ZJ•S”PÒ×ÔÒÒTÔ“ÕÔËJKœ^[ÝÜ™ZJ•S”PÒ×ÔÒÒTÒSPQÑTËŠKOO\‰‰šK™Ù[™\˜]SZ\X\É‰‘™Ù[™\˜]SZ\X\

K[˜š[™^\™J
_K\Ëš[š]^\™OY[˜Ý[ÛŠ
^Ýš\ÐÝX™U^\™OÙœÙ]^\™PÝX™J
Nš\Ñ]LÑ^\™OÙœÙ]^\™LÑ

Nš\Ñ]P\œ˜^U^\™_š\ÐÛÛ\™\ÜÙY\œ˜^U^\™OÙœÙ]^\™L‘\œ˜^J
N™œÙ]^\™L‘

K[˜š[™^\™J
_K\Ëœ™\Ù]Ý]OY[˜Ý[ÛŠ
^ÕLOLÏ[[œ™\Ù]

K]œ™\Ù]

_K[™Yš[™YˆO]\[Ùˆ×Õ‘QWÑU•ÓÓ××É‰—×Õ‘QWÑU•ÓÓ××Ë™\Ü]Ú]™[
™]ÈÝ\ÝÛQ]™[
›ØœÙ\™W‹Ù]Z[\ßJJ_YÙ]ÛÛÜ™[˜]TÞ\Ý[J
^Ü™]\›ˆ	YÙ]Ý]]ÛÛÜ”ÜXÙJ
^Ü™]\›ˆ\Ë—ÛÝ]]ÛÛÜ”ÜXÙ_\Ù]Ý]]ÛÛÜ”ÜXÙJ
^Ý\Ë—ÛÝ]]ÛÛÜ”ÜXÙO]ØÛÛœÝO]\Ë™Ù]ÛÛ^

NÙK™˜]Ú[™ÐY™™\ÛÛÜ”ÜXÙO]OOU×™\Ü^K\×Ž—œÜ™Ø—‹K[œXÚÐÛÛÜ”ÜXÙOT™KÛÜšÚ[™ÐÛÛÜ”ÜXÙOOOZÝ×™\Ü^K\×Ž—œÜ™Ø—ŸYÙ]Ý]][˜ÛÙ[™Ê
^Ü™]\›ˆÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ›Ü\H›Ý]][˜ÛÙ[™È\È™Y[ˆ™[[Ý™Yˆ\ÙH›Ý]]ÛÛÜ”ÜXÙH[œÝXY—ŠK\Ë›Ý]]ÛÛÜ”ÜXÙOOOQÝÐ‘\Ù]Ý]][˜ÛÙ[™Ê
^ØÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\Žˆ›Ü\H›Ý]][˜ÛÙ[™È\È™Y[ˆ™[[Ý™Yˆ\ÙH›Ý]]ÛÛÜ”ÜXÙH[œÝXY—ŠK\Ë›Ý]]ÛÛÜ”ÜXÙO]OOPÑÝ’YÙ]\ÙSYØXÞSYÚÊ
^Ü™]\›ˆÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\ŽˆH›Ü\H\ÙSYØXÞSYÚÈ\È™Y[ˆ\™XØ]YˆZYÜ˜]H[Ý\ˆYÚ[™ÈXØÛÜ™[™ÈÈH›ÛÝÚ[™ÈÝZYNˆÎ‹ËÙ\ØÛÝ\œÙK™YZœË›Ü™ËÝÝ\]\Ë]Ë[YÚ[™ËZ[‹]™YKZœË\ŒMMKÍLÍÌÌË—ŠK\Ë—Ý\ÙSYØXÞSYÚß\Ù]\ÙSYØXÞSYÚÊ
^ØÛÛœÛÛKØ\›Š•‘QK•ÙX‘Ó™[™\™\ŽˆH›Ü\H\ÙSYØXÞSYÚÈ\È™Y[ˆ\™XØ]YˆZYÜ˜]H[Ý\ˆYÚ[™ÈXØÛÜ™[™ÈÈH›ÛÝÚ[™ÈÝZYNˆÎ‹ËÙ\ØÛÝ\œÙK™YZœË›Ü™ËÝÝ\]\Ë]Ë[YÚ[™ËZ[‹]™YKZœË\ŒMMKÍLÍÌÌË—ŠK\Ë—Ý\ÙSYØXÞSYÚÏ]_XÛ\ÜÈ[È^[™ÈÞßY[Ëœ›ÝÝ\Kš\ÕÙX‘ÓT™[™\™\HLØÛ\ÜÈ›ÞØÛÛœÝXÝÜŠOLYKMJ^Ý\Ëš\Ñ›ÙÑ^HL\Ë›˜[YOW—‹\Ë˜ÛÛÜ[™]ÈÚJ
K\Ë™[œÚ]OY_XÛÛ™J
^Ü™]\›ˆ™]È›Ê\Ë˜ÛÛÜ‹\Ë™[œÚ]J_]Ò”ÓÓŠ
^Ü™]\›žÝ\N—‘›ÙÑ^—‹˜[YN\Ë›˜[YKÛÛÜŽ\Ë˜ÛÛÜ‹™Ù]^

K[œÚ]N\Ë™[œÚ]___XÛ\ÜÈ[ÞØÛÛœÝXÝÜŠOLKLYLÊ^Ý\Ëš\Ñ›ÙÏHL\Ë›˜[YOW—‹\Ë˜ÛÛÜ[™]ÈÚJ
K\Ë›™X\YK\Ë™˜\[ŸXÛÛ™J
^Ü™]\›ˆ™]È[Ê\Ë˜ÛÛÜ‹\Ë›™X\‹\Ë™˜\Š_]Ò”ÓÓŠ
^Ü™]\›žÝ\N—‘›Ù×‹˜[YN\Ë›˜[YKÛÛÜŽ\Ë˜ÛÛÜ‹™Ù]^

K™X\Ž\Ë›™X\‹˜\Ž\Ë™˜\Ÿ__XÛ\ÜÈ›È^[™È›žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÔØÙ[™OHL\Ë\OW”ØÙ[™W‹\Ë˜˜XÚÙÜ›Ý[™[[\Ë™[š\›Û›Y[[[\Ë™›ÙÏ[[\Ë˜˜XÚÙÜ›Ý[™›\œš[™\ÜÏL\Ë˜˜XÚÙÜ›Ý[™[[œÚ]OLK\Ë›Ý™\œšYSX]\šX[[[[™Yš[™YˆO]\[Ùˆ×Õ‘QWÑU•ÓÓ××É‰—×Õ‘QWÑU•ÓÓ××Ë™\Ü]Ú]™[
™]ÈÝ\ÝÛQ]™[
›ØœÙ\™W‹Ù]Z[\ßJJ_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK[OO]˜˜XÚÙÜ›Ý[™	‰Š\Ë˜˜XÚÙÜ›Ý[™]˜˜XÚÙÜ›Ý[™˜ÛÛ™J
JK[OO]™[š\›Û›Y[	‰Š\Ë™[š\›Û›Y[]™[š\›Û›Y[˜ÛÛ™J
JK[OO]™›ÙÉ‰Š\Ë™›ÙÏ]™›ÙË˜ÛÛ™J
JK\Ë˜˜XÚÙÜ›Ý[™›\œš[™\ÜÏ]˜˜XÚÙÜ›Ý[™›\œš[™\ÜË\Ë˜˜XÚÙÜ›Ý[™[[œÚ]O]˜˜XÚÙÜ›Ý[™[[œÚ]K[OO]›Ý™\œšYSX]\šX[	‰Š\Ë›Ý™\œšYSX]\šX[]›Ý™\œšYSX]\šX[˜ÛÛ™J
JK\Ë›X]š^]]Õ\]O]›X]š^]]Õ\]K\ß]Ò”ÓÓŠ
^ØÛÛœÝO\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆ[OO]\Ë™›ÙÉ‰ŠK›Øš™XÝ™›ÙÏ]\Ë™›ÙËÒ”ÓÓŠ
JK\Ë˜˜XÚÙÜ›Ý[™›\œš[™\ÜÏŒ	‰ŠK›Øš™XÝ˜˜XÚÙÜ›Ý[™›\œš[™\ÜÏ]\Ë˜˜XÚÙÜ›Ý[™›\œš[™\ÜÊKHOO]\Ë˜˜XÚÙÜ›Ý[™[[œÚ]I‰ŠK›Øš™XÝ˜˜XÚÙÜ›Ý[™[[œÚ]O]\Ë˜˜XÚÙÜ›Ý[™[[œÚ]JK__XÛ\ÜÈÛÞØÛÛœÝXÝÜŠJ^Ý\Ëš\Ò[\›X]™YY™™\HL\Ë˜\œ˜^O]\ËœÝšYOYK\Ë˜ÛÝ[]›ÚYOO]Ý›[™ÝÙNŒ\Ë\ØYÙOV\Ë—Ý\]T˜[™ÙO^ÛÙ™œÙ]ŒÛÝ[‹L_K\Ë\]T˜[™Ù\ÏV×K\Ë™\œÚ[ÛL\Ë]ZY\ÙJ
_[Û•\ØYØ[˜XÚÊ
^ß\Ù]™YYÕ\]J
^ÈLOO]	‰\Ë™\œÚ[ÛŠÊßYÙ]\]T˜[™ÙJ
^Ü™]\›ˆÛÛœÛÛKØ\›Š•‘QK’[\›X]™YY™™\Žˆ\]T˜[™ÙJ
H\È\™XØ]Y[™Ú[™H™[[Ý™Y[ˆŒMŽKˆ\ÙHY\]T˜[™ÙJ
H[œÝXY—ŠK\Ë—Ý\]T˜[™Ù_\Ù]\ØYÙJ
^Ü™]\›ˆ\Ë\ØYÙO]\ßXY\]T˜[™ÙJJ^Ý\Ë\]T˜[™Ù\Ëœ\Ú
ÜÝ\ÛÝ[™_J_XÛX\•\]T˜[™Ù\Ê
^Ý\Ë\]T˜[™Ù\Ë›[™ÝLXÛÜJ
^Ü™]\›ˆ\Ë˜\œ˜^O[™]È˜\œ˜^K˜ÛÛœÝXÝÜŠ˜\œ˜^JK\Ë˜ÛÝ[]˜ÛÝ[\ËœÝšYO]œÝšYK\Ë\ØYÙO]\ØYÙK\ßXÛÜP]
KŠ^Ý
]\ËœÝšYKŠYKœÝšYNÙ›ÜŠ]OL]\ËœÝšYNÚOŽÚJÊÊ]\Ë˜\œ˜^VÝ
ÚWOYK˜\œ˜^VÛŠÚWNÜ™]\›ˆ\ß\Ù]
OL
^Ü™]\›ˆ\Ë˜\œ˜^KœÙ]
JK\ßXÛÛ™J
^Ý›ÚYOO]˜\œ˜^PY™™\œÉ‰Š˜\œ˜^PY™™\œÏ^ßJK›ÚYOO]\Ë˜\œ˜^K˜Y™™\‹—Ý]ZY	‰Š\Ë˜\œ˜^K˜Y™™\‹—Ý]ZY\ÙJ
JK›ÚYOO]˜\œ˜^PY™™\œÖÝ\Ë˜\œ˜^K˜Y™™\‹—Ý]ZYI‰Š˜\œ˜^PY™™\œÖÝ\Ë˜\œ˜^K˜Y™™\‹—Ý]ZYO]\Ë˜\œ˜^KœÛXÙJ
K˜Y™™\ŠNØÛÛœÝO[™]È\Ë˜\œ˜^K˜ÛÛœÝXÝÜŠ˜\œ˜^PY™™\œÖÝ\Ë˜\œ˜^K˜Y™™\‹—Ý]ZYJK[™]È\Ë˜ÛÛœÝXÝÜŠK\ËœÝšYJNÜ™]\›ˆ‹œÙ]\ØYÙJ\Ë\ØYÙJKŸ[Û•\ØY

^Ü™]\›ˆ\Ë›Û•\ØYØ[˜XÚÏ]\ß]Ò”ÓÓŠ
^Ü™]\›ˆ›ÚYOO]˜\œ˜^PY™™\œÉ‰Š˜\œ˜^PY™™\œÏ^ßJK›ÚYOO]\Ë˜\œ˜^K˜Y™™\‹—Ý]ZY	‰Š\Ë˜\œ˜^K˜Y™™\‹—Ý]ZY\ÙJ
JK›ÚYOO]˜\œ˜^PY™™\œÖÝ\Ë˜\œ˜^K˜Y™™\‹—Ý]ZYI‰Š˜\œ˜^PY™™\œÖÝ\Ë˜\œ˜^K˜Y™™\‹—Ý]ZYOP\œ˜^K™œ›ÛJ™]ÈZ[Ì\œ˜^J\Ë˜\œ˜^K˜Y™™\ŠJJKÝ]ZY\Ë]ZYY™™\Ž\Ë˜\œ˜^K˜Y™™\‹—Ý]ZY\N\Ë˜\œ˜^K˜ÛÛœÝXÝÜ‹›˜[YKÝšYN\ËœÝšY___XÛÛœÝ[Ï[™]ÈÙNØÛ\ÜÈÛÞØÛÛœÝXÝÜŠK‹OHLJ^Ý\Ëš\Ò[\›X]™YY™™\]šX]OHL\Ë›˜[YOW—‹\Ë™]O]\Ëš][TÚ^™OYK\Ë›Ù™œÙ][‹\Ë››Ü›X[^™YZ_YÙ]ÛÝ[

^Ü™]\›ˆ\Ë™]K˜ÛÝ[YÙ]\œ˜^J
^Ü™]\›ˆ\Ë™]K˜\œ˜^_\Ù]™YYÕ\]J
^Ý\Ë™]K›™YYÕ\]O]X\SX]š^

^Ù›ÜŠ]OL]\Ë™]K˜ÛÝ[ÙOŽÙJÊÊX[Ë™œ›ÛPY™™\]šX]J\ËJK[Ë˜\SX]š^

K\ËœÙ]VŠK[Ëž[ËžK[ËžŠNÜ™]\›ˆ\ßX\S›Ü›X[X]š^

^Ù›ÜŠ]OL]\Ë˜ÛÝ[ÙOŽÙJÊÊX[Ë™œ›ÛPY™™\]šX]J\ËJK[Ë˜\S›Ü›X[X]š^

K\ËœÙ]VŠK[Ëž[ËžK[ËžŠNÜ™]\›ˆ\ß]˜[œÙ›Ü›Q\™XÝ[ÛŠ
^Ù›ÜŠ]OL]\Ë˜ÛÝ[ÙOŽÙJÊÊX[Ë™œ›ÛPY™™\]šX]J\ËJK[Ë˜[œÙ›Ü›Q\™XÝ[ÛŠ
K\ËœÙ]VŠK[Ëž[ËžK[ËžŠNÜ™]\›ˆ\ß\Ù]
J^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]OYK\ß\Ù]JJ^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]
ÌWOYK\ß\Ù]ŠJ^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]
Ì—OYK\ß\Ù]ÊJ^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]
Ì×OYK\ßYÙ]

^Û]O]\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]NÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_YÙ]J
^Û]O]\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]
ÌWNÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_YÙ]Š
^Û]O]\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]
Ì—NÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_YÙ]Ê
^Û]O]\Ë™]K˜\œ˜^VÝ
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]
Ì×NÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_\Ù]JKŠ^Ü™]\›ˆ]
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JJK\Ë™]K˜\œ˜^VÝ
ÌOYK\Ë™]K˜\œ˜^VÝ
ÌWO[‹\ß\Ù]VŠK‹J^Ü™]\›ˆ]
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JKOYJK\Ë˜\œ˜^JJK\Ë™]K˜\œ˜^VÝ
ÌOYK\Ë™]K˜\œ˜^VÝ
ÌWO[‹\Ë™]K˜\œ˜^VÝ
Ì—OZK\ß\Ù]V•ÊK‹KŠ^Ü™]\›ˆ]
\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JKOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JJK\Ë™]K˜\œ˜^VÝ
ÌOYK\Ë™]K˜\œ˜^VÝ
ÌWO[‹\Ë™]K˜\œ˜^VÝ
Ì—OZK\Ë™]K˜\œ˜^VÝ
Ì×O\‹\ßXÛÛ™J
^ÚYŠ›ÚYOO]
^ØÛÛœÛÛK›ÙÊ•‘QK’[\›X]™YY™™\]šX]K˜ÛÛ™J
NˆÛÛš[™È[ˆ[\›X]™YY™™\ˆ]šX]HÚ[KZ[\›X]™HY™™\ˆ]K—ŠNØÛÛœÝV×NÙ›ÜŠ]OLÙO\Ë˜ÛÝ[ÙJÊÊ^ØÛÛœÝYJ\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]Ù›ÜŠ]OLÙO\Ëš][TÚ^™NÙJÊÊ]œ\Ú
\Ë™]K˜\œ˜^VÛŠÙWJ_\™]\›ˆ™]ÈZJ™]È\Ë˜\œ˜^K˜ÛÛœÝXÝÜŠ
K\Ëš][TÚ^™K\Ë››Ü›X[^™Y
_\™]\›ˆ›ÚYOO]š[\›X]™YY™™\œÉ‰Šš[\›X]™YY™™\œÏ^ßJK›ÚYOO]š[\›X]™YY™™\œÖÝ\Ë™]K]ZYI‰Šš[\›X]™YY™™\œÖÝ\Ë™]K]ZYO]\Ë™]K˜ÛÛ™J
JK™]ÈÛÊš[\›X]™YY™™\œÖÝ\Ë™]K]ZYK\Ëš][TÚ^™K\Ë›Ù™œÙ]\Ë››Ü›X[^™Y
_]Ò”ÓÓŠ
^ÚYŠ›ÚYOO]
^ØÛÛœÛÛK›ÙÊ•‘QK’[\›X]™YY™™\]šX]KÒ”ÓÓŠ
NˆÙ\šX[^š[™È[ˆ[\›X]™YY™™\ˆ]šX]HÚ[KZ[\›X]™HY™™\ˆ]K—ŠNØÛÛœÝV×NÙ›ÜŠ]OLÙO\Ë˜ÛÝ[ÙJÊÊ^ØÛÛœÝYJ\Ë™]KœÝšYJÝ\Ë›Ù™œÙ]Ù›ÜŠ]OLÙO\Ëš][TÚ^™NÙJÊÊ]œ\Ú
\Ë™]K˜\œ˜^VÛŠÙWJ_\™]\›žÚ][TÚ^™N\Ëš][TÚ^™K\N\Ë˜\œ˜^K˜ÛÛœÝXÝÜ‹›˜[YK\œ˜^N›Ü›X[^™Y\Ë››Ü›X[^™Y_\™]\›ˆ›ÚYOO]š[\›X]™YY™™\œÉ‰Šš[\›X]™YY™™\œÏ^ßJK›ÚYOO]š[\›X]™YY™™\œÖÝ\Ë™]K]ZYI‰Šš[\›X]™YY™™\œÖÝ\Ë™]K]ZYO]\Ë™]KÒ”ÓÓŠ
JKÚ\Ò[\›X]™YY™™\]šX]NˆL][TÚ^™N\Ëš][TÚ^™K]N\Ë™]K]ZYÙ™œÙ]\Ë›Ù™œÙ]›Ü›X[^™Y\Ë››Ü›X[^™Y__XÛ\ÜÈÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÔÜš]SX]\šX[HL\Ë\OW”Üš]SX]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\Ë›X\[[\Ë˜[SX\[[\Ëœ›Ý][ÛL\ËœÚ^™P][X][ÛHL\Ë˜[œÜ\™[HL\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë›X\]›X\\Ë˜[SX\]˜[SX\\Ëœ›Ý][Û]œ›Ý][Û‹\ËœÚ^™P][X][Û]œÚ^™P][X][Û‹\Ë™›ÙÏ]™›ÙË\ß_[]ÛÎØÛÛœÝÏ[™]ÈÙK[Ï[™]ÈÙKÏ[™]ÈÙK[Ï[™]ÈYK›Ï[™]ÈYKÛÏ[™]È[‹ÛÏ[™]ÈÙK›Ï[™]ÈÙKÏ[™]ÈÙK[Ï[™]ÈYK[Ï[™]ÈYKÛÏ[™]ÈYNØÛ\ÜÈ›È^[™È›žØÛÛœÝXÝÜŠ[™]ÈÊ^ÚYŠÝ\\Š
K\Ëš\ÔÜš]OHL\Ë\OW”Üš]W‹›ÚYOOXÛÊ^ØÛÏ[™]ÈZNØÛÛœÝ[™]È›Ø]Ì\œ˜^JËKKKKKKKKKKKKKKKWJKO[™]ÈÛÊJNØÛËœÙ][™^
ÌK‹‹×JKÛËœÙ]]šX]JœÜÚ][Û—‹™]ÈÛÊKËLJJKÛËœÙ]]šX]J]—‹™]ÈÛÊK‹ËLJJ_]\Ë™Ù[ÛY]žOXÛË\Ë›X]\šX[]\Ë˜Ù[\[™]ÈYJKJ_\˜^XØ\Ý
J^Û[OO]˜Ø[Y\˜I‰˜ÛÛœÛÛK™\œ›ÜŠ	Õ‘QK”Üš]Nˆ”˜^XØ\Ý\‹˜Ø[Y\˜Wˆ™YYÈÈ™HÙ][ˆÜ™\ˆÈ˜^XØ\ÝYØZ[œÝÜš]\Ë‰ÊK[ËœÙ]œ›ÛSX]š^ØØ[J\Ë›X]š^ÛÜ›
KÛË˜ÛÜJ˜Ø[Y\˜K›X]š^ÛÜ›
K\Ë›[Ù[šY]ÓX]š^›][\SX]šXÙ\Ê˜Ø[Y\˜K›X]š^ÛÜ›[™\œÙK\Ë›X]š^ÛÜ›
KËœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\Ë›[Ù[šY]ÓX]š^
K˜Ø[Y\˜Kš\Ô\œÜXÝ]™PØ[Y\˜I‰ˆLOOO]\Ë›X]\šX[œÚ^™P][X][Û‰‰[Ë›][\TØØ[\Š\ËžŠNØÛÛœÝ]\Ë›X]\šX[œ›Ý][ÛŽÛ]KŽÌOO[‰‰ŠSX]˜ÛÜÊŠKOSX]œÚ[ŠŠJNØÛÛœÝÏ]\Ë˜Ù[\ŽÕÊÛËœÙ]
KKKK
KËË[ËKŠKÊ›ËœÙ]
KKK
KËË[ËKŠKÊËœÙ]
KK
KËË[ËKŠK[ËœÙ]

K[ËœÙ]
K
KÛËœÙ]
KJNÛ]O]œ˜^Kš[\œÙXÝšX[™ÛJÛË›ËËLKÊNÚYŠ[OOXI‰ŠÊ›ËœÙ]
KKK
KËË[ËKŠK[ËœÙ]
JKO]œ˜^Kš[\œÙXÝšX[™ÛJÛËË›ËLKÊK[OOXJJ\™]\›ŽØÛÛœÝÏ]œ˜^K›ÜšYÚ[‹™\Ý[˜ÙUÊÊNÛÏ›™X\ŸÏ™˜\ŸKœ\Ú
Ù\Ý[˜ÙN›ËÚ[šË˜ÛÛ™J
K]ŽœšK™Ù][\œÛ][ÛŠËÛË›ËË[Ë[ËÛË™]ÈYJK˜XÙN›[Øš™XÝ\ßJ_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK›ÚYOO]˜Ù[\‰‰\Ë˜Ù[\‹˜ÛÜJ˜Ù[\ŠK\Ë›X]\šX[]›X]\šX[\ß_Y[˜Ý[ÛˆÊK‹K‹Ê^Û[ËœÝX•™XÝÜœÊŠK˜YØØ[\ŠJK›][\JJK›ÚYOO\Ê›Ëž\Ê›[Ëž\Š›[ËžK›ËžO\Š›[Ëž
ÜÊ›[ËžJN™›Ë˜ÛÜJ[ÊK˜ÛÜJJKž
ÏY›ËžžJÏY›ËžK˜\SX]š^
ÛÊ_XÛÛœÝ[Ï[™]ÈÙKÛÏ[™]ÈÙNØÛ\ÜÈ[È^[™È›žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë—ØÝ\œ™[]™[L\Ë\OW“Ñ‹Øš™XÝ™Yš[™T›Ü\Y\Ê\ËÛ]™[ÎžÙ[[Y\˜X›NˆL˜[YN–×_K\ÓÑžÝ˜[YNˆL_JK\Ë˜]]Õ\]OHLXÛÜJ
^ÜÝ\\‹˜ÛÜJLJNØÛÛœÝO]›]™[ÎÙ›ÜŠ]LYK›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝYVÝNÝ\Ë˜Y]™[
‹›Øš™XÝ˜ÛÛ™J
K‹™\Ý[˜ÙK‹š\Ý\™\Ú\Ê_\™]\›ˆ\Ë˜]]Õ\]O]˜]]Õ\]K\ßXY]™[
OLL
^ÙOSX]˜XœÊJNØÛÛœÝO]\Ë›]™[ÎÛ]ŽÙ›ÜŠLÜK›[™Ý	‰ˆJOVÜ—K™\Ý[˜ÙJNÜŠÊÊNÜ™]\›ˆKœÜXÙJ‹Ù\Ý[˜ÙN™K\Ý\™\Ú\Î›‹Øš™XÝJK\Ë˜Y

K\ßYÙ]Ý\œ™[]™[

^Ü™]\›ˆ\Ë—ØÝ\œ™[]™[YÙ]Øš™XÝ›Ü‘\Ý[˜ÙJ
^ØÛÛœÝO]\Ë›]™[ÎÚYŠK›[™ÝŒ
^Û]‹NÙ›ÜŠLKOYK›[™ÝÛNÛŠÊÊ^Û]OYVÛ—K™\Ý[˜ÙNÚYŠVÛ—K›Øš™XÝš\ÚX›I‰ŠKOZJ™VÛ—Kš\Ý\™\Ú\ÊKJXœ™XZß\™]\›ˆVÛ‹LWK›Øš™XÝ\™]\›ˆ[\˜^XØ\Ý
J^ÚYŠ\Ë›]™[Ë›[™ÝŒ
^Ñ[ËœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\Ë›X]š^ÛÜ›
NØÛÛœÝ]œ˜^K›ÜšYÚ[‹™\Ý[˜ÙUÊ[ÊNÝ\Ë™Ù]Øš™XÝ›Ü‘\Ý[˜ÙJŠKœ˜^XØ\Ý
J__]\]J
^ØÛÛœÝO]\Ë›]™[ÎÚYŠK›[™ÝŒJ^Ñ[ËœÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
KÛËœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\Ë›X]š^ÛÜ›
NØÛÛœÝQ[Ë™\Ý[˜ÙUÊÛÊKÝž›ÛÛNÛ]KŽÙ›ÜŠVÌK›Øš™XÝš\ÚX›OHLOLKYK›[™ÝÚOŽÚJÊÊ^Û]YVÚWK™\Ý[˜ÙNÚYŠVÚWK›Øš™XÝš\ÚX›I‰ŠO]
™VÚWKš\Ý\™\Ú\ÊKJ]
JXœ™XZÎÙVÚKLWK›Øš™XÝš\ÚX›OHLKVÚWK›Øš™XÝš\ÚX›OHLY›ÜŠ\Ë—ØÝ\œ™[]™[ZKLNÚOŽÚJÊÊYVÚWK›Øš™XÝš\ÚX›OHL__]Ò”ÓÓŠ
^ØÛÛœÝO\Ý\\‹Ò”ÓÓŠ
NÈLOOO]\Ë˜]]Õ\]I‰ŠK›Øš™XÝ˜]]Õ\]OHLJKK›Øš™XÝ›]™[ÏV×NØÛÛœÝ]\Ë›]™[ÎÙ›ÜŠ]LO[‹›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO[–ÝNÙK›Øš™XÝ›]™[Ëœ\Ú
ÛØš™XÝšK›Øš™XÝ]ZY\Ý[˜ÙNšK™\Ý[˜ÙK\Ý\™\Ú\ÎšKš\Ý\™\Ú\ßJ_\™]\›ˆ__XÛÛœÝ›Ï[™]ÈÙKÛÏ[™]È™KÏ[™]È™KÏ[™]ÈÙK[Ï[™]È[‹[Ï[™]ÈÙKÏ[™]È‹›Ï[™]È[‹ÛÏ[™]È[ŽØÛ\ÜÈ›È^[™Èš^ØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\ÔÚÚ[›™YY\ÚHL\Ë\OW”ÚÚ[›™YY\Ú‹\Ë˜š[™[ÙO^K\Ë˜š[™X]š^[™]È[‹\Ë˜š[™X]š^[™\œÙO[™]È[‹\Ë˜›Ý[™[™Ð›Þ[[\Ë˜›Ý[™[™ÔÜ\™O[[XÛÛ\]P›Ý[™[™Ð›Þ

^ØÛÛœÝ]\Ë™Ù[ÛY]žNÛ[OO]\Ë˜›Ý[™[™Ð›Þ	‰Š\Ë˜›Ý[™[™Ð›Þ[™]ÈYJK\Ë˜›Ý[™[™Ð›Þ›XZÙQ[\J
NØÛÛœÝO]™Ù]]šX]JœÜÚ][Û—ŠNÙ›ÜŠ]LÝK˜ÛÝ[Ý
ÊÊ]\Ë™Ù]™\^ÜÚ][ÛŠ[ÊK\Ë˜›Ý[™[™Ð›Þ™^[™žTÚ[
[Ê_XÛÛ\]P›Ý[™[™ÔÜ\™J
^ØÛÛœÝ]\Ë™Ù[ÛY]žNÛ[OO]\Ë˜›Ý[™[™ÔÜ\™I‰Š\Ë˜›Ý[™[™ÔÜ\™O[™]ÈŠK\Ë˜›Ý[™[™ÔÜ\™K›XZÙQ[\J
NØÛÛœÝO]™Ù]]šX]JœÜÚ][Û—ŠNÙ›ÜŠ]LÝK˜ÛÝ[Ý
ÊÊ]\Ë™Ù]™\^ÜÚ][ÛŠ[ÊK\Ë˜›Ý[™[™ÔÜ\™K™^[™žTÚ[
[Ê_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë˜š[™[ÙO]˜š[™[ÙK\Ë˜š[™X]š^˜ÛÜJ˜š[™X]š^
K\Ë˜š[™X]š^[™\œÙK˜ÛÜJ˜š[™X]š^[™\œÙJK\ËœÚÙ[]Û]œÚÙ[]Û‹[OO]˜›Ý[™[™Ð›Þ	‰Š\Ë˜›Ý[™[™Ð›Þ]˜›Ý[™[™Ð›Þ˜ÛÛ™J
JK[OO]˜›Ý[™[™ÔÜ\™I‰Š\Ë˜›Ý[™[™ÔÜ\™O]˜›Ý[™[™ÔÜ\™K˜ÛÛ™J
JK\ß\˜^XØ\Ý
J^ØÛÛœÝ]\Ë›X]\šX[O]\Ë›X]š^ÛÜ›Ý›ÚYOO[‰‰Š[OO]\Ë˜›Ý[™[™ÔÜ\™I‰\Ë˜ÛÛ\]P›Ý[™[™ÔÜ\™J
KË˜ÛÜJ\Ë˜›Ý[™[™ÔÜ\™JKË˜\SX]š^
JKLHOO]œ˜^Kš[\œÙXÝÔÜ\™JÊI‰Š›Ë˜ÛÜJJKš[™\

KÛË˜ÛÜJœ˜^JK˜\SX]š^
›ÊK[OO]\Ë˜›Ý[™[™Ð›Þ	‰ˆLOOOSÛËš[\œÙXÝÐ›Þ
\Ë˜›Ý[™[™Ð›Þ
_\Ë—ØÛÛ\]R[\œÙXÝ[ÛœÊKÛÊJJ_YÙ]™\^ÜÚ][ÛŠJ^Ü™]\›ˆÝ\\‹™Ù]™\^ÜÚ][ÛŠJK\Ë˜\P›Û™U˜[œÙ›Ü›JJK_Xš[™
J^Ý\ËœÚÙ[]Û]›ÚYOOYI‰Š\Ë\]SX]š^ÛÜ›
L
K\ËœÚÙ[]Û‹˜Ø[Ý[]R[™\œÙ\Ê
KO]\Ë›X]š^ÛÜ›
K\Ë˜š[™X]š^˜ÛÜJJK\Ë˜š[™X]š^[™\œÙK˜ÛÜJJKš[™\

_\ÜÙJ
^Ý\ËœÚÙ[]Û‹œÜÙJ
_[›Ü›X[^™TÚÚ[•ÙZYÚÊ
^ØÛÛœÝ[™]È™KO]\Ë™Ù[ÛY]žK˜]šX]\ËœÚÚ[•ÙZYÚÙ›ÜŠ]LOYK˜ÛÝ[ÛNÛŠÊÊ^Ý™œ›ÛPY™™\]šX]JKŠNØÛÛœÝOLKÝ›X[š][“[™Ý

NÚHOOLKÌÝ›][\TØØ[\ŠJNœÙ]
K
KKœÙ]V•Ê‹žžKž‹Ê__]\]SX]š^ÛÜ›

^ÜÝ\\‹\]SX]š^ÛÜ›

K\Ë˜š[™[ÙOOO^OÝ\Ë˜š[™X]š^[™\œÙK˜ÛÜJ\Ë›X]š^ÛÜ›
Kš[™\

N\Ë˜š[™[ÙOOOSOÝ\Ë˜š[™X]š^[™\œÙK˜ÛÜJ\Ë˜š[™X]š^
Kš[™\

N˜ÛÛœÛÛKØ\›Š•‘QK”ÚÚ[›™YY\Úˆ[œ™XÛÙÛš^™Yš[™[ÙNˆŠÝ\Ë˜š[™[ÙJ_X\P›Û™U˜[œÙ›Ü›JJ^ØÛÛœÝ]\ËœÚÙ[]Û‹O]\Ë™Ù[ÛY]žNÐÛË™œ›ÛPY™™\]šX]JK˜]šX]\ËœÚÚ[’[™^
KË™œ›ÛPY™™\]šX]JK˜]šX]\ËœÚÚ[•ÙZYÚ
K›Ë˜ÛÜJJK˜\SX]š^
\Ë˜š[™X]š^
KKœÙ]

NÙ›ÜŠ]LÝÝ
ÊÊ^ØÛÛœÝOSË™Ù]ÛÛ\Û™[

NÚYŠOOZJ^ØÛÛœÝPÛË™Ù]ÛÛ\Û™[

NÒ[Ë›][\SX]šXÙ\Ê‹˜›Û™\ÖÜ—K›X]š^ÛÜ›‹˜›Û™R[™\œÙ\ÖÜ—JKK˜YØØ[Y™XÝÜŠË˜ÛÜJ›ÊK˜\SX]š^
[ÊKJ__\™]\›ˆK˜\SX]š^
\Ë˜š[™X]š^[™\œÙJ_X›Û™U˜[œÙ›Ü›JJ^Ü™]\›ˆÛÛœÛÛKØ\›Š•‘QK”ÚÚ[›™YY\Úˆ˜›Û™U˜[œÙ›Ü›J
HØ\È™[˜[YYÈ˜\P›Û™U˜[œÙ›Ü›J
H[ˆŒMLK—ŠK\Ë˜\P›Û™U˜[œÙ›Ü›JJ__XÛ\ÜÈ›È^[™È›žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Ð›Û™OHL\Ë\OW›Û™WŸ_XÛ\ÜÈ›È^[™È™^ØÛÛœÝXÝÜŠ[[OLKLKK‹ËKËLLËÏLLËJ^ÜÝ\\Š[ËKËËK‹JK\Ëš\Ñ]U^\™OHL\Ëš[XYÙO^Ù]NÚY™KZYÚ›ŸK\Ë™Ù[™\˜]SZ\X\ÏHLK\Ë™›\OHLK\Ë[œXÚÐ[YÛ›Y[L__XÛÛœÝÛÏ[™]È[‹Ï[™]È[ŽØÛ\ÜÈ›ÞØÛÛœÝXÝÜŠV×KOV×J^Ý\Ë]ZY\ÙJ
K\Ë˜›Û™\Ï]œÛXÙJ
K\Ë˜›Û™R[™\œÙ\ÏYK\Ë˜›Û™SX]šXÙ\Ï[[\Ë˜›Û™U^\™O[[\Ëš[š]

_Z[š]

^ØÛÛœÝ]\Ë˜›Û™\ËO]\Ë˜›Û™R[™\œÙ\ÎÚYŠ\Ë˜›Û™SX]šXÙ\Ï[™]È›Ø]Ì\œ˜^JMŠ›[™Ý
KOOYK›[™Ý
]\Ë˜Ø[Ý[]R[™\œÙ\Ê
NÙ[ÙHYŠ›[™ÝOOYK›[™Ý
^ØÛÛœÛÛKØ\›Š•‘QK”ÚÙ[]ÛŽˆ[X™\ˆÙˆ[™\œÙH›Û™HX]šXÙ\ÈÙ\È›ÝX]Ú[[Ý[Ùˆ›Û™\Ë—ŠK\Ë˜›Û™R[™\œÙ\ÏV×NÙ›ÜŠ]LO]\Ë˜›Û™\Ë›[™ÝÝNÝ
ÊÊ]\Ë˜›Û™R[™\œÙ\Ëœ\Ú
™]È[Š__XØ[Ý[]R[™\œÙ\Ê
^Ý\Ë˜›Û™R[™\œÙ\Ë›[™ÝLÙ›ÜŠ]LO]\Ë˜›Û™\Ë›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO[™]È[ŽÝ\Ë˜›Û™\ÖÝI‰™K˜ÛÜJ\Ë˜›Û™\ÖÝK›X]š^ÛÜ›
Kš[™\

K\Ë˜›Û™R[™\œÙ\Ëœ\Ú
J__\ÜÙJ
^Ù›ÜŠ]LO]\Ë˜›Û™\Ë›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO]\Ë˜›Û™\ÖÝNÙI‰™K›X]š^ÛÜ›˜ÛÜJ\Ë˜›Û™R[™\œÙ\ÖÝJKš[™\

_Y›ÜŠ]LO]\Ë˜›Û™\Ë›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO]\Ë˜›Û™\ÖÝNÙI‰ŠKœ\™[	‰™Kœ\™[š\Ð›Û™OÊK›X]š^˜ÛÜJKœ\™[›X]š^ÛÜ›
Kš[™\

KK›X]š^›][\JK›X]š^ÛÜ›
JN™K›X]š^˜ÛÜJK›X]š^ÛÜ›
KK›X]š^™XÛÛ\ÜÙJKœÜÚ][Û‹Kœ]X]\›š[Û‹KœØØ[JJ__]\]J
^ØÛÛœÝ]\Ë˜›Û™\ËO]\Ë˜›Û™R[™\œÙ\Ë]\Ë˜›Û™SX]šXÙ\ËO]\Ë˜›Û™U^\™NÙ›ÜŠ]OL]›[™ÝÚOŽÚJÊÊ^ØÛÛœÝ]ÚWOÝÚWK›X]š^ÛÜ›’ÎÑÛË›][\SX]šXÙ\Ê‹VÚWJKÛËÐ\œ˜^J‹MŠšJ_[[OOZI‰ŠK›™YYÕ\]OHL
_XÛÛ™J
^Ü™]\›ˆ™]È›Ê\Ë˜›Û™\Ë\Ë˜›Û™R[™\œÙ\Ê_XÛÛ\]P›Û™U^\™J
^Û]SX]œÜ\

\Ë˜›Û™\Ë›[™Ý
NÝM
“X]˜ÙZ[
Í
KSX]›X^

NØÛÛœÝO[™]È›Ø]Ì\œ˜^J


NÙKœÙ]
\Ë˜›Û™SX]šXÙ\ÊNØÛÛœÝ[™]È›ÊK‹
NÜ™]\›ˆ‹›™YYÕ\]OHL\Ë˜›Û™SX]šXÙ\ÏYK\Ë˜›Û™U^\™O[‹\ßYÙ]›Û™PžS˜[YJ
^Ù›ÜŠ]OL]\Ë˜›Û™\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]\Ë˜›Û™\ÖÙWNÚYŠ‹›˜[YOOO]
\™]\›ˆŸ_Y\ÜÜÙJ
^Û[OO]\Ë˜›Û™U^\™I‰Š\Ë˜›Û™U^\™K™\ÜÜÙJ
K\Ë˜›Û™U^\™O[[
_Yœ›ÛR”ÓÓŠJ^Ý\Ë]ZY]]ZYÙ›ÜŠ]LO]˜›Û™\Ë›[™ÝÛNÛŠÊÊ^ØÛÛœÝO]˜›Û™\ÖÛ—NÛ]YVÚWNÝ›ÚYOO\‰‰ŠÛÛœÛÛKØ\›Š•‘QK”ÚÙ[]ÛŽˆ›È›Û™H›Ý[™Ú]URQ—‹JK[™]È›ÊK\Ë˜›Û™\Ëœ\Ú
ŠK\Ë˜›Û™R[™\œÙ\Ëœ\Ú

™]È[ŠK™œ›ÛP\œ˜^J˜›Û™R[™\œÙ\ÖÛ—JJ_\™]\›ˆ\Ëš[š]

K\ß]Ò”ÓÓŠ
^ØÛÛœÝ^ÛY]Y]NžÝ™\œÚ[ÛŽ‹\N—”ÚÙ[]Û—‹Ù[™\˜]ÜŽ—”ÚÙ[]Û‹Ò”ÓÓ—ŸK›Û™\Î–×K›Û™R[™\œÙ\Î–×_NÝ]ZY]\Ë]ZYØÛÛœÝO]\Ë˜›Û™\Ë]\Ë˜›Û™R[™\œÙ\ÎÙ›ÜŠ]OLYK›[™ÝÚOŽÚJÊÊ^ØÛÛœÝYVÚWNÝ˜›Û™\Ëœ\Ú
‹]ZY
NØÛÛœÝÏ[–ÚWNÝ˜›Û™R[™\œÙ\Ëœ\Ú
ËÐ\œ˜^J
J_\™]\›ˆ_XÛ\ÜÈÛÈ^[™ÈZ^ØÛÛœÝXÝÜŠK‹OLJ^ÜÝ\\ŠKŠK\Ëš\Ò[œÝ[˜ÙYY™™\]šX]OHL\Ë›Y\Ú\]šX]OZ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë›Y\Ú\]šX]O]›Y\Ú\]šX]K\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆ›Y\Ú\]šX]O]\Ë›Y\Ú\]šX]Kš\Ò[œÝ[˜ÙYY™™\]šX]OHL_XÛÛœÝÛÏ[™]È[‹Ï[™]È[‹›ÏV×K[Ï[™]ÈYK[Ï[™]È[‹›Ï[™]ÈšK›Ï[™]ÈŽØÛ\ÜÈÛÈ^[™Èš^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\ŠJK\Ëš\Ò[œÝ[˜ÙYY\ÚHL\Ëš[œÝ[˜ÙSX]š^[™]ÈÛÊ™]È›Ø]Ì\œ˜^JMŠ›ŠKMŠK\Ëš[œÝ[˜ÙPÛÛÜ[[\Ë˜ÛÝ[[‹\Ë˜›Ý[™[™Ð›Þ[[\Ë˜›Ý[™[™ÔÜ\™O[[Ù›ÜŠ]LÝŽÝ
ÊÊ]\ËœÙ]X]š^]
[Ê_XÛÛ\]P›Ý[™[™Ð›Þ

^ØÛÛœÝ]\Ë™Ù[ÛY]žKO]\Ë˜ÛÝ[Û[OO]\Ë˜›Ý[™[™Ð›Þ	‰Š\Ë˜›Ý[™[™Ð›Þ[™]ÈYJK[OO]˜›Ý[™[™Ð›Þ	‰˜ÛÛ\]P›Ý[™[™Ð›Þ

K\Ë˜›Ý[™[™Ð›Þ›XZÙQ[\J
NÙ›ÜŠ]LÛNÛŠÊÊ]\Ë™Ù]X]š^]
‹ÛÊK[Ë˜ÛÜJ˜›Ý[™[™Ð›Þ
K˜\SX]š^
ÛÊK\Ë˜›Ý[™[™Ð›Þ[š[ÛŠ[Ê_XÛÛ\]P›Ý[™[™ÔÜ\™J
^ØÛÛœÝ]\Ë™Ù[ÛY]žKO]\Ë˜ÛÝ[Û[OO]\Ë˜›Ý[™[™ÔÜ\™I‰Š\Ë˜›Ý[™[™ÔÜ\™O[™]ÈŠK[OO]˜›Ý[™[™ÔÜ\™I‰˜ÛÛ\]P›Ý[™[™ÔÜ\™J
K\Ë˜›Ý[™[™ÔÜ\™K›XZÙQ[\J
NÙ›ÜŠ]LÛNÛŠÊÊ]\Ë™Ù]X]š^]
‹ÛÊK›Ë˜ÛÜJ˜›Ý[™[™ÔÜ\™JK˜\SX]š^
ÛÊK\Ë˜›Ý[™[™ÔÜ\™K[š[ÛŠ›Ê_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ëš[œÝ[˜ÙSX]š^˜ÛÜJš[œÝ[˜ÙSX]š^
K[OO]š[œÝ[˜ÙPÛÛÜ‰‰Š\Ëš[œÝ[˜ÙPÛÛÜ]š[œÝ[˜ÙPÛÛÜ‹˜ÛÛ™J
JK\Ë˜ÛÝ[]˜ÛÝ[[OO]˜›Ý[™[™Ð›Þ	‰Š\Ë˜›Ý[™[™Ð›Þ]˜›Ý[™[™Ð›Þ˜ÛÛ™J
JK[OO]˜›Ý[™[™ÔÜ\™I‰Š\Ë˜›Ý[™[™ÔÜ\™O]˜›Ý[™[™ÔÜ\™K˜ÛÛ™J
JK\ßYÙ]ÛÛÜ]
J^ÙK™œ›ÛP\œ˜^J\Ëš[œÝ[˜ÙPÛÛÜ‹˜\œ˜^KÊ
_YÙ]X]š^]
J^ÙK™œ›ÛP\œ˜^J\Ëš[œÝ[˜ÙSX]š^˜\œ˜^KMŠ
_\˜^XØ\Ý
J^ØÛÛœÝ]\Ë›X]š^ÛÜ›O]\Ë˜ÛÝ[ÚYŠ›Ë™Ù[ÛY]žO]\Ë™Ù[ÛY]žK›Ë›X]\šX[]\Ë›X]\šX[›ÚYOOV›Ë›X]\šX[	‰Š[OO]\Ë˜›Ý[™[™ÔÜ\™I‰\Ë˜ÛÛ\]P›Ý[™[™ÔÜ\™J
K›Ë˜ÛÜJ\Ë˜›Ý[™[™ÔÜ\™JK›Ë˜\SX]š^
ŠKLHOO]œ˜^Kš[\œÙXÝÔÜ\™J›ÊJJY›ÜŠ]LÜNÜŠÊÊ^Ý\Ë™Ù]X]š^]
‹ÛÊKË›][\SX]šXÙ\Ê‹ÛÊK›Ë›X]š^ÛÜ›VË›Ëœ˜^XØ\Ý
›ÊNÙ›ÜŠ]LZ›Ë›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝZ›ÖÝNÛ‹š[œÝ[˜ÙRY\‹‹›Øš™XÝ]\ËKœ\Ú
Š_Z›Ë›[™ÝL_\Ù]ÛÛÜ]
J^Û[OO]\Ëš[œÝ[˜ÙPÛÛÜ‰‰Š\Ëš[œÝ[˜ÙPÛÛÜ[™]ÈÛÊ™]È›Ø]Ì\œ˜^JÊ\Ëš[œÝ[˜ÙSX]š^˜ÛÝ[
KÊJKKÐ\œ˜^J\Ëš[œÝ[˜ÙPÛÛÜ‹˜\œ˜^KÊ
_\Ù]X]š^]
J^ÙKÐ\œ˜^J\Ëš[œÝ[˜ÙSX]š^˜\œ˜^KMŠ
_]\]S[Üœ\™Ù]Ê
^ßY\ÜÜÙJ
^Ý\Ë™\Ü]Ú]™[
Ý\N—™\ÜÜÙWŸJ__Y[˜Ý[Ûˆ	ÊJ^Ü™]\›ˆž‹YKžŸY[˜Ý[Ûˆ[ÊJ^Ü™]\›ˆKž‹]žŸXÛ\ÜÈØÛÛœÝXÝÜŠ
^Ý\Ëš[™^L\ËœÛÛV×K\Ë›\ÝV×_\\Ú
J^ØÛÛœÝ]\ËœÛÛO]\Ë›\ÝÝ\Ëš[™^[‹›[™Ý	‰›‹œ\Ú
ÜÝ\‹LKÛÝ[‹LKŽ‹L_JNØÛÛœÝ[–Ý\Ëš[™^NÚKœ\Ú
ŠK\Ëš[™^
ÊË‹œÝ\]œÝ\‹˜ÛÝ[]˜ÛÝ[‹žY_\™\Ù]

^Ý\Ë›\Ý›[™ÝL\Ëš[™^L_XÛÛœÝ[W˜˜]ÚY‹›[™]È[‹[[™]È[‹›[™]È[‹Û[™]È[‹[[™]ÈÜ‹Û[™]ÈYK[™]È‹Û[™]ÈÙK[™]È[[™]ÈšKV×NÙ[˜Ý[Ûˆ
KL
^ØÛÛœÝOYKš][TÚ^™NÚYŠš\Ò[\›X]™YY™™\]šX]_˜\œ˜^K˜ÛÛœÝXÝÜˆOOYK˜\œ˜^K˜ÛÛœÝXÝÜŠ^ØÛÛœÝ]˜ÛÝ[Ù›ÜŠ]ÏLÜÏŽÜÊÊÊY›ÜŠ]LÜNÜŠÊÊYKœÙ]ÛÛ\Û™[
ÊÛ‹‹™Ù]ÛÛ\Û™[
ËŠJ_Y[ÙHK˜\œ˜^KœÙ]
˜\œ˜^KŠšJNÙK›™YYÕ\]OHLXÛ\ÜÈ[^[™Èš^ÙÙ]X^Ù[ÛY]žPÛÝ[

^Ü™]\›ˆ\Ë—ÛX^Ù[ÛY]žPÛÝ[XÛÛœÝXÝÜŠKLŠ™KJ^ÜÝ\\Š™]ÈZKJK\Ëš\Ð˜]ÚYY\ÚHL\Ëœ\“Øš™XÝœ\Ý[PÝ[YHL\ËœÛÜØš™XÝÏHL\Ë˜›Ý[™[™Ð›Þ[[\Ë˜›Ý[™[™ÔÜ\™O[[\Ë˜Ý\ÝÛTÛÜ[[\Ë—Ù˜]Ô˜[™Ù\ÏV×K\Ë—Ü™\Ù\™Y˜[™Ù\ÏV×K\Ë—Ýš\ÚXš[]OV×K\Ë—ØXÝ]™OV×K\Ë—Ø›Ý[™ÏV×K\Ë—ÛX^Ù[ÛY]žPÛÝ[]\Ë—ÛX^™\^ÛÝ[YK\Ë—ÛX^[™^ÛÝ[[‹\Ë—ÙÙ[ÛY]žR[š]X[^™YHLK\Ë—ÙÙ[ÛY]žPÛÝ[L\Ë—Û][Q˜]ÐÛÝ[Ï[™]È[Ì\œ˜^J
K\Ë—Û][Q˜]ÔÝ\Ï[™]È[Ì\œ˜^J
K\Ë—Û][Q˜]ÐÛÝ[L\Ë—Ýš\ÚXš[]PÚ[™ÙYHL\Ë—ÛX]šXÙ\Õ^\™O[[\Ë—Ú[š]X]šXÙ\Õ^\™J
_WÚ[š]X]šXÙ\Õ^\™J
^Û]SX]œÜ\

\Ë—ÛX^Ù[ÛY]žPÛÝ[
NÝM
“X]˜ÙZ[
Í
KSX]›X^

NØÛÛœÝO[™]È›Ø]Ì\œ˜^J


K[™]È›ÊK‹
NÝ\Ë—ÛX]šXÙ\Õ^\™O[ŸWÚ[š]X[^™QÙ[ÛY]žJ
^ØÛÛœÝO]\Ë™Ù[ÛY]žK]\Ë—ÛX^™\^ÛÝ[O]\Ë—ÛX^Ù[ÛY]žPÛÝ[]\Ë—ÛX^[™^ÛÝ[ÚYŠLOOO]\Ë—ÙÙ[ÛY]žR[š]X[^™Y
^Ù›ÜŠÛÛœÝH[ˆ˜]šX]\Ê^ØÛÛœÝ]™Ù]]šX]JJKØ\œ˜^NœË][TÚ^™N˜K›Ü›X[^™Y›ßO\‹[™]ÈË˜ÛÛœÝXÝÜŠŠ˜JKÏ[™]È‹˜ÛÛœÝXÝÜŠKÊNØËœÙ]\ØYÙJ‹\ØYÙJKKœÙ]]šX]JKÊ_ZYŠ[OO]™Ù][™^

J^ØÛÛœÝ[MLÍÛ™]ÈZ[Ì\œ˜^JŠN›™]ÈZ[M\œ˜^JŠNÙKœÙ][™^
™]ÈZJJJ_XÛÛœÝÏZOMLÍÛ™]ÈZ[Ì\œ˜^JŠN›™]ÈZ[M\œ˜^JŠNÙKœÙ]]šX]J[™]ÈZJËJJK\Ë—ÙÙ[ÛY]žR[š]X[^™YHL_WÝ˜[Y]QÙ[ÛY]žJ
^ÚYŠ™Ù]]šX]J[
J]›ÝÈ™]È\œ›ÜŠ˜]ÚYY\ÚˆÙ[ÛY]žHØ[››Ý\ÙH]šX]H‰Ù[W˜
NØÛÛœÝO]\Ë™Ù[ÛY]žNÚYŠ›ÛÛX[Š™Ù][™^

JHOOP›ÛÛX[ŠK™Ù][™^

JJ]›ÝÈ™]È\œ›ÜŠ	Ð˜]ÚYY\Úˆ[Ù[ÛY]šY\È]\ÝÛÛœÚ\Ý[H]™Hš[™^‹‰ÊNÙ›ÜŠÛÛœÝˆ[ˆK˜]šX]\Ê^ÚYŠOOY[
XÛÛ[YNÚYŠ]š\Ð]šX]JŠJ]›ÝÈ™]È\œ›ÜŠ˜]ÚYY\ÚˆYYÙ[ÛY]žHZ\ÜÚ[™È‰ÛŸW‹ˆ[Ù[ÛY]šY\È]\Ý]™HÛÛœÚ\Ý[]šX]\Ë˜
NØÛÛœÝO]™Ù]]šX]JŠKYK™Ù]]šX]JŠNÚYŠKš][TÚ^™HOO\‹š][TÚ^™_K››Ü›X[^™YOO\‹››Ü›X[^™Y
]›ÝÈ™]È\œ›ÜŠ˜]ÚYY\Úˆ[]šX]\È]\Ý]™HHÛÛœÚ\Ý[][TÚ^™H[™›Ü›X[^™Y˜[YK—Š__\Ù]Ý\ÝÛTÛÜ

^Ü™]\›ˆ\Ë˜Ý\ÝÛTÛÜ]\ßXÛÛ\]P›Ý[™[™Ð›Þ

^Û[OO]\Ë˜›Ý[™[™Ð›Þ	‰Š\Ë˜›Ý[™[™Ð›Þ[™]ÈYJNØÛÛœÝ]\Ë—ÙÙ[ÛY]žPÛÝ[O]\Ë˜›Ý[™[™Ð›Þ]\Ë—ØXÝ]™NÙK›XZÙQ[\J
NÙ›ÜŠ]OLÚOÚJÊÊHLHOO[–ÚWI‰Š\Ë™Ù]X]š^]
K›
K\Ë™Ù]›Ý[™[™Ð›Þ]
KÛ
K˜\SX]š^
›
KK[š[ÛŠÛ
J_XÛÛ\]P›Ý[™[™ÔÜ\™J
^Û[OO]\Ë˜›Ý[™[™ÔÜ\™I‰Š\Ë˜›Ý[™[™ÔÜ\™O[™]ÈŠNØÛÛœÝ]\Ë—ÙÙ[ÛY]žPÛÝ[O]\Ë˜›Ý[™[™ÔÜ\™K]\Ë—ØXÝ]™NÙK›XZÙQ[\J
NÙ›ÜŠ]OLÚOÚJÊÊHLHOO[–ÚWI‰Š\Ë™Ù]X]š^]
K›
K\Ë™Ù]›Ý[™[™ÔÜ\™P]
K
K˜\SX]š^
›
KK[š[ÛŠ
J_XYÙ[ÛY]žJOKLKKLJ^ÚYŠ\Ë—Ú[š]X[^™QÙ[ÛY]žJ
K\Ë—Ý˜[Y]QÙ[ÛY]žJ
K\Ë—ÙÙ[ÛY]žPÛÝ[]\Ë—ÛX^Ù[ÛY]žPÛÝ[
]›ÝÈ™]È\œ›ÜŠ˜]ÚYY\ÚˆX^[][HÙ[ÛY]žHÛÝ[™XXÚY—ŠNØÛÛœÝO^Ý™\^Ý\‹LK™\^ÛÝ[‹LK[™^Ý\‹LK[™^ÛÝ[‹L_NÛ][[ØÛÛœÝÏ]\Ë—Ü™\Ù\™Y˜[™Ù\ËO]\Ë—Ù˜]Ô˜[™Ù\ËÏ]\Ë—Ø›Ý[™ÎÌOO]\Ë—ÙÙ[ÛY]žPÛÝ[	‰Š\ÖÜË›[™ÝLWJKK™\^ÛÝ[KLOOOYOÝ™Ù]]šX]JœÜÚ][Û—ŠK˜ÛÝ[™KK™\^Ý\[[OO\Ìœ‹™\^Ý\
Ü‹™\^ÛÝ[ØÛÛœÝ]™Ù][™^

KÏ[[OO[ÚYŠÉ‰ŠKš[™^ÛÝ[KLOOO[Û˜ÛÝ[›‹Kš[™^Ý\[[OO\Ìœ‹š[™^Ý\
Ü‹š[™^ÛÝ[
KLHOOZKš[™^Ý\	‰šKš[™^Ý\
ÚKš[™^ÛÝ[\Ë—ÛX^[™^ÛÝ[K™\^Ý\
ÚK™\^ÛÝ[\Ë—ÛX^™\^ÛÝ[
]›ÝÈ™]È\œ›ÜŠ˜]ÚYY\Úˆ™\Ù\™YÜXÙH™\]Y\Ý^ÙYYÈHX^[][HY™™\ˆÚ^™K—ŠNØÛÛœÝ]\Ë—Ýš\ÚXš[]KO]\Ë—ØXÝ]™K]\Ë—ÛX]šXÙ\Õ^\™K]\Ë—ÛX]šXÙ\Õ^\™Kš[XYÙK™]NÚœ\Ú
L
KKœ\Ú
L
NØÛÛœÝO]\Ë—ÙÙ[ÛY]žPÛÝ[Ý\Ë—ÙÙ[ÛY]žPÛÝ[
ÊË›Ð\œ˜^JMŠ›JK›™YYÕ\]OHLËœ\Ú
JKKœ\Ú
ÜÝ\˜ÏÚKš[™^Ý\šK™\^Ý\ÛÝ[‹L_JKËœ\Ú
Ø›Þ[š]X[^™YˆLK›Þ›™]ÈYKÜ\™R[š]X[^™YˆLKÜ\™N›™]ÈŸJNØÛÛœÝ]\Ë™Ù[ÛY]žK™Ù]]šX]J[
NÙ›ÜŠ]LÝK™\^ÛÝ[Ý
ÊÊY‹œÙ]
K™\^Ý\
ÝJNÜ™]\›ˆ‹›™YYÕ\]OHL\ËœÙ]Ù[ÛY]žP]
K
K_\Ù]Ù[ÛY]žP]
J^ÚYŠ]\Ë—ÙÙ[ÛY]žPÛÝ[
]›ÝÈ™]È\œ›ÜŠ˜]ÚYY\ÚˆX^[][HÙ[ÛY]žHÛÝ[™XXÚY—ŠNÝ\Ë—Ý˜[Y]QÙ[ÛY]žJJNØÛÛœÝ]\Ë™Ù[ÛY]žKO[[OO[‹™Ù][™^

K[‹™Ù][™^

KÏYK™Ù][™^

KO]\Ë—Ü™\Ù\™Y˜[™Ù\ÖÝNÚYŠI‰œË˜ÛÝ[˜Kš[™^ÛÝ[K˜]šX]\ËœÜÚ][Û‹˜ÛÝ[˜K™\^ÛÝ[
]›ÝÈ™]È\œ›ÜŠ˜]ÚYY\Úˆ™\Ù\™YÜXÙH›Ý\™ÙH[›ÝYÚ›Üˆ›ÝšYYÙ[ÛY]žK—ŠNØÛÛœÝÏXK™\^Ý\XK™\^ÛÝ[Ù›ÜŠÛÛœÝ[ˆ‹˜]šX]\Ê^ÚYŠOOY[
XÛÛ[YNØÛÛœÝOYK™Ù]]šX]J
K[‹™Ù]]šX]J
NÜ
K‹ÊNØÛÛœÝÏZKš][TÚ^™NÙ›ÜŠ]ZK˜ÛÝ[O[ÝNÝ
ÊÊ^ØÛÛœÝO[ÊÝÙ›ÜŠ]LÝÎÝ
ÊÊ\‹œÙ]ÛÛ\Û™[
K
_\‹›™YYÕ\]OHLZYŠJ^ØÛÛœÝXKš[™^Ý\Ù›ÜŠ]OLÙOË˜ÛÝ[ÙJÊÊ\‹œÙ]

ÙKÊÜË™Ù]
JJNÙ›ÜŠ]O\Ë˜ÛÝ[XKš[™^ÛÝ[ÙOŽÙJÊÊ\‹œÙ]

ÙKÊNÜ‹›™YYÕ\]OHLXÛÛœÝÏ]\Ë—Ø›Ý[™ÖÝNÛ[OOYK˜›Ý[™[™Ð›ÞÊË˜›Þ˜ÛÜJK˜›Ý[™[™Ð›Þ
KË˜›Þ[š]X[^™YHL
N˜Ë˜›Þ[š]X[^™YHLK[OOYK˜›Ý[™[™ÔÜ\™OÊËœÜ\™K˜ÛÜJK˜›Ý[™[™ÔÜ\™JKËœÜ\™R[š]X[^™YHL
N˜ËœÜ\™R[š]X[^™YHLNØÛÛœÝ]\Ë—Ù˜]Ô˜[™Ù\ÖÝKOYK™Ù]]šX]JœÜÚ][Û—ŠNÜ™]\›ˆ˜ÛÝ[ZOÜË˜ÛÝ[K˜ÛÝ[\Ë—Ýš\ÚXš[]PÚ[™ÙYHLY[]QÙ[ÛY]žJ
^ØÛÛœÝO]\Ë—ØXÝ]™NÜ™]\›ˆYK›[™ÝLOOOYVÝ_
VÝOHLK\Ë—Ýš\ÚXš[]PÚ[™ÙYHL
K\ßYÙ]›Ý[™[™Ð›Þ]
J^ÚYŠLOOO]\Ë—ØXÝ]™VÝJ\™]\›ˆ\ÎØÛÛœÝ]\Ë—Ø›Ý[™ÖÝKO[‹˜›Þ]\Ë™Ù[ÛY]žNÚYŠLOOO[‹˜›Þ[š]X[^™Y
^ÚK›XZÙQ[\J
NØÛÛœÝO\‹š[™^Ï\‹˜]šX]\ËœÜÚ][Û‹O]\Ë—Ù˜]Ô˜[™Ù\ÖÝNÙ›ÜŠ]XKœÝ\XKœÝ\
ØK˜ÛÝ[ÝŽÝ
ÊÊ^Û]]ÙI‰ŠYK™Ù]
ŠJKK™^[™žTÚ[
Û™œ›ÛPY™™\]šX]JËŠJ_[‹˜›Þ[š]X[^™YHL\™]\›ˆK˜ÛÜJJK_YÙ]›Ý[™[™ÔÜ\™P]
J^ÚYŠLOOO]\Ë—ØXÝ]™VÝJ\™]\›ˆ\ÎØÛÛœÝ]\Ë—Ø›Ý[™ÖÝKO[‹œÜ\™K]\Ë™Ù[ÛY]žNÚYŠLOOO[‹œÜ\™R[š]X[^™Y
^ÚK›XZÙQ[\J
K\Ë™Ù]›Ý[™[™Ð›Þ]
Û
KÛ™Ù]Ù[\ŠK˜Ù[\ŠNØÛÛœÝO\‹š[™^Ï\‹˜]šX]\ËœÜÚ][Û‹O]\Ë—Ù˜]Ô˜[™Ù\ÖÝNÛ]ÏLÙ›ÜŠ]XKœÝ\XKœÝ\
ØK˜ÛÝ[ÝŽÝ
ÊÊ^Û]]ÙI‰ŠYK™Ù]
ŠJKÛ™œ›ÛPY™™\]šX]JËŠKÏSX]›X^
ËK˜Ù[\‹™\Ý[˜ÙUÔÜ]X\™Y
Û
J_ZKœ˜Y]\ÏSX]œÜ\
ÊK‹œÜ\™R[š]X[^™YHL\™]\›ˆK˜ÛÜJJK_\Ù]X]š^]
J^ØÛÛœÝ]\Ë—ØXÝ]™KO]\Ë—ÛX]šXÙ\Õ^\™K]\Ë—ÛX]šXÙ\Õ^\™Kš[XYÙK™]NÜ™]\›ˆ]\Ë—ÙÙ[ÛY]žPÛÝ[LOOO[–Ý_
KÐ\œ˜^J‹MŠ
KK›™YYÕ\]OHL
K\ßYÙ]X]š^]
J^ØÛÛœÝ]\Ë—ØXÝ]™KO]\Ë—ÛX]šXÙ\Õ^\™Kš[XYÙK™]NÜ™]\›ˆ]\Ë—ÙÙ[ÛY]žPÛÝ[LOOO[–ÝOÛ[™K™œ›ÛP\œ˜^JKMŠ
_\Ù]š\ÚX›P]
J^ØÛÛœÝ]\Ë—Ýš\ÚXš[]KO]\Ë—ØXÝ]™NÜ™]\›ˆ]\Ë—ÙÙ[ÛY]žPÛÝ[LOOOZVÝ_–ÝOOOY_
–ÝOYK\Ë—Ýš\ÚXš[]PÚ[™ÙYHL
K\ßYÙ]š\ÚX›P]

^ØÛÛœÝO]\Ë—Ýš\ÚXš[]K]\Ë—ØXÝ]™NÜ™]\›ˆJ]\Ë—ÙÙ[ÛY]žPÛÝ[LOOO[–ÝJI‰™VÝ_\˜^XØ\Ý
J^ØÛÛœÝ]\Ë—Ýš\ÚXš[]KO]\Ë—ØXÝ]™K]\Ë—Ù˜]Ô˜[™Ù\ËÏ]\Ë—ÙÙ[ÛY]žPÛÝ[O]\Ë›X]š^ÛÜ›Ï]\Ë™Ù[ÛY]žNÝ[›X]\šX[]\Ë›X]\šX[[™Ù[ÛY]žKš[™^[Ëš[™^[™Ù[ÛY]žK˜]šX]\Ï[Ë˜]šX]\Ë[OO][™Ù[ÛY]žK˜›Ý[™[™Ð›Þ	‰Š[™Ù[ÛY]žK˜›Ý[™[™Ð›Þ[™]ÈYJK[OO][™Ù[ÛY]žK˜›Ý[™[™ÔÜ\™I‰Š[™Ù[ÛY]žK˜›Ý[™[™ÔÜ\™O[™]ÈŠNÙ›ÜŠ]ÏLÛÏÎÛÊÊÊ^ÚYŠ[–Û×_ZVÛ×JXÛÛ[YNØÛÛœÝÏ\–Û×NÝ[™Ù[ÛY]žKœÙ]˜]Ô˜[™ÙJËœÝ\Ë˜ÛÝ[
K\Ë™Ù]X]š^]
Ë[›X]š^ÛÜ›
Kœ™[][\JJK\Ë™Ù]›Ý[™[™Ð›Þ]
Ë[™Ù[ÛY]žK˜›Ý[™[™Ð›Þ
K\Ë™Ù]›Ý[™[™ÔÜ\™P]
Ë[™Ù[ÛY]žK˜›Ý[™[™ÔÜ\™JK[œ˜^XØ\Ý

NÙ›ÜŠ]LY›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝYÝNÛ‹›Øš™XÝ]\Ë‹˜˜]ÚY[ËKœ\Ú
Š_Y›[™ÝL][›X]\šX[[[[™Ù[ÛY]žKš[™^[[[™Ù[ÛY]žK˜]šX]\Ï^ßK[™Ù[ÛY]žKœÙ]˜]Ô˜[™ÙJKÌ
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë™Ù[ÛY]žO]™Ù[ÛY]žK˜ÛÛ™J
K\Ëœ\“Øš™XÝœ\Ý[PÝ[Y]œ\“Øš™XÝœ\Ý[PÝ[Y\ËœÛÜØš™XÝÏ]œÛÜØš™XÝË\Ë˜›Ý[™[™Ð›Þ[[OO]˜›Ý[™[™Ð›ÞÝ˜›Ý[™[™Ð›Þ˜ÛÛ™J
N›[\Ë˜›Ý[™[™ÔÜ\™O[[OO]˜›Ý[™[™ÔÜ\™OÝ˜›Ý[™[™ÔÜ\™K˜ÛÛ™J
N›[\Ë—Ù˜]Ô˜[™Ù\Ï]—Ù˜]Ô˜[™Ù\Ë›X\

OŠË‹‹JJJK\Ë—Ü™\Ù\™Y˜[™Ù\Ï]—Ü™\Ù\™Y˜[™Ù\Ë›X\

OŠË‹‹JJJK\Ë—Ýš\ÚXš[]O]—Ýš\ÚXš[]KœÛXÙJ
K\Ë—ØXÝ]™O]—ØXÝ]™KœÛXÙJ
K\Ë—Ø›Ý[™Ï]—Ø›Ý[™Ë›X\

OŠØ›Þ[š]X[^™Y˜›Þ[š]X[^™Y›Þ˜›Þ˜ÛÛ™J
KÜ\™R[š]X[^™YœÜ\™R[š]X[^™YÜ\™NœÜ\™K˜ÛÛ™J
_JJJK\Ë—ÛX^Ù[ÛY]žPÛÝ[]—ÛX^Ù[ÛY]žPÛÝ[\Ë—ÛX^™\^ÛÝ[]—ÛX^™\^ÛÝ[\Ë—ÛX^[™^ÛÝ[]—ÛX^[™^ÛÝ[\Ë—ÙÙ[ÛY]žR[š]X[^™Y]—ÙÙ[ÛY]žR[š]X[^™Y\Ë—ÙÙ[ÛY]žPÛÝ[]—ÙÙ[ÛY]žPÛÝ[\Ë—Û][Q˜]ÐÛÝ[Ï]—Û][Q˜]ÐÛÝ[ËœÛXÙJ
K\Ë—Û][Q˜]ÔÝ\Ï]—Û][Q˜]ÔÝ\ËœÛXÙJ
K\Ë—ÛX]šXÙ\Õ^\™O]—ÛX]šXÙ\Õ^\™K˜ÛÛ™J
K\Ë—ÛX]šXÙ\Õ^\™Kš[XYÙK™]O]\Ë—ÛX]šXÙ\Õ^\™Kš[XYÙKœÛXÙJ
K\ßY\ÜÜÙJ
^Ü™]\›ˆ\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë—ÛX]šXÙ\Õ^\™K™\ÜÜÙJ
K\Ë—ÛX]šXÙ\Õ^\™O[[\ß[Û™Y›Ü™T™[™\ŠK‹KŠ^ÚYŠ]\Ë—Ýš\ÚXš[]PÚ[™ÙY	‰ˆ]\Ëœ\“Øš™XÝœ\Ý[PÝ[Y	‰ˆ]\ËœÛÜØš™XÝÊ\™]\›ŽØÛÛœÝÏZK™Ù][™^

KO[[OO\ÏÌNœË˜\œ˜^K–UT×ÔT—ÑSSQS•Ï]\Ë—Ýš\ÚXš[]K]\Ë—Û][Q˜]ÔÝ\ËÏ]\Ë—Û][Q˜]ÐÛÝ[Ë]\Ë—Ù˜]Ô˜[™Ù\ËO]\Ëœ\“Øš™XÝœ\Ý[PÝ[YÝI‰ŠÛ›][\SX]šXÙ\Ê‹œ›Ú™XÝ[Û“X]š^‹›X]š^ÛÜ›[™\œÙJK›][\J\Ë›X]š^ÛÜ›
K[œÙ]œ›ÛT›Ú™XÝ[Û“X]š^
Ûš\ÕÙX‘ÔT™[™\™\Ô]‰
JNÛ]LÚYŠ\ËœÛÜØš™XÝÊ^Ú[˜ÛÜJ\Ë›X]š^ÛÜ›
Kš[™\

KÛœÙ]œ›ÛSX]š^ÜÚ][ÛŠ‹›X]š^ÛÜ›
K˜\SX]š^
[
NÙ›ÜŠ]LO[Ë›[™ÝÝNÝ
ÊÊZYŠÖÝJ^Ý\Ë™Ù]X]š^]
›
K\Ë™Ù]›Ý[™[™ÔÜ\™P]

K˜\SX]š^
›
NÛ]OHLNÚYŠI‰ŠOHX[š[\œÙXÝÔÜ\™J
JKYJ^ØÛÛœÝOXÛ™\Ý[˜ÙUÊ˜Ù[\ŠNÚœ\Ú
ÝKJ__XÛÛœÝZ›\ÝO]\Ë˜Ý\ÝÛTÛÜÛ[OOYOÝœÛÜ
‹˜[œÜ\™[Ô[Î‰ÊN™K˜Ø[
\ËŠNÙ›ÜŠ]OL]›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]ÙWNÛÙO[‹œÝ\
˜KÖÙO[‹˜ÛÝ[
ÊßZœ™\Ù]

_Y[ÙH›ÜŠ]LO[Ë›[™ÝÝNÝ
ÊÊZYŠÖÝJ^Û]OHLNÚYŠI‰Š\Ë™Ù]X]š^]
›
K\Ë™Ù]›Ý[™[™ÔÜ\™P]

K˜\SX]š^
›
KOHX[š[\œÙXÝÔÜ\™J
JKYJ^ØÛÛœÝOZÝNÛÙOYKœÝ\
˜KÖÙOYK˜ÛÝ[
Êß_]\Ë—Û][Q˜]ÐÛÝ[Y\Ë—Ýš\ÚXš[]PÚ[™ÙYHL_[Û™Y›Ü™TÚYÝÊK‹K‹Ê^Ý\Ë›Û™Y›Ü™T™[™\Š[K‹Ê__XÛ\ÜÈ›^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Ó[™P˜\ÚXÓX]\šX[HL\Ë\OW“[™P˜\ÚXÓX]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\Ë›X\[[\Ë›[™]ÚYLK\Ë›[™XØ\Wœ›Ý[™‹\Ë›[™Z›Ú[Wœ›Ý[™‹\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë›X\]›X\\Ë›[™]ÚY]›[™]ÚY\Ë›[™XØ\]›[™XØ\\Ë›[™Z›Ú[]›[™Z›Ú[‹\Ë™›ÙÏ]™›ÙË\ß_XÛÛœÝÛ[™]ÈÙKÛ[™]ÈÙK›[™]È[‹[™]È[‹[[™]ÈŽØÛ\ÜÈ[^[™È›žØÛÛœÝXÝÜŠ[™]ÈZKO[™]È›
^ÜÝ\\Š
K\Ëš\Ó[™OHL\Ë\OW“[™W‹\Ë™Ù[ÛY]žO]\Ë›X]\šX[YK\Ë\]S[Üœ\™Ù]Ê
_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë›X]\šX[P\œ˜^Kš\Ð\œ˜^J›X]\šX[
OÝ›X]\šX[œÛXÙJ
N›X]\šX[\Ë™Ù[ÛY]žO]™Ù[ÛY]žK\ßXÛÛ\]S[™Q\Ý[˜Ù\Ê
^ØÛÛœÝ]\Ë™Ù[ÛY]žNÚYŠ[OO]š[™^
^ØÛÛœÝO]˜]šX]\ËœÜÚ][Û‹VÌNÙ›ÜŠ]LKOYK˜ÛÝ[ÝNÝ
ÊÊYÛ™œ›ÛPY™™\]šX]JKLJKÛ™œ›ÛPY™™\]šX]JK
K–ÝO[–ÝLWK–ÝJÏYÛ™\Ý[˜ÙUÊÛ
NÝœÙ]]šX]J›[™Q\Ý[˜ÙW‹™]ÈJ‹JJ_Y[ÙHÛÛœÛÛKØ\›Š•‘QK“[™K˜ÛÛ\]S[™Q\Ý[˜Ù\Ê
NˆÛÛ\]][ÛˆÛ›HÜÜÚX›HÚ]›Û‹Z[™^YY™™\‘Ù[ÛY]žK—ŠNÜ™]\›ˆ\ß\˜^XØ\Ý
J^ØÛÛœÝ]\Ë™Ù[ÛY]žKO]\Ë›X]š^ÛÜ›]œ\˜[\Ë“[™K™\ÚÛÏ[‹™˜]Ô˜[™ÙNÚYŠ[OO[‹˜›Ý[™[™ÔÜ\™I‰›‹˜ÛÛ\]P›Ý[™[™ÔÜ\™J
K[˜ÛÜJ‹˜›Ý[™[™ÔÜ\™JK[˜\SX]š^
JK[œ˜Y]\ÊÏ\‹LOOO]œ˜^Kš[\œÙXÝÔÜ\™J[
J\™]\›ŽÝ›˜ÛÜJJKš[™\

K˜ÛÜJœ˜^JK˜\SX]š^
›
NØÛÛœÝO\‹Ê
\ËœØØ[Kž
Ý\ËœØØ[KžJÝ\ËœØØ[KžŠKÌÊKÏXJ˜K[™]ÈÙKÏ[™]ÈÙK[™]ÈÙKO[™]ÈÙK]\Ëš\Ó[™TÙYÛY[ÏÌŽŒK[‹š[™^O[‹˜]šX]\ËœÜÚ][ÛŽÚYŠ[OO\
^Ù›ÜŠ]SX]›X^
ËœÝ\
KOSX]›Z[Š˜ÛÝ[ËœÝ\
ÜË˜ÛÝ[
KLNÛNÛŠÏY
^ØÛÛœÝO\™Ù]
ŠK\™Ù]
ŠÌJNÛ™œ›ÛPY™™\]šX]JKJKË™œ›ÛPY™™\]šX]JKŠNÚYŠ™\Ý[˜ÙTÜUÔÙYÛY[
ËK
O›ÊXÛÛ[YNÝK˜\SX]š^
\Ë›X]š^ÛÜ›
NØÛÛœÝÏ]œ˜^K›ÜšYÚ[‹™\Ý[˜ÙUÊJNÜÏ›™X\ŸÏ™˜\ŸKœ\Ú
Ù\Ý[˜ÙNœËÚ[š˜ÛÛ™J
K˜\SX]š^
\Ë›X]š^ÛÜ›
K[™^›‹˜XÙN›[˜XÙR[™^›[Øš™XÝ\ßJ__Y[Ù^Ù›ÜŠ]SX]›X^
ËœÝ\
KOSX]›Z[ŠK˜ÛÝ[ËœÝ\
ÜË˜ÛÝ[
KLNÛNÛŠÏY
^Û™œ›ÛPY™™\]šX]JKŠKË™œ›ÛPY™™\]šX]JKŠÌJNÚYŠ™\Ý[˜ÙTÜUÔÙYÛY[
ËK
O›ÊXÛÛ[YNÝK˜\SX]š^
\Ë›X]š^ÛÜ›
NØÛÛœÝO]œ˜^K›ÜšYÚ[‹™\Ý[˜ÙUÊJNÚO›™X\ŸO™˜\ŸKœ\Ú
Ù\Ý[˜ÙNšKÚ[š˜ÛÛ™J
K˜\SX]š^
\Ë›X]š^ÛÜ›
K[™^›‹˜XÙN›[˜XÙR[™^›[Øš™XÝ\ßJ___]\]S[Üœ\™Ù]Ê
^ØÛÛœÝ]\Ë™Ù[ÛY]žK›[Üœ]šX]\ËOSØš™XÝšÙ^\Ê
NÚYŠK›[™ÝŒ
^ØÛÛœÝ]ÙVÌWNÚYŠ›ÚYOO[Š^Ý\Ë›[Üœ\™Ù][™›Y[˜Ù\ÏV×K\Ë›[Üœ\™Ù]XÝ[Û˜\žO^ßNÙ›ÜŠ]LO[‹›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO[–ÝK›˜[Y_Ýš[™Ê
NÝ\Ë›[Üœ\™Ù][™›Y[˜Ù\Ëœ\Ú

K\Ë›[Üœ\™Ù]XÝ[Û˜\žVÙWO]____XÛÛœÝÛ[™]ÈÙK›[™]ÈÙNØÛ\ÜÈ^[™È[ØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\Ó[™TÙYÛY[ÏHL\Ë\OW“[™TÙYÛY[×ŸXÛÛ\]S[™Q\Ý[˜Ù\Ê
^ØÛÛœÝ]\Ë™Ù[ÛY]žNÚYŠ[OO]š[™^
^ØÛÛœÝO]˜]šX]\ËœÜÚ][Û‹V×NÙ›ÜŠ]LOYK˜ÛÝ[ÝNÝ
ÏLŠTÛ™œ›ÛPY™™\]šX]JK
K›™œ›ÛPY™™\]šX]JK
ÌJK–ÝOLOO]Ì›–ÝLWK–Ý
ÌWO[–ÝJÔÛ™\Ý[˜ÙUÊ›
NÝœÙ]]šX]J›[™Q\Ý[˜ÙW‹™]ÈJ‹JJ_Y[ÙHÛÛœÛÛKØ\›Š•‘QK“[™TÙYÛY[Ë˜ÛÛ\]S[™Q\Ý[˜Ù\Ê
NˆÛÛ\]][ÛˆÛ›HÜÜÚX›HÚ]›Û‹Z[™^YY™™\‘Ù[ÛY]žK—ŠNÜ™]\›ˆ\ß_XÛ\ÜÈ[^[™È[ØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\Ó[™SÛÜHL\Ë\OW“[™SÛÜŸ_XÛ\ÜÈÛ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÔÚ[ÓX]\šX[HL\Ë\OW”Ú[ÓX]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\Ë›X\[[\Ë˜[SX\[[\ËœÚ^™OLK\ËœÚ^™P][X][ÛHL\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë›X\]›X\\Ë˜[SX\]˜[SX\\ËœÚ^™O]œÚ^™K\ËœÚ^™P][X][Û]œÚ^™P][X][Û‹\Ë™›ÙÏ]™›ÙË\ß_XÛÛœÝ[[™]È[‹›[™]È[‹Û[™]È‹[™]ÈÙNØÛ\ÜÈ^[™È›žØÛÛœÝXÝÜŠ[™]ÈZKO[™]ÈÛ
^ÜÝ\\Š
K\Ëš\ÔÚ[ÏHL\Ë\OW”Ú[×‹\Ë™Ù[ÛY]žO]\Ë›X]\šX[YK\Ë\]S[Üœ\™Ù]Ê
_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë›X]\šX[P\œ˜^Kš\Ð\œ˜^J›X]\šX[
OÝ›X]\šX[œÛXÙJ
N›X]\šX[\Ë™Ù[ÛY]žO]™Ù[ÛY]žK\ß\˜^XØ\Ý
J^ØÛÛœÝ]\Ë™Ù[ÛY]žKO]\Ë›X]š^ÛÜ›]œ\˜[\Ë”Ú[Ë™\ÚÛÏ[‹™˜]Ô˜[™ÙNÚYŠ[OO[‹˜›Ý[™[™ÔÜ\™I‰›‹˜ÛÛ\]P›Ý[™[™ÔÜ\™J
KÛ˜ÛÜJ‹˜›Ý[™[™ÔÜ\™JKÛ˜\SX]š^
JKÛœ˜Y]\ÊÏ\‹LOOO]œ˜^Kš[\œÙXÝÔÜ\™JÛ
J\™]\›ŽÐ[˜ÛÜJJKš[™\

K›˜ÛÜJœ˜^JK˜\SX]š^
[
NØÛÛœÝO\‹Ê
\ËœØØ[Kž
Ý\ËœØØ[KžJÝ\ËœØØ[KžŠKÌÊKÏXJ˜K[‹š[™^Ï[‹˜]šX]\ËœÜÚ][ÛŽÚYŠ[OO[
^Ù›ÜŠ]SX]›X^
ËœÝ\
KSX]›Z[Š˜ÛÝ[ËœÝ\
ÜË˜ÛÝ[
NÛŽÛŠÊÊ^ØÛÛœÝ[™Ù]
ŠNÓ™œ›ÛPY™™\]šX]JËŠK[
‹ËKK\Ê__Y[Ù^Ù›ÜŠ]SX]›X^
ËœÝ\
KSX]›Z[ŠË˜ÛÝ[ËœÝ\
ÜË˜ÛÝ[
NÛŽÛŠÊÊS™œ›ÛPY™™\]šX]JËŠK[
‹ËKK\Ê__]\]S[Üœ\™Ù]Ê
^ØÛÛœÝ]\Ë™Ù[ÛY]žK›[Üœ]šX]\ËOSØš™XÝšÙ^\Ê
NÚYŠK›[™ÝŒ
^ØÛÛœÝ]ÙVÌWNÚYŠ›ÚYOO[Š^Ý\Ë›[Üœ\™Ù][™›Y[˜Ù\ÏV×K\Ë›[Üœ\™Ù]XÝ[Û˜\žO^ßNÙ›ÜŠ]LO[‹›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO[–ÝK›˜[Y_Ýš[™Ê
NÝ\Ë›[Üœ\™Ù][™›Y[˜Ù\Ëœ\Ú

K\Ë›[Üœ\™Ù]XÝ[Û˜\žVÙWO]____Y[˜Ý[Ûˆ[
K‹K‹ËJ^ØÛÛœÝÏT›™\Ý[˜ÙTÜUÔÚ[

NÚYŠÏŠ^ØÛÛœÝ[™]ÈÙNÔ›˜ÛÜÙ\ÝÚ[ÔÚ[
ŠK‹˜\SX]š^
JNØÛÛœÝ\‹œ˜^K›ÜšYÚ[‹™\Ý[˜ÙUÊŠNÚYŠ‹›™X\Ÿœ‹™˜\Š\™]\›ŽÜËœ\Ú
Ù\Ý[˜ÙN›\Ý[˜ÙUÔ˜^N“X]œÜ\
ÊKÚ[›‹[™^™K˜XÙN›[Øš™XÝ˜_J__XÛ\ÜÈ[^[™È™^ØÛÛœÝXÝÜŠK‹K‹ËKËËJ^ÜÝ\\Š[ËKËËK‹JK\Ëš\ÐÛÛ\™\ÜÙY^\™OHL\Ëš[XYÙO^ÝÚY™KZYÚ›ŸK\Ë›Z\X\Ï]\Ë™›\OHLK\Ë™Ù[™\˜]SZ\X\ÏHL__XÛ\ÜÈØÛÛœÝXÝÜŠ
^Ý\Ë\OWÝ\™W‹\Ë˜\˜Ó[™Ý]š\Ú[ÛœÏLŒYÙ]Ú[

^Ü™]\›ˆÛÛœÛÛKØ\›Š•‘QKÝ\™Nˆ™Ù]Ú[

H›Ý[\[Y[Y—ŠK[YÙ]Ú[]
J^ØÛÛœÝ]\Ë™Ù]]ÕX\[™Ê
NÜ™]\›ˆ\Ë™Ù]Ú[
‹J_YÙ]Ú[ÊMJ^ØÛÛœÝOV×NÙ›ÜŠ]LÛ]ÛŠÊÊYKœ\Ú
\Ë™Ù]Ú[
‹Ý
JNÜ™]\›ˆ_YÙ]ÜXÙYÚ[ÊMJ^ØÛÛœÝOV×NÙ›ÜŠ]LÛ]ÛŠÊÊYKœ\Ú
\Ë™Ù]Ú[]
‹Ý
JNÜ™]\›ˆ_YÙ][™Ý

^ØÛÛœÝ]\Ë™Ù][™ÝÊ
NÜ™]\›ˆÝ›[™ÝLW_YÙ][™ÝÊ]\Ë˜\˜Ó[™Ý]š\Ú[ÛœÊ^ÚYŠ\Ë˜ØXÚP\˜Ó[™ÝÉ‰\Ë˜ØXÚP\˜Ó[™ÝË›[™ÝOO]
ÌI‰ˆ]\Ë›™YYÕ\]J\™]\›ˆ\Ë˜ØXÚP\˜Ó[™ÝÎÝ\Ë›™YYÕ\]OHLNØÛÛœÝOV×NÛ]‹O]\Ë™Ù]Ú[

KLÙKœ\Ú

NÙ›ÜŠ]ÏLNÜÏ]ÜÊÊÊ[]\Ë™Ù]Ú[
ËÝ
KŠÏ[‹™\Ý[˜ÙUÊJKKœ\Ú
ŠKO[ŽÜ™]\›ˆ\Ë˜ØXÚP\˜Ó[™ÝÏYK_]\]P\˜Ó[™ÝÊ
^Ý\Ë›™YYÕ\]OHL\Ë™Ù][™ÝÊ
_YÙ]]ÕX\[™ÊJ^ØÛÛœÝ]\Ë™Ù][™ÝÊ
NÛ]OLØÛÛœÝ[‹›[™ÝÛ]ÎÜÏY_
›–Ü‹LWNÛ]KÏL\‹LNÙ›ÜŠÛÏ[ÊZYŠOSX]™›ÛÜŠÊÊ[ÊKÌŠKO[–ÚWK\ËO
[ÏZJÌNÙ[Ù^ÚYŠJOŒ
J^ÛZNØœ™XZß[ZKL_ZYŠO[–ÚWOOO\Ê\™]\›ˆKÊ‹LJNØÛÛœÝÏ[–ÚWNÜ™]\›ŠJÊËXÊKÊ–ÚJÌWKXÊJKÊ‹LJ_YÙ][™Ù[
J^ØÛÛœÝLYKMÛ]O][‹]
ÛŽÚO	‰ŠOL
KŒI‰ŠLJNØÛÛœÝÏ]\Ë™Ù]Ú[
JKO]\Ë™Ù]Ú[
ŠKÏY_
Ëš\Õ™XÝÜŒÛ™]ÈYN›™]ÈÙJNÜ™]\›ˆË˜ÛÜJJKœÝXŠÊK››Ü›X[^™J
KßYÙ][™Ù[]
J^ØÛÛœÝ]\Ë™Ù]]ÕX\[™Ê
NÜ™]\›ˆ\Ë™Ù][™Ù[
‹J_XÛÛ\]Qœ™[™]œ˜[Y\ÊJ^ØÛÛœÝ[™]ÈÙKOV×KV×KÏV×KO[™]ÈÙKÏ[™]È[ŽÙ›ÜŠ]OLÙO]ÙJÊÊ^ØÛÛœÝYKÝÚVÙWO]\Ë™Ù][™Ù[]
‹™]ÈÙJ_\–ÌO[™]ÈÙKÖÌO[™]ÈÙNÛ]S[X™\‹“PVÕSQNØÛÛœÝÏSX]˜XœÊVÌKž
KSX]˜XœÊVÌKžJKOSX]˜XœÊVÌKžŠNØÏ[	‰ŠXË‹œÙ]
K
JK[	‰ŠZ‹œÙ]
K
JKO[	‰›‹œÙ]
JKK˜Ü›ÜÜÕ™XÝÜœÊVÌKŠK››Ü›X[^™J
K–ÌK˜Ü›ÜÜÕ™XÝÜœÊVÌKJKÖÌK˜Ü›ÜÜÕ™XÝÜœÊVÌK–ÌJNÙ›ÜŠ]OLNÙO]ÙJÊÊ^ÚYŠ–ÙWO\–ÙKLWK˜ÛÛ™J
KÖÙWO\ÖÙKLWK˜ÛÛ™J
KK˜Ü›ÜÜÕ™XÝÜœÊVÙKLWKVÙWJKK›[™Ý

O“[X™\‹‘TÒSÓŠ^ØK››Ü›X[^™J
NØÛÛœÝSX]˜XÛÜÊYJVÙKLWK™Ý
VÙWJKLKJJNÜ–ÙWK˜\SX]š^
Ë›XZÙT›Ý][Û^\ÊK
J_\ÖÙWK˜Ü›ÜÜÕ™XÝÜœÊVÙWK–ÙWJ_ZYŠLOOYJ^Û]OSX]˜XÛÜÊYJ–ÌK™Ý
–ÝJKLKJJNÙKÏ]VÌK™Ý
K˜Ü›ÜÜÕ™XÝÜœÊ–ÌK–ÝJJOŒ	‰ŠOKYJNÙ›ÜŠ]LNÛ]ÛŠÊÊ\–Û—K˜\SX]š^
Ë›XZÙT›Ý][Û^\ÊVÛ—KJ›ŠJKÖÛ—K˜Ü›ÜÜÕ™XÝÜœÊVÛ—K–Û—J_\™]\›žÝ[™Ù[ÎšK›Ü›X[Îœ‹š[›Ü›X[Îœß_XÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê_XÛÜJ
^Ü™]\›ˆ\Ë˜\˜Ó[™Ý]š\Ú[ÛœÏ]˜\˜Ó[™Ý]š\Ú[ÛœË\ß]Ò”ÓÓŠ
^ØÛÛœÝ^ÛY]Y]NžÝ™\œÚ[ÛŽ‹\N—Ý\™W‹Ù[™\˜]ÜŽ—Ý\™KÒ”ÓÓ—Ÿ_NÜ™]\›ˆ˜\˜Ó[™Ý]š\Ú[ÛœÏ]\Ë˜\˜Ó[™Ý]š\Ú[ÛœË\O]\Ë\KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆ\Ë˜\˜Ó[™Ý]š\Ú[ÛœÏ]˜\˜Ó[™Ý]š\Ú[ÛœË\ß_XÛ\ÜÈ›^[™ÈØÛÛœÝXÝÜŠLOLLKOLKLÏLŠ“X]”KOHLKÏL
^ÜÝ\\Š
K\Ëš\Ñ[\ÙPÝ\™OHL\Ë\OW‘[\ÙPÝ\™W‹\Ë˜V]\Ë˜VOYK\Ëž˜Y]\Ï[‹\ËžT˜Y]\ÏZK\Ë˜TÝ\[™ÛO\‹\Ë˜Q[™[™ÛO\Ë\Ë˜PÛØÚÝÚ\ÙOXK\Ë˜T›Ý][Û[ßYÙ]Ú[
J^ØÛÛœÝY_™]ÈYKOLŠ“X]”NÛ]]\Ë˜Q[™[™ÛK]\Ë˜TÝ\[™ÛNØÛÛœÝÏSX]˜XœÊŠO[X™\‹‘TÒSÓŽÙ›ÜŠÜÊ\ŠÏZNÙ›ÜŠÜšNÊ\‹OZNÜ[X™\‹‘TÒSÓ‰‰Š\ÏÌšJKLOO]\Ë˜PÛØÚÝÚ\Ù_ß
OOZOÜKZNœ‹OZJNØÛÛœÝO]\Ë˜TÝ\[™ÛJÝ
œŽÛ]Ï]\Ë˜V
Ý\Ëž˜Y]\Ê“X]˜ÛÜÊJK]\Ë˜VJÝ\ËžT˜Y]\Ê“X]œÚ[ŠJNÚYŠOO]\Ë˜T›Ý][ÛŠ^ØÛÛœÝSX]˜ÛÜÊ\Ë˜T›Ý][ÛŠKOSX]œÚ[Š\Ë˜T›Ý][ÛŠK[Ë]\Ë˜VO[]\Ë˜VNÛÏ[ŠZJ™JÝ\Ë˜V[Š™JÚJ
Ý\Ë˜V_\™]\›ˆ‹œÙ]
Ë
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜V]˜V\Ë˜VO]˜VK\Ëž˜Y]\Ï]ž˜Y]\Ë\ËžT˜Y]\Ï]žT˜Y]\Ë\Ë˜TÝ\[™ÛO]˜TÝ\[™ÛK\Ë˜Q[™[™ÛO]˜Q[™[™ÛK\Ë˜PÛØÚÝÚ\ÙO]˜PÛØÚÝÚ\ÙK\Ë˜T›Ý][Û]˜T›Ý][Û‹\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆ˜V]\Ë˜V˜VO]\Ë˜VKž˜Y]\Ï]\Ëž˜Y]\ËžT˜Y]\Ï]\ËžT˜Y]\Ë˜TÝ\[™ÛO]\Ë˜TÝ\[™ÛK˜Q[™[™ÛO]\Ë˜Q[™[™ÛK˜PÛØÚÝÚ\ÙO]\Ë˜PÛØÚÝÚ\ÙK˜T›Ý][Û]\Ë˜T›Ý][Û‹Yœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\Ë˜V]˜V\Ë˜VO]˜VK\Ëž˜Y]\Ï]ž˜Y]\Ë\ËžT˜Y]\Ï]žT˜Y]\Ë\Ë˜TÝ\[™ÛO]˜TÝ\[™ÛK\Ë˜Q[™[™ÛO]˜Q[™[™ÛK\Ë˜PÛØÚÝÚ\ÙO]˜PÛØÚÝÚ\ÙK\Ë˜T›Ý][Û]˜T›Ý][Û‹\ß_XÛ\ÜÈÛ^[™È›ØÛÛœÝXÝÜŠK‹K‹Ê^ÜÝ\\ŠK‹‹K‹ÊK\Ëš\Ð\˜ÐÝ\™OHL\Ë\OW\˜ÐÝ\™WŸ_Y[˜Ý[Ûˆ›

^Û]LOLLOLÙ[˜Ý[ÛˆŠ‹ËKÊ^Ý\‹OXKKLÊœŠÌÊœËLŠ˜K[ËOLŠœ‹LŠœÊØJÛß\™]\›žÚ[š]Ø]][›ÛN™[˜Ý[ÛŠK‹KÊ^ÜŠK‹ÊŠ‹]
KÊŠKYJJ_K[š]›Û[šY›Ü›PØ]][›ÛN™[˜Ý[ÛŠK‹KËKÊ^Û]JK]
KÜËJ‹]
KÊÊØJJÊ‹YJKØKÏJ‹YJKØKJKYJKÊJÛÊJÊK[ŠKÛÎÛ
XKÊXKŠK‹Ê_KØ[Î™[˜Ý[ÛŠŠ^ØÛÛœÝÏ\ŠœŽÜ™]\›ˆ
ÙJœŠÛŠœÊÚJŠÊœŠ___XÛÛœÝ›[™]ÈÙK›[™]È›Û[™]È›[™]È›ØÛ\ÜÈ›^[™ÈØÛÛœÝXÝÜŠV×KOHLKW˜Ù[š\][‹OKJ^ÜÝ\\Š
K\Ëš\ÐØ]][›ÛPÝ\™LÏHL\Ë\OWØ]][›ÛPÝ\™L×‹\ËœÚ[Ï]\Ë˜ÛÜÙYYK\Ë˜Ý\™U\O[‹\Ë[œÚ[ÛZ_YÙ]Ú[
O[™]ÈÙJ^ØÛÛœÝYKO]\ËœÚ[ËZK›[™ÝÏJ‹J\Ë˜ÛÜÙYÌŒJJJÛ]KËSX]™›ÛÜŠÊKÏ\Ë[Ý\Ë˜ÛÜÙYÛ
Ï[ŒÌŠX]™›ÛÜŠX]˜XœÊ
KÜŠJÌJJœŽŒOOXÉ‰›OO\‹LI‰Š\‹L‹ÏLJK\Ë˜ÛÜÙYŒØOZVÊLJI\—NŠ›œÝX•™XÝÜœÊVÌKVÌWJK˜Y
VÌJKOP›
NØÛÛœÝZVÛ	\—KOZVÊ
ÌJI\—NÚYŠ\Ë˜ÛÜÙY
ÌÛÏZVÊ
ÌŠI\—NŠ›œÝX•™XÝÜœÊVÜ‹LWKVÜ‹L—JK˜Y
VÜ‹LWJKÏP›
K˜Ù[š\][OO]\Ë˜Ý\™U\_˜ÚÜ™[OO]\Ë˜Ý\™U\J^ØÛÛœÝW˜ÚÜ™[OO]\Ë˜Ý\™U\OËN‹ŒNÛ]OSX]œÝÊK™\Ý[˜ÙUÔÜ]X\™Y

K
KSX]œÝÊ™\Ý[˜ÙUÔÜ]X\™Y
JK
KOSX]œÝÊK™\Ý[˜ÙUÔÜ]X\™Y
ÊK
NÛYKM	‰ŠLJKOYKM	‰ŠO[ŠKOYKM	‰ŠO[ŠK›š[š]›Û[šY›Ü›PØ]][›ÛJKžžKžËžK‹JKÛš[š]›Û[šY›Ü›PØ]][›ÛJKžKžKKžKËžKK‹JKš[š]›Û[šY›Ü›PØ]][›ÛJKž‹ž‹Kž‹Ëž‹K‹J_Y[ÙW˜Ø]][›ÛWOO]\Ë˜Ý\™U\I‰Š›š[š]Ø]][›ÛJKžžKžËž\Ë[œÚ[ÛŠKÛš[š]Ø]][›ÛJKžKžKKžKËžK\Ë[œÚ[ÛŠKš[š]Ø]][›ÛJKž‹ž‹Kž‹Ëž‹\Ë[œÚ[ÛŠJNÜ™]\›ˆ‹œÙ]
›˜Ø[ÊÊKÛ˜Ø[ÊÊK˜Ø[ÊÊJKŸXÛÜJ
^ÜÝ\\‹˜ÛÜJ
K\ËœÚ[ÏV×NÙ›ÜŠ]OL]œÚ[Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]œÚ[ÖÙWNÝ\ËœÚ[Ëœ\Ú
‹˜ÛÛ™J
J_\™]\›ˆ\Ë˜ÛÜÙY]˜ÛÜÙY\Ë˜Ý\™U\O]˜Ý\™U\K\Ë[œÚ[Û][œÚ[Û‹\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÝœÚ[ÏV×NÙ›ÜŠ]OL]\ËœÚ[Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]\ËœÚ[ÖÙWNÝœÚ[Ëœ\Ú
‹Ð\œ˜^J
J_\™]\›ˆ˜ÛÜÙY]\Ë˜ÛÜÙY˜Ý\™U\O]\Ë˜Ý\™U\K[œÚ[Û]\Ë[œÚ[Û‹Yœ›ÛR”ÓÓŠ
^ÜÝ\\‹™œ›ÛR”ÓÓŠ
K\ËœÚ[ÏV×NÙ›ÜŠ]OL]œÚ[Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]œÚ[ÖÙWNÝ\ËœÚ[Ëœ\Ú

™]ÈÙJK™œ›ÛP\œ˜^JŠJ_\™]\›ˆ\Ë˜ÛÜÙY]˜ÛÜÙY\Ë˜Ý\™U\O]˜Ý\™U\K\Ë[œÚ[Û][œÚ[Û‹\ß_Y[˜Ý[ÛˆÛ
K‹KŠ^ØÛÛœÝÏKJŠKYJKOKJŠ‹[ŠKÏ]
Ü™]\›ŠŠ›‹LŠšJÜÊØJJŠ
›ÊJÊLÊ›ŠÌÊšKLŠœËXJJ›ÊÜÊ
ÛŸY[˜Ý[ÛˆÛ
K‹J^Ü™]\›ˆ[˜Ý[ÛŠJ^ØÛÛœÝLK]Ü™]\›ˆŠ›Š™_JJJÙ[˜Ý[ÛŠJ^Ü™]\›ˆŠŠK]
J
™_JŠJÙ[˜Ý[ÛŠJ^Ü™]\›ˆ

™_JJ_Y[˜Ý[Ûˆ
K‹KŠ^Ü™]\›ˆ[˜Ý[ÛŠJ^ØÛÛœÝLK]Ü™]\›ˆŠ›Š›Š™_JJJÙ[˜Ý[ÛŠJ^ØÛÛœÝLK]Ü™]\›ˆÊ›Š›Š
™_JŠJÙ[˜Ý[ÛŠJ^Ü™]\›ˆÊŠK]
J

™_JJJÙ[˜Ý[ÛŠJ^Ü™]\›ˆ


™_JŠ_XÛ\ÜÈ›^[™ÈØÛÛœÝXÝÜŠ[™]ÈYKO[™]ÈYK[™]ÈYKO[™]ÈYJ^ÜÝ\\Š
K\Ëš\ÐÝXšXÐ™^šY\Ý\™OHL\Ë\OWÝXšXÐ™^šY\Ý\™W‹\ËŒ]\ËŒOYK\ËŒ[‹\ËŒÏZ_YÙ]Ú[
O[™]ÈYJ^ØÛÛœÝYKO]\ËŒ]\ËŒKÏ]\ËŒ‹O]\ËŒÎÜ™]\›ˆ‹œÙ]

Kž‹žËžKž
K
KžK‹žKËžKKžJJKŸXÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËŒ˜ÛÜJŒ
K\ËŒK˜ÛÜJŒJK\ËŒ‹˜ÛÜJŒŠK\ËŒË˜ÛÜJŒÊK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆŒ]\ËŒÐ\œ˜^J
KŒO]\ËŒKÐ\œ˜^J
KŒ]\ËŒ‹Ð\œ˜^J
KŒÏ]\ËŒËÐ\œ˜^J
KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\ËŒ™œ›ÛP\œ˜^JŒ
K\ËŒK™œ›ÛP\œ˜^JŒJK\ËŒ‹™œ›ÛP\œ˜^JŒŠK\ËŒË™œ›ÛP\œ˜^JŒÊK\ß_XÛ\ÜÈ[^[™ÈØÛÛœÝXÝÜŠ[™]ÈÙKO[™]ÈÙK[™]ÈÙKO[™]ÈÙJ^ÜÝ\\Š
K\Ëš\ÐÝXšXÐ™^šY\Ý\™LÏHL\Ë\OWÝXšXÐ™^šY\Ý\™L×‹\ËŒ]\ËŒOYK\ËŒ[‹\ËŒÏZ_YÙ]Ú[
O[™]ÈÙJ^ØÛÛœÝYKO]\ËŒ]\ËŒKÏ]\ËŒ‹O]\ËŒÎÜ™]\›ˆ‹œÙ]

Kž‹žËžKž
K
KžK‹žKËžKKžJK
Kž‹‹ž‹Ëž‹KžŠJKŸXÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËŒ˜ÛÜJŒ
K\ËŒK˜ÛÜJŒJK\ËŒ‹˜ÛÜJŒŠK\ËŒË˜ÛÜJŒÊK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆŒ]\ËŒÐ\œ˜^J
KŒO]\ËŒKÐ\œ˜^J
KŒ]\ËŒ‹Ð\œ˜^J
KŒÏ]\ËŒËÐ\œ˜^J
KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\ËŒ™œ›ÛP\œ˜^JŒ
K\ËŒK™œ›ÛP\œ˜^JŒJK\ËŒ‹™œ›ÛP\œ˜^JŒŠK\ËŒË™œ›ÛP\œ˜^JŒÊK\ß_XÛ\ÜÈ[^[™ÈØÛÛœÝXÝÜŠ[™]ÈYKO[™]ÈYJ^ÜÝ\\Š
K\Ëš\Ó[™PÝ\™OHL\Ë\OW“[™PÝ\™W‹\ËŒO]\ËŒY_YÙ]Ú[
O[™]ÈYJ^ØÛÛœÝYNÜ™]\›ˆOOO]Û‹˜ÛÜJ\ËŒŠNŠ‹˜ÛÜJ\ËŒŠKœÝXŠ\ËŒJK‹›][\TØØ[\Š
K˜Y
\ËŒJJKŸYÙ]Ú[]
J^Ü™]\›ˆ\Ë™Ù]Ú[
J_YÙ][™Ù[
O[™]ÈYJ^Ü™]\›ˆKœÝX•™XÝÜœÊ\ËŒ‹\ËŒJK››Ü›X[^™J
_YÙ][™Ù[]
J^Ü™]\›ˆ\Ë™Ù][™Ù[
J_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËŒK˜ÛÜJŒJK\ËŒ‹˜ÛÜJŒŠK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆŒO]\ËŒKÐ\œ˜^J
KŒ]\ËŒ‹Ð\œ˜^J
KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\ËŒK™œ›ÛP\œ˜^JŒJK\ËŒ‹™œ›ÛP\œ˜^JŒŠK\ß_XÛ\ÜÈ›^[™ÈØÛÛœÝXÝÜŠ[™]ÈÙKO[™]ÈÙJ^ÜÝ\\Š
K\Ëš\Ó[™PÝ\™LÏHL\Ë\OW“[™PÝ\™L×‹\ËŒO]\ËŒY_YÙ]Ú[
O[™]ÈÙJ^ØÛÛœÝYNÜ™]\›ˆOOO]Û‹˜ÛÜJ\ËŒŠNŠ‹˜ÛÜJ\ËŒŠKœÝXŠ\ËŒJK‹›][\TØØ[\Š
K˜Y
\ËŒJJKŸYÙ]Ú[]
J^Ü™]\›ˆ\Ë™Ù]Ú[
J_YÙ][™Ù[
O[™]ÈÙJ^Ü™]\›ˆKœÝX•™XÝÜœÊ\ËŒ‹\ËŒJK››Ü›X[^™J
_YÙ][™Ù[]
J^Ü™]\›ˆ\Ë™Ù][™Ù[
J_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËŒK˜ÛÜJŒJK\ËŒ‹˜ÛÜJŒŠK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆŒO]\ËŒKÐ\œ˜^J
KŒ]\ËŒ‹Ð\œ˜^J
KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\ËŒK™œ›ÛP\œ˜^JŒJK\ËŒ‹™œ›ÛP\œ˜^JŒŠK\ß_XÛ\ÜÈ›^[™ÈØÛÛœÝXÝÜŠ[™]ÈYKO[™]ÈYK[™]ÈYJ^ÜÝ\\Š
K\Ëš\Ô]XY˜]XÐ™^šY\Ý\™OHL\Ë\OW”]XY˜]XÐ™^šY\Ý\™W‹\ËŒ]\ËŒOYK\ËŒ[ŸYÙ]Ú[
O[™]ÈYJ^ØÛÛœÝYKO]\ËŒ]\ËŒKÏ]\ËŒŽÜ™]\›ˆ‹œÙ]
Û
Kž‹žËž
KÛ
KžK‹žKËžJJKŸXÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËŒ˜ÛÜJŒ
K\ËŒK˜ÛÜJŒJK\ËŒ‹˜ÛÜJŒŠK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆŒ]\ËŒÐ\œ˜^J
KŒO]\ËŒKÐ\œ˜^J
KŒ]\ËŒ‹Ð\œ˜^J
KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\ËŒ™œ›ÛP\œ˜^JŒ
K\ËŒK™œ›ÛP\œ˜^JŒJK\ËŒ‹™œ›ÛP\œ˜^JŒŠK\ß_XÛ\ÜÈÛ^[™ÈØÛÛœÝXÝÜŠ[™]ÈÙKO[™]ÈÙK[™]ÈÙJ^ÜÝ\\Š
K\Ëš\Ô]XY˜]XÐ™^šY\Ý\™LÏHL\Ë\OW”]XY˜]XÐ™^šY\Ý\™L×‹\ËŒ]\ËŒOYK\ËŒ[ŸYÙ]Ú[
O[™]ÈÙJ^ØÛÛœÝYKO]\ËŒ]\ËŒKÏ]\ËŒŽÜ™]\›ˆ‹œÙ]
Û
Kž‹žËž
KÛ
KžK‹žKËžJKÛ
Kž‹‹ž‹ËžŠJKŸXÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËŒ˜ÛÜJŒ
K\ËŒK˜ÛÜJŒJK\ËŒ‹˜ÛÜJŒŠK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆŒ]\ËŒÐ\œ˜^J
KŒO]\ËŒKÐ\œ˜^J
KŒ]\ËŒ‹Ð\œ˜^J
KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\ËŒ™œ›ÛP\œ˜^JŒ
K\ËŒK™œ›ÛP\œ˜^JŒJK\ËŒ‹™œ›ÛP\œ˜^JŒŠK\ß_XÛ\ÜÈ	^[™ÈØÛÛœÝXÝÜŠV×J^ÜÝ\\Š
K\Ëš\ÔÜ[™PÝ\™OHL\Ë\OW”Ü[™PÝ\™W‹\ËœÚ[Ï]YÙ]Ú[
O[™]ÈYJ^ØÛÛœÝYKO]\ËœÚ[ËJK›[™ÝLJJÏSX]™›ÛÜŠŠKO\‹\ËÏZVÌOO\ÏÜÎœËLWKZVÜ×KÏZVÜÏšK›[™ÝLÚK›[™ÝLNœÊÌWKZVÜÏšK›[™ÝLÏÚK›[™ÝLNœÊÌ—NÜ™]\›ˆ‹œÙ]
Û
KËžžËžž
KÛ
KËžKžKËžKžJJKŸXÛÜJ
^ÜÝ\\‹˜ÛÜJ
K\ËœÚ[ÏV×NÙ›ÜŠ]OL]œÚ[Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]œÚ[ÖÙWNÝ\ËœÚ[Ëœ\Ú
‹˜ÛÛ™J
J_\™]\›ˆ\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÝœÚ[ÏV×NÙ›ÜŠ]OL]\ËœÚ[Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]\ËœÚ[ÖÙWNÝœÚ[Ëœ\Ú
‹Ð\œ˜^J
J_\™]\›ˆYœ›ÛR”ÓÓŠ
^ÜÝ\\‹™œ›ÛR”ÓÓŠ
K\ËœÚ[ÏV×NÙ›ÜŠ]OL]œÚ[Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]œÚ[ÖÙWNÝ\ËœÚ[Ëœ\Ú

™]ÈYJK™œ›ÛP\œ˜^JŠJ_\™]\›ˆ\ß_]˜\ˆ[SØš™XÝ™œ™Y^™J××Ü›Ý××Î›[\˜ÐÝ\™N“ÛØ]][›ÛPÝ\™LÎ•›ÝXšXÐ™^šY\Ý\™Nš›ÝXšXÐ™^šY\Ý\™LÎœ[[\ÙPÝ\™N“›[™PÝ\™N–[[™PÝ\™LÎ–›]XY˜]XÐ™^šY\Ý\™N’›]XY˜]XÐ™^šY\Ý\™LÎ’ÛÜ[™PÝ\™N‰JNØÛ\ÜÈÈ^[™ÈØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë\OWÝ\™T]‹\Ë˜Ý\™\ÏV×K\Ë˜]]ÐÛÜÙOHL_XY

^Ý\Ë˜Ý\™\Ëœ\Ú

_XÛÜÙT]

^ØÛÛœÝ]\Ë˜Ý\™\ÖÌK™Ù]Ú[

KO]\Ë˜Ý\™\ÖÝ\Ë˜Ý\™\Ë›[™ÝLWK™Ù]Ú[
JNÚYŠ]™\]X[ÊJJ^ØÛÛœÝHLOO]š\Õ™XÝÜŒ×“[™PÝ\™WŽ—“[™PÝ\™L×ŽÝ\Ë˜Ý\™\Ëœ\Ú
™]È[Û—JK
J_\™]\›ˆ\ßYÙ]Ú[
J^ØÛÛœÝ]
\Ë™Ù][™Ý

KO]\Ë™Ù]Ý\™S[™ÝÊ
NÛ]LÙ›ÜŠÜK›[™ÝÊ^ÚYŠVÜ—O[Š^ØÛÛœÝZVÜ—K[‹Ï]\Ë˜Ý\™\ÖÜ—KO\Ë™Ù][™Ý

KÏLOOXOÌŒK]ØNÜ™]\›ˆË™Ù]Ú[]
ËJ_\ŠÊß\™]\›ˆ[YÙ][™Ý

^ØÛÛœÝ]\Ë™Ù]Ý\™S[™ÝÊ
NÜ™]\›ˆÝ›[™ÝLW_]\]P\˜Ó[™ÝÊ
^Ý\Ë›™YYÕ\]OHL\Ë˜ØXÚS[™ÝÏ[[\Ë™Ù]Ý\™S[™ÝÊ
_YÙ]Ý\™S[™ÝÊ
^ÚYŠ\Ë˜ØXÚS[™ÝÉ‰\Ë˜ØXÚS[™ÝË›[™ÝOO]\Ë˜Ý\™\Ë›[™Ý
\™]\›ˆ\Ë˜ØXÚS[™ÝÎØÛÛœÝV×NÛ]OLÙ›ÜŠ]LO]\Ë˜Ý\™\Ë›[™ÝÛNÛŠÊÊYJÏ]\Ë˜Ý\™\ÖÛ—K™Ù][™Ý

Kœ\Ú
JNÜ™]\›ˆ\Ë˜ØXÚS[™ÝÏ]YÙ]ÜXÙYÚ[ÊM
^ØÛÛœÝOV×NÙ›ÜŠ]LÛ]ÛŠÊÊYKœ\Ú
\Ë™Ù]Ú[
‹Ý
JNÜ™]\›ˆ\Ë˜]]ÐÛÜÙI‰™Kœ\Ú
VÌJK_YÙ]Ú[ÊLLŠ^ØÛÛœÝOV×NÛ]ŽÙ›ÜŠ]OL]\Ë˜Ý\™\ÎÚO‹›[™ÝÚJÊÊ^ØÛÛœÝÏ\–ÚWKO\Ëš\Ñ[\ÙPÝ\™OÌŠœËš\Ó[™PÝ\™_Ëš\Ó[™PÝ\™LÏÌNœËš\ÔÜ[™PÝ\™OÝ
œËœÚ[Ë›[™ÝÏ\Ë™Ù]Ú[ÊJNÙ›ÜŠ]LÝË›[™ÝÝ
ÊÊ^ØÛÛœÝO[ÖÝNÛ‰‰›‹™\]X[ÊJ_
Kœ\Ú
JKZJ__\™]\›ˆ\Ë˜]]ÐÛÜÙI‰™K›[™ÝŒI‰ˆYVÙK›[™ÝLWK™\]X[ÊVÌJI‰™Kœ\Ú
VÌJK_XÛÜJ
^ÜÝ\\‹˜ÛÜJ
K\Ë˜Ý\™\ÏV×NÙ›ÜŠ]OL]˜Ý\™\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]˜Ý\™\ÖÙWNÝ\Ë˜Ý\™\Ëœ\Ú
‹˜ÛÛ™J
J_\™]\›ˆ\Ë˜]]ÐÛÜÙO]˜]]ÐÛÜÙK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÝ˜]]ÐÛÜÙO]\Ë˜]]ÐÛÜÙK˜Ý\™\ÏV×NÙ›ÜŠ]OL]\Ë˜Ý\™\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]\Ë˜Ý\™\ÖÙWNÝ˜Ý\™\Ëœ\Ú
‹Ò”ÓÓŠ
J_\™]\›ˆYœ›ÛR”ÓÓŠ
^ÜÝ\\‹™œ›ÛR”ÓÓŠ
K\Ë˜]]ÐÛÜÙO]˜]]ÐÛÜÙK\Ë˜Ý\™\ÏV×NÙ›ÜŠ]OL]˜Ý\™\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]˜Ý\™\ÖÙWNÝ\Ë˜Ý\™\Ëœ\Ú

™]È[Û‹\WJK™œ›ÛR”ÓÓŠŠJ_\™]\›ˆ\ß_XÛ\ÜÈXÈ^[™ÈÞØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë\OW”]‹\Ë˜Ý\œ™[Ú[[™]ÈYK	‰\ËœÙ]œ›ÛTÚ[Ê
_\Ù]œ›ÛTÚ[Ê
^Ý\Ë›[Ý™UÊÌKžÌKžJNÙ›ÜŠ]OLK]›[™ÝÙOŽÙJÊÊ]\Ë›[™UÊÙWKžÙWKžJNÜ™]\›ˆ\ß[[Ý™UÊJ^Ü™]\›ˆ\Ë˜Ý\œ™[Ú[œÙ]
JK\ß[[™UÊJ^ØÛÛœÝ[™]È[
\Ë˜Ý\œ™[Ú[˜ÛÛ™J
K™]ÈYJJJNÜ™]\›ˆ\Ë˜Ý\™\Ëœ\Ú
ŠK\Ë˜Ý\œ™[Ú[œÙ]
JK\ß\]XY˜]XÐÝ\™UÊK‹J^ØÛÛœÝ[™]È›
\Ë˜Ý\œ™[Ú[˜ÛÛ™J
K™]ÈYJJK™]ÈYJ‹JJNÜ™]\›ˆ\Ë˜Ý\™\Ëœ\Ú
ŠK\Ë˜Ý\œ™[Ú[œÙ]
‹JK\ßX™^šY\Ý\™UÊK‹K‹Ê^ØÛÛœÝO[™]È›
\Ë˜Ý\œ™[Ú[˜ÛÛ™J
K™]ÈYJJK™]ÈYJ‹JK™]ÈYJ‹ÊJNÜ™]\›ˆ\Ë˜Ý\™\Ëœ\Ú
JK\Ë˜Ý\œ™[Ú[œÙ]
‹ÊK\ß\Ü[™UJ
^ØÛÛœÝOVÝ\Ë˜Ý\œ™[Ú[˜ÛÛ™J
WK˜ÛÛ˜Ø]

K[™]È	
JNÜ™]\›ˆ\Ë˜Ý\™\Ëœ\Ú
ŠK\Ë˜Ý\œ™[Ú[˜ÛÜJÝ›[™ÝLWJK\ßX\˜ÊK‹K‹Ê^ØÛÛœÝO]\Ë˜Ý\œ™[Ú[žÏ]\Ë˜Ý\œ™[Ú[žNÜ™]\›ˆ\Ë˜XœØ\˜Ê
ØKJÛË‹K‹ÊK\ßXXœØ\˜ÊK‹K‹Ê^Ü™]\›ˆ\Ë˜XœÙ[\ÙJK‹‹K‹ÊK\ßY[\ÙJK‹K‹ËKÊ^ØÛÛœÝ]\Ë˜Ý\œ™[Ú[žÏ]\Ë˜Ý\œ™[Ú[žNÜ™]\›ˆ\Ë˜XœÙ[\ÙJ
ÛJØË‹K‹ËKÊK\ßXXœÙ[\ÙJK‹K‹ËKÊ^ØÛÛœÝ[™]È›
K‹K‹ËKÊNÚYŠ\Ë˜Ý\™\Ë›[™ÝŒ
^ØÛÛœÝ[™Ù]Ú[

NÝ™\]X[Ê\Ë˜Ý\œ™[Ú[
_\Ë›[™UÊžžJ_]\Ë˜Ý\™\Ëœ\Ú

NØÛÛœÝÏ[™Ù]Ú[
JNÜ™]\›ˆ\Ë˜Ý\œ™[Ú[˜ÛÜJÊK\ßXÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜Ý\œ™[Ú[˜ÛÜJ˜Ý\œ™[Ú[
K\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆ˜Ý\œ™[Ú[]\Ë˜Ý\œ™[Ú[Ð\œ˜^J
KYœ›ÛR”ÓÓŠ
^Ü™]\›ˆÝ\\‹™œ›ÛR”ÓÓŠ
K\Ë˜Ý\œ™[Ú[™œ›ÛP\œ˜^J˜Ý\œ™[Ú[
K\ß_XÛ\ÜÈ˜È^[™ÈZ^ØÛÛœÝXÝÜŠVÛ™]ÈYJKJK™]ÈYJK
K™]ÈYJJWKOLL‹LOLŠ“X]”J^ÜÝ\\Š
K\Ë\OW“]QÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^ÜÚ[ÎÙYÛY[Î™KTÝ\›‹S[™Ýš_KOSX]™›ÛÜŠJKOXYJKŠ“X]”JNØÛÛœÝV×KÏV×KOV×KÏV×KV×KÏLKÙK[™]ÈÙKO[™]ÈYK[™]ÈÙK[™]ÈÙKO[™]ÈÙNÛ]LÏLÙ›ÜŠ]OLÙO]›[™ÝLNÙJÊÊ\ÝÚ]Ú
J^ØØ\ÙH™]ÙJÌWKž]ÙWKžÏ]ÙJÌWKžK]ÙWKžKžLJ™ËžOKY‹žL
™ËK˜ÛÜJ
K››Ü›X[^™J
KËœ\Ú
žžKžŠNØœ™XZÎØØ\ÙH›[™ÝLN›Ëœ\Ú
KžKžKKžŠNØœ™XZÎÙY˜][™]ÙJÌWKž]ÙWKžÏ]ÙJÌWKžK]ÙWKžKžLJ™ËžOKY‹žL
™Ë˜ÛÜJ
Kž
Ï[KžžJÏ[KžKžŠÏ[Kž‹››Ü›X[^™J
KËœ\Ú
žžKžŠKK˜ÛÜJ
_Y›ÜŠ]LÜYNÜŠÊÊ^ØÛÛœÝ[ŠÜŠ˜ÊšKSX]œÚ[Š
KOSX]˜ÛÜÊ
NÙ›ÜŠ]LÛ]›[™ÝLNÛŠÊÊ^Úž]Û—Kž
œžO]Û—KžKž]Û—Kž
›KËœ\Ú
žžKžŠKKž\‹ÙKKžO[‹Ê›[™ÝLJKKœ\Ú
KžKžJNØÛÛœÝO[ÖÌÊ›ŠÌJœÏ[ÖÌÊ›ŠÌWK[ÖÌÊ›ŠÌJ›NÛœ\Ú
KË
__Y›ÜŠ]LÛNÛŠÊÊY›ÜŠ]OLÙO›[™ÝLNÙJÊÊ^ØÛÛœÝOYJÛŠ›[™ÝÏZKOZJÝ›[™ÝÏZJÝ›[™Ý
ÌKZJÌNÜ‹œ\Ú
ËK
K‹œ\Ú
ËJ_]\ËœÙ][™^
ŠK\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJËÊJK\ËœÙ]]šX]J]—‹™]ÈJKŠJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJÊJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]È˜ÊœÚ[ËœÙYÛY[ËœTÝ\œS[™Ý
__XÛ\ÜÈXÈ^[™È˜ÞØÛÛœÝXÝÜŠLKOLKMON
^ØÛÛœÝ[™]ÈXÎÜ‹˜XœØ\˜ÊYKÌ‹KJ“X]”K
K‹˜XœØ\˜ÊKÌ‹J“X]”JKÝ\\Š‹™Ù]Ú[ÊŠKJK\Ë\OWØ\Ý[QÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\Î[™Ý™KØ\ÙYÛY[Î›‹˜YX[ÙYÛY[Îš__\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈXÊœ˜Y]\Ë›[™Ý˜Ø\ÙYÛY[Ëœ˜YX[ÙYÛY[Ê__XÛ\ÜÈ˜È^[™ÈZ^ØÛÛœÝXÝÜŠLKOLÌ‹LOLŠ“X]”J^ÜÝ\\Š
K\Ë\OWÚ\˜ÛQÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\ÎÙYÛY[Î™K]TÝ\›‹]S[™Ýš_KOSX]›X^
ËJNØÛÛœÝV×KÏV×KOV×KÏV×K[™]ÈÙKÏ[™]ÈYNÜËœ\Ú

KKœ\Ú
JKËœ\Ú
KJNÙ›ÜŠ]LLÎÜYNÜŠÊË
ÏLÊ^ØÛÛœÝO[ŠÜ‹ÙJšNÛž]
“X]˜ÛÜÊJKžO]
“X]œÚ[ŠJKËœ\Ú
žžKžŠKKœ\Ú
JKËžJÖÚKÝ
ÌJKÌ‹ËžOJÖÚ
ÌWKÝ
ÌJKÌ‹Ëœ\Ú
ËžËžJ_Y›ÜŠ]LNÝYNÝ
ÊÊ\‹œ\Ú

ÌK
NÝ\ËœÙ][™^
ŠK\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJËÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJKÊJK\ËœÙ]]šX]J]—‹™]ÈJËŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]È˜Êœ˜Y]\ËœÙYÛY[Ë]TÝ\]S[™Ý
__XÛ\ÜÈØÈ^[™ÈZ^ØÛÛœÝXÝÜŠLKOLKLKOLÌ‹LKÏHLKOLÏLŠ“X]”J^ÜÝ\\Š
K\Ë\OWÞ[[™\‘Ù[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\ÕÜ˜Y]\Ð›ÝÛN™KZYÚ›‹˜YX[ÙYÛY[ÎšKZYÚÙYÛY[Îœ‹Ü[‘[™YœË]TÝ\˜K]S[™Ý›ßNØÛÛœÝ]\ÎÚOSX]™›ÛÜŠJKSX]™›ÛÜŠŠNØÛÛœÝÏV×KV×KOV×KV×NÛ]LØÛÛœÝOV×K[‹ÌŽÛ]ÏLÙ[˜Ý[ÛˆÊŠ^ØÛÛœÝ\Ï[™]ÈYKO[™]ÈÙNÛ]ÏLØÛÛœÝHLOO[Ý™KHLOO[ÌN‹LNÙ›ÜŠ]LNÝZNÝ
ÊÊZœ\Ú
Šž
KKœ\Ú

Kœ\Ú
KJK
ÊÎØÛÛœÝO\Ù›ÜŠ]LÝZNÝ
ÊÊ^ØÛÛœÝO]ÚJ›ÊØKSX]˜ÛÜÊJKSX]œÚ[ŠJNÛKž]Šœ‹KžOYŠžKž]Š›‹œ\Ú
KžKžKKžŠKKœ\Ú

KËžKJ›ŠËKËžOKJœŠž
ËKœ\Ú
ËžËžJK
ÊßY›ÜŠ]LÝNÝ
ÊÊ^ØÛÛœÝO\ŠÝO^JÝÈLOO[ØËœ\Ú
KJÌKJN˜Ëœ\Ú
JÌKKJKÊÏLß[˜YÜ›Ý\
ËËLOO[ÌNŒŠKÊÏWßHY[˜Ý[ÛŠ
^ØÛÛœÝÏ[™]ÈÙKÏ[™]ÈÙNÛ]LØÛÛœÝJK]
KÛŽÙ›ÜŠ]LÛ\ŽÛ
ÊÊ^ØÛÛœÝÏV×KÏ[Ü‹YÊŠK]
JÝÙ›ÜŠ]LÝZNÝ
ÊÊ^ØÛÛœÝO]ÚKYJ›ÊØKSX]œÚ[ŠŠKOSX]˜ÛÜÊŠN×Ëž]Š›ËžOKYÊ›ŠÙ‹Ëž]Š›Kœ\Ú
ËžËžKËžŠKËœÙ]
JK››Ü›X[^™J
KKœ\Ú
ËžËžKËžŠKœ\Ú
KKYÊKËœ\Ú

ÊÊ_[Kœ\Ú
Ê_Y›ÜŠ]LÝNÝ
ÊÊY›ÜŠ]OLÙOŽÙJÊÊ^ØÛÛœÝ[VÙWVÝKO[VÙJÌWVÝK[VÙJÌWVÝ
ÌWKÏ[VÙWVÝ
ÌWNØËœ\Ú
‹KÊKËœ\Ú
K‹ÊKŠÏMŸ[˜YÜ›Ý\
Ë‹
KÊÏ]ŸJ
KLOOO\É‰ŠŒ	‰—ÊL
KOŒ	‰—ÊLJJK\ËœÙ][™^
ÊK\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJKÊJK\ËœÙ]]šX]J]—‹™]ÈJŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈØÊœ˜Y]\ÕÜœ˜Y]\Ð›ÝÛKšZYÚœ˜YX[ÙYÛY[ËšZYÚÙYÛY[Ë›Ü[‘[™Y]TÝ\]S[™Ý
__XÛ\ÜÈXÈ^[™ÈØÞØÛÛœÝXÝÜŠLKOLKLÌ‹OLKHLKÏLOLŠ“X]”J^ÜÝ\\ŠK‹K‹ËJK\Ë\OWÛÛ™QÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\ÎZYÚ™K˜YX[ÙYÛY[Î›‹ZYÚÙYÛY[ÎšKÜ[‘[™Yœ‹]TÝ\œË]S[™Ý˜__\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈXÊœ˜Y]\ËšZYÚœ˜YX[ÙYÛY[ËšZYÚÙYÛY[Ë›Ü[‘[™Y]TÝ\]S[™Ý
__XÛ\ÜÈØÈ^[™ÈZ^ØÛÛœÝXÝÜŠV×KOV×KLKOL
^ÜÝ\\Š
K\Ë\OW”ÛZY›Û‘Ù[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ý™\XÙ\Î[™XÙ\Î™K˜Y]\Î›‹]Z[š_NØÛÛœÝV×KÏV×NÙ[˜Ý[ÛˆJK‹J^ØÛÛœÝZJÌKÏV×NÙ›ÜŠ]OLÚO\ŽÚJÊÊ^ÜÖÚWOV×NØÛÛœÝO]˜ÛÛ™J
K›\œ
‹KÜŠKÏYK˜ÛÛ™J
K›\œ
‹KÜŠK\‹ZNÙ›ÜŠ]LÝ[Ý
ÊÊ\ÖÚWVÝOLOO]	‰šOOO\ØN˜K˜ÛÛ™J
K›\œ
ËÛ
_Y›ÜŠ]LÝŽÝ
ÊÊY›ÜŠ]OLÙOŠŠ‹]
KLNÙJÊÊ^ØÛÛœÝSX]™›ÛÜŠKÌŠNÙILOLÊÊÖÝVÛŠÌWJKÊÖÝ
ÌWVÛ—JKÊÖÝVÛ—JJNŠÊÖÝVÛŠÌWJKÊÖÝ
ÌWVÛŠÌWJKÊÖÝ
ÌWVÛ—JJ__Y[˜Ý[ÛˆÊ
^Ü‹œ\Ú
žžKžŠ_Y[˜Ý[Ûˆ
KŠ^ØÛÛœÝOLÊ™NÛ‹ž]ÚJÌK‹žO]ÚJÌWK‹ž]ÚJÌ—_Y[˜Ý[ÛˆÊK‹J^ÚO	‰ŒOOO]ž	‰ŠÖÙWO]žLJKOO[‹ž	‰ŒOO[‹ž‰‰ŠÖÙWOZKÌ‹ÓX]”JËJ_Y[˜Ý[Ûˆ

^Ü™]\›ˆX]˜][ŒŠž‹]ž
_HY[˜Ý[ÛŠ
^ØÛÛœÝ[™]ÈÙKO[™]ÈÙK[™]ÈÙNÙ›ÜŠ]ÏLÜÏK›[™ÝÜÊÏLÊ[
VÜÊÌKŠK
VÜÊÌWKJK
VÜÊÌ—KŠKJ‹K‹
_JJK[˜Ý[ÛŠ
^ØÛÛœÝO[™]ÈÙNÙ›ÜŠ]LÛ‹›[™ÝÛŠÏLÊYKž\–ÛŠÌKKžO\–ÛŠÌWKKž\–ÛŠÌ—KK››Ü›X[^™J
K›][\TØØ[\Š
K–ÛŠÌOYKž–ÛŠÌWOYKžK–ÛŠÌ—OYKžŸJŠK[˜Ý[ÛŠ
^ØÛÛœÝ[™]ÈÙNÙ›ÜŠ]LÛ‹›[™ÝÛŠÏLÊ^Ýž\–ÛŠÌKžO\–ÛŠÌWKž\–ÛŠÌ—NØÛÛœÝOZ

KÌ‹ÓX]”JËKOJO]X]˜][ŒŠYKžKX]œÜ\
Kž
™Kž
ÙKžŠ™KžŠJKÓX]”JËJNÜËœ\Ú
KKXJ_]˜\ˆNÊ[˜Ý[ÛŠ
^ØÛÛœÝ[™]ÈÙKO[™]ÈÙK[™]ÈÙKO[™]ÈÙKO[™]ÈYKÏ[™]ÈYK[™]ÈYNÙ›ÜŠ]OLLÝO‹›[™ÝÝJÏNK
ÏMŠ^ÝœÙ]
–ÝJÌK–ÝJÌWK–ÝJÌ—JKKœÙ]
–ÝJÌ×K–ÝJÍK–ÝJÍWJK‹œÙ]
–ÝJÍ—K–ÝJÍ×K–ÝJÎJKKœÙ]
ÖÙ
ÌKÖÙ
ÌWJKËœÙ]
ÖÙ
Ì—KÖÙ
Ì×JKœÙ]
ÖÙ
ÍKÖÙ
ÍWJKK˜ÛÜJ
K˜Y
JK˜Y
ŠK™]šYTØØ[\ŠÊNØÛÛœÝZ
JNØÊK
Ì
KÊË
Ì‹K
KÊ
Í‹
__JJ
K[˜Ý[ÛŠ
^Ù›ÜŠ]LÝË›[™ÝÝ
ÏMŠ^ØÛÛœÝO\ÖÝ
ÌK\ÖÝ
Ì—KO\ÖÝ
ÍKSX]›X^
K‹JKOSX]›Z[ŠK‹JNÜ‹ŽI‰˜OŒI‰ŠOŒ‰‰ŠÖÝ
ÌJÏLJKŒ‰‰ŠÖÝ
Ì—JÏLJKOŒ‰‰ŠÖÝ
ÍJÏLJJ__J
_J
K\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJ‹ÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJ‹œÛXÙJ
KÊJK\ËœÙ]]šX]J]—‹™]ÈJËŠJKOOZOÝ\Ë˜ÛÛ\]U™\^›Ü›X[Ê
N\Ë››Ü›X[^™S›Ü›X[Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈØÊ™\XÙ\Ëš[™XÙ\Ëœ˜Y]\Ë™]Z[Ê__XÛ\ÜÈÈ^[™ÈØÞØÛÛœÝXÝÜŠLKOL
^ØÛÛœÝJJÓX]œÜ\
JJKÌ‹OLKÛŽÜÝ\\ŠËLKLKLKLKLKKLKKLKLKKKKLKLKKLKKKKLKKKKZK[‹ZK‹K[‹K‹ZK[‹ZK‹K[‹K‹[‹ZK‹ZK[‹K‹WKÌËLKËËËMKËMKLËËNKMËËMË‹Ë‹MKMËMËLMËL‹M‹M‹‹‹LL‹KKNNM‹‹L‹‹‹LË‹LËMK‹M‹N‹NË‹ËLËNKKNKLKNLKËML‹L‹LKKKLKKNKLKNKËNKKMNKMNKMËKL‹MKMKKKWKJK\Ë\OW‘ÙXØZY›Û‘Ù[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\Î]Z[™__\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈÊœ˜Y]\Ë™]Z[
__XÛÛœÝØÏ[™]ÈÙKÏ[™]ÈÙKXÏ[™]ÈÙKÏ[™]ÈšNØÛ\ÜÈÈ^[™ÈZ^ØÛÛœÝXÝÜŠ[[OLJ^ÚYŠÝ\\Š
K\Ë\OW‘YÙ\ÑÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^ÙÙ[ÛY]žN™\ÚÛ[™ÛN™_K[OO]
^ØÛÛœÝMOSX]œÝÊLŠKSX]˜ÛÜÊYJ™JKÏ]™Ù][™^

KO]™Ù]]šX]JœÜÚ][Û—ŠKÏ\ÏÜË˜ÛÝ[˜K˜ÛÝ[VÌKÏV×˜W‹˜—‹˜×—K[™]È\œ˜^JÊKO^ßKV×NÙ›ÜŠ]LÝÎÝ
ÏLÊ^ÜÏÊÌO\Ë™Ù]

KÌWO\Ë™Ù]

ÌJKÌ—O\Ë™Ù]

ÌŠJNŠÌO]ÌWO]
ÌKÌ—O]
ÌŠNØÛÛœÝØN™KŽ›‹Î›ßOYÎÚYŠK™œ›ÛPY™™\]šX]JKÌJK‹™œ›ÛPY™™\]šX]JKÌWJKË™œ›ÛPY™™\]šX]JKÌ—JKË™Ù]›Ü›X[
XÊKÌOX	ÓX]œ›Ý[™
Kž
šJ_K	ÓX]œ›Ý[™
KžJšJ_K	ÓX]œ›Ý[™
KžŠšJ_XÌWOX	ÓX]œ›Ý[™
‹ž
šJ_K	ÓX]œ›Ý[™
‹žJšJ_K	ÓX]œ›Ý[™
‹žŠšJ_XÌ—OX	ÓX]œ›Ý[™
Ëž
šJ_K	ÓX]œ›Ý[™
ËžJšJ_K	ÓX]œ›Ý[™
ËžŠšJ_XÌHOOZÌWI‰šÌWHOOZÌ—I‰šÌ—HOOZÌJY›ÜŠ]LÝÎÝ
ÊÊ^ØÛÛœÝOJ
ÌJILËZÝKOZÙWKÏYÖØÖÝWKOYÖØÖÙWWKÏX	ÛŸWÉÚ_XX	Ú_WÉÛŸXÜ[ˆI‰VÜOÊXË™Ý
VÜK››Ü›X[
O\‰‰Šœ\Ú
ËžËžKËžŠKœ\Ú
KžKžKKžŠJKVÜO[[
N›È[ˆ_
VÛ×O^Ú[™^›ÝK[™^N›ÙWK›Ü›X[XË˜ÛÛ™J
_J__Y›ÜŠÛÛœÝ[ˆJZYŠVÝJ^ØÛÛœÝÚ[™^™K[™^N›ŸO]VÝNØØË™œ›ÛPY™™\]šX]JKJKË™œ›ÛPY™™\]šX]JKŠKœ\Ú
ØËžØËžKØËžŠKœ\Ú
ËžËžKËžŠ_]\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJÊJ__XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß_XÛ\ÜÈXÈ^[™ÈXÞØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë]ZY\ÙJ
K\Ë\OW”Ú\W‹\ËšÛ\ÏV×_YÙ]Ú[ÒÛ\Ê
^ØÛÛœÝOV×NÙ›ÜŠ]LO]\ËšÛ\Ë›[™ÝÛNÛŠÊÊYVÛ—O]\ËšÛ\ÖÛ—K™Ù]Ú[Ê
NÜ™]\›ˆ_Y^˜XÝÚ[Ê
^Ü™]\›žÜÚ\N\Ë™Ù]Ú[Ê
KÛ\Î\Ë™Ù]Ú[ÒÛ\Ê
__XÛÜJ
^ÜÝ\\‹˜ÛÜJ
K\ËšÛ\ÏV×NÙ›ÜŠ]OL]šÛ\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]šÛ\ÖÙWNÝ\ËšÛ\Ëœ\Ú
‹˜ÛÛ™J
J_\™]\›ˆ\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÝ]ZY]\Ë]ZYšÛ\ÏV×NÙ›ÜŠ]OL]\ËšÛ\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]\ËšÛ\ÖÙWNÝšÛ\Ëœ\Ú
‹Ò”ÓÓŠ
J_\™]\›ˆYœ›ÛR”ÓÓŠ
^ÜÝ\\‹™œ›ÛR”ÓÓŠ
K\Ë]ZY]]ZY\ËšÛ\ÏV×NÙ›ÜŠ]OL]šÛ\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]šÛ\ÖÙWNÝ\ËšÛ\Ëœ\Ú

™]ÈXÊK™œ›ÛR”ÓÓŠŠJ_\™]\›ˆ\ß_XÛÛœÝ˜ÏY[˜Ý[ÛŠKLŠ^ØÛÛœÝOYI‰™K›[™ÝZOÙVÌJ›Ž›[™ÝÛ]ÏYØÊ‹‹L
NØÛÛœÝOV×NÚYŠ\ßË›™^OO\Ëœ™]Š\™]\›ˆNÛ]ËËKÚYŠI‰ŠÏY[˜Ý[ÛŠK‹J^ØÛÛœÝV×NÛ]ËKËÎÙ›ÜŠÏLOYK›[™ÝÜÏNÜÊÊÊ[ÏYVÜ×JšK\ÏKLOÙVÜÊÌWJšN›[™ÝÏYØÊËKLJKÏOOXË›™^	‰ŠËœÝZ[™\HL
K‹œ\Ú
XÊÊJNÙ›ÜŠ‹œÛÜ
˜ÊKÏLÜÏ‹›[™ÝÜÊÊÊ[UÊ–Ü×KŠNÜ™]\›ˆŸJKËŠJK›[™ÝŽ
›Š^ÛÏXÏ]ÌKZ]ÌWNÙ›ÜŠ]O[ŽÙOŽÙJÏ[Š]O]ÙWK]ÙJÌWKOÉ‰ŠÏ]JK	‰ŠY
KO˜É‰ŠÏ]JKš	‰ŠY
NÜSX]›X^
Ë[Ë[
KLOO\ÌÌÍËÜŒ\™]\›ˆ˜ÊËK‹Ë
K_NÙ[˜Ý[ÛˆØÊK‹KŠ^Û]ËNÚYŠOOY[˜Ý[ÛŠK‹J^Û]LÙ›ÜŠ]ÏYKO[‹ZNÜÏŽÜÊÏZJ\ŠÏJØWK]Ü×JJŠÜÊÌWJÝØJÌWJKO\ÎÜ™]\›ˆŸJK‹JOŒ
Y›ÜŠÏYNÜÏŽÜÊÏZJXOQ˜ÊËÜ×KÜÊÌWKJNÙ[ÙH›ÜŠÏ[‹ZNÜÏYNÜËOZJXOQ˜ÊËÜ×KÜÊÌWKJNÜ™]\›ˆI‰”ÊKK›™^
I‰Š˜ÊJKOXK›™^
K_Y[˜Ý[ÛˆØÊJ^ÚYŠ]
\™]\›ˆÙ_
O]
NÛ]‹O]ÙÞÚYŠHLKKœÝZ[™\ŸTÊKK›™^
I‰ŒOOSÊKœ™]‹KK›™^
JZOZK›™^Ù[Ù^ÚYŠ˜ÊJKOYOZKœ™]‹OOOZK›™^
Xœ™XZÎÛHL_]Ú[JŸHOOYJNÜ™]\›ˆ_Y[˜Ý[Ûˆ˜ÊK‹K‹ËJ^ÚYŠ]
\™]\›ŽÈXI‰œÉ‰™[˜Ý[ÛŠK‹J^Û]]ÙÞÌOO\‹ž‰‰Š‹ž]ØÊ‹ž‹žKK‹JJK‹œ™]–\‹œ™]‹‹›™^\‹›™^\‹›™^]Ú[JˆOO]
NÜ‹œ™]–‹›™^[[‹œ™]–[[[˜Ý[ÛŠ
^Û]K‹K‹ËKËÏLNÙÞÙ›ÜŠ][[Ï[[OLÛŽÊ^Ù›ÜŠJÊËO[‹ÏLOLÙOÉ‰ŠÊÊËOZK›™^‹JNÙJÊÊNÙ›ÜŠXÎÛÏŒŒ	‰šNÊLOO[É‰ŠOO[Z_‹žZKžŠOÊ[‹[‹›™^‹ËKJNŠZKOZK›™^‹KJKÏÜË›™^\Ž\‹‹œ™]–\ËÏ\ŽÛZ_\Ë›™^[[ÊLŸ]Ú[JOŒJ_JŠ_JK‹ÊNÛ]ËÏ]Ù›ÜŠÝœ™]ˆOO]›™^ÊZYŠÏ]œ™]‹]›™^ÏÞXÊK‹ÊNžÊ
JYKœ\Ú
ËšKÛŸ
KKœ\Ú
šKÛŸ
KKœ\Ú
šKÛŸ
K˜Ê
K[›™^Ï[›™^Ù[ÙHYŠ
[
OOOXÊ^ØOÌOOOXOÝ˜ÊSXÊØÊ
KKŠKK‹K‹ËŠNŒOOXI‰”ØÊK‹K‹ÊN˜ÊØÊ
KK‹K‹ËJNØœ™XZß_Y[˜Ý[ÛˆÊ
^ØÛÛœÝO]œ™]‹]O]›™^ÚYŠÊK‹JOL
\™]\›ˆLNØÛÛœÝYKžÏ[‹žOZKžÏYKžK[‹žKÏZKžK\ÏÜOÜŽ˜NœÏOÜÎ˜KO[ÏÛÏÏÛÎ˜Î›ÏÛ˜Ë\œÏÜ˜OÜŽ˜NœÏ˜OÜÎ˜K[Ï›ÛÏ˜ÏÛÎ˜Î›˜ÏÛ˜ÎÛ]OZK›™^Ù›ÜŠÛHOOYNÊ^ÚYŠKžZ	‰›KžY	‰›KžO]I‰›KžO\	‰”˜Ê‹ËËKËKžKžJI‰“ÊKœ™]‹KK›™^
OL
\™]\›ˆLNÛO[K›™^\™]\›ˆLY[˜Ý[ÛˆXÊK‹J^ØÛÛœÝ]œ™]‹Ï]O]›™^ÚYŠÊ‹ËJOL
\™]\›ˆLNØÛÛœÝÏ\‹ž\ËžÏXKž\‹žKO\ËžKXKžK[ÏÛÏÏÛÎ˜Î›ÏÛ˜ËOZOÚÚ™OÝN™[Ï›ÛÏ˜ÏÛÎ˜Î›˜ÏÛ˜ËÏZOÚ™Ú™O™ÝN™Ï]ØÊKK‹JK]ØÊ‹ËK‹JNÛ]]œ™]–‹O]›™^ŽÙ›ÜŠÞ	‰žžWÉ‰žI‰žKž]ŽÊ^ÚYŠž\	‰žžY‰‰žžO[I‰žžOYÉ‰žOO\‰‰žOOXI‰”˜ÊËKËžžJI‰“Êœ™]‹›™^
OL
\™]\›ˆLNÚYŠ^œ™]–‹Kž\	‰žKžY‰‰žKžO[I‰žKžOYÉ‰žHOO\‰‰žHOOXI‰”˜ÊËKËKžKžJI‰“ÊKœ™]‹KK›™^
OL
\™]\›ˆLNÞO^K›™^ŸY›ÜŠÞ	‰žžWÎÊ^ÚYŠž\	‰žžY‰‰žžO[I‰žžOYÉ‰žOO\‰‰žOOXI‰”˜ÊËKËžžJI‰“Êœ™]‹›™^
OL
\™]\›ˆLNÞ^œ™]–ŸY›ÜŠÞI‰žKž]ŽÊ^ÚYŠKž\	‰žKžY‰‰žKžO[I‰žKžOYÉ‰žHOO\‰‰žHOOXI‰”˜ÊËKËKžKžJI‰“ÊKœ™]‹KK›™^
OL
\™]\›ˆLNÞO^K›™^Ÿ\™]\›ˆLY[˜Ý[ÛˆXÊKŠ^Û]O]ÙÞØÛÛœÝZKœ™]‹ÏZK›™^›™^ÈTÊ‹ÊI‰’XÊ‹KK›™^ÊI‰“˜Ê‹ÊI‰“˜ÊËŠI‰ŠKœ\Ú
‹šKÛŸ
KKœ\Ú
KšKÛŸ
KKœ\Ú
ËšKÛŸ
K˜ÊJK˜ÊK›™^
KO]\ÊKOZK›™^]Ú[JHOO]
NÜ™]\›ˆØÊJ_Y[˜Ý[ÛˆØÊK‹K‹Ê^Û]O]ÙÞÛ]XK›™^›™^Ù›ÜŠÝOOXKœ™]ŽÊ^ÚYŠKšHOO]šI‰ØÊK
J^Û]ÏSØÊK
NÜ™]\›ˆOWØÊKK›™^
KÏWØÊËË›™^
K˜ÊKK‹K‹Ë
K›ÚY˜ÊËK‹K‹Ë
_]]›™^XOXK›™^]Ú[JHOO]
_Y[˜Ý[Ûˆ˜ÊJ^Ü™]\›ˆžYKžY[˜Ý[ÛˆÊJ^ØÛÛœÝY[˜Ý[ÛŠJ^Û]‹OYKKLKÌØÛÛœÝÏ]žO]žNÙÞÚYŠOZKžI‰˜OZK›™^žI‰šK›™^žHOOZKžJ^ØÛÛœÝZKž
ÊKZKžJJŠK›™^žZKž
KÊK›™^žKZKžJNÚYŠ\É‰œ‰‰Š]ZKžK›™^žÚNšK›™^OO\ÊJ\™]\›ˆŸZOZK›™^]Ú[JHOOYJNÚYŠ[Š\™]\›ˆ[ØÛÛœÝÏ[‹[‹žÏ[‹žNÛ]OLKÌÚO[ŽÙÞÜÏZKž	‰šKž[	‰œÈOOZKž	‰”˜ÊOÏÜÎœ‹KËOÏÜŽœËKKžKžJI‰ŠSX]˜XœÊKZKžJKÊËZKž
K˜ÊK
I‰Š_OO]I‰ŠKž›‹žKžOO[‹ž	‰‘XÊ‹JJJI‰ŠZKOZ
JKOZK›™^]Ú[JHOO[ÊNÜ™]\›ˆŸJJNÚYŠ[Š\™]\›ˆNØÛÛœÝOSØÊ‹
NÜ™]\›ˆØÊKK›™^
KØÊ‹‹›™^
_Y[˜Ý[ÛˆXÊJ^Ü™]\›ˆÊœ™]‹Kœ™]ŠO	‰“ÊK›™^›™^
OY[˜Ý[ÛˆØÊK‹KŠ^Ü™]\›ŠLMÌMMMÍIŠ
NNNLÍNIŠ
LLLLÍIŠ
LMÌLNLÍIŠ
J[ŠJœŸ
_
J_
J_ŠJ_JJ_
OLMÌMMMÍIŠ
ONNNLÍNIŠ
OLLLLÍIŠ
OLMÌLNLÍIŠ
OJKZJJœŸ
_O
J_O
J_OŠJ_OJJO_Y[˜Ý[ÛˆXÊ
^Û]O]]ÙÞÊKž‹žKžOO[‹ž	‰™KžO‹žJI‰ŠYJKOYK›™^]Ú[JHOO]
NÜ™]\›ˆŸY[˜Ý[Ûˆ˜ÊK‹K‹ËKÊ^Ü™]\›Š‹XJJŠK[ÊOJXJJŠË[ÊI‰ŠXJJŠK[ÊOJ‹XJJŠK[ÊI‰Š‹XJJŠË[ÊOJ‹XJJŠK[Ê_Y[˜Ý[ÛˆØÊJ^Ü™]\›ˆ›™^šHOOYKšI‰œ™]‹šHOOYKšI‰ˆY[˜Ý[ÛŠJ^Û]]ÙÞÚYŠ‹šHOO]šI‰›‹›™^šHOO]šI‰›‹šHOOYKšI‰›‹›™^šHOOYKšI‰’XÊ‹‹›™^JJ\™]\›ˆLÛ[‹›™^]Ú[JˆOO]
NÜ™]\›ˆL_JJI‰Š˜ÊJI‰“˜ÊK
I‰™[˜Ý[ÛŠJ^Û]]OHLNØÛÛœÝJž
ÙKž
KÌ‹ÏJžJÙKžJKÌŽÙÞÛ‹žOœÈO[‹›™^žOœÉ‰›‹›™^žHOO[‹žI‰œ
‹›™^ž[‹ž
JŠË[‹žJKÊ‹›™^žK[‹žJJÛ‹ž	‰ŠOHZJK[‹›™^]Ú[JˆOO]
NÜ™]\›ˆ_JJI‰ŠÊœ™]‹Kœ™]Š_ÊKœ™]‹JJ_ÊJI‰“Êœ™]‹›™^
OŒ	‰“ÊKœ™]‹KK›™^
OŒ
_Y[˜Ý[ÛˆÊKŠ^Ü™]\›ŠKžK]žJJŠ‹žYKž
KJKž]ž
JŠ‹žKYKžJ_Y[˜Ý[ÛˆÊJ^Ü™]\›ˆžOOYKž	‰žOOOYKž_Y[˜Ý[ÛˆXÊK‹J^ØÛÛœÝQÊÊKŠJKÏQÊÊKJJKOQÊÊ‹K
JKÏQÊÊ‹KJJNÜ™]\›ˆˆOO\É‰˜HOO[ß
JOO\ŸUXÊ‹JJ_
JOO\ßUXÊKJJ_
JOOX_UXÊ‹JJ_JOO[ßUXÊ‹KJJJJJ_Y[˜Ý[ÛˆXÊKŠ^Ü™]\›ˆKžSX]›X^
ž‹ž
I‰™KžSX]›Z[Šž‹ž
I‰™KžOSX]›X^
žK‹žJI‰™KžOSX]›Z[ŠžK‹žJ_Y[˜Ý[ÛˆÊ
^Ü™]\›ˆŒÌNËLNŒY[˜Ý[Ûˆ˜ÊJ^Ü™]\›ˆÊœ™]‹›™^
OÓÊK›™^
OL	‰“Êœ™]‹JOL“ÊKœ™]ŠOÊ›™^JOY[˜Ý[ÛˆØÊJ^ØÛÛœÝ[™]È˜ÊšKžžJKO[™]È˜ÊKšKKžKžJK]›™^ÏYKœ™]ŽÜ™]\›ˆ›™^YKKœ™]]‹›™^\‹‹œ™][‹K›™^[‹‹œ™]ZKË›™^ZKKœ™]\Ë_Y[˜Ý[Ûˆ˜ÊK‹J^ØÛÛœÝ[™]È˜ÊKŠNÜ™]\›ˆOÊ‹›™^ZK›™^‹œ™]ZKK›™^œ™]\‹K›™^\ŠNŠ‹œ™]\‹‹›™^\ŠKŸY[˜Ý[Ûˆ˜Ê
^Ý›™^œ™]]œ™]‹œ™]‹›™^]›™^œ™]–‰‰Šœ™]–‹›™^]›™^ŠK›™^‰‰Š›™^‹œ™]–]œ™]–Š_Y[˜Ý[Ûˆ˜ÊKŠ^Ý\ËšO]\ËžYK\ËžO[‹\Ëœ™][[\Ë›™^[[\ËžL\Ëœ™]–[[\Ë›™^[[\ËœÝZ[™\HL_XÛ\ÜÈØÞÜÝ]XÈ\™XJ
^ØÛÛœÝO]›[™ÝÛ]LÙ›ÜŠ]OYKLKLÜNÚO\ŠÊÊ[ŠÏ]ÚWKž
Ü—KžK]Ü—Kž
ÚWKžNÜ™]\›‹J›Ÿ\Ý]XÈ\ÐÛØÚÕÚ\ÙJ
^Ü™]\›ˆØË˜\™XJ
O\Ý]XÈšX[™Ý[]TÚ\JJ^ØÛÛœÝV×KOV×KV×NÒÊ
K˜Ê‹
NÛ]Ï]›[™ÝÙK™›Ü‘XXÚ
ÊNÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊZKœ\Ú
ÊKÊÏYVÝK›[™Ý˜Ê‹VÝJNØÛÛœÝOY˜Ê‹JNÙ›ÜŠ]LÝK›[™ÝÝ
ÏLÊ\‹œ\Ú
KœÛXÙJ
ÌÊJNÜ™]\›ˆŸ_Y[˜Ý[ÛˆÊ
^ØÛÛœÝO]›[™ÝÙOŒ‰‰ÙKLWK™\]X[ÊÌJI‰œÜ

_Y[˜Ý[Ûˆ˜ÊJ^Ù›ÜŠ]LÛK›[™ÝÛŠÊÊ]œ\Ú
VÛ—Kž
Kœ\Ú
VÛ—KžJ_XÛ\ÜÈØÈ^[™ÈZ^ØÛÛœÝXÝÜŠ[™]ÈXÊÛ™]ÈYJKJK™]ÈYJKKJK™]ÈYJKKKJK™]ÈYJKKJWJKO^ßJ^ÜÝ\\Š
K\Ë\OW‘^YQÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^ÜÚ\\ÎÜ[ÛœÎ™_KP\œ˜^Kš\Ð\œ˜^J
OÝ–ÝNØÛÛœÝ]\ËOV×KV×NÙ›ÜŠ]OL]›[™ÝÙOŽÙJÊÊ^ÜÊÙWJ_Y[˜Ý[ÛˆÊ
^ØÛÛœÝÏV×KO]›ÚYOOYK˜Ý\™TÙYÛY[ÏÙK˜Ý\™TÙYÛY[ÎŒL‹Ï]›ÚYOOYKœÝ\ÏÙKœÝ\ÎŒK]›ÚYOOYK™\ÙK™\ŒNÛ]Ï]›ÚYOOYK˜™]™[[˜X›YK˜™]™[[˜X›Y]›ÚYOOYK˜™]™[XÚÛ™\ÜÏÙK˜™]™[XÚÛ™\ÜÎ‹Œ‹O]›ÚYOOYK˜™]™[Ú^™OÙK˜™]™[Ú^™NšKŒK]›ÚYOOYK˜™]™[Ù™œÙ]ÙK˜™]™[Ù™œÙ]Œ]›ÚYOOYK˜™]™[ÙYÛY[ÏÙK˜™]™[ÙYÛY[ÎŒÎØÛÛœÝOYK™^YT]]›ÚYOOYK•U‘Ù[™\˜]ÜÙK•U‘Ù[™\˜]ÜŽ•ØÎÛ]ËË‹KOHLNÛI‰ŠÏ[K™Ù]ÜXÙYÚ[ÊÊKOHLÏHLKÏ[K˜ÛÛ\]Qœ™[™]œ˜[Y\ÊËLJK[™]ÈÙK[™]ÈÙKO[™]ÈÙJKß
LLOLL
NØÛÛœÝÏ]™^˜XÝÚ[ÊJNÛ]TËœÚ\NØÛÛœÝTËšÛ\ÎÚYŠQØËš\ÐÛØÚÕÚ\ÙJŠJ^ØX‹œ™]™\œÙJ
NÙ›ÜŠ]LOU›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOUÝNÑØËš\ÐÛØÚÕÚ\ÙJJI‰ŠÝOYKœ™]™\œÙJ
J__XÛÛœÝOQØËšX[™Ý[]TÚ\J‹
KÏXŽÙ›ÜŠ]LOU›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOUÝNØX‹˜ÛÛ˜Ø]
J_Y[˜Ý[ÛˆJKŠ^Ü™]\›ˆ_ÛÛœÛÛK™\œ›ÜŠ•‘QK‘^YQÙ[ÛY]žNˆ™XÈÙ\È›Ý^\ÝŠK˜ÛÛ™J
K˜YØØ[Y™XÝÜŠKŠ_XÛÛœÝX‹›[™ÝÏQK›[™ÝÙ[˜Ý[Ûˆ
KŠ^Û]K‹ÎØÛÛœÝO]žYKžÏ]žKYKžK[‹ž]žÏ[‹žK]žKXJ˜JÛÊ›ËOXJ˜Ë[Ê›ÚYŠX]˜XœÊJO“[X™\‹‘TÒSÓŠ^ØÛÛœÝOSX]œÜ\

KSX]œÜ\

›
ØÊ˜ÊKYKž[ËÝKOYKžJØKÝKJ
‹žXËÙ\
J˜ËJ‹žJÛÙ[JJ›
KÊJ˜Ë[Ê›
NÚO\
ØJ™‹]ž[JÛÊ™‹]žNØÛÛœÝÏZJšJÜŠœŽÚYŠÏLŠ\™]\›ˆ™]ÈYJKŠNÜÏSX]œÜ\
ËÌŠ_Y[Ù^Û]HLNØO“[X™\‹‘TÒSÓÛ“[X™\‹‘TÒSÓ‰‰ŠHL
N˜OS[X™\‹‘TÒSÓÛS[X™\‹‘TÒSÓ‰‰ŠHL
N“X]œÚYÛŠÊOOOSX]œÚYÛŠÊI‰ŠHL
KÊOK[ËXKÏSX]œÜ\

JNŠOXK[ËÏSX]œÜ\
ÌŠJ_\™]\›ˆ™]ÈYJKÜË‹ÜÊ_XÛÛœÝV×NÙ›ÜŠ]LO]Ë›[™ÝYKLKO]
ÌNÝNÝ
ÊËŠÊËJÊÊ[OOYI‰ŠL
KOOOYI‰ŠOL
KÝOS
ÖÝKÖÛ—KÖÚWJNØÛÛœÝOV×NÛ]KT˜ÛÛ˜Ø]

NÙ›ÜŠ]LOU›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOUÝNÕOV×NÙ›ÜŠ]LYK›[™ÝO[‹LK]
ÌNÝŽÝ
ÊËJÊËŠÊÊZOOO[‰‰ŠOL
KOO[‰‰ŠL
KVÝOS
VÝKVÚWKVÜ—JNÒKœ\Ú
JKQ˜ÛÛ˜Ø]
J_Y›ÜŠ]LÝÝ
ÊÊ^ØÛÛœÝO]ÜZ
“X]˜ÛÜÊJ“X]”KÌŠKO]J“X]œÚ[ŠJ“X]”KÌŠJÙÙ›ÜŠ]LO]Ë›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOPJÖÝKÝKJNÑŠKžKžK[Š_Y›ÜŠ]LOU›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOUÝNÕORVÝNÙ›ÜŠ]LYK›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝPJVÝKVÝKJNÑŠ‹ž‹žK[Š___XÛÛœÝ]JÙÙ›ÜŠ]LÝŽÝ
ÊÊ^ØÛÛœÝOXÏÐJ–ÝKÝKŠN˜–ÝNÓOÊ˜ÛÜJË››Ü›X[ÖÌJK›][\TØØ[\ŠKž
K‹˜ÛÜJË˜š[›Ü›X[ÖÌJK›][\TØØ[\ŠKžJKK˜ÛÜJÖÌJK˜Y

K˜Y
ŠKŠKžKžKKžŠJN‘ŠKžKžK
_Y›ÜŠ]LNÝ[ÎÝ
ÊÊY›ÜŠ]OLÙOŽÙJÊÊ^ØÛÛœÝXÏÐJ–ÙWKÙWKŠN˜–ÙWNÓOÊ˜ÛÜJË››Ü›X[ÖÝJK›][\TØØ[\Š‹ž
K‹˜ÛÜJË˜š[›Ü›X[ÖÝJK›][\TØØ[\Š‹žJKK˜ÛÜJÖÝJK˜Y

K˜Y
ŠKŠKžKžKKžŠJN‘Š‹ž‹žKÛÊ
_Y›ÜŠ]\LNÝLÝKJ^ØÛÛœÝO]ÜZ
“X]˜ÛÜÊJ“X]”KÌŠKO]J“X]œÚ[ŠJ“X]”KÌŠJÙÙ›ÜŠ]LO]Ë›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOPJÖÝKÝKJNÑŠKžKžK
ÛŠ_Y›ÜŠ]LOU›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOUÝNÕORVÝNÙ›ÜŠ]LYK›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝPJVÝKVÝKJNÓOÑŠ‹ž‹žJÙÖÛËLWKžKÖÛËLWKž
ÛŠN‘Š‹ž‹žK
ÛŠ___Y[˜Ý[ÛˆÊJ^Û]]›[™ÝÙ›ÜŠËK[LÊ^ØÛÛœÝO[ŽÛ][‹LNÜ	‰Š]›[™ÝLJNÙ›ÜŠ]L[ÊÌŠœÝŽÝ
ÊÊ^ØÛÛœÝTŠÏTŠŠ
ÌJNÞŠJÚJÛ‹JÜŠÛ‹JÜŠÜËJÚJÜÊ___Y[˜Ý[ÛˆŠKŠ^ÜËœ\Ú

KËœ\Ú
JKËœ\Ú
Š_Y[˜Ý[ÛˆŠKŠ^ÑÊ
KÊJKÊŠNØÛÛœÝÏZK›[™ÝÌËOY‹™Ù[™\˜]UÜUŠ‹KËLËËL‹ËLJNÒ
VÌJK
VÌWJK
VÌ—J_Y[˜Ý[ÛˆŠK‹Ê^ÑÊ
KÊJKÊÊKÊJKÊŠKÊÊNØÛÛœÝOZK›[™ÝÌËÏY‹™Ù[™\˜]TÚYUØ[UŠ‹KKM‹KLËKL‹KLJNÒ
ÖÌJK
ÖÌWJK
ÖÌ×JK
ÖÌWJK
ÖÌ—JK
ÖÌ×J_Y[˜Ý[ÛˆÊ
^ÚKœ\Ú
ÖÌÊ
ÌJKKœ\Ú
ÖÌÊ
ÌWJKKœ\Ú
ÖÌÊ
Ì—J_Y[˜Ý[Ûˆ

^Ü‹œ\Ú
ž
K‹œ\Ú
žJ_HY[˜Ý[ÛŠ
^ØÛÛœÝZK›[™ÝÌÎÚYŠÊ^Û]LOTŠÙ›ÜŠ]LÝÎÝ
ÊÊ^ØÛÛœÝQVÝNÐŠ–Ì—JÙK–ÌWJÙK–ÌJÙJ_][ÊÌŠœOTŠÙ›ÜŠ]LÝÎÝ
ÊÊ^ØÛÛœÝQVÝNÐŠ–ÌJÙK–ÌWJÙK–Ì—JÙJ__Y[Ù^Ù›ÜŠ]LÝÎÝ
ÊÊ^ØÛÛœÝOQVÝNÐŠVÌ—KVÌWKVÌJ_Y›ÜŠ]LÝÎÝ
ÊÊ^ØÛÛœÝOQVÝNÐŠVÌJÔŠ›ËVÌWJÔŠ›ËVÌ—JÔŠ›Ê__[‹˜YÜ›Ý\
K›[™ÝÌË]
_J
K[˜Ý[ÛŠ
^ØÛÛœÝZK›[™ÝÌÎÛ]OLÓÊËJKJÏ]Ë›[™ÝÙ›ÜŠ]LU›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝUÝNÓÊ‹JKJÏ[‹›[™Ý[‹˜YÜ›Ý\
K›[™ÝÌË]J_J
_]\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJK\ËœÙ]]šX]J]—‹™]ÈJ‹ŠJK\Ë˜ÛÛ\]U™\^›Ü›X[Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆ[˜Ý[ÛŠKŠ^ÚYŠ‹œÚ\\ÏV×K\œ˜^Kš\Ð\œ˜^J
JY›ÜŠ]OLO]›[™ÝÙONÙJÊÊ^ØÛÛœÝO]ÙWNÛ‹œÚ\\Ëœ\Ú
K]ZY
_Y[ÙH‹œÚ\\Ëœ\Ú
]ZY
NÛ‹›Ü[ÛœÏSØš™XÝ˜\ÜÚYÛŠßKJK›ÚYOOYK™^YT]	‰Š‹›Ü[ÛœË™^YT]YK™^YT]Ò”ÓÓŠ
JNÜ™]\›ˆŸJ\Ëœ\˜[Y]\œËœÚ\\Ë\Ëœ\˜[Y]\œË›Ü[ÛœË
_\Ý]XÈœ›ÛR”ÓÓŠJ^ØÛÛœÝV×NÙ›ÜŠ]OL]œÚ\\Ë›[™ÝÚOŽÚJÊÊ^ØÛÛœÝYVÝœÚ\\ÖÚWWNÛ‹œ\Ú
Š_XÛÛœÝO]›Ü[ÛœË™^YT]Ü™]\›ˆ›ÚYOOZI‰Š›Ü[ÛœË™^YT]J™]È[ÚK\WJK™œ›ÛR”ÓÓŠJJK™]ÈØÊ‹›Ü[ÛœÊ__XÛÛœÝØÏ^ÙÙ[™\˜]UÜUŽ™[˜Ý[ÛŠK‹KŠ^ØÛÛœÝÏYVÌÊ›—KOYVÌÊ›ŠÌWKÏYVÌÊšWKYVÌÊšJÌWKÏYVÌÊœ—KYVÌÊœŠÌWNÜ™]\›–Û™]ÈYJËJK™]ÈYJË
K™]ÈYJË
W_KÙ[™\˜]TÚYUØ[UŽ™[˜Ý[ÛŠK‹K‹Ê^ØÛÛœÝOYVÌÊ›—KÏYVÌÊ›ŠÌWKYVÌÊ›ŠÌ—KÏYVÌÊšWKYVÌÊšJÌWKOYVÌÊšJÌ—KYVÌÊœ—KYVÌÊœŠÌWKOYVÌÊœŠÌ—KYVÌÊœ×KÏYVÌÊœÊÌWKÏYVÌÊœÊÌ—NÜ™]\›ˆX]˜XœÊËZ
OX]˜XœÊKXÊOÖÛ™]ÈYJKK[
K™]ÈYJËK]JK™]ÈYJK[JK™]ÈYJ‹KWÊWN–Û™]ÈYJËK[
K™]ÈYJK]JK™]ÈYJK[JK™]ÈYJËKWÊW__NØÛ\ÜÈÈ^[™ÈØÞØÛÛœÝXÝÜŠLKOL
^ØÛÛœÝJJÓX]œÜ\
JJKÌŽÜÝ\\ŠËLK‹K‹LK[‹K[‹LK‹K‹LK[‹K[‹‹LK‹K[‹LK[‹WKÌLKKKKKËËLLLKKKKKLKLKL‹LË‹ËKËKË‹Ë‹‹Ë‹ËKKK‹LK‹‹L‹ËKWKJK\Ë\OW’XÛÜØZY›Û‘Ù[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\Î]Z[™__\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈÊœ˜Y]\Ë™]Z[
__XÛ\ÜÈ˜È^[™ÈØÞØÛÛœÝXÝÜŠLKOL
^ÜÝ\\ŠÌKLKKLKKLWKÌ‹ËËKK‹K‹KKKËKËK—KJK\Ë\OW“ØÝZY›Û‘Ù[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\Î]Z[™__\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]È˜Êœ˜Y]\Ë™]Z[
__XÛ\ÜÈXÈ^[™ÈZ^ØÛÛœÝXÝÜŠKKOLKLÌ‹OLKLÏLŠ“X]”J^ÜÝ\\Š
K\Ë\OW”š[™ÑÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ú[›™\”˜Y]\ÎÝ]\”˜Y]\Î™K]TÙYÛY[Î›‹TÙYÛY[ÎšK]TÝ\œ‹]S[™ÝœßKSX]›X^
ËŠNØÛÛœÝOV×KÏV×KV×KÏV×NÛ]]ØÛÛœÝOJK]
KÊOSX]›X^
KJJK[™]ÈÙK[™]ÈYNÙ›ÜŠ]LÝZNÝ
ÊÊ^Ù›ÜŠ]LÝ[ŽÝ
ÊÊ^ØÛÛœÝO\ŠÝÛŠœÎÙžZ
“X]˜ÛÜÊJKžOZ
“X]œÚ[ŠJKËœ\Ú
žžKžŠKœ\Ú
JKžJžÙJÌJKÌ‹žOJžKÙJÌJKÌ‹Ëœ\Ú
žžJ_Z
Ï]_Y›ÜŠ]LÝNÝ
ÊÊ^ØÛÛœÝO]
ŠŠÌJNÙ›ÜŠ]LÝŽÝ
ÊÊ^ØÛÛœÝO]
ÙKZKÏZJÛŠÌKÏZJÛŠÌ‹ZJÌNØKœ\Ú
‹Ë
KKœ\Ú
ËË
__]\ËœÙ][™^
JK\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJËÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJÊJK\ËœÙ]]šX]J]—‹™]ÈJËŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈXÊš[›™\”˜Y]\Ë›Ý]\”˜Y]\Ë]TÙYÛY[ËœTÙYÛY[Ë]TÝ\]S[™Ý
__XÛ\ÜÈXÈ^[™ÈZ^ØÛÛœÝXÝÜŠ[™]ÈXÊÛ™]ÈYJJK™]ÈYJKKKJK™]ÈYJKKJWJKOLLŠ^ÜÝ\\Š
K\Ë\OW”Ú\QÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^ÜÚ\\ÎÝ\™TÙYÛY[Î™_NØÛÛœÝV×KOV×KV×KÏV×NÛ]OLÏLÚYŠLOOOP\œ˜^Kš\Ð\œ˜^J
J[

NÙ[ÙH›ÜŠ]OLÙO›[™ÝÙJÊÊ[
ÙWJK\Ë˜YÜ›Ý\
KËJKJÏ[ËÏLÙ[˜Ý[Ûˆ

^ØÛÛœÝOZK›[™ÝÌË]™^˜XÝÚ[ÊJNÛ]Ï[œÚ\NØÛÛœÝ[šÛ\ÎÈLOOOQØËš\ÐÛØÚÕÚ\ÙJÊI‰ŠÏXËœ™]™\œÙJ
JNÙ›ÜŠ]LOZ›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOZÝNÈLOOQØËš\ÐÛØÚÕÚ\ÙJJI‰ŠÝOYKœ™]™\œÙJ
J_XÛÛœÝOQØËšX[™Ý[]TÚ\JË
NÙ›ÜŠ]LOZ›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOZÝNØÏXË˜ÛÛ˜Ø]
J_Y›ÜŠ]LOXË›[™ÝÝNÝ
ÊÊ^ØÛÛœÝOXÖÝNÚKœ\Ú
KžKžK
K‹œ\Ú
JKËœ\Ú
KžKžJ_Y›ÜŠ]LO]K›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO]VÝKOYVÌJØKYVÌWJØKÏYVÌ—JØNÛ‹œ\Ú
K‹ÊKÊÏLß_]\ËœÙ][™^
ŠK\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJ‹ÊJK\ËœÙ]]šX]J]—‹™]ÈJËŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆ[˜Ý[ÛŠJ^ÚYŠKœÚ\\ÏV×K\œ˜^Kš\Ð\œ˜^J
JY›ÜŠ]LO]›[™ÝÛNÛŠÊÊ^ØÛÛœÝO]Û—NÙKœÚ\\Ëœ\Ú
K]ZY
_Y[ÙHKœÚ\\Ëœ\Ú
]ZY
NÜ™]\›ˆ_J\Ëœ\˜[Y]\œËœÚ\\Ë
_\Ý]XÈœ›ÛR”ÓÓŠJ^ØÛÛœÝV×NÙ›ÜŠ]OL]œÚ\\Ë›[™ÝÚOŽÚJÊÊ^ØÛÛœÝYVÝœÚ\\ÖÚWWNÛ‹œ\Ú
Š_\™]\›ˆ™]ÈXÊ‹˜Ý\™TÙYÛY[Ê__XÛ\ÜÈ˜È^[™ÈZ^ØÛÛœÝXÝÜŠLKOLÌ‹LM‹OLLŠ“X]”KÏLOSX]”J^ÜÝ\\Š
K\Ë\OW”Ü\™QÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\ÎÚYÙYÛY[Î™KZYÚÙYÛY[Î›‹TÝ\šKS[™Ýœ‹]TÝ\œË]S[™Ý˜_KOSX]›X^
ËX]™›ÛÜŠJJKSX]›X^
‹X]™›ÛÜŠŠJNØÛÛœÝÏSX]›Z[ŠÊØKX]”JNÛ]LØÛÛœÝÏV×K[™]ÈÙKO[™]ÈÙKV×KV×KOV×KV×NÙ›ÜŠ]LÙ[ŽÙ
ÊÊ^ØÛÛœÝÏV×KÏYÛŽÛ]LÌOOY	‰ŒOO\ÏÝKKÙN™OO[‰‰›ÏOOSX]”I‰ŠKKKÙJNÙ›ÜŠ]LÛYNÛŠÊÊ^ØÛÛœÝÏ[‹ÙNÚžK]
“X]˜ÛÜÊJÛÊœŠJ“X]œÚ[ŠÊ×Ê˜JKžO]
“X]˜ÛÜÊÊ×Ê˜JKž]
“X]œÚ[ŠJÛÊœŠJ“X]œÚ[ŠÊ×Ê˜JKœ\Ú
žžKžŠKK˜ÛÜJ
K››Ü›X[^™J
KKœ\Ú
KžKžKKžŠK‹œ\Ú
ÊÝ‹KWÊKËœ\Ú

ÊÊ_XËœ\Ú
Ê_Y›ÜŠ]LÝŽÝ
ÊÊY›ÜŠ]OLÚONÚJÊÊ^ØÛÛœÝOXÖÝVÚJÌWKXÖÝVÚWKOXÖÝ
ÌWVÚWKXÖÝ
ÌWVÚJÌWNÊOO]ÏŒ
I‰™œ\Ú
K‹
K
OO[‹L_ÏX]”JI‰™œ\Ú
‹K
_]\ËœÙ][™^

K\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJKÊJK\ËœÙ]]šX]J]—‹™]ÈJ‹ŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]È˜Êœ˜Y]\ËÚYÙYÛY[ËšZYÚÙYÛY[ËœTÝ\œS[™Ý]TÝ\]S[™Ý
__XÛ\ÜÈ˜È^[™ÈØÞØÛÛœÝXÝÜŠLKOL
^ÜÝ\\ŠÌKKKLKLKKLKKLKKLKLWKÌ‹KË‹KË‹ËWKJK\Ë\OW•]˜ZY›Û‘Ù[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\Î]Z[™__\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]È˜Êœ˜Y]\Ë™]Z[
__XÛ\ÜÈØÈ^[™ÈZ^ØÛÛœÝXÝÜŠLKOKLL‹OMLŠ“X]”J^ÜÝ\\Š
K\Ë\OW•Ü\ÑÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\ÎX™N™K˜YX[ÙYÛY[Î›‹X[\”ÙYÛY[ÎšK\˜ÎœŸKSX]™›ÛÜŠŠKOSX]™›ÛÜŠJNØÛÛœÝÏV×KOV×KÏV×KV×KÏ[™]ÈÙK[™]ÈÙKO[™]ÈÙNÙ›ÜŠ]ÏLÜÏ[ŽÜÊÊÊY›ÜŠ]LÙZNÙ
ÊÊ^ØÛÛœÝYÚJœ‹O\ËÛŠ“X]”JŒŽÚžJ
ÙJ“X]˜ÛÜÊJJJ“X]˜ÛÜÊ
KžOJ
ÙJ“X]˜ÛÜÊJJJ“X]œÚ[Š
KžYJ“X]œÚ[ŠJKKœ\Ú
žžKžŠKËž]
“X]˜ÛÜÊ
KËžO]
“X]œÚ[Š
KKœÝX•™XÝÜœÊÊK››Ü›X[^™J
KËœ\Ú
KžKžKKžŠKœ\Ú
ÚJKœ\Ú
ËÛŠ_Y›ÜŠ]LNÝ[ŽÝ
ÊÊY›ÜŠ]OLNÙOZNÙJÊÊ^ØÛÛœÝJJÌJJ
ÙKLKJJÌJJŠLJJÙKLKOJJÌJJŠLJJÙKÏJJÌJJ
ÙNÜËœ\Ú
‹‹ÊKËœ\Ú
‹KÊ_]\ËœÙ][™^
ÊK\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJËÊJK\ËœÙ]]šX]J]—‹™]ÈJŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈØÊœ˜Y]\ËX™Kœ˜YX[ÙYÛY[ËX[\”ÙYÛY[Ë˜\˜Ê__XÛ\ÜÈ	È^[™ÈZ^ØÛÛœÝXÝÜŠLKOKMONL‹ÏLÊ^ÜÝ\\Š
K\Ë\OW•Ü\ÒÛ›ÝÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü˜Y]\ÎX™N™KX[\”ÙYÛY[Î›‹˜YX[ÙYÛY[ÎšKœ‹NœßKSX]™›ÛÜŠŠKOSX]™›ÛÜŠJNØÛÛœÝOV×KÏV×KV×KÏV×K[™]ÈÙKO[™]ÈÙK[™]ÈÙK[™]ÈÙKO[™]ÈÙK[™]ÈÙKÏ[™]ÈÙNÙ›ÜŠ]OLØO[ŽÊÊØJ^ØÛÛœÝXKÛŠœŠ“X]”JŒŽ×Ê‹‹Ë
KÊŠËŒK‹Ë
K‹œÝX•™XÝÜœÊ
KË˜Y™XÝÜœÊ
KK˜Ü›ÜÜÕ™XÝÜœÊ‹ÊKË˜Ü›ÜÜÕ™XÝÜœÊKŠKK››Ü›X[^™J
KË››Ü›X[^™J
NÙ›ÜŠ]LÝZNÊÊÝ
^ØÛÛœÝ]ÚJ“X]”JŒ‹ÏKYJ“X]˜ÛÜÊŠKYJ“X]œÚ[ŠŠNÚžYž
ÊÊ™Ëž
Ü
›Kž
KžOYžJÊÊ™ËžJÜ
›KžJKžYžŠÊÊ™ËžŠÜ
›KžŠKËœ\Ú
žžKžŠKKœÝX•™XÝÜœÊ
K››Ü›X[^™J
Kœ\Ú
KžKžKKžŠKËœ\Ú
KÛŠKËœ\Ú
ÚJ__Y›ÜŠ]LNÝ[ŽÝ
ÊÊY›ÜŠ]OLNÙOZNÙJÊÊ^ØÛÛœÝJJÌJJŠLJJÊKLJKJJÌJJ
ÊKLJKÏJJÌJJ
ÙKÏJJÌJJŠLJJÙNØKœ\Ú
‹‹ÊKKœ\Ú
‹ËÊ_Y[˜Ý[ÛˆÊK‹KŠ^ØÛÛœÝÏSX]˜ÛÜÊ
KOSX]œÚ[Š
KÏ[‹ÙJSX]˜ÛÜÊÊNÜ‹žZJŠŠÛ
J‹JœË‹žOZJŠŠÛ
J˜J‹K‹žZJ“X]œÚ[ŠÊJ‹_]\ËœÙ][™^
JK\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJËÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJÊJK\ËœÙ]]šX]J]—‹™]ÈJËŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]È	Êœ˜Y]\ËX™KX[\”ÙYÛY[Ëœ˜YX[ÙYÛY[ËœœJ__XÛ\ÜÈXÈ^[™ÈZ^ØÛÛœÝXÝÜŠ[™]ÈÛ
™]ÈÙJLKLK
K™]ÈÙJLKK
K™]ÈÙJKK
JKOMLKONHLJ^ÜÝ\\Š
K\Ë\OW•X™QÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^Ü]X[\”ÙYÛY[Î™K˜Y]\Î›‹˜YX[ÙYÛY[ÎšKÛÜÙYœŸNØÛÛœÝÏ]˜ÛÛ\]Qœ™[™]œ˜[Y\ÊKŠNÝ\Ë[™Ù[Ï\Ë[™Ù[Ë\Ë››Ü›X[Ï\Ë››Ü›X[Ë\Ë˜š[›Ü›X[Ï\Ë˜š[›Ü›X[ÎØÛÛœÝO[™]ÈÙKÏ[™]ÈÙK[™]ÈYNÛ]Ï[™]ÈÙNØÛÛœÝV×KOV×KV×KV×NÙ[˜Ý[ÛˆJŠ^ØÏ]™Ù]Ú[]
‹ÙKÊNØÛÛœÝ\Ë››Ü›X[ÖÜ—K\Ë˜š[›Ü›X[ÖÜ—NÙ›ÜŠ]LÝZNÝ
ÊÊ^ØÛÛœÝO]ÚJ“X]”JŒ‹SX]œÚ[ŠJKÏKSX]˜ÛÜÊJNÛËž\Ê›ž
ÜŠ™žËžO\Ê›žJÜŠ™žKËž\Ê›žŠÜŠ™ž‹Ë››Ü›X[^™J
KKœ\Ú
ËžËžKËžŠKKžXËž
ÛŠ›ËžKžOXËžJÛŠ›ËžKKžXËžŠÛŠ›Ëž‹œ\Ú
KžKžKKžŠ__HY[˜Ý[ÛŠ
^Ù›ÜŠ]LÝNÝ
ÊÊ[J
NÛJLOOO\ÙNŒ
K[˜Ý[ÛŠ
^Ù›ÜŠ]LÝYNÝ
ÊÊY›ÜŠ]LÛZNÛŠÊÊ[ž]ÙKžO[‹ÚKœ\Ú
žžJ_J
K[˜Ý[ÛŠ
^Ù›ÜŠ]LNÝYNÝ
ÊÊY›ÜŠ]OLNÙOZNÙJÊÊ^ØÛÛœÝJJÌJJŠLJJÊKLJKJJÌJJ
ÊKLJKÏJJÌJJ
ÙKOJJÌJJŠLJJÙNÜœ\Ú
‹‹JKœ\Ú
‹ËJ__J
_J
K\ËœÙ][™^

K\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJÊJK\ËœÙ]]šX]J››Ü›X[‹™]ÈJKÊJK\ËœÙ]]šX]J]—‹™]ÈJŠJ_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆœ]]\Ëœ\˜[Y]\œËœ]Ò”ÓÓŠ
K\Ý]XÈœ›ÛR”ÓÓŠ
^Ü™]\›ˆ™]ÈXÊ
™]È[Ýœ]\WJK™œ›ÛR”ÓÓŠœ]
KX[\”ÙYÛY[Ëœ˜Y]\Ëœ˜YX[ÙYÛY[Ë˜ÛÜÙY
__XÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠ[[
^ÚYŠÝ\\Š
K\Ë\OW•Ú\™Yœ˜[YQÙ[ÛY]žW‹\Ëœ\˜[Y]\œÏ^ÙÙ[ÛY]žNK[OO]
^ØÛÛœÝOV×K[™]ÈÙ]O[™]ÈÙK[™]ÈÙNÚYŠ[OO]š[™^
^ØÛÛœÝÏ]˜]šX]\ËœÜÚ][Û‹O]š[™^Û]Ï]™Ü›Ý\ÎÌOO[Ë›[™Ý	‰ŠÏVÞÜÝ\ŒÛÝ[˜K˜ÛÝ[X]\šX[[™^ŒWJNÙ›ÜŠ]L[Ë›[™ÝÝÊÊÝ
^ØÛÛœÝ[ÖÝKÏ[œÝ\Ù›ÜŠ]XËÏXÊÛ˜ÛÝ[ÝÎÝ
ÏLÊY›ÜŠ]ÏLÛÏÎÛÊÊÊ^ØÛÛœÝXK™Ù]

ÛÊKÏXK™Ù]

ÊÊÌJILÊNÚK™œ›ÛPY™™\]šX]JË
K‹™œ›ÛPY™™\]šX]JËÊKLOOYZ
K‹ŠI‰ŠKœ\Ú
KžKžKKžŠKKœ\Ú
‹ž‹žK‹žŠJ___Y[Ù^ØÛÛœÝÏ]˜]šX]\ËœÜÚ][ÛŽÙ›ÜŠ]LO\Ë˜ÛÝ[ÌÎÝNÝ
ÊÊY›ÜŠ]OLØOÎØJÊÊ^ØÛÛœÝÏLÊ
ØKLÊ
ÊJÌJILÎÚK™œ›ÛPY™™\]šX]JËÊK‹™œ›ÛPY™™\]šX]JË
KLOOYZ
K‹ŠI‰ŠKœ\Ú
KžKžKKžŠKKœ\Ú
‹ž‹žK‹žŠJ__]\ËœÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJ__XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëœ\˜[Y]\œÏSØš™XÝ˜\ÜÚYÛŠßKœ\˜[Y]\œÊK\ß_Y[˜Ý[ÛˆZ
KŠ^ØÛÛœÝOX	ÝžK	Ýž_K	ÝžŸKIÙKžK	ÙKž_K	ÙKžŸXX	ÙKžK	ÙKž_K	ÙKžŸKIÝžK	Ýž_K	ÝžŸXÜ™]\›ˆLOO[‹š\ÊJI‰ˆLOO[‹š\ÊŠI‰Š‹˜Y
JK‹˜Y
ŠKL
_]˜\ˆšSØš™XÝ™œ™Y^™J××Ü›Ý××Î›[›ÞÙ[ÛY]žN‰KØ\Ý[QÙ[ÛY]žNšXËÚ\˜ÛQÙ[ÛY]žNœ˜ËÛÛ™QÙ[ÛY]žN˜XËÞ[[™\‘Ù[ÛY]žNœØËÙXØZY›Û‘Ù[ÛY]žN›ËYÙ\ÑÙ[ÛY]žNœË^YQÙ[ÛY]žNšØËXÛÜØZY›Û‘Ù[ÛY]žN–Ë]QÙ[ÛY]žN›˜ËØÝZY›Û‘Ù[ÛY]žNš˜Ë[™QÙ[ÛY]žNž‹ÛZY›Û‘Ù[ÛY]žN›ØËš[™ÑÙ[ÛY]žNœXËÚ\QÙ[ÛY]žN–XËÜ\™QÙ[ÛY]žN–˜Ë]˜ZY›Û‘Ù[ÛY]žN’˜ËÜ\ÑÙ[ÛY]žN’ØËÜ\ÒÛ›ÝÙ[ÛY]žN‰ËX™QÙ[ÛY]žN”XËÚ\™Yœ˜[YQÙ[ÛY]žNJNØÛ\ÜÈZ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÔÚYÝÓX]\šX[HL\Ë\OW”ÚYÝÓX]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJ
K\Ë˜[œÜ\™[HL\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë™›ÙÏ]™›ÙË\ß_XÛ\ÜÈš^[™È\žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Ô˜]ÔÚY\“X]\šX[HL\Ë\OW”˜]ÔÚY\“X]\šX[Ÿ_XÛ\ÜÈÚ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\ÚÝ[™\™X]\šX[HL\Ë™Yš[™\Ï^ÔÕS‘T‘——ŸK\Ë\OW“Y\ÚÝ[™\™X]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\Ëœ›ÝYÚ™\ÜÏLK\Ë›Y][™\ÜÏL\Ë›X\[[\Ë›YÚX\[[\Ë›YÚX\[[œÚ]OLK\Ë˜[ÓX\[[\Ë˜[ÓX\[[œÚ]OLK\Ë™[Z\ÜÚ]™O[™]ÈÚJ
K\Ë™[Z\ÜÚ]™R[[œÚ]OLK\Ë™[Z\ÜÚ]™SX\[[\Ë˜[\X\[[\Ë˜[\ØØ[OLK\Ë››Ü›X[X\[[\Ë››Ü›X[X\\OL\Ë››Ü›X[ØØ[O[™]ÈYJKJK\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\Ëœ›ÝYÚ™\ÜÓX\[[\Ë›Y][™\ÜÓX\[[\Ë˜[SX\[[\Ë™[“X\[[\Ë™[“X\[[œÚ]OLK\ËÚ\™Yœ˜[YOHLK\ËÚ\™Yœ˜[YS[™]ÚYLK\ËÚ\™Yœ˜[YS[™XØ\Wœ›Ý[™‹\ËÚ\™Yœ˜[YS[™Z›Ú[Wœ›Ý[™‹\Ë™›]ÚY[™ÏHLK\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë™Yš[™\Ï^ÔÕS‘T‘——ŸK\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ëœ›ÝYÚ™\ÜÏ]œ›ÝYÚ™\ÜË\Ë›Y][™\ÜÏ]›Y][™\ÜË\Ë›X\]›X\\Ë›YÚX\]›YÚX\\Ë›YÚX\[[œÚ]O]›YÚX\[[œÚ]K\Ë˜[ÓX\]˜[ÓX\\Ë˜[ÓX\[[œÚ]O]˜[ÓX\[[œÚ]K\Ë™[Z\ÜÚ]™K˜ÛÜJ™[Z\ÜÚ]™JK\Ë™[Z\ÜÚ]™SX\]™[Z\ÜÚ]™SX\\Ë™[Z\ÜÚ]™R[[œÚ]O]™[Z\ÜÚ]™R[[œÚ]K\Ë˜[\X\]˜[\X\\Ë˜[\ØØ[O]˜[\ØØ[K\Ë››Ü›X[X\]››Ü›X[X\\Ë››Ü›X[X\\O]››Ü›X[X\\K\Ë››Ü›X[ØØ[K˜ÛÜJ››Ü›X[ØØ[JK\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\Ëœ›ÝYÚ™\ÜÓX\]œ›ÝYÚ™\ÜÓX\\Ë›Y][™\ÜÓX\]›Y][™\ÜÓX\\Ë˜[SX\]˜[SX\\Ë™[“X\]™[“X\\Ë™[“X\[[œÚ]O]™[“X\[[œÚ]K\ËÚ\™Yœ˜[YO]Ú\™Yœ˜[YK\ËÚ\™Yœ˜[YS[™]ÚY]Ú\™Yœ˜[YS[™]ÚY\ËÚ\™Yœ˜[YS[™XØ\]Ú\™Yœ˜[YS[™XØ\\ËÚ\™Yœ˜[YS[™Z›Ú[]Ú\™Yœ˜[YS[™Z›Ú[‹\Ë™›]ÚY[™Ï]™›]ÚY[™Ë\Ë™›ÙÏ]™›ÙË\ß_XÛ\ÜÈZ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\Ú\ÚXØ[X]\šX[HL\Ë™Yš[™\Ï^ÔÕS‘T‘——‹TÒPÐS——ŸK\Ë\OW“Y\Ú\ÚXØ[X]\šX[‹\Ë˜[š\ÛÝ›ÜT›Ý][ÛL\Ë˜[š\ÛÝ›ÜSX\[[\Ë˜ÛX\˜ÛØ]X\[[\Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÏL\Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\[[\Ë˜ÛX\˜ÛØ]›Ü›X[ØØ[O[™]ÈYJKJK\Ë˜ÛX\˜ÛØ]›Ü›X[X\[[\Ëš[ÜLKKØš™XÝ™Yš[™T›Ü\J\Ëœ™Y›XÝ]š]W‹ÙÙ]™[˜Ý[ÛŠ
^Ü™]\›ˆYJ‹JŠ\Ëš[Ü‹LJKÊ\Ëš[ÜŠÌJKJ_KÙ]™[˜Ý[ÛŠ
^Ý\Ëš[ÜJJË

KÊKK

__JK\Ëš\šY\ØÙ[˜ÙSX\[[\Ëš\šY\ØÙ[˜ÙRSÔLKŒË\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙOVÌLK\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\[[\ËœÚY[ÛÛÜ[™]ÈÚJ
K\ËœÚY[ÛÛÜ“X\[[\ËœÚY[”›ÝYÚ™\ÜÏLK\ËœÚY[”›ÝYÚ™\ÜÓX\[[\Ë˜[œÛZ\ÜÚ[Û“X\[[\ËXÚÛ™\ÜÏL\ËXÚÛ™\ÜÓX\[[\Ë˜][X][Û‘\Ý[˜ÙOLKÌ\Ë˜][X][ÛÛÛÜ[™]ÈÚJKKJK\ËœÜXÝ[\’[[œÚ]OLK\ËœÜXÝ[\’[[œÚ]SX\[[\ËœÜXÝ[\ÛÛÜ[™]ÈÚJKKJK\ËœÜXÝ[\ÛÛÜ“X\[[\Ë—Ø[š\ÛÝ›ÜOL\Ë—ØÛX\˜ÛØ]L\Ë—Ú\šY\ØÙ[˜ÙOL\Ë—ÜÚY[L\Ë—Ý˜[œÛZ\ÜÚ[ÛL\ËœÙ]˜[Y\Ê
_YÙ][š\ÛÝ›ÜJ
^Ü™]\›ˆ\Ë—Ø[š\ÛÝ›Ü_\Ù][š\ÛÝ›ÜJ
^Ý\Ë—Ø[š\ÛÝ›ÜOŒO]Œ	‰\Ë™\œÚ[ÛŠÊË\Ë—Ø[š\ÛÝ›ÜO]YÙ]ÛX\˜ÛØ]

^Ü™]\›ˆ\Ë—ØÛX\˜ÛØ]\Ù]ÛX\˜ÛØ]

^Ý\Ë—ØÛX\˜ÛØ]ŒO]Œ	‰\Ë™\œÚ[ÛŠÊË\Ë—ØÛX\˜ÛØ]]YÙ]\šY\ØÙ[˜ÙJ
^Ü™]\›ˆ\Ë—Ú\šY\ØÙ[˜Ù_\Ù]\šY\ØÙ[˜ÙJ
^Ý\Ë—Ú\šY\ØÙ[˜ÙOŒO]Œ	‰\Ë™\œÚ[ÛŠÊË\Ë—Ú\šY\ØÙ[˜ÙO]YÙ]ÚY[Š
^Ü™]\›ˆ\Ë—ÜÚY[Ÿ\Ù]ÚY[Š
^Ý\Ë—ÜÚY[ŒO]Œ	‰\Ë™\œÚ[ÛŠÊË\Ë—ÜÚY[]YÙ]˜[œÛZ\ÜÚ[ÛŠ
^Ü™]\›ˆ\Ë—Ý˜[œÛZ\ÜÚ[ÛŸ\Ù]˜[œÛZ\ÜÚ[ÛŠ
^Ý\Ë—Ý˜[œÛZ\ÜÚ[ÛŒO]Œ	‰\Ë™\œÚ[ÛŠÊË\Ë—Ý˜[œÛZ\ÜÚ[Û]XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë™Yš[™\Ï^ÔÕS‘T‘——‹TÒPÐS——ŸK\Ë˜[š\ÛÝ›ÜO]˜[š\ÛÝ›ÜK\Ë˜[š\ÛÝ›ÜT›Ý][Û]˜[š\ÛÝ›ÜT›Ý][Û‹\Ë˜[š\ÛÝ›ÜSX\]˜[š\ÛÝ›ÜSX\\Ë˜ÛX\˜ÛØ]]˜ÛX\˜ÛØ]\Ë˜ÛX\˜ÛØ]X\]˜ÛX\˜ÛØ]X\\Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÏ]˜ÛX\˜ÛØ]›ÝYÚ™\ÜË\Ë˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\]˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\\Ë˜ÛX\˜ÛØ]›Ü›X[X\]˜ÛX\˜ÛØ]›Ü›X[X\\Ë˜ÛX\˜ÛØ]›Ü›X[ØØ[K˜ÛÜJ˜ÛX\˜ÛØ]›Ü›X[ØØ[JK\Ëš[Ü]š[Ü‹\Ëš\šY\ØÙ[˜ÙO]š\šY\ØÙ[˜ÙK\Ëš\šY\ØÙ[˜ÙSX\]š\šY\ØÙ[˜ÙSX\\Ëš\šY\ØÙ[˜ÙRSÔ]š\šY\ØÙ[˜ÙRSÔ‹\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙOVË‹‹š\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙWK\Ëš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\]š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\\ËœÚY[]œÚY[‹\ËœÚY[ÛÛÜ‹˜ÛÜJœÚY[ÛÛÜŠK\ËœÚY[ÛÛÜ“X\]œÚY[ÛÛÜ“X\\ËœÚY[”›ÝYÚ™\ÜÏ]œÚY[”›ÝYÚ™\ÜË\ËœÚY[”›ÝYÚ™\ÜÓX\]œÚY[”›ÝYÚ™\ÜÓX\\Ë˜[œÛZ\ÜÚ[Û]˜[œÛZ\ÜÚ[Û‹\Ë˜[œÛZ\ÜÚ[Û“X\]˜[œÛZ\ÜÚ[Û“X\\ËXÚÛ™\ÜÏ]XÚÛ™\ÜË\ËXÚÛ™\ÜÓX\]XÚÛ™\ÜÓX\\Ë˜][X][Û‘\Ý[˜ÙO]˜][X][Û‘\Ý[˜ÙK\Ë˜][X][ÛÛÛÜ‹˜ÛÜJ˜][X][ÛÛÛÜŠK\ËœÜXÝ[\’[[œÚ]O]œÜXÝ[\’[[œÚ]K\ËœÜXÝ[\’[[œÚ]SX\]œÜXÝ[\’[[œÚ]SX\\ËœÜXÝ[\ÛÛÜ‹˜ÛÜJœÜXÝ[\ÛÛÜŠK\ËœÜXÝ[\ÛÛÜ“X\]œÜXÝ[\ÛÛÜ“X\\ß_XÛ\ÜÈÚ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\ÚÛ™ÓX]\šX[HL\Ë\OW“Y\ÚÛ™ÓX]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\ËœÜXÝ[\[™]ÈÚJLLNJK\ËœÚ[š[™\ÜÏLÌ\Ë›X\[[\Ë›YÚX\[[\Ë›YÚX\[[œÚ]OLK\Ë˜[ÓX\[[\Ë˜[ÓX\[[œÚ]OLK\Ë™[Z\ÜÚ]™O[™]ÈÚJ
K\Ë™[Z\ÜÚ]™R[[œÚ]OLK\Ë™[Z\ÜÚ]™SX\[[\Ë˜[\X\[[\Ë˜[\ØØ[OLK\Ë››Ü›X[X\[[\Ë››Ü›X[X\\OL\Ë››Ü›X[ØØ[O[™]ÈYJKJK\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\ËœÜXÝ[\“X\[[\Ë˜[SX\[[\Ë™[“X\[[\Ë˜ÛÛXš[™OZ\Ëœ™Y›XÝ]š]OLK\Ëœ™Yœ˜XÝ[Û”˜][ÏKŽN\ËÚ\™Yœ˜[YOHLK\ËÚ\™Yœ˜[YS[™]ÚYLK\ËÚ\™Yœ˜[YS[™XØ\Wœ›Ý[™‹\ËÚ\™Yœ˜[YS[™Z›Ú[Wœ›Ý[™‹\Ë™›]ÚY[™ÏHLK\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\ËœÜXÝ[\‹˜ÛÜJœÜXÝ[\ŠK\ËœÚ[š[™\ÜÏ]œÚ[š[™\ÜË\Ë›X\]›X\\Ë›YÚX\]›YÚX\\Ë›YÚX\[[œÚ]O]›YÚX\[[œÚ]K\Ë˜[ÓX\]˜[ÓX\\Ë˜[ÓX\[[œÚ]O]˜[ÓX\[[œÚ]K\Ë™[Z\ÜÚ]™K˜ÛÜJ™[Z\ÜÚ]™JK\Ë™[Z\ÜÚ]™SX\]™[Z\ÜÚ]™SX\\Ë™[Z\ÜÚ]™R[[œÚ]O]™[Z\ÜÚ]™R[[œÚ]K\Ë˜[\X\]˜[\X\\Ë˜[\ØØ[O]˜[\ØØ[K\Ë››Ü›X[X\]››Ü›X[X\\Ë››Ü›X[X\\O]››Ü›X[X\\K\Ë››Ü›X[ØØ[K˜ÛÜJ››Ü›X[ØØ[JK\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\ËœÜXÝ[\“X\]œÜXÝ[\“X\\Ë˜[SX\]˜[SX\\Ë™[“X\]™[“X\\Ë˜ÛÛXš[™O]˜ÛÛXš[™K\Ëœ™Y›XÝ]š]O]œ™Y›XÝ]š]K\Ëœ™Yœ˜XÝ[Û”˜][Ï]œ™Yœ˜XÝ[Û”˜][Ë\ËÚ\™Yœ˜[YO]Ú\™Yœ˜[YK\ËÚ\™Yœ˜[YS[™]ÚY]Ú\™Yœ˜[YS[™]ÚY\ËÚ\™Yœ˜[YS[™XØ\]Ú\™Yœ˜[YS[™XØ\\ËÚ\™Yœ˜[YS[™Z›Ú[]Ú\™Yœ˜[YS[™Z›Ú[‹\Ë™›]ÚY[™Ï]™›]ÚY[™Ë\Ë™›ÙÏ]™›ÙË\ß_XÛ\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\ÚÛÛ“X]\šX[HL\Ë™Yš[™\Ï^ÕÓÓŽ——ŸK\Ë\OW“Y\ÚÛÛ“X]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\Ë›X\[[\Ë™Ü˜YY[X\[[\Ë›YÚX\[[\Ë›YÚX\[[œÚ]OLK\Ë˜[ÓX\[[\Ë˜[ÓX\[[œÚ]OLK\Ë™[Z\ÜÚ]™O[™]ÈÚJ
K\Ë™[Z\ÜÚ]™R[[œÚ]OLK\Ë™[Z\ÜÚ]™SX\[[\Ë˜[\X\[[\Ë˜[\ØØ[OLK\Ë››Ü›X[X\[[\Ë››Ü›X[X\\OL\Ë››Ü›X[ØØ[O[™]ÈYJKJK\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\Ë˜[SX\[[\ËÚ\™Yœ˜[YOHLK\ËÚ\™Yœ˜[YS[™]ÚYLK\ËÚ\™Yœ˜[YS[™XØ\Wœ›Ý[™‹\ËÚ\™Yœ˜[YS[™Z›Ú[Wœ›Ý[™‹\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë›X\]›X\\Ë™Ü˜YY[X\]™Ü˜YY[X\\Ë›YÚX\]›YÚX\\Ë›YÚX\[[œÚ]O]›YÚX\[[œÚ]K\Ë˜[ÓX\]˜[ÓX\\Ë˜[ÓX\[[œÚ]O]˜[ÓX\[[œÚ]K\Ë™[Z\ÜÚ]™K˜ÛÜJ™[Z\ÜÚ]™JK\Ë™[Z\ÜÚ]™SX\]™[Z\ÜÚ]™SX\\Ë™[Z\ÜÚ]™R[[œÚ]O]™[Z\ÜÚ]™R[[œÚ]K\Ë˜[\X\]˜[\X\\Ë˜[\ØØ[O]˜[\ØØ[K\Ë››Ü›X[X\]››Ü›X[X\\Ë››Ü›X[X\\O]››Ü›X[X\\K\Ë››Ü›X[ØØ[K˜ÛÜJ››Ü›X[ØØ[JK\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\Ë˜[SX\]˜[SX\\ËÚ\™Yœ˜[YO]Ú\™Yœ˜[YK\ËÚ\™Yœ˜[YS[™]ÚY]Ú\™Yœ˜[YS[™]ÚY\ËÚ\™Yœ˜[YS[™XØ\]Ú\™Yœ˜[YS[™XØ\\ËÚ\™Yœ˜[YS[™Z›Ú[]Ú\™Yœ˜[YS[™Z›Ú[‹\Ë™›ÙÏ]™›ÙË\ß_XÛ\ÜÈÚ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\Ú›Ü›X[X]\šX[HL\Ë\OW“Y\Ú›Ü›X[X]\šX[‹\Ë˜[\X\[[\Ë˜[\ØØ[OLK\Ë››Ü›X[X\[[\Ë››Ü›X[X\\OL\Ë››Ü›X[ØØ[O[™]ÈYJKJK\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\ËÚ\™Yœ˜[YOHLK\ËÚ\™Yœ˜[YS[™]ÚYLK\Ë™›]ÚY[™ÏHLK\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜[\X\]˜[\X\\Ë˜[\ØØ[O]˜[\ØØ[K\Ë››Ü›X[X\]››Ü›X[X\\Ë››Ü›X[X\\O]››Ü›X[X\\K\Ë››Ü›X[ØØ[K˜ÛÜJ››Ü›X[ØØ[JK\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\ËÚ\™Yœ˜[YO]Ú\™Yœ˜[YK\ËÚ\™Yœ˜[YS[™]ÚY]Ú\™Yœ˜[YS[™]ÚY\Ë™›]ÚY[™Ï]™›]ÚY[™Ë\ß_XÛ\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\Ú[X™\X]\šX[HL\Ë\OW“Y\Ú[X™\X]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\Ë›X\[[\Ë›YÚX\[[\Ë›YÚX\[[œÚ]OLK\Ë˜[ÓX\[[\Ë˜[ÓX\[[œÚ]OLK\Ë™[Z\ÜÚ]™O[™]ÈÚJ
K\Ë™[Z\ÜÚ]™R[[œÚ]OLK\Ë™[Z\ÜÚ]™SX\[[\Ë˜[\X\[[\Ë˜[\ØØ[OLK\Ë››Ü›X[X\[[\Ë››Ü›X[X\\OL\Ë››Ü›X[ØØ[O[™]ÈYJKJK\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\ËœÜXÝ[\“X\[[\Ë˜[SX\[[\Ë™[“X\[[\Ë˜ÛÛXš[™OZ\Ëœ™Y›XÝ]š]OLK\Ëœ™Yœ˜XÝ[Û”˜][ÏKŽN\ËÚ\™Yœ˜[YOHLK\ËÚ\™Yœ˜[YS[™]ÚYLK\ËÚ\™Yœ˜[YS[™XØ\Wœ›Ý[™‹\ËÚ\™Yœ˜[YS[™Z›Ú[Wœ›Ý[™‹\Ë™›]ÚY[™ÏHLK\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë›X\]›X\\Ë›YÚX\]›YÚX\\Ë›YÚX\[[œÚ]O]›YÚX\[[œÚ]K\Ë˜[ÓX\]˜[ÓX\\Ë˜[ÓX\[[œÚ]O]˜[ÓX\[[œÚ]K\Ë™[Z\ÜÚ]™K˜ÛÜJ™[Z\ÜÚ]™JK\Ë™[Z\ÜÚ]™SX\]™[Z\ÜÚ]™SX\\Ë™[Z\ÜÚ]™R[[œÚ]O]™[Z\ÜÚ]™R[[œÚ]K\Ë˜[\X\]˜[\X\\Ë˜[\ØØ[O]˜[\ØØ[K\Ë››Ü›X[X\]››Ü›X[X\\Ë››Ü›X[X\\O]››Ü›X[X\\K\Ë››Ü›X[ØØ[K˜ÛÜJ››Ü›X[ØØ[JK\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\ËœÜXÝ[\“X\]œÜXÝ[\“X\\Ë˜[SX\]˜[SX\\Ë™[“X\]™[“X\\Ë˜ÛÛXš[™O]˜ÛÛXš[™K\Ëœ™Y›XÝ]š]O]œ™Y›XÝ]š]K\Ëœ™Yœ˜XÝ[Û”˜][Ï]œ™Yœ˜XÝ[Û”˜][Ë\ËÚ\™Yœ˜[YO]Ú\™Yœ˜[YK\ËÚ\™Yœ˜[YS[™]ÚY]Ú\™Yœ˜[YS[™]ÚY\ËÚ\™Yœ˜[YS[™XØ\]Ú\™Yœ˜[YS[™XØ\\ËÚ\™Yœ˜[YS[™Z›Ú[]Ú\™Yœ˜[YS[™Z›Ú[‹\Ë™›]ÚY[™Ï]™›]ÚY[™Ë\Ë™›ÙÏ]™›ÙË\ß_XÛ\ÜÈZ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓY\ÚX]Ø\X]\šX[HL\Ë™Yš[™\Ï^ÓPUÐT——ŸK\Ë\OW“Y\ÚX]Ø\X]\šX[‹\Ë˜ÛÛÜ[™]ÈÚJMÍÍÌŒMJK\Ë›X]Ø\[[\Ë›X\[[\Ë˜[\X\[[\Ë˜[\ØØ[OLK\Ë››Ü›X[X\[[\Ë››Ü›X[X\\OL\Ë››Ü›X[ØØ[O[™]ÈYJKJK\Ë™\ÜXÙ[Y[X\[[\Ë™\ÜXÙ[Y[ØØ[OLK\Ë™\ÜXÙ[Y[šX\ÏL\Ë˜[SX\[[\Ë™›]ÚY[™ÏHLK\Ë™›ÙÏHL\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë™Yš[™\Ï^ÓPUÐT——ŸK\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë›X]Ø\]›X]Ø\\Ë›X\]›X\\Ë˜[\X\]˜[\X\\Ë˜[\ØØ[O]˜[\ØØ[K\Ë››Ü›X[X\]››Ü›X[X\\Ë››Ü›X[X\\O]››Ü›X[X\\K\Ë››Ü›X[ØØ[K˜ÛÜJ››Ü›X[ØØ[JK\Ë™\ÜXÙ[Y[X\]™\ÜXÙ[Y[X\\Ë™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[K\Ë™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\Ë\Ë˜[SX\]˜[SX\\Ë™›]ÚY[™Ï]™›]ÚY[™Ë\Ë™›ÙÏ]™›ÙË\ß_XÛ\ÜÈ^[™È›ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Ó[™Q\ÚYX]\šX[HL\Ë\OW“[™Q\ÚYX]\šX[‹\ËœØØ[OLK\Ë™\ÚÚ^™OLË\Ë™Ø\Ú^™OLK\ËœÙ]˜[Y\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËœØØ[O]œØØ[K\Ë™\ÚÚ^™O]™\ÚÚ^™K\Ë™Ø\Ú^™O]™Ø\Ú^™K\ß_Y[˜Ý[Ûˆ
KŠ^Ü™]\›ˆ][‰‰˜ÛÛœÝXÝÜOOYOÝ—›[X™\—O]\[ÙˆK–UT×ÔT—ÑSSQS•Û™]ÈJ
N\œ˜^Kœ›ÝÝ\KœÛXÙK˜Ø[

_Y[˜Ý[ÛˆZ

^Ü™]\›ˆ\œ˜^PY™™\‹š\ÕšY]Ê
I‰ˆJ[œÝ[˜Ù[Ùˆ]UšY]Ê_Y[˜Ý[Ûˆš

^ØÛÛœÝO]›[™Ý[™]È\œ˜^JJNÙ›ÜŠ]LÝOOYNÊÊÝ
[–ÝO]Ü™]\›ˆ‹œÛÜ

[˜Ý[ÛŠKŠ^Ü™]\›ˆÙWK]Û—_JJKŸY[˜Ý[ÛˆÚ
KŠ^ØÛÛœÝO]›[™Ý[™]È˜ÛÛœÝXÝÜŠJNÙ›ÜŠ]ÏLOLØHOOZNÊÊÜÊ^ØÛÛœÝO[–Ü×J™NÙ›ÜŠ]LÛˆOOYNÊÊÛŠ\–ØJÊ×O]ÚJÛ—_\™]\›ˆŸY[˜Ý[ÛˆÚ
K‹J^Û]LKÏ]ÌNÙ›ÜŠÝ›ÚYOO\É‰›ÚYOO\ÖÚWNÊ\Ï]ÜŠÊ×NÚYŠ›ÚYOO\Ê\™]\›ŽÛ]O\ÖÚWNÚYŠ›ÚYOOXJZYŠ\œ˜^Kš\Ð\œ˜^JJJYÞØO\ÖÚWK›ÚYOOXI‰ŠKœ\Ú
Ë[YJK‹œ\Ú˜\J‹JJKÏ]ÜŠÊ×_]Ú[J›ÚYOO\ÊNÙ[ÙHYŠ›ÚYOOXKÐ\œ˜^JYÞØO\ÖÚWK›ÚYOOXI‰ŠKœ\Ú
Ë[YJKKÐ\œ˜^J‹‹›[™Ý
JKÏ]ÜŠÊ×_]Ú[J›ÚYOO\ÊNÙ[ÙHÞØO\ÖÚWK›ÚYOOXI‰ŠKœ\Ú
Ë[YJK‹œ\Ú
JJKÏ]ÜŠÊ×_]Ú[J›ÚYOO\Ê_XÛÛœÝš^ØÛÛ™\\œ˜^Nœ\Õ\Y\œ˜^N›ZÙ]Ù^Yœ˜[YSÜ™\Ž™šÛÜY\œ˜^N™Ú›][’”ÓÓŽ—ÚÝX˜Û\™[˜Ý[ÛŠK‹KLÌ
^ØÛÛœÝÏ]˜ÛÛ™J
NÜË›˜[YOYNØÛÛœÝOV×NÙ›ÜŠ]LÝË˜XÚÜË›[™ÝÊÊÝ
^ØÛÛœÝO\Ë˜XÚÜÖÝKÏYK™Ù]˜[YTÚ^™J
KV×KÏV×NÙ›ÜŠ]LÝK[Y\Ë›[™ÝÊÊÝ
^ØÛÛœÝÏYK[Y\ÖÝJœŽÚYŠJÏŸÏZJJ^Ûœ\Ú
K[Y\ÖÝJNÙ›ÜŠ]LÛÎÊÊÛŠXËœ\Ú
K˜[Y\ÖÝ
›ÊÛ—J__LOO[›[™Ý	‰ŠK[Y\Ï\
K[Y\Ë˜ÛÛœÝXÝÜŠKK˜[Y\Ï\
ËK˜[Y\Ë˜ÛÛœÝXÝÜŠKKœ\Ú
JJ_\Ë˜XÚÜÏXNÛ]ÏLKÌÙ›ÜŠ]LÝË˜XÚÜË›[™ÝÊÊÝ
[ÏœË˜XÚÜÖÝK[Y\ÖÌI‰ŠÏ\Ë˜XÚÜÖÝK[Y\ÖÌJNÙ›ÜŠ]LÝË˜XÚÜË›[™ÝÊÊÝ
\Ë˜XÚÜÖÝKœÚY
LJ›ÊNÜ™]\›ˆËœ™\Ù]\˜][ÛŠ
KßKXZÙPÛ\Y]]™N™[˜Ý[ÛŠOL]OLÌ
^ÚOL	‰ŠOLÌ
NØÛÛœÝ[‹˜XÚÜË›[™ÝÏYKÚNÙ›ÜŠ]OLÙOŽÊÊÙJ^ØÛÛœÝO[‹˜XÚÜÖÙWKZK•˜[YU\S˜[YNÚYŠ˜›ÛÛOO\ŸœÝš[™×OO\ŠXÛÛ[YNØÛÛœÝO]˜XÚÜË™š[™

[˜Ý[ÛŠ
^Ü™]\›ˆ›˜[YOOOZK›˜[YI‰•˜[YU\S˜[YOOO\ŸJJNÚYŠ›ÚYOOXJXÛÛ[YNÛ]ÏLØÛÛœÝZK™Ù]˜[YTÚ^™J
NÚK˜Ü™X]R[\œÛ[š\Ò[\œÛ[˜XÝÜžSY]ÙÓÝXšXÔÜ[™I‰ŠÏ[ÌÊNÛ]ÏLØÛÛœÝXK™Ù]˜[YTÚ^™J
NØK˜Ü™X]R[\œÛ[š\Ò[\œÛ[˜XÝÜžSY]ÙÓÝXšXÔÜ[™I‰ŠÏZÌÊNØÛÛœÝOZK[Y\Ë›[™ÝLNÛ]ÚYŠÏZK[Y\ÖÌJ^ØÛÛœÝ[ËO[[ÎÙZK˜[Y\ËœÛXÙJJ_Y[ÙHYŠÏZK[Y\ÖÝWJ^ØÛÛœÝ]J›
ÛËO]
Û[ÎÙZK˜[Y\ËœÛXÙJJ_Y[Ù^ØÛÛœÝZK˜Ü™X]R[\œÛ[

KO[Ë[[ÎÝ™]˜[X]JÊK]œ™\Ý[Y™™\‹œÛXÙJKŠ_ZYŠœ]X]\›š[Û—OO\Š^Ê™]ÈÙJK™œ›ÛP\œ˜^J
K››Ü›X[^™J
K˜ÛÛšYØ]J
KÐ\œ˜^J
_XÛÛœÝXK[Y\Ë›[™ÝÙ›ÜŠ]LÝÊÊÝ
^ØÛÛœÝO]
š
ØÎÚYŠœ]X]\›š[Û—OO\ŠZÙK›][\T]X]\›š[ÛœÑ›]
K˜[Y\ËKK˜[Y\ËJNÙ[Ù^ØÛÛœÝZLŠ˜ÎÙ›ÜŠ]LÛÊÊÛŠXK˜[Y\ÖÙJÛ—KOYÛ—___\™]\›ˆ˜›[™[ÙOSÝ_NØÛ\ÜÈØÛÛœÝXÝÜŠK‹J^Ý\Ëœ\˜[Y]\”ÜÚ][ÛœÏ]\Ë—ØØXÚY[™^L\Ëœ™\Ý[Y™™\]›ÚYOOZOÚN›™]ÈK˜ÛÛœÝXÝÜŠŠK\ËœØ[\U˜[Y\ÏYK\Ë˜[YTÚ^™O[‹\ËœÙ][™ÜÏ[[\Ë‘Y˜][Ù][™Ü×Ï^ß_Y]˜[X]J
^ØÛÛœÝO]\Ëœ\˜[Y]\”ÜÚ][ÛœÎÛ]]\Ë—ØØXÚY[™^OYVÛ—KYVÛ‹LWNÝžÙNžÛ]ÎÛŽžÚNšYŠJJJ^Ù›ÜŠ]Ï[ŠÌŽÎÊ^ÚYŠ›ÚYOOZJ^ÚYŠŠXœ™XZÈNÜ™]\›ˆYK›[™Ý\Ë—ØØXÚY[™^[‹\Ë˜ÛÜTØ[\U˜[YWÊ‹LJ_ZYŠOO\ÊXœ™XZÎÚYŠZKOYVÊÊÛ—KJXœ™XZÈ_\ÏYK›[™ÝØœ™XZÈŸZYŠ\ŠXœ™XZÈÞØÛÛœÝOYVÌWNÝI‰ŠL‹XJNÙ›ÜŠ]Ï[‹LŽÎÊ^ÚYŠ›ÚYOO\Š\™]\›ˆ\Ë—ØØXÚY[™^L\Ë˜ÛÜTØ[\U˜[YWÊ
NÚYŠOO\ÊXœ™XZÎÚYŠO\‹YVËK[‹LWK\ŠXœ™XZÈ_\Ï[‹L_Y›ÜŠÛÎÊ^ØÛÛœÝO[ŠÜÏŒNÝVÚWOÜÏZN›ZJÌ_ZYŠOYVÛ—KYVÛ‹LWK›ÚYOO\Š\™]\›ˆ\Ë—ØØXÚY[™^L\Ë˜ÛÜTØ[\U˜[YWÊ
NÚYŠ›ÚYOOZJ\™]\›ˆYK›[™Ý\Ë—ØØXÚY[™^[‹\Ë˜ÛÜTØ[\U˜[YWÊ‹LJ_]\Ë—ØØXÚY[™^[‹\Ëš[\˜[Ú[™ÙYÊ‹‹J_\™]\›ˆ\Ëš[\œÛ]WÊ‹‹J_YÙ]Ù][™Ü×Ê
^Ü™]\›ˆ\ËœÙ][™Üß\Ë‘Y˜][Ù][™Ü×ßXÛÜTØ[\U˜[YWÊ
^ØÛÛœÝO]\Ëœ™\Ý[Y™™\‹]\ËœØ[\U˜[Y\ËO]\Ë˜[YTÚ^™K]
šNÙ›ÜŠ]LÝOOZNÊÊÝ
YVÝO[–ÜŠÝNÜ™]\›ˆ_Z[\œÛ]WÊ
^Ý›ÝÈ™]È\œ›ÜŠ˜Ø[ÈXœÝ˜XÝY]ÙŠ_Z[\˜[Ú[™ÙYÊ
^ß_XÛ\ÜÈZ^[™ÈØÛÛœÝXÝÜŠK‹J^ÜÝ\\ŠK‹JK\Ë—ÝÙZYÚ™]KL\Ë—ÛÙ™œÙ]™]KL\Ë—ÝÙZYÚ™^KL\Ë—ÛÙ™œÙ]™^KL\Ë‘Y˜][Ù][™Ü×Ï^Ù[™[™ÔÝ\’][™[™Ñ[™’]_Z[\˜[Ú[™ÙYÊKŠ^ØÛÛœÝO]\Ëœ\˜[Y]\”ÜÚ][ÛœÎÛ]]L‹Ï]
ÌKOZVÜ—KÏZVÜ×NÚYŠ›ÚYOOXJ\ÝÚ]Ú
\Ë™Ù]Ù][™Ü×Ê
K™[™[™ÔÝ\
^ØØ\ÙH]œ]OLŠ™K[ŽØœ™XZÎØØ\ÙHœZK›[™ÝL‹OYJÚVÜ—KZVÜŠÌWNØœ™XZÎÙY˜][œ]O[ŸZYŠ›ÚYOO[Ê\ÝÚ]Ú
\Ë™Ù]Ù][™Ü×Ê
K™[™[™Ñ[™
^ØØ\ÙH]œÏ]ÏLŠ›‹YNØœ™XZÎØØ\ÙHœÏLKÏ[ŠÚVÌWKZVÌNØœ™XZÎÙY˜][œÏ]LKÏY_XÛÛœÝKJŠ‹YJKÏ]\Ë˜[YTÚ^™NÝ\Ë—ÝÙZYÚ™][ÊKXJK\Ë—ÝÙZYÚ™^[ÊË[ŠK\Ë—ÛÙ™œÙ]™]\Š˜Ë\Ë—ÛÙ™œÙ]™^\Ê˜ßZ[\œÛ]WÊK‹J^ØÛÛœÝ]\Ëœ™\Ý[Y™™\‹Ï]\ËœØ[\U˜[Y\ËO]\Ë˜[YTÚ^™KÏ]
˜K[ËXKÏ]\Ë—ÛÙ™œÙ]™]‹]\Ë—ÛÙ™œÙ]™^O]\Ë—ÝÙZYÚ™]‹]\Ë—ÝÙZYÚ™^J‹YJKÊKYJKO\
œ[JœÏK]J™ŠÌŠJ›K]JœÏJJÝJJ™ŠÊLKKLŠJJ›JÊKJÝJJœ
ÌKJLKY
J™ŠÊKJÙ
J›JËJœY
™‹Y
›NÙ›ÜŠ]LÝOOXNÊÊÝ
\–ÝOYÊœÖØÊÝJ×ÊœÖÛ
ÝJÝŠœÖÛÊÝJÞ
œÖÚ
ÝNÜ™]\›ˆŸ_XÛ\ÜÈZ^[™ÈØÛÛœÝXÝÜŠK‹J^ÜÝ\\ŠK‹J_Z[\œÛ]WÊK‹J^ØÛÛœÝ]\Ëœ™\Ý[Y™™\‹Ï]\ËœØ[\U˜[Y\ËO]\Ë˜[YTÚ^™KÏ]
˜K[ËXKÏJ‹YJKÊKYJKLKXÎÙ›ÜŠ]LÝOOXNÊÊÝ
\–ÝO\ÖÛ
ÝJš
ÜÖÛÊÝJ˜ÎÜ™]\›ˆŸ_XÛ\ÜÈÚ^[™ÈØÛÛœÝXÝÜŠK‹J^ÜÝ\\ŠK‹J_Z[\œÛ]WÊ
^Ü™]\›ˆ\Ë˜ÛÜTØ[\U˜[YWÊLJ__XÛ\ÜÈšØÛÛœÝXÝÜŠK‹J^ÚYŠ›ÚYOO]
]›ÝÈ™]È\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ˜XÚÈ˜[YH\È[™Yš[™YŠNÚYŠ›ÚYOOY_OOYK›[™Ý
]›ÝÈ™]È\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ›ÈÙ^Yœ˜[Y\È[ˆ˜XÚÈ˜[YYŠÝ
NÝ\Ë›˜[YO]\Ë[Y\Ï\
K\Ë•[YPY™™\•\JK\Ë˜[Y\Ï\
‹\Ë•˜[YPY™™\•\JK\ËœÙ][\œÛ][ÛŠ_\Ë‘Y˜][[\œÛ][ÛŠ_\Ý]XÈÒ”ÓÓŠ
^ØÛÛœÝO]˜ÛÛœÝXÝÜŽÛ]ŽÚYŠKÒ”ÓÓˆOO]\ËÒ”ÓÓŠ[YKÒ”ÓÓŠ
NÙ[Ù^Û^Û˜[YN›˜[YK[Y\Îœ
[Y\Ë\œ˜^JK˜[Y\Îœ
˜[Y\Ë\œ˜^J_NØÛÛœÝO]™Ù][\œÛ][ÛŠ
NÙHOO]‘Y˜][[\œÛ][Û‰‰Š‹š[\œÛ][ÛYJ_\™]\›ˆ‹\O]•˜[YU\S˜[YKŸR[\œÛ[˜XÝÜžSY]Ù\ØÜ™]J
^Ü™]\›ˆ™]ÈÚ
\Ë[Y\Ë\Ë˜[Y\Ë\Ë™Ù]˜[YTÚ^™J
K
_R[\œÛ[˜XÝÜžSY]Ù[™X\Š
^Ü™]\›ˆ™]ÈZ
\Ë[Y\Ë\Ë˜[Y\Ë\Ë™Ù]˜[YTÚ^™J
K
_R[\œÛ[˜XÝÜžSY]ÙÛ[ÛÝ

^Ü™]\›ˆ™]ÈZ
\Ë[Y\Ë\Ë˜[Y\Ë\Ë™Ù]˜[YTÚ^™J
K
_\Ù][\œÛ][ÛŠ
^Û]NÜÝÚ]Ú

^ØØ\ÙHÝ™O]\Ë’[\œÛ[˜XÝÜžSY]Ù\ØÜ™]NØœ™XZÎØØ\ÙH™O]\Ë’[\œÛ[˜XÝÜžSY]Ù[™X\ŽØœ™XZÎØØ\ÙH™O]\Ë’[\œÛ[˜XÝÜžSY]ÙÛ[ÛÝZYŠ›ÚYOOYJ^ØÛÛœÝOW[œÝ\ÜY[\œÛ][Ûˆ›ÜˆŠÝ\Ë•˜[YU\S˜[YJ×ˆÙ^Yœ˜[YH˜XÚÈ˜[YYŠÝ\Ë›˜[YNÚYŠ›ÚYOO]\Ë˜Ü™X]R[\œÛ[
^ÚYŠOO]\Ë‘Y˜][[\œÛ][ÛŠ]›ÝÈ™]È\œ›ÜŠJNÝ\ËœÙ][\œÛ][ÛŠ\Ë‘Y˜][[\œÛ][ÛŠ_\™]\›ˆÛÛœÛÛKØ\›Š•‘QK’Ù^Yœ˜[YU˜XÚÎ—‹JK\ß\™]\›ˆ\Ë˜Ü™X]R[\œÛ[YK\ßYÙ][\œÛ][ÛŠ
^ÜÝÚ]Ú
\Ë˜Ü™X]R[\œÛ[
^ØØ\ÙH\Ë’[\œÛ[˜XÝÜžSY]Ù\ØÜ™]Nœ™]\›ˆÝØØ\ÙH\Ë’[\œÛ[˜XÝÜžSY]Ù[™X\Žœ™]\›ˆØØ\ÙH\Ë’[\œÛ[˜XÝÜžSY]ÙÛ[ÛÝœ™]\›ˆ_YÙ]˜[YTÚ^™J
^Ü™]\›ˆ\Ë˜[Y\Ë›[™ÝÝ\Ë[Y\Ë›[™Ý\ÚY

^ÚYŠOO]
^ØÛÛœÝO]\Ë[Y\ÎÙ›ÜŠ]LOYK›[™ÝÛˆOOZNÊÊÛŠYVÛ—JÏ]\™]\›ˆ\ß\ØØ[J
^ÚYŠHOO]
^ØÛÛœÝO]\Ë[Y\ÎÙ›ÜŠ]LOYK›[™ÝÛˆOOZNÊÊÛŠYVÛ—J]\™]\›ˆ\ß]š[JJ^ØÛÛœÝ]\Ë[Y\ËO[‹›[™ÝÛ]LÏZKLNÙ›ÜŠÜˆOOZI‰›–Ü—OÊJÊÜŽÙ›ÜŠËLHOO\É‰›–Ü×O™NÊKK\ÎÚYŠ
ÊÜËOO\ŸÈOOZJ^Ü\É‰ŠÏSX]›X^
ËJK\ËLJNØÛÛœÝ]\Ë™Ù]˜[YTÚ^™J
NÝ\Ë[Y\Ï[‹œÛXÙJ‹ÊK\Ë˜[Y\Ï]\Ë˜[Y\ËœÛXÙJŠÊ
_\™]\›ˆ\ß]˜[Y]J
^Û]HLØÛÛœÝO]\Ë™Ù]˜[YTÚ^™J
NÙKSX]™›ÛÜŠJHOL	‰ŠÛÛœÛÛK™\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ[˜[Y˜[YHÚ^™H[ˆ˜XÚË—‹\ÊKHLJNØÛÛœÝ]\Ë[Y\ËO]\Ë˜[Y\Ë[‹›[™ÝÌOO\‰‰ŠÛÛœÛÛK™\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ˜XÚÈ\È[\K—‹\ÊKHLJNÛ]Ï[[Ù›ÜŠ]OLÙHOO\ŽÙJÊÊ^ØÛÛœÝO[–ÙWNÚYŠ›[X™\—O]\[ÙˆI‰š\Ó˜SŠJJ^ØÛÛœÛÛK™\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ[YH\È›ÝH˜[Y[X™\‹—‹\ËKJKHLNØœ™XZßZYŠ[OO\É‰œÏšJ^ØÛÛœÛÛK™\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆÝ]ÙˆÜ™\ˆÙ^\Ë—‹\ËKKÊKHLNØœ™XZß\ÏZ_ZYŠ›ÚYOOZI‰›Z
JJY›ÜŠ]OLZK›[™ÝÙHOO[ŽÊÊÙJ^ØÛÛœÝZVÙWNÚYŠ\Ó˜SŠŠJ^ØÛÛœÛÛK™\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ˜[YH\È›ÝH˜[Y[X™\‹—‹\ËKŠKHLNØœ™XZß_\™]\›ˆ[Ü[Z^™J
^ØÛÛœÝ]\Ë[Y\ËœÛXÙJ
KO]\Ë˜[Y\ËœÛXÙJ
K]\Ë™Ù]˜[YTÚ^™J
KO]\Ë™Ù][\œÛ][ÛŠ
OOOT]›[™ÝLNÛ]ÏLNÙ›ÜŠ]OLNØOŽÊÊØJ^Û]HLNØÛÛœÝÏ]ØWNÚYŠÈOO]ØJÌWI‰ŠHOOX_ÈOO]ÌJJZYŠJ\HLÙ[Ù^ØÛÛœÝXJ›‹O][‹Ï]
ÛŽÙ›ÜŠ]OLØHOO[ŽÊÊØJ^ØÛÛœÝYVÝ
ØWNÚYŠˆOOYVÚJØW_ˆOOYVÜÊØWJ^ÜHLØœ™XZß__ZYŠŠ^ÚYŠHOO\Ê^ÝÜ×O]ØWNØÛÛœÝOXJ›‹\Ê›ŽÙ›ÜŠ]LÝOO[ŽÊÊÝ
YVÜŠÝOYVÚJÝ_JÊÜß_ZYŠŒ
^ÝÜ×O]Ü—NÙ›ÜŠ]\Š›‹O\Ê›‹OLØHOO[ŽÊÊØJYVÚJØWOYVÝ
ØWNÊÊÜß\™]\›ˆÈOO]›[™ÝÊ\Ë[Y\Ï]œÛXÙJÊK\Ë˜[Y\ÏYKœÛXÙJÊ›ŠJNŠ\Ë[Y\Ï]\Ë˜[Y\ÏYJK\ßXÛÛ™J
^ØÛÛœÝ]\Ë[Y\ËœÛXÙJ
KO]\Ë˜[Y\ËœÛXÙJ
K[™]Ê\Ë˜ÛÛœÝXÝÜŠJ\Ë›˜[YKJNÜ™]\›ˆ‹˜Ü™X]R[\œÛ[]\Ë˜Ü™X]R[\œÛ[Ÿ_Xšœ›ÝÝ\K•[YPY™™\•\OQ›Ø]Ì\œ˜^Kšœ›ÝÝ\K•˜[YPY™™\•\OQ›Ø]Ì\œ˜^Kšœ›ÝÝ\K‘Y˜][[\œÛ][ÛSØÛ\ÜÈ^[™ÈšßUœ›ÝÝ\K•˜[YU\S˜[YOW˜›ÛÛ‹œ›ÝÝ\K•˜[YPY™™\•\OP\œ˜^Kœ›ÝÝ\K‘Y˜][[\œÛ][ÛPÝœ›ÝÝ\K’[\œÛ[˜XÝÜžSY]Ù[™X\]›ÚYœ›ÝÝ\K’[\œÛ[˜XÝÜžSY]ÙÛ[ÛÝ]›ÚYØÛ\ÜÈZ^[™ÈšßQZœ›ÝÝ\K•˜[YU\S˜[YOW˜ÛÛÜ—ŽØÛ\ÜÈÚ^[™Èšß]Úœ›ÝÝ\K•˜[YU\S˜[YOW›[X™\—ŽØÛ\ÜÈZ^[™ÈØÛÛœÝXÝÜŠK‹J^ÜÝ\\ŠK‹J_Z[\œÛ]WÊK‹J^ØÛÛœÝ]\Ëœ™\Ý[Y™™\‹Ï]\ËœØ[\U˜[Y\ËO]\Ë˜[YTÚ^™KÏJ‹YJKÊKYJNÛ]]
˜NÙ›ÜŠ][
ØNÛOO]Û
ÏM
ZÙKœÛ\œ›]
‹ËXKËÊNÜ™]\›ˆŸ_XÛ\ÜÈš^[™ÈšÒ[\œÛ[˜XÝÜžSY]Ù[™X\Š
^Ü™]\›ˆ™]ÈZ
\Ë[Y\Ë\Ë˜[Y\Ë\Ë™Ù]˜[YTÚ^™J
K
__Tšœ›ÝÝ\K•˜[YU\S˜[YOWœ]X]\›š[Û—‹šœ›ÝÝ\K‘Y˜][[\œÛ][ÛSšœ›ÝÝ\K’[\œÛ[˜XÝÜžSY]ÙÛ[ÛÝ]›ÚYØÛ\ÜÈÚ^[™ÈšßPÚœ›ÝÝ\K•˜[YU\S˜[YOWœÝš[™×‹Úœ›ÝÝ\K•˜[YPY™™\•\OP\œ˜^KÚœ›ÝÝ\K‘Y˜][[\œÛ][ÛPÝÚœ›ÝÝ\K’[\œÛ[˜XÝÜžSY]Ù[™X\]›ÚYÚœ›ÝÝ\K’[\œÛ[˜XÝÜžSY]ÙÛ[ÛÝ]›ÚYØÛ\ÜÈ^[™ÈšßSœ›ÝÝ\K•˜[YU\S˜[YOW™XÝÜ—ŽØÛ\ÜÈØÛÛœÝXÝÜŠOKLK‹OLL
^Ý\Ë›˜[YO]\Ë˜XÚÜÏ[‹\Ë™\˜][ÛYK\Ë˜›[™[ÙOZK\Ë]ZY\ÙJ
K\Ë™\˜][Û	‰\Ëœ™\Ù]\˜][ÛŠ
_\Ý]XÈ\œÙJ
^ØÛÛœÝOV×K]˜XÚÜËOLKÊ™œßJNÙ›ÜŠ]L[‹›[™ÝÝOO\ŽÊÊÝ
YKœ\Ú
Z
–ÝJKœØØ[JJJNØÛÛœÝ[™]È\Ê›˜[YK™\˜][Û‹K˜›[™[ÙJNÜ™]\›ˆ‹]ZY]]ZYŸ\Ý]XÈÒ”ÓÓŠ
^ØÛÛœÝOV×K]˜XÚÜËO^Û˜[YN›˜[YK\˜][ÛŽ™\˜][Û‹˜XÚÜÎ™K]ZY]ZY›[™[ÙN˜›[™[Ù_NÙ›ÜŠ]LO[‹›[™ÝÝOOZNÊÊÝ
YKœ\Ú
šÒ”ÓÓŠ–ÝJJNÜ™]\›ˆ_\Ý]XÈÜ™X]Qœ›ÛS[Üœ\™Ù]Ù\]Y[˜ÙJK‹J^ØÛÛœÝYK›[™ÝÏV×NÙ›ÜŠ]LÝŽÝ
ÊÊ^Û]OV×KÏV×NØKœ\Ú


Ü‹LJI\‹

ÌJI\ŠKËœ\Ú
K
NØÛÛœÝYš
JNØOYÚ
KK
KÏYÚ
ËK
K_OOXVÌ_
Kœ\Ú
ŠKËœ\Ú
ÖÌJJKËœ\Ú
™]ÈÚ
‹›[Üœ\™Ù][™›Y[˜Ù\Ö×ŠÙVÝK›˜[YJ×—W‹KÊKœØØ[JKÛŠJ_\™]\›ˆ™]È\ÊLKÊ_\Ý]XÈš[™žS˜[YJJ^Û]]ÚYŠP\œ˜^Kš\Ð\œ˜^J
J^ØÛÛœÝO]ÛYK™Ù[ÛY]žI‰™K™Ù[ÛY]žK˜[š[X][ÛœßK˜[š[X][ÛœßY›ÜŠ]LÝ‹›[™ÝÝ
ÊÊZYŠ–ÝK›˜[YOOOYJ\™]\›ˆ–ÝNÜ™]\›ˆ[\Ý]XÈÜ™X]PÛ\Ñœ›ÛS[Üœ\™Ù]Ù\]Y[˜Ù\ÊKŠ^ØÛÛœÝO^ßKK×Š×ËWJÊJ×JÊIÎÙ›ÜŠ]OL]›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]ÙWKÏ[‹›˜[YK›X]Ú
ŠNÚYŠÉ‰œË›[™ÝŒJ^ØÛÛœÝ\ÖÌWNÛ]OZVÝNÙ_
VÝOYOV×JKKœ\Ú
Š__XÛÛœÝÏV×NÙ›ÜŠÛÛœÝ[ˆJ\Ëœ\Ú
\ËÜ™X]Qœ›ÛS[Üœ\™Ù]Ù\]Y[˜ÙJVÝKKŠJNÜ™]\›ˆß\Ý]XÈ\œÙP[š[X][ÛŠJ^ÚYŠ]
\™]\›ˆÛÛœÛÛK™\œ›ÜŠ•‘QK[š[X][ÛÛ\ˆ›È[š[X][Ûˆ[ˆ”ÓÓ“ØY\ˆ]K—ŠK[ØÛÛœÝY[˜Ý[ÛŠK‹KŠ^ÚYŠOO[‹›[™Ý
^ØÛÛœÝÏV×KOV×N×Ú
‹ËKJKOO\Ë›[™Ý	‰œ‹œ\Ú
™]È
KËJJ__KOV×K]›˜[Y_™Y˜][‹Ï]™œßÌO]˜›[™[ÙNÛ]Ï]›[™ÝLNØÛÛœÝ]šY\˜\˜Ú_×NÙ›ÜŠ]LÝ›[™ÝÝ
ÊÊ^ØÛÛœÝ[ÝKšÙ^\ÎÚYŠ‰‰ŒOO\‹›[™Ý
ZYŠ–ÌK›[Üœ\™Ù]Ê^ØÛÛœÝ^ßNÛ]NÙ›ÜŠOLÙO‹›[™ÝÙJÊÊZYŠ–ÙWK›[Üœ\™Ù]ÊY›ÜŠ]LÛ–ÙWK›[Üœ\™Ù]Ë›[™ÝÛŠÊÊ]Ü–ÙWK›[Üœ\™Ù]ÖÛ—WOKLNÙ›ÜŠÛÛœÝˆ[ˆ
^ØÛÛœÝV×KÏV×NÙ›ÜŠ]OLÚHOO\–ÙWK›[Üœ\™Ù]Ë›[™ÝÊÊÚJ^ØÛÛœÝO\–ÙWNÝœ\Ú
K[YJKËœ\Ú
K›[Üœ\™Ù]OO[ÌNŒ
_ZKœ\Ú
™]ÈÚ
‹›[Üœ\™Ù][™›Y[˜ÙV×ŠÛŠ×—W‹ÊJ_[Ï]›[™Ý
œßY[Ù^ØÛÛœÝÏW‹˜›Û™\Ö×ŠÙVÝK›˜[YJ×—WŽÛŠÊ×‹œÜÚ][Û—‹‹œÜ×‹JKŠšÊ×‹œ]X]\›š[Û—‹‹œ›Ý‹JKŠÊ×‹œØØ[W‹‹œØÛ‹J__ZYŠOOZK›[™Ý
\™]\›ˆ[Ü™]\›ˆ™]È\Ê‹ËKJ_\™\Ù]\˜][ÛŠ
^Û]LÙ›ÜŠ]OL]\Ë˜XÚÜË›[™ÝÙHOO[ŽÊÊÙJ^ØÛÛœÝ]\Ë˜XÚÜÖÙWNÝSX]›X^
‹[Y\ÖÛ‹[Y\Ë›[™ÝLWJ_\™]\›ˆ\Ë™\˜][Û]\ß]š[J
^Ù›ÜŠ]LÝ\Ë˜XÚÜË›[™ÝÝ
ÊÊ]\Ë˜XÚÜÖÝKš[J\Ë™\˜][ÛŠNÜ™]\›ˆ\ß]˜[Y]J
^Û]HLÙ›ÜŠ]OLÙO\Ë˜XÚÜË›[™ÝÙJÊÊ]]	‰\Ë˜XÚÜÖÙWK˜[Y]J
NÜ™]\›ˆ[Ü[Z^™J
^Ù›ÜŠ]LÝ\Ë˜XÚÜË›[™ÝÝ
ÊÊ]\Ë˜XÚÜÖÝK›Ü[Z^™J
NÜ™]\›ˆ\ßXÛÛ™J
^ØÛÛœÝV×NÙ›ÜŠ]OLÙO\Ë˜XÚÜË›[™ÝÙJÊÊ]œ\Ú
\Ë˜XÚÜÖÙWK˜ÛÛ™J
JNÜ™]\›ˆ™]È\Ë˜ÛÛœÝXÝÜŠ\Ë›˜[YK\Ë™\˜][Û‹\Ë˜›[™[ÙJ_]Ò”ÓÓŠ
^Ü™]\›ˆ\Ë˜ÛÛœÝXÝÜ‹Ò”ÓÓŠ\Ê__Y[˜Ý[ÛˆZ

^ÚYŠ›ÚYOO]\J]›ÝÈ™]È\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ˜XÚÈ\H[™Yš[™YØ[ˆ›Ý\œÙWŠNØÛÛœÝOY[˜Ý[ÛŠ
^ÜÝÚ]Ú
ÓÝÙ\Ø\ÙJ
J^ØØ\ÙWœØØ[\—Ž˜Ø\ÙW™ÝX›WŽ˜Ø\ÙW™›Ø]Ž˜Ø\ÙW›[X™\—Ž˜Ø\ÙWš[YÙ\—Žœ™]\›ˆÚØØ\ÙW™XÝÜ—Ž˜Ø\ÙW™XÝÜŒ—Ž˜Ø\ÙW™XÝÜŒ×Ž˜Ø\ÙW™XÝÜŽœ™]\›ˆØØ\ÙW˜ÛÛÜ—Žœ™]\›ˆZØØ\ÙWœ]X]\›š[Û—Žœ™]\›ˆšØØ\ÙW˜›ÛÛŽ˜Ø\ÙW˜›ÛÛX[—Žœ™]\›ˆØØ\ÙWœÝš[™×Žœ™]\›ˆÚ]›ÝÈ™]È\œ›ÜŠ•‘QK’Ù^Yœ˜[YU˜XÚÎˆ[œÝ\ÜY\S˜[YNˆŠÝ
_J\JNÚYŠ›ÚYOO][Y\Ê^ØÛÛœÝOV×KV×N×Ú
šÙ^\ËK‹˜[YWŠK[Y\ÏYK˜[Y\Ï[Ÿ\™]\›ˆ›ÚYOOYKœ\œÙOÙKœ\œÙJ
N›™]ÈJ›˜[YK[Y\Ë˜[Y\Ëš[\œÛ][ÛŠ_XÛÛœÝZ^Ù[˜X›YˆLKš[\ÎžßKY™[˜Ý[ÛŠJ^ÈLHOO]\Ë™[˜X›Y	‰Š\Ë™š[\ÖÝOYJ_KÙ]™[˜Ý[ÛŠ
^ÚYŠLHOO]\Ë™[˜X›Y
\™]\›ˆ\Ë™š[\ÖÝ_K™[[Ý™N™[˜Ý[ÛŠ
^Ù[]H\Ë™š[\ÖÝ_KÛX\Ž™[˜Ý[ÛŠ
^Ý\Ë™š[\Ï^ß__NØÛ\ÜÈØÛÛœÝXÝÜŠKŠ^ØÛÛœÝO]\ÎÛ]‹ÏHLKOLÏLØÛÛœÝV×NÝ\Ë›Û”Ý\]›ÚY\Ë›Û“ØY]\Ë›Û”›ÙÜ™\ÜÏYK\Ë›Û‘\œ›Ü[‹\Ëš][TÝ\Y[˜Ý[ÛŠ
^ÛÊÊËLOOO\É‰›ÚYOOZK›Û”Ý\	‰šK›Û”Ý\
KÊKÏHLK\Ëš][Q[™Y[˜Ý[ÛŠ
^ØJÊË›ÚYOOZK›Û”›ÙÜ™\ÜÉ‰šK›Û”›ÙÜ™\ÜÊKÊKOOO[É‰ŠÏHLK›ÚYOOZK›Û“ØY	‰šK›Û“ØY

J_K\Ëš][Q\œ›ÜY[˜Ý[ÛŠ
^Ý›ÚYOOZK›Û‘\œ›Ü‰‰šK›Û‘\œ›ÜŠ
_K\Ëœ™\ÛÛ™UT“Y[˜Ý[ÛŠ
^Ü™]\›ˆÜŠ
NK\ËœÙ]T“[ÙYšY\Y[˜Ý[ÛŠ
^Ü™]\›ˆ]\ßK\Ë˜Y[™\Y[˜Ý[ÛŠJ^Ü™]\›ˆœ\Ú
JK\ßK\Ëœ™[[Ý™R[™\Y[˜Ý[ÛŠ
^ØÛÛœÝO[š[™^ÙŠ
NÜ™]\›‹LHOOYI‰›œÜXÙJKŠK\ßK\Ë™Ù][™\Y[˜Ý[ÛŠ
^Ù›ÜŠ]OL[›[™ÝÙOŽÙJÏLŠ^ØÛÛœÝ[ÙWKO[ÙJÌWNÚYŠ‹™ÛØ˜[	‰Š‹›\Ý[™^L
K‹\Ý

J\™]\›ˆ_\™]\›ˆ[__XÛÛœÝš[™]ÈØÛ\ÜÈÚØÛÛœÝXÝÜŠ
^Ý\Ë›X[˜YÙ\]›ÚYOO]Ý“š\Ë˜Ü›ÜÜÓÜšYÚ[W˜[›Ûž[[Ý\×‹\ËÚ]Ü™Y[X[ÏHLK\Ëœ]W—‹\Ëœ™\ÛÝ\˜ÙT]W—‹\Ëœ™\]Y\ÝXY\^ß_[ØY

^ß[ØY\Þ[˜ÊJ^ØÛÛœÝ]\ÎÜ™]\›ˆ™]È›ÛZ\ÙJ
[˜Ý[ÛŠKŠ^Û‹›ØY
KKŠ_JJ_\\œÙJ
^ß\Ù]Ü›ÜÜÓÜšYÚ[Š
^Ü™]\›ˆ\Ë˜Ü›ÜÜÓÜšYÚ[]\ß\Ù]Ú]Ü™Y[X[Ê
^Ü™]\›ˆ\ËÚ]Ü™Y[X[Ï]\ß\Ù]]

^Ü™]\›ˆ\Ëœ]]\ß\Ù]™\ÛÝ\˜ÙT]

^Ü™]\›ˆ\Ëœ™\ÛÝ\˜ÙT]]\ß\Ù]™\]Y\ÝXY\Š
^Ü™]\›ˆ\Ëœ™\]Y\ÝXY\]\ß_SÚ‘QUSÓPUT’PSÓSQOW—×ÑQUSŽØÛÛœÝš^ßNØÛ\ÜÈš^[™È\œ›ÜžØÛÛœÝXÝÜŠJ^ÜÝ\\Š
K\Ëœ™\ÜÛœÙOY__XÛ\ÜÈš^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^Ý›ÚYOO]	‰ŠW—ŠK›ÚYOO]\Ëœ]	‰Š]\Ëœ]
Ý
K]\Ë›X[˜YÙ\‹œ™\ÛÛ™UT“

NØÛÛœÝUZ™Ù]

NÚYŠ›ÚYOO\Š\™]\›ˆ\Ë›X[˜YÙ\‹š][TÝ\

KÙ][Y[Ý]



OOžÙI‰™JŠK\Ë›X[˜YÙ\‹š][Q[™

_JK
KŽÚYŠ›ÚYOOQšÝJ\™]\›ˆ›ÚYšÝKœ\Ú
ÛÛ“ØY™KÛ”›ÙÜ™\ÜÎ›‹Û‘\œ›ÜŽš_JNÑšÝOV×KšÝKœ\Ú
ÛÛ“ØY™KÛ”›ÙÜ™\ÜÎ›‹Û‘\œ›ÜŽš_JNØÛÛœÝÏ[™]È™\]Y\Ý
ÚXY\œÎ›™]ÈXY\œÊ\Ëœ™\]Y\ÝXY\ŠKÜ™Y[X[Î\ËÚ]Ü™Y[X[Ï×š[˜ÛYWŽ—œØ[YK[ÜšYÚ[—ŸJKO]\Ë›Z[YU\KÏ]\Ëœ™\ÜÛœÙU\NÙ™]Ú
ÊK[Š
OOžÚYŠŒOOYKœÝ]\ßOOYKœÝ]\Ê^ÚYŠOOYKœÝ]\É‰˜ÛÛœÛÛKØ\›Š•‘QK‘š[SØY\ŽˆÝ]\È™XÙZ]™Y—ŠK[™Yš[™YO]\[Ùˆ™XYX›TÝ™X[_›ÚYOOYK˜›Ù_›ÚYOOYK˜›ÙK™Ù]™XY\Š\™]\›ˆNØÛÛœÝQšÝKOYK˜›ÙK™Ù]™XY\Š
KYKšXY\œË™Ù]
ÛÛ[S[™ÝŠ_KšXY\œË™Ù]
–Qš[KTÚ^™WŠKÏ\Ü\œÙR[
ŠNŒOLOO\ÎÛ]ÏLØÛÛœÝ[™]È™XYX›TÝ™X[JÜÝ\

^ÈY[˜Ý[ÛˆJ
^ÚKœ™XY

K[Š

ÙÛ™NšK˜[YNœŸJOOžÚYŠJ]˜ÛÜÙJ
NÙ[Ù^ÛÊÏ\‹˜ž]S[™ÝØÛÛœÝO[™]È›ÙÜ™\ÜÑ]™[
œ›ÙÜ™\Ü×‹Û[™ÝÛÛ\]X›N˜KØYY›ËÝ[œßJNÙ›ÜŠ]LO[‹›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO[–ÝNÙK›Û”›ÙÜ™\ÜÉ‰™K›Û”›ÙÜ™\ÜÊJ_]™[œ]Y]YJŠKJ
__JJ_J
__JNÜ™]\›ˆ™]È™\ÜÛœÙJ
_]›ÝÈ™]Èš
™]Ú›Üˆ‰ÙK\›Wˆ™\ÜÛ™YÚ]	ÙKœÝ]\ßNˆ	ÙKœÝ]\Õ^XJ_JJK[Š
OžÜÝÚ]Ú
Ê^ØØ\ÙW˜\œ˜^XY™™\—Žœ™]\›ˆ˜\œ˜^PY™™\Š
NØØ\ÙW˜›Ø—Žœ™]\›ˆ˜›ØŠ
NØØ\ÙW™ØÝ[Y[Žœ™]\›ˆ^

K[Š
OŠ™]ÈÓT\œÙ\ŠKœ\œÙQœ›ÛTÝš[™ÊJJJNØØ\ÙWšœÛÛ—Žœ™]\›ˆšœÛÛŠ
NÙY˜][šYŠ›ÚYOOXJ\™]\›ˆ^

NÞØÛÛœÝOKØÚ\œÙ]WÊ×Ž×—×JŠWËÚK™^XÊJKYI‰™VÌWOÙVÌWKÓÝÙ\Ø\ÙJ
N›ÚYO[™]È^XÛÙ\ŠŠNÜ™]\›ˆ˜\œ˜^PY™™\Š
K[Š
OšK™XÛÙJ
JJ___JJK[Š
OOžÕZ˜Y
JNØÛÛœÝQšÝNÙ[]HšÝNÙ›ÜŠ]LO[‹›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO[–ÝNÚK›Û“ØY	‰šK›Û“ØY
J__JJK˜Ø]Ú

OOžØÛÛœÝQšÝNÚYŠ›ÚYOO[Š]›ÝÈ\Ë›X[˜YÙ\‹š][Q\œ›ÜŠ
KNÙ[]HšÝNÙ›ÜŠ]LO[‹›[™ÝÝNÝ
ÊÊ^ØÛÛœÝO[–ÝNÚK›Û‘\œ›Ü‰‰šK›Û‘\œ›ÜŠJ_]\Ë›X[˜YÙ\‹š][Q\œ›ÜŠ
_JJK™š[˜[J


OOžÝ\Ë›X[˜YÙ\‹š][Q[™

_JJK\Ë›X[˜YÙ\‹š][TÝ\

_\Ù]™\ÜÛœÙU\J
^Ü™]\›ˆ\Ëœ™\ÜÛœÙU\O]\ß\Ù]Z[YU\J
^Ü™]\›ˆ\Ë›Z[YU\O]\ß_XÛ\ÜÈÚ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^Ý›ÚYOO]\Ëœ]	‰Š]\Ëœ]
Ý
K]\Ë›X[˜YÙ\‹œ™\ÛÛ™UT“

NØÛÛœÝ]\ËÏUZ™Ù]

NÚYŠ›ÚYOO\Ê\™]\›ˆ‹›X[˜YÙ\‹š][TÝ\

KÙ][Y[Ý]

[˜Ý[ÛŠ
^ÙI‰™JÊK‹›X[˜YÙ\‹š][Q[™

_JK
KÎØÛÛœÝO^YJš[Y×ŠNÙ[˜Ý[ÛˆÊ
^ØÊ
KZ˜Y
\ÊKI‰™J\ÊK‹›X[˜YÙ\‹š][Q[™

_Y[˜Ý[Ûˆ
J^ØÊ
KI‰šJJK‹›X[˜YÙ\‹š][Q\œ›ÜŠ
K‹›X[˜YÙ\‹š][Q[™

_Y[˜Ý[ÛˆÊ
^ØKœ™[[Ý™Q]™[\Ý[™\Š›ØY‹ËLJKKœ™[[Ý™Q]™[\Ý[™\Š™\œ›Ü—‹LJ_\™]\›ˆK˜Y]™[\Ý[™\Š›ØY‹ËLJKK˜Y]™[\Ý[™\Š™\œ›Ü—‹LJK™]N—ˆOO]œÛXÙJJI‰›ÚYOO]\Ë˜Ü›ÜÜÓÜšYÚ[‰‰ŠK˜Ü›ÜÜÓÜšYÚ[]\Ë˜Ü›ÜÜÓÜšYÚ[ŠK‹›X[˜YÙ\‹š][TÝ\

KKœÜ˜Ï]__XÛ\ÜÈ^[™È›žØÛÛœÝXÝÜŠOLJ^ÜÝ\\Š
K\Ëš\ÓYÚHL\Ë\OW“YÚ‹\Ë˜ÛÛÜ[™]ÈÚJ
K\Ëš[[œÚ]OY_Y\ÜÜÙJ
^ßXÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ëš[[œÚ]O]š[[œÚ]K\ß]Ò”ÓÓŠ
^ØÛÛœÝO\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆK›Øš™XÝ˜ÛÛÜ]\Ë˜ÛÛÜ‹™Ù]^

KK›Øš™XÝš[[œÚ]O]\Ëš[[œÚ]K›ÚYOO]\Ë™Ü›Ý[™ÛÛÜ‰‰ŠK›Øš™XÝ™Ü›Ý[™ÛÛÜ]\Ë™Ü›Ý[™ÛÛÜ‹™Ù]^

JK›ÚYOO]\Ë™\Ý[˜ÙI‰ŠK›Øš™XÝ™\Ý[˜ÙO]\Ë™\Ý[˜ÙJK›ÚYOO]\Ë˜[™ÛI‰ŠK›Øš™XÝ˜[™ÛO]\Ë˜[™ÛJK›ÚYOO]\Ë™XØ^I‰ŠK›Øš™XÝ™XØ^O]\Ë™XØ^JK›ÚYOO]\Ëœ[[Xœ˜I‰ŠK›Øš™XÝœ[[Xœ˜O]\Ëœ[[Xœ˜JK›ÚYOO]\ËœÚYÝÉ‰ŠK›Øš™XÝœÚYÝÏ]\ËœÚYÝËÒ”ÓÓŠ
JK__XÛ\ÜÈš^[™ÈØÛÛœÝXÝÜŠKŠ^ÜÝ\\ŠŠK\Ëš\Ò[Z\Ü\™SYÚHL\Ë\OW’[Z\Ü\™SYÚ‹\ËœÜÚ][Û‹˜ÛÜJ›‹‘QUSÕT
K\Ë\]SX]š^

K\Ë™Ü›Ý[™ÛÛÜ[™]ÈÚJJ_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë™Ü›Ý[™ÛÛÜ‹˜ÛÜJ™Ü›Ý[™ÛÛÜŠK\ß_XÛÛœÝÚ[™]È[‹Ú[™]ÈÙK[™]ÈÙNØÛ\ÜÈšØÛÛœÝXÝÜŠ
^Ý\Ë˜Ø[Y\˜O]\Ë˜šX\ÏL\Ë››Ü›X[šX\ÏL\Ëœ˜Y]\ÏLK\Ë˜›\”Ø[\\ÏN\Ë›X\Ú^™O[™]ÈYJLL‹LLŠK\Ë›X\[[\Ë›X\\ÜÏ[[\Ë›X]š^[™]È[‹\Ë˜]]Õ\]OHL\Ë›™YYÕ\]OHLK\Ë—Ùœ\Ý[O[™]ÈÜ‹\Ë—Ùœ˜[YQ^[Ï[™]ÈYJKJK\Ë—ÝšY]ÜÜÛÝ[LK\Ë—ÝšY]ÜÜÏVÛ™]È™JKJW_YÙ]šY]ÜÜÛÝ[

^Ü™]\›ˆ\Ë—ÝšY]ÜÜÛÝ[YÙ]œ\Ý[J
^Ü™]\›ˆ\Ë—Ùœ\Ý[_]\]SX]šXÙ\Ê
^ØÛÛœÝO]\Ë˜Ø[Y\˜K]\Ë›X]š^ÕÚœÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
KKœÜÚ][Û‹˜ÛÜJÚ
KœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\™Ù]›X]š^ÛÜ›
KK›ÛÚÐ]

KK\]SX]š^ÛÜ›

KÚ›][\SX]šXÙ\ÊKœ›Ú™XÝ[Û“X]š^K›X]š^ÛÜ›[™\œÙJK\Ë—Ùœ\Ý[KœÙ]œ›ÛT›Ú™XÝ[Û“X]š^
Ú
K‹œÙ]
KKKKKKJK‹›][\JÚ
_YÙ]šY]ÜÜ

^Ü™]\›ˆ\Ë—ÝšY]ÜÜÖÝ_YÙ]œ˜[YQ^[Ê
^Ü™]\›ˆ\Ë—Ùœ˜[YQ^[ßY\ÜÜÙJ
^Ý\Ë›X\	‰\Ë›X\™\ÜÜÙJ
K\Ë›X\\ÜÉ‰\Ë›X\\ÜË™\ÜÜÙJ
_XÛÜJ
^Ü™]\›ˆ\Ë˜Ø[Y\˜O]˜Ø[Y\˜K˜ÛÛ™J
K\Ë˜šX\Ï]˜šX\Ë\Ëœ˜Y]\Ï]œ˜Y]\Ë\Ë›X\Ú^™K˜ÛÜJ›X\Ú^™JK\ßXÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê_]Ò”ÓÓŠ
^ØÛÛœÝ^ßNÜ™]\›ˆOO]\Ë˜šX\É‰Š˜šX\Ï]\Ë˜šX\ÊKOO]\Ë››Ü›X[šX\É‰Š››Ü›X[šX\Ï]\Ë››Ü›X[šX\ÊKHOO]\Ëœ˜Y]\É‰Šœ˜Y]\Ï]\Ëœ˜Y]\ÊKLLOO]\Ë›X\Ú^™Kž	‰LLOO]\Ë›X\Ú^™Kž_
›X\Ú^™O]\Ë›X\Ú^™KÐ\œ˜^J
JK˜Ø[Y\˜O]\Ë˜Ø[Y\˜KÒ”ÓÓŠLJK›Øš™XÝ[]H˜Ø[Y\˜K›X]š^_XÛ\ÜÈZ^[™ÈšØÛÛœÝXÝÜŠ
^ÜÝ\\Š™]ÈÜŠLKKL
JK\Ëš\ÔÜÝYÚÚYÝÏHL\Ë™›ØÝ\ÏL_]\]SX]šXÙ\Ê
^ØÛÛœÝO]\Ë˜Ø[Y\˜KLŠœ™J˜[™ÛJ\Ë™›ØÝ\ËO]\Ë›X\Ú^™KÚYÝ\Ë›X\Ú^™KšZYÚ]™\Ý[˜Ù_K™˜\ŽÛOOYK™›Ý‰‰šOOOYK˜\ÜXÝ	‰œOOYK™˜\Ÿ
K™›Ý[‹K˜\ÜXÝZKK™˜\\‹K\]T›Ú™XÝ[Û“X]š^

JKÝ\\‹\]SX]šXÙ\Ê
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë™›ØÝ\Ï]™›ØÝ\Ë\ß_XÛ\ÜÈZ^[™ÈØÛÛœÝXÝÜŠKLOSX]”KÌËLÏLŠ^ÜÝ\\ŠJK\Ëš\ÔÜÝYÚHL\Ë\OW”ÜÝYÚ‹\ËœÜÚ][Û‹˜ÛÜJ›‹‘QUSÕT
K\Ë\]SX]š^

K\Ë\™Ù][™]È›‹\Ë™\Ý[˜ÙO[‹\Ë˜[™ÛOZK\Ëœ[[Xœ˜O\‹\Ë™XØ^O\Ë\Ë›X\[[\ËœÚYÝÏ[™]ÈZYÙ]ÝÙ\Š
^Ü™]\›ˆ\Ëš[[œÚ]J“X]”_\Ù]ÝÙ\Š
^Ý\Ëš[[œÚ]O]ÓX]”_Y\ÜÜÙJ
^Ý\ËœÚYÝË™\ÜÜÙJ
_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë™\Ý[˜ÙO]™\Ý[˜ÙK\Ë˜[™ÛO]˜[™ÛK\Ëœ[[Xœ˜O]œ[[Xœ˜K\Ë™XØ^O]™XØ^K\Ë\™Ù]]\™Ù]˜ÛÛ™J
K\ËœÚYÝÏ]œÚYÝË˜ÛÛ™J
K\ß_XÛÛœÝš[™]È[‹š[™]ÈÙKÚ[™]ÈÙNØÛ\ÜÈ	^[™ÈšØÛÛœÝXÝÜŠ
^ÜÝ\\Š™]ÈÜŠLKKL
JK\Ëš\ÔÚ[YÚÚYÝÏHL\Ë—Ùœ˜[YQ^[Ï[™]ÈYJŠK\Ë—ÝšY]ÜÜÛÝ[M‹\Ë—ÝšY]ÜÜÏVÛ™]È™J‹KKJK™]È™JKKJK™]È™JËKKJK™]È™JKKKJK™]È™JËKJK™]È™JKKJWK\Ë—ØÝX™Q\™XÝ[ÛœÏVÛ™]ÈÙJK
K™]ÈÙJLK
K™]ÈÙJJK™]ÈÙJLJK™]ÈÙJK
K™]ÈÙJLK
WK\Ë—ØÝX™U\ÏVÛ™]ÈÙJK
K™]ÈÙJK
K™]ÈÙJK
K™]ÈÙJK
K™]ÈÙJJK™]ÈÙJLJW_]\]SX]šXÙ\ÊOL
^ØÛÛœÝ]\Ë˜Ø[Y\˜KO]\Ë›X]š^]™\Ý[˜Ù_‹™˜\ŽÜˆOO[‹™˜\‰‰Š‹™˜\\‹‹\]T›Ú™XÝ[Û“X]š^

JKšœÙ]œ›ÛSX]š^ÜÚ][ÛŠ›X]š^ÛÜ›
K‹œÜÚ][Û‹˜ÛÜJš
KÚ˜ÛÜJ‹œÜÚ][ÛŠKÚ˜Y
\Ë—ØÝX™Q\™XÝ[ÛœÖÙWJK‹\˜ÛÜJ\Ë—ØÝX™U\ÖÙWJK‹›ÛÚÐ]
Ú
K‹\]SX]š^ÛÜ›

KK›XZÙU˜[œÛ][ÛŠRšžRšžKRšžŠKš›][\SX]šXÙ\Ê‹œ›Ú™XÝ[Û“X]š^‹›X]š^ÛÜ›[™\œÙJK\Ë—Ùœ\Ý[KœÙ]œ›ÛT›Ú™XÝ[Û“X]š^
š
__XÛ\ÜÈZ^[™ÈØÛÛœÝXÝÜŠKLOLŠ^ÜÝ\\ŠJK\Ëš\ÔÚ[YÚHL\Ë\OW”Ú[YÚ‹\Ë™\Ý[˜ÙO[‹\Ë™XØ^OZK\ËœÚYÝÏ[™]È	YÙ]ÝÙ\Š
^Ü™]\›ˆ
\Ëš[[œÚ]J“X]”_\Ù]ÝÙ\Š
^Ý\Ëš[[œÚ]O]Ê
“X]”J_Y\ÜÜÙJ
^Ý\ËœÚYÝË™\ÜÜÙJ
_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë™\Ý[˜ÙO]™\Ý[˜ÙK\Ë™XØ^O]™XØ^K\ËœÚYÝÏ]œÚYÝË˜ÛÛ™J
K\ß_XÛ\ÜÈH^[™ÈšØÛÛœÝXÝÜŠ
^ÜÝ\\Š™]ÈŠMKKKMKKL
JK\Ëš\Ñ\™XÝ[Û˜[YÚÚYÝÏHL_XÛ\ÜÈ]H^[™ÈØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\Ñ\™XÝ[Û˜[YÚHL\Ë\OW‘\™XÝ[Û˜[YÚ‹\ËœÜÚ][Û‹˜ÛÜJ›‹‘QUSÕT
K\Ë\]SX]š^

K\Ë\™Ù][™]È›‹\ËœÚYÝÏ[™]È_Y\ÜÜÙJ
^Ý\ËœÚYÝË™\ÜÜÙJ
_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë\™Ù]]\™Ù]˜ÛÛ™J
K\ËœÚYÝÏ]œÚYÝË˜ÛÛ™J
K\ß_XÛ\ÜÈH^[™ÈØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\Ð[XšY[YÚHL\Ë\OW[XšY[YÚŸ_XÛ\ÜÈ]H^[™ÈØÛÛœÝXÝÜŠKLLOLL
^ÜÝ\\ŠJK\Ëš\Ô™XÝ\™XSYÚHL\Ë\OW”™XÝ\™XSYÚ‹\ËÚY[‹\ËšZYÚZ_YÙ]ÝÙ\Š
^Ü™]\›ˆ\Ëš[[œÚ]J\ËÚY
\ËšZYÚ
“X]”_\Ù]ÝÙ\Š
^Ý\Ëš[[œÚ]O]Ê\ËÚY
\ËšZYÚ
“X]”J_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËÚY]ÚY\ËšZYÚ]šZYÚ\ß]Ò”ÓÓŠ
^ØÛÛœÝO\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆK›Øš™XÝÚY]\ËÚYK›Øš™XÝšZYÚ]\ËšZYÚ__XÛ\ÜÈ^ØÛÛœÝXÝÜŠ
^Ý\Ëš\ÔÜ\šXØ[\›[ÛšXÜÌÏHL\Ë˜ÛÙY™šXÚY[ÏV×NÙ›ÜŠ]LÝNÝ
ÊÊ]\Ë˜ÛÙY™šXÚY[Ëœ\Ú
™]ÈÙJ_\Ù]

^Ù›ÜŠ]OLÙONÙJÊÊ]\Ë˜ÛÙY™šXÚY[ÖÙWK˜ÛÜJÙWJNÜ™]\›ˆ\ß^™\›Ê
^Ù›ÜŠ]LÝNÝ
ÊÊ]\Ë˜ÛÙY™šXÚY[ÖÝKœÙ]

NÜ™]\›ˆ\ßYÙ]]
J^ØÛÛœÝ]žO]žK]ž‹Ï]\Ë˜ÛÙY™šXÚY[ÎÜ™]\›ˆK˜ÛÜJÖÌJK›][\TØØ[\ŠŒŽŒMJKK˜YØØ[Y™XÝÜŠÖÌWKŒÊšJKK˜YØØ[Y™XÝÜŠÖÌ—KŒÊœŠKK˜YØØ[Y™XÝÜŠÖÌ×KŒÊ›ŠKK˜YØØ[Y™XÝÜŠÖÍKŠšJŒKŒLM
KK˜YØØ[Y™XÝÜŠÖÍWKJœŠŒKŒLM
KK˜YØØ[Y™XÝÜŠÖÍ—KŒÌMLÎLŠŠÊœŠœ‹LJJKK˜YØØ[Y™XÝÜŠÖÍ×KŠœŠŒKŒLM
KK˜YØØ[Y™XÝÜŠÖÎKMŒÍ
ŠŠ›‹ZJšJJK_YÙ]\œ˜YX[˜ÙP]
J^ØÛÛœÝ]žO]žK]ž‹Ï]\Ë˜ÛÙY™šXÚY[ÎÜ™]\›ˆK˜ÛÜJÖÌJK›][\TØØ[\ŠŽŒŒÊKK˜YØØ[Y™XÝÜŠÖÌWKKŒŒÌÌŽ
šJKK˜YØØ[Y™XÝÜŠÖÌ—KKŒŒÌÌŽ
œŠKK˜YØØ[Y™XÝÜŠÖÌ×KKŒŒÌÌŽ
›ŠKK˜YØØ[Y™XÝÜŠÖÍKŽNŠ›ŠšJKK˜YØØ[Y™XÝÜŠÖÍWKŽNŠšJœŠKK˜YØØ[Y™XÝÜŠÖÍ—KÍÌLJœŠœ‹KŒÍÌ
KK˜YØØ[Y™XÝÜŠÖÍ×KŽNŠ›ŠœŠKK˜YØØ[Y™XÝÜŠÖÎKŽLÊŠŠ›‹ZJšJJK_XY

^Ù›ÜŠ]OLÙONÙJÊÊ]\Ë˜ÛÙY™šXÚY[ÖÙWK˜Y
˜ÛÙY™šXÚY[ÖÙWJNÜ™]\›ˆ\ßXYØØ[YÒ
J^Ù›ÜŠ]LÛNÛŠÊÊ]\Ë˜ÛÙY™šXÚY[ÖÛ—K˜YØØ[Y™XÝÜŠ˜ÛÙY™šXÚY[ÖÛ—KJNÜ™]\›ˆ\ß\ØØ[J
^Ù›ÜŠ]OLÙONÙJÊÊ]\Ë˜ÛÙY™šXÚY[ÖÙWK›][\TØØ[\Š
NÜ™]\›ˆ\ß[\œ
J^Ù›ÜŠ]LÛNÛŠÊÊ]\Ë˜ÛÙY™šXÚY[ÖÛ—K›\œ
˜ÛÙY™šXÚY[ÖÛ—KJNÜ™]\›ˆ\ßY\]X[Ê
^Ù›ÜŠ]OLÙONÙJÊÊZYŠ]\Ë˜ÛÙY™šXÚY[ÖÙWK™\]X[Ê˜ÛÙY™šXÚY[ÖÙWJJ\™]\›ˆLNÜ™]\›ˆLXÛÜJ
^Ü™]\›ˆ\ËœÙ]
˜ÛÙY™šXÚY[Ê_XÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê_Yœ›ÛP\œ˜^JOL
^ØÛÛœÝ]\Ë˜ÛÙY™šXÚY[ÎÙ›ÜŠ]OLÚONÚJÊÊ[–ÚWK™œ›ÛP\œ˜^JJÌÊšJNÜ™]\›ˆ\ß]Ð\œ˜^JV×KOL
^ØÛÛœÝ]\Ë˜ÛÙY™šXÚY[ÎÙ›ÜŠ]OLÚONÚJÊÊ[–ÚWKÐ\œ˜^JJÌÊšJNÜ™]\›ˆ\Ý]XÈÙ]˜\Ú\Ð]
J^ØÛÛœÝ]žO]žK]žŽÙVÌOKŒŽŒMKVÌWOKŒÊšKVÌ—OKŒÊœ‹VÌ×OKŒÊ›‹VÍOLKŒLM
›ŠšKVÍWOLKŒLM
šJœ‹VÍ—OKŒÌMLÎLŠŠÊœŠœ‹LJKVÍ×OLKŒLM
›Šœ‹VÎOKMŒÍ
ŠŠ›‹ZJšJ__XÛ\ÜÈÝH^[™ÈØÛÛœÝXÝÜŠ[™]ÈKOLJ^ÜÝ\\Š›ÚYJK\Ëš\ÓYÚ›Ø™OHL\ËœÚ]XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\ËœÚ˜ÛÜJœÚ
K\ßYœ›ÛR”ÓÓŠ
^Ü™]\›ˆ\Ëš[[œÚ]O]š[[œÚ]K\ËœÚ™œ›ÛP\œ˜^JœÚ
K\ß]Ò”ÓÓŠ
^ØÛÛœÝO\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆK›Øš™XÝœÚ]\ËœÚÐ\œ˜^J
K__XÛ\ÜÈ]H^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë^\™\Ï^ß_[ØY
K‹J^ØÛÛœÝ]\ËÏ[™]Èš
‹›X[˜YÙ\ŠNÜËœÙ]]
‹œ]
KËœÙ]™\]Y\ÝXY\Š‹œ™\]Y\ÝXY\ŠKËœÙ]Ú]Ü™Y[X[Ê‹Ú]Ü™Y[X[ÊKË›ØY

[˜Ý[ÛŠŠ^Ýž^ÙJ‹œ\œÙJ”ÓÓ‹œ\œÙJŠJJ_XØ]Ú
J^ÚOÚJJN˜ÛÛœÛÛK™\œ›ÜŠJK‹›X[˜YÙ\‹š][Q\œ›ÜŠ
__JK‹J_\\œÙJ
^ØÛÛœÝO]\Ë^\™\ÎÙ[˜Ý[ÛˆŠ
^Ü™]\›ˆ›ÚYOOYVÝI‰˜ÛÛœÛÛKØ\›Š•‘QK“X]\šX[ØY\Žˆ[™Yš[™Y^\™W‹
KVÝ_XÛÛœÝOX]K˜Ü™X]SX]\šX[œ›ÛU\J\JNÚYŠ›ÚYOO]]ZY	‰ŠK]ZY]]ZY
K›ÚYOO]›˜[YI‰ŠK›˜[YO]›˜[YJK›ÚYOO]˜ÛÛÜ‰‰›ÚYOOZK˜ÛÛÜ‰‰šK˜ÛÛÜ‹œÙ]^
˜ÛÛÜŠK›ÚYOO]œ›ÝYÚ™\ÜÉ‰ŠKœ›ÝYÚ™\ÜÏ]œ›ÝYÚ™\ÜÊK›ÚYOO]›Y][™\ÜÉ‰ŠK›Y][™\ÜÏ]›Y][™\ÜÊK›ÚYOO]œÚY[‰‰ŠKœÚY[]œÚY[ŠK›ÚYOO]œÚY[ÛÛÜ‰‰ŠKœÚY[ÛÛÜJ™]ÈÚJKœÙ]^
œÚY[ÛÛÜŠJK›ÚYOO]œÚY[”›ÝYÚ™\ÜÉ‰ŠKœÚY[”›ÝYÚ™\ÜÏ]œÚY[”›ÝYÚ™\ÜÊK›ÚYOO]™[Z\ÜÚ]™I‰›ÚYOOZK™[Z\ÜÚ]™I‰šK™[Z\ÜÚ]™KœÙ]^
™[Z\ÜÚ]™JK›ÚYOO]œÜXÝ[\‰‰›ÚYOOZKœÜXÝ[\‰‰šKœÜXÝ[\‹œÙ]^
œÜXÝ[\ŠK›ÚYOO]œÜXÝ[\’[[œÚ]I‰ŠKœÜXÝ[\’[[œÚ]O]œÜXÝ[\’[[œÚ]JK›ÚYOO]œÜXÝ[\ÛÛÜ‰‰›ÚYOOZKœÜXÝ[\ÛÛÜ‰‰šKœÜXÝ[\ÛÛÜ‹œÙ]^
œÜXÝ[\ÛÛÜŠK›ÚYOO]œÚ[š[™\ÜÉ‰ŠKœÚ[š[™\ÜÏ]œÚ[š[™\ÜÊK›ÚYOO]˜ÛX\˜ÛØ]	‰ŠK˜ÛX\˜ÛØ]]˜ÛX\˜ÛØ]
K›ÚYOO]˜ÛX\˜ÛØ]›ÝYÚ™\ÜÉ‰ŠK˜ÛX\˜ÛØ]›ÝYÚ™\ÜÏ]˜ÛX\˜ÛØ]›ÝYÚ™\ÜÊK›ÚYOO]š\šY\ØÙ[˜ÙI‰ŠKš\šY\ØÙ[˜ÙO]š\šY\ØÙ[˜ÙJK›ÚYOO]š\šY\ØÙ[˜ÙRSÔ‰‰ŠKš\šY\ØÙ[˜ÙRSÔ]š\šY\ØÙ[˜ÙRSÔŠK›ÚYOO]š\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙI‰ŠKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙO]š\šY\ØÙ[˜ÙUXÚÛ™\ÜÔ˜[™ÙJK›ÚYOO]˜[œÛZ\ÜÚ[Û‰‰ŠK˜[œÛZ\ÜÚ[Û]˜[œÛZ\ÜÚ[ÛŠK›ÚYOO]XÚÛ™\ÜÉ‰ŠKXÚÛ™\ÜÏ]XÚÛ™\ÜÊK›ÚYOO]˜][X][Û‘\Ý[˜ÙI‰ŠK˜][X][Û‘\Ý[˜ÙO]˜][X][Û‘\Ý[˜ÙJK›ÚYOO]˜][X][ÛÛÛÜ‰‰›ÚYOOZK˜][X][ÛÛÛÜ‰‰šK˜][X][ÛÛÛÜ‹œÙ]^
˜][X][ÛÛÛÜŠK›ÚYOO]˜[š\ÛÝ›ÜI‰ŠK˜[š\ÛÝ›ÜO]˜[š\ÛÝ›ÜJK›ÚYOO]˜[š\ÛÝ›ÜT›Ý][Û‰‰ŠK˜[š\ÛÝ›ÜT›Ý][Û]˜[š\ÛÝ›ÜT›Ý][ÛŠK›ÚYOO]™›ÙÉ‰ŠK™›ÙÏ]™›ÙÊK›ÚYOO]™›]ÚY[™É‰ŠK™›]ÚY[™Ï]™›]ÚY[™ÊK›ÚYOO]˜›[™[™É‰ŠK˜›[™[™Ï]˜›[™[™ÊK›ÚYOO]˜ÛÛXš[™I‰ŠK˜ÛÛXš[™O]˜ÛÛXš[™JK›ÚYOO]œÚYI‰ŠKœÚYO]œÚYJK›ÚYOO]œÚYÝÔÚYI‰ŠKœÚYÝÔÚYO]œÚYÝÔÚYJK›ÚYOO]›ÜXÚ]I‰ŠK›ÜXÚ]O]›ÜXÚ]JK›ÚYOO]˜[œÜ\™[	‰ŠK˜[œÜ\™[]˜[œÜ\™[
K›ÚYOO]˜[U\Ý	‰ŠK˜[U\Ý]˜[U\Ý
K›ÚYOO]˜[R\Ú	‰ŠK˜[R\Ú]˜[R\Ú
K›ÚYOO]™\[˜É‰ŠK™\[˜Ï]™\[˜ÊK›ÚYOO]™\\Ý	‰ŠK™\\Ý]™\\Ý
K›ÚYOO]™\Üš]I‰ŠK™\Üš]O]™\Üš]JK›ÚYOO]˜ÛÛÜ•Üš]I‰ŠK˜ÛÛÜ•Üš]O]˜ÛÛÜ•Üš]JK›ÚYOO]˜›[™Ü˜É‰ŠK˜›[™Ü˜Ï]˜›[™Ü˜ÊK›ÚYOO]˜›[™Ý	‰ŠK˜›[™Ý]˜›[™Ý
K›ÚYOO]˜›[™\]X][Û‰‰ŠK˜›[™\]X][Û]˜›[™\]X][ÛŠK›ÚYOO]˜›[™Ü˜Ð[I‰ŠK˜›[™Ü˜Ð[O]˜›[™Ü˜Ð[JK›ÚYOO]˜›[™Ý[I‰ŠK˜›[™Ý[O]˜›[™Ý[JK›ÚYOO]˜›[™\]X][Û[I‰ŠK˜›[™\]X][Û[O]˜›[™\]X][Û[JK›ÚYOO]˜›[™ÛÛÜ‰‰›ÚYOOZK˜›[™ÛÛÜ‰‰šK˜›[™ÛÛÜ‹œÙ]^
˜›[™ÛÛÜŠK›ÚYOO]˜›[™[I‰ŠK˜›[™[O]˜›[™[JK›ÚYOO]œÝ[˜Ú[Üš]SX\ÚÉ‰ŠKœÝ[˜Ú[Üš]SX\ÚÏ]œÝ[˜Ú[Üš]SX\ÚÊK›ÚYOO]œÝ[˜Ú[[˜É‰ŠKœÝ[˜Ú[[˜Ï]œÝ[˜Ú[[˜ÊK›ÚYOO]œÝ[˜Ú[™Y‰‰ŠKœÝ[˜Ú[™Y]œÝ[˜Ú[™YŠK›ÚYOO]œÝ[˜Ú[[˜ÓX\ÚÉ‰ŠKœÝ[˜Ú[[˜ÓX\ÚÏ]œÝ[˜Ú[[˜ÓX\ÚÊK›ÚYOO]œÝ[˜Ú[˜Z[	‰ŠKœÝ[˜Ú[˜Z[]œÝ[˜Ú[˜Z[
K›ÚYOO]œÝ[˜Ú[‘˜Z[	‰ŠKœÝ[˜Ú[‘˜Z[]œÝ[˜Ú[‘˜Z[
K›ÚYOO]œÝ[˜Ú[”\ÜÉ‰ŠKœÝ[˜Ú[”\ÜÏ]œÝ[˜Ú[”\ÜÊK›ÚYOO]œÝ[˜Ú[Üš]I‰ŠKœÝ[˜Ú[Üš]O]œÝ[˜Ú[Üš]JK›ÚYOO]Ú\™Yœ˜[YI‰ŠKÚ\™Yœ˜[YO]Ú\™Yœ˜[YJK›ÚYOO]Ú\™Yœ˜[YS[™]ÚY	‰ŠKÚ\™Yœ˜[YS[™]ÚY]Ú\™Yœ˜[YS[™]ÚY
K›ÚYOO]Ú\™Yœ˜[YS[™XØ\	‰ŠKÚ\™Yœ˜[YS[™XØ\]Ú\™Yœ˜[YS[™XØ\
K›ÚYOO]Ú\™Yœ˜[YS[™Z›Ú[‰‰ŠKÚ\™Yœ˜[YS[™Z›Ú[]Ú\™Yœ˜[YS[™Z›Ú[ŠK›ÚYOO]œ›Ý][Û‰‰ŠKœ›Ý][Û]œ›Ý][ÛŠK›ÚYOO]›[™]ÚY	‰ŠK›[™]ÚY]›[™]ÚY
K›ÚYOO]™\ÚÚ^™I‰ŠK™\ÚÚ^™O]™\ÚÚ^™JK›ÚYOO]™Ø\Ú^™I‰ŠK™Ø\Ú^™O]™Ø\Ú^™JK›ÚYOO]œØØ[I‰ŠKœØØ[O]œØØ[JK›ÚYOO]œÛYÛÛ“Ù™œÙ]	‰ŠKœÛYÛÛ“Ù™œÙ]]œÛYÛÛ“Ù™œÙ]
K›ÚYOO]œÛYÛÛ“Ù™œÙ]˜XÝÜ‰‰ŠKœÛYÛÛ“Ù™œÙ]˜XÝÜ]œÛYÛÛ“Ù™œÙ]˜XÝÜŠK›ÚYOO]œÛYÛÛ“Ù™œÙ][š]É‰ŠKœÛYÛÛ“Ù™œÙ][š]Ï]œÛYÛÛ“Ù™œÙ][š]ÊK›ÚYOO]™]\š[™É‰ŠK™]\š[™Ï]™]\š[™ÊK›ÚYOO]˜[UÐÛÝ™\˜YÙI‰ŠK˜[UÐÛÝ™\˜YÙO]˜[UÐÛÝ™\˜YÙJK›ÚYOO]œ™[][\YY[I‰ŠKœ™[][\YY[O]œ™[][\YY[JK›ÚYOO]™›Ü˜ÙTÚ[™ÛT\ÜÉ‰ŠK™›Ü˜ÙTÚ[™ÛT\ÜÏ]™›Ü˜ÙTÚ[™ÛT\ÜÊK›ÚYOO]š\ÚX›I‰ŠKš\ÚX›O]š\ÚX›JK›ÚYOO]Û™SX\Y	‰ŠKÛ™SX\Y]Û™SX\Y
K›ÚYOO]\Ù\‘]I‰ŠK\Ù\‘]O]\Ù\‘]JK›ÚYOO]™\^ÛÛÜœÉ‰Š›[X™\—O]\[Ùˆ™\^ÛÛÜœÏÚK™\^ÛÛÜœÏ]™\^ÛÛÜœÏŒšK™\^ÛÛÜœÏ]™\^ÛÛÜœÊK›ÚYOO][šY›Ü›\ÊY›ÜŠÛÛœÝH[ˆ[šY›Ü›\Ê^ØÛÛœÝ][šY›Ü›\ÖÙWNÜÝÚ]Ú
K[šY›Ü›\ÖÙWO^ßK‹\J^ØØ\ÙWŽšK[šY›Ü›\ÖÙWK˜[YO[Š‹˜[YJNØœ™XZÎØØ\ÙW˜×ŽšK[šY›Ü›\ÖÙWK˜[YOJ™]ÈÚJKœÙ]^
‹˜[YJNØœ™XZÎØØ\ÙWŒ—ŽšK[šY›Ü›\ÖÙWK˜[YOJ™]ÈYJK™œ›ÛP\œ˜^J‹˜[YJNØœ™XZÎØØ\ÙWŒ×ŽšK[šY›Ü›\ÖÙWK˜[YOJ™]ÈÙJK™œ›ÛP\œ˜^J‹˜[YJNØœ™XZÎØØ\ÙWŽšK[šY›Ü›\ÖÙWK˜[YOJ™]È™JK™œ›ÛP\œ˜^J‹˜[YJNØœ™XZÎØØ\ÙW›L×ŽšK[šY›Ü›\ÖÙWK˜[YOJ™]È™JK™œ›ÛP\œ˜^J‹˜[YJNØœ™XZÎØØ\ÙW›MŽšK[šY›Ü›\ÖÙWK˜[YOJ™]È[ŠK™œ›ÛP\œ˜^J‹˜[YJNØœ™XZÎÙY˜][šK[šY›Ü›\ÖÙWK˜[YO\‹˜[Y__ZYŠ›ÚYOO]™Yš[™\É‰ŠK™Yš[™\Ï]™Yš[™\ÊK›ÚYOO]™\^ÚY\‰‰ŠK™\^ÚY\]™\^ÚY\ŠK›ÚYOO]™œ˜YÛY[ÚY\‰‰ŠK™œ˜YÛY[ÚY\]™œ˜YÛY[ÚY\ŠK›ÚYOO]™ÛÛ™\œÚ[Û‰‰ŠK™ÛÛ™\œÚ[Û]™ÛÛ™\œÚ[ÛŠK›ÚYOO]™^[œÚ[ÛœÊY›ÜŠÛÛœÝH[ˆ™^[œÚ[ÛœÊZK™^[œÚ[ÛœÖÙWO]™^[œÚ[ÛœÖÙWNÚYŠ›ÚYOO]›YÚÉ‰ŠK›YÚÏ]›YÚÊK›ÚYOO]˜Û\[™É‰ŠK˜Û\[™Ï]˜Û\[™ÊK›ÚYOO]œÚ^™I‰ŠKœÚ^™O]œÚ^™JK›ÚYOO]œÚ^™P][X][Û‰‰ŠKœÚ^™P][X][Û]œÚ^™P][X][ÛŠK›ÚYOO]›X\	‰ŠK›X\[Š›X\
JK›ÚYOO]›X]Ø\	‰ŠK›X]Ø\[Š›X]Ø\
JK›ÚYOO]˜[SX\	‰ŠK˜[SX\[Š˜[SX\
JK›ÚYOO]˜[\X\	‰ŠK˜[\X\[Š˜[\X\
JK›ÚYOO]˜[\ØØ[I‰ŠK˜[\ØØ[O]˜[\ØØ[JK›ÚYOO]››Ü›X[X\	‰ŠK››Ü›X[X\[Š››Ü›X[X\
JK›ÚYOO]››Ü›X[X\\I‰ŠK››Ü›X[X\\O]››Ü›X[X\\JK›ÚYOO]››Ü›X[ØØ[J^Û]O]››Ü›X[ØØ[NÈLOOOP\œ˜^Kš\Ð\œ˜^JJI‰ŠOVÙKWJKK››Ü›X[ØØ[OJ™]ÈYJK™œ›ÛP\œ˜^JJ_\™]\›ˆ›ÚYOO]™\ÜXÙ[Y[X\	‰ŠK™\ÜXÙ[Y[X\[Š™\ÜXÙ[Y[X\
JK›ÚYOO]™\ÜXÙ[Y[ØØ[I‰ŠK™\ÜXÙ[Y[ØØ[O]™\ÜXÙ[Y[ØØ[JK›ÚYOO]™\ÜXÙ[Y[šX\É‰ŠK™\ÜXÙ[Y[šX\Ï]™\ÜXÙ[Y[šX\ÊK›ÚYOO]œ›ÝYÚ™\ÜÓX\	‰ŠKœ›ÝYÚ™\ÜÓX\[Šœ›ÝYÚ™\ÜÓX\
JK›ÚYOO]›Y][™\ÜÓX\	‰ŠK›Y][™\ÜÓX\[Š›Y][™\ÜÓX\
JK›ÚYOO]™[Z\ÜÚ]™SX\	‰ŠK™[Z\ÜÚ]™SX\[Š™[Z\ÜÚ]™SX\
JK›ÚYOO]™[Z\ÜÚ]™R[[œÚ]I‰ŠK™[Z\ÜÚ]™R[[œÚ]O]™[Z\ÜÚ]™R[[œÚ]JK›ÚYOO]œÜXÝ[\“X\	‰ŠKœÜXÝ[\“X\[ŠœÜXÝ[\“X\
JK›ÚYOO]œÜXÝ[\’[[œÚ]SX\	‰ŠKœÜXÝ[\’[[œÚ]SX\[ŠœÜXÝ[\’[[œÚ]SX\
JK›ÚYOO]œÜXÝ[\ÛÛÜ“X\	‰ŠKœÜXÝ[\ÛÛÜ“X\[ŠœÜXÝ[\ÛÛÜ“X\
JK›ÚYOO]™[“X\	‰ŠK™[“X\[Š™[“X\
JK›ÚYOO]™[“X\[[œÚ]I‰ŠK™[“X\[[œÚ]O]™[“X\[[œÚ]JK›ÚYOO]œ™Y›XÝ]š]I‰ŠKœ™Y›XÝ]š]O]œ™Y›XÝ]š]JK›ÚYOO]œ™Yœ˜XÝ[Û”˜][É‰ŠKœ™Yœ˜XÝ[Û”˜][Ï]œ™Yœ˜XÝ[Û”˜][ÊK›ÚYOO]›YÚX\	‰ŠK›YÚX\[Š›YÚX\
JK›ÚYOO]›YÚX\[[œÚ]I‰ŠK›YÚX\[[œÚ]O]›YÚX\[[œÚ]JK›ÚYOO]˜[ÓX\	‰ŠK˜[ÓX\[Š˜[ÓX\
JK›ÚYOO]˜[ÓX\[[œÚ]I‰ŠK˜[ÓX\[[œÚ]O]˜[ÓX\[[œÚ]JK›ÚYOO]™Ü˜YY[X\	‰ŠK™Ü˜YY[X\[Š™Ü˜YY[X\
JK›ÚYOO]˜ÛX\˜ÛØ]X\	‰ŠK˜ÛX\˜ÛØ]X\[Š˜ÛX\˜ÛØ]X\
JK›ÚYOO]˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\	‰ŠK˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\[Š˜ÛX\˜ÛØ]›ÝYÚ™\ÜÓX\
JK›ÚYOO]˜ÛX\˜ÛØ]›Ü›X[X\	‰ŠK˜ÛX\˜ÛØ]›Ü›X[X\[Š˜ÛX\˜ÛØ]›Ü›X[X\
JK›ÚYOO]˜ÛX\˜ÛØ]›Ü›X[ØØ[I‰ŠK˜ÛX\˜ÛØ]›Ü›X[ØØ[OJ™]ÈYJK™œ›ÛP\œ˜^J˜ÛX\˜ÛØ]›Ü›X[ØØ[JJK›ÚYOO]š\šY\ØÙ[˜ÙSX\	‰ŠKš\šY\ØÙ[˜ÙSX\[Šš\šY\ØÙ[˜ÙSX\
JK›ÚYOO]š\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\	‰ŠKš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\[Šš\šY\ØÙ[˜ÙUXÚÛ™\ÜÓX\
JK›ÚYOO]˜[œÛZ\ÜÚ[Û“X\	‰ŠK˜[œÛZ\ÜÚ[Û“X\[Š˜[œÛZ\ÜÚ[Û“X\
JK›ÚYOO]XÚÛ™\ÜÓX\	‰ŠKXÚÛ™\ÜÓX\[ŠXÚÛ™\ÜÓX\
JK›ÚYOO]˜[š\ÛÝ›ÜSX\	‰ŠK˜[š\ÛÝ›ÜSX\[Š˜[š\ÛÝ›ÜSX\
JK›ÚYOO]œÚY[ÛÛÜ“X\	‰ŠKœÚY[ÛÛÜ“X\[ŠœÚY[ÛÛÜ“X\
JK›ÚYOO]œÚY[”›ÝYÚ™\ÜÓX\	‰ŠKœÚY[”›ÝYÚ™\ÜÓX\[ŠœÚY[”›ÝYÚ™\ÜÓX\
JK_\Ù]^\™\Ê
^Ü™]\›ˆ\Ë^\™\Ï]\ß\Ý]XÈÜ™X]SX]\šX[œ›ÛU\J
^Ü™]\›ˆ™]ÞÔÚYÝÓX]\šX[šZÜš]SX]\šX[›Ë˜]ÔÚY\“X]\šX[œšÚY\“X]\šX[š\‹Ú[ÓX]\šX[ÛY\Ú\ÚXØ[X]\šX[˜ZY\ÚÝ[™\™X]\šX[œÚY\ÚÛ™ÓX]\šX[›ÚY\ÚÛÛ“X]\šX[›Y\Ú›Ü›X[X]\šX[˜ÚY\Ú[X™\X]\šX[šY\Ú\X]\šX[’KY\Ú\Ý[˜ÙSX]\šX[•˜KY\Ú˜\ÚXÓX]\šX[œKY\ÚX]Ø\X]\šX[Z[™Q\ÚYX]\šX[™[™P˜\ÚXÓX]\šX[™›X]\šX[™_VÝ__XÛ\ÜÈÝ^ÜÝ]XÈXÛÙU^

^ÚYŠ[™Yš[™YˆO]\[Ùˆ^XÛÙ\Š\™]\›Š™]È^XÛÙ\ŠK™XÛÙJ
NÛ]OW—ŽÙ›ÜŠ]LO]›[™ÝÛNÛŠÊÊYJÏTÝš[™Ë™œ›ÛPÚ\ÛÙJÛ—JNÝž^Ü™]\›ˆXÛÙUT’PÛÛ\Û™[
\ØØ\JJJ_XØ]Ú

^Ü™]\›ˆ__\Ý]XÈ^˜XÝ\›˜\ÙJ
^ØÛÛœÝO]›\Ý[™^ÙŠ‹×ŠNÜ™]\›‹LOOOYO×‹‹×ŽœÛXÙJJÌJ_\Ý]XÈ™\ÛÛ™UT“
J^Ü™]\›—œÝš[™×ˆO]\[Ùˆ—OO]×—ŽŠ×šÏÎ—×ËÚK\Ý
JI‰‹×—ËË\Ý

I‰ŠOYKœ™\XÙJÊšÏÎ—×Ö×—×JÊKŠ‹ÚK‰WŠJK×ŠÏÎŠO××ËÚK\Ý

_×™]N‹Š‹Š‰ÚK\Ý

_×˜›ØŽ‹Š‰ÚK\Ý

OÝ™JÝ
__XÛ\ÜÈH^[™ÈZ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Ò[œÝ[˜ÙYY™™\‘Ù[ÛY]žOHL\Ë\OW’[œÝ[˜ÙYY™™\‘Ù[ÛY]žW‹\Ëš[œÝ[˜ÙPÛÝ[LKÌXÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ëš[œÝ[˜ÙPÛÝ[]š[œÝ[˜ÙPÛÝ[\ß]Ò”ÓÓŠ
^ØÛÛœÝ\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆš[œÝ[˜ÙPÛÝ[]\Ëš[œÝ[˜ÙPÛÝ[š\Ò[œÝ[˜ÙYY™™\‘Ù[ÛY]žOHL_XÛ\ÜÈÝH^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ]\ËÏ[™]Èš
‹›X[˜YÙ\ŠNÜËœÙ]]
‹œ]
KËœÙ]™\]Y\ÝXY\Š‹œ™\]Y\ÝXY\ŠKËœÙ]Ú]Ü™Y[X[Ê‹Ú]Ü™Y[X[ÊKË›ØY

[˜Ý[ÛŠŠ^Ýž^ÙJ‹œ\œÙJ”ÓÓ‹œ\œÙJŠJJ_XØ]Ú
J^ÚOÚJJN˜ÛÛœÛÛK™\œ›ÜŠJK‹›X[˜YÙ\‹š][Q\œ›ÜŠ
__JK‹J_\\œÙJ
^ØÛÛœÝO^ßK^ßNÙ[˜Ý[ÛˆJJ^ÚYŠ›ÚYOOYVÚWJ\™]\›ˆVÚWNØÛÛœÝ]š[\›X]™YY™™\œÖÚWKÏY[˜Ý[ÛŠJ^ÚYŠ›ÚYOO[–ÙWJ\™]\›ˆ–ÙWNØÛÛœÝO]˜\œ˜^PY™™\œËZVÙWKÏ[™]ÈZ[Ì\œ˜^JŠK˜Y™™\ŽÜ™]\›ˆ–ÙWO\ËßJ‹˜Y™™\ŠKO^J‹\KÊKÏ[™]ÈÛÊK‹œÝšYJNÜ™]\›ˆË]ZY\‹]ZYVÚWO[ËßXÛÛœÝ]š\Ò[œÝ[˜ÙYY™™\‘Ù[ÛY]žOÛ™]ÈN›™]ÈZKÏ]™]Kš[™^ÚYŠ›ÚYOO\Ê^ØÛÛœÝ^JË\KË˜\œ˜^JNÜ‹œÙ][™^
™]ÈZJJJ_XÛÛœÝO]™]K˜]šX]\ÎÙ›ÜŠÛÛœÝH[ˆJ^ØÛÛœÝXVÙWNÛ]ÎÚYŠ‹š\Ò[\›X]™YY™™\]šX]J^ØÛÛœÝOZJ™]K‹™]JNÜÏ[™]ÈÛÊK‹š][TÚ^™K‹›Ù™œÙ]‹››Ü›X[^™Y
_Y[Ù^ØÛÛœÝ^J‹\K‹˜\œ˜^JNÜÏ[™]Ê‹š\Ò[œÝ[˜ÙYY™™\]šX]OÚÛÎ“ZJJ‹š][TÚ^™K‹››Ü›X[^™Y
_]›ÚYOO[‹›˜[YI‰ŠË›˜[YO[‹›˜[YJK›ÚYOO[‹\ØYÙI‰œËœÙ]\ØYÙJ‹\ØYÙJK‹œÙ]]šX]JKÊ_XÛÛœÝÏ]™]K›[Üœ]šX]\ÎÚYŠÊY›ÜŠÛÛœÝH[ˆÊ^ØÛÛœÝ[ÖÙWKÏV×NÙ›ÜŠ]OL[‹›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ[–ÙWNÛ]NÚYŠ‹š\Ò[\›X]™YY™™\]šX]J^ØÛÛœÝOZJ™]K‹™]JNØO[™]ÈÛÊK‹š][TÚ^™K‹›Ù™œÙ]‹››Ü›X[^™Y
_Y[Ù^ØÛÛœÝ^J‹\K‹˜\œ˜^JNØO[™]ÈZJ‹š][TÚ^™K‹››Ü›X[^™Y
_]›ÚYOO\‹›˜[YI‰ŠK›˜[YO\‹›˜[YJKËœ\Ú
J_\‹›[Üœ]šX]\ÖÙWO\ß]™]K›[Üœ\™Ù]Ô™[]]™I‰Š‹›[Üœ\™Ù]Ô™[]]™OHL
NØÛÛœÝ]™]K™Ü›Ý\ß™]K™˜]ØØ[ß™]K›Ù™œÙ]ÎÚYŠ›ÚYOO[
Y›ÜŠ]LO[›[™ÝÝOOYNÊÊÝ
^ØÛÛœÝO[ÝNÜ‹˜YÜ›Ý\
KœÝ\K˜ÛÝ[K›X]\šX[[™^
_XÛÛœÝÏ]™]K˜›Ý[™[™ÔÜ\™NÚYŠ›ÚYOOXÊ^ØÛÛœÝ[™]ÈÙNÝ›ÚYOOXË˜Ù[\‰‰™œ›ÛP\œ˜^JË˜Ù[\ŠK‹˜›Ý[™[™ÔÜ\™O[™]ÈŠËœ˜Y]\Ê_\™]\›ˆ›˜[YI‰Š‹›˜[YO]›˜[YJK\Ù\‘]I‰Š‹\Ù\‘]O]\Ù\‘]JKŸ_XÛÛœÝO^ÕU“X\[™Î”ËÝX™T™Y›XÝ[Û“X\[™Î˜‹ÝX™T™Yœ˜XÝ[Û“X\[™Î•\]Z\™XÝ[™Ý[\”™Y›XÝ[Û“X\[™Î‘K\]Z\™XÝ[™Ý[\”™Yœ˜XÝ[Û“X\[™ÎËÝX™UU”™Y›XÝ[Û“X\[™Î_K]O^Ô™\X]Ü˜\[™Î”‹Û[\ÑYÙUÜ˜\[™ÎËZ\œ›Ü™Y™\X]Ü˜\[™Î“KO^Ó™X\™\Ýš[\Ž”™X\™\ÝZ\X\™X\™\Ýš[\Ž’K™X\™\ÝZ\X\[™X\‘š[\Ž•K[™X\‘š[\Ž‘[™X\“Z\X\™X\™\Ýš[\Ž“‹[™X\“Z\X\[™X\‘š[\Ž“ßNÛ]NØÛ\ÜÈ]^ÜÝ]XÈÙ]ÛÛ^

^Ü™]\›ˆ›ÚYOO\I‰ŠO[™]ÊÚ[™ÝË]Y[ÐÛÛ^Ú[™ÝËÙXšÚ]]Y[ÐÛÛ^
JK_\Ý]XÈÙ]ÛÛ^

^ÜO]_XÛÛœÝO[™]È[‹ÝO[™]È[‹ÝO[™]È[ŽØÛ\ÜÈ^ØÛÛœÝXÝÜŠHL
^Ý\Ë˜]]ÔÝ\]\ËœÝ\[YOL\Ë›Û[YOL\Ë™[\ÙY[YOL\Ëœ[›š[™ÏHL_\Ý\

^Ý\ËœÝ\[YO^J
K\Ë›Û[YO]\ËœÝ\[YK\Ë™[\ÙY[YOL\Ëœ[›š[™ÏHL\ÝÜ

^Ý\Ë™Ù][\ÙY[YJ
K\Ëœ[›š[™ÏHLK\Ë˜]]ÔÝ\HL_YÙ][\ÙY[YJ
^Ü™]\›ˆ\Ë™Ù][J
K\Ë™[\ÙY[Y_YÙ][J
^Û]LÚYŠ\Ë˜]]ÔÝ\	‰ˆ]\Ëœ[›š[™Ê\™]\›ˆ\ËœÝ\

KÚYŠ\Ëœ[›š[™Ê^ØÛÛœÝO^J
NÝJK]\Ë›Û[YJKÌYLË\Ë›Û[YOYK\Ë™[\ÙY[YJÏ]\™]\›ˆ_Y[˜Ý[ÛˆJ
^Ü™]\›Š[™Yš[™YO]\[Ùˆ\™›Ü›X[˜ÙOÑ]Nœ\™›Ü›X[˜ÙJK››ÝÊ
_XÛÛœÝ]O[™]ÈÙK]O[™]ÈÙKÝO[™]ÈÙKO[™]ÈÙNØÛ\ÜÈH^[™È›žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë\OW]Y[×‹\Ë›\Ý[™\]\Ë˜ÛÛ^]˜ÛÛ^\Ë™ØZ[]\Ë˜ÛÛ^˜Ü™X]QØZ[Š
K\Ë™ØZ[‹˜ÛÛ›™XÝ
™Ù][œ]

JK\Ë˜]]Ü^OHLK\Ë˜Y™™\[[\Ë™][™OL\Ë›ÛÜHLK\Ë›ÛÜÝ\L\Ë›ÛÜ[™L\Ë›Ù™œÙ]L\Ë™\˜][Û]›ÚY\Ëœ^X˜XÚÔ˜]OLK\Ëš\Ô^Z[™ÏHLK\Ëš\Ô^X˜XÚÐÛÛ›ÛHL\ËœÛÝ\˜ÙO[[\ËœÛÝ\˜ÙU\OW™[\W‹\Ë—ÜÝ\Y]L\Ë—Ü›ÙÜ™\ÜÏL\Ë—ØÛÛ›™XÝYHLK\Ë™š[\œÏV×_YÙ]Ý]]

^Ü™]\›ˆ\Ë™ØZ[Ÿ\Ù]›ÙTÛÝ\˜ÙJ
^Ü™]\›ˆ\Ëš\Ô^X˜XÚÐÛÛ›ÛHLK\ËœÛÝ\˜ÙU\OW˜]Y[Ó›ÙW‹\ËœÛÝ\˜ÙO]\Ë˜ÛÛ›™XÝ

K\ß\Ù]YYXQ[[Y[ÛÝ\˜ÙJ
^Ü™]\›ˆ\Ëš\Ô^X˜XÚÐÛÛ›ÛHLK\ËœÛÝ\˜ÙU\OW›YYXS›ÙW‹\ËœÛÝ\˜ÙO]\Ë˜ÛÛ^˜Ü™X]SYYXQ[[Y[ÛÝ\˜ÙJ
K\Ë˜ÛÛ›™XÝ

K\ß\Ù]YYXTÝ™X[TÛÝ\˜ÙJ
^Ü™]\›ˆ\Ëš\Ô^X˜XÚÐÛÛ›ÛHLK\ËœÛÝ\˜ÙU\OW›YYXTÝ™X[S›ÙW‹\ËœÛÝ\˜ÙO]\Ë˜ÛÛ^˜Ü™X]SYYXTÝ™X[TÛÝ\˜ÙJ
K\Ë˜ÛÛ›™XÝ

K\ß\Ù]Y™™\Š
^Ü™]\›ˆ\Ë˜Y™™\]\ËœÛÝ\˜ÙU\OW˜Y™™\—‹\Ë˜]]Ü^I‰\Ëœ^J
K\ß\^JL
^ÚYŠLOO]\Ëš\Ô^Z[™Ê\™]\›ˆ›ÚYÛÛœÛÛKØ\›Š•‘QK]Y[Îˆ]Y[È\È[™XYH^Z[™Ë—ŠNÚYŠLOOO]\Ëš\Ô^X˜XÚÐÛÛ›Û
\™]\›ˆ›ÚYÛÛœÛÛKØ\›Š•‘QK]Y[Îˆ\È]Y[È\È›È^X˜XÚÈÛÛ›Û—ŠNÝ\Ë—ÜÝ\Y]]\Ë˜ÛÛ^˜Ý\œ™[[YJÝØÛÛœÝO]\Ë˜ÛÛ^˜Ü™X]PY™™\”ÛÝ\˜ÙJ
NÜ™]\›ˆK˜Y™™\]\Ë˜Y™™\‹K›ÛÜ]\Ë›ÛÜK›ÛÜÝ\]\Ë›ÛÜÝ\K›ÛÜ[™]\Ë›ÛÜ[™K›Û™[™Y]\Ë›Û‘[™Y˜š[™
\ÊKKœÝ\
\Ë—ÜÝ\Y]\Ë—Ü›ÙÜ™\ÜÊÝ\Ë›Ù™œÙ]\Ë™\˜][ÛŠK\Ëš\Ô^Z[™ÏHL\ËœÛÝ\˜ÙOYK\ËœÙ]][™J\Ë™][™JK\ËœÙ]^X˜XÚÔ˜]J\Ëœ^X˜XÚÔ˜]JK\Ë˜ÛÛ›™XÝ

_\]\ÙJ
^ÚYŠLHOO]\Ëš\Ô^X˜XÚÐÛÛ›Û
\™]\›ˆLOO]\Ëš\Ô^Z[™É‰Š\Ë—Ü›ÙÜ™\ÜÊÏSX]›X^
\Ë˜ÛÛ^˜Ý\œ™[[YK]\Ë—ÜÝ\Y]
J\Ëœ^X˜XÚÔ˜]KLOO]\Ë›ÛÜ	‰Š\Ë—Ü›ÙÜ™\ÜÏ]\Ë—Ü›ÙÜ™\ÜÉJ\Ë™\˜][ÛŸ\Ë˜Y™™\‹™\˜][ÛŠJK\ËœÛÝ\˜ÙKœÝÜ

K\ËœÛÝ\˜ÙK›Û™[™Y[[\Ëš\Ô^Z[™ÏHLJK\ÎØÛÛœÛÛKØ\›Š•‘QK]Y[Îˆ\È]Y[È\È›È^X˜XÚÈÛÛ›Û—Š_\ÝÜ

^ÚYŠLHOO]\Ëš\Ô^X˜XÚÐÛÛ›Û
\™]\›ˆ\Ë—Ü›ÙÜ™\ÜÏL[OO]\ËœÛÝ\˜ÙI‰Š\ËœÛÝ\˜ÙKœÝÜ

K\ËœÛÝ\˜ÙK›Û™[™Y[[
K\Ëš\Ô^Z[™ÏHLK\ÎØÛÛœÛÛKØ\›Š•‘QK]Y[Îˆ\È]Y[È\È›È^X˜XÚÈÛÛ›Û—Š_XÛÛ›™XÝ

^ÚYŠ\Ë™š[\œË›[™ÝŒ
^Ý\ËœÛÝ\˜ÙK˜ÛÛ›™XÝ
\Ë™š[\œÖÌJNÙ›ÜŠ]LKO]\Ë™š[\œË›[™ÝÝNÝ
ÊÊ]\Ë™š[\œÖÝLWK˜ÛÛ›™XÝ
\Ë™š[\œÖÝJNÝ\Ë™š[\œÖÝ\Ë™š[\œË›[™ÝLWK˜ÛÛ›™XÝ
\Ë™Ù]Ý]]

J_Y[ÙH\ËœÛÝ\˜ÙK˜ÛÛ›™XÝ
\Ë™Ù]Ý]]

JNÜ™]\›ˆ\Ë—ØÛÛ›™XÝYHL\ßY\ØÛÛ›™XÝ

^ÚYŠLHOO]\Ë—ØÛÛ›™XÝY
^ÚYŠ\Ë™š[\œË›[™ÝŒ
^Ý\ËœÛÝ\˜ÙK™\ØÛÛ›™XÝ
\Ë™š[\œÖÌJNÙ›ÜŠ]LKO]\Ë™š[\œË›[™ÝÝNÝ
ÊÊ]\Ë™š[\œÖÝLWK™\ØÛÛ›™XÝ
\Ë™š[\œÖÝJNÝ\Ë™š[\œÖÝ\Ë™š[\œË›[™ÝLWK™\ØÛÛ›™XÝ
\Ë™Ù]Ý]]

J_Y[ÙH\ËœÛÝ\˜ÙK™\ØÛÛ›™XÝ
\Ë™Ù]Ý]]

JNÜ™]\›ˆ\Ë—ØÛÛ›™XÝYHLK\ß_YÙ]š[\œÊ
^Ü™]\›ˆ\Ë™š[\œß\Ù]š[\œÊ
^Ü™]\›ˆ
V×JKLOO]\Ë—ØÛÛ›™XÝYÊ\Ë™\ØÛÛ›™XÝ

K\Ë™š[\œÏ]œÛXÙJ
K\Ë˜ÛÛ›™XÝ

JN\Ë™š[\œÏ]œÛXÙJ
K\ß\Ù]][™J
^ÚYŠ\Ë™][™O]›ÚYOO]\ËœÛÝ\˜ÙK™][™J\™]\›ˆLOO]\Ëš\Ô^Z[™É‰\ËœÛÝ\˜ÙK™][™KœÙ]\™Ù]][YJ\Ë™][™K\Ë˜ÛÛ^˜Ý\œ™[[YKŒJK\ßYÙ]][™J
^Ü™]\›ˆ\Ë™][™_YÙ]š[\Š
^Ü™]\›ˆ\Ë™Ù]š[\œÊ
VÌ_\Ù]š[\Š
^Ü™]\›ˆ\ËœÙ]š[\œÊÖÝN–×J_\Ù]^X˜XÚÔ˜]J
^ÚYŠLHOO]\Ëš\Ô^X˜XÚÐÛÛ›Û
\™]\›ˆ\Ëœ^X˜XÚÔ˜]O]LOO]\Ëš\Ô^Z[™É‰\ËœÛÝ\˜ÙKœ^X˜XÚÔ˜]KœÙ]\™Ù]][YJ\Ëœ^X˜XÚÔ˜]K\Ë˜ÛÛ^˜Ý\œ™[[YKŒJK\ÎØÛÛœÛÛKØ\›Š•‘QK]Y[Îˆ\È]Y[È\È›È^X˜XÚÈÛÛ›Û—Š_YÙ]^X˜XÚÔ˜]J
^Ü™]\›ˆ\Ëœ^X˜XÚÔ˜]_[Û‘[™Y

^Ý\Ëš\Ô^Z[™ÏHL_YÙ]ÛÜ

^Ü™]\›ˆLOOO]\Ëš\Ô^X˜XÚÐÛÛ›ÛÊÛÛœÛÛKØ\›Š•‘QK]Y[Îˆ\È]Y[È\È›È^X˜XÚÈÛÛ›Û—ŠKLJN\Ë›ÛÜ\Ù]ÛÜ

^ÚYŠLHOO]\Ëš\Ô^X˜XÚÐÛÛ›Û
\™]\›ˆ\Ë›ÛÜ]LOO]\Ëš\Ô^Z[™É‰Š\ËœÛÝ\˜ÙK›ÛÜ]\Ë›ÛÜ
K\ÎØÛÛœÛÛKØ\›Š•‘QK]Y[Îˆ\È]Y[È\È›È^X˜XÚÈÛÛ›Û—Š_\Ù]ÛÜÝ\

^Ü™]\›ˆ\Ë›ÛÜÝ\]\ß\Ù]ÛÜ[™

^Ü™]\›ˆ\Ë›ÛÜ[™]\ßYÙ]›Û[YJ
^Ü™]\›ˆ\Ë™ØZ[‹™ØZ[‹˜[Y_\Ù]›Û[YJ
^Ü™]\›ˆ\Ë™ØZ[‹™ØZ[‹œÙ]\™Ù]][YJ\Ë˜ÛÛ^˜Ý\œ™[[YKŒJK\ß_XÛÛœÝ]O[™]ÈÙKÝO[™]ÈÙK]O[™]ÈÙKO[™]ÈÙNØÛ\ÜÈÝ^ØÛÛœÝXÝÜŠKŠ^Û]K‹ÎÜÝÚ]Ú
\Ë˜š[™[™Ï]\Ë˜[YTÚ^™O[‹J^ØØ\ÙWœ]X]\›š[Û—ŽšO]\Ë—ÜÛ\œ]\Ë—ÜÛ\œY]]™KÏ]\Ë—ÜÙ]Y]]™RY[]T]X]\›š[Û‹\Ë˜Y™™\[™]È›Ø]\œ˜^JŠ›ŠK\Ë—ÝÛÜšÒ[™^MNØœ™XZÎØØ\ÙWœÝš[™×Ž˜Ø\ÙW˜›ÛÛŽšO]\Ë—ÜÙ[XÝ]\Ë—ÜÙ[XÝÏ]\Ë—ÜÙ]Y]]™RY[]SÝ\‹\Ë˜Y™™\[™]È\œ˜^JJ›ŠNØœ™XZÎÙY˜][šO]\Ë—Û\œ]\Ë—Û\œY]]™KÏ]\Ë—ÜÙ]Y]]™RY[]S[Y\šXË\Ë˜Y™™\[™]È›Ø]\œ˜^JJ›Š_]\Ë—ÛZ^Y™™\”™YÚ[ÛZK\Ë—ÛZ^Y™™\”™YÚ[ÛY]]™O\‹\Ë—ÜÙ]Y[]O\Ë\Ë—ÛÜšYÒ[™^LË\Ë—ØY[™^M\Ë˜Ý[][]]™UÙZYÚL\Ë˜Ý[][]]™UÙZYÚY]]™OL\Ë\ÙPÛÝ[L\Ëœ™Y™\™[˜ÙPÛÝ[LXXØÝ[][]JJ^ØÛÛœÝ]\Ë˜Y™™\‹O]\Ë˜[YTÚ^™K]
šJÚNÛ]Ï]\Ë˜Ý[][]]™UÙZYÚÚYŠOO\Ê^Ù›ÜŠ]LÝOOZNÊÊÝ
[–ÜŠÝO[–ÝNÜÏY_Y[Ù^ÜÊÏYNØÛÛœÝYKÜÎÝ\Ë—ÛZ^Y™™\”™YÚ[ÛŠ‹‹J_]\Ë˜Ý[][]]™UÙZYÚ\ßXXØÝ[][]PY]]™J
^ØÛÛœÝO]\Ë˜Y™™\‹]\Ë˜[YTÚ^™KO[Š\Ë—ØY[™^ÌOO]\Ë˜Ý[][]]™UÙZYÚY]]™I‰\Ë—ÜÙ]Y[]J
K\Ë—ÛZ^Y™™\”™YÚ[ÛY]]™JKKŠK\Ë˜Ý[][]]™UÙZYÚY]]™JÏ]X\J
^ØÛÛœÝO]\Ë˜[YTÚ^™K]\Ë˜Y™™\‹O]
™JÙK]\Ë˜Ý[][]]™UÙZYÚÏ]\Ë˜Ý[][]]™UÙZYÚY]]™KO]\Ë˜š[™[™ÎÚYŠ\Ë˜Ý[][]]™UÙZYÚL\Ë˜Ý[][]]™UÙZYÚY]]™OLJ^ØÛÛœÝYJ\Ë—ÛÜšYÒ[™^Ý\Ë—ÛZ^Y™™\”™YÚ[ÛŠ‹KK\‹J_\ÏŒ	‰\Ë—ÛZ^Y™™\”™YÚ[ÛY]]™J‹K\Ë—ØY[™^
™KKJNÙ›ÜŠ]YKYJÙNÝOO\ŽÊÊÝ
ZYŠ–ÝHOO[–Ý
ÙWJ^ØKœÙ]˜[YJ‹JNØœ™XZß_\Ø]™SÜšYÚ[˜[Ý]J
^ØÛÛœÝ]\Ë˜š[™[™ËO]\Ë˜Y™™\‹]\Ë˜[YTÚ^™KO[Š\Ë—ÛÜšYÒ[™^Ý™Ù]˜[YJKJNÙ›ÜŠ][‹ZNÝOO\ŽÊÊÝ
YVÝOYVÚJÝ	[—NÝ\Ë—ÜÙ]Y[]J
K\Ë˜Ý[][]]™UÙZYÚL\Ë˜Ý[][]]™UÙZYÚY]]™OL\™\ÝÜ™SÜšYÚ[˜[Ý]J
^ØÛÛœÝLÊ\Ë˜[YTÚ^™NÝ\Ë˜š[™[™ËœÙ]˜[YJ\Ë˜Y™™\‹
_WÜÙ]Y]]™RY[]S[Y\šXÊ
^ØÛÛœÝ]\Ë—ØY[™^
\Ë˜[YTÚ^™KO]
Ý\Ë˜[YTÚ^™NÙ›ÜŠ]]ÛNÛŠÊÊ]\Ë˜Y™™\–Û—OLWÜÙ]Y]]™RY[]T]X]\›š[ÛŠ
^Ý\Ë—ÜÙ]Y]]™RY[]S[Y\šXÊ
K\Ë˜Y™™\–Ý\Ë—ØY[™^
\Ë˜[YTÚ^™JÌ×OL_WÜÙ]Y]]™RY[]SÝ\Š
^ØÛÛœÝ]\Ë—ÛÜšYÒ[™^
\Ë˜[YTÚ^™KO]\Ë—ØY[™^
\Ë˜[YTÚ^™NÙ›ÜŠ]LÛ\Ë˜[YTÚ^™NÛŠÊÊ]\Ë˜Y™™\–ÙJÛ—O]\Ë˜Y™™\–Ý
Û—_WÜÙ[XÝ
K‹KŠ^ÚYŠOKJY›ÜŠ]OLÚHOO\ŽÊÊÚJ]ÙJÚWO]ÛŠÚW_WÜÛ\œ
K‹J^ÚÙKœÛ\œ›]
KK‹J_WÜÛ\œY]]™JK‹KŠ^ØÛÛœÝÏ]\Ë—ÝÛÜšÒ[™^
œŽÚÙK›][\T]X]\›š[ÛœÑ›]
ËKŠKÙKœÛ\œ›]
KKËJ_WÛ\œ
K‹KŠ^ØÛÛœÝÏLKZNÙ›ÜŠ]OLØHOO\ŽÊÊØJ^ØÛÛœÝYJØNÝÜ—O]Ü—JœÊÝÛŠØWJš__WÛ\œY]]™JK‹KŠ^Ù›ÜŠ]ÏLÜÈOO\ŽÊÊÜÊ^ØÛÛœÝYJÜÎÝÜ—O]Ü—JÝÛŠÜ×Jš___XÛÛœÝOW—×WŽ—×‹O[™]È™YÑ^
–×ŠÓJ×—W‹™×ŠK]OW–×—ŠÓJ×—W‹]OW–×—ŠÓKœ™\XÙJ——‹—ŠJ×—W‹O[™]È™YÑ^
——ŠËÊ
Î•ÐÊÖ×Î—JJŠKËœÛÝ\˜ÙKœ™\XÙJ•Ð×‹]JJËÊÐÓÑ
ÊOËËœÛÝ\˜ÙKœ™\XÙJ•ÐÓÑ‹]JJËÊÎ—ŠÐÊÊJÎ—ÊŠÊWJOÊOËËœÛÝ\˜ÙKœ™\XÙJ•Ð×‹]JJË×ŠÐÊÊJÎ—ÊŠÊWJOËËœÛÝ\˜ÙKœ™\XÙJ•Ð×‹]JJ×‰ŠKOV×›X]\šX[‹›X]\šX[×‹˜›Û™\×‹›X\—NØÛ\ÜÈÝ^ØÛÛœÝXÝÜŠKŠ^Ý\Ëœ]YK\Ëœ\œÙY][ŸÝKœ\œÙU˜XÚÓ˜[YJJK\Ë››ÙOSÝK™š[™›ÙJ\Ëœ\œÙY]››ÙS˜[YJK\Ëœ›ÛÝ›ÙO]\Ë™Ù]˜[YO]\Ë—ÙÙ]˜[YWÝ[˜›Ý[™\ËœÙ]˜[YO]\Ë—ÜÙ]˜[YWÝ[˜›Ý[™\Ý]XÈÜ™X]JKŠ^Ü™]\›ˆ	‰š\Ð[š[X][Û“Øš™XÝÜ›Ý\Û™]ÈÝKÛÛ\ÜÚ]JKŠN›™]ÈÝJKŠ_\Ý]XÈØ[š]^™S›ÙS˜[YJ
^Ü™]\›ˆœ™\XÙJ×ËÙË—×ŠKœ™\XÙJK—Š_\Ý]XÈ\œÙU˜XÚÓ˜[YJ
^ØÛÛœÝOQK™^XÊ
NÚYŠ[OOYJ]›ÝÈ™]È\œ›ÜŠ”›Ü\Pš[™[™ÎˆØ[››Ý\œÙH˜XÚÓ˜[YNˆŠÝ
NØÛÛœÝ^Û›ÙS˜[YN™VÌ—KØš™XÝ˜[YN™VÌ×KØš™XÝ[™^™VÍK›Ü\S˜[YN™VÍWK›Ü\R[™^™VÍ—_KO[‹››ÙS˜[YI‰›‹››ÙS˜[YK›\Ý[™^ÙŠ‹—ŠNÚYŠ›ÚYOOZI‰‹LHOOZJ^ØÛÛœÝ[‹››ÙS˜[YKœÝXœÝš[™ÊJÌJNËLHOOSKš[™^ÙŠ
I‰Š‹››ÙS˜[YO[‹››ÙS˜[YKœÝXœÝš[™ÊJK‹›Øš™XÝ˜[YO]
_ZYŠ[OO[‹œ›Ü\S˜[Y_OO[‹œ›Ü\S˜[YK›[™Ý
]›ÝÈ™]È\œ›ÜŠ”›Ü\Pš[™[™ÎˆØ[ˆ›Ý\œÙH›Ü\S˜[YHœ›ÛH˜XÚÓ˜[YNˆŠÝ
NÜ™]\›ˆŸ\Ý]XÈš[™›ÙJJ^ÚYŠ›ÚYOOY_—OOY_‹—OOY_LOOOY_OOO]›˜[Y_OOO]]ZY
\™]\›ˆÚYŠœÚÙ[]ÛŠ^ØÛÛœÝ]œÚÙ[]Û‹™Ù]›Û™PžS˜[YJJNÚYŠ›ÚYOO[Š\™]\›ˆŸZYŠ˜Ú[™[Š^ØÛÛœÝY[˜Ý[ÛŠ
^Ù›ÜŠ]OLÚO›[™ÝÚJÊÊ^ØÛÛœÝ]ÚWNÚYŠ‹›˜[YOOOY_‹]ZYOOYJ\™]\›ˆŽØÛÛœÝÏ[Š‹˜Ú[™[ŠNÚYŠÊ\™]\›ˆß\™]\›ˆ[KO[Š˜Ú[™[ŠNÚYŠJ\™]\›ˆ_\™]\›ˆ[WÙÙ]˜[YWÝ[˜]˜Z[X›J
^ßWÜÙ]˜[YWÝ[˜]˜Z[X›J
^ßWÙÙ]˜[YWÙ\™XÝ
J^ÝÙWO]\Ë\™Ù]Øš™XÝÝ\Ëœ›Ü\S˜[YW_WÙÙ]˜[YWØ\œ˜^JJ^ØÛÛœÝ]\Ëœ™\ÛÛ™Y›Ü\NÙ›ÜŠ]OL[‹›[™ÝÚHOO\ŽÊÊÚJ]ÙJÊ×O[–ÚW_WÙÙ]˜[YWØ\œ˜^Q[[Y[
J^ÝÙWO]\Ëœ™\ÛÛ™Y›Ü\VÝ\Ëœ›Ü\R[™^_WÙÙ]˜[YWÝÐ\œ˜^JJ^Ý\Ëœ™\ÛÛ™Y›Ü\KÐ\œ˜^JJ_WÜÙ]˜[YWÙ\™XÝ
J^Ý\Ë\™Ù]Øš™XÝÝ\Ëœ›Ü\S˜[YWO]ÙW_WÜÙ]˜[YWÙ\™XÝÜÙ]™YYÕ\]JJ^Ý\Ë\™Ù]Øš™XÝÝ\Ëœ›Ü\S˜[YWO]ÙWK\Ë\™Ù]Øš™XÝ›™YYÕ\]OHLWÜÙ]˜[YWÙ\™XÝÜÙ]X]š^ÛÜ›™YYÕ\]JJ^Ý\Ë\™Ù]Øš™XÝÝ\Ëœ›Ü\S˜[YWO]ÙWK\Ë\™Ù]Øš™XÝ›X]š^ÛÜ›™YYÕ\]OHLWÜÙ]˜[YWØ\œ˜^JJ^ØÛÛœÝ]\Ëœ™\ÛÛ™Y›Ü\NÙ›ÜŠ]OL[‹›[™ÝÚHOO\ŽÊÊÚJ[–ÚWO]ÙJÊ×_WÜÙ]˜[YWØ\œ˜^WÜÙ]™YYÕ\]JJ^ØÛÛœÝ]\Ëœ™\ÛÛ™Y›Ü\NÙ›ÜŠ]OL[‹›[™ÝÚHOO\ŽÊÊÚJ[–ÚWO]ÙJÊ×NÝ\Ë\™Ù]Øš™XÝ›™YYÕ\]OHLWÜÙ]˜[YWØ\œ˜^WÜÙ]X]š^ÛÜ›™YYÕ\]JJ^ØÛÛœÝ]\Ëœ™\ÛÛ™Y›Ü\NÙ›ÜŠ]OL[‹›[™ÝÚHOO\ŽÊÊÚJ[–ÚWO]ÙJÊ×NÝ\Ë\™Ù]Øš™XÝ›X]š^ÛÜ›™YYÕ\]OHLWÜÙ]˜[YWØ\œ˜^Q[[Y[
J^Ý\Ëœ™\ÛÛ™Y›Ü\VÝ\Ëœ›Ü\R[™^O]ÙW_WÜÙ]˜[YWØ\œ˜^Q[[Y[ÜÙ]™YYÕ\]JJ^Ý\Ëœ™\ÛÛ™Y›Ü\VÝ\Ëœ›Ü\R[™^O]ÙWK\Ë\™Ù]Øš™XÝ›™YYÕ\]OHLWÜÙ]˜[YWØ\œ˜^Q[[Y[ÜÙ]X]š^ÛÜ›™YYÕ\]JJ^Ý\Ëœ™\ÛÛ™Y›Ü\VÝ\Ëœ›Ü\R[™^O]ÙWK\Ë\™Ù]Øš™XÝ›X]š^ÛÜ›™YYÕ\]OHLWÜÙ]˜[YWÙœ›ÛP\œ˜^JJ^Ý\Ëœ™\ÛÛ™Y›Ü\K™œ›ÛP\œ˜^JJ_WÜÙ]˜[YWÙœ›ÛP\œ˜^WÜÙ]™YYÕ\]JJ^Ý\Ëœ™\ÛÛ™Y›Ü\K™œ›ÛP\œ˜^JJK\Ë\™Ù]Øš™XÝ›™YYÕ\]OHLWÜÙ]˜[YWÙœ›ÛP\œ˜^WÜÙ]X]š^ÛÜ›™YYÕ\]JJ^Ý\Ëœ™\ÛÛ™Y›Ü\K™œ›ÛP\œ˜^JJK\Ë\™Ù]Øš™XÝ›X]š^ÛÜ›™YYÕ\]OHLWÙÙ]˜[YWÝ[˜›Ý[™
J^Ý\Ë˜š[™

K\Ë™Ù]˜[YJJ_WÜÙ]˜[YWÝ[˜›Ý[™
J^Ý\Ë˜š[™

K\ËœÙ]˜[YJJ_Xš[™

^Û]]\Ë››ÙNØÛÛœÝO]\Ëœ\œÙY]YK›Øš™XÝ˜[YKOYKœ›Ü\S˜[YNÛ]YKœ›Ü\R[™^ÚYŠ
SÝK™š[™›ÙJ\Ëœ›ÛÝ›ÙKK››ÙS˜[YJK\Ë››ÙO]
K\Ë™Ù]˜[YO]\Ë—ÙÙ]˜[YWÝ[˜]˜Z[X›K\ËœÙ]˜[YO]\Ë—ÜÙ]˜[YWÝ[˜]˜Z[X›K]
\™]\›ˆ›ÚYÛÛœÛÛKØ\›Š•‘QK”›Ü\Pš[™[™Îˆ›È\™Ù]›ÙH›Ý[™›Üˆ˜XÚÎˆŠÝ\Ëœ]
×‹—ŠNÚYŠŠ^Û]OYK›Øš™XÝ[™^ÜÝÚ]Ú
Š^ØØ\ÙW›X]\šX[×ŽšYŠ]›X]\šX[
\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™ÈX]\šX[\È›ÙHÙ\È›Ý]™HHX]\šX[—‹\ÊNÚYŠ]›X]\šX[›X]\šX[Ê\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™ÈX]\šX[›X]\šX[È\È›ÙK›X]\šX[Ù\È›Ý]™HHX]\šX[È\œ˜^K—‹\ÊNÝ]›X]\šX[›X]\šX[ÎØœ™XZÎØØ\ÙW˜›Û™\×ŽšYŠ]œÚÙ[]ÛŠ\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™È›Û™\È\È›ÙHÙ\È›Ý]™HHÚÙ[]Û‹—‹\ÊNÝ]œÚÙ[]Û‹˜›Û™\ÎÙ›ÜŠ]OLÙO›[™ÝÙJÊÊZYŠÙWK›˜[YOOOZJ^ÚOYNØœ™XZßXœ™XZÎØØ\ÙW›X\ŽšYŠ›X\š[ˆ
^Ý]›X\Øœ™XZßZYŠ]›X]\šX[
\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™ÈX]\šX[\È›ÙHÙ\È›Ý]™HHX]\šX[—‹\ÊNÚYŠ]›X]\šX[›X\
\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™ÈX]\šX[›X\\È›ÙK›X]\šX[Ù\È›Ý]™HHX\—‹\ÊNÝ]›X]\šX[›X\Øœ™XZÎÙY˜][šYŠ›ÚYOO]Û—J\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™ÈØš™XÝ˜[YHÙˆ›ÙH[™Yš[™Y—‹\ÊNÝ]Û—_ZYŠ›ÚYOOZJ^ÚYŠ›ÚYOO]ÚWJ\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆžZ[™ÈÈš[™ÈØš™XÝ[™^ÙˆØš™XÝ˜[YK]\È[™Yš[™Y—‹\Ë
NÝ]ÚW__XÛÛœÝÏ]ÚWNÚYŠ›ÚYOO\Ê^ØÛÛœÝYK››ÙS˜[YNÜ™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆžZ[™ÈÈ\]H›Ü\H›Üˆ˜XÚÎˆŠÛŠ×‹—ŠÚJ×ˆ]]Ø\Û‰Ý›Ý[™—‹
_[]O]\Ë•™\œÚ[Ûš[™Ë“›Û™NÝ\Ë\™Ù]Øš™XÝ]›ÚYOO]›™YYÕ\]OØO]\Ë•™\œÚ[Ûš[™Ë“™YYÕ\]N›ÚYOO]›X]š^ÛÜ›™YYÕ\]I‰ŠO]\Ë•™\œÚ[Ûš[™Ë“X]š^ÛÜ›™YYÕ\]JNÛ]Ï]\Ëš[™[™Õ\K‘\™XÝÚYŠ›ÚYOO\Š^ÚYŠ›[Üœ\™Ù][™›Y[˜Ù\×OOZJ^ÚYŠ]™Ù[ÛY]žJ\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™È[Üœ\™Ù][™›Y[˜Ù\È™XØ]\ÙH›ÙHÙ\È›Ý]™HHÙ[ÛY]žK—‹\ÊNÚYŠ]™Ù[ÛY]žK›[Üœ]šX]\Ê\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK”›Ü\Pš[™[™ÎˆØ[ˆ›Ýš[™È[Üœ\™Ù][™›Y[˜Ù\È™XØ]\ÙH›ÙHÙ\È›Ý]™HHÙ[ÛY]žK›[Üœ]šX]\Ë—‹\ÊNÝ›ÚYOO]›[Üœ\™Ù]XÝ[Û˜\žVÜ—I‰Š]›[Üœ\™Ù]XÝ[Û˜\žVÜ—J_[Ï]\Ëš[™[™Õ\K\œ˜^Q[[Y[\Ëœ™\ÛÛ™Y›Ü\O\Ë\Ëœ›Ü\R[™^\ŸY[ÙH›ÚYOO\Ë™œ›ÛP\œ˜^I‰›ÚYOO\ËÐ\œ˜^OÊÏ]\Ëš[™[™Õ\K’\Ñœ›ÛUÐ\œ˜^K\Ëœ™\ÛÛ™Y›Ü\O\ÊN\œ˜^Kš\Ð\œ˜^JÊOÊÏ]\Ëš[™[™Õ\K‘[\™P\œ˜^K\Ëœ™\ÛÛ™Y›Ü\O\ÊN\Ëœ›Ü\S˜[YOZNÝ\Ë™Ù]˜[YO]\Ë‘Ù]\žPš[™[™Õ\VÛ×K\ËœÙ]˜[YO]\Ë”Ù]\žPš[™[™Õ\P[™™\œÚ[Ûš[™ÖÛ×VØW_][˜š[™

^Ý\Ë››ÙO[[\Ë™Ù]˜[YO]\Ë—ÙÙ]˜[YWÝ[˜›Ý[™\ËœÙ]˜[YO]\Ë—ÜÙ]˜[YWÝ[˜›Ý[™_SÝKÛÛ\ÜÚ]OXÛ\ÜÞØÛÛœÝXÝÜŠKŠ^ØÛÛœÝO[ŸÝKœ\œÙU˜XÚÓ˜[YJJNÝ\Ë—Ý\™Ù]Ü›Ý\]\Ë—Øš[™[™ÜÏ]œÝXœØÜšX™WÊKJ_YÙ]˜[YJJ^Ý\Ë˜š[™

NØÛÛœÝ]\Ë—Ý\™Ù]Ü›Ý\›ØXÚYØš™XÝ×ËO]\Ë—Øš[™[™ÜÖÛ—NÝ›ÚYOOZI‰šK™Ù]˜[YJJ_\Ù]˜[YJJ^ØÛÛœÝ]\Ë—Øš[™[™ÜÎÙ›ÜŠ]O]\Ë—Ý\™Ù]Ü›Ý\›ØXÚYØš™XÝ×Ë[‹›[™ÝÚHOO\ŽÊÊÚJ[–ÚWKœÙ]˜[YJJ_Xš[™

^ØÛÛœÝ]\Ë—Øš[™[™ÜÎÙ›ÜŠ]O]\Ë—Ý\™Ù]Ü›Ý\›ØXÚYØš™XÝ×Ë]›[™ÝÙHOO[ŽÊÊÙJ]ÙWK˜š[™

_][˜š[™

^ØÛÛœÝ]\Ë—Øš[™[™ÜÎÙ›ÜŠ]O]\Ë—Ý\™Ù]Ü›Ý\›ØXÚYØš™XÝ×Ë]›[™ÝÙHOO[ŽÊÊÙJ]ÙWK[˜š[™

__KÝKœ›ÝÝ\Kš[™[™Õ\O^Ñ\™XÝŒ[\™P\œ˜^NŒK\œ˜^Q[[Y[Œ‹\Ñœ›ÛUÐ\œ˜^NŒßKÝKœ›ÝÝ\K•™\œÚ[Ûš[™Ï^Ó›Û™NŒ™YYÕ\]NŒKX]š^ÛÜ›™YYÕ\]NŒŸKÝKœ›ÝÝ\K‘Ù]\žPš[™[™Õ\OVÓÝKœ›ÝÝ\K—ÙÙ]˜[YWÙ\™XÝÝKœ›ÝÝ\K—ÙÙ]˜[YWØ\œ˜^KÝKœ›ÝÝ\K—ÙÙ]˜[YWØ\œ˜^Q[[Y[ÝKœ›ÝÝ\K—ÙÙ]˜[YWÝÐ\œ˜^WKÝKœ›ÝÝ\K”Ù]\žPš[™[™Õ\P[™™\œÚ[Ûš[™ÏVÖÓÝKœ›ÝÝ\K—ÜÙ]˜[YWÙ\™XÝÝKœ›ÝÝ\K—ÜÙ]˜[YWÙ\™XÝÜÙ]™YYÕ\]KÝKœ›ÝÝ\K—ÜÙ]˜[YWÙ\™XÝÜÙ]X]š^ÛÜ›™YYÕ\]WKÓÝKœ›ÝÝ\K—ÜÙ]˜[YWØ\œ˜^KÝKœ›ÝÝ\K—ÜÙ]˜[YWØ\œ˜^WÜÙ]™YYÕ\]KÝKœ›ÝÝ\K—ÜÙ]˜[YWØ\œ˜^WÜÙ]X]š^ÛÜ›™YYÕ\]WKÓÝKœ›ÝÝ\K—ÜÙ]˜[YWØ\œ˜^Q[[Y[ÝKœ›ÝÝ\K—ÜÙ]˜[YWØ\œ˜^Q[[Y[ÜÙ]™YYÕ\]KÝKœ›ÝÝ\K—ÜÙ]˜[YWØ\œ˜^Q[[Y[ÜÙ]X]š^ÛÜ›™YYÕ\]WKÓÝKœ›ÝÝ\K—ÜÙ]˜[YWÙœ›ÛP\œ˜^KÝKœ›ÝÝ\K—ÜÙ]˜[YWÙœ›ÛP\œ˜^WÜÙ]™YYÕ\]KÝKœ›ÝÝ\K—ÜÙ]˜[YWÙœ›ÛP\œ˜^WÜÙ]X]š^ÛÜ›™YYÕ\]WWNØÛ\ÜÈ^ØÛÛœÝXÝÜŠK[[OYK˜›[™[ÙJ^Ý\Ë—ÛZ^\]\Ë—ØÛ\YK\Ë—ÛØØ[›ÛÝ[‹\Ë˜›[™[ÙOZNØÛÛœÝYK˜XÚÜËÏ\‹›[™ÝO[™]È\œ˜^JÊKÏ^Ù[™[™ÔÝ\’][™[™Ñ[™’]NÙ›ÜŠ]LÝOO\ÎÊÊÝ
^ØÛÛœÝO\–ÝK˜Ü™X]R[\œÛ[
[
NØVÝOYKKœÙ][™ÜÏ[ß]\Ë—Ú[\œÛ[Ù][™ÜÏ[Ë\Ë—Ú[\œÛ[ÏXK\Ë—Ü›Ü\Pš[™[™ÜÏ[™]È\œ˜^JÊK\Ë—ØØXÚR[™^[[\Ë—ØžPÛ\ØXÚR[™^[[\Ë—Ý[YTØØ[R[\œÛ[[[\Ë—ÝÙZYÚ[\œÛ[[[\Ë›ÛÜLŒŒK\Ë—ÛÛÜÛÝ[KLK\Ë—ÜÝ\[YO[[\Ë[YOL\Ë[YTØØ[OLK\Ë—ÙY™™XÝ]™U[YTØØ[OLK\ËÙZYÚLK\Ë—ÙY™™XÝ]™UÙZYÚLK\Ëœ™\]][ÛœÏLKÌ\Ëœ]\ÙYHLK\Ë™[˜X›YHL\Ë˜Û[\Ú[‘š[š\ÚYHLK\Ëž™\›ÔÛÜP]Ý\HL\Ëž™\›ÔÛÜP][™HL\^J
^Ü™]\›ˆ\Ë—ÛZ^\‹—ØXÝ]˜]PXÝ[ÛŠ\ÊK\ß\ÝÜ

^Ü™]\›ˆ\Ë—ÛZ^\‹—ÙXXÝ]˜]PXÝ[ÛŠ\ÊK\Ëœ™\Ù]

_\™\Ù]

^Ü™]\›ˆ\Ëœ]\ÙYHLK\Ë™[˜X›YHL\Ë[YOL\Ë—ÛÛÜÛÝ[KLK\Ë—ÜÝ\[YO[[\ËœÝÜ˜Y[™Ê
KœÝÜØ\œ[™Ê
_Z\Ô[›š[™Ê
^Ü™]\›ˆ\Ë™[˜X›Y	‰ˆ]\Ëœ]\ÙY	‰ŒOO]\Ë[YTØØ[I‰›[OO]\Ë—ÜÝ\[YI‰\Ë—ÛZ^\‹—Ú\ÐXÝ]™PXÝ[ÛŠ\Ê_Z\ÔØÚY[Y

^Ü™]\›ˆ\Ë—ÛZ^\‹—Ú\ÐXÝ]™PXÝ[ÛŠ\Ê_\Ý\]

^Ü™]\›ˆ\Ë—ÜÝ\[YO]\ß\Ù]ÛÜ
J^Ü™]\›ˆ\Ë›ÛÜ]\Ëœ™\]][ÛœÏYK\ß\Ù]Y™™XÝ]™UÙZYÚ

^Ü™]\›ˆ\ËÙZYÚ]\Ë—ÙY™™XÝ]™UÙZYÚ]\Ë™[˜X›YÝŒ\ËœÝÜ˜Y[™Ê
_YÙ]Y™™XÝ]™UÙZYÚ

^Ü™]\›ˆ\Ë—ÙY™™XÝ]™UÙZYÚY˜YR[Š
^Ü™]\›ˆ\Ë—ÜØÚY[Q˜Y[™ÊJ_Y˜YSÝ]

^Ü™]\›ˆ\Ë—ÜØÚY[Q˜Y[™ÊK
_XÜ›ÜÜÑ˜YQœ›ÛJKŠ^ÚYŠ™˜YSÝ]
JK\Ë™˜YR[ŠJKŠ^ØÛÛœÝ]\Ë—ØÛ\™\˜][Û‹O]—ØÛ\™\˜][Û‹ZKÛ‹Ï[‹ÚNÝØ\œ
K‹JK\ËØ\œ
ËKJ_\™]\›ˆ\ßXÜ›ÜÜÑ˜YUÊKŠ^Ü™]\›ˆ˜Ü›ÜÜÑ˜YQœ›ÛJ\ËKŠ_\ÝÜ˜Y[™Ê
^ØÛÛœÝ]\Ë—ÝÙZYÚ[\œÛ[Ü™]\›ˆ[OO]	‰Š\Ë—ÝÙZYÚ[\œÛ[[[\Ë—ÛZ^\‹—ÝZÙP˜XÚÐÛÛ›Û[\œÛ[

JK\ß\Ù]Y™™XÝ]™U[YTØØ[J
^Ü™]\›ˆ\Ë[YTØØ[O]\Ë—ÙY™™XÝ]™U[YTØØ[O]\Ëœ]\ÙYÌ\ËœÝÜØ\œ[™Ê
_YÙ]Y™™XÝ]™U[YTØØ[J
^Ü™]\›ˆ\Ë—ÙY™™XÝ]™U[YTØØ[_\Ù]\˜][ÛŠ
^Ü™]\›ˆ\Ë[YTØØ[O]\Ë—ØÛ\™\˜][Û‹Ý\ËœÝÜØ\œ[™Ê
_\Þ[˜ÕÚ]

^Ü™]\›ˆ\Ë[YO][YK\Ë[YTØØ[O][YTØØ[K\ËœÝÜØ\œ[™Ê
_Z[

^Ü™]\›ˆ\ËØ\œ
\Ë—ÙY™™XÝ]™U[YTØØ[K
_]Ø\œ
KŠ^ØÛÛœÝO]\Ë—ÛZ^\‹ZK[YKÏ]\Ë[YTØØ[NÛ]O]\Ë—Ý[YTØØ[R[\œÛ[Û[OOXI‰ŠOZK—Û[™ÛÛ›Û[\œÛ[

K\Ë—Ý[YTØØ[R[\œÛ[XJNØÛÛœÝÏXKœ\˜[Y]\”ÜÚ][ÛœËXKœØ[\U˜[Y\ÎÜ™]\›ˆÖÌO\‹ÖÌWO\ŠÛ‹ÌO]ÜËÌWOYKÜË\ß\ÝÜØ\œ[™Ê
^ØÛÛœÝ]\Ë—Ý[YTØØ[R[\œÛ[Ü™]\›ˆ[OO]	‰Š\Ë—Ý[YTØØ[R[\œÛ[[[\Ë—ÛZ^\‹—ÝZÙP˜XÚÐÛÛ›Û[\œÛ[

JK\ßYÙ]Z^\Š
^Ü™]\›ˆ\Ë—ÛZ^\ŸYÙ]Û\

^Ü™]\›ˆ\Ë—ØÛ\YÙ]›ÛÝ

^Ü™]\›ˆ\Ë—ÛØØ[›ÛÝ\Ë—ÛZ^\‹—Ü›ÛÝWÝ\]JK‹J^ÚYŠ]\Ë™[˜X›Y
\™]\›ˆ›ÚY\Ë—Ý\]UÙZYÚ

NØÛÛœÝ]\Ë—ÜÝ\[YNÚYŠ[OO\Š^ØÛÛœÝOJ\ŠJ›ŽÚOOO[ÙOLŠ\Ë—ÜÝ\[YO[[O[ŠšJ_YJ]\Ë—Ý\]U[YTØØ[J
NØÛÛœÝÏ]\Ë—Ý\]U[YJJKO]\Ë—Ý\]UÙZYÚ

NÚYŠOŒ
^ØÛÛœÝ]\Ë—Ú[\œÛ[ËO]\Ë—Ü›Ü\Pš[™[™ÜÎÚYŠ\Ë˜›[™[ÙOOOSÝ
Y›ÜŠ]LO]›[™ÝÛˆOOZNÊÊÛŠ]Û—K™]˜[X]JÊKVÛ—K˜XØÝ[][]PY]]™JJNÙ[ÙH›ÜŠ]L]›[™ÝÛˆOO\ŽÊÊÛŠ]Û—K™]˜[X]JÊKVÛ—K˜XØÝ[][]JKJ__WÝ\]UÙZYÚ

^Û]OLÚYŠ\Ë™[˜X›Y
^ÙO]\ËÙZYÚØÛÛœÝ]\Ë—ÝÙZYÚ[\œÛ[ÚYŠ[OO[Š^ØÛÛœÝO[‹™]˜[X]J
VÌNÙJZK›‹œ\˜[Y]\”ÜÚ][ÛœÖÌWI‰Š\ËœÝÜ˜Y[™Ê
KOOZI‰Š\Ë™[˜X›YHLJJ__\™]\›ˆ\Ë—ÙY™™XÝ]™UÙZYÚYK_WÝ\]U[YTØØ[J
^Û]OLÚYŠ]\Ëœ]\ÙY
^ÙO]\Ë[YTØØ[NØÛÛœÝ]\Ë—Ý[YTØØ[R[\œÛ[ÚYŠ[OO[Š^ÙJ[‹™]˜[X]J
VÌK›‹œ\˜[Y]\”ÜÚ][ÛœÖÌWI‰Š\ËœÝÜØ\œ[™Ê
KOOYOÝ\Ëœ]\ÙYHL\Ë[YTØØ[OYJ__\™]\›ˆ\Ë—ÙY™™XÝ]™U[YTØØ[OYK_WÝ\]U[YJ
^ØÛÛœÝO]\Ë—ØÛ\™\˜][Û‹]\Ë›ÛÜÛ]O]\Ë[YJÝ]\Ë—ÛÛÜÛÝ[ØÛÛœÝÏLŒŒOO[ŽÚYŠOO]
\™]\›‹LOOO\ÚNœÉ‰ŒOOJIœŠOÙKZNšNÚYŠŒŒOO[Š^ËLOOO\‰‰Š\Ë—ÛÛÜÛÝ[L\Ë—ÜÙ][™[™ÜÊLLLJJNÝžÚYŠOYJZOYNÙ[Ù^ÚYŠJO
J^Ý\Ë[YOZNØœ™XZÈZOL]\Ë˜Û[\Ú[‘š[š\ÚYÝ\Ëœ]\ÙYHL\Ë™[˜X›YHLK\Ë[YOZK\Ë—ÛZ^\‹™\Ü]Ú]™[
Ý\N—™š[š\ÚY‹XÝ[ÛŽ\Ë\™XÝ[ÛŽËLNŒ_J__Y[Ù^ÚYŠLOOO\‰‰ŠLÊL\Ë—ÜÙ][™[™ÜÊLOO]\Ëœ™\]][ÛœËÊJN\Ë—ÜÙ][™[™ÜÊOO]\Ëœ™\]][ÛœËLÊJKOY_O
^ØÛÛœÝSX]™›ÛÜŠKÙJNÚKOYJ›‹ŠÏSX]˜XœÊŠNØÛÛœÝO]\Ëœ™\]][ÛœË\ŽÚYŠOL
]\Ë˜Û[\Ú[‘š[š\ÚYÝ\Ëœ]\ÙYHL\Ë™[˜X›YHLKO]ŒÙNŒ\Ë[YOZK\Ë—ÛZ^\‹™\Ü]Ú]™[
Ý\N—™š[š\ÚY‹XÝ[ÛŽ\Ë\™XÝ[ÛŽŒÌN‹L_JNÙ[Ù^ÚYŠOOOXJ^ØÛÛœÝO]Ý\Ë—ÜÙ][™[™ÜÊKYKÊ_Y[ÙH\Ë—ÜÙ][™[™ÜÊLKLKÊNÝ\Ë—ÛÛÜÛÝ[\‹\Ë[YOZK\Ë—ÛZ^\‹™\Ü]Ú]™[
Ý\N—›ÛÜ‹XÝ[ÛŽ\ËÛÜ[N›ŸJ__Y[ÙH\Ë[YOZNÚYŠÉ‰ŒOOJIœŠJ\™]\›ˆKZ_\™]\›ˆ_WÜÙ][™[™ÜÊKŠ^ØÛÛœÝO]\Ë—Ú[\œÛ[Ù][™ÜÎÛÊK™[™[™ÔÝ\U]K™[™[™Ñ[™U]
NŠK™[™[™ÔÝ\]Ý\Ëž™\›ÔÛÜP]Ý\Õ]’]‘K™[™[™Ñ[™YOÝ\Ëž™\›ÔÛÜP][™Õ]’]‘
_WÜØÚY[Q˜Y[™ÊKŠ^ØÛÛœÝO]\Ë—ÛZ^\‹ZK[YNÛ]Ï]\Ë—ÝÙZYÚ[\œÛ[Û[OO\É‰ŠÏZK—Û[™ÛÛ›Û[\œÛ[

K\Ë—ÝÙZYÚ[\œÛ[\ÊNØÛÛœÝO\Ëœ\˜[Y]\”ÜÚ][ÛœËÏ\ËœØ[\U˜[Y\ÎÜ™]\›ˆVÌO\‹ÖÌOYKVÌWO\ŠÝÖÌWO[‹\ß_XÛÛœÝO[™]È›Ø]Ì\œ˜^JJNØÛ\ÜÈ^ØÛÛœÝXÝÜŠ
^Ý\Ë˜[YO]XÛÛ™J
^Ü™]\›ˆ™]ÈJ›ÚYOO]\Ë˜[YK˜ÛÛ™OÝ\Ë˜[YN\Ë˜[YK˜ÛÛ™J
J__[]ÝOLÙ[˜Ý[ÛˆJJ^Ü™]\›ˆ™\Ý[˜ÙKYK™\Ý[˜Ù_Y[˜Ý[ÛˆJK‹J^ÚYŠ›^Y\œË\Ý
K›^Y\œÊI‰œ˜^XØ\Ý
KŠKLOOZJ^ØÛÛœÝO]˜Ú[™[ŽÙ›ÜŠ]LZK›[™ÝÝŽÝ
ÊÊUJVÝKK‹L
__XÛÛœÝÝO[™]ÈYNØÛÛœÝÝO[™]ÈÙKO[™]ÈÙNØÛÛœÝO[™]ÈÙNØÛÛœÝ]O[™]ÈÙK]O[™]È[‹O[™]È[ŽÙ[˜Ý[ÛˆJ
^ØÛÛœÝOV×NÈLOO]š\Ð›Û™I‰™Kœ\Ú

NÙ›ÜŠ]LÛ˜Ú[™[‹›[™ÝÛŠÊÊYKœ\Ú˜\JKJ˜Ú[™[–Û—JJNÜ™]\›ˆ_XÛÛœÝÝO[™]ÈÙK	O[™]ÈÚK]O[™]ÈÚNØÛÛœÝ[™]ÈÙKY[™]ÈÙK™[™]ÈÙNØÛÛœÝY[™]ÈÙK™[™]ÈœŽÙ[˜Ý[ÛˆÙ
K‹K‹ËJ^ÚYœÙ]
‹ËJK[œ›Ú™XÝ
JNØÛÛœÝÏYVÝNÚYŠ›ÚYOO[Ê^ØÛÛœÝ[‹™Ù]]šX]JœÜÚ][Û—ŠNÙ›ÜŠ]OL[Ë›[™ÝÙOŽÙJÊÊ]œÙ]VŠÖÙWKYžYžKYžŠ__XÛÛœÝY[™]ÈYNØÛÛœÝÙ[™]ÈÙNÛ]Ù×[™Yš[™YˆO]\[Ùˆ×Õ‘QWÑU•ÓÓ××É‰—×Õ‘QWÑU•ÓÓ××Ë™\Ü]Ú]™[
™]ÈÝ\ÝÛQ]™[
œ™YÚ\Ý\—‹Ù]Z[žÜ™]š\Ú[ÛŽ™__JJK[™Yš[™YˆO]\[ÙˆÚ[™ÝÉ‰ŠÚ[™ÝË—×Õ‘QW×ÏØÛÛœÛÛKØ\›Š•ÐT“’S‘Îˆ][\H[œÝ[˜Ù\ÈÙˆ™YKšœÈ™Z[™È[\ÜY—ŠNÚ[™ÝË—×Õ‘QW×ÏYJKPÑTÑš[ZXÕÛ™SX\[™ÏWËY\]X][Û[ËYÜ\˜][ÛYY]]™P[š[X][Û›[™[ÙOSÝY]]™P›[™[™ÏL‹YÖÛ™SX\[™Ï^[Q›Ü›X]LLŒK[Ø^\ÐÛÛ\\™OMLNK[Ø^\Ñ\LK[Ø^\ÔÝ[˜Ú[[˜ÏMLNK[XšY[YÚ[K[š[X][ÛXÝ[ÛQK[š[X][ÛÛ\T[š[X][Û“ØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ]\ËÏ[™]Èš
\Ë›X[˜YÙ\ŠNÜËœÙ]]
\Ëœ]
KËœÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠKËœÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊKË›ØY

[˜Ý[ÛŠŠ^Ýž^ÙJ‹œ\œÙJ”ÓÓ‹œ\œÙJŠJJ_XØ]Ú
J^ÚOÚJJN˜ÛÛœÛÛK™\œ›ÜŠJK‹›X[˜YÙ\‹š][Q\œ›ÜŠ
__JK‹J_\\œÙJ
^ØÛÛœÝOV×NÙ›ÜŠ]LÛ›[™ÝÛŠÊÊ^ØÛÛœÝOTœ\œÙJÛ—JNÙKœ\Ú
J_\™]\›ˆ__K[š[X][Û“Z^\XÛ\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë—Ü›ÛÝ]\Ë—Ú[š]Y[[ÜžSX[˜YÙ\Š
K\Ë—ØXØÝR[™^L\Ë[YOL\Ë[YTØØ[OL_WØš[™XÝ[ÛŠJ^ØÛÛœÝ]—ÛØØ[›ÛÝ\Ë—Ü›ÛÝO]—ØÛ\˜XÚÜËZK›[™ÝÏ]—Ü›Ü\Pš[™[™ÜËO]—Ú[\œÛ[ËÏ[‹]ZY]\Ë—Øš[™[™ÜÐžT›ÛÝ[™˜[YNÛ]Ï[Û×NÝ›ÚYOOXÉ‰ŠÏ^ßKÛ×OXÊNÙ›ÜŠ]LÝOO\ŽÊÊÝ
^ØÛÛœÝZVÝK\‹›˜[YNÛ]XÖÛNÚYŠ›ÚYOOZ
JÊÚœ™Y™\™[˜ÙPÛÝ[ÖÝOZÙ[Ù^ÚYŠ\ÖÝK›ÚYOOZ
^Û[OOZ—ØØXÚR[™^	‰Š
ÊÚœ™Y™\™[˜ÙPÛÝ[\Ë—ØY[˜XÝ]™Pš[™[™ÊË
JNØÛÛ[Y_XÛÛœÝOYI‰™K—Ü›Ü\Pš[™[™ÜÖÝK˜š[™[™Ëœ\œÙY]Ú[™]ÈÝJÝK˜Ü™X]J‹JK‹•˜[YU\S˜[YK‹™Ù]˜[YTÚ^™J
JK
ÊÚœ™Y™\™[˜ÙPÛÝ[\Ë—ØY[˜XÝ]™Pš[™[™ÊË
KÖÝOZXVÝKœ™\Ý[Y™™\Z˜Y™™\Ÿ_WØXÝ]˜]PXÝ[ÛŠ
^ÚYŠ]\Ë—Ú\ÐXÝ]™PXÝ[ÛŠ
J^ÚYŠ[OO]—ØØXÚR[™^
^ØÛÛœÝOJ—ÛØØ[›ÛÝ\Ë—Ü›ÛÝ
K]ZY]—ØÛ\]ZYO]\Ë—ØXÝ[ÛœÐžPÛ\Û—NÝ\Ë—Øš[™XÝ[ÛŠI‰šKšÛ›ÝÛXÝ[ÛœÖÌJK\Ë—ØY[˜XÝ]™PXÝ[ÛŠ‹J_XÛÛœÝO]—Ü›Ü\Pš[™[™ÜÎÙ›ÜŠ]LYK›[™ÝÝOO[ŽÊÊÝ
^ØÛÛœÝYVÝNÌO[‹\ÙPÛÝ[
ÊÉ‰Š\Ë—Û[™š[™[™ÊŠK‹œØ]™SÜšYÚ[˜[Ý]J
J_]\Ë—Û[™XÝ[ÛŠ
__WÙXXÝ]˜]PXÝ[ÛŠ
^ÚYŠ\Ë—Ú\ÐXÝ]™PXÝ[ÛŠ
J^ØÛÛœÝO]—Ü›Ü\Pš[™[™ÜÎÙ›ÜŠ]LYK›[™ÝÝOO[ŽÊÊÝ
^ØÛÛœÝYVÝNÌOKK[‹\ÙPÛÝ[	‰Š‹œ™\ÝÜ™SÜšYÚ[˜[Ý]J
K\Ë—ÝZÙP˜XÚÐš[™[™ÊŠJ_]\Ë—ÝZÙP˜XÚÐXÝ[ÛŠ
__WÚ[š]Y[[ÜžSX[˜YÙ\Š
^Ý\Ë—ØXÝ[ÛœÏV×K\Ë—ÛXÝ]™PXÝ[ÛœÏL\Ë—ØXÝ[ÛœÐžPÛ\^ßK\Ë—Øš[™[™ÜÏV×K\Ë—ÛXÝ]™Pš[™[™ÜÏL\Ë—Øš[™[™ÜÐžT›ÛÝ[™˜[YO^ßK\Ë—ØÛÛ›Û[\œÛ[ÏV×K\Ë—ÛXÝ]™PÛÛ›Û[\œÛ[ÏLØÛÛœÝ]\ÎÝ\ËœÝ]Ï^ØXÝ[ÛœÎžÙÙ]Ý[

^Ü™]\›ˆ—ØXÝ[ÛœË›[™ÝKÙ][•\ÙJ
^Ü™]\›ˆ—ÛXÝ]™PXÝ[Ûœß_Kš[™[™ÜÎžÙÙ]Ý[

^Ü™]\›ˆ—Øš[™[™ÜË›[™ÝKÙ][•\ÙJ
^Ü™]\›ˆ—ÛXÝ]™Pš[™[™Üß_KÛÛ›Û[\œÛ[ÎžÙÙ]Ý[

^Ü™]\›ˆ—ØÛÛ›Û[\œÛ[Ë›[™ÝKÙ][•\ÙJ
^Ü™]\›ˆ—ÛXÝ]™PÛÛ›Û[\œÛ[ß___WÚ\ÐXÝ]™PXÝ[ÛŠ
^ØÛÛœÝO]—ØØXÚR[™^Ü™]\›ˆ[OOYI‰™O\Ë—ÛXÝ]™PXÝ[ÛœßWØY[˜XÝ]™PXÝ[ÛŠKŠ^ØÛÛœÝO]\Ë—ØXÝ[ÛœË]\Ë—ØXÝ[ÛœÐžPÛ\Û]Ï\–ÙWNÚYŠ›ÚYOO\Ê\Ï^ÚÛ›ÝÛXÝ[ÛœÎ–ÝKXÝ[ÛžT›ÛÝžß_K—ØžPÛ\ØXÚR[™^L–ÙWO\ÎÙ[Ù^ØÛÛœÝO\ËšÛ›ÝÛXÝ[ÛœÎÝ—ØžPÛ\ØXÚR[™^YK›[™ÝKœ\Ú

_]—ØØXÚR[™^ZK›[™ÝKœ\Ú

KË˜XÝ[ÛžT›ÛÝÛ—O]WÜ™[[Ý™R[˜XÝ]™PXÝ[ÛŠ
^ØÛÛœÝO]\Ë—ØXÝ[ÛœËYVÙK›[™ÝLWKO]—ØØXÚR[™^Û‹—ØØXÚR[™^ZKVÚWO[‹KœÜ

K—ØØXÚR[™^[[ØÛÛœÝ]—ØÛ\]ZYÏ]\Ë—ØXÝ[ÛœÐžPÛ\O\ÖÜ—KÏXKšÛ›ÝÛXÝ[ÛœË[ÖÛË›[™ÝLWKÏ]—ØžPÛ\ØXÚR[™^Û—ØžPÛ\ØXÚR[™^XËÖØ×O[ËœÜ

K—ØžPÛ\ØXÚR[™^[[Ù[]HK˜XÝ[ÛžT›ÛÝÊ—ÛØØ[›ÛÝ\Ë—Ü›ÛÝ
K]ZYKOO[Ë›[™Ý	‰™[]HÖÜ—K\Ë—Ü™[[Ý™R[˜XÝ]™Pš[™[™ÜÑ›ÜXÝ[ÛŠ
_WÜ™[[Ý™R[˜XÝ]™Pš[™[™ÜÑ›ÜXÝ[ÛŠ
^ØÛÛœÝO]—Ü›Ü\Pš[™[™ÜÎÙ›ÜŠ]LYK›[™ÝÝOO[ŽÊÊÝ
^ØÛÛœÝYVÝNÌOKK[‹œ™Y™\™[˜ÙPÛÝ[	‰\Ë—Ü™[[Ý™R[˜XÝ]™Pš[™[™ÊŠ__WÛ[™XÝ[ÛŠ
^ØÛÛœÝO]\Ë—ØXÝ[ÛœË]—ØØXÚR[™^O]\Ë—ÛXÝ]™PXÝ[ÛœÊÊËYVÚWNÝ—ØØXÚR[™^ZKVÚWO]‹—ØØXÚR[™^[‹VÛ—O\ŸWÝZÙP˜XÚÐXÝ[ÛŠ
^ØÛÛœÝO]\Ë—ØXÝ[ÛœË]—ØØXÚR[™^OKK]\Ë—ÛXÝ]™PXÝ[ÛœËYVÚWNÝ—ØØXÚR[™^ZKVÚWO]‹—ØØXÚR[™^[‹VÛ—O\ŸWØY[˜XÝ]™Pš[™[™ÊKŠ^ØÛÛœÝO]\Ë—Øš[™[™ÜÐžT›ÛÝ[™˜[YK]\Ë—Øš[™[™ÜÎÛ]ÏZVÙWNÝ›ÚYOO\É‰ŠÏ^ßKVÙWO\ÊKÖÛ—O]—ØØXÚR[™^\‹›[™Ý‹œ\Ú

_WÜ™[[Ý™R[˜XÝ]™Pš[™[™Ê
^ØÛÛœÝO]\Ë—Øš[™[™ÜË]˜š[™[™ËO[‹œ›ÛÝ›ÙK]ZY[‹œ]Ï]\Ë—Øš[™[™ÜÐžT›ÛÝ[™˜[YKO\ÖÚWKÏYVÙK›[™ÝLWK]—ØØXÚR[™^ÛË—ØØXÚR[™^[VÛO[ËKœÜ

K[]HVÜ—KOOSØš™XÝšÙ^\ÊJK›[™Ý	‰™[]HÖÚW_WÛ[™š[™[™Ê
^ØÛÛœÝO]\Ë—Øš[™[™ÜË]—ØØXÚR[™^O]\Ë—ÛXÝ]™Pš[™[™ÜÊÊËYVÚWNÝ—ØØXÚR[™^ZKVÚWO]‹—ØØXÚR[™^[‹VÛ—O\ŸWÝZÙP˜XÚÐš[™[™Ê
^ØÛÛœÝO]\Ë—Øš[™[™ÜË]—ØØXÚR[™^OKK]\Ë—ÛXÝ]™Pš[™[™ÜËYVÚWNÝ—ØØXÚR[™^ZKVÚWO]‹—ØØXÚR[™^[‹VÛ—O\ŸWÛ[™ÛÛ›Û[\œÛ[

^ØÛÛœÝ]\Ë—ØÛÛ›Û[\œÛ[ËO]\Ë—ÛXÝ]™PÛÛ›Û[\œÛ[ÊÊÎÛ]]ÙWNÜ™]\›ˆ›ÚYOO[‰‰Š[™]ÈZ
™]È›Ø]Ì\œ˜^JŠK™]È›Ø]Ì\œ˜^JŠKKJK‹—×ØØXÚR[™^YKÙWO[ŠKŸWÝZÙP˜XÚÐÛÛ›Û[\œÛ[

^ØÛÛœÝO]\Ë—ØÛÛ›Û[\œÛ[Ë]—×ØØXÚR[™^OKK]\Ë—ÛXÝ]™PÛÛ›Û[\œÛ[ËYVÚWNÝ—×ØØXÚR[™^ZKVÚWO]‹—×ØØXÚR[™^[‹VÛ—O\ŸXÛ\XÝ[ÛŠKŠ^ØÛÛœÝOY_\Ë—Ü›ÛÝZK]ZYÛ]ÏWœÝš[™×O]\[ÙˆÔ™š[™žS˜[YJK
NØÛÛœÝO[[OO\ÏÜË]ZYÏ]\Ë—ØXÝ[ÛœÐžPÛ\ØWNÛ][[ÚYŠ›ÚYOO[‰‰Š[[OO\ÏÜË˜›[™[ÙN“
K›ÚYOO[Ê^ØÛÛœÝ[Ë˜XÝ[ÛžT›ÛÝÜ—NÚYŠ›ÚYOO]	‰˜›[™[ÙOOO[Š\™]\›ˆÛ[ËšÛ›ÝÛXÝ[ÛœÖÌK[OO\É‰ŠÏ[—ØÛ\
_ZYŠ[OO\Ê\™]\›ˆ[ØÛÛœÝÏ[™]ÈJ\ËËKŠNÜ™]\›ˆ\Ë—Øš[™XÝ[ÛŠË
K\Ë—ØY[˜XÝ]™PXÝ[ÛŠËKŠKßY^\Ý[™ÐXÝ[ÛŠJ^ØÛÛœÝY_\Ë—Ü›ÛÝO[‹]ZYWœÝš[™×O]\[ÙˆÔ™š[™žS˜[YJ‹
NÏ\Ü‹]ZYO]\Ë—ØXÝ[ÛœÐžPÛ\Ü×NÜ™]\›ˆ›ÚYOOXI‰˜K˜XÝ[ÛžT›ÛÝÚW_[\ÝÜ[XÝ[ÛŠ
^ØÛÛœÝ]\Ë—ØXÝ[ÛœÎÙ›ÜŠ]O]\Ë—ÛXÝ]™PXÝ[ÛœËLNÙOLËKYJ]ÙWKœÝÜ

NÜ™]\›ˆ\ß]\]J
^Ý
]\Ë[YTØØ[NØÛÛœÝO]\Ë—ØXÝ[ÛœË]\Ë—ÛXÝ]™PXÝ[ÛœËO]\Ë[YJÏ]SX]œÚYÛŠ
KÏ]\Ë—ØXØÝR[™^LNÙ›ÜŠ]OLØHOO[ŽÊÊØJ^ÙVØWK—Ý\]JK‹Ê_XÛÛœÝO]\Ë—Øš[™[™ÜËÏ]\Ë—ÛXÝ]™Pš[™[™ÜÎÙ›ÜŠ]LÝOO[ÎÊÊÝ
XVÝK˜\JÊNÜ™]\›ˆ\ß\Ù][YJ
^Ý\Ë[YOLÙ›ÜŠ]LÝ\Ë—ØXÝ[ÛœË›[™ÝÝ
ÊÊ]\Ë—ØXÝ[ÛœÖÝK[YOLÜ™]\›ˆ\Ë\]J
_YÙ]›ÛÝ

^Ü™]\›ˆ\Ë—Ü›ÛÝ][˜ØXÚPÛ\

^ØÛÛœÝO]\Ë—ØXÝ[ÛœË]]ZYO]\Ë—ØXÝ[ÛœÐžPÛ\ZVÛ—NÚYŠ›ÚYOO\Š^ØÛÛœÝ\‹šÛ›ÝÛXÝ[ÛœÎÙ›ÜŠ]LO]›[™ÝÛˆOOZNÊÊÛŠ^ØÛÛœÝO]Û—NÝ\Ë—ÙXXÝ]˜]PXÝ[ÛŠJNØÛÛœÝZK—ØØXÚR[™^ÏYVÙK›[™ÝLWNÚK—ØØXÚR[™^[[K—ØžPÛ\ØXÚR[™^[[Ë—ØØXÚR[™^\‹VÜ—O\ËKœÜ

K\Ë—Ü™[[Ý™R[˜XÝ]™Pš[™[™ÜÑ›ÜXÝ[ÛŠJ_Y[]HVÛ—__][˜ØXÚT›ÛÝ

^ØÛÛœÝO]]ZY]\Ë—ØXÝ[ÛœÐžPÛ\Ù›ÜŠÛÛœÝ[ˆŠ^ØÛÛœÝO[–ÝK˜XÝ[ÛžT›ÛÝÙWNÝ›ÚYOOZI‰Š\Ë—ÙXXÝ]˜]PXÝ[ÛŠJK\Ë—Ü™[[Ý™R[˜XÝ]™PXÝ[ÛŠJJ_XÛÛœÝO]\Ë—Øš[™[™ÜÐžT›ÛÝ[™˜[YVÙWNÚYŠ›ÚYOOZJY›ÜŠÛÛœÝ[ˆJ^ØÛÛœÝOZVÝNÙKœ™\ÝÜ™SÜšYÚ[˜[Ý]J
K\Ë—Ü™[[Ý™R[˜XÝ]™Pš[™[™ÊJ__][˜ØXÚPXÝ[ÛŠJ^ØÛÛœÝ]\Ë™^\Ý[™ÐXÝ[ÛŠJNÛ[OO[‰‰Š\Ë—ÙXXÝ]˜]PXÝ[ÛŠŠK\Ë—Ü™[[Ý™R[˜XÝ]™PXÝ[ÛŠŠJ__K[š[X][Û“Øš™XÝÜ›Ý\XÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ëš\Ð[š[X][Û“Øš™XÝÜ›Ý\HL\Ë]ZY\ÙJ
K\Ë—ÛØš™XÝÏP\œ˜^Kœ›ÝÝ\KœÛXÙK˜Ø[
\™Ý[Y[ÊK\Ë›ØXÚYØš™XÝ×ÏLØÛÛœÝ^ßNÝ\Ë—Ú[™XÙ\ÐžUURQ]Ù›ÜŠ]OLX\™Ý[Y[Ë›[™ÝÙHOO[ŽÊÊÙJ]Ø\™Ý[Y[ÖÙWK]ZYOYNÝ\Ë—Ü]ÏV×K\Ë—Ü\œÙY]ÏV×K\Ë—Øš[™[™ÜÏV×K\Ë—Øš[™[™ÜÒ[™XÙ\ÐžT]^ßNØÛÛœÝO]\ÎÝ\ËœÝ]Ï^ÛØš™XÝÎžÙÙ]Ý[

^Ü™]\›ˆK—ÛØš™XÝË›[™ÝKÙ][•\ÙJ
^Ü™]\›ˆ\ËÝ[YK›ØXÚYØš™XÝ×ß_KÙ]š[™[™ÜÔ\“Øš™XÝ

^Ü™]\›ˆK—Øš[™[™ÜË›[™Ý__XY

^ØÛÛœÝ]\Ë—ÛØš™XÝËO]\Ë—Ú[™XÙ\ÐžUURQ]\Ë—Ü]ËO]\Ë—Ü\œÙY]Ë]\Ë—Øš[™[™ÜËÏ\‹›[™ÝÛ]KÏ]›[™Ý]\Ë›ØXÚYØš™XÝ×ÎÙ›ÜŠ]ÏLX\™Ý[Y[Ë›[™ÝØÈOOZÊÊØÊ^ØÛÛœÝX\™Ý[Y[ÖØ×KOZ]ZYÛ]YVÝWNÚYŠ›ÚYOOY
^Ù[ÊÊËVÝWOYœ\Ú

NÙ›ÜŠ]LO\ÎÝOOYNÊÊÝ
\–ÝKœ\Ú
™]ÈÝJ–ÝKVÝJJ_Y[ÙHYŠ
^ØO]ÙNØÛÛœÝÏKK[Ï]Û×NÙVØË]ZYOYÙOXËVÝWO[ËÛ×OZÙ›ÜŠ]LO\ÎÝOOYNÊÊÝ
^ØÛÛœÝO\–ÝKÏYVÛ×NÛ]OYVÙNÙVÙO\Ë›ÚYOOXI‰ŠO[™]ÈÝJ–ÝKVÝJJKVÛ×OX__Y[ÙHÙHOOXI‰˜ÛÛœÛÛK™\œ›ÜŠ•‘QK[š[X][Û“Øš™XÝÜ›Ý\ˆY™™\™[Øš™XÝÈÚ]HØ[YHURQ]XÝYˆÛX[ˆHØXÚ\ÈÜˆ™XÜ™X]H[Ý\ˆ[™œ˜\ÝXÝ\™HÚ[ˆ™[ØY[™ÈØÙ[™\Ë—Š_]\Ë›ØXÚYØš™XÝ×Ï[\™[[Ý™J
^ØÛÛœÝ]\Ë—ÛØš™XÝËO]\Ë—Ú[™XÙ\ÐžUURQ]\Ë—Øš[™[™ÜËO[‹›[™ÝÛ]]\Ë›ØXÚYØš™XÝ×ÎÙ›ÜŠ]ÏLOX\™Ý[Y[Ë›[™ÝÜÈOOXNÊÊÜÊ^ØÛÛœÝOX\™Ý[Y[ÖÜ×KÏXK]ZYYVÛ×NÚYŠ›ÚYOO[	‰›\Š^ØÛÛœÝÏ\ŠÊËÏ]Ü×NÙVØË]ZYO[ÛOXËVÛ×O\ËÜ×OXNÙ›ÜŠ]LOZNÝOOYNÊÊÝ
^ØÛÛœÝO[–ÝKOYVÜ×KYVÛNÙVÛOZKVÜ×O\Ÿ__]\Ë›ØXÚYØš™XÝ×Ï\Ÿ][˜ØXÚJ
^ØÛÛœÝ]\Ë—ÛØš™XÝËO]\Ë—Ú[™XÙ\ÐžUURQ]\Ë—Øš[™[™ÜËO[‹›[™ÝÛ]]\Ë›ØXÚYØš™XÝ×ËÏ]›[™ÝÙ›ÜŠ]OLÏX\™Ý[Y[Ë›[™ÝØHOO[ÎÊÊØJ^ØÛÛœÝÏX\™Ý[Y[ÖØWK]ZYYVÛ×NÚYŠ›ÚYOO[
ZYŠ[]HVÛ×KŠ^ØÛÛœÝOKK\‹Ï]ØWKÏKK\Ë]Ø×NÙVÛË]ZYO[ÛO[ËVÚ]ZYOXKØWOZœÜ

NÙ›ÜŠ]LOZNÝOOYNÊÊÝ
^ØÛÛœÝO[–ÝKOYVØWKYVØ×NÙVÛOZKVØWO\‹KœÜ

__Y[Ù^ØÛÛœÝKK\ËO]Ü—NÜŒ	‰ŠVØK]ZYO[
KÛOXKœÜ

NÙ›ÜŠ]LOZNÝOOYNÊÊÝ
^ØÛÛœÝO[–ÝNÙVÛOYVÜ—KKœÜ

___]\Ë›ØXÚYØš™XÝ×Ï\Ÿ\ÝXœØÜšX™WÊJ^ØÛÛœÝ]\Ë—Øš[™[™ÜÒ[™XÙ\ÐžT]Û]O[–ÝNØÛÛœÝ]\Ë—Øš[™[™ÜÎÚYŠ›ÚYOOZJ\™]\›ˆ–ÚWNØÛÛœÝÏ]\Ë—Ü]ËO]\Ë—Ü\œÙY]ËÏ]\Ë—ÛØš™XÝË[Ë›[™ÝÏ]\Ë›ØXÚYØš™XÝ×Ë[™]È\œ˜^J
NÚO\‹›[™Ý–ÝOZKËœ\Ú

KKœ\Ú
JK‹œ\Ú

NÙ›ÜŠ]XËO[Ë›[™ÝÛˆOOZNÊÊÛŠ^ØÛÛœÝO[ÖÛ—NÚÛ—O[™]ÈÝJKJ_\™]\›ˆ][œÝXœØÜšX™WÊ
^ØÛÛœÝO]\Ë—Øš[™[™ÜÒ[™XÙ\ÐžT]YVÝNÚYŠ›ÚYOO[Š^ØÛÛœÝO]\Ë—Ü]Ë]\Ë—Ü\œÙY]ËÏ]\Ë—Øš[™[™ÜËO\Ë›[™ÝLKÏ\ÖØWNÙVÝØWWO[‹ÖÛ—O[ËËœÜ

K–Û—O\–ØWK‹œÜ

KVÛ—OZVØWKKœÜ

___K[š[X][Û•][Ï]š\˜ÐÝ\™OSÛ\œ˜^PØ[Y\˜O\XK\œ›ÝÒ[\XÛ\ÜÈ^[™È›žØÛÛœÝXÝÜŠ[™]ÈÙJJKO[™]ÈÙJ
KLKOLMÍÍŽMŒKŒŠ›‹ÏKŒŠœŠ^ÜÝ\\Š
K\Ë\OW\œ›ÝÒ[\—‹›ÚYOO[	‰Š[™]ÈZKœÙ]]šX]JœÜÚ][Û—‹™]ÈJÌKKÊJKÙ[™]ÈØÊKKKJKÙ˜[œÛ]JKK
JK\ËœÜÚ][Û‹˜ÛÜJJK\Ë›[™O[™]È[
™]È›
ØÛÛÜŽšKÛ™SX\YˆL_JJK\Ë›[™K›X]š^]]Õ\]OHLK\Ë˜Y
\Ë›[™JK\Ë˜ÛÛ™O[™]ÈšJÙ™]ÈJØÛÛÜŽšKÛ™SX\YˆL_JJK\Ë˜ÛÛ™K›X]š^]]Õ\]OHLK\Ë˜Y
\Ë˜ÛÛ™JK\ËœÙ]\™XÝ[ÛŠ
K\ËœÙ][™Ý
‹‹Ê_\Ù]\™XÝ[ÛŠ
^ÚYŠžO‹ŽNNNNJ]\Ëœ]X]\›š[Û‹œÙ]
JNÙ[ÙHYŠžOKŽNNNNJ]\Ëœ]X]\›š[Û‹œÙ]
K
NÙ[Ù^ÛÙœÙ]
ž‹]ž
K››Ü›X[^™J
NØÛÛœÝOSX]˜XÛÜÊžJNÝ\Ëœ]X]\›š[Û‹œÙ]œ›ÛP^\Ð[™ÛJÙJ__\Ù][™Ý
OKŒŠKŒŠ™J^Ý\Ë›[™KœØØ[KœÙ]
KX]›X^
YKMYJKJK\Ë›[™K\]SX]š^

K\Ë˜ÛÛ™KœØØ[KœÙ]
‹KŠK\Ë˜ÛÛ™KœÜÚ][Û‹žO]\Ë˜ÛÛ™K\]SX]š^

_\Ù]ÛÛÜŠ
^Ý\Ë›[™K›X]\šX[˜ÛÛÜ‹œÙ]

K\Ë˜ÛÛ™K›X]\šX[˜ÛÛÜ‹œÙ]

_XÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJLJK\Ë›[™K˜ÛÜJ›[™JK\Ë˜ÛÛ™K˜ÛÜJ˜ÛÛ™JK\ßY\ÜÜÙJ
^Ý\Ë›[™K™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›[™K›X]\šX[™\ÜÜÙJ
K\Ë˜ÛÛ™K™Ù[ÛY]žK™\ÜÜÙJ
K\Ë˜ÛÛ™K›X]\šX[™\ÜÜÙJ
__K]XÚYš[™[ÙO^K]Y[ÏUK]Y[Ð[˜[\Ù\XÛ\ÜÞØÛÛœÝXÝÜŠOLŒ
^Ý\Ë˜[˜[\Ù\]˜ÛÛ^˜Ü™X]P[˜[\Ù\Š
K\Ë˜[˜[\Ù\‹™™Ú^™OYK\Ë™]O[™]ÈZ[\œ˜^J\Ë˜[˜[\Ù\‹™œ™\]Y[˜ÞPš[ÛÝ[
K™Ù]Ý]]

K˜ÛÛ›™XÝ
\Ë˜[˜[\Ù\Š_YÙ]œ™\]Y[˜ÞQ]J
^Ü™]\›ˆ\Ë˜[˜[\Ù\‹™Ù]ž]Qœ™\]Y[˜ÞQ]J\Ë™]JK\Ë™]_YÙ]]™\˜YÙQœ™\]Y[˜ÞJ
^Û]LØÛÛœÝO]\Ë™Ù]œ™\]Y[˜ÞQ]J
NÙ›ÜŠ]LÛK›[™ÝÛŠÊÊ]
ÏYVÛ—NÜ™]\›ˆÙK›[™Ý_K]Y[ÐÛÛ^[]K]Y[Ó\Ý[™\XÛ\ÜÈ^[™È›žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë\OW]Y[Ó\Ý[™\—‹\Ë˜ÛÛ^[]K™Ù]ÛÛ^

K\Ë™ØZ[]\Ë˜ÛÛ^˜Ü™X]QØZ[Š
K\Ë™ØZ[‹˜ÛÛ›™XÝ
\Ë˜ÛÛ^™\Ý[˜][ÛŠK\Ë™š[\[[\Ë[YQ[OL\Ë—ØÛØÚÏ[™]È_YÙ][œ]

^Ü™]\›ˆ\Ë™ØZ[Ÿ\™[[Ý™Qš[\Š
^Ü™]\›ˆ[OO]\Ë™š[\‰‰Š\Ë™ØZ[‹™\ØÛÛ›™XÝ
\Ë™š[\ŠK\Ë™š[\‹™\ØÛÛ›™XÝ
\Ë˜ÛÛ^™\Ý[˜][ÛŠK\Ë™ØZ[‹˜ÛÛ›™XÝ
\Ë˜ÛÛ^™\Ý[˜][ÛŠK\Ë™š[\[[
K\ßYÙ]š[\Š
^Ü™]\›ˆ\Ë™š[\Ÿ\Ù]š[\Š
^Ü™]\›ˆ[OO]\Ë™š[\Ê\Ë™ØZ[‹™\ØÛÛ›™XÝ
\Ë™š[\ŠK\Ë™š[\‹™\ØÛÛ›™XÝ
\Ë˜ÛÛ^™\Ý[˜][ÛŠJN\Ë™ØZ[‹™\ØÛÛ›™XÝ
\Ë˜ÛÛ^™\Ý[˜][ÛŠK\Ë™š[\]\Ë™ØZ[‹˜ÛÛ›™XÝ
\Ë™š[\ŠK\Ë™š[\‹˜ÛÛ›™XÝ
\Ë˜ÛÛ^™\Ý[˜][ÛŠK\ßYÙ]X\Ý\•›Û[YJ
^Ü™]\›ˆ\Ë™ØZ[‹™ØZ[‹˜[Y_\Ù]X\Ý\•›Û[YJ
^Ü™]\›ˆ\Ë™ØZ[‹™ØZ[‹œÙ]\™Ù]][YJ\Ë˜ÛÛ^˜Ý\œ™[[YKŒJK\ß]\]SX]š^ÛÜ›

^ÜÝ\\‹\]SX]š^ÛÜ›

NØÛÛœÝO]\Ë˜ÛÛ^›\Ý[™\‹]\Ë\ÚYŠ\Ë[YQ[O]\Ë—ØÛØÚË™Ù][J
K\Ë›X]š^ÛÜ›™XÛÛ\ÜÙJ]K]KÝJKKœÙ]
LJK˜\T]X]\›š[ÛŠ]JKKœÜÚ][Û–
^ØÛÛœÝ]\Ë˜ÛÛ^˜Ý\œ™[[YJÝ\Ë[YQ[NÙKœÜÚ][Û–›[™X\”˜[\Õ˜[YP][YJ]Kž
KKœÜÚ][Û–K›[™X\”˜[\Õ˜[YP][YJ]KžK
KKœÜÚ][Û–‹›[™X\”˜[\Õ˜[YP][YJ]Kž‹
KK™›ÜØ\™›[™X\”˜[\Õ˜[YP][YJKž
KK™›ÜØ\™K›[™X\”˜[\Õ˜[YP][YJKžK
KK™›ÜØ\™‹›[™X\”˜[\Õ˜[YP][YJKž‹
KK\›[™X\”˜[\Õ˜[YP][YJ‹ž
KK\K›[™X\”˜[\Õ˜[YP][YJ‹žK
KK\‹›[™X\”˜[\Õ˜[YP][YJ‹ž‹
_Y[ÙHKœÙ]ÜÚ][ÛŠ]Kž]KžK]KžŠKKœÙ]ÜšY[][ÛŠKžKžKKž‹‹ž‹žK‹žŠ__K]Y[ÓØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ]\ËÏ[™]Èš
\Ë›X[˜YÙ\ŠNÙ[˜Ý[ÛˆJJ^ÚOÚJJN˜ÛÛœÛÛK™\œ›ÜŠJK‹›X[˜YÙ\‹š][Q\œ›ÜŠ
_\ËœÙ]™\ÜÛœÙU\J˜\œ˜^XY™™\—ŠKËœÙ]]
\Ëœ]
KËœÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠKËœÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊKË›ØY

[˜Ý[ÛŠ
^Ýž^ØÛÛœÝ]œÛXÙJ
NÛ]K™Ù]ÛÛ^

K™XÛÙP]Y[Ñ]J‹
[˜Ý[ÛŠ
^ÙJ
_JJK˜Ø]Ú
J_XØ]Ú

^ØJ
__JK‹J__K^\Ò[\XÛ\ÜÈ^[™ÈØÛÛœÝXÝÜŠLJ^ØÛÛœÝOVÌK[™]ÈZNÛ‹œÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJK‹œÙ]]šX]J˜ÛÛÜ—‹™]ÈJÌKK‹K‹KK‹WKÊJNÜÝ\\Š‹™]È›
Ý™\^ÛÛÜœÎˆLÛ™SX\YˆL_JJK\Ë\OW^\Ò[\—Ÿ\Ù]ÛÛÜœÊKŠ^ØÛÛœÝO[™]ÈÚK]\Ë™Ù[ÛY]žK˜]šX]\Ë˜ÛÛÜ‹˜\œ˜^NÜ™]\›ˆKœÙ]

KKÐ\œ˜^J‹
KKÐ\œ˜^J‹ÊKKœÙ]
JKKÐ\œ˜^J‹ŠKKÐ\œ˜^J‹JKKœÙ]
ŠKKÐ\œ˜^J‹LŠKKÐ\œ˜^J‹MJK\Ë™Ù[ÛY]žK˜]šX]\Ë˜ÛÛÜ‹›™YYÕ\]OHL\ßY\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
__K˜XÚÔÚYOXK˜\ÚXÑ\XÚÚ[™ÏLÌŒ˜\ÚXÔÚYÝÓX\L˜]ÚYY\Ú[[›Û™OP›Ë›ÛÛX[’Ù^Yœ˜[YU˜XÚÏU›ÞXÛ\ÜÞØÛÛœÝXÝÜŠ[™]ÈYJKÌKÌ
KO[™]ÈYJLKÌLKÌ
J^Ý\Ëš\Ð›ÞHL\Ë›Z[]\Ë›X^Y_\Ù]
J^Ü™]\›ˆ\Ë›Z[‹˜ÛÜJ
K\Ë›X^˜ÛÜJJK\ß\Ù]œ›ÛTÚ[Ê
^Ý\Ë›XZÙQ[\J
NÙ›ÜŠ]OL]›[™ÝÙOŽÙJÊÊ]\Ë™^[™žTÚ[
ÙWJNÜ™]\›ˆ\ß\Ù]œ›ÛPÙ[\[™Ú^™JJ^ØÛÛœÝZÝK˜ÛÜJJK›][\TØØ[\ŠJNÜ™]\›ˆ\Ë›Z[‹˜ÛÜJ
KœÝXŠŠK\Ë›X^˜ÛÜJ
K˜Y
ŠK\ßXÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê_XÛÜJ
^Ü™]\›ˆ\Ë›Z[‹˜ÛÜJ›Z[ŠK\Ë›X^˜ÛÜJ›X^
K\ß[XZÙQ[\J
^Ü™]\›ˆ\Ë›Z[‹ž]\Ë›Z[‹žOLKÌ\Ë›X^ž]\Ë›X^žOKLKÌ\ßZ\Ñ[\J
^Ü™]\›ˆ\Ë›X^ž\Ë›Z[‹ž\Ë›X^žO\Ë›Z[‹ž_YÙ]Ù[\Š
^Ü™]\›ˆ\Ëš\Ñ[\J
OÝœÙ]

N˜Y™XÝÜœÊ\Ë›Z[‹\Ë›X^
K›][\TØØ[\ŠJ_YÙ]Ú^™J
^Ü™]\›ˆ\Ëš\Ñ[\J
OÝœÙ]

NœÝX•™XÝÜœÊ\Ë›X^\Ë›Z[Š_Y^[™žTÚ[

^Ü™]\›ˆ\Ë›Z[‹›Z[Š
K\Ë›X^›X^

K\ßY^[™žU™XÝÜŠ
^Ü™]\›ˆ\Ë›Z[‹œÝXŠ
K\Ë›X^˜Y

K\ßY^[™žTØØ[\Š
^Ü™]\›ˆ\Ë›Z[‹˜YØØ[\Š]
K\Ë›X^˜YØØ[\Š
K\ßXÛÛZ[œÔÚ[

^Ü™]\›ˆJž\Ë›Z[‹žž\Ë›X^žžO\Ë›Z[‹ž_žO\Ë›X^žJ_XÛÛZ[œÐ›Þ

^Ü™]\›ˆ\Ë›Z[‹ž]›Z[‹ž	‰›X^ž]\Ë›X^ž	‰\Ë›Z[‹žO]›Z[‹žI‰›X^žO]\Ë›X^ž_YÙ]\˜[Y]\ŠJ^Ü™]\›ˆKœÙ]

ž]\Ë›Z[‹ž
KÊ\Ë›X^ž]\Ë›Z[‹ž
K
žK]\Ë›Z[‹žJKÊ\Ë›X^žK]\Ë›Z[‹žJJ_Z[\œÙXÝÐ›Þ

^Ü™]\›ˆJ›X^ž\Ë›Z[‹ž›Z[‹ž\Ë›X^ž›X^žO\Ë›Z[‹ž_›Z[‹žO\Ë›X^žJ_XÛ[\Ú[
J^Ü™]\›ˆK˜ÛÜJ
K˜Û[\
\Ë›Z[‹\Ë›X^
_Y\Ý[˜ÙUÔÚ[

^Ü™]\›ˆ\Ë˜Û[\Ú[
ÝJK™\Ý[˜ÙUÊ
_Z[\œÙXÝ

^Ü™]\›ˆ\Ë›Z[‹›X^
›Z[ŠK\Ë›X^›Z[Š›X^
K\Ëš\Ñ[\J
I‰\Ë›XZÙQ[\J
K\ß][š[ÛŠ
^Ü™]\›ˆ\Ë›Z[‹›Z[Š›Z[ŠK\Ë›X^›X^
›X^
K\ß]˜[œÛ]J
^Ü™]\›ˆ\Ë›Z[‹˜Y

K\Ë›X^˜Y

K\ßY\]X[Ê
^Ü™]\›ˆ›Z[‹™\]X[Ê\Ë›Z[ŠI‰›X^™\]X[Ê\Ë›X^
__K›ÞÏ\YK›ÞÒ[\XÛ\ÜÈ^[™ÈØÛÛœÝXÝÜŠOLMÍÍŽMŒ
^ØÛÛœÝ[™]ÈZ[M\œ˜^JÌKK‹‹ËËKK‹‹ËËKK‹‹Ë×JKO[™]ÈZNÚKœÙ][™^
™]ÈZJ‹JJKKœÙ]]šX]JœÜÚ][Û—‹™]ÈJÌKKKLKKKLKLKKKLKKKKLKLKKLKLKLKLKKLKLWKÊJKÝ\\ŠK™]È›
ØÛÛÜŽ™KÛ™SX\YˆL_JJK\Ë˜›Þ]\Ë\OW›ÞÒ[\—‹\Ë™Ù[ÛY]žK˜ÛÛ\]P›Ý[™[™ÔÜ\™J
_]\]SX]š^ÛÜ›

^ØÛÛœÝO]\Ë˜›ÞÙKš\Ñ[\J
_
K™Ù]Ù[\Š\ËœÜÚ][ÛŠKK™Ù]Ú^™J\ËœØØ[JK\ËœØØ[K›][\TØØ[\ŠJKÝ\\‹\]SX]š^ÛÜ›

J_Y\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
__K›ÞÙ[ÛY]žOIK›Þ[\XÛ\ÜÈ^[™ÈØÛÛœÝXÝÜŠOLMÍÍŽMŒ
^ØÛÛœÝ[™]ÈZ[M\œ˜^JÌKK‹‹ËËKK‹‹ËËKK‹‹Ë×JKO[™]È›Ø]Ì\œ˜^J
K[™]ÈZNÜ‹œÙ][™^
™]ÈZJ‹JJK‹œÙ]]šX]JœÜÚ][Û—‹™]ÈZJKÊJKÝ\\Š‹™]È›
ØÛÛÜŽ™KÛ™SX\YˆL_JJK\Ë›Øš™XÝ]\Ë\OW›Þ[\—‹\Ë›X]š^]]Õ\]OHLK\Ë\]J
_]\]J
^ÚYŠ›ÚYOO]	‰˜ÛÛœÛÛKØ\›Š•‘QK›Þ[\Žˆ\]J
H\È›ÈÛ™Ù\ˆ\™Ý[Y[Ë—ŠK›ÚYOO]\Ë›Øš™XÝ	‰˜YœÙ]œ›ÛSØš™XÝ
\Ë›Øš™XÝ
KYš\Ñ[\J
J\™]\›ŽØÛÛœÝOXY›Z[‹XY›X^O]\Ë™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹ZK˜\œ˜^NÜ–ÌO[‹ž–ÌWO[‹žK–Ì—O[‹ž‹–Ì×OYKž–ÍO[‹žK–ÍWO[‹ž‹–Í—OYKž–Í×OYKžK–ÎO[‹ž‹–ÎWO[‹ž–ÌLOYKžK–ÌLWO[‹ž‹–ÌL—O[‹ž–ÌL×O[‹žK–ÌMOYKž‹–ÌMWOYKž–ÌM—O[‹žK–ÌM×OYKž‹–ÌNOYKž–ÌNWOYKžK–ÌŒOYKž‹–ÌŒWO[‹ž–ÌŒ—OYKžK–ÌŒ×OYKž‹K›™YYÕ\]OHL\Ë™Ù[ÛY]žK˜ÛÛ\]P›Ý[™[™ÔÜ\™J
_\Ù]œ›ÛSØš™XÝ

^Ü™]\›ˆ\Ë›Øš™XÝ]\Ë\]J
K\ßXÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\Ë›Øš™XÝ]›Øš™XÝ\ßY\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
__KY™™\]šX]OSZKY™™\‘Ù[ÛY]žORZKY™™\‘Ù[ÛY]žSØY\XÝKž]U\OLLLØXÚOUZØ[Y\˜O\œ‹Ø[Y\˜R[\XÛ\ÜÈ^[™ÈØÛÛœÝXÝÜŠ
^ØÛÛœÝO[™]ÈZK[™]È›
ØÛÛÜŽŒMÍÍÌŒMK™\^ÛÛÜœÎˆLÛ™SX\YˆL_JKOV×KV×KÏ^ßNÙ[˜Ý[ÛˆJJ^ÛÊ
KÊJ_Y[˜Ý[ÛˆÊ
^ÚKœ\Ú

K‹œ\Ú

K›ÚYOO\ÖÝI‰ŠÖÝOV×JKÖÝKœ\Ú
K›[™ÝÌËLJ_XJ›ŒW‹›Œ—ŠKJ›Œ—‹›ŠKJ›‹›Œ×ŠKJ›Œ×‹›ŒWŠKJ™ŒW‹™Œ—ŠKJ™Œ—‹™ŠKJ™‹™Œ×ŠKJ™Œ×‹™ŒWŠKJ›ŒW‹™ŒWŠKJ›Œ—‹™Œ—ŠKJ›Œ×‹™Œ×ŠKJ›‹™ŠKJœ‹›ŒWŠKJœ‹›Œ—ŠKJœ‹›Œ×ŠKJœ‹›ŠKJLW‹L—ŠKJL—‹L×ŠKJL×‹LWŠKJ˜×‹ŠKJœ‹˜×ŠKJ˜ÛŒW‹˜ÛŒ—ŠKJ˜ÛŒ×‹˜ÛŠKJ˜ÙŒW‹˜ÙŒ—ŠKJ˜ÙŒ×‹˜ÙŠKKœÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJKKœÙ]]šX]J˜ÛÛÜ—‹™]ÈJ‹ÊJKÝ\\ŠKŠK\Ë\OWØ[Y\˜R[\—‹\Ë˜Ø[Y\˜O]\Ë˜Ø[Y\˜K\]T›Ú™XÝ[Û“X]š^	‰\Ë˜Ø[Y\˜K\]T›Ú™XÝ[Û“X]š^

K\Ë›X]š^]›X]š^ÛÜ›\Ë›X]š^]]Õ\]OHLK\ËœÚ[X\\Ë\Ë\]J
NØÛÛœÝ[™]ÈÚJMÍMLŒ
KÏ[™]ÈÚJMÌLMŽ
K[™]ÈÚJÍÍÍJKO[™]ÈÚJMÍÍÌŒMJK[™]ÈÚJÌÍMMÊNÝ\ËœÙ]ÛÛÜœÊËK
_\Ù]ÛÛÜœÊK‹KŠ^ØÛÛœÝÏ]\Ë™Ù[ÛY]žK™Ù]]šX]J˜ÛÛÜ—ŠNÜËœÙ]VŠœ‹™Ë˜ŠKËœÙ]VŠKœ‹™Ë˜ŠKËœÙ]VŠ‹œ‹™Ë˜ŠKËœÙ]VŠËœ‹™Ë˜ŠKËœÙ]VŠœ‹™Ë˜ŠKËœÙ]VŠKœ‹™Ë˜ŠKËœÙ]VŠ‹œ‹™Ë˜ŠKËœÙ]VŠËœ‹™Ë˜ŠKËœÙ]VŠœ‹™Ë˜ŠKËœÙ]VŠKœ‹™Ë˜ŠKËœÙ]VŠLœ‹™Ë˜ŠKËœÙ]VŠLKœ‹™Ë˜ŠKËœÙ]VŠL‹œ‹™Ë˜ŠKËœÙ]VŠLËœ‹™Ë˜ŠKËœÙ]VŠMœ‹™Ë˜ŠKËœÙ]VŠMKœ‹™Ë˜ŠKËœÙ]VŠM‹œ‹™Ë˜ŠKËœÙ]VŠMËœ‹™Ë˜ŠKËœÙ]VŠNœ‹™Ë˜ŠKËœÙ]VŠNKœ‹™Ë˜ŠKËœÙ]VŠŒœ‹™Ë˜ŠKËœÙ]VŠŒKœ‹™Ë˜ŠKËœÙ]VŠŒ‹œ‹™Ë˜ŠKËœÙ]VŠŒËœ‹™Ë˜ŠKËœÙ]VŠKœ‹K™ËK˜ŠKËœÙ]VŠKKœ‹K™ËK˜ŠKËœÙ]VŠ‹Kœ‹K™ËK˜ŠKËœÙ]VŠËKœ‹K™ËK˜ŠKËœÙ]VŠŽKœ‹K™ËK˜ŠKËœÙ]VŠŽKKœ‹K™ËK˜ŠKËœÙ]VŠÌKœ‹K™ËK˜ŠKËœÙ]VŠÌKKœ‹K™ËK˜ŠKËœÙ]VŠÌ‹‹œ‹‹™Ë‹˜ŠKËœÙ]VŠÌË‹œ‹‹™Ë‹˜ŠKËœÙ]VŠÍ‹œ‹‹™Ë‹˜ŠKËœÙ]VŠÍK‹œ‹‹™Ë‹˜ŠKËœÙ]VŠÍ‹‹œ‹‹™Ë‹˜ŠKËœÙ]VŠÍË‹œ‹‹™Ë‹˜ŠKËœÙ]VŠÎKœ‹K™ËK˜ŠKËœÙ]VŠÎKKœ‹K™ËK˜ŠKËœÙ]VŠ‹œ‹‹™Ë‹˜ŠKËœÙ]VŠK‹œ‹‹™Ë‹˜ŠKËœÙ]VŠ‹‹œ‹‹™Ë‹˜ŠKËœÙ]VŠË‹œ‹‹™Ë‹˜ŠKËœÙ]VŠ‹œ‹‹™Ë‹˜ŠKËœÙ]VŠK‹œ‹‹™Ë‹˜ŠKËœÙ]VŠ‹‹œ‹‹™Ë‹˜ŠKËœÙ]VŠË‹œ‹‹™Ë‹˜ŠKËœÙ]VŠ‹œ‹‹™Ë‹˜ŠKËœÙ]VŠK‹œ‹‹™Ë‹˜ŠKË›™YYÕ\]OHL]\]J
^ØÛÛœÝ]\Ë™Ù[ÛY]žKO]\ËœÚ[X\Ü™œ›Ú™XÝ[Û“X]š^[™\œÙK˜ÛÜJ\Ë˜Ø[Y\˜Kœ›Ú™XÝ[Û“X]š^[™\œÙJKÙ
˜×‹K™LJKÙ
‹K™JKÙ
›ŒW‹K™LKLKLJKÙ
›Œ—‹K™KLKLJKÙ
›Œ×‹K™LKKLJKÙ
›‹K™KKLJKÙ
™ŒW‹K™LKLKJKÙ
™Œ—‹K™KLKJKÙ
™Œ×‹K™LKKJKÙ
™‹K™KKJKÙ
LW‹K™ËKŒKLJKÙ
L—‹K™KËKŒKLJKÙ
L×‹K™‹LJKÙ
˜ÙŒW‹K™LKJKÙ
˜ÙŒ—‹K™KJKÙ
˜ÙŒ×‹K™LKJKÙ
˜Ù‹K™KJKÙ
˜ÛŒW‹K™LKLJKÙ
˜ÛŒ—‹K™KLJKÙ
˜ÛŒ×‹K™LKLJKÙ
˜Û‹K™KLJK™Ù]]šX]JœÜÚ][Û—ŠK›™YYÕ\]OHLY\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
__KØ[˜\Õ^\™OXÛ\ÜÈ^[™È™^ØÛÛœÝXÝÜŠK‹K‹ËKË
^ÜÝ\\ŠK‹K‹ËKË
K\Ëš\ÐØ[˜\Õ^\™OHL\Ë›™YYÕ\]OHL_KØ\Ý[QÙ[ÛY]žOZXËØ]][›ÛPÝ\™LÏU›Ú[™[Û•Û™SX\[™ÏYËÚ\˜ÛQÙ[ÛY]žO\˜ËÛ[\ÑYÙUÜ˜\[™ÏPËÛØÚÏ]KÛÛÜXÚKÛÛÜ’Ù^Yœ˜[YU˜XÚÏQZÛÛÜ“X[˜YÙ[Y[T™KÛÛ\™\ÜÙY\œ˜^U^\™OXÛ\ÜÈ^[™È[ØÛÛœÝXÝÜŠK‹K‹Ê^ÜÝ\\ŠK‹‹ÊK\Ëš\ÐÛÛ\™\ÜÙY\œ˜^U^\™OHL\Ëš[XYÙK™\ZK\ËÜ˜\Pß_KÛÛ\™\ÜÙYÝX™U^\™OXÛ\ÜÈ^[™È[ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š›ÚYÌKÚYÌKšZYÚK‹ŠK\Ëš\ÐÛÛ\™\ÜÙYÝX™U^\™OHL\Ëš\ÐÝX™U^\™OHL\Ëš[XYÙO]_KÛÛ\™\ÜÙY^\™OU[ÛÛ\™\ÜÙY^\™SØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ]\ËÏV×KO[™]È[Ï[™]Èš
\Ë›X[˜YÙ\ŠNÛËœÙ]]
\Ëœ]
KËœÙ]™\ÜÛœÙU\J˜\œ˜^XY™™\—ŠKËœÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠKËœÙ]Ú]Ü™Y[X[Ê‹Ú]Ü™Y[X[ÊNÛ]LÙ[˜Ý[ÛˆÊÊ^ÛË›ØY
Ø×K
[˜Ý[ÛŠ
^ØÛÛœÝ\‹œ\œÙJL
NÜÖØ×O^ÝÚY›‹ÚYZYÚ›‹šZYÚ›Ü›X]›‹™›Ü›X]Z\X\Î›‹›Z\X\ßK
ÏLKOO[	‰ŠOOO[‹›Z\X\ÛÝ[	‰ŠK›Z[‘š[\Q
KKš[XYÙO\ËK™›Ü›X][‹™›Ü›X]K›™YYÕ\]OHLI‰™JJJ_JK‹J_ZYŠ\œ˜^Kš\Ð\œ˜^J
JY›ÜŠ]OL]›[™ÝÙOŽÊÊÙJXÊJNÙ[ÙHË›ØY

[˜Ý[ÛŠ
^ØÛÛœÝ\‹œ\œÙJL
NÚYŠ‹š\ÐÝX™[X\
^ØÛÛœÝ[‹›Z\X\Ë›[™ÝÛ‹›Z\X\ÛÝ[Ù›ÜŠ]OLÙOÙJÊÊ^ÜÖÙWO^ÛZ\X\Î–×_NÙ›ÜŠ]LÝ‹›Z\X\ÛÝ[Ý
ÊÊ\ÖÙWK›Z\X\Ëœ\Ú
‹›Z\X\ÖÙJ›‹›Z\X\ÛÝ[
ÝJKÖÙWK™›Ü›X][‹™›Ü›X]ÖÙWKÚY[‹ÚYÖÙWKšZYÚ[‹šZYÚXKš[XYÙO\ßY[ÙHKš[XYÙKÚY[‹ÚYKš[XYÙKšZYÚ[‹šZYÚK›Z\X\Ï[‹›Z\X\ÎÌOOO[‹›Z\X\ÛÝ[	‰ŠK›Z[‘š[\Q
KK™›Ü›X][‹™›Ü›X]K›™YYÕ\]OHLI‰™JJ_JK‹JNÜ™]\›ˆ__KÛÛ™QÙ[ÛY]žOXXËÛÛœÝ[[Q˜XÝÜLŒLËÛÛœÝ[ÛÛÜ‘˜XÝÜLŒLKÝX™PØ[Y\˜O[Ü‹ÝX™T™Y›XÝ[Û“X\[™ÏX‹ÝX™T™Yœ˜XÝ[Û“X\[™ÏUÝX™U^\™O[‹ÝX™U^\™SØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ[™]ÈŽÜ‹˜ÛÛÜ”ÜXÙOQÝØÛÛœÝÏ[™]ÈÚ
\Ë›X[˜YÙ\ŠNÜËœÙ]Ü›ÜÜÓÜšYÚ[Š\Ë˜Ü›ÜÜÓÜšYÚ[ŠKËœÙ]]
\Ëœ]
NÛ]OLÙ[˜Ý[ÛˆÊŠ^ÜË›ØY
Û—K
[˜Ý[ÛŠ
^Ü‹š[XYÙ\ÖÛ—O]JÊËOOXI‰Š‹›™YYÕ\]OHLI‰™JŠJ_JK›ÚYJ_Y›ÜŠ]OLÙO›[™ÝÊÊÙJ[ÊJNÜ™]\›ˆŸ_KÝX™UU”™Y›XÝ[Û“X\[™ÏPKÝXšXÐ™^šY\Ý\™OZ›ÝXšXÐ™^šY\Ý\™LÏ\[ÝXšXÒ[\œÛ[^ZÝ[˜XÙP˜XÚÏLKÝ[˜XÙQœ›ÛL‹Ý[˜XÙQœ›Û˜XÚÏLËÝ[˜XÙS›Û™OLÝ\™OQÝ\™T]]ËÝ\ÝÛP›[™[™ÏMKÝ\ÝÛUÛ™SX\[™Ï]‹Þ[[™\‘Ù[ÛY]žO\ØËÞ[[™šXØ[XÛ\ÜÞØÛÛœÝXÝÜŠLKOLL
^Ü™]\›ˆ\Ëœ˜Y]\Ï]\Ë]OYK\ËžO[‹\ß\Ù]
KŠ^Ü™]\›ˆ\Ëœ˜Y]\Ï]\Ë]OYK\ËžO[‹\ßXÛÜJ
^Ü™]\›ˆ\Ëœ˜Y]\Ï]œ˜Y]\Ë\Ë]O]]K\ËžO]žK\ß\Ù]œ›ÛU™XÝÜŒÊ
^Ü™]\›ˆ\ËœÙ]œ›ÛPØ\\ÚX[ÛÛÜ™ÊžžKžŠ_\Ù]œ›ÛPØ\\ÚX[ÛÛÜ™ÊKŠ^Ü™]\›ˆ\Ëœ˜Y]\ÏSX]œÜ\


ÛŠ›ŠK\Ë]OSX]˜][ŒŠŠK\ËžOYK\ßXÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê__K‘]LÑ^\™OU™K‘]P\œ˜^U^\™ORK‘]U^\™O^›Ë‘]U^\™SØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ]\ËÏ[™]È›ËO[™]Èš
\Ë›X[˜YÙ\ŠNÜ™]\›ˆKœÙ]™\ÜÛœÙU\J˜\œ˜^XY™™\—ŠKKœÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠKKœÙ]]
\Ëœ]
KKœÙ]Ú]Ü™Y[X[Ê‹Ú]Ü™Y[X[ÊKK›ØY

[˜Ý[ÛŠ
^Û]ŽÝž^Û\‹œ\œÙJ
_XØ]Ú

^ÚYŠ›ÚYOOZJ\™]\›ˆ›ÚYÛÛœÛÛK™\œ›ÜŠ
NÚJ
_]›ÚYOO[‹š[XYÙOÜËš[XYÙO[‹š[XYÙN›ÚYOO[‹™]I‰ŠËš[XYÙKÚY[‹ÚYËš[XYÙKšZYÚ[‹šZYÚËš[XYÙK™]O[‹™]JKËÜ˜\Ï]›ÚYOO[‹Ü˜\ÏÛ‹Ü˜\ÎËËÜ˜\]›ÚYOO[‹Ü˜\Û‹Ü˜\ËË›XYÑš[\]›ÚYOO[‹›XYÑš[\Û‹›XYÑš[\Ž‘Ë›Z[‘š[\]›ÚYOO[‹›Z[‘š[\Û‹›Z[‘š[\Ž‘Ë˜[š\ÛÝ›ÜO]›ÚYOO[‹˜[š\ÛÝ›ÜOÛ‹˜[š\ÛÝ›ÜNŒK›ÚYOO[‹˜ÛÛÜ”ÜXÙOÜË˜ÛÛÜ”ÜXÙO[‹˜ÛÛÜ”ÜXÙN›ÚYOO[‹™[˜ÛÙ[™É‰ŠË™[˜ÛÙ[™Ï[‹™[˜ÛÙ[™ÊK›ÚYOO[‹™›\I‰ŠË™›\O[‹™›\JK›ÚYOO[‹™›Ü›X]	‰ŠË™›Ü›X][‹™›Ü›X]
K›ÚYOO[‹\I‰ŠË\O[‹\JK›ÚYOO[‹›Z\X\É‰ŠË›Z\X\Ï[‹›Z\X\ËË›Z[‘š[\SÊKOOO[‹›Z\X\ÛÝ[	‰ŠË›Z[‘š[\Q
K›ÚYOO[‹™Ù[™\˜]SZ\X\É‰ŠË™Ù[™\˜]SZ\X\Ï[‹™Ù[™\˜]SZ\X\ÊKË›™YYÕ\]OHLI‰™JËŠ_JK‹JKß_K‘]U][Ï]šK‘XÜ™[Y[Ý[˜Ú[ÜMÍŽË‘XÜ™[Y[Ü˜\Ý[˜Ú[ÜLÍM‹‘Y˜][ØY[™ÓX[˜YÙ\Sš‘\›Ü›X]\K‘\Ý[˜Ú[›Ü›X]VK‘\^\™O[œË‘]XÚYš[™[ÙOSK‘\™XÝ[Û˜[YÚY]K‘\™XÝ[Û˜[YÚ[\XÛ\ÜÈ^[™È›žØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š
K\Ë›YÚ]\Ë›X]š^]›X]š^ÛÜ›\Ë›X]š^]]Õ\]OHLK\Ë˜ÛÛÜ[‹\Ë\OW‘\™XÝ[Û˜[YÚ[\—‹›ÚYOOYI‰ŠOLJNÛ]O[™]ÈZNÚKœÙ]]šX]JœÜÚ][Û—‹™]ÈJËYKKKKKYKYKYKYKKKÊJNØÛÛœÝ[™]È›
Ù›ÙÎˆLKÛ™SX\YˆL_JNÝ\Ë›YÚ[™O[™]È[
KŠK\Ë˜Y
\Ë›YÚ[™JKO[™]ÈZKKœÙ]]šX]JœÜÚ][Û—‹™]ÈJÌWKÊJK\Ë\™Ù][™O[™]È[
KŠK\Ë˜Y
\Ë\™Ù][™JK\Ë\]J
_Y\ÜÜÙJ
^Ý\Ë›YÚ[™K™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›YÚ[™K›X]\šX[™\ÜÜÙJ
K\Ë\™Ù][™K™Ù[ÛY]žK™\ÜÜÙJ
K\Ë\™Ù][™K›X]\šX[™\ÜÜÙJ
_]\]J
^Ý\Ë›YÚ\]UÛÜ›X]š^
LLJK\Ë›YÚ\™Ù]\]UÛÜ›X]š^
LLJKœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\Ë›YÚ›X]š^ÛÜ›
KYœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\Ë›YÚ\™Ù]›X]š^ÛÜ›
K™œÝX•™XÝÜœÊY
K\Ë›YÚ[™K›ÛÚÐ]
Y
K›ÚYOO]\Ë˜ÛÛÜÊ\Ë›YÚ[™K›X]\šX[˜ÛÛÜ‹œÙ]
\Ë˜ÛÛÜŠK\Ë\™Ù][™K›X]\šX[˜ÛÛÜ‹œÙ]
\Ë˜ÛÛÜŠJNŠ\Ë›YÚ[™K›X]\šX[˜ÛÛÜ‹˜ÛÜJ\Ë›YÚ˜ÛÛÜŠK\Ë\™Ù][™K›X]\šX[˜ÛÛÜ‹˜ÛÜJ\Ë›YÚ˜ÛÛÜŠJK\Ë\™Ù][™K›ÛÚÐ]
Y
K\Ë\™Ù][™KœØØ[Kž[™›[™Ý

__K‘\ØÜ™]R[\œÛ[TÚ‘\Ü^TÐÛÛÜ”ÜXÙOU‘ÙXØZY›Û‘Ù[ÛY]žO[Ë‘ÝX›TÚYOL‹‘Ý[Q˜XÝÜLŒ‹‘ÝÛÛÜ‘˜XÝÜLŒ‘[˜[ZXÐÛÜU\ØYÙOLÍLL‘[˜[ZXÑ˜]Õ\ØYÙOLÍL‘[˜[ZXÔ™XY\ØYÙOLÍLK‘YÙ\ÑÙ[ÛY]žO\Ë‘[\ÙPÝ\™OS›‘\]X[ÛÛ\\™OMLM‘\]X[\M‘\]X[Ý[˜Ú[[˜ÏMLM‘\]Z\™XÝ[™Ý[\”™Y›XÝ[Û“X\[™ÏQK‘\]Z\™XÝ[™Ý[\”™Yœ˜XÝ[Û“X\[™Ï]Ë‘][\T‹‘]™[\Ü]Ú\]K‘^YQÙ[ÛY]žOZØË‘š[SØY\^š‘›Ø]MY™™\]šX]OXÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]ÈZ[M\œ˜^J
KKŠK\Ëš\Ñ›Ø]MY™™\]šX]OHLYÙ]

^Û]OWÚJ\Ë˜\œ˜^VÝ
\Ëš][TÚ^™WJNÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_\Ù]
J^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë˜\œ˜^VÝ
\Ëš][TÚ^™WOYÚJJK\ßYÙ]J
^Û]OWÚJ\Ë˜\œ˜^VÝ
\Ëš][TÚ^™JÌWJNÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_\Ù]JJ^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë˜\œ˜^VÝ
\Ëš][TÚ^™JÌWOYÚJJK\ßYÙ]Š
^Û]OWÚJ\Ë˜\œ˜^VÝ
\Ëš][TÚ^™JÌ—JNÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_\Ù]ŠJ^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë˜\œ˜^VÝ
\Ëš][TÚ^™JÌ—OYÚJJK\ßYÙ]Ê
^Û]OWÚJ\Ë˜\œ˜^VÝ
\Ëš][TÚ^™JÌ×JNÜ™]\›ˆ\Ë››Ü›X[^™Y	‰ŠO]YJK\Ë˜\œ˜^JJK_\Ù]ÊJ^Ü™]\›ˆ\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JJK\Ë˜\œ˜^VÝ
\Ëš][TÚ^™JÌ×OYÚJJK\ß\Ù]JKŠ^Ü™]\›ˆ
]\Ëš][TÚ^™K\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JJK\Ë˜\œ˜^VÝ
ÌOYÚJJK\Ë˜\œ˜^VÝ
ÌWOYÚJŠK\ß\Ù]VŠK‹J^Ü™]\›ˆ
]\Ëš][TÚ^™K\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JKOYJK\Ë˜\œ˜^JJK\Ë˜\œ˜^VÝ
ÌOYÚJJK\Ë˜\œ˜^VÝ
ÌWOYÚJŠK\Ë˜\œ˜^VÝ
Ì—OYÚJJK\ß\Ù]V•ÊK‹KŠ^Ü™]\›ˆ
]\Ëš][TÚ^™K\Ë››Ü›X[^™Y	‰ŠOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JKOYJK\Ë˜\œ˜^JKYJ‹\Ë˜\œ˜^JJK\Ë˜\œ˜^VÝ
ÌOYÚJJK\Ë˜\œ˜^VÝ
ÌWOYÚJŠK\Ë˜\œ˜^VÝ
Ì—OYÚJJK\Ë˜\œ˜^VÝ
Ì×OYÚJŠK\ß_K‘›Ø]ÌY™™\]šX]OUK‘›Ø]Y™™\]šX]OXÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]È›Ø]\œ˜^J
KKŠ__K‘›Ø]\OR‘›ÙÏZ[Ë‘›ÙÑ^[›Ë‘œ˜[YXY™™\•^\™OXÛ\ÜÈ^[™È™^ØÛÛœÝXÝÜŠJ^ÜÝ\\ŠÝÚYZYÚ™_JK\Ëš\Ñœ˜[YXY™™\•^\™OHL\Ë›XYÑš[\T\Ë›Z[‘š[\T\Ë™Ù[™\˜]SZ\X\ÏHLK\Ë›™YYÕ\]OHL_K‘œ›ÛÚYO\Ë‘œ\Ý[OYÜ‹‘ÓY™™\]šX]OXÛ\ÜÞØÛÛœÝXÝÜŠK‹KŠ^Ý\Ëš\ÑÓY™™\]šX]OHL\Ë›˜[YOW—‹\Ë˜Y™™\]\Ë\OYK\Ëš][TÚ^™O[‹\Ë™[[Y[Ú^™OZK\Ë˜ÛÝ[\‹\Ë™\œÚ[ÛL\Ù]™YYÕ\]J
^ÈLOO]	‰\Ë™\œÚ[ÛŠÊß\Ù]Y™™\Š
^Ü™]\›ˆ\Ë˜Y™™\]\ß\Ù]\JJ^Ü™]\›ˆ\Ë\O]\Ë™[[Y[Ú^™OYK\ß\Ù]][TÚ^™J
^Ü™]\›ˆ\Ëš][TÚ^™O]\ß\Ù]ÛÝ[

^Ü™]\›ˆ\Ë˜ÛÝ[]\ß_K‘ÓÓOWŒL‹‘ÓÓÏR‘Ü™X]\ÛÛ\\™OMLM‹‘Ü™X]\‘\M‹‘Ü™X]\‘\]X[ÛÛ\\™OMLN‘Ü™X]\‘\]X[\MK‘Ü™X]\‘\]X[Ý[˜Ú[[˜ÏMLN‘Ü™X]\”Ý[˜Ú[[˜ÏMLM‹‘ÜšY[\XÛ\ÜÈ^[™ÈØÛÛœÝXÝÜŠLLOLLMÌÎLONMÎ
^Û[™]ÈÚJŠKO[™]ÈÚJJNØÛÛœÝYKÌ‹Ï]ÙKO]Ì‹ÏV×KV×NÙ›ÜŠ]LÏLKXNÝYNÝ
ÊË
Ï\Ê^ÛËœ\Ú
XKK
KËœ\Ú
XKJNØÛÛœÝO]OO\ÛŽšNÙKÐ\œ˜^JÊKÊÏLËKÐ\œ˜^JÊKÊÏLËKÐ\œ˜^JÊKÊÏLËKÐ\œ˜^JÊKÊÏLßXÛÛœÝÏ[™]ÈZNØËœÙ]]šX]JœÜÚ][Û—‹™]ÈJËÊJKËœÙ]]šX]J˜ÛÛÜ—‹™]ÈJÊJNÜÝ\\ŠË™]È›
Ý™\^ÛÛÜœÎˆLÛ™SX\YˆL_JJK\Ë\OW‘ÜšY[\—ŸY\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
__K‘Ü›Ý\VXK’[‘›Ø]\OU‹’[Z\Ü\™SYÚUš’[Z\Ü\™SYÚ[\XÛ\ÜÈ^[™È›žØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š
K\Ë›YÚ]\Ë›X]š^]›X]š^ÛÜ›\Ë›X]š^]]Õ\]OHLK\Ë˜ÛÛÜ[‹\Ë\OW’[Z\Ü\™SYÚ[\—ŽØÛÛœÝO[™]È˜ÊJNÚKœ›Ý]VJJ“X]”JK\Ë›X]\šX[[™]ÈJÝÚ\™Yœ˜[YNˆL›ÙÎˆLKÛ™SX\YˆL_JK›ÚYOO]\Ë˜ÛÛÜ‰‰Š\Ë›X]\šX[™\^ÛÛÜœÏHL
NØÛÛœÝZK™Ù]]šX]JœÜÚ][Û—ŠKÏ[™]È›Ø]Ì\œ˜^JÊœ‹˜ÛÝ[
NÚKœÙ]]šX]J˜ÛÛÜ—‹™]ÈZJËÊJK\Ë˜Y
™]ÈšJK\Ë›X]\šX[
JK\Ë\]J
_Y\ÜÜÙJ
^Ý\Ë˜Ú[™[–ÌK™Ù[ÛY]žK™\ÜÜÙJ
K\Ë˜Ú[™[–ÌK›X]\šX[™\ÜÜÙJ
_]\]J
^ØÛÛœÝ]\Ë˜Ú[™[–ÌNÚYŠ›ÚYOO]\Ë˜ÛÛÜŠ]\Ë›X]\šX[˜ÛÛÜ‹œÙ]
\Ë˜ÛÛÜŠNÙ[Ù^ØÛÛœÝO]™Ù[ÛY]žK™Ù]]šX]J˜ÛÛÜ—ŠNÉK˜ÛÜJ\Ë›YÚ˜ÛÛÜŠK]K˜ÛÜJ\Ë›YÚ™Ü›Ý[™ÛÛÜŠNÙ›ÜŠ]LYK˜ÛÝ[ÝŽÝ
ÊÊ^ØÛÛœÝO]‹ÌÉN”]NÙKœÙ]VŠKœ‹K™ËK˜Š_YK›™YYÕ\]OHL]\Ë›YÚ\]UÛÜ›X]š^
LLJK›ÛÚÐ]
ÝKœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\Ë›YÚ›X]š^ÛÜ›
K›™YØ]J
J__K’XÛÜØZY›Û‘Ù[ÛY]žOVË’[XYÙPš]X\ØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Ò[XYÙPš]X\ØY\HL[™Yš[™YO]\[ÙˆÜ™X]R[XYÙPš]X\	‰˜ÛÛœÛÛKØ\›Š•‘QK’[XYÙPš]X\ØY\ŽˆÜ™X]R[XYÙPš]X\

H›ÝÝ\ÜY—ŠK[™Yš[™YO]\[Ùˆ™]Ú	‰˜ÛÛœÛÛKØ\›Š•‘QK’[XYÙPš]X\ØY\Žˆ™]Ú

H›ÝÝ\ÜY—ŠK\Ë›Ü[ÛœÏ^Ü™[][\P[N—››Û™WŸ_\Ù]Ü[ÛœÊ
^Ü™]\›ˆ\Ë›Ü[ÛœÏ]\ß[ØY
K‹J^Ý›ÚYOO]	‰ŠW—ŠK›ÚYOO]\Ëœ]	‰Š]\Ëœ]
Ý
K]\Ë›X[˜YÙ\‹œ™\ÛÛ™UT“

NØÛÛœÝ]\ËÏUZ™Ù]

NÚYŠ›ÚYOO\Ê\™]\›ˆ‹›X[˜YÙ\‹š][TÝ\

KË[Ý›ÚYË[Š
OžÙI‰™JŠK‹›X[˜YÙ\‹š][Q[™

_JJK˜Ø]Ú

OžÚI‰šJ
_JJNŠÙ][Y[Ý]

[˜Ý[ÛŠ
^ÙI‰™JÊK‹›X[˜YÙ\‹š][Q[™

_JK
KÊNØÛÛœÝO^ßNØK˜Ü™Y[X[ÏW˜[›Ûž[[Ý\×OO]\Ë˜Ü›ÜÜÓÜšYÚ[×œØ[YK[ÜšYÚ[—Ž—š[˜ÛYW‹KšXY\œÏ]\Ëœ™\]Y\ÝXY\ŽØÛÛœÝÏY™]Ú
JK[Š
[˜Ý[ÛŠ
^Ü™]\›ˆ˜›ØŠ
_JJK[Š
[˜Ý[ÛŠ
^Ü™]\›ˆÜ™X]R[XYÙPš]X\
Øš™XÝ˜\ÜÚYÛŠ‹›Ü[ÛœËØÛÛÜ”ÜXÙPÛÛ™\œÚ[ÛŽ—››Û™WŸJJ_JJK[Š
[˜Ý[ÛŠŠ^Ü™]\›ˆZ˜Y
ŠKI‰™JŠK‹›X[˜YÙ\‹š][Q[™

KŸJJK˜Ø]Ú

[˜Ý[ÛŠJ^ÚI‰šJJKZœ™[[Ý™J
K‹›X[˜YÙ\‹š][Q\œ›ÜŠ
K‹›X[˜YÙ\‹š][Q[™

_JJNÕZ˜Y
ÊK‹›X[˜YÙ\‹š][TÝ\

__K’[XYÙSØY\QÚ’[XYÙU][ÏRYK’[˜Ü™[Y[Ý[˜Ú[ÜMÍŽ‹’[˜Ü™[Y[Ü˜\Ý[˜Ú[ÜLÍMK’[œÝ[˜ÙYY™™\]šX]OZÛË’[œÝ[˜ÙYY™™\‘Ù[ÛY]žO[K’[œÝ[˜ÙY[\›X]™YY™™\XÛ\ÜÈ^[™ÈÛÞØÛÛœÝXÝÜŠKLJ^ÜÝ\\ŠJK\Ëš\Ò[œÝ[˜ÙY[\›X]™YY™™\HL\Ë›Y\Ú\]šX]O[ŸXÛÜJ
^Ü™]\›ˆÝ\\‹˜ÛÜJ
K\Ë›Y\Ú\]šX]O]›Y\Ú\]šX]K\ßXÛÛ™J
^ØÛÛœÝO\Ý\\‹˜ÛÛ™J
NÜ™]\›ˆK›Y\Ú\]šX]O]\Ë›Y\Ú\]šX]K_]Ò”ÓÓŠ
^ØÛÛœÝO\Ý\\‹Ò”ÓÓŠ
NÜ™]\›ˆKš\Ò[œÝ[˜ÙY[\›X]™YY™™\HLK›Y\Ú\]šX]O]\Ë›Y\Ú\]šX]K__K’[œÝ[˜ÙYY\ÚRÛË’[MY™™\]šX]OXÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]È[M\œ˜^J
KKŠ__K’[ÌY™™\]šX]OXÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]È[Ì\œ˜^J
KKŠ__K’[Y™™\]šX]OXÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]È[\œ˜^J
KKŠ__K’[\O^‹’[\›X]™YY™™\\ÛË’[\›X]™YY™™\]šX]O[ÛË’[\œÛ[^’[\œÛ]Q\ØÜ™]OPÝ’[\œÛ]S[™X\S’[\œÛ]TÛ[ÛÝT’[™\Ý[˜Ú[ÜMLÎ‹’ÙY\Ý[˜Ú[ÜV]’Ù^Yœ˜[YU˜XÚÏXš“ÑP[Ë“]QÙ[ÛY]žO[˜Ë“^Y\œÏR[‹“\ÜÐÛÛ\\™OMLLË“\ÜÑ\L‹“\ÜÑ\]X[ÛÛ\\™OMLMK“\ÜÑ\]X[\LË“\ÜÑ\]X[Ý[˜Ú[[˜ÏMLMK“\ÜÔÝ[˜Ú[[˜ÏMLLË“YÚR“YÚ›Ø™O\ÝK“[™OS[“[™LÏXÛ\ÜÞØÛÛœÝXÝÜŠ[™]ÈÙKO[™]ÈÙJ^Ý\ËœÝ\]\Ë™[™Y_\Ù]
J^Ü™]\›ˆ\ËœÝ\˜ÛÜJ
K\Ë™[™˜ÛÜJJK\ßXÛÜJ
^Ü™]\›ˆ\ËœÝ\˜ÛÜJœÝ\
K\Ë™[™˜ÛÜJ™[™
K\ßYÙ]Ù[\Š
^Ü™]\›ˆ˜Y™XÝÜœÊ\ËœÝ\\Ë™[™
K›][\TØØ[\ŠJ_Y[J
^Ü™]\›ˆœÝX•™XÝÜœÊ\Ë™[™\ËœÝ\
_Y\Ý[˜ÙTÜJ
^Ü™]\›ˆ\ËœÝ\™\Ý[˜ÙUÔÜ]X\™Y
\Ë™[™
_Y\Ý[˜ÙJ
^Ü™]\›ˆ\ËœÝ\™\Ý[˜ÙUÊ\Ë™[™
_X]
J^Ü™]\›ˆ\Ë™[JJK›][\TØØ[\Š
K˜Y
\ËœÝ\
_XÛÜÙ\ÝÚ[ÔÚ[\˜[Y]\ŠJ^ÕÝKœÝX•™XÝÜœÊ\ËœÝ\
KKœÝX•™XÝÜœÊ\Ë™[™\ËœÝ\
NØÛÛœÝVK™Ý
JNÛ]OVK™Ý
ÝJKÛŽÜ™]\›ˆI‰ŠOXYJKJJK_XÛÜÙ\ÝÚ[ÔÚ[
KŠ^ØÛÛœÝO]\Ë˜ÛÜÙ\ÝÚ[ÔÚ[\˜[Y]\ŠJNÜ™]\›ˆ\Ë™[JŠK›][\TØØ[\ŠJK˜Y
\ËœÝ\
_X\SX]š^

^Ü™]\›ˆ\ËœÝ\˜\SX]š^

K\Ë™[™˜\SX]š^

K\ßY\]X[Ê
^Ü™]\›ˆœÝ\™\]X[Ê\ËœÝ\
I‰™[™™\]X[Ê\Ë™[™
_XÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê__K“[™P˜\ÚXÓX]\šX[Y›“[™PÝ\™OV[“[™PÝ\™LÏV›“[™Q\ÚYX]\šX[Y“[™SÛÜQ[“[™TÙYÛY[ÏU“[™X\‘\Ü^TÐÛÛÜ”ÜXÙOZÝ“[™X\‘[˜ÛÙ[™ÏQ“[™X\‘š[\Q“[™X\’[\œÛ[SZ“[™X\“Z\X\[™X\‘š[\LL“[™X\“Z\X\™X\™\Ýš[\LLË“[™X\“Z\X\[™X\‘š[\SË“[™X\“Z\X\™X\™\Ýš[\S‹“[™X\”Ô‘ÐÛÛÜ”ÜXÙOR“[™X\•Û™SX\[™Ï[K“[™X\•˜[œÙ™\UÝ“ØY\SÚ“ØY\•][Ï[ÝK“ØY[™ÓX[˜YÙ\Q“ÛÜÛ˜ÙOLŒŒ“ÛÜ[™ÔÛ™ÏLŒŒ‹“ÛÜ™\X]LŒŒK“[Z[˜[˜ÙP[Q›Ü›X]LLK“[Z[˜[˜ÙQ›Ü›X]LL“SÕTÑO^ÓQ•ŒRQNŒK’QÒŒ‹“ÕUNŒÓNŒKSŽŒŸK“X]\šX[YK“X]\šX[ØY\X]K“X]][Ï\K“X]š^ÏY™K“X]š^S[‹“X^\]X][ÛLL“Y\ÚRšK“Y\Ú˜\ÚXÓX]\šX[\K“Y\Ú\X]\šX[RK“Y\Ú\Ý[˜ÙSX]\šX[U˜K“Y\Ú[X™\X]\šX[Z“Y\ÚX]Ø\X]\šX[]Z“Y\Ú›Ü›X[X]\šX[XÚ“Y\ÚÛ™ÓX]\šX[[Ú“Y\Ú\ÚXØ[X]\šX[XZ“Y\ÚÝ[™\™X]\šX[\Ú“Y\ÚÛÛ“X]\šX[[“Z[‘\]X][ÛLLË“Z\œ›Ü™Y™\X]Ü˜\[™ÏS“Z^Ü\˜][Û]K“][\P›[™[™ÏM“][\SÜ\˜][ÛZ“™X\™\Ýš[\T“™X\™\ÝZ\X\[™X\‘š[\LLK“™X\™\ÝZ\X\™X\™\Ýš[\LL“™X\™\ÝZ\X\[™X\‘š[\UK“™X\™\ÝZ\X\™X\™\Ýš[\RK“™]™\ÛÛ\\™OMLL‹“™]™\‘\L“™]™\”Ý[˜Ú[[˜ÏMLL‹“›Ð›[™[™ÏL“›ÐÛÛÜ”ÜXÙO^“›ÕÛ™SX\[™Ï\“›Ü›X[[š[X][Û›[™[ÙOS“›Ü›X[›[™[™ÏLK“›Ý\]X[ÛÛ\\™OMLMË“›Ý\]X[\MË“›Ý\]X[Ý[˜Ú[[˜ÏMLMË“[X™\’Ù^Yœ˜[YU˜XÚÏ]Ú“Øš™XÝÑZ›‹“Øš™XÝØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ]\ËÏW—OO]\Ëœ]ÛÝK™^˜XÝ\›˜\ÙJ
N\Ëœ]Ý\Ëœ™\ÛÝ\˜ÙT]]\Ëœ™\ÛÝ\˜ÙT]ÎØÛÛœÝO[™]Èš
\Ë›X[˜YÙ\ŠNØKœÙ]]
\Ëœ]
KKœÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠKKœÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊKK›ØY

[˜Ý[ÛŠŠ^Û]Ï[[Ýž^ÜÏR”ÓÓ‹œ\œÙJŠ_XØ]Ú
J^Ü™]\›ˆ›ÚYOOZI‰šJJK›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QN“Øš™XÝØY\ŽˆØ[‰Ý\œÙHŠÝ
×‹—‹K›Y\ÜØYÙJ_XÛÛœÝO\Ë›Y]Y]NÚYŠ›ÚYOOX_›ÚYOOXK\_™Ù[ÛY]žWOOXK\KÓÝÙ\Ø\ÙJ
J\™]\›ˆ›ÚYOOZI‰šJ™]È\œ›ÜŠ•‘QK“Øš™XÝØY\ŽˆØ[‰ÝØYŠÝ
JK›ÚYÛÛœÛÛK™\œ›ÜŠ•‘QK“Øš™XÝØY\ŽˆØ[‰ÝØYŠÝ
NÜ‹œ\œÙJËJ_JK‹J_X\Þ[˜ÈØY\Þ[˜ÊJ^ØÛÛœÝW—OO]\Ëœ]ÛÝK™^˜XÝ\›˜\ÙJ
N\Ëœ]Ý\Ëœ™\ÛÝ\˜ÙT]]\Ëœ™\ÛÝ\˜ÙT]ŽØÛÛœÝO[™]Èš
\Ë›X[˜YÙ\ŠNÚKœÙ]]
\Ëœ]
KKœÙ]™\]Y\ÝXY\Š\Ëœ™\]Y\ÝXY\ŠKKœÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊNØÛÛœÝX]ØZ]K›ØY\Þ[˜ÊJKÏR”ÓÓ‹œ\œÙJŠKO\Ë›Y]Y]NÚYŠ›ÚYOOX_›ÚYOOXK\_™Ù[ÛY]žWOOXK\KÓÝÙ\Ø\ÙJ
J]›ÝÈ™]È\œ›ÜŠ•‘QK“Øš™XÝØY\ŽˆØ[‰ÝØYŠÝ
NÜ™]\›ˆ]ØZ]\Ëœ\œÙP\Þ[˜ÊÊ_\\œÙJJ^ØÛÛœÝ]\Ëœ\œÙP[š[X][ÛœÊ˜[š[X][ÛœÊKO]\Ëœ\œÙTÚ\\ÊœÚ\\ÊK]\Ëœ\œÙQÙ[ÛY]šY\Ê™Ù[ÛY]šY\ËJKÏ]\Ëœ\œÙR[XYÙ\Êš[XYÙ\Ë
[˜Ý[ÛŠ
^Ý›ÚYOOYI‰™J
_JJKO]\Ëœ\œÙU^\™\Ê^\™\ËÊKÏ]\Ëœ\œÙSX]\šX[Ê›X]\šX[ËJK]\Ëœ\œÙSØš™XÝ
›Øš™XÝ‹ËKŠKÏ]\Ëœ\œÙTÚÙ[]ÛœÊœÚÙ[]ÛœË
NÚYŠ\Ë˜š[™ÚÙ[]ÛœÊÊK›ÚYOOYJ^Û]HLNÙ›ÜŠÛÛœÝH[ˆÊZYŠÖÙWK™]H[œÝ[˜Ù[ÙˆS[XYÙQ[[Y[
^ÝHLØœ™XZßHLOOO]	‰™J
_\™]\›ˆX\Þ[˜È\œÙP\Þ[˜Ê
^ØÛÛœÝO]\Ëœ\œÙP[š[X][ÛœÊ˜[š[X][ÛœÊK]\Ëœ\œÙTÚ\\ÊœÚ\\ÊKO]\Ëœ\œÙQÙ[ÛY]šY\Ê™Ù[ÛY]šY\ËŠKX]ØZ]\Ëœ\œÙR[XYÙ\Ð\Þ[˜Êš[XYÙ\ÊKÏ]\Ëœ\œÙU^\™\Ê^\™\ËŠKO]\Ëœ\œÙSX]\šX[Ê›X]\šX[ËÊKÏ]\Ëœ\œÙSØš™XÝ
›Øš™XÝKKËJK]\Ëœ\œÙTÚÙ[]ÛœÊœÚÙ[]ÛœËÊNÜ™]\›ˆ\Ë˜š[™ÚÙ[]ÛœÊË
Kß\\œÙTÚ\\Ê
^ØÛÛœÝO^ßNÚYŠ›ÚYOO]
Y›ÜŠ]LO]›[™ÝÛNÛŠÊÊ^ØÛÛœÝOJ™]ÈXÊK™œ›ÛR”ÓÓŠÛ—JNÙVÚK]ZYOZ_\™]\›ˆ_\\œÙTÚÙ[]ÛœÊJ^ØÛÛœÝ^ßKO^ßNÚYŠK˜]™\œÙJ
[˜Ý[ÛŠ
^Ýš\Ð›Û™I‰ŠVÝ]ZYO]
_JJK›ÚYOO]
Y›ÜŠ]OL]›[™ÝÙOŽÙJÊÊ^ØÛÛœÝJ™]È›ÊK™œ›ÛR”ÓÓŠÙWKJNÛ–Ü‹]ZYO\Ÿ\™]\›ˆŸ\\œÙQÙ[ÛY]šY\ÊJ^ØÛÛœÝ^ßNÚYŠ›ÚYOO]
^ØÛÛœÝO[™]ÈÝNÙ›ÜŠ]LÏ]›[™ÝÜÎÜŠÊÊ^Û]ÎØÛÛœÝO]Ü—NÜÝÚ]Ú
K\J^ØØ\ÙWY™™\‘Ù[ÛY]žWŽ˜Ø\ÙW’[œÝ[˜ÙYY™™\‘Ù[ÛY]žWŽœÏZKœ\œÙJJNØœ™XZÎÙY˜][˜K\H[ˆšÜÏ[šØK\WK™œ›ÛR”ÓÓŠKJN˜ÛÛœÛÛKØ\›Š‘QK“Øš™XÝØY\Žˆ[œÝ\ÜYÙ[ÛY]žH\H‰ØK\_W˜
_\Ë]ZYXK]ZY›ÚYOOXK›˜[YI‰ŠË›˜[YOXK›˜[YJK›ÚYOOXK\Ù\‘]I‰ŠË\Ù\‘]OXK\Ù\‘]JK–ØK]ZYO\ß_\™]\›ˆŸ\\œÙSX]\šX[ÊJ^ØÛÛœÝ^ßKO^ßNÚYŠ›ÚYOO]
^ØÛÛœÝ[™]È]NÜ‹œÙ]^\™\ÊJNÙ›ÜŠ]OLÏ]›[™ÝÙOÎÙJÊÊ^ØÛÛœÝÏ]ÙWNÝ›ÚYOO[–ÜË]ZYI‰Š–ÜË]ZYO\‹œ\œÙJÊJKVÜË]ZYO[–ÜË]ZY__\™]\›ˆ_\\œÙP[š[X][ÛœÊ
^ØÛÛœÝO^ßNÚYŠ›ÚYOO]
Y›ÜŠ]LÛ›[™ÝÛŠÊÊ^ØÛÛœÝO]Û—KTœ\œÙJJNÙVÜ‹]ZYO\Ÿ\™]\›ˆ_\\œÙR[XYÙ\ÊJ^ØÛÛœÝ]\ËO^ßNÛ]ŽÙ[˜Ý[ÛˆÊ
^ÚYŠœÝš[™×O]\[Ùˆ
^ØÛÛœÝO]Ü™]\›ˆ[˜Ý[ÛŠ
^Ü™]\›ˆ‹›X[˜YÙ\‹š][TÝ\

K‹›ØY

[˜Ý[ÛŠ
^Û‹›X[˜YÙ\‹š][Q[™

_JK›ÚY
[˜Ý[ÛŠ
^Û‹›X[˜YÙ\‹š][Q\œ›ÜŠ
K‹›X[˜YÙ\‹š][Q[™

_JJ_J×Š×Ê_
ØK^—JÎŠ×ÊOÊKÚK\Ý
JOÙN›‹œ™\ÛÝ\˜ÙT]
ÙJ_\™]\›ˆ™]OÞÙ]NžJ\K™]JKÚYÚYZYÚšZYÚN›[ZYŠ›ÚYOO]	‰›[™ÝŒ
^ØÛÛœÝ[™]È
JNÜ[™]ÈÚ
ŠK‹œÙ]Ü›ÜÜÓÜšYÚ[Š\Ë˜Ü›ÜÜÓÜšYÚ[ŠNÙ›ÜŠ]OL]›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ]ÙWK[‹\›ÚYŠ\œ˜^Kš\Ð\œ˜^JŠJ^ØÛÛœÝV×NÙ›ÜŠ]OL\‹›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ\Ê–ÙWJNÛ[OO[‰‰Šˆ[œÝ[˜Ù[ÙˆS[XYÙQ[[Y[Ýœ\Ú
ŠNœ\Ú
™]È›Ê‹™]K‹ÚY‹šZYÚ
JJ_ZVÛ‹]ZYO[™]ÈJ
_Y[Ù^ØÛÛœÝ\Ê‹\›
NÚVÛ‹]ZYO[™]ÈJ
___\™]\›ˆ_X\Þ[˜È\œÙR[XYÙ\Ð\Þ[˜Ê
^ØÛÛœÝO]\Ë^ßNÛ]NØ\Þ[˜È[˜Ý[ÛˆŠ
^ÚYŠœÝš[™×O]\[Ùˆ
^ØÛÛœÝ]K×Š×Ê_
ØK^—JÎŠ×ÊOÊKÚK\Ý
ŠOÛŽ™Kœ™\ÛÝ\˜ÙT]
ÛŽÜ™]\›ˆ]ØZ]K›ØY\Þ[˜ÊŠ_\™]\›ˆ™]OÞÙ]NžJ\K™]JKÚYÚYZYÚšZYÚN›[ZYŠ›ÚYOO]	‰›[™ÝŒ
^ÚO[™]ÈÚ
\Ë›X[˜YÙ\ŠKKœÙ]Ü›ÜÜÓÜšYÚ[Š\Ë˜Ü›ÜÜÓÜšYÚ[ŠNÙ›ÜŠ]OLO]›[™ÝÙONÙJÊÊ^ØÛÛœÝO]ÙWKÏZK\›ÚYŠ\œ˜^Kš\Ð\œ˜^JÊJ^ØÛÛœÝV×NÙ›ÜŠ]OL\Ë›[™ÝÙOŽÙJÊÊ^ØÛÛœÝ\ÖÙWKOX]ØZ]ŠŠNÛ[OOZI‰ŠH[œÝ[˜Ù[ÙˆS[XYÙQ[[Y[Ýœ\Ú
JNœ\Ú
™]È›ÊK™]KKÚYKšZYÚ
JJ_[–ÚK]ZYO[™]ÈJ
_Y[Ù^ØÛÛœÝX]ØZ]ŠK\›
NÛ–ÚK]ZYO[™]ÈJ
___\™]\›ˆŸ\\œÙU^\™\ÊJ^Ù[˜Ý[ÛˆŠJ^Ü™]\›—›[X™\—O]\[ÙˆÝŠÛÛœÛÛKØ\›Š•‘QK“Øš™XÝØY\‹œ\œÙU^\™NˆÛÛœÝ[ÚÝ[™H[ˆ[Y\šXÈ›Ü›K—‹
KVÝJ_XÛÛœÝO^ßNÚYŠ›ÚYOO]
Y›ÜŠ]LÏ]›[™ÝÜÎÜŠÊÊ^ØÛÛœÝÏ]Ü—NÝ›ÚYOO\Ëš[XYÙI‰˜ÛÛœÛÛKØ\›Š	Õ‘QK“Øš™XÝØY\Žˆ›Èš[XYÙWˆÜXÚYšYY›Ü‰ËË]ZY
K›ÚYOOYVÜËš[XYÙWI‰˜ÛÛœÛÛKØ\›Š•‘QK“Øš™XÝØY\Žˆ[™Yš[™Y[XYÙW‹Ëš[XYÙJNØÛÛœÝOYVÜËš[XYÙWKÏXK™]NÛ]Ð\œ˜^Kš\Ð\œ˜^JÊOÊ[™]È‹OO[Ë›[™Ý	‰Š›™YYÕ\]OHL
JNŠ[É‰›Ë™]OÛ™]È›Î›™]È™KÉ‰Š›™YYÕ\]OHL
JKœÛÝ\˜ÙOXK]ZY\Ë]ZY›ÚYOO\Ë›˜[YI‰Š›˜[YO\Ë›˜[YJK›ÚYOO\Ë›X\[™É‰Š›X\[™Ï[ŠË›X\[™ËJJK›ÚYOO\Ë˜Ú[›™[	‰Š˜Ú[›™[\Ë˜Ú[›™[
K›ÚYOO\Ë›Ù™œÙ]	‰››Ù™œÙ]™œ›ÛP\œ˜^JË›Ù™œÙ]
K›ÚYOO\Ëœ™\X]	‰›œ™\X]™œ›ÛP\œ˜^JËœ™\X]
K›ÚYOO\Ë˜Ù[\‰‰›˜Ù[\‹™œ›ÛP\œ˜^JË˜Ù[\ŠK›ÚYOO\Ëœ›Ý][Û‰‰Šœ›Ý][Û\Ëœ›Ý][ÛŠK›ÚYOO\ËÜ˜\	‰ŠÜ˜\Ï[ŠËÜ˜\ÌK]JKÜ˜\[ŠËÜ˜\ÌWK]JJK›ÚYOO\Ë™›Ü›X]	‰Š™›Ü›X]\Ë™›Ü›X]
K›ÚYOO\Ëš[\›˜[›Ü›X]	‰Šš[\›˜[›Ü›X]\Ëš[\›˜[›Ü›X]
K›ÚYOO\Ë\I‰Š\O\Ë\JK›ÚYOO\Ë˜ÛÛÜ”ÜXÙI‰Š˜ÛÛÜ”ÜXÙO\Ë˜ÛÛÜ”ÜXÙJK›ÚYOO\Ë™[˜ÛÙ[™É‰Š™[˜ÛÙ[™Ï\Ë™[˜ÛÙ[™ÊK›ÚYOO\Ë›Z[‘š[\‰‰Š›Z[‘š[\[ŠË›Z[‘š[\‹JJK›ÚYOO\Ë›XYÑš[\‰‰Š›XYÑš[\[ŠË›XYÑš[\‹JJK›ÚYOO\Ë˜[š\ÛÝ›ÜI‰Š˜[š\ÛÝ›ÜO\Ë˜[š\ÛÝ›ÜJK›ÚYOO\Ë™›\I‰Š™›\O\Ë™›\JK›ÚYOO\Ë™Ù[™\˜]SZ\X\É‰Š™Ù[™\˜]SZ\X\Ï\Ë™Ù[™\˜]SZ\X\ÊK›ÚYOO\Ëœ™[][\P[I‰Šœ™[][\P[O\Ëœ™[][\P[JK›ÚYOO\Ë[œXÚÐ[YÛ›Y[	‰Š[œXÚÐ[YÛ›Y[\Ë[œXÚÐ[YÛ›Y[
K›ÚYOO\Ë˜ÛÛ\\™Q[˜Ý[Û‰‰Š˜ÛÛ\\™Q[˜Ý[Û\Ë˜ÛÛ\\™Q[˜Ý[ÛŠK›ÚYOO\Ë\Ù\‘]I‰Š\Ù\‘]O\Ë\Ù\‘]JKVÜË]ZYO[\™]\›ˆ_\\œÙSØš™XÝ
K‹KŠ^Û]ËKÎÙ[˜Ý[Ûˆ

^Ü™]\›ˆ›ÚYOOYVÝI‰˜ÛÛœÛÛKØ\›Š•‘QK“Øš™XÝØY\Žˆ[™Yš[™YÙ[ÛY]žW‹
KVÝ_Y[˜Ý[ÛˆÊ
^ÚYŠ›ÚYOO]
^ÚYŠ\œ˜^Kš\Ð\œ˜^J
J^ØÛÛœÝOV×NÙ›ÜŠ]OL]›[™ÝÚOŽÚJÊÊ^ØÛÛœÝ]ÚWNÝ›ÚYOO[–Ü—I‰˜ÛÛœÛÛKØ\›Š•‘QK“Øš™XÝØY\Žˆ[™Yš[™YX]\šX[‹ŠKKœ\Ú
–Ü—J_\™]\›ˆ_\™]\›ˆ›ÚYOO[–ÝI‰˜ÛÛœÛÛKØ\›Š•‘QK“Øš™XÝØY\Žˆ[™Yš[™YX]\šX[‹
K–Ý__Y[˜Ý[Ûˆ

^Ü™]\›ˆ›ÚYOOZVÝI‰˜ÛÛœÛÛKØ\›Š•‘QK“Øš™XÝØY\Žˆ[™Yš[™Y^\™W‹
KVÝ_\ÝÚ]Ú
\J^ØØ\ÙW”ØÙ[™WŽœÏ[™]È›Ë›ÚYOO]˜˜XÚÙÜ›Ý[™	‰Š[X™\‹š\Ò[YÙ\Š˜˜XÚÙÜ›Ý[™
OÜË˜˜XÚÙÜ›Ý[™[™]ÈÚJ˜˜XÚÙÜ›Ý[™
NœË˜˜XÚÙÜ›Ý[™Z
˜˜XÚÙÜ›Ý[™
JK›ÚYOO]™[š\›Û›Y[	‰ŠË™[š\›Û›Y[Z
™[š\›Û›Y[
JK›ÚYOO]™›ÙÉ‰Š‘›Ù×OO]™›ÙË\OÜË™›ÙÏ[™]È[Ê™›ÙË˜ÛÛÜ‹™›ÙË›™X\‹™›ÙË™˜\ŠN—‘›ÙÑ^—OO]™›ÙË\I‰ŠË™›ÙÏ[™]È›Ê™›ÙË˜ÛÛÜ‹™›ÙË™[œÚ]JJK—ˆOO]™›ÙË›˜[YI‰ŠË™›ÙË›˜[YO]™›ÙË›˜[YJJK›ÚYOO]˜˜XÚÙÜ›Ý[™›\œš[™\ÜÉ‰ŠË˜˜XÚÙÜ›Ý[™›\œš[™\ÜÏ]˜˜XÚÙÜ›Ý[™›\œš[™\ÜÊK›ÚYOO]˜˜XÚÙÜ›Ý[™[[œÚ]I‰ŠË˜˜XÚÙÜ›Ý[™[[œÚ]O]˜˜XÚÙÜ›Ý[™[[œÚ]JNØœ™XZÎØØ\ÙW”\œÜXÝ]™PØ[Y\˜WŽœÏ[™]ÈÜŠ™›Ý‹˜\ÜXÝ›™X\‹™˜\ŠK›ÚYOO]™›ØÝ\É‰ŠË™›ØÝ\Ï]™›ØÝ\ÊK›ÚYOO]ž›ÛÛI‰ŠËž›ÛÛO]ž›ÛÛJK›ÚYOO]™š[QØ]YÙI‰ŠË™š[QØ]YÙO]™š[QØ]YÙJK›ÚYOO]™š[SÙ™œÙ]	‰ŠË™š[SÙ™œÙ]]™š[SÙ™œÙ]
K›ÚYOO]šY]É‰ŠËšY]ÏSØš™XÝ˜\ÜÚYÛŠßKšY]ÊJNØœ™XZÎØØ\ÙW“ÜÙÜ˜\XÐØ[Y\˜WŽœÏ[™]ÈŠ›YœšYÚÜ˜›ÝÛK›™X\‹™˜\ŠK›ÚYOO]ž›ÛÛI‰ŠËž›ÛÛO]ž›ÛÛJK›ÚYOO]šY]É‰ŠËšY]ÏSØš™XÝ˜\ÜÚYÛŠßKšY]ÊJNØœ™XZÎØØ\ÙW[XšY[YÚŽœÏ[™]ÈJ˜ÛÛÜ‹š[[œÚ]JNØœ™XZÎØØ\ÙW‘\™XÝ[Û˜[YÚŽœÏ[™]È]J˜ÛÛÜ‹š[[œÚ]JNØœ™XZÎØØ\ÙW”Ú[YÚŽœÏ[™]ÈZ
˜ÛÛÜ‹š[[œÚ]K™\Ý[˜ÙK™XØ^JNØœ™XZÎØØ\ÙW”™XÝ\™XSYÚŽœÏ[™]È]J˜ÛÛÜ‹š[[œÚ]KÚYšZYÚ
NØœ™XZÎØØ\ÙW”ÜÝYÚŽœÏ[™]ÈZ
˜ÛÛÜ‹š[[œÚ]K™\Ý[˜ÙK˜[™ÛKœ[[Xœ˜K™XØ^JNØœ™XZÎØØ\ÙW’[Z\Ü\™SYÚŽœÏ[™]Èš
˜ÛÛÜ‹™Ü›Ý[™ÛÛÜ‹š[[œÚ]JNØœ™XZÎØØ\ÙW“YÚ›Ø™WŽœÏJ™]ÈÝJK™œ›ÛR”ÓÓŠ
NØœ™XZÎØØ\ÙW”ÚÚ[›™YY\ÚŽ˜O[
™Ù[ÛY]žJKÏXÊ›X]\šX[
KÏ[™]È›ÊKÊK›ÚYOO]˜š[™[ÙI‰ŠË˜š[™[ÙO]˜š[™[ÙJK›ÚYOO]˜š[™X]š^	‰œË˜š[™X]š^™œ›ÛP\œ˜^J˜š[™X]š^
K›ÚYOO]œÚÙ[]Û‰‰ŠËœÚÙ[]Û]œÚÙ[]ÛŠNØœ™XZÎØØ\ÙW“Y\ÚŽ˜O[
™Ù[ÛY]žJKÏXÊ›X]\šX[
KÏ[™]ÈšJKÊNØœ™XZÎØØ\ÙW’[œÝ[˜ÙYY\ÚŽ˜O[
™Ù[ÛY]žJKÏXÊ›X]\šX[
NØÛÛœÝO]˜ÛÝ[]š[œÝ[˜ÙSX]š^O]š[œÝ[˜ÙPÛÛÜŽÜÏ[™]ÈÛÊKËJKËš[œÝ[˜ÙSX]š^[™]ÈÛÊ™]È›Ø]Ì\œ˜^J‹˜\œ˜^JKMŠK›ÚYOOZI‰ŠËš[œÝ[˜ÙPÛÛÜ[™]ÈÛÊ™]È›Ø]Ì\œ˜^JK˜\œ˜^JKKš][TÚ^™JJNØœ™XZÎØØ\ÙW˜]ÚYY\ÚŽ˜O[
™Ù[ÛY]žJKÏXÊ›X]\šX[
KÏ[™]È[
›X^Ù[ÛY]žPÛÝ[›X^™\^ÛÝ[›X^[™^ÛÝ[ÊKË™Ù[ÛY]žOXKËœ\“Øš™XÝœ\Ý[PÝ[Y]œ\“Øš™XÝœ\Ý[PÝ[YËœÛÜØš™XÝÏ]œÛÜØš™XÝËË—Ù˜]Ô˜[™Ù\Ï]™˜]Ô˜[™Ù\ËË—Ü™\Ù\™Y˜[™Ù\Ï]œ™\Ù\™Y˜[™Ù\ËË—Ýš\ÚXš[]O]š\ÚXš[]KË—ØXÝ]™O]˜XÝ]™KË—Ø›Ý[™Ï]˜›Ý[™Ë›X\

OžØÛÛœÝO[™]ÈYNÙK›Z[‹™œ›ÛP\œ˜^J˜›ÞZ[ŠKK›X^™œ›ÛP\œ˜^J˜›ÞX^
NØÛÛœÝ[™]ÈŽÜ™]\›ˆ‹œ˜Y]\Ï]œÜ\™T˜Y]\Ë‹˜Ù[\‹™œ›ÛP\œ˜^JœÜ\™PÙ[\ŠKØ›Þ[š]X[^™Y˜›Þ[š]X[^™Y›Þ™KÜ\™R[š]X[^™YœÜ\™R[š]X[^™YÜ\™N›Ÿ_JJKË—ÛX^Ù[ÛY]žPÛÝ[]›X^Ù[ÛY]žPÛÝ[Ë—ÛX^™\^ÛÝ[]›X^™\^ÛÝ[Ë—ÛX^[™^ÛÝ[]›X^[™^ÛÝ[Ë—ÙÙ[ÛY]žR[š]X[^™Y]™Ù[ÛY]žR[š]X[^™YË—ÙÙ[ÛY]žPÛÝ[]™Ù[ÛY]žPÛÝ[Ë—ÛX]šXÙ\Õ^\™OZ
›X]šXÙ\Õ^\™K]ZY
NØœ™XZÎØØ\ÙW“ÑŽœÏ[™]È[ÎØœ™XZÎØØ\ÙW“[™WŽœÏ[™]È[

™Ù[ÛY]žJKÊ›X]\šX[
JNØœ™XZÎØØ\ÙW“[™SÛÜŽœÏ[™]È[

™Ù[ÛY]žJKÊ›X]\šX[
JNØœ™XZÎØØ\ÙW“[™TÙYÛY[×ŽœÏ[™]È

™Ù[ÛY]žJKÊ›X]\šX[
JNØœ™XZÎØØ\ÙW”Ú[ÛÝYŽ˜Ø\ÙW”Ú[×ŽœÏ[™]È

™Ù[ÛY]žJKÊ›X]\šX[
JNØœ™XZÎØØ\ÙW”Üš]WŽœÏ[™]È›ÊÊ›X]\šX[
JNØœ™XZÎØØ\ÙW‘Ü›Ý\ŽœÏ[™]ÈXNØœ™XZÎØØ\ÙW›Û™WŽœÏ[™]È›ÎØœ™XZÎÙY˜][œÏ[™]È›ŸZYŠË]ZY]]ZY›ÚYOO]›˜[YI‰ŠË›˜[YO]›˜[YJK›ÚYOO]›X]š^ÊË›X]š^™œ›ÛP\œ˜^J›X]š^
K›ÚYOO]›X]š^]]Õ\]I‰ŠË›X]š^]]Õ\]O]›X]š^]]Õ\]JKË›X]š^]]Õ\]I‰œË›X]š^™XÛÛ\ÜÙJËœÜÚ][Û‹Ëœ]X]\›š[Û‹ËœØØ[JJNŠ›ÚYOO]œÜÚ][Û‰‰œËœÜÚ][Û‹™œ›ÛP\œ˜^JœÜÚ][ÛŠK›ÚYOO]œ›Ý][Û‰‰œËœ›Ý][Û‹™œ›ÛP\œ˜^Jœ›Ý][ÛŠK›ÚYOO]œ]X]\›š[Û‰‰œËœ]X]\›š[Û‹™œ›ÛP\œ˜^Jœ]X]\›š[ÛŠK›ÚYOO]œØØ[I‰œËœØØ[K™œ›ÛP\œ˜^JœØØ[JJK›ÚYOO]\	‰œË\™œ›ÛP\œ˜^J\
K›ÚYOO]˜Ø\ÝÚYÝÉ‰ŠË˜Ø\ÝÚYÝÏ]˜Ø\ÝÚYÝÊK›ÚYOO]œ™XÙZ]™TÚYÝÉ‰ŠËœ™XÙZ]™TÚYÝÏ]œ™XÙZ]™TÚYÝÊKœÚYÝÉ‰Š›ÚYOO]œÚYÝË˜šX\É‰ŠËœÚYÝË˜šX\Ï]œÚYÝË˜šX\ÊK›ÚYOO]œÚYÝË››Ü›X[šX\É‰ŠËœÚYÝË››Ü›X[šX\Ï]œÚYÝË››Ü›X[šX\ÊK›ÚYOO]œÚYÝËœ˜Y]\É‰ŠËœÚYÝËœ˜Y]\Ï]œÚYÝËœ˜Y]\ÊK›ÚYOO]œÚYÝË›X\Ú^™I‰œËœÚYÝË›X\Ú^™K™œ›ÛP\œ˜^JœÚYÝË›X\Ú^™JK›ÚYOO]œÚYÝË˜Ø[Y\˜I‰ŠËœÚYÝË˜Ø[Y\˜O]\Ëœ\œÙSØš™XÝ
œÚYÝË˜Ø[Y\˜JJJK›ÚYOO]š\ÚX›I‰ŠËš\ÚX›O]š\ÚX›JK›ÚYOO]™œ\Ý[PÝ[Y	‰ŠË™œ\Ý[PÝ[Y]™œ\Ý[PÝ[Y
K›ÚYOO]œ™[™\“Ü™\‰‰ŠËœ™[™\“Ü™\]œ™[™\“Ü™\ŠK›ÚYOO]\Ù\‘]I‰ŠË\Ù\‘]O]\Ù\‘]JK›ÚYOO]›^Y\œÉ‰ŠË›^Y\œË›X\ÚÏ]›^Y\œÊK›ÚYOO]˜Ú[™[Š^ØÛÛœÝO]˜Ú[™[ŽÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊ\Ë˜Y
\Ëœ\œÙSØš™XÝ
VÝKK‹KŠJ_ZYŠ›ÚYOO]˜[š[X][ÛœÊ^ØÛÛœÝO]˜[š[X][ÛœÎÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊ^ØÛÛœÝYVÝNÜË˜[š[X][ÛœËœ\Ú
–Û—J__ZYŠ“ÑOO]\J^Ý›ÚYOO]˜]]Õ\]I‰ŠË˜]]Õ\]O]˜]]Õ\]JNØÛÛœÝO]›]™[ÎÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊ^ØÛÛœÝYVÝKO\Ë™Ù]Øš™XÝžT›Ü\J]ZY‹‹›Øš™XÝ
NÝ›ÚYOOZI‰œË˜Y]™[
K‹™\Ý[˜ÙK‹š\Ý\™\Ú\Ê__\™]\›ˆßXš[™ÚÙ[]ÛœÊJ^ÌOOSØš™XÝšÙ^\ÊJK›[™Ý	‰˜]™\œÙJ
[˜Ý[ÛŠ
^ÚYŠLOO]š\ÔÚÚ[›™YY\Ú	‰›ÚYOO]œÚÙ[]ÛŠ^ØÛÛœÝYVÝœÚÙ[]Û—NÝ›ÚYOO[ØÛÛœÛÛKØ\›Š•‘QK“Øš™XÝØY\Žˆ›ÈÚÙ[]Ûˆ›Ý[™Ú]URQ—‹œÚÙ[]ÛŠN˜š[™
‹˜š[™X]š^
__JJ__K“Øš™XÝÜXÙS›Ü›X[X\LK“ØÝZY›Û‘Ù[ÛY]žOZ˜Ë“Û™Q˜XÝÜLŒK“Û™SZ[\ÐÛÛœÝ[[Q˜XÝÜLŒM“Û™SZ[\ÐÛÛœÝ[ÛÛÜ‘˜XÝÜLŒL‹“Û™SZ[\ÑÝ[Q˜XÝÜLŒË“Û™SZ[\ÑÝÛÛÜ‘˜XÝÜLŒK“Û™SZ[\ÔÜ˜Ð[Q˜XÝÜXË“Û™SZ[\ÔÜ˜ÐÛÛÜ‘˜XÝÜLŒË“ÜÙÜ˜\XÐØ[Y\˜OS‹”Ôš[X\šY\Ï\]”Ñ”ÚYÝÓX\[‹”Ñ”ÛÙÚYÝÓX\ZK”T‘SQÙ[™\˜]ÜR‹”]YXË”\œÜXÝ]™PØ[Y\˜O\Ü‹”[™O\‹”[™QÙ[ÛY]žO^‹”[™R[\XÛ\ÜÈ^[™È[ØÛÛœÝXÝÜŠOLKLMÍÍŽMŒ
^ØÛÛœÝO[‹[™]ÈZNÜ‹œÙ]]šX]JœÜÚ][Û—‹™]ÈJÌKLKLKKLKLKKKLKKLKLKKLKKKKÊJK‹˜ÛÛ\]P›Ý[™[™ÔÜ\™J
KÝ\\Š‹™]È›
ØÛÛÜŽšKÛ™SX\YˆL_JJK\Ë\OW”[™R[\—‹\Ëœ[™O]\ËœÚ^™OYNØÛÛœÝÏ[™]ÈZNÜËœÙ]]šX]JœÜÚ][Û—‹™]ÈJÌKKLKKLKLKKKLKLKKLKKÊJKË˜ÛÛ\]P›Ý[™[™ÔÜ\™J
K\Ë˜Y
™]ÈšJË™]ÈJØÛÛÜŽšKÜXÚ]N‹Œ‹˜[œÜ\™[ˆL\Üš]NˆLKÛ™SX\YˆL_JJJ_]\]SX]š^ÛÜ›

^Ý\ËœÜÚ][Û‹œÙ]

K\ËœØØ[KœÙ]
J\ËœÚ^™KJ\ËœÚ^™KJK\Ë›ÛÚÐ]
\Ëœ[™K››Ü›X[
K\Ë˜[œÛ]VŠ]\Ëœ[™K˜ÛÛœÝ[
KÝ\\‹\]SX]š^ÛÜ›

_Y\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
K\Ë˜Ú[™[–ÌK™Ù[ÛY]žK™\ÜÜÙJ
K\Ë˜Ú[™[–ÌK›X]\šX[™\ÜÜÙJ
__K”Ú[YÚTZ”Ú[YÚ[\XÛ\ÜÈ^[™Èš^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]È˜ÊKŠK™]ÈJÝÚ\™Yœ˜[YNˆL›ÙÎˆLKÛ™SX\YˆL_JJK\Ë›YÚ]\Ë˜ÛÛÜ[‹\Ë\OW”Ú[YÚ[\—‹\Ë›X]š^]\Ë›YÚ›X]š^ÛÜ›\Ë›X]š^]]Õ\]OHLK\Ë\]J
_Y\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
_]\]J
^Ý\Ë›YÚ\]UÛÜ›X]š^
LLJK›ÚYOO]\Ë˜ÛÛÜÝ\Ë›X]\šX[˜ÛÛÜ‹œÙ]
\Ë˜ÛÛÜŠN\Ë›X]\šX[˜ÛÛÜ‹˜ÛÜJ\Ë›YÚ˜ÛÛÜŠ__K”Ú[ÏT”Ú[ÓX]\šX[]Û”Û\‘ÜšY[\XÛ\ÜÈ^[™ÈØÛÛœÝXÝÜŠLLOLM‹NOMMÌÎLÏNMÎ
^Ü[™]ÈÚJŠKÏ[™]ÈÚJÊNØÛÛœÝOV×KÏV×NÚYŠOŒJY›ÜŠ]LÛNÛŠÊÊ^ØÛÛœÝO[‹ÙJŠŠ“X]”JKSX]œÚ[ŠJJÏSX]˜ÛÜÊJJØKœ\Ú

KKœ\Ú
ÊNØÛÛœÝLI›ÜŽœÎÛËœ\Ú
œ‹™Ë˜ŠKËœ\Ú
œ‹™Ë˜Š_Y›ÜŠ]OLÙOŽÙJÊÊ^ØÛÛœÝLI™OÜŽœËÏ]]ÛŠ™NÙ›ÜŠ]LÝNÝ
ÊÊ^Û]O]ÚJŠŠ“X]”JKSX]œÚ[ŠJJ˜ËSX]˜ÛÜÊJJ˜ÎØKœ\Ú
‹ŠKËœ\Ú
œ‹™Ë˜ŠKOJ
ÌJKÚJŠŠ“X]”JKSX]œÚ[ŠJJ˜ËSX]˜ÛÜÊJJ˜ËKœ\Ú
‹ŠKËœ\Ú
œ‹™Ë˜Š__XÛÛœÝ[™]ÈZNÛœÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJKœÙ]]šX]J˜ÛÛÜ—‹™]ÈJËÊJNÜÝ\\Š™]È›
Ý™\^ÛÛÜœÎˆLÛ™SX\YˆL_JJK\Ë\OW”Û\‘ÜšY[\—ŸY\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
__K”ÛZY›Û‘Ù[ÛY]žO[ØË”ÜÚ][Û˜[]Y[ÏXÛ\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëœ[›™\]\Ë˜ÛÛ^˜Ü™X]T[›™\Š
K\Ëœ[›™\‹œ[›š[™Ó[Ù[W’•—‹\Ëœ[›™\‹˜ÛÛ›™XÝ
\Ë™ØZ[Š_XÛÛ›™XÝ

^ÜÝ\\‹˜ÛÛ›™XÝ

K\Ëœ[›™\‹˜ÛÛ›™XÝ
\Ë™ØZ[Š_Y\ØÛÛ›™XÝ

^ÜÝ\\‹™\ØÛÛ›™XÝ

K\Ëœ[›™\‹™\ØÛÛ›™XÝ
\Ë™ØZ[Š_YÙ]Ý]]

^Ü™]\›ˆ\Ëœ[›™\ŸYÙ]™Y‘\Ý[˜ÙJ
^Ü™]\›ˆ\Ëœ[›™\‹œ™Y‘\Ý[˜Ù_\Ù]™Y‘\Ý[˜ÙJ
^Ü™]\›ˆ\Ëœ[›™\‹œ™Y‘\Ý[˜ÙO]\ßYÙ]›ÛÙ™‘˜XÝÜŠ
^Ü™]\›ˆ\Ëœ[›™\‹œ›ÛÙ™‘˜XÝÜŸ\Ù]›ÛÙ™‘˜XÝÜŠ
^Ü™]\›ˆ\Ëœ[›™\‹œ›ÛÙ™‘˜XÝÜ]\ßYÙ]\Ý[˜ÙS[Ù[

^Ü™]\›ˆ\Ëœ[›™\‹™\Ý[˜ÙS[Ù[\Ù]\Ý[˜ÙS[Ù[

^Ü™]\›ˆ\Ëœ[›™\‹™\Ý[˜ÙS[Ù[]\ßYÙ]X^\Ý[˜ÙJ
^Ü™]\›ˆ\Ëœ[›™\‹›X^\Ý[˜Ù_\Ù]X^\Ý[˜ÙJ
^Ü™]\›ˆ\Ëœ[›™\‹›X^\Ý[˜ÙO]\ß\Ù]\™XÝ[Û˜[ÛÛ™JKŠ^Ü™]\›ˆ\Ëœ[›™\‹˜ÛÛ™R[›™\[™ÛO]\Ëœ[›™\‹˜ÛÛ™SÝ]\[™ÛOYK\Ëœ[›™\‹˜ÛÛ™SÝ]\‘ØZ[[‹\ß]\]SX]š^ÛÜ›

^ÚYŠÝ\\‹\]SX]š^ÛÜ›

KLOO]\Ëš\Ô^X˜XÚÐÛÛ›Û	‰ˆLOOO]\Ëš\Ô^Z[™Ê\™]\›ŽÝ\Ë›X]š^ÛÜ›™XÛÛ\ÜÙJ]KÝK]JKKœÙ]
JK˜\T]X]\›š[ÛŠÝJNØÛÛœÝO]\Ëœ[›™\ŽÚYŠKœÜÚ][Û–
^ØÛÛœÝ]\Ë˜ÛÛ^˜Ý\œ™[[YJÝ\Ë›\Ý[™\‹[YQ[NÙKœÜÚ][Û–›[™X\”˜[\Õ˜[YP][YJ]Kž
KKœÜÚ][Û–K›[™X\”˜[\Õ˜[YP][YJ]KžK
KKœÜÚ][Û–‹›[™X\”˜[\Õ˜[YP][YJ]Kž‹
KK›ÜšY[][Û–›[™X\”˜[\Õ˜[YP][YJKž
KK›ÜšY[][Û–K›[™X\”˜[\Õ˜[YP][YJKžK
KK›ÜšY[][Û–‹›[™X\”˜[\Õ˜[YP][YJKž‹
_Y[ÙHKœÙ]ÜÚ][ÛŠ]Kž]KžK]KžŠKKœÙ]ÜšY[][ÛŠKžKžKKžŠ__K”›Ü\Pš[™[™ÏSÝK”›Ü\SZ^\PÝK”]XY˜]XÐ™^šY\Ý\™OR›”]XY˜]XÐ™^šY\Ý\™LÏRÛ”]X]\›š[ÛZÙK”]X]\›š[Û’Ù^Yœ˜[YU˜XÚÏTš”]X]\›š[Û“[™X\’[\œÛ[PZ”‘QÑÔ‘QS—Ô‘ÕÌ—Ñ›Ü›X]P]”‘QÔ‘ÕÌWÑ›Ü›X]LÍŒŽË”‘U’TÒSÓYK”‘ÐQ\XÚÚ[™ÏLÌŒK”‘ÐQ›Ü›X]Z‹”‘ÐR[YÙ\‘›Ü›X]RË”‘ÐWÐTÕ×ÌLLÑ›Ü›X]^]”‘ÐWÐTÕ×ÌLWÑ›Ü›X]WÝ”‘ÐWÐTÕ×ÌL—Ñ›Ü›X]]”‘ÐWÐTÕ×ÌLÑ›Ü›X]^”‘ÐWÐTÕ×ÌLžLÑ›Ü›X]S]”‘ÐWÐTÕ×ÌLžL—Ñ›Ü›X]TÝ”‘ÐWÐTÕ×ÍÑ›Ü›X]XÝ”‘ÐWÐTÕ×Í^Ñ›Ü›X]Z”‘ÐWÐTÕ×Í^WÑ›Ü›X]]]”‘ÐWÐTÕ×ÍžWÑ›Ü›X]Y”‘ÐWÐTÕ×Íž—Ñ›Ü›X]\”‘ÐWÐTÕ×ÎWÑ›Ü›X][]”‘ÐWÐTÕ×Î—Ñ›Ü›X]Y”‘ÐWÐTÕ×ÎÑ›Ü›X]YÝ”‘ÐWÐ”×Ñ›Ü›X]X”‘ÐWÑUÌ—ÑPP×Ñ›Ü›X][”‘ÐWÔ”•×Ì”ŒWÑ›Ü›X]\Ý”‘ÐWÔ”•×Í”ŒWÑ›Ü›X]\”‘ÐWÔÌÕ×ÑWÑ›Ü›X]TK”‘ÐWÔÌÕ×Ñ×Ñ›Ü›X]]”‘ÐWÔÌÕ×ÑWÑ›Ü›X]Y]”‘Ð—Ð”×ÔÒQÓ‘QÑ›Ü›X]U”‘Ð—Ð”×ÕS”ÒQÓ‘QÑ›Ü›X]Q]”‘Ð—ÑUÌWÑ›Ü›X]X]”‘Ð—ÑUÌ—Ñ›Ü›X][Ý”‘Ð—Ô”•×Ì”ŒWÑ›Ü›X]Z]”‘Ð—Ô”•×Í”ŒWÑ›Ü›X][”‘Ð—ÔÌÕ×ÑWÑ›Ü›X]I”‘Ñ›Ü›X]LLÌ”‘Ò[YÙ\‘›Ü›X]R‹”˜]ÔÚY\“X]\šX[\š”˜^O^[‹”˜^XØ\Ý\XÛ\ÜÞØÛÛœÝXÝÜŠKLOLKÌ
^Ý\Ëœ˜^O[™]È[ŠJK\Ë›™X\[‹\Ë™˜\ZK\Ë˜Ø[Y\˜O[[\Ë›^Y\œÏ[™]È[‹\Ëœ\˜[\Ï^ÓY\ÚžßK[™NžÝ™\ÚÛŒ_KÑžßKÚ[ÎžÝ™\ÚÛŒ_KÜš]Nžß__\Ù]
J^Ý\Ëœ˜^KœÙ]
J_\Ù]œ›ÛPØ[Y\˜JJ^ÙKš\Ô\œÜXÝ]™PØ[Y\˜OÊ\Ëœ˜^K›ÜšYÚ[‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠK›X]š^ÛÜ›
K\Ëœ˜^K™\™XÝ[Û‹œÙ]
žžKJK[œ›Ú™XÝ
JKœÝXŠ\Ëœ˜^K›ÜšYÚ[ŠK››Ü›X[^™J
K\Ë˜Ø[Y\˜OYJN™Kš\ÓÜÙÜ˜\XÐØ[Y\˜OÊ\Ëœ˜^K›ÜšYÚ[‹œÙ]
žžK
K›™X\ŠÙK™˜\ŠKÊK›™X\‹YK™˜\ŠJK[œ›Ú™XÝ
JK\Ëœ˜^K™\™XÝ[Û‹œÙ]
LJK˜[œÙ›Ü›Q\™XÝ[ÛŠK›X]š^ÛÜ›
K\Ë˜Ø[Y\˜OYJN˜ÛÛœÛÛK™\œ›ÜŠ•‘QK”˜^XØ\Ý\Žˆ[œÝ\ÜYØ[Y\˜H\NˆŠÙK\J_Z[\œÙXÝØš™XÝ
OHLV×J^Ü™]\›ˆJ\Ë‹JK‹œÛÜ
JKŸZ[\œÙXÝØš™XÝÊOHLV×J^Ù›ÜŠ]OL]›[™ÝÚOŽÚJÊÊUJÚWK\Ë‹JNÜ™]\›ˆ‹œÛÜ
JKŸ_K”™XÍÌTš[X\šY\ÏZ”™XÝ\™XSYÚZ]K”™Y›Ü›X]LLŽ”™Y[YÙ\‘›Ü›X]V‹”™Z[š\™Û™SX\[™ÏY‹”™[™\•\™Ù]^™K”™\X]Ü˜\[™ÏT‹”™\XÙTÝ[˜Ú[ÜMÍŽK”™]™\œÙTÝX˜XÝ\]X][ÛLL‹”š[™ÑÙ[ÛY]žO\XË”ÒQÓ‘QÔ‘QÑÔ‘QS—Ô‘ÕÌ—Ñ›Ü›X]T”ÒQÓ‘QÔ‘QÔ‘ÕÌWÑ›Ü›X]]Ý”Ô‘ÐÛÛÜ”ÜXÙOQÝ”Ô‘Ð•˜[œÙ™\V”ØÙ[™O\›Ë”ÚY\Ú[šÏ^\‹”ÚY\“XTÜ‹”ÚY\“X]\šX[Z\‹”ÚYÝÓX]\šX[ZZ”Ú\O[XË”Ú\QÙ[ÛY]žOVXË”Ú\T]XÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ë\OW”Ú\T]‹\Ë˜ÛÛÜ[™]ÈÚK\ËœÝX”]ÏV×K\Ë˜Ý\œ™[][[[[Ý™UÊJ^Ü™]\›ˆ\Ë˜Ý\œ™[][™]ÈXË\ËœÝX”]Ëœ\Ú
\Ë˜Ý\œ™[]
K\Ë˜Ý\œ™[]›[Ý™UÊJK\ß[[™UÊJ^Ü™]\›ˆ\Ë˜Ý\œ™[]›[™UÊJK\ß\]XY˜]XÐÝ\™UÊK‹J^Ü™]\›ˆ\Ë˜Ý\œ™[]œ]XY˜]XÐÝ\™UÊK‹JK\ßX™^šY\Ý\™UÊK‹K‹Ê^Ü™]\›ˆ\Ë˜Ý\œ™[]˜™^šY\Ý\™UÊK‹K‹ÊK\ß\Ü[™UJ
^Ü™]\›ˆ\Ë˜Ý\œ™[]œÜ[™UJ
K\ß]ÔÚ\\Ê
^Ù[˜Ý[ÛˆJJ^ØÛÛœÝYK›[™ÝÛ]OHLNÙ›ÜŠ][‹LKÏLÜÏŽÜ\ÊÊÊ^Û]YVÜ—KOYVÜ×KÏXKž[‹žXKžK[‹žNÚYŠX]˜XœÊ
O“[X™\‹‘TÒSÓŠ^ÚYŠ	‰ŠYVÜ×KÏK[ËOYVÜ—KK[
KžO‹ž_žO˜KžJXÛÛ[YNÚYŠžOOO[‹žJ^ÚYŠžOO[‹ž
\™]\›ˆLY[Ù^ØÛÛœÝO[
Šž[‹ž
K[ÊŠžK[‹žJNÚYŠOOYJ\™]\›ˆLÚYŠO
XÛÛ[YNÚOHZ__Y[Ù^ÚYŠžHOO[‹žJXÛÛ[YNÚYŠKž]ž	‰ž[‹ž‹ž]ž	‰žXKž
\™]\›ˆL_\™]\›ˆ_XÛÛœÝQØËš\ÐÛØÚÕÚ\ÙKO]\ËœÝX”]ÎÚYŠOOZK›[™Ý
\™]\›–×NÛ]‹ËNØÛÛœÝÏV×NÚYŠOOOZK›[™Ý
\™]\›ˆÏZVÌKO[™]ÈXËK˜Ý\™\Ï\Ë˜Ý\™\ËËœ\Ú
JKÎÛ]H[ŠVÌK™Ù]Ú[Ê
JNÛ]È[›ØÛÛœÝÏV×KV×NÛ]KV×KOLÚÛWO]›ÚYÛWOV×NÙ›ÜŠ]OLOZK›[™ÝÙONÙJÊÊ\ÏZVÙWKO\Ë™Ù]Ú[Ê
K[ŠJK]È\Žœ‹Ê[	‰šÛWI‰›JÊËÛWO^ÜÎ›™]ÈXË_KÛWKœË˜Ý\™\Ï\Ë˜Ý\™\Ë	‰›JÊËÛWOV×JNœÛWKœ\Ú
ÚœËVÌ_JNÚYŠZÌJ\™]\›ˆ[˜Ý[ÛŠ
^ØÛÛœÝOV×NÙ›ÜŠ]LO]›[™ÝÛNÛŠÊÊ^ØÛÛœÝO]Û—K[™]ÈXÎÜ‹˜Ý\™\ÏZK˜Ý\™\ËKœ\Ú
Š_\™]\›ˆ_JJNÚYŠ›[™ÝŒJ^Û]HLKLÙ›ÜŠ]LOZ›[™ÝÝNÝ
ÊÊXÖÝOV×NÙ›ÜŠ]OLZ›[™ÝÚOŽÚJÊÊ^ØÛÛœÝ\ÚWNÙ›ÜŠ]ÏLÜÏ‹›[™ÝÜÊÊÊ^ØÛÛœÝO\–Ü×NÛ]ÏHLÙ›ÜŠ]LÜ›[™ÝÜŠÊÊYJKœÜ—Kœ
I‰ŠHOO\‰‰›ŠÊËÏÊÏHLKÖÜ—Kœ\Ú
JJNHL
NÛÉ‰˜ÖÚWKœ\Ú
J__[Œ	‰ˆLOOO]	‰ŠXÊ_Y›ÜŠ]LOZ›[™ÝÝNÝ
ÊÊ^ØOZÝKœËËœ\Ú
JK\ÝNÙ›ÜŠ]LOY›[™ÝÝNÝ
ÊÊXKšÛ\Ëœ\Ú
ÝKš
_\™]\›ˆß_K”Ú\U][ÏQØË”ÚÜ\OLLLK”ÚÙ[]ÛU›Ë”ÚÙ[]Û’[\XÛ\ÜÈ^[™ÈØÛÛœÝXÝÜŠ
^ØÛÛœÝORJ
K[™]ÈZKOV×KV×KÏ[™]ÈÚJJKO[™]ÈÚJK
NÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊ^ØÛÛœÝYVÝNÛ‹œ\™[	‰›‹œ\™[š\Ð›Û™I‰ŠKœ\Ú

KKœ\Ú

K‹œ\Ú
Ëœ‹Ë™ËË˜ŠK‹œ\Ú
Kœ‹K™ËK˜ŠJ_[‹œÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJK‹œÙ]]šX]J˜ÛÛÜ—‹™]ÈJ‹ÊJNÜÝ\\Š‹™]È›
Ý™\^ÛÛÜœÎˆL\\ÝˆLK\Üš]NˆLKÛ™SX\YˆLK˜[œÜ\™[ˆLJJK\Ëš\ÔÚÙ[]Û’[\HL\Ë\OW”ÚÙ[]Û’[\—‹\Ëœ›ÛÝ]\Ë˜›Û™\ÏYK\Ë›X]š^]›X]š^ÛÜ›\Ë›X]š^]]Õ\]OHL_]\]SX]š^ÛÜ›

^ØÛÛœÝO]\Ë˜›Û™\Ë]\Ë™Ù[ÛY]žKO[‹™Ù]]šX]JœÜÚ][Û—ŠNÖK˜ÛÜJ\Ëœ›ÛÝ›X]š^ÛÜ›
Kš[™\

NÙ›ÜŠ]LLÝK›[™ÝÝ
ÊÊ^ØÛÛœÝYVÝNÜ‹œ\™[	‰œ‹œ\™[š\Ð›Û™I‰Š]K›][\SX]šXÙ\ÊK‹›X]š^ÛÜ›
K]KœÙ]œ›ÛSX]š^ÜÚ][ÛŠ]JKKœÙ]VŠ‹]Kž]KžK]KžŠK]K›][\SX]šXÙ\ÊK‹œ\™[›X]š^ÛÜ›
K]KœÙ]œ›ÛSX]š^ÜÚ][ÛŠ]JKKœÙ]VŠŠÌK]Kž]KžK]KžŠKŠÏLŠ_[‹™Ù]]šX]JœÜÚ][Û—ŠK›™YYÕ\]OHLÝ\\‹\]SX]š^ÛÜ›

_Y\ÜÜÙJ
^Ý\Ë™Ù[ÛY]žK™\ÜÜÙJ
K\Ë›X]\šX[™\ÜÜÙJ
__K”ÚÚ[›™YY\ÚQ›Ë”ÛÝ\˜ÙOQK”Ü\™OY‹”Ü\™QÙ[ÛY]žOV˜Ë”Ü\šXØ[XÛ\ÜÞØÛÛœÝXÝÜŠLKOLL
^Ü™]\›ˆ\Ëœ˜Y]\Ï]\ËœOYK\Ë]O[‹\ß\Ù]
KŠ^Ü™]\›ˆ\Ëœ˜Y]\Ï]\ËœOYK\Ë]O[‹\ßXÛÜJ
^Ü™]\›ˆ\Ëœ˜Y]\Ï]œ˜Y]\Ë\ËœO]œK\Ë]O]]K\ß[XZÙTØY™J
^ØÛÛœÝLYKMŽÜ™]\›ˆ\ËœOSX]›X^
X]›Z[ŠX]”K]\ËœJJK\ß\Ù]œ›ÛU™XÝÜŒÊ
^Ü™]\›ˆ\ËœÙ]œ›ÛPØ\\ÚX[ÛÛÜ™ÊžžKžŠ_\Ù]œ›ÛPØ\\ÚX[ÛÛÜ™ÊKŠ^Ü™]\›ˆ\Ëœ˜Y]\ÏSX]œÜ\


ÙJ™JÛŠ›ŠKOO]\Ëœ˜Y]\ÏÊ\Ë]OL\ËœOL
NŠ\Ë]OSX]˜][ŒŠŠK\ËœOSX]˜XÛÜÊYJKÝ\Ëœ˜Y]\ËLKJJJK\ßXÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê__K”Ü\šXØ[\›[ÛšXÜÌÏ\K”Ü[™PÝ\™OI”ÜÝYÚVZ”ÜÝYÚ[\XÛ\ÜÈ^[™È›žØÛÛœÝXÝÜŠJ^ÜÝ\\Š
K\Ë›YÚ]\Ë›X]š^]›X]š^ÛÜ›\Ë›X]š^]]Õ\]OHLK\Ë˜ÛÛÜYK\Ë\OW”ÜÝYÚ[\—ŽØÛÛœÝ[™]ÈZKOVÌKKKLKKKKLKWNÙ›ÜŠ]LOLKLÌŽÝŽÝ
ÊËJÊÊ^ØÛÛœÝ]ÛŠ“X]”JŒ‹ÏYKÛŠ“X]”JŒŽÚKœ\Ú
X]˜ÛÜÊŠKX]œÚ[ŠŠKKX]˜ÛÜÊÊKX]œÚ[ŠÊKJ_[‹œÙ]]šX]JœÜÚ][Û—‹™]ÈJKÊJNØÛÛœÝ[™]È›
Ù›ÙÎˆLKÛ™SX\YˆL_JNÝ\Ë˜ÛÛ™O[™]È
‹ŠK\Ë˜Y
\Ë˜ÛÛ™JK\Ë\]J
_Y\ÜÜÙJ
^Ý\Ë˜ÛÛ™K™Ù[ÛY]žK™\ÜÜÙJ
K\Ë˜ÛÛ™K›X]\šX[™\ÜÜÙJ
_]\]J
^Ý\Ë›YÚ\]UÛÜ›X]š^
LLJK\Ë›YÚ\™Ù]\]UÛÜ›X]š^
LLJNØÛÛœÝ]\Ë›YÚ™\Ý[˜ÙOÝ\Ë›YÚ™\Ý[˜ÙNŒYLËO]
“X][Š\Ë›YÚ˜[™ÛJNÝ\Ë˜ÛÛ™KœØØ[KœÙ]
KK
KKœÙ]œ›ÛSX]š^ÜÚ][ÛŠ\Ë›YÚ\™Ù]›X]š^ÛÜ›
K\Ë˜ÛÛ™K›ÛÚÐ]
JK›ÚYOO]\Ë˜ÛÛÜÝ\Ë˜ÛÛ™K›X]\šX[˜ÛÛÜ‹œÙ]
\Ë˜ÛÛÜŠN\Ë˜ÛÛ™K›X]\šX[˜ÛÛÜ‹˜ÛÜJ\Ë›YÚ˜ÛÛÜŠ__K”Üš]OX›Ë”Üš]SX]\šX[[Ë”Ü˜Ð[Q˜XÝÜ[”Ü˜Ð[TØ]\˜]Q˜XÝÜLŒL”Ü˜ÐÛÛÜ‘˜XÝÜLŒ‹”Ý]XÐÛÜU\ØYÙOLÍL‹”Ý]XÑ˜]Õ\ØYÙOV”Ý]XÔ™XY\ØYÙOLÍLK”Ý\™[ÐØ[Y\˜OXÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ë\OW”Ý\™[ÐØ[Y\˜W‹\Ë˜\ÜXÝLK\Ë™^YTÙ\KŒ\Ë˜Ø[Y\˜S[™]ÈÜ‹\Ë˜Ø[Y\˜S›^Y\œË™[˜X›JJK\Ë˜Ø[Y\˜S›X]š^]]Õ\]OHLK\Ë˜Ø[Y\˜T[™]ÈÜ‹\Ë˜Ø[Y\˜T‹›^Y\œË™[˜X›JŠK\Ë˜Ø[Y\˜T‹›X]š^]]Õ\]OHLK\Ë—ØØXÚO^Ù›ØÝ\Î›[›ÝŽ›[\ÜXÝ›[™X\Ž›[˜\Ž›[›ÛÛN›[^YTÙ\›[_]\]J
^ØÛÛœÝO]\Ë—ØØXÚNÚYŠK™›ØÝ\ÈOO]™›ØÝ\ßK™›ÝˆOO]™›ÝŸK˜\ÜXÝOO]˜\ÜXÝ
\Ë˜\ÜXÝK›™X\ˆOO]›™X\ŸK™˜\ˆOO]™˜\ŸKž›ÛÛHOO]ž›ÛÛ_K™^YTÙ\OO]\Ë™^YTÙ\
^ÙK™›ØÝ\Ï]™›ØÝ\ËK™›Ý]™›Ý‹K˜\ÜXÝ]˜\ÜXÝ
\Ë˜\ÜXÝK›™X\]›™X\‹K™˜\]™˜\‹Kž›ÛÛO]ž›ÛÛKK™^YTÙ\]\Ë™^YTÙ\ÝK˜ÛÜJœ›Ú™XÝ[Û“X]š^
NØÛÛœÝYK™^YTÙ\Ì‹O[Š™K›™X\‹ÙK™›ØÝ\ËYK›™X\Š“X][ŠYJ™K™›ÝŠ‹JKÙKž›ÛÛNÛ]ËNÙÝK™[[Y[ÖÌL—OK[‹K™[[Y[ÖÌL—O[‹ÏK\Š™K˜\ÜXÝ
ÚKO\Š™K˜\ÜXÝ
ÚKÝK™[[Y[ÖÌOLŠ™K›™X\‹ÊK\ÊKÝK™[[Y[ÖÎOJJÜÊKÊK\ÊK\Ë˜Ø[Y\˜Sœ›Ú™XÝ[Û“X]š^˜ÛÜJÝJKÏK\Š™K˜\ÜXÝZKO\Š™K˜\ÜXÝZKÝK™[[Y[ÖÌOLŠ™K›™X\‹ÊK\ÊKÝK™[[Y[ÖÎOJJÜÊKÊK\ÊK\Ë˜Ø[Y\˜T‹œ›Ú™XÝ[Û“X]š^˜ÛÜJÝJ_]\Ë˜Ø[Y\˜S›X]š^ÛÜ›˜ÛÜJ›X]š^ÛÜ›
K›][\JÝJK\Ë˜Ø[Y\˜T‹›X]š^ÛÜ›˜ÛÜJ›X]š^ÛÜ›
K›][\JJ__K”Ý™X[PÛÜU\ØYÙOLÍL‹”Ý™X[Q˜]Õ\ØYÙOLÍL”Ý™X[T™XY\ØYÙOLÍLK”Ýš[™ÒÙ^Yœ˜[YU˜XÚÏPÚ”ÝX˜XÝ\]X][ÛLLK”ÝX˜XÝ]™P›[™[™ÏLË•ÕPÒ^Ô“ÕUNŒSŽŒKÓWÔSŽŒ‹ÓWÔ“ÕUNŒßK•[™Ù[ÜXÙS›Ü›X[X\L•]˜ZY›Û‘Ù[ÛY]žOR˜Ë•^\™OQ™K•^\™SØY\XÛ\ÜÈ^[™ÈÚØÛÛœÝXÝÜŠ
^ÜÝ\\Š
_[ØY
K‹J^ØÛÛœÝ[™]È™KÏ[™]ÈÚ
\Ë›X[˜YÙ\ŠNÜ™]\›ˆËœÙ]Ü›ÜÜÓÜšYÚ[Š\Ë˜Ü›ÜÜÓÜšYÚ[ŠKËœÙ]]
\Ëœ]
KË›ØY

[˜Ý[ÛŠ
^Ü‹š[XYÙO]‹›™YYÕ\]OHL›ÚYOOYI‰™JŠ_JK‹JKŸ_K•Ü\ÑÙ[ÛY]žORØË•Ü\ÒÛ›ÝÙ[ÛY]žOIË•šX[™ÛO\šK•šX[™ÛQ˜[‘˜]Ó[ÙOL‹•šX[™ÛTÝš\˜]Ó[ÙOLK•šX[™Û\Ñ˜]Ó[ÙOL•X™QÙ[ÛY]žOTXË•ÛÔ\ÜÑÝX›TÚYOL‹•U“X\[™ÏTË•Z[MY™™\]šX]OTÚK•Z[ÌY™™\]šX]OXšK•Z[Y™™\]šX]OXÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]ÈZ[\œ˜^J
KKŠ__K•Z[Û[\YY™™\]šX]OXÛ\ÜÈ^[™ÈZ^ØÛÛœÝXÝÜŠKŠ^ÜÝ\\Š™]ÈZ[Û[\Y\œ˜^J
KKŠ__K•[šY›Ü›O^K•[šY›Ü›\ÑÜ›Ý\XÛ\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Õ[šY›Ü›\ÑÜ›Ý\HLØš™XÝ™Yš[™T›Ü\J\ËšY‹Ý˜[YN‘ÝJÊßJK\Ë›˜[YOW—‹\Ë\ØYÙOV\Ë[šY›Ü›\ÏV×_XY

^Ü™]\›ˆ\Ë[šY›Ü›\Ëœ\Ú

K\ß\™[[Ý™J
^ØÛÛœÝO]\Ë[šY›Ü›\Ëš[™^ÙŠ
NÜ™]\›‹LHOOYI‰\Ë[šY›Ü›\ËœÜXÙJKJK\ß\Ù]˜[YJ
^Ü™]\›ˆ\Ë›˜[YO]\ß\Ù]\ØYÙJ
^Ü™]\›ˆ\Ë\ØYÙO]\ßY\ÜÜÙJ
^Ü™]\›ˆ\Ë™\Ü]Ú]™[
Ý\N—™\ÜÜÙWŸJK\ßXÛÜJ
^Ý\Ë›˜[YO]›˜[YK\Ë\ØYÙO]\ØYÙNØÛÛœÝO][šY›Ü›\ÎÝ\Ë[šY›Ü›\Ë›[™ÝLÙ›ÜŠ]LYK›[™ÝÝŽÝ
ÊÊ^ØÛÛœÝP\œ˜^Kš\Ð\œ˜^JVÝJOÙVÝN–ÙVÝWNÙ›ÜŠ]LÝ‹›[™ÝÝ
ÊÊ]\Ë[šY›Ü›\Ëœ\Ú
–ÝK˜ÛÛ™J
J_\™]\›ˆ\ßXÛÛ™J
^Ü™]\›Š™]È\Ë˜ÛÛœÝXÝÜŠK˜ÛÜJ\Ê__K•[šY›Ü›\ÓXS\‹•[šY›Ü›\Õ][Ï[œ‹•[œÚYÛ™Yž]U\OQ‹•[œÚYÛ™Y[\OV•[œÚYÛ™Y[\OQË•[œÚYÛ™YÚÜ\OZË•[œÚYÛ™YÚÜMMLU\OUË•[œÚYÛ™YÚÜ\OP‹•”ÓTÚYÝÓX\\‹•™XÝÜŒ[YK•™XÝÜŒÏUÙK•™XÝÜP™K•™XÝÜ’Ù^Yœ˜[YU˜XÚÏS•šY[Õ^\™OXÛ\ÜÈ^[™È™^ØÛÛœÝXÝÜŠK‹K‹ËKË
^ÜÝ\\ŠK‹K‹ËKË
K\Ëš\ÕšY[Õ^\™OHL\Ë›Z[‘š[\]›ÚYOO\ÏÜÎ‘\Ë›XYÑš[\]›ÚYOO\ÜŽ‘\Ë™Ù[™\˜]SZ\X\ÏHLNØÛÛœÝÏ]\Î×œ™\]Y\ÝšY[Ñœ˜[YPØ[˜XÚ×š[ˆ	‰œ™\]Y\ÝšY[Ñœ˜[YPØ[˜XÚÊ
[˜Ý[ÛˆJ
^ØË›™YYÕ\]OHLœ™\]Y\ÝšY[Ñœ˜[YPØ[˜XÚÊJ_JJ_XÛÛ™J
^Ü™]\›ˆ™]È\Ë˜ÛÛœÝXÝÜŠ\Ëš[XYÙJK˜ÛÜJ\Ê_]\]J
^ØÛÛœÝ]\Ëš[XYÙNÈLOOOWœ™\]Y\ÝšY[Ñœ˜[YPØ[˜XÚ×š[ˆ	‰œ™XYTÝ]O]’U‘WÐÕT”‘S•ÑUI‰Š\Ë›™YYÕ\]OHL
__K•ÙX‘ÓT™[™\™\Y[Ë•ÙX‘ÓÑ™[™\•\™Ù]XÛ\ÜÈ^[™ÈÙ^ØÛÛœÝXÝÜŠLKOLKLKO^ßJ^ÜÝ\\ŠKJK\Ëš\ÕÙX‘ÓÑ™[™\•\™Ù]HL\Ë™\[‹\Ë^\™O[™]È™J[KŠK\Ë^\™Kš\Ô™[™\•\™Ù]^\™OHL_K•ÙX‘Ó\œ˜^T™[™\•\™Ù]XÛ\ÜÈ^[™ÈÙ^ØÛÛœÝXÝÜŠLKOLKLKO^ßJ^ÜÝ\\ŠKJK\Ëš\ÕÙX‘Ó\œ˜^T™[™\•\™Ù]HL\Ë™\[‹\Ë^\™O[™]ÈJ[KŠK\Ë^\™Kš\Ô™[™\•\™Ù]^\™OHL_K•ÙX‘ÓÛÛÜ™[˜]TÞ\Ý[OI•ÙX‘ÓÝX™T™[™\•\™Ù]XÜ‹•ÙX‘Ó][\T™[™\•\™Ù]ÏXÛ\ÜÈ^[™ÈÙ^ØÛÛœÝXÝÜŠLKOLKLKO^ßJ^ÜÝ\\ŠKJK\Ëš\ÕÙX‘Ó][\T™[™\•\™Ù]ÏHLØÛÛœÝ]\Ë^\™NÝ\Ë^\™OV×NÙ›ÜŠ]LÝŽÝ
ÊÊ]\Ë^\™VÝO\‹˜ÛÛ™J
K\Ë^\™VÝKš\Ô™[™\•\™Ù]^\™OHL\Ù]Ú^™JKLJ^ÚYŠ\ËÚYOO]\ËšZYÚOOY_\Ë™\OO[Š^Ý\ËÚY]\ËšZYÚYK\Ë™\[ŽÙ›ÜŠ]OL]\Ë^\™K›[™ÝÚOŽÚJÊÊ]\Ë^\™VÚWKš[XYÙKÚY]\Ë^\™VÚWKš[XYÙKšZYÚYK\Ë^\™VÚWKš[XYÙK™\[ŽÝ\Ë™\ÜÜÙJ
_]\ËšY]ÜÜœÙ]
JK\ËœØÚ\ÜÛÜ‹œÙ]
J_XÛÜJ
^Ý\Ë™\ÜÜÙJ
K\ËÚY]ÚY\ËšZYÚ]šZYÚ\Ë™\]™\\ËœØÚ\ÜÛÜ‹˜ÛÜJœØÚ\ÜÛÜŠK\ËœØÚ\ÜÛÜ•\Ý]œØÚ\ÜÛÜ•\Ý\ËšY]ÜÜ˜ÛÜJšY]ÜÜ
K\Ë™\Y™™\]™\Y™™\‹\ËœÝ[˜Ú[Y™™\]œÝ[˜Ú[Y™™\‹[OO]™\^\™I‰Š\Ë™\^\™O]™\^\™K˜ÛÛ™J
JK\Ë^\™K›[™ÝLÙ›ÜŠ]OL]^\™K›[™ÝÙOŽÙJÊÊ]\Ë^\™VÙWO]^\™VÙWK˜ÛÛ™J
K\Ë^\™VÙWKš\Ô™[™\•\™Ù]^\™OHLÜ™]\›ˆ\ß_K•ÙX‘Ó™[™\•\™Ù]QÙK•ÙX‘Ó™[™\™\]Ë•ÙX‘Ó][ÏZ˜K•ÙX‘ÔPÛÛÜ™[˜]TÞ\Ý[OT]•Ú\™Yœ˜[YQÙ[ÛY]žO]•Ü˜\\›Ý[™[™[™ÏQ–™\›ÐÝ\˜]\™Q[™[™ÏR]–™\›Ñ˜XÝÜLŒ–™\›ÔÛÜQ[™[™ÏU]–™\›ÔÝ[˜Ú[ÜL—ÔÔ‘ÐQ›Ü›X]RÝ˜Ü™X]PØ[˜\Ñ[[Y[SYKœÔ‘Ð‘[˜ÛÙ[™ÏPJJN×ÜØÜš\ØÜš\‰Ý\ÙHÝšXÝ	Î×˜ÛÛœÝ	ZYO™ØÝ[Y[™Ù][[Y[žRY
Y
KÓ“S‘OK×šÏÎ‰Ë\Ý
ØØ][Û‹œ›ÝØÛÛ
K™YXÙY[X]ÚYYXJ	Ê™Y™\œË\™YXÙY[[Ý[ÛŽˆ™YXÙJIÊK›X]Ú\Î×Ú[™ÝËšÙ^U\›^ÞX]Î‹KŒŒË]ÚŒ]]Îˆ\™YXÙYNÛ]Ù\Ý\™O[[×›]\XÚ\[˜[YOIÉËY[YR›Ú[™YY˜[ÙKÜ™X]Y[š]OIÉË˜[šÚ[™Ó[ÛIÉËX[\ÏV×KÝ\œ™[[[›ÛO[[ØÜ™Y[IÚÛYIË[ÙOIØÜ™X]IË\ÙOIÜ™XYIËÛÝ[LÛXÚÜÏL™]™\ÛXÚÜÏL™]™\XÝ]™OY˜[ÙK™]™\•[[L[™L›Ý[™Y[[[™[™ÔØÛÜ™O[[Ø]™P\ÞOY˜[ÙK]]\ÞOY˜[ÙK]Y[ÓÛY˜[ÙK]Y[ÐÝ™\ÜÕ[Y\‹Z[\ÝÛ™U[Y\‹[š[X][ÛŽ×˜ÛÛœÝX[OJ
OOX[\Ë™š[™
OšYOOXÝ\œ™[
NØÛÛœÝØÚÙYJ
OOœ\ÙOOOIÜ[›š[™Éß\ÙOOOIØÛÝ[ÝÛ‰ß\ÙOOOIØÛÛ›™XÝ[™ÉÎ×˜\Þ[˜È[˜Ý[Ûˆ\JXÝ[Û‹]J^ØÛÛœÝ™\ÜÛœÙOX]ØZ]™]Ú
	ËØ\KÉÊØXÝ[Û‹ÛY]Ù™]OÉÔÔÕ	Î‰ÑÑU	ËXY\œÎ™]OÞÉÐÛÛ[U\IÎ‰Ø\XØ][Û‹ÚœÛÛ‰ßN[™Yš[™Y›ÙN™]OÒ”ÓÓ‹œÝš[™ÚYžJ]JN[™Yš[™YÜ™Y[X[Î‰ÜØ[YK[ÜšYÚ[‰ßJNÛ]™\Ý[Ýž^Ü™\Ý[X]ØZ]™\ÜÛœÙKšœÛÛŠ
_XØ]ÚÝ›ÝÈ\œ›ÜŠ	û&*:ço;'n:¬£;'¡;(ï;!£;%ä;!';(${!£{em;(ï;!.;&¥‰Ê_ZYŠ\™\ÜÛœÙK›ÚÊ^ØÛÛœÝ\œ›ÜQ\œ›ÜŠ™\Ý[™\œ›ÜŸ	û!':ì¡;%ä;%ì:¬¬;ef;)à:ê®ûe¢;%­;&¥‰ÊNÙ\œ›Ü‹™šY[\™\Ý[™šY[Ý›ÝÈ\œ›ÜŽß\™]\›ˆ™\Ý[W™[˜Ý[ÛˆšY]Ê™^
^ÚYŠØÚÙY

J\™]\›ŽÜØÜ™Y[[™^ØÛÛœÝ˜\ÙO[™^OOIØ]]	ÏÉÚÛYIÎ›™^ÙØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[X˜\ÙNÖÉÚÛYIË	ÙØ[YI×K™›Ü‘XXÚ
O‰

ÉÔØÜ™Y[‰ÊKšY[^OOX˜\ÙJNÉ
˜\ÙOOOIÙØ[YIÏÉÙØ[YTÛÝ	Î‰ÚÛYTÛÝ	ÊK˜\[™
	
	ÜÝYÙIÊJNÝÚ[™ÝËšÙ^PZ[O^ÞŒNŒNÚYŠ™^OOIÙØ[YIÊ^ÝÚ[™ÝËšÙ^U\›‹žX]ÏKKŒŒÎÝÚ[™ÝËšÙ^U\›‹œ]ÚLßZYŠ™^OOIØ]]	Ê^ÚYŠI
	Ø]]ØÜ™Y[‰ÊK›Ü[ŠI
	Ø]]ØÜ™Y[‰ÊKœÚÝÓ[Ù[

NÉ
	ÝX[R[œ]	ÊK™›ØÝ\Ê
_Y[Ù^ÚYŠ	
	Ø]]ØÜ™Y[‰ÊK›Ü[ŠI
	Ø]]ØÜ™Y[‰ÊK˜ÛÜÙJ
NÝÚ[™ÝËœØÜ›ÛÊÝÜŒ™Z]š[ÜŽ‰Ú[œÝ[	ßJNÚYŠ™^OOIÙØ[YIÊI
	ÜÝ\	ÊK™›ØÝ\ÊÜ™]™[ØÜ›ÛY_J_\™[™\Š
_W™[˜Ý[Ûˆ™\Ù]›Ý[™

^Ü\ÙOIÜ™XYIÎØÛÝ[LØÛXÚÜÏLÙ™]™\ÛXÚÜÏLÙ™]™\•[[LÜÙ]™]™\Š˜[ÙJNÉ
	Ý\Y™™XÝÉÊKœ™\XÙPÚ[™[Š
NÜ›Ý[™Y[[É
	ÜØÛÜ™IÊK^ÛÛ[IÌ	ÎÉ
	Ý[Y\‰ÊK^ÛÛ[IÌŒÌ	ÎÉ
	Ý[Y\‰ÊKœÝ[K˜ÛÛÜIÉÎÉ
	Ø˜\‰ÊKœÝ[KÚYIÌL	IÎÉ
	ÜÝ\	ÊK^ÛÛ[IÌÌ;-":ãá;(!;"ç;'¤{ef:®,8¡¤‰ÎÉ
	ÜÝ]\ÉÊK^ÛÛ[Iû) :îa:ä$:à¦;&¥È;&¬:é«;c :®,:èg{%ä:ãá;(!;em:ìí;!.;&¥‰ÎÉ
	ÛZ[\ÝÛ™IÊK^ÛÛ[IÉÎØÛX\•[Y[Ý]
Z[\ÝÛ™U[Y\Š_W™[˜Ý[Ûˆ˜[šÓÙŠ
^Ü™]\›ˆJÝX[\Ë™š[\ŠOž›Y[ÜŠÞ›Y[YO›Y[ÜŠÝ›Y[YJK›[™ÝW™[˜Ý[Ûˆ™[™\Š
^ØÛÛœÝ]X[J
NÉ
	Ü™\Ý[YIÊKšY[]YNÚYŠ
^É
	Ü™\Ý[YIÊK^ÛÛ[]›˜[YJÉÈ0­È;'m;%­;!':ãá;(!;ef:®,8¡¤‰ÎÉ
	ÝX[S˜[YIÊK^ÛÛ[]›˜[YNÉ
	Ü›ÛUYÉÊK^ÛÛ[J\XÚ\[˜[YOÜ\XÚ\[˜[YJÉÈ0­È	Î‰ÉÊJÊ›ÛOOOIÛY[Ü‰ÏÉúêf;a¨	Îœ›ÛOOOIÛY[YIÏÉúêf;bì	Î‰ÉÊNÉ
	Ú[š]S›ÝXÙIÊKšY[\›ÛHOOIÛY[Ü‰ÎÉ
	Ú[š]SY\ÜØYÙIÊK^ÛÛ[[Y[YR›Ú[™YÉúêf;bì:¬ ;'¡H;&a:èã	Î‰úêf;bì;%ä:¬£;c ;'m:é¡:¬ï;%a:ç¦;/e:äç:éo:ìí:à­;(ï;!.;&¥‰ÎÉ
	Ú[š]U˜[YIÊK^ÛÛ[[Y[YR›Ú[™YÉÉÎ˜Ü™X]Y[š]NÉ
	Ú[š]PXÝ[Û‰ÊKšY[[Y[YR›Ú[™YÉ
	Ú[š]PXÝ[Û‰ÊK^ÛÛ[XÜ™X]Y[š]OÉú¬ ;'¡H;(%zìí:ìí{ «	Î‰û â:¬ ;'¡H;/e:äç:ì':®"IÎÉ
	Ø™\Ý	ÊK^ÛÛ[\›ÛI‰Ü›ÛJÉÔ^YY	×OÝÜ›ÛWN‰ø %	ÎÖÉÛY[Ü‰Ë	ÛY[YI×K™›Ü‘XXÚ
OžØÛÛœÝOI
ŠÉÔØÛÜ™IÊNÙK^ÛÛ[]ÜŠÉÔ^YY	×OÝÜ—JÉû($	Î‰û,ªÈ:ãá;(!:ã :®,;)$IÎÙK˜Û\ÜÓ\ÝÙÙÛJ	ÝØZ]	Ë]ÜŠÉÔ^YY	×J_JNØÛÛœÝÝ[]›Y[ÜŠÝ›Y[YNÉ
	ÝX[UÝ[	ÊK^ÛÛ[]Ý[
Éû($	ÎØÛÛœÝÝ\\›ÛOOOIÛY[Ü‰ÏÉÛY[YIÎ‰ÛY[Ü‰Ë˜[YO[Ý\OOIÛY[Ü‰ÏÉúêf;a¨	Î‰úêf;bì	ÎÉ
	Ü\™\“›ÝIÊK^ÛÛ[]ÛÝ\ŠÉÔ^YY	×OØ	Û˜[Y_{'f;-g:¬è:®,:èg{'`	ÝÛÝ\—_{($H:à­:®,:èg{'a:ãe;em;ej:®æ;&+:ço:¬ ;&¥˜˜	Û˜[Y_{'f;,ªÈ:ãá;(!;'a:®,:âé:é«:¬è;'¢;%­;&¥ˆ:¬ {'¤;'f:¬á;(%{'/:èg;,.;%ë;em;(ï;!.;&¥˜É
	Û[Øš[UX[IÊK^ÛÛ[X;c ;ej{ ¬	ÝÝ[{($0­È	ÝÛÝ\ŠÉÔ^YY	×OÛ˜[YJÉÈ;-g:¬è	ÊÝÛÝ\—JÉû($	Î›˜[YJÉÈ;,ªÈ:ãá;(!:ã :®,;)$IßXÉ
	Ü™\Ý[X[IÊK^ÛÛ[X;&¬:é«;c 	ÝÝ[{($0­È;f!;'«	Ü˜[šÓÙŠ
_{'!W˜ÛÛœÝÛÜYVË‹‹X[\×KœÛÜ

KŠOOŠ‹›Y[ÜŠØ‹›Y[YJKJK›Y[ÜŠØK›Y[YJ_K˜Ü™X]YX‹˜Ü™X]Y
NÙØÝ[Y[œ]Y\žTÙ[XÝÜ[
	Ëœ˜[šË[\Ý	ÊK™›Ü‘XXÚ
\ÝOžÛ\Ýœ™\XÙPÚ[™[Š
NÚYŠ\ÛÜY›[™Ý
^ØÛÛœÝOYØÝ[Y[˜Ü™X]Q[[Y[
	Ù]‰ÊNÙK˜Û\ÜÓ˜[YOIÙ[\IÎÙK^ÛÛ[Iû%a;)àH:äìzègzä';c ;'m;%á»%­;&¥ˆ;,ªÈ:ì¢;)î;c ;'m:ä&;%­:ìí;!.;&¥‰ÎÛ\Ý˜\[™
J_\ÛÜY™›Ü‘XXÚ
OžØÛÛœÝ›ÝÏYØÝ[Y[˜Ü™X]Q[[Y[
	Ù]‰ÊNÜ›ÝË˜Û\ÜÓ˜[YOIÜ˜[šË\›ÝÉÊÊšYOOXÝ\œ™[ÉÈYIÎ‰ÉÊNØÛÛœÝ[OYØÝ[Y[˜Ü™X]Q[[Y[
	Ø‰ÊNÛ[K˜Û\ÜÓ˜[YOIÛ[IÎÛ[K^ÛÛ[TÝš[™Ê˜[šÓÙŠ
JKœYÝ\
‹	Ì	ÊNØÛÛœÝ˜[YOYØÝ[Y[˜Ü™X]Q[[Y[
	ÜÜ[‰ÊNÛ˜[YK˜Û\ÜÓ˜[YOIÛ˜[YIÎÛ˜[YK^ÛÛ[]›˜[YJÊšYOOXÝ\œ™[ÉÈ0­È;&¬:é«;c 	Î‰ÉÊNØÛÛœÝÛX[YØÝ[Y[˜Ü™X]Q[[Y[
	ÜÛX[	ÊNÜÛX[^ÛÛ[X:êf;a¨	Ý›Y[Ü”^YYÝ›Y[ÜŠÉû($	Î‰úã :®,	ßH0­È:êf;bì	Ý›Y[YT^YYÝ›Y[YJÉû($	Î‰úã :®,	ßXÛ˜[YK˜\[™
ÛX[
NØÛÛœÝØÛÜ™OYØÝ[Y[˜Ü™X]Q[[Y[
	Ø‰ÊNÜØÛÜ™K^ÛÛ[J›Y[ÜŠÝ›Y[YJJÉû($	ÎÜ›ÝË˜\[™
[K˜[YKØÛÜ™JNÛ\Ý˜\[™
›ÝÊ_J_JNØÛÛ›ÛÊ
_W™[˜Ý[ÛˆÛÛ›ÛÊ
^ÖÉÜÝ\	Ë	ÙØ[YRÛYIË	ÚÛYSÙÛÉË	ÛX]™IË	Ü›Ý]UÙÙÛIË	ÜÜ[“Û˜ÙIË	Ü™\Ù]šY]ÉË	Ú[š]PXÝ[Û‰×K™›Ü‘XXÚ
YO‰
Y
K™\ØX›Y[ØÚÙY

_Ø]™P\Þ_H\[™[™ÔØÛÜ™JNÉ
	ØYØZ[‰ÊK™\ØX›Y\Ø]™P\Þ_H\[™[™ÔØÛÜ™NÉ
	ØÛÜÙT™\Ý[	ÊK™\ØX›Y\Ø]™P\Þ_H\[™[™ÔØÛÜ™NÖÉØÜ™X]UX‰Ë	Ù[œ›ÛX‰Ë	Ú›Ú[•X‰Ë	Ø˜XÚÐ]]	Ë	ÜÝX›Z]X[I×K™›Ü‘XXÚ
YO‰
Y
K™\ØX›YX]]\ÞJ_W˜\Þ[˜È[˜Ý[Ûˆ™Yœ™\Ú

^ØÛÛœÝ]OX]ØZ]\J	ÜÝ]IÊNÜ˜[šÚ[™Ó[ÛY]K›[ÛÙØÝ[Y[œ]Y\žTÙ[XÝÜ[
	Ëœ˜[šÚ[™Ë[[Û	ÊK™›Ü‘XXÚ
OO™K^ÛÛ[Y]K›[Ûœ™\XÙJ	ËIË	úáa	ÊJÉû&å	ÊNÝX[\ÏY]KX[\ÎÚYŠÝ\œ™[OOY]K˜Ý\œ™[
XÜ™X]Y[š]OIÉÎØÝ\œ™[Y]K˜Ý\œ™[Ü›ÛOY]Kœ›ÛNÜ\XÚ\[˜[YOY]Kœ\XÚ\[˜[Y_	ÉÎÛY[YR›Ú[™YHHY]K›Y[YR›Ú[™YÚYŠ›ÛOOOIÛY[Ü‰É‰ˆXÜ™X]Y[š]J^Ýž^ØÜ™X]Y[š]O\Ù\ÜÚ[Û”ÝÜ˜YÙK™Ù]][J	Ú[š]KIÊØÝ\œ™[
_	ÉßXØ]Úß_ZYŠVÉÛY[Ü‰Ë	ÛY[YI×Kš[˜ÛY\Ê›ÛJJ\›ÛO[[ÚYŠXÝ\œ™[	‰œØÜ™Y[OOIÙØ[YIÉ‰ˆ[ØÚÙY

J^Ü›ÛO[[ÝšY]Ê	ÚÛYIÊNÉ
	ØÛÛ›™XÝ[Û“›ÝIÊK^ÛÛ[Iûc ;(${!£{'m:éã:èã:ä&;%â;%­;&¥ˆ:âé;"ç;'¡{'©{em;(ï;!.;&¥‰ß\™[™\Š
NÙØÝ[Y[œ]Y\žTÙ[XÝÜ[
	ËœÞ[˜Ë[›ÝIÊK™›Ü‘XXÚ
OO™K^ÛÛ[Iû&*:ço;'n:®,:ègH0­È;'¤:ãæH;%ázãl;'m;b®	ÊNÜ™]\›ˆ]_W™[˜Ý[Ûˆ]]šY[Ê
^ØÛÛœÝÜ™X][™Ï[[ÙOOOIØÜ™X]IË[œ›Û[™Ï[[ÙOOOIÙ[œ›Û	ÎÉ
	ÛX\Ý\‘šY[	ÊKšY[HXÜ™X][™ÎÉ
	Ú[š]][Û‘šY[	ÊKšY[HY[œ›Û[™ÎÉ
	ÛYØXÞQšY[	ÊKšY[]YN×™›ÜŠÛÛœÝÚY™\]Z\™YHÙˆÖÉÛX\Ý\ÛÙIËÜ™X][™×KÉÚ[š]][ÛÛÙIË[œ›Û[™×WJ^É
Y
Kœ™\]Z\™Y\™\]Z\™YÉ
Y
K™\ØX›YH\™\]Z\™YW‰
	ÛYØXÞT\ÜÝÛÜ™	ÊK™\ØX›YHXÜ™X][™ÎÉ
	Ü\ÜÝÛÜ™	ÊK˜]]ØÛÛ\]O[[ÙOOOIÚ›Ú[‰ÏÉØÝ\œ™[\\ÜÝÛÜ™	Î‰Û™]Ë\\ÜÝÛÜ™	Î×‰
	Ü\XÚ\[[œ]	ÊKœXÙZÛ\[[ÙOOOIÚ›Ú[‰ÏÉú¬ ;'¡{eh:åc;(%{eg;%a;'m:å%	Î‰û «;&ª{eh;%a;'m:å%
;&"ˆY[ÜŒJIÎ×‰
	Ø]]]IÊK^ÛÛ[XÜ™X][™ÏÉû&¬:é«;c :éã:äé:®,	Î™[œ›Û[™ÏÉúêf;bì;,ªÈ:¬ ;'¡IÎ‰úâé;"ç:éã:à¦:ì&:¬ ;&ã;&¥IÎ×‰
	Ø]]\ØÜš\[Û‰ÊK^ÛÛ[XÜ™X][™ÏÉú¬ ;'¡H;/e:äç:â¥;'¤:ãæ{'/:èg:éã:äé;%­;(.;&¥ˆ;&a;!,H;fá:ìí{ «;em;!':êf;bì;%ä:¬£:ìí:à­;(ï;!.;&¥‰Î™[œ›Û[™ÏÉúêf;a¨;%ä:¬£:ì&û'`;/e:äç:èg:¬ ;'¡{ef:¬è:à­;%a;'m:å%;&`:¬';'n:îa:ì :ì¢;f.:éo;(%{em;&¥‰Î‰úäìzèg{eg;c ;'m:é¡:¬ï;%a;'m:å%:¬';'n:îa:ì :ì¢;f.:éo;'¡zè){em;(ï;!.;&¥‰Î×‰
	Ú[š]][Û“X™[	ÊK^ÛÛ[Iúêf;a¨;%ä:¬£:ì&û'`:¬ ;'¡H;/e:äç	ÎÉ
	Ú[š]][ÛÛÙIÊKœXÙZÛ\Iúêf;a¨:¬ :ìí:à­;) ;/e:äç:éo:í¦{%ë:á(û%­;(ï;!.;&¥	ÎÉ
	Ú[š]][Û’[	ÊK^ÛÛ[Iú¬ ;'¡{eh:åc;eg:ì¢:éã; «;&ª{em;&¥ˆ:èg:­î;'n:îa:ì :ì¢;f.;&`:âë:ço;&¥‰Î×‰
	ÜÝX›Z]X[IÊK^ÛÛ[XÜ™X][™ÏÉûc :éã:äé:®,8¡¤‰Î™[œ›Û[™ÏÉú¬ ;'¡{ef:¬è;"ç;'¤{ef:®,8¡¤‰Î‰úèg:­î;'n8¡¤‰Î×™›ÜŠÛÛœÝÚY˜[YWHÙˆÖÉÚ›Ú[•X‰Ë	Ú›Ú[‰×KÉØÜ™X]UX‰Ë	ØÜ™X]I×KÉÙ[œ›ÛX‰Ë	Ù[œ›Û	×WJ^É
Y
KšY[Y˜[ÙNÉ
Y
KœÙ]]šX]J	Ø\šXK\™\ÜÙY	Ë[ÙOOO]˜[YJ__W™[˜Ý[ÛˆÜ[]]
J^ÚYŠ]]\Þ_ØÚÙY

_[™[™ÔØÛÜ™J\™]\›ŽÛ[ÙO[NÉ
	ÝX[Q›Ü›IÊKœ™\Ù]

NÉ
	Ü\ÜÝÛÜ™	ÊK\OIÜ\ÜÝÛÜ™	ÎÉ
	ÜÚÝÔ\ÜÝÛÜ™	ÊK^ÛÛ[Iúìí:®,	ÎÉ
	ÜÚÝÔ\ÜÝÛÜ™	ÊKœÙ]]šX]J	Ø\šXK\™\ÜÙY	Ë	Ù˜[ÙIÊNÉ
	ÛYØXÞQšY[	ÊK›Ü[Y˜[ÙNØÛX\‘›Ü›Q\œ›ÜŠ
NØ]]šY[Ê
NÝšY]Ê	Ø]]	Ê_W™[˜Ý[ÛˆÛX\‘›Ü›Q\œ›ÜŠ
^É
	Ù›Ü›Q\œ›Ü‰ÊK^ÛÛ[IÉÎÙØÝ[Y[œ]Y\žTÙ[XÝÜ[
	ÈÝX[Q›Ü›HØ\šXKZ[˜[YIÊK™›Ü‘XXÚ
OO™Kœ™[[Ý™P]šX]J	Ø\šXKZ[˜[Y	ÊJ_W™[˜Ý[Ûˆ›Ü›Q\œ›ÜŠY\ÜØYÙKšY[
^É
	Ù›Ü›Q\œ›Ü‰ÊK^ÛÛ[[Y\ÜØYÙNØÛÛœÝ[œ]YšY[	‰‰
šY[
NÚYŠ[œ]	‰ˆZ[œ]™\ØX›Y
^Ú[œ]œÙ]]šX]J	Ø\šXKZ[˜[Y	Ë	ÝYIÊNÚ[œ]™›ØÝ\Ê
_Y[ÙH	
	Ù›Ü›Q\œ›Ü‰ÊKœØÜ›Û[ÕšY]ÊØ›ØÚÎ‰Û™X\™\Ý	ßJ_W‰
	ÝX[Q›Ü›IÊK˜Y]™[\Ý[™\Š	Ú[œ]	ËÛX\‘›Ü›Q\œ›ÜŠN×‰
	ÜÚÝÔ\ÜÝÛÜ™	ÊK›Û˜ÛXÚÏJ
OOžØÛÛœÝš\ÚX›OI
	Ü\ÜÝÛÜ™	ÊK\OOOIÜ\ÜÝÛÜ™	ÎÉ
	Ü\ÜÝÛÜ™	ÊK\O]š\ÚX›OÉÝ^	Î‰Ü\ÜÝÛÜ™	ÎÉ
	ÜÚÝÔ\ÜÝÛÜ™	ÊK^ÛÛ[]š\ÚX›OÉû"*:®,:®,	Î‰úìí:®,	ÎÉ
	ÜÚÝÔ\ÜÝÛÜ™	ÊKœÙ]]šX]J	Ø\šXK\™\ÜÙY	ËÝš[™Êš\ÚX›JJ_N×™[˜Ý[Ûˆ™[Y[X™\’[š]J
^Ýž^ÜÙ\ÜÚ[Û”ÝÜ˜YÙKœÙ]][J	Ú[š]KIÊØÝ\œ™[Ü™X]Y[š]J_XØ]Úß_W‰
	Ú[š]PXÝ[Û‰ÊK›Û˜ÛXÚÏX\Þ[˜Ê
OOžÚYŠØÚÙY

_Ø]™P\Þ_[™[™ÔØÛÜ™J\™]\›ŽÉ
	Ú[š]PXÝ[Û‰ÊK™\ØX›Y]YNÝž^ÚYŠXÜ™X]Y[š]J^ØÛÛœÝ™\Ý[X]ØZ]\J	Ú[š]][Û‰ËßJNØÜ™X]Y[š]O\™\Ý[š[š]][ÛÛÙNÜ™[Y[X™\’[š]J
NÜ™[™\Š
NÉ
	Ú[š]Q™YY˜XÚÉÊK^ÛÛ[Iû â;/e:äç:éo:ì':®"{e¢;%­;&¥ˆ;'m;(!;/e:äç:â¥; «;&ª{eh;"&;%á»%­;&¥‰ÎÜ™]\›ŸX]ØZ]˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
	ûc ;'m:é¡ˆ	ÊÝX[J
K›˜[YJÉ×º¬ ;'¡H;/e:äçˆ	ÊØÜ™X]Y[š]JÉ×‰ÊÛØØ][Û‹›ÜšYÚ[ŠÉÈ0­È;"ç;'¤{ef:®,8¡¤ˆ:êf;bì;,ªÈ:¬ ;'¡IÊNÉ
	Ú[š]Q™YY˜XÚÉÊK^ÛÛ[Iúìí{ «;e¢;%­;&¥ˆ:êf;bì;%ä:¬£:ìí:à­;(ï;!.;&¥‰ßXØ]Ú
\œŠ^É
	Ú[š]Q™YY˜XÚÉÊK^ÛÛ[XÜ™X]Y[š]OÉúìí{ «;ef;)à:ê®ûe¢;%­;&¥ˆ;'!;/e:äç:éo;)à{($H:ìí{ «;em;(ï;!.;&¥‰Î™\œ‹›Y\ÜØYÙ_Yš[˜[^É
	Ú[š]PXÝ[Û‰ÊK™\ØX›YY˜[Ù__N×‰
	ØÜ™X]IÊK›Û˜ÛXÚÏJ
OO›Ü[]]
	ØÜ™X]IÊNÉ
	Ú›Ú[‰ÊK›Û˜ÛXÚÏJ
OOžÚYŠX[J
I‰œ›ÛJ^Ü™\Ù]›Ý[™

NÝšY]Ê	ÙØ[YIÊ_Y[ÙHÜ[]]
	Ú›Ú[‰Ê_NÉ
	ØÜ™X]UX‰ÊK›Û˜ÛXÚÏJ
OO›Ü[]]
	ØÜ™X]IÊNÉ
	Ù[œ›ÛX‰ÊK›Û˜ÛXÚÏJ
OO›Ü[]]
	Ù[œ›Û	ÊNÉ
	Ú›Ú[•X‰ÊK›Û˜ÛXÚÏJ
OO›Ü[]]
	Ú›Ú[‰ÊNÉ
	Ø˜XÚÐ]]	ÊK›Û˜ÛXÚÏJ
OOšY]Ê	ÚÛYIÊNÉ
	Ø]]ØÜ™Y[‰ÊK˜Y]™[\Ý[™\Š	ØØ[˜Ù[	ËOOžÙKœ™]™[Y˜][

NÚYŠX]]\ÞJ]šY]Ê	ÚÛYIÊ_JNÉ
	Ø]]ØÜ™Y[‰ÊK˜Y]™[\Ý[™\Š	ØÛXÚÉËOOžÚYŠK\™Ù]OOI
	Ø]]ØÜ™Y[‰ÊI‰ˆX]]\ÞJ^ØÛÛœÝI
	Ø]]ØÜ™Y[‰ÊK™Ù]›Ý[™[™ÐÛY[™XÝ

NÚYŠK˜ÛY[‹›YK˜ÛY[œ‹œšYÚK˜ÛY[O‹ÜK˜ÛY[Oœ‹˜›ÝÛJ]šY]Ê	ÚÛYIÊ__JNÉ
	ÙØ[YRÛYIÊK›Û˜ÛXÚÏJ
OOšY]Ê	ÚÛYIÊNÉ
	ÚÛYSÙÛÉÊK›Û˜ÛXÚÏJ
OOžÚYŠX]]\ÞJ]šY]Ê	ÚÛYIÊ_N×‰
	Ü™\Ý[YIÊK›Û˜ÛXÚÏJ
OOžÚYŠ]X[J
J\™]\›ŽÚYŠ\›ÛJ^ÛÜ[]]
	Ú›Ú[‰ÊNÜ™]\›Ÿ\™\Ù]›Ý[™

NÝšY]Ê	ÙØ[YIÊ_N×‰
	ÝX[Q›Ü›IÊK›ÛœÝX›Z]X\Þ[˜ÈOOžÙKœ™]™[Y˜][

NÚYŠ]]\ÞJ\™]\›ŽÚYŠSÓ“S‘J^É
	Ù›Ü›Q\œ›Ü‰ÊK^ÛÛ[Iú¬á;(%H:äìzègz¬ï:èg:­î;'n;'`;&*:ço;'n:¬£;'¡;(ï;!£;%ä;!';)á;e¢{em;(ï;!.;&¥‰ÎÜ™]\›ŸXÛX\‘›Ü›Q\œ›ÜŠ
NÙ›ÜŠÛÛœÝÚYX™[HÙˆÖÉÝX[R[œ]	Ë	ûc ;'m:é¡	×KÉÜ\XÚ\[[œ]	Ë	û%a;'m:å%	×KÉÜ\ÜÝÛÜ™	Ë	ú¬';'n:îa:ì :ì¢;f.	×K‹‹Š[ÙOOOIØÜ™X]IÏÖÖÉÛX\Ý\ÛÙIË	úéâ;"©;a,;/e:äç	×WN›[ÙOOOIÙ[œ›Û	ÏÖÖÉÚ[š]][ÛÛÙIË	ú¬ ;'¡H;/e:äç	×WN–×JWJ^ØÛÛœÝ[œ]I
Y
NÚYŠZ[œ]˜[YKš[J
J^Ù›Ü›Q\œ›ÜŠX™[
ÊYOOIÜ\XÚ\[[œ]	ÏÉúéo	Î‰û'a	ÊJÉÈ;'¡zè){em;(ï;!.;&¥‰ËY
NÜ™]\›ŸZYŠYOOIÜ\ÜÝÛÜ™	É‰Š[œ]˜[YK›[™ÝŸ[œ]˜[YK›[™Ý
J^Ù›Ü›Q\œ›ÜŠ	ú¬';'n:îa:ì :ì¢;f.:â¥Ÿ;'¤:èg;'¡zè){em;(ï;!.;&¥‰ËY
NÜ™]\›Ÿ_W˜ÛÛœÝ^[ØY^Û˜[YN‰
	ÝX[R[œ]	ÊK˜[YKš[J
K\XÚ\[˜[YN‰
	Ü\XÚ\[[œ]	ÊK˜[YKš[J
K\ÜÝÛÜ™‰
	Ü\ÜÝÛÜ™	ÊK˜[YKX\Ý\ÛÙN›[ÙOOOIØÜ™X]IÏÉ
	ÛX\Ý\ÛÙIÊK˜[YKš[J
N[™Yš[™Y[š]][ÛÛÙN›[ÙOOOIÙ[œ›Û	ÏÉ
	Ú[š]][ÛÛÙIÊK˜[YKš[J
N[™Yš[™YYØXÞT\ÜÝÛÜ™›[ÙOOOIØÜ™X]IÏÉ
	ÛYØXÞT\ÜÝÛÜ™	ÊK˜[YN[™Yš[™YN×˜]]\ÞO]YNØÛÛ›ÛÊ
NÝž^ØÛÛœÝ™\Ý[X]ØZ]\J[ÙK^[ØY
NØÜ™X]Y[š]OIÉÎØ]ØZ]™Yœ™\Ú

NÚYŠ™\Ý[š[š]][ÛÛÙJ^ØÜ™X]Y[š]O\™\Ý[š[š]][ÛÛÙNÜ™[Y[X™\’[š]J
_I
	Ú[š]Q™YY˜XÚÉÊK^ÛÛ[IÉÎÖÉÜ\ÜÝÛÜ™	Ë	ÛX\Ý\ÛÙIË	Ú[š]][ÛÛÙIË	ÛYØXÞT\ÜÝÛÜ™	×K™›Ü‘XXÚ
YO‰
Y
K˜[YOIÉÊNÜ™\Ù]›Ý[™

NÝšY]Ê	ÙØ[YIÊ_XØ]Ú
\œŠ^ÚYŠ\œ‹›Y\ÜØYÙKš[˜ÛY\Ê	û'm;(!;c :îa:ì :ì¢;f.	ÊJ^É
	ÛYØXÞQšY[	ÊKšY[Y˜[ÙNÉ
	ÛYØXÞQšY[	ÊK›Ü[]Y_Y›Ü›Q\œ›ÜŠ\œ‹›Y\ÜØYÙK\œ‹™šY[
_Yš[˜[^Ø]]\ÞOY˜[ÙNØÛÛ›ÛÊ
__N×‰
	ÛX]™IÊK›Û˜ÛXÚÏX\Þ[˜Ê
OOžÚYŠØÚÙY

_[™[™ÔØÛÜ™J\™]\›ŽÝž^Ø]ØZ]\J	ÛX]™IËßJNØÝ\œ™[[[Ü›ÛO[[Ü\XÚ\[˜[YOIÉÎØÜ™X]Y[š]OIÉÎÜ™\Ù]›Ý[™

NÝšY]Ê	ÚÛYIÊNÉ
	ØÛÛ›™XÝ[Û“›ÝIÊK^ÛÛ[Iúèg:­î;%a;&àûe¢;%­;&¥ˆ;c ;'f;-g:¬è:®,:èg{'`:­î:ã :èg:àª;%a;'¢;%­;&¥‰ßXØ]Ú
\œŠ^É
	ÜÝ]\ÉÊK^ÛÛ[Y\œ‹›Y\ÜØYÙ__N×‰
	ÜÛÝ[™	ÊK›Û˜ÛXÚÏJ
OOžØ]Y[ÓÛHX]Y[ÓÛŽÉ
	ÜÛÝ[™	ÊKœÙ]]šX]J	Ø\šXK\™\ÜÙY	Ë]Y[ÓÛŠNÉ
	ÜÛÝ[™	ÊKœÙ]]šX]J	Ø\šXK[X™[	Ë]Y[ÓÛÉû!£:é«:àa:®,	Î‰û!£:é«;/':®,	ÊNÚYŠ]Y[ÓÛŠXÛXÚÔÛÝ[™

_N×™[˜Ý[ÛˆÛXÚÔÛÝ[™

^ÚYŠX]Y[ÓÛŠ\™]\›ŽÝž^Ø]Y[ÐÝX]Y[ÐÝ™]ÊÚ[™ÝË]Y[ÐÛÛ^Ú[™ÝËÙXšÚ]]Y[ÐÛÛ^
J
NØ]Y[ÐÝœ™\Ý[YJ
NØÛÛœÝÏX]Y[ÐÝ˜Ü™X]SÜØÚ[]ÜŠ
KÏX]Y[ÐÝ˜Ü™X]QØZ[Š
NÛË\OIÝšX[™ÛIÎÛË™œ™\]Y[˜ÞKœÙ]˜[YP][YJML]Y[ÐÝ˜Ý\œ™[[YJNÛË™œ™\]Y[˜ÞK™^Û™[X[˜[\Õ˜[YP][YJL]Y[ÐÝ˜Ý\œ™[[YJËŒJNÙË™ØZ[‹œÙ]˜[YP][YJŒL‹]Y[ÐÝ˜Ý\œ™[[YJNÙË™ØZ[‹™^Û™[X[˜[\Õ˜[YP][YJŒK]Y[ÐÝ˜Ý\œ™[[YJËŒŠNÛË˜ÛÛ›™XÝ
ÊNÙË˜ÛÛ›™XÝ
]Y[ÐÝ™\Ý[˜][ÛŠNÛËœÝ\

NÛËœÝÜ
]Y[ÐÝ˜Ý\œ™[[YJËŒŠ_XØ]Úß_W‰
	ÜÝYÙIÊK›ÛœÚ[\›[Ý™OYOOžÚYŠÙ\Ý\™_™YXÙYKœÚ[\•\OOOIÝÝXÚ	Ê\™]\›ŽØÛÛœÝI
	ÜÝYÙIÊK™Ù]›Ý[™[™ÐÛY[™XÝ

NÝÚ[™ÝËšÙ^PZ[O^ÞŠK˜ÛY[\‹›Y
KÜ‹ÚYKKNŠK˜ÛY[K\‹Ü
KÜ‹šZYÚK__NÉ
	ÜÝYÙIÊK›ÛœÚ[\›X]™OJ
OOžÝÚ[™ÝËšÙ^PZ[O^ÞŒNŒNÚYŠYÙ\Ý\™J\™[X\ÙJ
_N×™[˜Ý[Ûˆ›Ý][Û“X™[

^É
	Ü›Ý]UÙÙÛIÊK^ÛÛ[]Ú[™ÝËšÙ^U\›‹˜]]ÏÉû'¤:ãæH;f£;(!;/';)ä	Î‰û'¤:ãæH;f£;(!:®¯;)ä	ÎÉ
	Ü›Ý]UÙÙÛIÊKœÙ]]šX]J	Ø\šXK\™\ÜÙY	ËÚ[™ÝËšÙ^U\›‹˜]]Ê_W‰
	Ü›Ý]UÙÙÛIÊK›Û˜ÛXÚÏJ
OOžÝÚ[™ÝËšÙ^U\›‹˜]]ÏH]Ú[™ÝËšÙ^U\›‹˜]]ÎÜ›Ý][Û“X™[

_NÉ
	ÜÜ[“Û˜ÙIÊK›Û˜ÛXÚÏJ
OOžÝÚ[™ÝËšÙ^U\›‹˜]]ÏY˜[ÙNÝÚ[™ÝËšÙ^U\›‹žX]ÊÏSX]”JŒŽÜ›Ý][Û“X™[

_NÉ
	Ü™\Ù]šY]ÉÊK›Û˜ÛXÚÏJ
OOžÝÚ[™ÝËšÙ^U\›‹˜]]ÏY˜[ÙNÝÚ[™ÝËšÙ^U\›‹žX]ÏKKŒŒÎÝÚ[™ÝËšÙ^U\›‹œ]ÚLÝÚ[™ÝËšÙ^PZ[O^ÞŒNŒNÜ›Ý][Û“X™[

_NÜ›Ý][Û“X™[

N×™[˜Ý[Ûˆ™[X\ÙJ
^É
	ÚÙ^IÊK˜Û\ÜÓ\Ýœ™[[Ý™J	Ü™\ÜÙY	Ê_W™[˜Ý[ÛˆÚ[Ñ›Ü”™[XZ[š[™Ê\Ë›ÝÏ\\™›Ü›X[˜ÙK››ÝÊ
J^Ü™]\›ˆ\ÏŒÊ›ÝÏ™]™\•[[ÌŽŒJNŒW™[˜Ý[Ûˆ^[™™]™\Š™Y›Ü™KY\‹›ÝË[[XY[™J^ØÛÛœÝZ[\ÝÛ™\ÏSX]™›ÛÜŠY\‹ÌL
KSX]™›ÛÜŠ™Y›Ü™KÌL
NÜ™]\›ˆZ[\ÝÛ™\ÏŒÓX]›Z[ŠXY[™KX]›X^
›ÝË[[
JÛZ[\ÝÛ™\ÊŒÌ
N[[W™[˜Ý[ÛˆÙ]™]™\ŠXÝ]™J^ÚYŠ™]™\XÝ]™OOOXXÝ]™J\™]\›ŽÙ™]™\XÝ]™OXXÝ]™NÝÚ[™ÝËšÙ^Q™]™\XXÝ]™NÙØÝ[Y[˜›ÙK˜Û\ÜÓ\ÝÙÙÛJ	Ù™]™\‰ËXÝ]™JNÉ
	Ù™]™\˜YÙIÊKšY[HXXÝ]™NÚYŠXÝ]™J^É
	ÜÝ]\ÉÊK^ÛÛ[Iûe/:ì¡;`à;'¡HL;($:éâ:âéû-";-¥:¬ :â!:éo:åc:éâ:âé
Ì»($IÎÉ
	ÜÝ\	ÊK^ÛÛ[IÑ‘U‘TˆSQH0­È;($;"&ºì,	ÎØÛÛ™™]JJ_Y[ÙHYŠ\ÙOOOIÜ[›š[™ÉÊ^É
	ÜÝ]\ÉÊK^ÛÛ[Iúâé;'cL;($;'a;e©{emHL;($:éâ:âéû-";e/:ì¡;`à;'¡	ÎÉ
	ÜÝ\	ÊK^ÛÛ[Iû&¬:é«;c ;'a;'!;em:¯®HIß_W™[˜Ý[ÛˆÜÚ[ÊÚ[Ë]™[
^ØÛÛœÝ^Y\I
	Ý\Y™™XÝÉÊKI
	ÜÝYÙIÊK™Ù]›Ý[™[™ÐÛY[™XÝ

NÝÚ[J^Y\‹˜Ú[™[‹›[™ÝLÌŠ[^Y\‹™š\œÝÚ[œ™[[Ý™J
NØÛÛœÝ[YØÝ[Y[˜Ü™X]Q[[Y[
	ÜÜ[‰ÊNÙ[˜Û\ÜÓ˜[YOIÝ\\Ú[	ÊÊÚ[ÏOOLÉÈÝX›IÎ‰ÉÊNÙ[^ÛÛ[IÊÉÊÜÚ[ÎØÛÛœÝÚ[\Y]™[	‰“[X™\‹š\Ñš[š]J]™[˜ÛY[
I‰™]™[\KœÝ\ÕÚ]
	ÜÚ[\‰ÊNØÛÛœÝ\Ú[\Ù]™[˜ÛY[\‹›Yœ‹ÚY
‹KO\Ú[\Ù]™[˜ÛY[K\‹Üœ‹šZYÚ
‹Ù[œÝ[K›YSX]›X^
KX]›Z[Š‹ÚYLK
JJÉÜ	ÎÙ[œÝ[KÜSX]›X^
ÍKX]›Z[Š‹šZYÚLŒJJJÉÜ	ÎÛ^Y\‹˜\[™
[
NÚYŠ™YXÙY
^ÜÙ][Y[Ý]


OO™[œ™[[Ý™J
KŒŒ
NÜ™]\›ŸXÛÛœÝšYJX]œ˜[™ÛJ
KKJJŒ[JX]œ˜[™ÛJ
KKJJŒMŽØÛÛœÝ[š[OY[˜[š[X]JÞÝ˜[œÙ›Ü›N‰Ý˜[œÛ]JML	KLÌ	JHØØ[JJIËÜXÚ]NŒKÝ˜[œÙ›Ü›N˜˜[œÛ]JØ[ÊML	H
È	ÙšY
‹ŒŸ\
KMÍIJHØØ[JKŒN
H›Ý]J	Ý[YYÊXÜXÚ]NŒKÙ™œÙ]‹ŒNKÝ˜[œÙ›Ü›N˜˜[œÛ]JØ[ÊML	H
È	ÙšY\
KLL\
HØØ[JŽLŠH›Ý]J	Ý[YYÊXÜXÚ]NŒWKÙ\˜][ÛŽÌX\Ú[™Î‰ØÝXšXËX™^šY\ŠŒL‹ËŒÍKJIßJNØ[š[K›Û™š[š\ÚJ
OO™[œ™[[Ý™J
_W™[˜Ý[Ûˆ\
]™[
^ØÛÛœÝ›ÝÏ\\™›Ü›X[˜ÙK››ÝÊ
K™[XZ[š[™ÏY[™[›ÝÎÚYŠ\ÙOOOIÜ[›š[™ÉÉ‰œ™[XZ[š[™ÏL
^Ùš[š\Ú

NÜ™]\›ŸI
	ÚÙ^IÊK˜Û\ÜÓ\Ý˜Y
	Ü™\ÜÙY	ÊNØÛX\•[Y[Ý]
™\ÜÕ[Y\ŠNÜ™\ÜÕ[Y\\Ù][Y[Ý]
™[X\ÙKL
NØÛXÚÔÛÝ[™

NÚYŠ\ÙHOOIÜ[›š[™ÉßØÜ™Y[ˆOOIÙØ[YIÊ^ÚYŠØÜ™Y[OOIÚÛYIÊ\ÜÚ[ÊK]™[
NÜ™]\›ŸXÛÛœÝÚ[Ï\Ú[Ñ›Ü”™[XZ[š[™Ê™[XZ[š[™Ë›ÝÊNÜÙ]™]™\ŠÚ[ÏOOLŠNØÛÛœÝ™Y›Ü™OXÛÝ[ØÛXÚÜÊÊÎÚYŠÚ[ÏOOLŠY™]™\ÛXÚÜÊÊÎØÛÝ[
Ï\Ú[ÎÙ™]™\•[[Y^[™™]™\Š™Y›Ü™KÛÝ[›ÝË™]™\•[[[™
NÜÙ]™]™\Š›ÝÏ™]™\•[[
NÚYŠ™]™\XÝ]™JI
	Ù™]™\ÛÝ[ÝÛ‰ÊK^ÛÛ[SX]˜ÙZ[

™]™\•[[[›ÝÊKÌL
JÉû-"	ÎÉ
	ÜØÛÜ™IÊK^ÛÛ[XÛÝ[ÜÜÚ[ÊÚ[Ë]™[
NÚYŠX]™›ÛÜŠ™Y›Ü™KÍL
OX]™›ÛÜŠÛÝ[ÍL
J^ØÛÛœÝZ[\ÝÛ™OSX]™›ÛÜŠÛÝ[ÍL
JLÉ
	ÛZ[\ÝÛ™IÊK^ÛÛ[[Z[\ÝÛ™JÉû($H;)à:®";%a;(ï;(¢û%a;&¥IÎØÛÛ™™]JZ[\ÝÛ™ILLOOLÍNŒJNØÛX\•[Y[Ý]
Z[\ÝÛ™U[Y\ŠNÛZ[\ÝÛ™U[Y\\Ù][Y[Ý]


OO‰
	ÛZ[\ÝÛ™IÊK^ÛÛ[IÉËMŒ
__W‰
	ÚÙ^IÊK›ÛœÚ[\™ÝÛYOOžÚYŠK˜]ÛˆOOLYKš\Ôš[X\ž_Ù\Ý\™J\™]\›ŽÙKœ™]™[Y˜][

NÙÙ\Ý\™O^ÚY™KœÚ[\’Y™K˜ÛY[N™K˜ÛY[KX]ÎÚ[™ÝËšÙ^U\›‹žX]Ë]ÚÚ[™ÝËšÙ^U\›‹œ]Ú[Ý™Y™˜[Ù_NÉ
	ÚÙ^IÊKœÙ]Ú[\Ø\\™JKœÚ[\’Y
NÉ
	ÚÙ^IÊK˜Û\ÜÓ\Ý˜Y
	Ü™\ÜÙY	Ê_N×‰
	ÚÙ^IÊK›ÛœÚ[\›[Ý™OYOOžÚYŠYÙ\Ý\™_Ù\Ý\™KšYOOYKœÚ[\’Y
\™]\›ŽØÛÛœÝYK˜ÛY[YÙ\Ý\™KžOYK˜ÛY[KYÙ\Ý\™KžNÚYŠYÙ\Ý\™K›[Ý™Y	‰“X]š\Ý
JOÊ^ÙÙ\Ý\™K›[Ý™Y]YNÜ™[X\ÙJ
NÝÚ[™ÝËšÙ^U\›‹˜]]ÏY˜[ÙNÜ›Ý][Û“X™[

NÉ
	ÚÙ^IÊK˜Û\ÜÓ\Ý˜Y
	Ü›Ý][™ÉÊ_ZYŠÙ\Ý\™K›[Ý™Y
^ÝÚ[™ÝËšÙ^U\›‹žX]ÏYÙ\Ý\™KžX]ÊÙ
‹ŒLŽÝÚ[™ÝËšÙ^U\›‹œ]ÚSX]›X^
KŒKX]›Z[ŠŒËÙ\Ý\™Kœ]Ú
ÙJ‹ŒÊJNÝÚ[™ÝËšÙ^PZ[O^ÞŒNŒ__N×™[˜Ý[ÛˆØ[˜Ù[Ù\Ý\™J
^ÙÙ\Ý\™O[[É
	ÚÙ^IÊK˜Û\ÜÓ\Ýœ™[[Ý™J	Ü›Ý][™ÉÊNÜ™[X\ÙJ
_W‰
	ÚÙ^IÊK›ÛœÚ[\\YOOžÚYŠYÙ\Ý\™_Ù\Ý\™KšYOOYKœÚ[\’Y
\™]\›ŽØÛÛœÝÛXÚÙYHYÙ\Ý\™K›[Ý™YØØ[˜Ù[Ù\Ý\™J
NÚYŠ	
	ÚÙ^IÊKš\ÔÚ[\Ø\\™JKœÚ[\’Y
JI
	ÚÙ^IÊKœ™[X\ÙTÚ[\Ø\\™JKœÚ[\’Y
NÚYŠÛXÚÙY
]\
J_N×‰
	ÚÙ^IÊK›ÛœÚ[\˜Ø[˜Ù[XØ[˜Ù[Ù\Ý\™NÉ
	ÚÙ^IÊK›Û›ÜÝÚ[\˜Ø\\™OXØ[˜Ù[Ù\Ý\™NÉ
	ÚÙ^IÊK›Û˜ÛXÚÏYOOžÚYŠK™]Z[OOL
]\

_NØY]™[\Ý[™\Š	Ø›\‰ËØ[˜Ù[Ù\Ý\™JN×‰
	ÚÙ^IÊK˜Y]™[\Ý[™\Š	ÚÙ^YÝÛ‰ËOOžÚYŠ\ÙOOOIÜ[›š[™ÉßVÉÐ\œ›ÝÓY	Ë	Ð\œ›ÝÔšYÚ	Ë	ÒÛYI×Kš[˜ÛY\ÊKšÙ^JJ\™]\›ŽÙKœ™]™[Y˜][

NÝÚ[™ÝËšÙ^U\›‹˜]]ÏY˜[ÙNÚYŠKšÙ^OOOIÒÛYIÊ^ÝÚ[™ÝËšÙ^U\›‹žX]ÏKKŒŒÎÝÚ[™ÝËšÙ^U\›‹œ]ÚLY[ÙHÚ[™ÝËšÙ^U\›‹žX]ÊÏYKšÙ^OOOIÐ\œ›ÝÓY	ÏËKŒÎ‹ŒÎÜ›Ý][Û“X™[

_JN×˜Y]™[\Ý[™\Š	ÚÙ^YÝÛ‰ËOOžÚYŠK˜ÛÙHOOIÔÜXÙIßKœ™\X]K\™Ù]˜ÛÜÙ\Ý
	Ú[œ]]Û‹Ý[[X\žK^\™XIÊ_ØÝ[Y[œ]Y\žTÙ[XÝÜŠ	ÙX[ÙÖÛÜ[—IÊ_ØÜ™Y[ˆOOIÙØ[YIÊ\™]\›ŽÙKœ™]™[Y˜][

NÝ\

_JN×˜\Þ[˜È[˜Ý[ÛˆÝ\

^ÚYŠØÚÙY

_[™[™ÔØÛÜ™_Ø]™P\ÞJ\™]\›ŽÚYŠ]X[J
_\›ÛJ^ÛÜ[]]
	Ú›Ú[‰ÊNÜ™]\›ŸXØ[˜Ù[Ù\Ý\™J
NÝÚ[™ÝËšÙ^U\›‹žX]ÏKKŒŒÎÝÚ[™ÝËšÙ^U\›‹œ]ÚLÜ™\Ù]›Ý[™

NÜ\ÙOIØÛÝ[ÝÛ‰ÎØÛÛ›ÛÊ
NÙØÝ[Y[˜›ÙK˜Û\ÜÓ\Ý˜Y
	Ü^Z[™ÉÊNÉ
	ÜÝ]\ÉÊK^ÛÛ[Iû) :îaH;'¨;"ç;fá;"ç;'¤{ejzââ:âé‰ÎÙ›ÜŠ]OLÎÚOŒÚKKJ^É
	ÜÝ\	ÊK^ÛÛ[ZNØ]ØZ]™]È›ÛZ\ÙJOœÙ][Y[Ý]
‹L
J_\\ÙOIØÛÛ›™XÝ[™ÉÎÉ
	ÜÝ\	ÊK^ÛÛ[Iû"ç;'¤H;) :îa;)$x )‰ÎÝž^ØÛÛœÝ™\Ý[X]ØZ]\J	ÜÝ\	ËÜ›Û_JNÜ›Ý[™Y\™\Ý[œ›Ý[™Ü\ÙOIÜ[›š[™ÉÎÙ[™\\™›Ü›X[˜ÙK››ÝÊ
JÌÌÉ
	ÜÝ\	ÊK^ÛÛ[Iû&¬:é«;c ;'a;'!;em:¯®HIÎÉ
	ÜÝ]\ÉÊK^ÛÛ[IÌÌ;-":ãæ{%b;`©;.¨{'a:â#:çë;(ï;!.;&¥IÎÉ
	ÚÙ^IÊK™›ØÝ\ÊÜ™]™[ØÜ›ÛY_JNØ[š[X][Û\™\]Y\Ý[š[X][Û‘œ˜[YJXÚÊ_XØ]Ú
\œŠ^Ü\ÙOIÜ™XYIÎÙØÝ[Y[˜›ÙK˜Û\ÜÓ\Ýœ™[[Ý™J	Ü^Z[™ÉÊNÉ
	ÜÝ\	ÊK^ÛÛ[IÌÌ;-":ãá;(!;"ç;'¤{ef:®,8¡¤‰ÎÉ
	ÜÝ]\ÉÊK^ÛÛ[Y\œ‹›Y\ÜØYÙNØÛÛ›ÛÊ
__W™[˜Ý[ÛˆXÚÊ
^ÚYŠ\ÙHOOIÜ[›š[™ÉÊ\™]\›ŽØÛÛœÝYSX]›X^
[™\\™›Ü›X[˜ÙK››ÝÊ
JKÙXÏSX]˜ÙZ[
YÌL
NÚYŠYŒ
^ØÛÛœÝ›ÝÏ\\™›Ü›X[˜ÙK››ÝÊ
NÜÙ]™]™\Š›ÝÏ™]™\•[[
NÚYŠ™]™\XÝ]™JI
	Ù™]™\ÛÝ[ÝÛ‰ÊK^ÛÛ[SX]˜ÙZ[
X]›Z[ŠY™]™\•[[[›ÝÊKÌL
JÉû-"	ÎßI
	Ý[Y\‰ÊK^ÛÛ[IÌ‰ÊÔÝš[™ÊÙXÊKœYÝ\
‹	Ì	ÊNÉ
	Ý[Y\‰ÊKœÝ[K˜ÛÛÜ\ÙXÏLLÉÈØŒXŒÍÉÎ‰ÉÎÉ
	Ø˜\‰ÊKœÝ[KÚY[YÌÌ
ÉÉIÎÚYŠ[Y
Yš[š\Ú

NÙ[ÙH[š[X][Û\™\]Y\Ý[š[X][Û‘œ˜[YJXÚÊ_W™[˜Ý[Ûˆš[š\Ú

^ÚYŠ\ÙHOOIÜ[›š[™ÉÊ\™]\›ŽÜ\ÙOIÙš[š\ÚY	ÎÜÙ]™]™\Š˜[ÙJNØØ[˜Ù[[š[X][Û‘œ˜[YJ[š[X][ÛŠNÜ™[X\ÙJ
NÙØÝ[Y[˜›ÙK˜Û\ÜÓ\Ýœ™[[Ý™J	Ü^Z[™ÉÊNÉ
	Ý[Y\‰ÊK^ÛÛ[IÌŒ	ÎÉ
	Ø˜\‰ÊKœÝ[KÚYIÌ	IÎÉ
	ÜÝ\	ÊK^ÛÛ[Iúâé;"ç:ãá;(!;ef:®,8¡¤‰ÎÉ
	Ü™\Ý[ØÛÜ™IÊK^ÛÛ[XÛÝ[É
	Ü™\Ý[]Z[	ÊK^ÛÛ[Iû&¬:é«;c ;'f:®,:èg{'a;( ;'©{ef:¬è;'¢;%­;&¥8 )‰ÎÉ
	Ü™]žTØ]™IÊKšY[]YNÉ
	Ù\ØØ\™Ø]™IÊKšY[]YNÜ[™[™ÔØÛÜ™O^Ü›Ý[™œ›Ý[™YØÛÜ™N˜ÛÝ[ÛXÚÜË™]™\ÛXÚÜßNÉ
	Ü™\Ý[œ™XZÙÝÛ‰ÊK^ÛÛ[X	ØÛXÚÜß{f£;`m:é«H
È;e/:ì¡:ìí:á";"©	Ù™]™\ÛXÚÜß{($ØÛÛ›ÛÊ
NÉ
	Ü™\Ý[	ÊKœÚÝÓ[Ù[

NØÛÛ™™]JJNÜÝX›Z]ØÛÜ™J
_W˜\Þ[˜È[˜Ý[ÛˆÝX›Z]ØÛÜ™J
^ÚYŠ\[™[™ÔØÛÜ™_Ø]™P\ÞJ\™]\›ŽÜØ]™P\ÞO]YNØÛÛ›ÛÊ
NÉ
	Ü™]žTØ]™IÊK™\ØX›Y]YNÉ
	Ù\ØØ\™Ø]™IÊK™\ØX›Y]YNÝž^ØÛÛœÝØ]™YX]ØZ]\J	Ùš[š\Ú	Ë[™[™ÔØÛÜ™JNÜ[™[™ÔØÛÜ™O[[É
	Ü™]žTØ]™IÊKšY[]YNÉ
	Ù\ØØ\™Ø]™IÊKšY[]YNØ]ØZ]™Yœ™\Ú

NÉ
	Ü™\Ý[]Z[	ÊK^ÛÛ[\Ø]™Y›[ÛOO\˜[šÚ[™Ó[ÛÉû'm:ì¢:âë;-g:¬è:®,:èg{'m;&¬:é«;c ;($;"&;%ä:ì&;& zä$;%­;&¥IÎœØ]™Y›[Û
ÉÈ:ç«{`®{%ä:®,:èg{e¢;%­;&¥ˆ;f!;'«:â¥; â:âë;'f:ç«{`®{'m;%ä;&¥‰ÎÉ
	ÜÝ]\ÉÊK^ÛÛ[Iúãá;(!;&a:èãH;c :®,:ègz¬ï;"';'!:éo;fe{'n;em:ìí;!.;&¥‰ßXØ]Ú
\œŠ^É
	Ü™]žTØ]™IÊKšY[H\[™[™ÔØÛÜ™NÉ
	Ù\ØØ\™Ø]™IÊKšY[H\[™[™ÔØÛÜ™NÉ
	Ü™\Ý[]Z[	ÊK^ÛÛ[\[™[™ÔØÛÜ™OÙ\œ‹›Y\ÜØYÙJÉÈ:®,:ègH;( ;'©{'a:âé;"ç;"ç:ãá;em;(ï;!.;&¥‰Î‰ú®,:èg{'`;( ;'©{e¢;%­;&¥ˆ:ç«{`®{'a:âé;"ç:í¢:çë;&):â¥;)${'m;%ä;&¥‰ßYš[˜[^ÜØ]™P\ÞOY˜[ÙNÉ
	Ü™]žTØ]™IÊK™\ØX›YY˜[ÙNÉ
	Ù\ØØ\™Ø]™IÊK™\ØX›YY˜[ÙNØÛÛ›ÛÊ
__W‰
	ÜÝ\	ÊK›Û˜ÛXÚÏ\Ý\É
	ØYØZ[‰ÊK›Û˜ÛXÚÏJ
OOžÚYŠØ]™P\Þ_[™[™ÔØÛÜ™J\™]\›ŽÉ
	Ü™\Ý[	ÊK˜ÛÜÙJ
NÜÝ\

_NÉ
	ØÛÜÙT™\Ý[	ÊK›Û˜ÛXÚÏJ
OO‰
	Ü™\Ý[	ÊK˜ÛÜÙJ
NÉ
	Ü™]žTØ]™IÊK›Û˜ÛXÚÏ\ÝX›Z]ØÛÜ™NÉ
	Ù\ØØ\™Ø]™IÊK›Û˜ÛXÚÏJ
OOžÚYŠØ]™P\ÞJ\™]\›ŽÜ[™[™ÔØÛÜ™O[[É
	Ü™]žTØ]™IÊKšY[]YNÉ
	Ù\ØØ\™Ø]™IÊKšY[]YNÉ
	Ü™\Ý[]Z[	ÊK^ÛÛ[Iû'm:®,:èg{'`;( ;'©{ef;)à;%b»%f;%­;&¥ˆ; â:èg:ãá;(!;eh;"&;'¢;%­;&¥‰ÎØÛÛ›ÛÊ
_NÉ
	Ü™\Ý[	ÊK˜Y]™[\Ý[™\Š	ØØ[˜Ù[	ËOOžÚYŠØ]™P\Þ_[™[™ÔØÛÜ™JYKœ™]™[Y˜][

_JN×™ØÝ[Y[˜Y]™[\Ý[™\Š	Ýš\ÚXš[]XÚ[™ÙIË

OOžÚYŠ\ÙOOOIÜ[›š[™ÉÉ‰œ\™›Ü›X[˜ÙK››ÝÊ
OY[™
Yš[š\Ú

_JN×œ™[™\Š
NÚYŠÓ“S‘J^Ü™Yœ™\Ú

K˜Ø]Ú


OOžÉ
	ØÛÛ›™XÝ[Û“›ÝIÊK^ÛÛ[Iû&*:ço;'n:ç«{`®{%ä;%ì:¬¬;ef;)à:ê®ûe¢;%­;&¥ˆ;'¨;"ç;fá; â:èg:¬è;.j;em;(ï;!.;&¥‰ßJNÜÙ][\˜[


OOžÚYŠ[ØÚÙY

I‰ˆ\Ø]™P\ÞI‰ˆYØÝ[Y[šY[Š\™Yœ™\Ú

K˜Ø]Ú


OO™ØÝ[Y[œ]Y\žTÙ[XÝÜ[
	ËœÞ[˜Ë[›ÝIÊK™›Ü‘XXÚ
OO™K^ÛÛ[Iû%ì:¬¬;'«;"ç:ãá;)$x )‰ÊJ_KL
_Y[Ù^ØÛÛœÝOYØÝ[Y[˜Ü™X]Q[[Y[
	ØIÊNØKš™YIÚÎ‹ËÛY[Üš[™ËXÛXÚË]X[KÙÚœÙÝYK˜Ú]ÜœÚ]IÎØK^ÛÛ[Iûc ;,.;%ë:â¥;&*:ço;'n:ì¡;(!;%ä;!':¬ :â©{em;&¥8¡¤‰ÎÉ
	ØÛÛ›™XÝ[Û“›ÝIÊK˜\[™
JNÙØÝ[Y[œ]Y\žTÙ[XÝÜ[
	ËœÞ[˜Ë[›ÝIÊK™›Ü‘XXÚ
OO™K^ÛÛ[Iû&*:ço;'n:ì¡;(!;%ä;!';c :ç«{`®{'a;fe{'n;ef;!.;&¥‰Ê_W™[˜Ý[ÛˆÛÛ™™]J[[Ý[
^ÚYŠ™YXÙY
\™]\›ŽØÛÛœÝ^Y\I
	Ùž	ÊNÝÚ[J^Y\‹˜Ú[™[‹›[™ÝŒLŒ
[^Y\‹™š\œÝÚ[œ™[[Ý™J
NÙ›ÜŠ]OLÚO[[Ý[ÚJÊÊ^ØÛÛœÝYØÝ[Y[˜Ü™X]Q[[Y[
	ÜÜ[‰ÊNÜ˜Û\ÜÓ˜[YOIÜ\XÛIÎÜœÝ[KœÙ]›Ü\J	ËKXÛÛÜ‰ËÉÈÙ™˜ÙÌÉË	ÈØŒX™‰Ë	ÈÎ˜™YIË	ÈÙ™™ŽM	Ë	ÈÙŒØLN‰×VÚIMWJNØÛÛœÝZ[›™\•ÚY
ŠŒJÓX]œ˜[™ÛJ
J‹JKOZ[›™\’ZYÚ
‹ÜœÝ[K›Y^
ÉÜ	ÎÜœÝ[KÜ^JÉÜ	ÎÙ›ÜŠ]LÚŽÚŠÊÊ\˜\[™
ØÝ[Y[˜Ü™X]Q[[Y[
	ÚIÊJNÛ^Y\‹˜\[™

NØÛÛœÝJX]œ˜[™ÛJ
KKJJš[›™\•ÚY
‹ŽKOLN
ÓX]œ˜[™ÛJ
JŒŒ\›SX]œ˜[™ÛJ
JŽLØÛÛœÝ[š[O\˜[š[X]JÞÝ˜[œÙ›Ü›N‰Ý˜[œÛ]LÙ

H›Ý]V

H›Ý]VJ
IËÜXÚ]NŒ_KÝ˜[œÙ›Ü›N˜˜[œÛ]LÙ
	Ù
‹_\	ËY_\	ÓX]œ˜[™ÛJ
JŒN\
H›Ý]V
	Ý\›Š‹_YYÊH›Ý]VJMŒYÊXÜXÚ]NŒKÙ™œÙ]‹ŸKÝ˜[œÙ›Ü›N˜˜[œÛ]LÙ
	Ù\	Ú[›™\’ZYÚ
‹_\
H›Ý]V
	Ý\›ŸYYÊH›Ý]VJYÊXÜXÚ]NŒWKÙ\˜][ÛŽŒMÌ
ÓX]œ˜[™ÛJ
JŒLŒX\Ú[™Î‰ØÝXšXËX™^šY\ŠŒMKKJIßJNØ[š[K›Û™š[š\ÚJ
OOœœ™[[Ý™J
__WÜØÜš\ØÜš\Š

OOž×˜ÛÛœÝ]ÛYØÝ[Y[™Ù][[Y[žRY
	ÚÙ^IÊKÝYÙOYØÝ[Y[™Ù][[Y[žRY
	ÜÝYÙIÊN×ž^×˜ÛÛœÝ™[™\™\[™]È‘QK•ÙX‘Ó™[™\™\ŠØ[NYK[X[X\ÎY_JNÜ™[™\™\‹œÙ]^[˜][ÊX]›Z[Š]šXÙT^[˜][ËŠJNÜ™[™\™\‹œÙ]ÛX\ÛÛÜŠ
NÜ™[™\™\‹œÚYÝÓX\™[˜X›Y]YNÜ™[™\™\‹œÚYÝÓX\\OU‘QK”Ñ”ÛÙÚYÝÓX\Ü™[™\™\‹›Ý]]ÛÛÜ”ÜXÙOU‘QK”Ô‘ÐÛÛÜ”ÜXÙNÜ™[™\™\‹Û™SX\[™ÏU‘QKPÑTÑš[ZXÕÛ™SX\[™ÎÜ™[™\™\‹Û™SX\[™Ñ^ÜÝ\™OLKŒŽØ]Û‹˜\[™
™[™\™\‹™ÛQ[[Y[
NÜ™[™\™\‹™ÛQ[[Y[œÙ]]šX]J	Ø\šXKZY[‰Ë	ÝYIÊN×˜ÛÛœÝØÙ[™O[™]È‘QK”ØÙ[™J
KØ[Y\˜O[™]È‘QK”\œÜXÝ]™PØ[Y\˜JÌ‹KŒKL
NØØ[Y\˜KœÜÚ][Û‹œÙ]
ËŽK‹‹ŽJNØØ[Y\˜K›ÛÚÐ]
K
N×œØÙ[™K˜Y
™]È‘QK’[Z\Ü\™SYÚ
™™™™™‹ŒNXMLË‹Ž
JNØÛÛœÝYÚ[™]È‘QK‘\™XÝ[Û˜[YÚ
™™™ŒJNÛYÚœÜÚ][Û‹œÙ]
LËËJNÛYÚ˜Ø\ÝÚYÝÏ]YNÛYÚœÚYÝË›X\Ú^™KœÙ]
ŒŒ
NÓØš™XÝ˜\ÜÚYÛŠYÚœÚYÝË˜Ø[Y\˜KÛY‹MKšYÚKÜK›ÝÛN‹M_JNÛYÚœÚYÝË››Ü›X[šX\ÏKŒNÛYÚœÚYÝË˜šX\ÏKKŒÛYÚœÚYÝËœ˜Y]\ÏMNÜØÙ[™K˜Y
YÚ
NØÛÛœÝš[[™]È‘QK‘\™XÝ[Û˜[YÚ
™™™™™‹KÊNÙš[œÜÚ][Û‹œÙ]
KËM
NÜØÙ[™K˜Y
š[
N×˜ÛÛœÝ›ÛÜ[™]È‘QK“Y\Ú
™]È‘QK”[™QÙ[ÛY]žJLL
K™]È‘QK”ÚYÝÓX]\šX[
ÛÜXÚ]N‹ŒMßJJNÙ›ÛÜ‹œ›Ý][Û‹žKSX]”KÌŽÙ›ÛÜ‹œÜÚ][Û‹žOKKŒLNÙ›ÛÜ‹œ™XÙZ]™TÚYÝÏ]YNÜØÙ[™K˜Y
›ÛÜŠN×˜ÛÛœÝ[Ù[[™]È‘QK‘Ü›Ý\

NÛ[Ù[œ›Ý][Û‹žOKKŒŒÎÜØÙ[™K˜Y
[Ù[
N×‹ËÈÛÛ[[Ý\È›Ý[™Y\Ü]X\™Hš[™ÜÎˆÛ[ÛÝ™]™[Ë\\™YØ[ËÙ[H\ÚYÜ—™[˜Ý[ÛˆØÝ[
š[™ÜÊ^ØÛÛœÝ™\ÏV×K]V×KYV×KNMŽÙ›ÜŠÛÛœÝÚ[‹K˜Y]\×HÙˆš[™ÜÊ^Ù›ÜŠ]OLÚOŽÚJÊÊ^ØÛÛœÝ]XY˜[SX]™›ÛÜŠKÌ
K[™ÛO\]XY˜[
“X]”KÌŠÊIL
KÌ
“X]”KÌŽØÛÛœÝÞVÌKLKLKWVÜ]XY˜[JŠ[‹\˜Y]\ÊKÞVÌKKLKLWVÜ]XY˜[JŠ[‹\˜Y]\ÊNØÛÛœÝXÞ
Ü˜Y]\Ê“X]˜ÛÜÊ[™ÛJKXÞŠÜ˜Y]\Ê“X]œÚ[Š[™ÛJNÝ™\Ëœ\Ú
KŠNÝ]‹œ\Ú
JÞÌ‹ŒÎK^‹Ì‹ŒÎ
__Y›ÜŠ]LÚš[™ÜË›[™ÝLNÚŠÊÊY›ÜŠ]OLÚOŽÚJÊÊ^Û]OZŠ“ŠÚKZŠ“ŠÊJÌJIS‹ÏJŠÌJJ“ŠÚKJŠÌJJ“ŠÊJÌJISŽÚYœ\Ú
KË‹‹Ë
_XÛÛœÝÙ[Ï[™]È‘QKY™™\‘Ù[ÛY]žJ
NÙÙ[ËœÙ]]šX]J	ÜÜÚ][Û‰Ë™]È‘QK‘›Ø]ÌY™™\]šX]J™\ËÊJNÙÙ[ËœÙ]]šX]J	Ý]‰Ë™]È‘QK‘›Ø]ÌY™™\]šX]J]‹ŠJNÙÙ[ËœÙ][™^
Y
NÙÙ[Ë˜ÛÛ\]U™\^›Ü›X[Ê
NÜ™]\›ˆÙ[ßW˜ÛÛœÝY[ÝÏ[™]È‘QK“Y\ÚÝ[™\™X]\šX[
ØÛÛÜŽŒŽÍØË›ÝYÚ™\ÜÎ‹Y][™\ÜÎ‹ŒŸJNØÛÛœÝ˜\ÙSX][™]È‘QK“Y\ÚÝ[™\™X]\šX[
ØÛÛÜŽŒØXM˜K›ÝYÚ™\ÜÎ‹_JNØÛÛœÝ[™\“X][™]È‘QK“Y\ÚÝ[™\™X]\šX[
ØÛÛÜŽŒNÍÍ‹›ÝYÚ™\ÜÎ‹ŸJN×˜ÛÛœÝ˜\ÙO[™]È‘QK“Y\Ú
ØÝ[
ÖÌKŒÎKŒËŒŒ×KÌK‹KŒKŒŽKÌKËŒLKŒ×KÌKËŒNŒŽWKËŒKŒNŒWWJK˜\ÙSX]
NØ˜\ÙK˜Ø\ÝÚYÝÏ]YNØ˜\ÙKœ™XÙZ]™TÚYÝÏ]YNÛ[Ù[˜Y
˜\ÙJN×˜ÛÛœÝÙX[O[™]È‘QK“Y\Ú
ØÝ[
ÖÌKŒÌ‹ŒMËŒKÌKŒÌËŒÌŒKËŒKŒÌŒWWJK[™\“X]
NÛ[Ù[˜Y
ÙX[JN×˜ÛÛœÝØ\[™]È‘QK‘Ü›Ý\

NÛ[Ù[˜Y
Ø\
N×˜ÛÛœÝÚ[[™]È‘QK“Y\Ú
ØÝ[
ÖÌKŒÌKŒÌKŒŒ×KÌKŒÎKŒÍ‹ŒŽKÌKKŒ×KÌKŒÎKMKŒ×KÌKŒŒËKŒKŒŽWKÌKŒNKKŒL‹ŒŽKÌKŒLËKŒM‹Œ—WJKY[ÝÊNÜÚ[˜Ø\ÝÚYÝÏ]YNÜÚ[œ™XÙZ]™TÚYÝÏ]YNØØ\˜Y
Ú[
N×˜ÛÛœÝ^Ø[˜\ÏYØÝ[Y[˜Ü™X]Q[[Y[
	ØØ[˜\ÉÊNÝ^Ø[˜\ËÚY]^Ø[˜\ËšZYÚLLØÛÛœÝÝ]^Ø[˜\Ë™Ù]ÛÛ^
	Ì™	ÊK^\™O[™]È‘QKØ[˜\Õ^\™J^Ø[˜\ÊNÝ^\™K˜ÛÛÜ”ÜXÙOU‘QK”Ô‘ÐÛÛÜ”ÜXÙNÝ^\™K˜[š\ÛÝ›ÜO\™[™\™\‹˜Ø\Xš[]Y\Ë™Ù]X^[š\ÛÝ›ÜJ
N×˜ÛÛœÝÚ\˜XÝ\[™]È[XYÙJ
N×™[˜Ý[ÛˆZ[

^×˜Ý™š[Ý[OIÈÙŽÍØÉÎØÝ™š[™XÝ
LL
N×˜ÛÛœÝ\ÛÜšÏXÚ\˜XÝ\‹˜ÛÛ\]I‰˜Ú\˜XÝ\‹›˜]\˜[ÚYØÚ\˜XÝ\Ž›[×šYŠ\ÛÜšÊ^ØÛÛœÝ˜][ÏSX]›Z[ŠNØ\ÛÜšËÚYNØ\ÛÜšËšZYÚ
KÏX\ÛÜšËÚY
œ˜][ËX\ÛÜšËšZYÚ
œ˜][ÎØÝ™˜]Ò[XYÙJ\ÛÜšË
L]ÊKÌ‹
LZ
KÌ‹Ë
_W^\™K›™YYÕ\]O]Y_W˜Ú\˜XÝ\‹›Û›ØYJ
OOœZ[

NØÚ\˜XÝ\‹›Û™\œ›ÜJ
OO˜ÛÛœÛÛKØ\›Š	ÐÚ\˜XÝ\ˆ\ÛÜšÈ˜Z[YÈØY‰ÊNØÚ\˜XÝ\‹œÜ˜ÏIÙ]Nš[XYÙKÝÙXœØ˜\ÙMZÛÔYÍPPP–•R”U›MÐ[ÐPPPTPPPPYRPYRPTU^TÑÙÓÐPPP’UžS™ŽZÐŒ‘UQÖ•\Ü‘˜XŒÌU“X”ËÓKÌŠÝÌØžŒTRÑ]ÛZÒœ“TYRÛ\\UQZšÕZÑ˜VRÝËÑ•Ú“ÜÚ
ÌÍÖ[ØØž\”Z“R\ÑS^TN^]NMM[ŠØ™KÍËÎM–YÒšÒœž–”ÔÖ[›Ó‘Z•TÓÒ™Y‘›•YÒŒÕYÐUŒQYPQYÒ‘^Q”Ì^’ZÐÑ›N[˜ÝZVYÒ”T‹Î‹ÞY‹Ò‹Î‹ÞY‹Ò‹Î‹ÞY‹Ò‹Î‹ËËÖ‹ÎÞ
ÎLÓKÝ–Ó›XTŒÞUL™›ÕÌ
ÎÚÞJÖU”ÔÚ’‘ÝZÔ^ØUœTŒ˜ÑÌXÔ•‹ÑRXY–œ‘ZN\T]™
ÔšTMYÔN›ÌŒÕÝ’ZRŒ‘ÛÞšQT““M[MLÛŒÔÓ’˜ÍMÙÓ[SLKÍZÍÝ•™ÚÑ]ÚXšZÚ’Ñ›‘S\–]ÔÒÓR˜ÒÌÎTU’Ú’›ÊÞVÕÙ
Ü”YÎM™Ñ•’Ô•Ý‘‘SÜÝV[Z•Ùš’‘ÖQžSQ]•ÔÚÍ^Q\˜Ð–žYJØÌJÞM]ZYØXÌ•\šÌ“›PÍ˜ÍUQ[šÒ]ÚœÞ›˜RJÓSœ‘›M\U™Ñ”žÕXØšŒÑT”Ð’[ÐÊÒ“\P“œPÖQU›ÍÕœ™]™ÕT]Œ™RSXÚœ[TTM™™ÑS\ÚžP\Ü•”ž’œÐUÕQÒQ[ËÙÐ]Ô‘Ð[ÜNYÜ]P\ÞR[TÙÖœ]]UÞÜŠÌÍÞPÐM]™“ÒPÜPÐT^TœP\“ÌÌZÛ‘Ñ‘Þ™ÍLSŒŒ^šUZ\\“Ù˜NSÓÞSœÑÓ”Q\ÚUL[ÙžYRÑÚÙ\QÝ^ÛÒL˜ÚR›™ÓÌÓ“X’ÜMÑT^^VP’Ø^XÚ]ÌÓPY“ÛÑ“RÕ\œÚUÜÞ^SÛÕÐYR˜ZŒœœ”SœÌLžžQÌ]žRÙšÝÑ’S“’Ý“RT’Ü‘™Ì›ŽšÞšVMM\ŒÌ•–SœÝ\\N™Û[”œËÎ•ÌYQÖN[MÞNRÑUÝUÊØÓ\[LZÙ˜Í›ÒœÎQZLšÙ–[UÜÛUÌœLX’JÔ“Í›Y[Y[Ú\RML•ÍËÙ•TÖ•šÕJÞžÞZ˜Ó™]X•œ˜Ù™ÚNSŒ•ŽQÝ\SMÊÑÝTKÍØ™Z””ØÛ\ÍMÑœÚMÛšXU•’ÊØÜUÕÎ^
ÌØÖT’•š’ÔL^ÜRÎ›ŒÍLÞXQÑÓÓNKÑXUZLØŠÙVš‘œUV\MM‹ÝXJÌ”ÊÓ‘ÑÕ˜Óœ^•UÍL’‘TšÓÝÛLž[M“ŒÑ\”Ò›™’^žXÍœÍ“ÍYNLÓ]ŠÙÍ\Û–™ÌÓQ
ÓÔ›™”‘Ð‹ÖXÖÚZÖÓÞÙœØ˜LÕÍØJØV˜ÕÊÑÖ™›ž™ÌžžLÛTKØšØ”ÕR™LØÊÒMÝ”‘™‘Y\MÔØTœÞTNUÝÍŒ“Ù˜\P[‹ÜLž^^ž“–LLMÙKÛ™[Vš’‹ÊÙÍXžÖPÐšš›ÓÛUÓS”]]ØUMÙTÓ˜œÛ[Ó”\ÕšN™”’ÝÑÒ“NQ[Ü\\‘ÓÙRÖ•š^’Z•MR’’’›[ÔÚ•MÜ“QÌ”^’Ð™–ÕÓÒŽÜÜÚŒUÛ^]RÚUžM“ÒŒÛPØ•LZQÞ“[Í›š’S•ÕšØ^Ú›Ò•Û^PÔ•œVZSš›Ö˜QÌÝ^UÒÝX‘™ÕMžY‘ÌœÓ–˜Ó\•QLž“ÌT“ZXÕÜÖ‘]ÔRÝQ\ÍÌ›QžÞÝ“–TÒMÔžJÕSØUÔ“ZQ›”ÜQY\œš–šØ“›ÜV]ZPšUÙX]ÓRÚMY]ÒÚŒÒL›L’UÊÑMÒŒÑXšMÊÐÚP•
Ùš^žš˜•ÝÑÒUJÚœ™ŒÚÒÞRÚ˜’ÜZS‘ŽSš‘Õ\ÍÎ[™RšŠÙVTÌZŽÙUU›ÖÙRZP›PÒÝP\ÐÓÙÝ”Í™ÚSÔÐ^–ÛœÑÌ‘S˜ÚQ]ÕØLÓÚÌšRÎZš[ÛÑÖŒ“ÑÐRTœÑÖ\^^[X™S™JÖŽÙÔ‘RÝRLQKÝ•œÙÚÐMÐœÔÌ‘•Ô[ŒLÍJÝ‘ZÙ‘ÛÔš\žÜ”Ô^Œ•ÒÚ•V\UYŒÝžP•ÙÓÐœÝ^TŽ]Þ™ÒÙÎVÝLÜÌ”Œ^R^•ÙY]ÌNÙÞ
ÓÓÞZQJÝL^LUÙYTÎPž‹ÙŽÔŒœÛËÝL“Q’LRÊÍœÚÜÔ›JÌ’ÌœÓJÎZ‹ÊÖ›Q]”KÓÓÝ\Œ”ÚÍNÞY›ËÜ’›RÐYJËÍS[•S“›ŒÑ‘‘ž\šÒÜ“”Û›XTŒS•X]ÝÞÍÕ^ÓÜYMQÖÜ‘ÖLŠÌÜÒž–’ÚœTÓ•ÊÑÌMZ˜‘LŒM]\œPMÓS^ÍŒX•R˜ÑÕÒØSLZTÌ
ÑYXSŽUYÕÚÝUSž]SÓ^[U˜ÒŒÙTŒÝTŽUžTœ™’ÊÎ‘ŽQØÎœ™žR˜PUÖUŠÕÌZÔZ]ÓÛÚŒÌÔQ™ËÛÞPÔ•ÐJØTÊÌZPÕšžŒ™YÍ[ŽUËÚÖZ“™ÖV–XÔÑ™ËÛØJÖTJØTJÝÕ”M™ŒYYR––•‹ÕQÚÝÎ’ÊÜ–Ú^ž•›ÛØÞŒU™RVVžŠÛÍÚPÙ‘Ð’Ù“œ^RÑÑU\žÑR›ÛÕÛŒÔZ‘“Ò\R•]ØJÝÑY“KÌNSËÝÛž”šR™Q\”Y’XÖšU”Ö[Û™Ó›ÊÒXXžŽÛÔ’œÝ]LÒ’ÙQžÕœVVUšÕ›ÝPÌ’˜Õœ™\ÒZ’Î[YÕÑ\ÛžŒ\YœNXZœœ•ÚÍ‘ÑÌÍUÕÚÌÞÜÒZJÙÐ‘]’Û\ÓPUUM’ZQPÐMRÝ]ÍšÎPRÓš‹ØÚÍÝLÛÕÝÊØŒÎMÕÍŒ^R]ÊÜL[–™ÝÌNULXÌZÖ“ÑU•TØ›Qž˜]ZUØUUUY’”ÛVZQZSYNYØÌT”ÔVÓÖY“Ñ[\QÝ–KÑP›ÒŒR•SÔÓ›R•Õ]ÍÒÊÛÑXM[•YÓRœœTY“ÖY“Û[ØÞŒÐM[[VY•TZLÙ]ÎÒÓ˜šØÝÜŽ•ž‘[œRÛ\SZPZÐ›]LÓØ[ÊÕQT‘ÍÛMÌKÑœPLŒÜÑSÔ’ŒÝÒÕ\SY“–‘–œšœJÍ™”PÝÔšÝœÒZXÖ–šUŒ[SÔŽMZTÓQš’šZšZš“Û•TÌÙÓ^\’\Íš[Þ”UÝS’ÞœÐÍÚVMÒÛQÛ™ÍÔÎ[Ð“™VXŒ™[]QØÒZŽ›ÒJÚÒÓÝ‘Vž˜V]MT\Þ•Ž”ÚÒÝšÔž]’[PÙÐÛ‘ÐÝÔ]PMVP“QÐÌÙR\ÙÔPRUšYÒLP™Q™QÐÖSšž”TPšÐœÒVQŒZ[ØÌLÕXÚTQÕVPÒ”ÐMQL˜^T”PUVÛVSœÎMPZšÝ]••P‘VQžŒP]šYÚ”SÝšMÓÑ‘Ñ]ÔSÑ”\Ú–TQÖTšÞ’ÔÑÓ\žÕ‘SŽLYÒRL“Œ‘ÒSÔPU]LšÖ™žœÓQ‘ž“ÞVX‘šÖSÍTÛÛ’–TÛšV]ÝQ”KÓŒYYÌ“[RÜQØŠÐMM’ØYÓTÚÞTS‘JÓ^šJÕÞÔ“^›ËÎ
ÕšÐYÖ[œYR‘]ZŒ
ÙšŠÍPP’Ú’]ÊÔŽ’•TQV^ÌSšZTZŒRUØT›
Û’V–ÞY“ÍÕQÓÑT‘SÔQJÐY”š“QÜ]ÌS™ÛÓÑPÐ‘”SPÝØU”TLÝQÚ‘M’ÒÐ]Ñ“š‘XÖZ[KÑÚÑÙTÙ^ž[šÎ]ÞÑS”›ŠÖšØÎQQŒÑQÙM
ÑÑS›“Ð‘’ÎÐÎ•‘›ÓËÜÕU[]ÑÙÒÞŽLMÛ’[Þ‹ÙÎÓ\ÝØ™ÛÐÌ[Ñ›”L^‘Ô”]ÒÒÍMŽÚÝ™QLÐ\Ü“ÑÔÛ\\•ÚÜÓ[Œ]ÚÔ•“Ì›ÐŽUÖ•‘Z]UYÓUÔ‘YXNŒ’“UÚÔ–ÓÚPÕQžUÔYKÔ‘Ô‘U›PÞ]Ö\QTšØ”’TLÊÓ˜ÞMÒLÐžKÑ
Ø]ÕÚXÜQØÌœÔÝÑ\ÊÛÎ\Ó•ÒRŒ•’Ù˜Þš\M]ÜQÌÍMXÖV
Üž^ØÌ”–Ž\Þ”Ú™ÞŒžT˜ÓÜÚÑ”ÚPŒYÌÓÑ›ÚšÙÒÒÚUÐÑZRÛ^RVSTÌÞUUÑ‘Ü“ÍLÒ”[P›Ì‘ÓŽÜÑS‘LÜM‘•[Ù[S•ŽR™ÒÕS‘U›‘^’KÔ‘Ó\š“RUT‘MÜ˜’[ÚÚ[Ú\QQMÎÔ”Ð[XÚPÑ•R[PUTTœ’PÌÝP’UYZÐž[Ì‘P^\Ò\”ÕZÝÔJÝÛÓ•‘•PÜPšÚÐ\MÐœÛÞP”YÎRÛMÜØZÙXŠÜÞ‘LT’ÕMLSÔÙÕ[^XÍ[ZQ”Ô^[QÚV\“R•]ØØÑÕ]ÜÔQUMÔÐÍZ’TÕÍRÕZ”–’Ð[”T“Ìš‘ÖQÕ›ÌÛ˜S›ÑÚÒ^š‘‘ÑšVL”ÒžÚ’VSZ’ÙÝSPÕÓÔ[ÓÒRÔU’PÔ›]TS˜RÓMV›œ’M[ÜZ
ÓQNMTQÎ‘šÜÔ’ZZÖÑÛZMSX›ÙÒMÓÐQ•ÓZšSÐŒšÔ›T[PVVTUÜ’RšŒœ˜TÚšØ\ÒŒZØÛQÜÓÕÕ^[NTMœÑØŽQKÖMž]ÒÐRÙÖT”[Ý“P^\‘Ì]Ø‘Î“PÐ™ÕÑ•TNY”“ÜÞ’˜QN•[›QÚÞ]ÞÔ“ÍZÎVM^šÐŒÕÕ”V“ÛÕ[ÓŽYÕšÕÑYUÓÞ˜ØØ›œ]YMœQKÓšÛXŽMNÕ\Ì^\ÒÑ”•œ”PÙ“ÒNNUSVÚÚŒXXØ–’ÜKÍR›VLÒÝÓÕUÞ[R‹ÛÓUJÌŒÌÔÛÎVZLœ]Ž^–ÌMÎšÚÌŒÑ•Z’[–U™Ù“ÎÑÓ[ÊÝXÞZ]Ò•Ý’LVŠÖŒÑÔMÕŒÕÚÝ‘ŒÐÖS˜˜œXœ™››ÔÊÜTKÍÖ’ÝY–ZÐMÌÕ•ØÕŽLœM’Ý“LJÍZZÍŠÌQšÓÞ™œMÒËÔÍ’™ÝÛ–›ŒÌ^ËÛ\YÜ[ÍQ›šV”œÔN]UÌÔ]ŒÑ\ÛÓMÓÕMMØUJÒÝ[V”œÑVXÌ‘Žš–›œ˜’šÛ›‹ÓÝ›Œ•Í˜ž‘V\’™JÍN[›ÒÎLËÞY‹Ò‹Î‹ÞY‹Ò‹Î‹ÞY‹Ò‹Î‹ÞY‹Ò‹Î‹ÞKÍKÙÕ›MQ›ÜPQÊÐPÙTÜ[–PÔL›QZÚÒ^œZ^MŒPSšUÙKÐÍ^ŒÓÑÙ”Û™˜Y^VTÞLMÊÐ][UÜŒÒ‹ÙÎQÙTÓŽ]šŽ\ËØTÚÎ]ÝžÌ™Y“ÐŽÙŽ^›ÝŒMÐ’ŠÙKÍœÝ“XŠÍÚ
Î‹Ì–ÙKÕQ‹ÝÒ
ÍÍŒÖÒŽ\Œ‘Œ“NT^‹ÚQKÝØNSËÍžT‹ÝÝœŽTŠÑŽQJÝQÕÑÞ™Õ‹ÚËÍKÛ™]ZŠÜÞž“
ÙÎPVKÜV
ÖLÛLŒ™‹ÒNTVÚŠÞYZ[‹Þ]ŠÔNYÑœÍÌ‹Ì\Œ]\Ö”–ŽZÍÔSŽX™]ÌJÞœY]ØŽL”ËËÎÚ‹ØÚÕT›Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó]’ÌÍ˜ŒÐ™MÐ™MÐ™MÐ™M›NMU\œSÍ˜ÜŽÒQ^––žX•ÕœÓÓÓÓPž”TLQËÚÙÑŽYKÓQ]žŒ’P‘Ø”^˜QØ”^˜QØ”^˜QØ‘ÍÓ–Z\[\œPXÝ˜ÓRÕÝ‘Ø”^˜QØ”^˜QØ”^˜QØ”^’\Œ^“ÖÌRYT[™R”QLšLLšLLšLLš›^ZÍš^\Ì‘ÌÌŒ‘ÌÝ˜P”ŒÕÐ[
ÛÜUÍ’œ
Í“Õ™MËÚŽ[VQÍZZZ[Z[YÌŽŒRLÍLÝŽ›TT”œ˜TY“‘˜ÍL“›žTJÛXÖ”ÕÝŽžPYZLLš]NTšPÙ”‹Ý]ÙM^]ÍRØQŒžNSMÔÓZ›Þ^KÛVKÛVKÚ•Ö‘“[Þ”UÛX‘–X–›•U[YXULMÚQ™V™ž“
Ö™ž“
Ö™Ý[’Õ’››ÑLÌ‘ÔÐVLÌŒ“ÝÒU•LÕÓÓšÌ™
ÒÕYZ™ž“
Ö™”ÓÌ]Ò“ÚSJÛX”^˜QØ”^˜QØ”\ÑRÓÛ^UÝYÖ™“ËÞYžšQÝÍJÝSœ•˜ÒÑ–LÝVKÞ–X›KÌÛ–š‘ÛÒÜØ”“
Ö™ž“MR™[ÍØ›œÌÒ›
ÕÚ‘›ÌUM^ÚRÒ›Ó^”šÎÒU–UM‘QÍÜÝRY\ZSQÊÍQR–X^œÑÔÎLMT\ZÌKÙ[ÙV]ÌŒ‘ÌÌŽYÑœY‘S^ÔÕÖØLÙ\\LXš™
ÑÛMŠÎYÛ˜RÚØS[’QÍÛÔØXš›Ú•[›™T–V‘Ôœ‘›Ó]ŽRÛÙÔŽ^Ó\ÕL˜ž“Ó•ÔÎ^]’ž”‘“[Ø™]ÔQMRÞšÕ›ÐÒ•’ÙÚ]ŽPÌÍÖLNP•PÓŒ’ÓSž–™[›^ŽUÙœLXÒRV–Þ‘M\ÛTÍLÕŒ”]œ]šÜ•]’‘UVTYSSÑYUZÎ]›“MÊÓŽ^TÖLžËÞ“‘œ^M^˜QØ”^–MœÖ^Œ˜ÑÜ•LSÓ]š˜ÚÞÚSØXÒMT™ØY•Y•PZ^“”ÙLÚ’Õ“ÐÜÖ‘VY“ZÛZÜLÌž”[ÒÒžS˜–ÜNÍVTQ™™]ÊÚMX’“L’P‘Ø”^–ÙQÌÞ^ŒžXš‘›Ó“ÑÚPÍZ[ÑLÜœ^Q™ÛU’YÒÖ™ÐÖÒU–”TUÔKÎLUVŠÜ“]UšÒž\TÙ™PÒŽ[Œ”ÓSÙ[ÙPÑÑØÔ]NKÛVKÚ[ÛKÕÑÓSYÜ]Y•ÖšÞRS“MÒ]šÎLÐQŒ’YÔLLX‹Ð^MÚ“ËÞ–“˜”Ì“˜”ËÓ”
ÝZÒZMRÍNÜÙÙXR™VŽR”SÌÕÔ“”TËÛ•Ò\™ÎML[ÙÝ˜ÑÙÜR[ÌÜ›ÜÔ\ŒYœ‘JÌ“™QÝÛÑÐ“LQRQ˜
ÐX›ÙLÝŒÝSÕZÍÓÐÞ•ÔLMÕZžT]SÝ™Ñ›L‹ÝÛZ][ZRÜLÌŒ‘Ì˜ÍL“MŽž˜žUÔÖ[Õ’PTÌLŠÛ“ÜQ”Ò˜L
ÚZØSš–^–]ÖÖU[ÌÕJØŒ˜ÌÞKÛÔÑQP[“šÊÚŒÞ‹ÜŒT”^˜QØT•\’ÌX“Q•ŒÕLZUY™\Î“–\ž–•PÝÜÛÔ›ÝÓŒL”ÕZPÙš\ÕÙQ“^ZØÝ‹ÜLPšÛ[LMS˜ÔZTYNÝ–˜Z˜YŽL]^›LÌŒ‘ÌÌ‹Ì•’œÎÓUT›ÑT‘VQÖSXZž˜ÚÝœÌÒ‘Ò“Ý‘ÔT‘MÓ^ž‹ÝSÞÝ[”VÌ”‘ÝÓU‘ZP]SLÓ‹Õ™ÒLÚ•’]Ò›N^•ÜÊÎVÞœ‘Ø”^˜QØ”^–žTÚYÜÓÙÐ^LÓžŽÓž˜žÒÝ™”ÞŠÖ^Tœ
ÒÍP[ÍÓPÑÜM[”NR•ÊÝŽ]SÒULšLLšÔ™ËØ™ÛÑMÓšÌÙ–›S–’ÛÊÚU’Œ’^ÒÚÚ’ÕÙ‹ËÖšžÓÙQX”NM[Ñ\X˜ÙŒN]œP‘LSÚ“™ÖŽPÔU•“LŒ‘ÌÌŒ‘ÌÌ•Ñ›U‘Û]JÐÓUšUÚÚÜ\‘ÜUQŽ›Ì’YØMŒ‘‘ÑÛÝTM˜š^žÍ]TÚM^QÓÓUÖKÛVKÛQžœÚS”ÒÖL“™’]žQ’ŠÕM”^Þ‹ÒÜÛYS›UÐV™Ì–Ó
Ö™ž“
Ö™ž“
ÖSžŒNYÓ][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][Ó][ÐQ
ËÔPPPPPPPPPPPPPZ›ÐM]ÕJÌ]U‘ÛLŒÍ]ÓKÔ\VRœŽUQ•“–œÚQ^Q™QØ]TRQ[UPPTšÑ“Û™Ø”RÒÙS”ÑÐÒ™ÒÑÔU[]\ZŠÑÕœMQØÍÛØÎYØ]Œ•ŒÔž‘™ÜÎ›QÜ™‘•NÕYUTÕŽTŽ\ÖL™^[Ú\ž’Ú]ÑNTØœX“ÐYËÌRLÑMÙš™T’™ÝÎÝÍXMŠÜLÌšœTS‘ÓMÝZ‘™˜™Y“”[Ó^™S’[Ý]ŠÔ”[SŽS\QXØÌ‘ZÑLšL[ËÝŽLÔ\NRRLSÍ[ŒÓ[ÞMÜZŒXJÑ^ÐPÜN^žTSRXS[™“ÒÚ‘”S\•ÜR’œÍML“M“[–ŒÒ–ŒÚUÞR’šÎSšQTÖXZÕØY\Ý’ËÚTÔŠØÍXTÖ’]ÒÖYSÞQ]“ÎÑÓŽVÍ\Y™T•“P\YœÑÓ›U“ZÜšËËÚÙRœ”M–]L“Z™^’ÔÜÚNY]ZœÑšÓUÒMÞ•Õ]LJÜŒÙÒ–œRÞ]ÛÕÜYÐTQÙTŒ“[ÒÔšÙ›“ÌKÔŽ]“ÌR™œTÝÍÞÖš]^\™QÊÍ[TÍÙœRJÐÜÛ”RÌÊÍYQ]“ÕÌV•ŠÐPPSÐÚÖÑLÒNUYÎR^‹ÔÔ–S‘‘\ÒS›˜\ÑÊÐZ’ÔZØÐÍUKÖ•™Ò^\S™•RNTZURS˜ÔšžšÕÖÑÌžLTUÍ’Ù’[–ŠÕLŠÚŽKÛZMÝ[›–šŒS‘’ÓÍÛ›Ì›]“ÊÙÜQ“ÍÑ]M]M•ÝÕÍÌÛÓMËÙLÚÒšU‘ÔTR
ÛÛMÚ”‘ÍVŒ–VZÚ‹ÝÌ•ØÛž““Y[Ù‘šŠÔÕŒ[ÞS”
ÌÓ™S’Ù]NZMSTR›Þ’™ŒÜ›]™ÕÞŒV’‹Ý•™™]”PQ›YTYØLM›Ú]ÜPZ‘T]Ý\ÎÎÔR›SÚÐTÔ™•ÊÑY”ÞœÝL›žTZX”YU››]KÎ]šÝ”‘ÒÞ˜Ö‘•’Ü™\ÓMÔPœšLUž]Ü[ÜRSZ–LÍšœM]]ÐÝMÌRœÝ“–“\“ÍŽÚÎUÒT™VYÝ“Ô^MYXLØ^™Ö[Ü“QÜ˜ÑÐ•™ÎR‘Ý”Q“U™YL‹ÒÍÒV[ÌÑÞM•–UÌÝR’RšÍRTJÓVPQYZTQS–\ÚÝVÚÌZšËÛU]SR[YNPZ”V[˜ÛÝ‘RŒ•NL]Ú’’LS‘ÚR
ÜÙÖ›S^Ý]TRÜËÊÊÕ™S^ŒÎ[ÍÔÖŽÜÖPŠÑ•–›QXNž’›ÌÝYÌLLÜÜ]Ð™™Q”YÙÜØY]Ñ^ÍšÎY\‘ÒYSžÐ[˜ÜMP˜ÓS]ÛÚŒšÕTšURTœ‘^UØ˜[ÐÝX”œYM[RLTÜ•QÐ“ÔžVV•T•’™Ö[YRÛÖ[šY[ØV[PXRœ”QØÜ]RTUÜ[ŒUNNURÓ™ÚRÕ–’\[ÌZ]šÚŒXÛU’^M”Ò•ÚP^YR•MMVÔÑYŒYÕJÖ]\™ÌÖ[Ò“ŒœVUÖ˜ž^YY“Î\šÜœÝ’”JÌRQM•JÎP\’šÑÞž™Õ˜ÚS’XœÔSÑÕRÓZÝUÌ˜Ž[ÝÔÝ\Ø›‘ÖUšL•T”ÖPÍJÔSPRÜØœ\•LÙÓÌVLšÜ“ÌÛ”ÜÑœÐÚš˜œ’MÖJÓ]ÖUÔUÕÝœ]š]ÐÙ“SÑ–ZT“\Yœ›žÐPPPPPTŠÌÔPÔ’™\Î\ÞØJÐKÌVV›ÑÓMÐ^–Ð“^YÑLPRS”S“ZQÞ[ÎÖŒÒX™]ÔVLÝÌÍÔX][Ú^”U‹ÓÙÝMÒÌRÝ
ÛÖœ˜UM[ÑÔØV•LœÌUØÒÒXÓÓPYÌSÐÜÞ]YÌT\œÕV]ÞQ–šR›YL\ÑÔ™ÌÞS–‘ž‹ÔÙÛXœXTR™RÑÌÌL’ž›Õ“ÌQÖœUœ’’ØRTQÓMM™
ÑPUÛœÔšNÝ›”QÍÌš›”Ì•ÒZ–Ò\šRÔšÖJÝ]ØÖSSÖ™’–LÞXÌœÝRœLP’P˜Z–LÒŒš™ÛRžN•ÒÔX’[NU]Ó[ÙžžU’Ô‹ËÎQ˜\Ø™PSËÚLœÎMÖUÒ“ÝÐ›ŽSMTYQ]œ•ÐÛÓ™žPËÜ–Q\RTZS”ØRÛŠÜÕœ]Þ[SLÔ\ÞRÛœÛX’ÌÎÞ[\P“U[YUÜ“ÒÚ˜‘]ÙKÍ–ŒŽQŽMX•ÝS“PÒÔ“˜RÒŠÑÛÑY‘ÚÓÔYœXNœ“˜UŽRŽ]’JÒS““PÙ“”QÐUÛÚŒÙÎUZœ[YT[ÕTœ\•TÐ–•ÐÝØ]ÔŽRÒŒŒ™ÛÝ›ÌTMQQNPT“SS]ÝNNQ^ŽUURØŽ“PÝ’Z’XŽ]”Ì•MÞŒ–XÝÖŒ››MSS”•›ÜŽ™\ÔÍÚURÝÙÌLžV“œLÖLQ™”›MSYÍÓ•ÔŒÑQÍÛšØ‘žLÍ“[R^T’U]’MÝSØYXÌRSS›šÍ•ÜLL˜œR\ÕÝLÝLœ]ÐÕÑT^X’ŒPÓÍZÖÎL”›”SÝQ”™Ý\YL\’LÍSÜ•Ô‘V[ÓÊÕ•ÚŒ‘ÔŠÍŽŒ•ÚMÝÔYÖP•U“^ÛRLÞÔNM˜ÌËÜM^ÍŽRÍÞœ™S‘”Ø”ÔZžL™ÜRNQ–MU–XÞšÌSÐR’ÔŽ[ÒN
ÌM›šTŒP–ÜPŠØ’œ•Þ•Q“YÕ™]–[ÜžVUU]\U–œÓÔÙÖ˜Q\ŒXÓØ‘ÛÛ[VØ•Œ‘Þ–“ZÛ‘Q–™RSØÛ”Û”UÕÝ[ÞžMŽ
ÍÍ\Ú“ÓÓ˜Í™\S^œ–‹ÔÒRÔšLL–[ÓÎÒÐÐPÛ›PXœ“\L
ÔÊÍÛUL•XV™”“™ZÍŒž˜ÎÝRXšÓŒ’\YMÞ]MŠÌXÑ“]ZÙÔ•˜NS“QÚÑÒ[™ØVŒØUÒÔÌQ\ÛR\[–QššM–žÜœJÐ”SŽTœQÑÜRY’N[–MPMœÛ›ÍÚŽV›Y]PÐ]žÎ
Ú™Ð\šœÕ˜TR^U]ZŽY”ŽLÎRQ][‘‘ÜšT]ŒÙœQ\ÐœÑ›MÔNž]™Q[Ú–T^L[LTPÔ]U”\ÝœRŒÚØY\QØSÕšRKÒ\•‘œ[žŽÒËÞ•LZÐ[ÕTUP[ÔÜŠÑÎ”ÐØËÓ\Y]˜ž–ŒÙ\QÜ^QÝËÕÖRÔÚVQ‘]ÐžM‘KÐQ’‘S”ÓXÐÌ
Û’MÜ–›ÜÝ\Ó“ZÚÔ
ÞXM“•MØÞ›[TXØÍÎTÚ’MŠÑœÚÛ’SÝ“Ù]Œ˜TšÜ\•›MÝŽU™SšÍ]ÙÚMÜšJÛXÐ‘ÜÑYÍÙYšÒTÙXÍÚ’]ÕŒÞ‘ÜÝ“^ž™^ÖÝQÚÙÐMSÝP‹ÑÖRMÓÜÒKÖRÜLYÜœZÓÌÓÚÒ“ž‘–[Í[–\˜–V‘MNQZÍMÜÔËÚ^Z“›Œ˜Ú[LS]•ŒÙM–•Ò™N“ŽQQÖÒ›LÞ[PÝU”žÕRU•ÒÕ˜œÎÜÌ’ÚYLJÜÔŒ^›ÑNZL“Ó]–•YTÙXš™ÞQ’\ŽUŽÙ•ÎSÕJØ•Ö–šZU\V–RŒŽN
ÌŒ\‘–ÌËÊÌ’™S[Ø•Pœ]•‘]ÐNSVTÌ[S\™ÌLTÖ”\XÞŽQ”•L’ÜPYZ]”Z]MÔLQ›Ý^›••ØÖ’PÐ‘UÖž‘–’ž’ÙÚNNV›UÒŒÑ–’ÚÚÐš›NMZ^›œPV\Ú™TÊÙXÝ–[KÞ”YÝM“Y^–\[JÎ•R^š^U’
ÜŒÞZÞ˜Y^ÓÌÚ\ÐÛŽT’œUÙ]Ñ›RÛ•œ•’U[UÜÕÐ^’œ™‘Ð˜ÕL^Í‘œ™Ö’Ü]ÜŒ\‘ÒV™[SÒÚR˜ÜLšÔSPÖQÜž\SÌœÊÝÚ\•ŽUž”–ÜÚ•ÎRÓPÍY\ž•ÜZS‘V’MŠÒÍMÓÞ[
Ñ\“˜š“Ì”\ŽVŒžJÊÛžY^ÒœÍÌÖV™YÔS•ÔLÒÌ“Ø]’Ð–ÝÒMÐÙŒN–“˜QÚ‹ÖUÌÚRÔÑžQ’[Þ[TYYÕŒÕXšQLÌÙÔ™MÍ“ÜÒUÕž’UU\ÑÛÓÊÍZÌÛT‘ž“MQTÐ™”ZTYÝÌÓÌ‹ÐX–]ÕÜÝÝ[PS”‘Y•‹ÎÎRV‘Ó
ÔZ‘‘Ú–›Ù“^Ó•X]Ô‘”\PÒRZUYÐ˜“ŽQ•˜ZZY›”T[SS›‹ØSÒN\PZÚ’Õ™”Þ•ÚÜÔ˜ÒžL›Ì”–V•ÒŠÜÛ‘Ñ“TV›]ÍÊÍÖY^œUÔœÍZUŠÓLÐÛÒÒÞØY›TÍÒ\ÜØÔÑÌÓÜZ^“Í”ZÓ˜Ž\”XÒŽTUM–ÒÎÒZMSSSXŒUÐN\™V“ÑÎ•“Q^‘Ý‘ÒÕ›‘XÍY™RPS–TS^˜KÍT‘žMRœÒÐØÓÕT“•QLV’Q‘›]Y]™ÒP^™”ÓÕ“”ÝÜP‘QœN–[[’ÌØÎ\]œœ”•ÕÌÓÕPŽMžœ“Ú’ÜQÝ’YLRÓÙÝS›ÙZ™MÎ^]–PYNÖUÛÒ‹ÝÔŒ‹ÍÒ™–žQRU›Ý[\S]ZÖX\LÔMËÜÔVœÙ]“ÍSš™Û™TZÝL™ÚL•ZY•’Ð•TÓÓ[ŠÜÌšÙØÚYŒPL“ÔÞPÒœUUŒ”V™\ÕÛÑV[^šÍÜÔV›LÐÍRÕÕÚ“M’ÊÕRÓžP\ØÒ‘^ZP^•[\Þ–TQØÔ[ÐÍX•ÒÕŠÔÎU–Y^^•SÍØ\QžÍÎ“^Ó’PÓQ•Í\“ŒØØ]ÝÚRÔZ”UÙÑVQ™Ð\“žUÖUNY“U[Y‘“Ý–œPÖšZ™Ü™ËÛŒY’ZZš\ÖVZ˜•›œÌR–PU•^PÛVÖ”ËÙÚÍš\ÕUMTÔÙT›YÑV\ÞP[ZÕ‹ÐÐÍSÐÖSÜÑX™ÙÛÙŒU’ÒžŒQYœÔXÐžÐ\‘ÓÙœÌÙ›ÌM›‘ž‹ÌÙ–Ú˜Ý\SÍYÐÒÍPQ\™ÍÔÕœ–TÌNYX™RÔ“ÚÕTUÌšT\Õ”›Õ›JÛT“R^R™^PÛÐÖQTŽššÝÚZÛÝÛÖ[ÑžŒY“””•ÜÌSšYÕ•Ú\S‘ŒÚRÚRVKØ“ÍÔUÙÞ[PÓÓžÛSRÒÜQ^•ŽÚ[ŒÌR‘ZZÖŒššXÓ[ÌPœ˜]Ö”Ó‘•™]ÍÍÐÙÞš™ÙR“VZÚŒÝZ™Ì‘‘VTRÐ›ÑÑ”“XÓ^ÚÔXTÖLÌÍ•ÓØ˜›Õ˜›U”Ö^YPÞ–PMLÒZÍÍÖLT“–•QÍÕÎZTUÎS]PÚYœ‹ÑÙÙ‘ÛÙUQÍSÍYÙÜÒXTŠÜœPQ‘RSÌÓU™ÑÐÜÊÞ]R”^ŠÐÜØÌ’›UNŒ^“STYÙØ˜ÕY™YSRXÍ•R•ÌÎMŒÒÞ”Ó\ÝÐœ”œŒÞUÛR’RÝØQÜ•UššÚ[Ì]ÝÙJÝ[Qš‘”ÜSRÐRÍÓPTÖ^UÞZQ™Õ–ÝÌÝÍÍš›Ž[Ö[ÎÔXÓÜQU[Ñ“^““Œ›ÝSŒT™ÓØÞ
Õ[Ù’–Ýœ]VÎV”ÚŠÙ””MÐPÚZÌ–]ÑÓÚžSÒ“UÓÛœÝÙ™™T‘[YX’‘^™’ÙÞÔÙ“]ÜM‘ŽLJÍVÝ^RLVœÙËØš–ÝSU™•^L‘™ÔÔMÜ”T[ÍSLÒ‹ÌŠÓ\LØÞRÒMV–XL“^–[LŒÕ›JÐLÜÝØ\”]”Õ]ÊÝLŒU•^]Û’“ÚÙÕŒÞQJÚPÌŠÓ‘ÒVXJÕYQZÙš•ZÍÑÓÙ•ÓÒRŽTÒÚž’[JÒYUÑÕQ”ZYZZŽVœ’]ÓÙÝMÒÖ›TÛ[NTX•Ð–œÚU•ÛUUÓU’’SXÑÍš˜Ñ’‘]’ÛXYPYQMÙÌÜ’Ó[Î
ÔÑMM“Í“ÓÓŠÜÜ\MØ’Ö^ULÐ•ÛÛZ’R\“Þ‘[ÕØQÛÑLZPSÛPU^Ü[•Õ•MÔŽX]]™Ó[’M]
ÖUZÜ“Ì™Q’Ó\\ÓÎRÍ‘Ð\“•JÚ•L\šLVSšRS˜\ØXQ˜SÕšNR›Vš’^›TÖTÚœ˜LÕ“L^L^šÞVžœËÌN™LÜ”•ÍYÕÞ\ÔÔžT\[ÌÑÐLØZÒÞ[‘–ZRÚÌÍÓœQ™ÕQÝ]UŽMLž•ZTUÚM’‘LSš˜[˜–RÓRÎ]PYY˜›ŒŒ‘‹ÜL“ŒZTÌ™Ó’–ÖR‘ÒÛÞ[SŒÙT˜š›Y’”YÚ]ZŠÎZÖ”^ÓPÛÞŽÚÝŒÜ™’ŒÌ‘Ü‘[˜ÖZÍ””N[ŽMŒÕÙ˜L“œÝÕÜÍÛ–žLPP•Ö“˜ÒLX]QšÐY™™ÓÝMMÑ‘œ˜ÖL“JÔ•Rž\VXÙ˜œÝ\RÓ\ÜQšRšÑSŒÛ[[“•ÕžRËÖ˜“L[Uœ’ÝV˜ÓœÌU\\VÓ[ÕŽRV]ÒÚ™”ÎÌ˜Ø“Ù˜PŒL\Ì^RÚÞTMÙQØ“R•
ËÌLPÕTÝP^VÒXËÚNU˜Ñ‘›SQ‘Ü–Œ’–RÌ•Mš’^X“ÚÍÚUÒÞVLZ
ÞÜPÚ]œÙÚM‘ØS‘•TTQMJÛ’‘LœØ›QY‹ÛX\›YÐNMÜ›MÓÜMTÔÊÚœœœÝÒ]•YYœ‘ŒLU\ÜÙÖUSÒÌÍÜQLÙ›Í˜\ÍÜÍš”[›Õ^››Y“SŠÑ’“™Z[LÙšÙMÍ™R™ÑØSV•ÓZ]’]]SZžRZ‹ÚŒ”P‘‘S[Ô‹ØÛÐÑÔSZ”ÜZ^•N[^“ÌÚšSÞ›šSÛ––]•œÌLÓÙ”œÒ”R“MØ[‹Ô]Û–
Ò›ÐØ˜‘˜ŠÜÓ”PÕÍLUUž–•ÖT•žRQÙ’ØœZÛM[Ó›^žÞSPMÌ–ÍÚÎKÚ[RTÕT“]R]\ÕLËÙÝ˜”]šÚT’V[XÒQZ^Þ‘ÐÖÊÙÓ›^\™ÜœRRPÝSÒŒ”
Ó[L•›KÑÑÖU’Œ‘ÑT•ÊÓ‘Ö“Ü“Rš™‹ÑŽZÒÐžLÑRÓÝÌR
ÎMS[™LQÖÙ\™\’S’ÌUœÝÜÐ––šÍTÕÐÒ‘ÊÑRÝVNMLR\›ZXØNRÑSLÐÜÙÕ“]PŒUP‹Ð\JÒÚÍRÙQMÒÑ“UZ‘”˜ÙVVš•Ø•Œ––\žZNSQRÔ›ŠÙÓV“KÕ’RÌÓ™]KÎ˜ØRX”U’S”NS•ÌM’Z–RÍX”ÞšÛYY^LŒ]M’žSÖÛÓ]^VMÔ”SØVÙÖUÚ‘ÚŒZŒÊÓXÎ˜ÜÖNÙÌÓÐZÝœ–˜Ù’ÍMÚ[QÚTŽQ]X“”‹Õ”ÊÕÔšÓ’ŽZÛQRÍ˜œž›[\Ð”ÙVX›Ú•ÝËËÎKÙŒÑMœÑQÌ\‘\Ò‘ŒÍÜ‘š[ÛÓMUT‘MY™ÐÚÒÌÑ“šœZÕY”SšÛRÓTÚÝÑÌ™QTÎMMÌÖP[ÊÊÒRœTÌ]’Û\Õ•ÜPŒ™’ÍœœšNQ›”[U’Rž–ž^T^[T–]Lž”ÚÍ[ÓŠÝMšÓ™‘PLVœÌÌ–™Z›žÛ‘ÚÐÕNUØX‘L]
ÛP\]TYšV“Y’ÕÓÔ]Ù[UÛ‘”ÕÍÝQUUÕŒŽSÊÛUÍÝØMÌJÕ’XËÓ\ÞÝTÑÓÚ›Ø›ÖYÜÚŒÒÖZÒYÙ[Ü]‘ÓU”ÌÖšÊÚ\ÑKÜZÔÒØÑ\\TUšÍÙQX“ÌÓ“P‘KÐšÌŒR”T]ÍÌÌÜNÓRRLRÐU\•SÙž’›œ–›ÐÎPÑ’Ù–ÝÒ›•RÖQÙSÙ‹ØP[‘QY›\ÓLPÑNLÛLžTÊÝUZ–˜YÕÓËÜQÔÒ\ÝÛÐ‘ÊÔØMœ™ŒXÜYÑ™˜žQQLTRP\–šLÚ[UÔ\X›ÜÎ\˜\ÎZÔÔÚÒŒRÚÛ^žJËÎ’^S^Y˜ÚÜÑÛU™USÜ™M]™KÝLKÍTÔRÒ\ËÜYVYPÕ’ÙÐ\T]ÚVSN•TžZÙÌNMU\˜ŽUQØ•”š\”RM‹ÞMÍXS\MžZÖZPŒSŒPšÒUVÔÞUL^”›’ÞŒÜ–•P^\ÒžSÒ[ÜÓ›ØMXÕŒ’”ÝŽKÞÊÙ]KÒ–“RžVTœ™ÌÚÎÒZž‘ÛÔÕPÔVZSXQ“ÌÝÞšZÑÒÑœÎQT\ÌÒ’V‹ÍTØ^QU˜ÙMTRS›ŠÛ••Ð[’•Þ\œÌÕ[ÙÙ^[[œŒ^V›[\•’Y’ÛÙQJÔ^RÊÕÐ[TÑŒÑÚ™•ÍÍÝXÑÍž”XÌžÖUY›ŽL™ÓXTZÍLÞR‘ØLÌPÐÒŒ[Ö[ÑÞ˜M›]žV–\YÕÛÚÜ™Y›[P›ÜÞ™YÒ^][“ÌRQZÕSSÝT™ÎRYÙÜLœLSÎV\Û[š”\ÛÒÎRžUŽUÜJÑÚ]LSNQš”ÒÍÑ”ÌËÙZZ‹ËÍM]R\ÜŒ›ŽÔ]ÌSRSKÕ^NžN]Ô“X‘S‹Ù‘YŒMÌ”YÒ”QØÒØÑPU]ÍZ–[Q™’ÑVNU›TS•]]ŒTVžœLŒUQ^ÛÝX˜MÍÍ”™ŒMVÜ\Q\ÖUÒÙœÙRÚ\JÑÍ”œØÖ–ÛPØÍŒQ[[ËÊÒ[Üœ”ŒTÍ“–^˜R[ZÕTÛP“ØYšÐLP˜›ÚÓÙ[TÌÐ•“ÝMŒYXÝ”ÔÞÕZ›ÞR\Rš“\X””Ù
ÛUÓœP”–›•”T–PÛÝÒYšTÓ“ÝMYÝ“ÛÙU”ÓÚ]ÞM]ËØM[VR\‹ÔÓ•TÓÓ‹Ýœ™œQ–\’]Uœ™ÞPŒÓQ\Ñ™‘ØÚMÕLÔÎL–\LÑKÖ]YÖZŒÙÝ“[™’ÜÞÓQÐLŽÒÕÝšTTRÒ]ÓTTNMÝRÛT[ÙÓLJÍšRŒŒÍ”ŒÛ]]žP]‘Y\šUPRÌÑ]ÙËÊÒ]“[˜ÙÛÖT“ÙT˜ÜYÌÕž’ÓÎ‘Ôœ[Û™ØMQÚNS™Ü‘ÑšTÒžŽ[S[SÐKÔTÎUTNQÕ˜Y“ÑÖR›ÎV]SÕ^LMQ••ÍZËÓ›^NX]ÛR[ÎSžÝJÕQ™“šJÑQXÛ[YZ“ŒQUÛTŒ›]^ZXÐ\”\Ü^˜MYÖPÐPSY‘ÛÓ‘TŽ
ÙÓU]M‘V[‹Ñ“ÓÙ•ÔÞV–šTYÍMÝ^L‹ÒÜŒ›Q“‹ÙÞ\QQM’VL“P›‹ÚÒ™Û‹ÓÐSJÚUØ“ÑÑ–šÙÌUÌÝRÍM“ÌNÐÌÝ[”[Ö“YÝX^ÓÓ“SÝÝ”‘[Ñ\Ì^[NVPTYŒÑÞ^“ØÝRÜœRžžÜÖPSM˜šÜŽXMÜÔQVXÑ–\]œUÝ’‹ÕÓÝÙ˜›M–™Y“VMÌNÌ›Y’NYŽRÞ›\Ü‘”LÓÓž˜ÖÑÕÓT’^^‘QVTšÍV›ž˜YVÚÍ\Í’›]\YL[’”ÍšÐØ›ÒÐÐXYÔX›UÛÓSVšÜ]”ÝÑËÚYÙ‹ÓÒT”ÝÝœÚ”Ð[PšÎXšM›ÝST\’TÙ\UÚ\L›ž˜ÕR“^™ÌTQÔM–Œ–™™XÙ“\›“’Õ
ÍÒ\š–JÒÝÕš’ÍÍ›”–R^LÍ–“TÔÝœLYœV^ŒUÓ’˜S™
Ø–SUÕVÌÎSRšJØ‹Ú˜[ÌšÝŒRØ]ÓÙÖ™ÙœYÒY”YÜQXTÐ[ÛÔÑTËÓ–˜Þ”œXÝ“ÑÑ[XÙ›VQÓSÎ^œYV•Ý–SÓÐZP““ÌVZÍ›”ÒœÖŽSKÚÌ]ZšQ^œZÍUÚPMÌÔËÐ\PS]QÞSÖÙ[ÊËÌÍQÖPœžPœÔ›KÍQ‘T”SŒ
ÙÌÜLšLÝ›ÖÓSÍÛÞ‘NÓœ^\”ÒÙ\T™USÐŽSÕY›PÝÒX™‘XÛÖ]‘ÎÊÒÌUQZ^RY
ÓšS\“Ñ‘MS]X›ÌÚšÙšYŽUœ”SQÒTZž›T“]Þ]ÞL’Û’žYŒÙT–PÙMÚÖS‘ÛŠÜ\Þ‘–’ÑÓÔÝœÝŒŠØÕÌ‹ÌÝYÒMS\T™’šš›VžY™JÜQT‹ÔÚQÔZÎZÎÝÜ[]XQØÕ[YÚžZQÐ•ÍÞ››ZZ^•Œ[“šÞ
ØÌ”Z‹ÊÊÕ]˜LØÑ”LŠÓPQÌQL›QTRÜÛJÍM^V•ÜŽRP“ÍÑÜžŽÓ\˜ÑYÐÙØVYRUš’ÕLÔÝÛ“Ú
ÔÜ‹Ô˜‘žØQ›LYTÐÜ›Ô˜˜Û^ž˜ÛÛ•Î\ÔÝÓÚÎÕ–Œ•Ø^Ö\Ì™NMS]ÖÝ‘^[šŒœV^š™LÜÕÖ[ÜL“SÖ[QTŒÚšœÓšQ–]ÞœœQN]œÒX[YMYVR›ÑPŽ›Ú‘•Ô’UÔÖMÞ\L•ÐSUÖšÑÞ^‘ÓS˜›ØÑÔ“ÕÍÓžQÒÝXŒ[ÕŒNTœÍRÔÖ‘RÔYVžMVP^‹ÙÑÐVÑšÌÌLÚ”ÕY\[ÓTŠÙÔKÝR™–•Þ’™^‘Í›T]\ÞYQT›ÌÒÞ\LÕ”ÝØÜÒÔÕ™UVÝÔÜÓ[Ü‘ÕÞ˜šÍš™ÛÚ›Ù‘ÔØXÕYŒÌš’SÝM[ÌVLRLKÙšÙŒœYÒ[SY•UÓÞ˜ÒØÑœÕÐZ‘ŠÚÌœÚÜÌ’V^Œ–ÓXÒÓžS–[”Ó•œ’ÎNLž‘L”ÝQÔÝÑÙZRÌ“Œ”SÔ[ÝÐXLÚQž•™™ÕÞÑVZš
ÛÓÕÞØVSÚÌÖ[SÙMÒØ‘ÔÑÚÑÜ––\ST\^LÖÍ]QS‘ÍÑ““\ŒV”Ñž^[Q’“ÊÔMÞœZÞœ^’Ö›ÛXKÓœŒÔÍÓÝ\™P\Û–V™ÊÍTÐÙÝÌ›Ú^ÛÓ›ÑÔ^MÑL]ÑÒSÊÕÔ
Þ”ØZS–›‹ÞÑØÔ]“ÐÐÖÓQÑQ[Y“LŒTÍNQNTÓÌYŠÕXÚÍZ–œKÕY›žLR’ZÑVJÕÓœ›ÍRÚNVÛÕšÓÍZSQŒÜ^”ÜPÍ™ŽNNJÎUŽ•ž[M›T\œLÔÓKÑ•›‹ÚÞ”]žZ[ËÌÛ•]’Ý–PÔ\ÖŒUÜ‘ŒÑÌVÐR”š
Í‹ÜÎRÚÑÚLÜ“’’‹ÎMÌŒ‹Ò–ŒÚÜ]MPRUSÔÕM–œ’•SMØLÌÖMÝY
ÍÑTSTÖ^T\’ÚP]X›SQM›]MTÌÎZZÎš”Î•TNXX‘M”]™^^ŽÑT–ÛTJÎ[““ÜMY[MÙUMÚSÑS˜TQØÙÞRT™™Ü˜P‘ÜŒX“–›Ø˜\ZPÜM]”ÊÑž^NPž““˜ÙUÑ[YÍœ“‘S•–L“
ØØšU‘X[›Ý”S‘Z’VV’›Ý™LUÔNUM”UÝœËÎÛÙJÔÍ]QRR‘NKÔTØ‘LÒZ›Ñš\XYž\[ÍÚÒ˜^˜ÛÙRŒÓTÔQÞ‹ÜÍšÕÔ“Sœ\ÑÔUÍVÙ›™SVÞ”LØUžR”žVQËÐ•“ŠÞULÔ›Ö‘TÙÚ”YÍ–Ý\S\Ž
Ø–S]Ö‘Ì\Ü“V˜‘™P’ÞQÚŒ“PÜÑUZ\YŒ™Þ–›TÑ˜‘œ^’^ŒÐZÓŒRÐÌQÖYZT’ŒTÖNMÍœÕ–žX[NYUÚR•‹Ò–ŒÑNÑ–PÛQNUÑŽMÓYQÝÜZ–œÑÞMÝLÑ‘ÍØ[ÒNÐ‹ÑÍ™][QÜœ“Ð›ÒÑYÜÝX’Ö›ÔÛ\ÑTœ›Ð\ÕS[‘Œ\œÙR”™Ù–ÚÔ]RÊÑUšUQØÐJÌÔUØTÒQÐSÞT[Ù^•ÓÜ\ÛZœ]ÓÒS”ÑZÞÎYÝÔTŒ•UL‘ŠÐLX“œ“Ð\\STÍÓ™ØÕRŒÜšÖXŒ\S[“ŒÖ”^šÒTTÜ[Ì’Œ‘VŽZUÐVËÐÓ–VTMTÍT^Œ“SžYÍ^”žÍTÎVÐ›”Þ™T•™”^UÝQÛUÕ[Ó“Ó\ÍPÙÌ[ŽÑÙ‘MŽ‹ÛÖ‘PTZLR™UQÓÎPÕ˜UÑž]ÚÍ•KÍÚJÛYÚÎLMN•šXŽM^ÐŒ”ØUÚ]ÌMÓTÝ^™“\œÑ”MÍÙTÜŒÕ‘]R‘ÚPÙÒ•šU[P–šKÝÞ”‘ÔšM›ÚÓT\•žXQL•ÐžUÛMSÌž\KÙŒ•›TÛÑÔÛÙÓ[
ÚY“šY“[PÙÕ“”[]˜–\–’]Ñ™Ò”R
ØšÎX]Œ]QÓ\Z]V–œ“M”“˜[œÑ™”ÞžLRÑÒÍ^ÌTžžXÐ[˜UÕPX“ÛÚœÑ]›Û›MÎRÝÚY\PÔ[S‘ÚÙÚœ\\”XQS‘V›ÓÝ\’ŠØÚ™YY’’LSÛÔ–›™ÍRÕÙMÍÕ^JÊÓËÖ“TŒTÖžXØ•\Ý™R–ÍžQÍ^“ÎS’ÔYQÍQUJÍ‹ÍÜLÝV]ÙYž›ÔÖZÌÕYQRÒLÔ•››ÓÓVSÎZUVÐÊÝ–ÖœŠÕÐ“–œÑÕ
ÌÝ\VÌKÝÎY[LÍÚŒP›˜ÝËÛUÔÓœ’ÍVÍ˜ÛLPYNRSYËÐZœ’ÎYÝØÓÌ\ÚVV™Q‘Q‘LÚMP“M’šÝžšRMÜžQ”UÍRX–PœÓÕ˜]ÝœÒÜœP›MÚÛ˜U[]ØÑ\ÓSÌÑX”LÞÑRÓ•ÝÔŒÐÊÕV››]ÒÛ”œY\PTQ\Z^‘˜ŽN]ÛÖLZÙ
ÑPPPPPPPPPPPPPPPPPPPPPIÎÜZ[

N×˜ÛÛœÝÜ[™]È‘QK“Y\Ú
ØÝ[
ÖÌKŒLËKŒM‹Œ—KÌKŒKŒM‹ŒWKËŽLKŒMKŒŒ—KËKKŒL‹ŒNKËŒÌKŒLKŒWKËŒKKŒLŒWWJK™]È‘QK“Y\ÚÝ[™\™X]\šX[
ÛX\^\™K›ÝYÚ™\ÜÎ‹Y][™\ÜÎŒJJNÝÜ˜Ø\ÝÚYÝÏ]YNÝÜœ™XÙZ]™TÚYÝÏ]YNØØ\˜Y
Ü
N×™[˜Ý[Ûˆ™\Ú^™J
^ØÛÛœÝÏ\ÝYÙK˜ÛY[ÚY\ÝYÙK˜ÛY[ZYÚÚYŠ]ßZ
\™]\›ŽÜ™[™\™\‹œÙ]Ú^™JË˜[ÙJNØØ[Y\˜K˜\ÜXÝ]ËÚØØ[Y\˜KœÜÚ][Û‹œÙ]
ËŽK‹‹ŽJK›][\TØØ[\ŠÏŒÌKŒLÎŒJNØØ[Y\˜K›ÛÚÐ]
K
NØØ[Y\˜K\]T›Ú™XÝ[Û“X]š^

_[™]È™\Ú^™SØœÙ\™\Š™\Ú^™JK›ØœÙ\™JÝYÙJNÜ™\Ú^™J
N×›]™]š[Ý\Ï\\™›Ü›X[˜ÙK››ÝÊ
NÙ[˜Ý[Ûˆ˜]Ê›ÝÊ^Ü™\]Y\Ý[š[X][Û‘œ˜[YJ˜]ÊNØÛÛœÝSX]›Z[Š
›ÝË\™]š[Ý\ÊKÌLŒJNÜ™]š[Ý\Ï[›ÝÎØÛÛœÝZ[O]Ú[™ÝËšÙ^PZ[_ÞŒNŒNØÛÛœÝÏLKSX]™^
Y
ŒLŠNØÛÛœÝ\›]Ú[™ÝËšÙ^U\›ŸÞX]Î‹KŒŒË]ÚŒ]]Î™˜[Ù_NÚYŠ\›‹˜]]É‰™ØÝ[Y[˜›ÙK™]\Ù]œØÜ™Y[OOIÚÛYIÉ‰ˆYØÝ[Y[šY[Š]\›‹žX]ÊÏY
‹ŒŒŽÛ[Ù[œ›Ý][Û‹žJÏJ\›‹žX]ÊØZ[Kž
‹ŒL‹[[Ù[œ›Ý][Û‹žJJšÎÛ[Ù[œ›Ý][Û‹ž
ÏJ\›‹œ]Ú
ØZ[KžJ‹Œ[[Ù[œ›Ý][Û‹ž
JšÎØÛÛœÝ\™Ù]X]Û‹˜Û\ÜÓ\Ý˜ÛÛZ[œÊ	Ü™\ÜÙY	ÊOËKŒŒŒØØ\œÜÚ][Û‹žJÏJ\™Ù]XØ\œÜÚ][Û‹žJJŠKSX]™^
Y
ŒÍ
JNØÛÛœÝÛÝÏ]Ú[™ÝËšÙ^Q™]™\ˆÈŒŽˆÞY[ÝË™[Z\ÜÚ]™KœÙ]^
™ŽXLLÊNÞY[ÝË™[Z\ÜÚ]™R[[œÚ]JÏJÛÝË^Y[ÝË™[Z\ÜÚ]™R[[œÚ]JJšÎÝÜ›X]\šX[™[Z\ÜÚ]™KœÙ]^
™ŽXLLÊNÝÜ›X]\šX[™[Z\ÜÚ]™R[[œÚ]JÏJÛÝË]Ü›X]\šX[™[Z\ÜÚ]™R[[œÚ]JJšÎÜ™[™\™\‹œ™[™\ŠØÙ[™KØ[Y\˜J_\™\]Y\Ý[š[X][Û‘œ˜[YJ˜]ÊN×ŸXØ]Ú
\œŠ^Ø]Û‹˜Û\ÜÓ\Ý˜Y
	Ù˜[˜XÚÉÊNØÛÛœÛÛKØ\›Š	ÌÑ™[™\™\ˆ[˜]˜Z[X›NÈ\Ú[™È]Ûˆ˜[˜XÚË‰Ë\œŠ_WŸJJ
N×ÜØÜš\Ø›ÙOÚ[—ˆŽÂ