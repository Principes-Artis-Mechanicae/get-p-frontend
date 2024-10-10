# GET-P : Get your People, Get your Projects!

[![Compile & Linting](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/test-static.yml/badge.svg)](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/test-static.yml)
[![Run e2e Test](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/test-e2e.yml/badge.svg)](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/test-e2e.yml)
[![Deploy Storybook](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/deploy-storybook.yml)<br/>
[![Deploy On Netlify (beta-get-p.netlify.app)](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/deploy-netlify.yml/badge.svg)](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/deploy-netlify.yml)
[![Deploy On Production Server](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/depoly-production.yml/badge.svg)](https://github.com/Principes-Artis-Mechanicae/get-p-frontend/actions/workflows/depoly-production.yml)


![ViteSSR](https://shields.io/badge/Vite_SSR-black?logo=vite&style=flat&color=512BD4)
![PM2](https://shields.io/badge/PM2-black?logo=pm2&style=flat&color=2B037A)
![ts](https://shields.io/badge/TypeScript-black?logo=typescript&style=flat&color=033963)
<br/>
![react-js](https://shields.io/badge/ReactJS-black?logo=react&style=flat&color=0086CA)
![redux-toolkit](https://shields.io/badge/Redux_Toolkit-black?logo=redux&style=flat&color=7648BA)
![react-query](https://shields.io/badge/Tanstack_Query-black?logo=reactquery&style=flat&color=720020)
![StyledComponents](https://shields.io/badge/Emotion_Styled-black?logo=styledcomponents&style=flat&color=202020)

<br/>

## 프로젝트 소개
소프트웨어 인력난을 해결하기 위한 외주 매칭 플랫폼입니다

<br/>

## 시작하기

### .env 환경변수 설정
```env
VITE_API_BASE_URL=백엔드_서버_URL
```

### 의존성 패키지 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 배포
```bash
npm run build
pm2 serve dist <PORT> --spa --name=get-p/frontend
```

