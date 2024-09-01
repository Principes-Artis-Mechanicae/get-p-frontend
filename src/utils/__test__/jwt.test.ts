import * as jwt from "jsonwebtoken";

import { MemberType } from "@/services/auth/types";

import { isExpired } from "../jwt";

describe("JWT 의 만료 여부를 테스트 합니다", () => {
    test("토큰이 만료되지 않은 경우 false 를 반환합니다", () => {
        const JWT_MOCK_SECRET = "JWT_MOCK_SECRET_KEY";
        const payload = {
            sub: "JWT_MOCK_SUB",
            auth: MemberType.ROLE_CLIENT,
        };

        const token = jwt.sign(payload, JWT_MOCK_SECRET, { expiresIn: "1m" });

        expect(isExpired(token)).toBeFalsy();
    });

    test("토큰이 만료된 경우 true 를 반환합니다", () => {
        const JWT_MOCK_SECRET = "JWT_MOCK_SECRET_KEY";
        const payload = {
            sub: "JWT_MOCK_SUB",
            auth: MemberType.ROLE_CLIENT,
        };

        const token = jwt.sign(payload, JWT_MOCK_SECRET, { expiresIn: -1 });

        expect(isExpired(token)).toBeTruthy();
    });
});
