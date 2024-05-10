import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { MemberType } from "@/services/auth/auth.types";

import { RootState } from "@/store/store";

export interface IProtectedRoute {
    role: MemberType;
    redirect: string;
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ role, redirect, children }) => {
    const { memberType } = useSelector((state: RootState) => state.auth);

    if (memberType !== role) {
        toast.error("권한이 없습니다");
        return <Navigate to={redirect} />;
    }

    return children;
};
