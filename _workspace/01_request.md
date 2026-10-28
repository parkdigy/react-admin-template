# 요청

부모 react-template의 Webpack → Rspack 변경을 병합한 react-admin-template에서 충돌과 실행 오류를 해결한다.

시작 상태: 설정·가이드·ProvidePlugin에 미해결 병합 항목이 있었으며 부모 변경은 이미 staged 상태였다. 관리자 전용 컴포넌트·전역·API·권한·라우트 계약을 보존한다.

완료 기준: 충돌 해소, Webpack 잔여 실행 설정 제거, npm run verify/build 통과, 개발/운영 브라우저 및 Fast Refresh, Express/프록시 검증. 커밋·배포·PM2 조작은 범위에 포함하지 않는다.
