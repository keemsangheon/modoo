from pathlib import Path
import json, base64
root=Path(__file__).resolve().parent.parent
s=(root/'web/page.html').read_text()
for marker,file in [('/*CSS*/','style.css'),('/*THREE*/','three.min.js'),('/*APP*/','app.js'),('/*MODEL*/','key3d.js')]:s=s.replace(marker,(root/'web'/file).read_text())
s=s.replace('/*CHUNSIK_IMAGE*/','data:image/webp;base64,'+base64.b64encode((root/'web/chunsik.webp').read_bytes()).decode())
(root/'app/game-html.ts').write_text('export const gameHTML='+json.dumps(s,ensure_ascii=False)+';\n')
(root/'web/mentoring-keycap.html').write_text(s)
