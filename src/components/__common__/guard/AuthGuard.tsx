import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

export interface IAuthGuard {
    forLoginUser?: boolean;
    children: React.ReactNode;
}

/**
 * @param forLoginUser default(false)
 * true 인경우, 로그인 한 유저에게만 children 컴포넌트가 보임
 * false 인경우, 로그인 하지 않은 유저에게만 children 컴포넌트가 보임
 */
export const AuthGuard: React.FC<IAuthGuard> = ({ forLoginUser = false, children }) => {
    const { accessToken } = useSelector((state: RootState) => state.auth);

    if (forLoginUser) {
        if (accessToken === null) return <></>;
        else return <>{children}</>;
    } else {
        if (accessToken !== null) return <></>;
        else return <>{children}</>;
    }
};
