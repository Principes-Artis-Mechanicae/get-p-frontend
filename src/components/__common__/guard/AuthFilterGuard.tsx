import { useSelector } from "react-redux";

import { MemberType } from "@/services/auth/types";

import { RootState } from "@/store/store";

export interface IAuthFilter {
    role: MemberType | null;
    children: React.ReactNode;
}

export const AuthFilterGuard: React.FC<IAuthFilter> = ({ role, children }) => {
    const { memberType } = useSelector((state: RootState) => state.auth);
    console.log(memberType);
    if (memberType === role) return <>{children}</>;
};
