# 기존 Webpack 설정과 Rspack 대응 (2026-10-28)

사용자가 제공한 기존 client/webpack.config.js와 비교했다. 빌드 엔진과 JS/TSX 변환은 Rspack/SWC를 유지한다.

| 기존 기능 | 현재 구현 |
| --- | --- |
| tsconfig alias, 전역 ProvidePlugin | resolve.tsConfig, Rspack ProvidePlugin 유지 |
| 버전·제목·환경 HTML 주입, robots.txt 복사, moment locale 제외 | 기존 Rspack 구현 유지 |
| ForkTsChecker/ESLint | npm run dev의 독립 watch, verify/build의 선행 검사 유지 |
| React Refresh/Babel React Compiler | Rspack React Refresh, SWC React Compiler 유지 |
| runtimeChunk, minimize, 성능 한도 | 기존 Rspack 구현 유지 |
| removeAvailableModules/removeEmptyChunks | 기존 운영/개발 조건 복원 |
| React 계열·PDG·MUI·기타 vendor별 청크 | client/rspack/splitChunks.js로 기존 이름 규칙 복원. 경로 구분자/없는 context 방어 추가 |
| BundleAnalyzer 정적 HTML | client/build/report.html 복원, stats.json도 유지 |
| source-map-loader | Rspack extractSourceMap으로 대체 |
| SourceMapDevToolPlugin | 개발 devtool: source-map으로 외부 .map 생성 |
| HTML loader/minimize | html-loader 복원, HTML 내부 자산 참조 지원 |
| SVG default URL + ReactComponent named export | SVGR(babel: false) → SWC, url-loader/file-loader 조합 복원. 100000바이트 한도 및 파일명 유지 |
| SVG의 CSS/HTML 참조 | asset 모듈로 처리 |
| CSS 상대 publicPath | 추출 로더의 ../ 복원. 개발 CSS도 기존 Rspack 추출/HMR 유지 |
| png/jpeg/gif, 폰트, 텍스트 | 기존 Rspack asset 규칙 유지 |
| dev overlay/progress, 프록시 info 로그 | 기존 표시 설정 복원. 프록시 경고/오류 로그는 유지 |
| FriendlyErrors | Rspack의 errors-warnings 출력으로 대체 유지 |
| 순환 참조 검사 | Rspack CircularCheck 유지, 기존 exclude 복원 |

SWC는 browserslist 기준으로 변환한다. 운영 source map은 비활성화하고, HTML 제목/환경은 Express EJS에서 치환하는 기존 계약을 유지한다. SVG·HTML import의 TypeScript 선언은 client/src/@types/assets.d.ts에 추가했다.

호환 로더 이름에 webpack이 들어가지만 실행 엔진은 Rspack이다. 로더의 peer dependency로 webpack이 설치되며 SVGR 내부 AST 변환에는 Babel 라이브러리가 사용된다. TSX와 SVG 생성 JSX의 코드 변환은 builtin:swc-loader가 담당한다.

## 검증

- npm run verify, npm run build 통과. 이번 빌드는 크기 경고 없이 성공.
- stats.json에서 React DOM/PDG/MUI 청크 이름, report.html 생성 확인.
- 별도 임시 fixture를 실제 규칙으로 번들링: 작은/큰 SVG URL 및 ReactComponent 렌더링, 큰 SVG 파일 출력, HTML 압축/자산 치환, CSS에서 참조한 SVG의 상대 경로 존재 확인.
- 개발 서버의 JS와 외부 .map을 HTTP로 조회하고 source map JSON 확인.
- 개발/운영 /auth/signin을 실제 브라우저로 확인.
- git diff --check 통과. 외부 API·배포는 실행하지 않았다.
