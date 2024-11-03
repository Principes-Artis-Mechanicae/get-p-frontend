import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { MemberType } from "@getp/services/auth/types";

import { RootState } from "@getp/store/store";

export interface ProtectedRouteProps {
    role: MemberType;
    children: React.ReactNode;
}

/**
 * role 이 로그인된 사용자 memberType 과 일치하는 경우 children 하위 컴포넌트를 렌더링 합니다
 * 로그인이 되지 않은 사용자는 로그인페이지로 리다이렉트 됩니다
 * 권한이 없는 경우 홈 페이지로 리다이렉트 됩니다
 */
export const RouteGuard = ({ role, children }: ProtectedRouteProps) => {
    const { isAuthenticated, memberType } = useSelector((state: RootState) => state.auth);

    if (!isAuthenticated) {
        toast.error("로그인 후 이용해주세요");
        return <Navigate to="/auth/signin" />;
    }
    if (memberType !== role) {
        toast.error("권한이 없습니다");
        return <Navigate to="/" />;
    }

    return children;
};
