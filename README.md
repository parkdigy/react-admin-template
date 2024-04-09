# react-admin-template

## env
`APP_HOST` 와 `API_URL` 의 도메인이 다르면 쿠키가 적용되지 않음.

## 기본 컴포넌트 Library

- [MUI](https://mui.com/)

## 주요 컴포넌트 Demo

- [react-component](https://parkdigy.github.io/react-component/)
- [react-form](https://parkdigy.github.io/react-form/)
- [react-table](https://parkdigy.github.io/react-table/)

## 배포
- 최종 프로젝트의 `/server/.gitignore` `/client/.gitignore`
  ```
  # /dist <-- 이 부분 주석 처리
  ```

- Server
```
$ npm run install:prod
$ npm run pm2:start
```
