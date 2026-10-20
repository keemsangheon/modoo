# modoo · 모두의 멘토링

멘토와 멘티가 각자 30초 동안 도전하고 월별 최고 기록을 합산하는 팀 키캡 게임.

- 사이트: https://mentoring-click-team.tkdgjsdlgud9.chatgpt.site/
- Supabase 프로젝트: modoo / 서울 (`kftqzjelvtijoxjgwqws`)
- 팀 이름 + 개인 아이디 + 개인 비밀번호로 로그인합니다.
- 멘토만 마스터 코드로 팀을 생성합니다. 생성된 일회용 가입 코드로 멘티가 개인 계정을 등록합니다.
- 100점마다 3초 피버, 한국 시간 매월 1일 새 월 랭킹, 멘토·멘티 각 최고 점수 합산.

## 구조

`web/` 디자인과 게임 소스 → `scripts/package-html.py` → 서버 HTML.
`app/api/[action]/route.ts`는 같은 출처의 서버 프록시입니다.
`supabase/functions/modoo-api/`가 로그인, 게임 검증, PostgreSQL 저장을 처리합니다.
`supabase/schema.sql`은 새 프로젝트 초기화 스키마입니다. 배포된 프로젝트에는 적용 완료되어 있습니다.

데이터는 비공개 `modoo` 스키마에 저장되며 브라우저에서 직접 접근하지 않습니다.
서버 간 키 검증과 HttpOnly 세션 쿠키를 사용합니다. Supabase Auth 이메일 로그인 대신 기존 아이디 로그인 방식을 유지합니다.
Supabase 함수는 자체 서버 키 인증을 수행하므로 JWT 게이트웨이 검증을 끕니다.
실제 비밀번호, 마스터 코드, 연결 키, 사용자 데이터는 이 저장소에 포함하지 않습니다.

## 개발

Node.js 22 이상과 pnpm, Python 3을 사용합니다.

```sh
pnpm install --frozen-lockfile
python3 scripts/package-html.py
pnpm dev
node tests/api.mjs
pnpm build
```

운영 환경 변수는 `.env.example`의 세 항목을 서버에 설정합니다.
`MODOO_BRIDGE_KEY`의 SHA-256 값은 비공개 `modoo.config` 테이블의 `bridge_hash`에 저장되어야 합니다.
Supabase 함수는 기본 `SUPABASE_DB_URL` 환경 변수로 DB에 연결합니다.
키는 서버 비밀 설정으로 보관하며 Git에 올리지 않습니다.

## 배포

현재 웹은 Sites, 데이터/API는 Supabase에서 운영됩니다.
GitHub Pages만으로는 서버 프록시와 비밀 키를 실행할 수 없습니다.
GitHub 소스 변경이 자동으로 운영 사이트에 배포되지는 않습니다.
Sites 빌드와 Supabase 함수 배포를 각각 수행해야 합니다.
`drizzle/`은 이전 D1 저장소의 이력과 기존 기록 삭제용 마이그레이션입니다. 현재 게임 데이터는 Supabase에 저장됩니다.

키캡 이미지 및 브랜드 자산의 권리는 각 권리자에게 있습니다.
