# React Admin Template 에이전트 가이드

## 저장소 계약

- 이 저장소는 Webpack 기반 React 클라이언트와 Express 5 서버를 함께 빌드·배포하는 관리자 애플리케이션 템플릿이다.
- `client/src`는 화면·라우팅·인증 컨텍스트·브라우저 전역의 기준이고, `client/webpack`은 자동 주입과 번들 계약의 기준이다.
- `server/src`는 정적 클라이언트 제공, 로컬 엔드포인트, `/api` 프록시, 세션, 스케줄러와 배포 훅의 기준이다.
- 루트, `client`, `server`는 npm workspace가 아닌 별도 설치 경계다. Node 버전은 `.nvmrc`의 `24.12.0`을 사용하고, 루트 `.env`의 공개 키 목록은 `.env.example`과 동기화한다.

## 반드시 함께 추적할 경계

- 새 관리자 화면은 구현·인접 barrel export·`client/src/router/index.tsx`를 함께 확인한다. 접근 로그 대상 라우트는 외부 API의 메뉴 URI와 `admin.user_access_log` 키도 일치해야 한다.
- 자동 주입 식별자를 추가하거나 바꾸면 실제 export, `client/webpack/ProvidePlugin*.js`, 대응 `client/src/@types/webpack.ProvidePlugin*.d.ts`, 필요 시 ESLint globals를 함께 갱신한다.
- 개발 Webpack과 운영 Express는 모두 `/api` 접두사를 제거해 `API_URL`로 프록시한다. 서버의 로컬 버전·AASA 엔드포인트는 프록시보다 앞에, body parser와 `/deploy/github`는 프록시 뒤에 있어야 한다.
- `client/dist`, `client/build`, `server/dist`, `server/@dev`는 생성 결과다. 소스 대신 직접 편집하지 않는다.
- `.publish*`, `make:publish:*`, `publish:*`, `pm2:*`, `reset:gitignore`, `reinstall*`, `/deploy/github`는 브랜치·프로세스·의존성 또는 배포 상태를 바꾼다. 사용자의 명시적 요청과 대상 환경 확인 없이 실행하지 않는다.

## 작업과 검증

- 시작 전에 `git status --short`와 관련 진입점·barrel export·타입 선언을 확인하고, 사용자 변경을 보존한다.
- 일반 코드 변경 후 루트에서 `npm run verify`를 실행한다. Webpack, 환경 주입, 정적 자산, 서버 번들 또는 배포 경로 변경은 `npm run build`도 실행한다.
- UI 변경은 가능하면 `npm run dev`로 라우팅·인증·로딩·오류 상태를 직접 확인한다. 서버·프록시 변경은 필요 시 `npm run server:dev`와 실제 HTTP 요청으로 검증한다.
- 완료 전 `git diff --check`와 `git status --short`를 확인한다. 정적 검사나 빌드만으로 브라우저 UX, 외부 API, Redis, HTTPS, Slack, GitHub webhook 또는 PM2 동작을 검증했다고 표현하지 않는다.
- 상세 절차는 `.agents/skills/react-template-orchestrator/SKILL.md`, 구조와 영향표는 그 스킬의 `references/architecture.md`, 협업·실패 정책은 `docs/harness/react-template/team-spec.md`를 따른다.
