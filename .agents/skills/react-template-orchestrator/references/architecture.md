# React Admin Template 구조와 변경 영향

## 실행 구조

```text
브라우저
  └─ client/src/index.tsx → App → RootLayout
      ├─ client/src/init: Axios XSRF 초기화
      ├─ BrowserRouter + Theme/App/Dialog/Snackbar providers
      ├─ /auth/*: CardLayout
      └─ 인증 후: DefaultLayout
          ├─ admin.user.menu_list → 메뉴와 g.menu 권한
          └─ router/index.tsx
              └─ AccessLogger → admin.user_access_log → 화면

개발: client webpack-dev-server : APP_HOST:APP_PORT
  └─ /api/* → API_URL/*

운영: server/src/app.ts : APP_PORT 또는 APP_SECURE_PORT
  ├─ /api/version/app, /api/*/version/app     로컬 버전 응답
  ├─ /apple-app-site-association 계열         로컬 정적 연동 응답
  ├─ /api/* → API_URL/*                       외부 API 프록시
  ├─ urlencoded/json body parser
  ├─ POST /deploy/github                      GitHub push 배포 훅
  ├─ client/dist 정적 파일
  └─ SPA fallback → EJS로 client/dist/index.html 렌더링
```

개발·운영 프록시는 모두 앞의 `/api`를 제거한다. 로컬 엔드포인트, 프록시, body parser, 배포 훅과 SPA fallback의 순서는 동작 계약이다.

## 설치·빌드 경계

| 영역 | 소스·설정 | 생성 결과 | 핵심 명령 |
| --- | --- | --- | --- |
| 루트 | `package.json`, `.env*`, 배포 스크립트 | publish 브랜치·배포 묶음 | `npm run verify`, `npm run build` |
| 클라이언트 | `client/src`, `client/public`, `client/webpack`, Webpack/Babel 설정 | `client/dist`, `client/build/report.html` | `npm run client:dev`, `npm run client:build` |
| 서버 | `server/src`, Webpack/PM2 설정 | `server/@dev`, `server/dist/app.js` | `npm run server:dev`, `npm run server:build` |

루트에 npm workspace 설정은 없다. 세 디렉터리는 별도 `package.json`과 `node_modules` 설치 경계를 가진다. 루트 `build`는 서버를 먼저, 클라이언트를 나중에 빌드하지만 운영 서버는 최종 `client/dist`를 필요로 한다.

## 클라이언트 경계

### 초기화·인증·라우팅

- `client/src/index.tsx`가 React root를 만들고 `App`을 렌더링한다.
- `RootLayout`은 공통 초기화와 provider, `auth.signin` 로그인 확인, HTML/앱 로딩, chunk 오류 복구, 인증별 레이아웃 선택을 소유한다.
- `RootLayoutAppInitializer`는 dialog/snackbar와 React Router의 navigate/location을 `g` 전역에 연결하고 경로 전환 시 스크롤 위치를 복원한다.
- `DefaultLayout`은 외부 API에서 메뉴와 read/write/export 권한을 받아 `g.menu`에 저장한 뒤 `router/index.tsx`를 렌더링한다.
- 대시보드 이외의 등록 라우트는 `AccessLogger`가 `admin.user_access_log`에 `pathname.substring(1)`을 전송해 승인된 뒤 렌더링한다. 따라서 라우트 경로, 메뉴 URI와 외부 접근 로그 키는 하나의 계약이다.

### 컴포넌트·타입·별칭

- 공통 컴포넌트는 `client/src/component/@Common`, 기능 화면은 `client/src/component/{기능}`, 다이얼로그는 `client/src/dialog`, API 상수와 타입은 `client/src/constant`가 기준이다.
- 새 export는 가장 가까운 `index.ts`부터 `client/src/component/index.ts`, `dialog/index.ts` 또는 `constant/index.ts`까지 실제 소비 경로를 따라 연결한다.
- 경로 별칭은 `client/tsconfig.json`이 기준이며 Webpack이 이를 읽어 동일 alias를 만든다.
- TypeScript는 `strict`지만 `skipLibCheck`가 켜져 있다. 새 오류를 숨기기 위해 이를 확대된 검증 근거로 사용하지 않는다.

### 자동 주입 전역

`client/webpack/ProvidePlugin.js`는 다음 모듈을 병합한다.

- 앱·브라우저 전역: `ProvidePlugin.app.js`
- React와 훅: `ProvidePlugin.react.js`, `ProvidePlugin.react-hooks.js`
- `@pdg` 유틸리티와 UI 패키지: `ProvidePlugin.pdg*.js`
- router, styled-components, dayjs 등: `ProvidePlugin.third-party.js`
- 저장소 공통 컴포넌트와 MUI: `ProvidePlugin.common-component.js`, `ProvidePlugin.mui.js`

각 식별자의 TypeScript 계약은 같은 역할의 `client/src/@types/webpack.ProvidePlugin*.d.ts`에 있다. UI 주입 묶음은 `client/eslint.config.mjs`의 globals에도 사용되므로 실제 export, ProvidePlugin, `.d.ts`, ESLint 인식을 함께 확인한다.

### API·브라우저 빌드

- 화면은 `client/src/global/api`가 구성한 `@pdg/api`의 `api`/`createApi`를 기준으로 호출하고 `ApiResult` 및 기능별 타입을 사용한다.
- Axios 초기화는 `XSRF-TOKEN` 쿠키를 `X-CSRF-TOKEN` 헤더로 연결한다.
- `APP_HOST`와 `API_URL` 도메인이 다르면 쿠키가 적용되지 않는다는 기존 운영 제약이 있다.
- Webpack은 루트 `.env`에서 `APP_HOST`, `APP_PORT`, `APP_NAME`, `APP_ENV`, `API_URL`을 읽는다. 운영 HTML은 Express의 EJS 값으로 title/env를 주입한다.
- Babel은 TypeScript/React 변환, React Compiler와 개발용 React Refresh를 사용한다. 이 경로를 바꾸면 브라우저 빌드와 실제 화면을 함께 검증한다.

## 서버 계약

### 초기화와 라우트 순서

- `server/src/init`은 루트 `.env`와 `getClientPath`, `ll` 전역을 먼저 초기화한다.
- Helmet의 기본 CSP는 비활성화되어 있고 현재 `ContentSecurityPolicy` 미들웨어도 통과만 시킨다. 미들웨어 존재를 실제 CSP 보호로 간주하지 않는다.
- Redis 세션은 `SESSION_DRIVER=redis`이고 앱 키·프로젝트명·Redis 호스트·포트가 있을 때만 설치된다. `.env.example`의 `SESSION_EXPIRES_IN_SEC`는 현재 서버 코드에서 소비되지 않는다.
- 버전과 Apple App Site Association 경로는 `/api` 프록시보다 먼저 등록되어 로컬에서 처리된다.
- 외부 API 프록시는 `/api`를 제거하고 선택적으로 keep-alive agent를 사용한다. 프록시가 body parser보다 앞에 있으므로 순서를 바꾸면 프록시 본문 전달과 이후 GitHub 서명 계산을 모두 재검토한다.
- 정적 파일 뒤의 정규식 fallback은 React Router 새로고침을 위해 `client/dist/index.html`을 EJS로 렌더링한다.

### 생명주기·운영 부작용

- HTTPS 모드는 key/cert/CA 세 경로를 모두 요구하며 HTTP 포트는 HTTPS로 리다이렉트한다.
- SIGINT는 keep-alive 연결을 닫도록 표시한 뒤 생성된 HTTP(S) 서버들을 종료한다. PM2는 `server/dist/app.js`를 cluster 1개 인스턴스로 실행하고 ready 신호를 기다린다.
- 비로컬 환경의 스케줄러는 `PM2_RELOAD`가 활성화되면 일일 reload job을 등록한다. `JobBase`의 중복 방지는 프로세스 메모리 안에서만 유효하다.
- `AppReloadJob`은 `exec('npm run pm2:reload')` 완료를 await하지 않는다. 현재 `handler` 완료 로그와 중복 방지 해제는 실제 PM2 명령 완료를 보장하지 않는다.
- `/deploy/github`는 서명과 push/ref를 검사한 뒤 상위 경로에서 `git pull`, 설치와 PM2 reload를 실행할 수 있다. 실제 요청은 원격 저장소·의존성·프로세스를 변경하므로 격리된 배포 환경과 명시적 권한 없이는 호출하지 않는다.

## 변경 영향표

| 변경 종류 | 함께 확인할 곳 | 최소 검증 |
| --- | --- | --- |
| 화면·라우트 | 기능/공통 폴더의 barrel, `router/index.tsx`, 레이아웃, 외부 메뉴 URI·접근 키 | `npm run verify` + 브라우저 직접 확인 |
| 인증·권한·메뉴 | `RootLayout`, `DefaultLayout`, `g.auth`, `g.menu`, 상수 타입, API 오류 코드 | `npm run verify` + 인증 유무별 실제 흐름 |
| 공통 컴포넌트 | 구현·타입·barrel, 필요 시 ProvidePlugin·`.d.ts`·ESLint | `npm run verify` + 소비 화면 확인 |
| 자동 주입 전역 | 실제 export, 모든 ProvidePlugin 계층, 전역 `.d.ts`, ESLint globals | `npm run verify` + `npm run client:build` |
| API 요청·응답 | 기능 상수/타입, `global/api`, XSRF·오류 처리, 두 프록시 | `npm run verify` + 실제 요청 확인 |
| 서버 로컬 경로 | 컨트롤러/middleware export, `app.ts` 순서, body parser, 정적/fallback | `npm run verify` + 실제 HTTP 상태·본문 |
| 환경 변수 | `.env.example`, 소비 코드, 개발·운영 차이 | `npm run verify` + 해당 환경 기동 |
| Webpack·Babel·자산 | client/server config, public 복사, HTML 주입, dist 소비 경로 | `npm run build` + 대상 런타임 확인 |
| 세션·보안·배포·PM2 | Redis 조건, CSP/XSRF, webhook, scheduler, ecosystem | 전체 빌드 + 격리 환경 검증 + 위험 리뷰 |

## 검증의 한계와 현재 주의점

- 자동 테스트 스크립트는 없다. `npm run verify`는 client/server lint와 TypeScript 정적 검사만 수행한다.
- 두 tsconfig는 `src/**/*.test.tsx`를 제외한다. 테스트를 추가하면 runner뿐 아니라 타입 검사와 루트 `verify` 연결도 설계해야 한다.
- `npm run build`는 번들 생성 가능성만 보여 준다. 브라우저 UX, API 계약, 쿠키, Redis, HTTPS, Slack, GitHub webhook 또는 PM2의 실제 동작 증거가 아니다.
- 서버 Webpack은 `ts-loader`의 `transpileOnly`를 사용하므로 서버 번들 성공을 TypeScript 검사 통과로 대체할 수 없다.
- 클라이언트는 `react`와 `react-dom`을 실행 시 사용하지만 현재 `client/package.json`의 직접 의존성에는 선언하지 않는다. 설치된 모듈만 있는 환경의 빌드 성공을 새 환경의 재현성 증거로 보지 말고, 의존성 정책을 바꿀 때는 깨끗한 설치를 별도로 확인한다.
- 생성 디렉터리는 기본적으로 ignore되지만 publish 절차가 `.gitignore`와 브랜치 상태를 바꿀 수 있다. 일반 개발 검증에서 배포 준비 명령을 실행하지 않는다.
