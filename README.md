# react-admin-template

## 기본 컴포넌트 Library

- [MUI](https://mui.com/)

## 주요 컴포넌트 Demo

- [react-component](https://parkdigy.github.io/react-component/)
- [react-form](https://parkdigy.github.io/react-form/)
- [react-table](https://parkdigy.github.io/react-table/)

## 개발 및 빌드

Node 버전은 `.nvmrc`를 기준으로 맞추고 루트, `client`, `server`에서 각각 `npm install`을 실행한다.

- `npm run dev`: Rspack 개발 서버, React Fast Refresh, ESLint/TypeScript 감시 검사
- `npm run server:dev`: Rspack 감시 빌드와 Node 프로세스 자동 재시작, ESLint 감시 검사
- `npm run verify`: 클라이언트·서버 ESLint와 TypeScript 검사
- `npm run build`: 클라이언트·서버 검사 후 Rspack 운영 빌드

클라이언트와 서버 모두 `builtin:swc-loader`를 사용한다. React Compiler는 SWC에서 실행하며,
전역 자동 주입 설정은 `client/rspack`, 대응 타입은 `client/src/@types/rspack.ProvidePlugin.*.d.ts`에 있다.
기존 빌드 설정과 Babel 플러그인, 서버 개발용 `node-hot-loader`는 제거했다.
`eslint-plugin-react-hooks`는 내부 분석용 Babel을 간접 의존성으로 사용하므로 설치 트리에 남지만 빌드에는 사용하지 않는다.

번들 분석 데이터는 `client/build/stats.json`으로 생성한다. SVG는 이미지 URL 자산으로 처리한다.
개발 서버와 Express 모두 `/api` 접두사를 제거해 `API_URL`로 전달한다.
환경 변수는 루트 `.env`를 읽으며 실행 명령에 전달한 환경 변수가 우선한다.

파일 감시에서 `EMFILE` 오류가 나는 제한된 환경에서는 다음과 같이 폴링을 사용할 수 있다.

```shell
CHOKIDAR_USEPOLLING=true WATCHPACK_POLLING=true npm run dev
CHOKIDAR_USEPOLLING=true WATCHPACK_POLLING=true npm run server:dev
```

## env

`APP_HOST` 와 `API_URL` 의 도메인이 다르면 쿠키가 적용되지 않음.

## 배포 준비

- .gitignore 파일에서 /dist 주석 처리

```
# production (배포 시 주석 처리)
/client/dist --> 이 부분 주석 처리
/server/dist --> 이 부분 주석 처리
```

- .gitignore 적용

```shell
npm run reset:gitignore
```

- 빌드 실행

```shell
npm run build
```

- Production 배포 브랜치 생성

```shell
npm run make:publish:production
```

- Development 배포 브랜치 생성 (선택)

```shell
npm run make:publish:development
```

- Staging 브랜치 생성 (선택)

```shell
npm run make:publish:staging
```

## 배포 서버 설정 (CentOS 7 기준)

```shell
# YUM 업데이트
yum update

# 한국 시간으로 변경
ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

# git 설치
yum install -y git

# NVM 설치 (16.* 사용)
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash && source /root/.bashrc && nvm install 16.20.2

# REDIS 설치 (선택)
# AWS EC2 에 설치시에는 https://dangdangee.tistory.com/entry/Redis-ec2%EC%97%90-%EB%A0%88%EB%94%94%EC%8A%A4-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0 참고
yum install -y epel-release && yum install -y redis && systemctl start redis && systemctl enable redis

# PM2 설치
npm i -g pm2 && pm2 startup && systemctl start pm2-root && systemctl enable pm2-root

# AWS EC2 프리티어 사용 시 swap 메모리 설정 (선택)
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
# 재부팅시에도 실행되도록 설정
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
# swap 메모리 확인
free -h

# github 에 등록 할 SSH-KEY 생성 (생성 후 github 에 등록)
ssh-keygen -t ecdsa -b 521 && cat /root/.ssh/id_ecdsa.pub

# 프로젝트 클론
git clone [git주소]
cd [폴더명]

# 배포 브랜치로 변경
git checkout publish/[production/development/staging]

# 실행용 모듈 설치
npm run install:prod

# .env 파일 생성
vi .env

# 서비스 실행
npm run pm2:start

# pm2 저장
pm2 save
```

## 배포

```shell
# 빌드
npm run build

# build 된 파일 저장 후 배포 실행
npm run publish:[production/development/staging]
```
