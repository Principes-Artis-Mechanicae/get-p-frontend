import { toast } from "react-toastify";

import { API_BASE_URL, api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";

import { RefreshTokenExpiredException, RenderToastFromDerivedError } from "../exception";
import {
    ReissueTokenResponseBody,
    SignInRequestBody,
    SignInResponseBody,
    SignUpRequestBody,
    SignUpResponseBody,
    VerifyEmailRequestBody,
} from "./types";

export const authService = {
    signIn: async (body: SignInRequestBody) => {
        const request = async () => {
            const response = await api.post<SignInResponseBody>("/auth/login", body);

            return new ExceptionHandler.Builder(response)
                .addCase(409, "아이디 혹은 비밀번호가 일치하지 않습니다")
                .activate();
        };

        return toast.promise(request, {
            pending: "로그인 중입니다",
            error: RenderToastFromDerivedError,
        });
    },

    signUp: async (body: SignUpRequestBody) => {
        const request = async () => {
            const response = await api.post<SignUpResponseBody>("/auth/signup", body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "회원유형, 이메일, 비밀번호 형식이 잘못되었습니다")
                .addCase(409, "이미 가입된 이메일 이거나 필수약관에 동의하지 않았습니다")
                .activate();
        };

        await toast.promise(request, {
            pending: "회원가입 진행 중입니다",
            error: RenderToastFromDerivedError,
        });
    },

    verifyEmail: async (body: VerifyEmailRequestBody) => {
        const request = async () => {
            const response = await api.post("/auth/signup/email/send", body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "잘못된 이메일 주소입니다")
                .addCase(409, "이미 인증된 이메일이거나 가입된 이메일입니다")
                .addCase(500, "이메일을 전송중 오류가 발생했습니다. 관리자에게 문의해주세요")
                .activate();
        };

        await toast.promise(request, {
            pending: "인증코드 이메일 전송 중입니다",
            success: "인증코드가 전송되었습니다! 메일함을 확인해주세요",
            error: RenderToastFromDerivedError,
        });
    },

    reissueToken: async (refreshToken: string) => {
        const response = await fetch(API_BASE_URL + "auth/reissue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Refresh-Token": `Bearer ${refreshToken}`,
            },
        });

        if (response.status === 409) throw new RefreshTokenExpiredException();

        const data = (await response.json()) as ReissueTokenResponseBody;

        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;

        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        };
    },
};
