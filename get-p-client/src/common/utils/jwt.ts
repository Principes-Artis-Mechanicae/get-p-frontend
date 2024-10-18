import { jwtDecode } from "jwt-decode";

import { MemberType } from "@getp/services/auth/types";

export interface JwtPayload {
    sub: string;
    auth: MemberType;
    exp: number;
}

export const isExpired = (token: string): boolean => {
    const decodedToken: JwtPayload = jwtDecode(token);
    return Date.now() >= decodedToken.exp * 1000;
};
