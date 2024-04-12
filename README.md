# react-admin-template

## 기본 컴포넌트 Library

- [MUI](https://mui.com/)

## 주요 컴포넌트 Demo

- [react-component](https://parkdigy.github.io/react-component/)
- [react-form](https://parkdigy.github.io/react-form/)
- [react-table](https://parkdigy.github.io/react-table/)

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
npm run reset-gitignore
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
yum install -y epel-release && yum install -y redis && systemctl start redis && systemctl enable redis 

# PM2 설치
npm i -g pm2 && pm2 startup && systemctl start pm2-root && systemctl enable pm2-root

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
