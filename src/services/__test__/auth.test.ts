import { api } from "@/config/axios";

import { authService } from "../auth/service";
import { AxiosMockResponseBuilder } from "./mockResponse";

jest.mock("@/config/axios", () => ({
    API_BASE_URL: "MOCK_BASE_URL",
    api: {
        get: jest.fn(),
        post: jest.fn(),
    },
}));
describe("authService 모듈을 테스트합니다", () => {
    describe("signIn 메서드", () => {
        test("로그인 성공시 토큰을 반환한다", async () => {
            const response = new AxiosMockResponseBuilder.Response()
                .setStatus(200)
                .setData({
                    status: 200,
                    data: {
                        grantType: "Bearer",
                        accessToken: "ACCESS",
                        refreshToken: "REFRESH",
                    },
                })
                .build();

            (api.post as jest.Mock).mockResolvedValueOnce(response);

            await expect(
                authService.signIn({
                    email: "test@test.com",
                    password: "test1234!",
                }),
            ).resolves.toEqual(response);
        });

        test("아이디 비밀번호가 일치하지 않는 경우 에러 메시지를 반환한다", async () => {
            const response = new AxiosMockResponseBuilder.Error()
                .setStatus(400)
                .setData({
                    status: 400,
                    message: "아이디 혹은 비밀번호가 일치하지 않습니다",
                })
                .build();

            (api.post as jest.Mock).mockRejectedValueOnce(response);

            await expect(
                authService.signIn({
                    email: "",
                    password: "",
                }),
            ).rejects.toEqual(response);
        });
    });

    describe("signUp 메서드", () => {
        test("회원가입 성공시 ");
    });
});
