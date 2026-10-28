# Rspack 전환 검증 (2026-10-28, 관리자 프로젝트)

## 실행 결과

- Node 24.22.1. 클라이언트와 서버에 각각 npm install 실행, 로컬 lockfile 갱신. lockfile은 기존 정책상 Git 제외.
- `npm run verify`: client/server ESLint와 TypeScript 통과.
- `npm run build`: server/client 운영 번들 생성 통과. 클라이언트 1.000 MiB 청크에 크기 경고 1개가 남으며 빌드 오류는 없다.
- client/server 직접 의존성 트리에서 webpack, webpack-cli, webpack-dev-server 없음. 변환은 builtin:swc-loader, React Compiler 검사 수준 유지.
- 관리자 전용 MUI/PDG ProvidePlugin과 ESLint globals 보존, 남은 전역 타입 파일 5개를 rspack.ProvidePlugin.*로 이동.
- ESM 라이브러리의 확장자 생략 import(dayjs/locale/ko)를 지원하도록 기존 fullySpecified: false 규칙 복원.
- 컴포넌트 내부 재귀 메뉴 처리 3개를 모듈 함수로 이동해 SWC React Compiler 오류 해소. 메뉴 ID 맵, 형제별 seq 증가, 권한 수집 동작 유지.

## 실제 동작

로컬 테스트 API(4312), 클라이언트 개발 서버(4310), Express 개발 서버(4311), 운영 번들 서버(4313)를 사용했다. APP_ENV=local, SESSION_DRIVER=memory, APP_SECURE=false로 격리했다. 감시는 CHOKIDAR_USEPOLLING=true WATCHPACK_POLLING=true로 실행했다.

- 개발 브라우저 `/auth/signin`: 로그인 폼·MUI·PDG 컴포넌트·스타일 표시.
- 로그인 이메일 필드 입력 후 소스 제목을 `Login Rspack HMR`로 변경. 브라우저 새로고침 없이 제목 변경 및 입력값 유지 확인. 임시 소스 변경 원복.
- 테스트 인증/빈 메뉴 응답으로 개발 브라우저 `/` Dashboard와 관리자 레이아웃 표시.
- 운영 번들을 `node server/dist/app.js`로 실행, `/auth/signin` 로그인 폼 표시.
- 개발 Rspack/Express 각각 `/api/proxy-probe?x=1` POST가 `/proxy-probe?x=1`로 전달되고 JSON 본문 유지.
- Express 개발·운영 서버의 SPA HTML 200, EJS 제목 치환, 숫자 버전 API 응답을 Node assert로 확인. 운영 프록시도 동일하게 확인.
- 서버 소스 파일 변경 감지 후 Rspack 재빌드, 기존 프로세스 SIGINT 종료 및 4311 재기동 로그 확인.

## 검증 경계

실제 외부 API 인증/업무 데이터, Redis, HTTPS 인증서, Slack, GitHub webhook, PM2, Windows 명령은 검증하지 않았다. UI 인증 결과는 로컬 테스트 API 기준이다. 테스트 서버는 검증 후 종료한다.

부모 전환의 기존 변경대로 번들 분석은 client/build/stats.json, SVG는 이미지 URL, 서버 개발은 감시 빌드 후 프로세스 재시작을 사용한다.
