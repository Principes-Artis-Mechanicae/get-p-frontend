import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
    sub: string;
    auth: "ROLE_PEOPLE" | "ROLE_CLIENT";
    exp: number;
}

export const isExpired = (token: string): boolean => {
    const decodedToken: JwtPayload = jwtDecode(token);
    return Date.now() >= decodedToken.exp * 1000;
};
