import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { MemberType } from "@/services/auth/auth.types";

import { RootState } from "@/store/store";

export interface ProtectedRouteProps {
    role: MemberType;
    children: React.ReactNode;
}

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
