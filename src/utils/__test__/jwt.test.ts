import * as jwt from "jsonwebtoken";

import { MemberType } from "@/services/auth/types";

import { isExpired } from "../jwt";

describe("JWT 의 만료 여부를 테스트 합니다", () => {
    test("토큰이 만료되었는지 테스트 합니다", () => {
        // GIVEN
        const JWT_MOCK_SECRET = "JWT_MOCK_SECRET_KEY";
        const payload = {
            sub: "JWT_MOCK_SUB",
            auth: MemberType.ROLE_CLIENT,
        };

        const token = jwt.sign(payload, JWT_MOCK_SECRET, { expiresIn: "1m" });

        expect(isExpired(token)).toBe(false);
    });
});
