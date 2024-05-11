## 📌 디렉토리 구조

📁 .vscode : vscode workspace 에 대한 설정파일과 코드 스니펫이 정의된 디렉토리입니다

> workspace.code-snippets : emotion styled import, storybook 을 위한 !styled 코드 스니펫이 저장되어 있습니다

📁 .github : Github Actions Workflow 와 PR 템플릿이 정의 되어 있습니다

> /workflows/ci.yml : develop 브랜치로 Pull Request 시에 Typescript Compile, EsLint 로 코드 컨벤션 및 오류를 잡아내고 통과한 코드만 Merge 가능하도록 CI 파이프라인을 작성해 두었습니다!

> pull_request_template.md : PULL Request 시에 자동으로 입력되는 마크다운 템플릿입니다

📁 assets : 폰트 등의 assets 들이 저장되어있는 디렉토리입니다

📁 common : 여러 페이지들에 공통적으로 사용되는 컴포넌트 디렉토리입니다

> /display : 여러 페이지에서 사용되는 Avatar, Card 와 같은 디스플레이 컴포넌트가 저장된 디렉토리입니다.

> /feedback : Alert, Spinner, Toast 와 같은 사용자에게 피드백을 전달하는 컴포넌트가 저장된 디렉토리입니다.

> /form : Input, Button, CheckBox 와 같은 사용자와 상호작용하는 컴포넌트가 저장된 디렉토리입니다.

> /guard : AuthGuard, AdminGuard 와 같이 인증 인가와 관련된 가드 컴포넌트가 저장된 디렉토리입니다.

> /layout : Header, Footer, MainLayout 와 같이 Outlet 을 포함한 컴포넌트가 저장된 디렉토리입니다.

> /navigation : NavBar, NavAside 와 같이 네비게이션과 관련된 컴포넌트가 저장된 디렉토리입니다.

> /typography: Title, Text 와 같은 타이포그래피 컴포넌트가 저장된 디렉토리입니다.

📁 components : 도메인별로 사용되는 컴포넌트 디렉토리입니다. 도메인별 하위 디렉토리가 나누어져 있습니다.

📁 constants : 리액트 앱에 사용되는 상수들을 정의해둔 디렉토리입니다.

📁 hooks : 리액트 커스텀 훅을 저장하는 디렉토리입니다

📁 pages : 페이지 컴포넌트를 저장하는 디렉토리 입니다. 도메인별 하위 디렉토리가 나누어져 있습니다.
(export default function )

📁 services : 백엔드와 HTTP 통신시 사용되는 API 를 추상화한 디렉토리입니다.

📄 store : 전역 상태관리를 위한 redux 파일이 저장된 디렉토리입니다

📄 App.tsx : 앱의 Router, Provider 정의된 파일입니다

📄 entry-client.tsx : App 을 DOM 에 마운트 하기 위한 파일입니다

📄 entry-server.tsx : Vite SSR 의 서버사이드 렌더링 을 위한 진입점입니다.

📄 globals.css : 전역 스타일링이 정의된 시트입니다.

📄 .eslintrc.cjs : ES Lint 코드 컨벤션 규칙들이 정의된 파일입니다

📄 .prettierrc : Prettier 코드 포맷 규칙들이 정의된 파일입니다.

📄 server.js : 서버사이드 렌더링이 적용된 빌드 / 정적파일 호스팅 스크립트입니다

## 📌 코드 컨벤션

1. export

페이지 컴포넌트는 default export 로 내보내 주세요! 추후 lazy loading 을 위함 입니다!

```tsx
export default function Page() {}
```

페이지를 제외한 기타 컴포넌트는 화살표 함수를 이용해 named export 로 내보내 주세요!

```tsx
export const MyComponent = () => {
    return <></>;
};
```

2. types

Props 에 대한 타입은 IMyComponent 와 같은 형식으로 interface 로 지정해 주세요
컴포넌트는 React.FC<IMyComponent> 으로 타입을 지정해주세요

```tsx
interface IMyComponent {
    children: React.ReactNode;
}

export const MyComponent: React.FC<IMyComponent> = ({ children }) => {
    return <></>;
};
```

3. props

Props 는 구조분해할당을 이용하여 사용해주세요!

```tsx
export const Good = ({ some, props }) => {};

export const Bad = (props) => {};
```

4. Style 컴포넌트

Style 컴포넌트 (특정 컴포넌트의 스타일링에만 사용되는 컴포넌트) 는 NAME.style.tsx 로 파일을 분리해주세요

```tsx
// MyComponent.tsx
export const MyComponent: React.FC<Record<string, never>> = () => {
    return (
        <Wrapper>
            <Container>
                <Item></Item>
                <Item></Item>
            </Container>
        </Wrapper>
    );
};
```

```tsx
// MyComponent.style.tsx
export const Wrapper = styled.div`;
export const Container = styled.div`;
export const Item = styled.div``;
```

5. Naming

CSS Style MixIn 은 snake_case 로,
일반 함수 / 변수는 camelCase 로,
컴포넌트는 PascalCase 로 작성해주세요!

```tsx
// src/style/utils.ts
import { css } from "@emotion/react";

export const place_center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
```

```tsx
// src/store/auth.slice.ts
export const authSlice = createSlice({
    name: "getp/auth",
    initialState,
    // ...
});
```

```tsx
export const MyComponent = () => {};
```

하위 컴포넌트 명을 명명하기 어려울때 참고하시면 좋을 듯 합니다!
저는 Wrapper > Container > (Items) > Item > … 으로 작명하는 편입니다

```tsx
export const Card = () => {
    return (
        <CardWrapper>
            <CardContainer>
                <CardItem></CardItem>
            </CardContainer>
        </CardWrapper>
    );
};
```

6. Event Handler
