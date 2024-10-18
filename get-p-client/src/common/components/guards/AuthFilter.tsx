import { useSelector } from "react-redux";

import { MemberType } from "@getp/services/auth/types";

import { RootState } from "@getp/store/store";

export interface AuthFilterProps {
    forClient: React.ReactNode;
    forPeople: React.ReactNode;
    forUnauthorized: React.ReactNode;
}

export const AuthFilter = ({ forClient, forPeople, forUnauthorized }: AuthFilterProps) => {
    const { memberType } = useSelector((state: RootState) => state.auth);

    if (memberType === MemberType.ROLE_CLIENT) return forClient;
    else if (memberType === MemberType.ROLE_PEOPLE) return forPeople;
    else if (memberType === null) return forUnauthorized;
    else return null;
};
