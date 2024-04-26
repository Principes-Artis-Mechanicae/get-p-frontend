import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "@/config/axios";

import {
    EmailAlreadyExistException,
    EmailAlreadyExistExceptionStatus,
    InternalEmailServerException,
    InternalEmailServerExceptionStatus,
    InvalidEmailException,
    InvalidEmailExceptionStatus,
} from "./auth.exception";
import {
    SignInRequestBody,
    SignInResponseBody,
    SignUpRequestBody,
    SignUpResponseBody,
    VerifyEmailRequestBody,
} from "./auth.types";
import { store } from "@/store/store";

export const authService = {
    signIn: async (body: SignInRequestBody) => {
        return api.post<SignInResponseBody>("/auth/login", body);
    },

    signUp: async (body: SignUpRequestBody) => {
        return api.post<SignUpResponseBody>("/auth/signup", body);
    },

    verifyEmail: async (body: VerifyEmailRequestBody) => {
        const request = async () => {
            const response = await api.post("/auth/signup/email/send", body);

            if (response.status === InvalidEmailExceptionStatus)
                throw new InvalidEmailException("잘못된 이메일 주소입니다");
            else if (response.status === EmailAlreadyExistExceptionStatus)
                throw new EmailAlreadyExistException("이미 인증된 이메일이거나 가입된 이메일입니다");
            else if (response.status === InternalEmailServerExceptionStatus)
                throw new InternalEmailServerException("이메일을 전송중 오류가 발생했습니다. 관리자에게 문의해주세요");

            return response;
        };

        await toast.promise(request, {
            pending: "인증코드 이메일 전송 중입니다",
            success: "인증코드가 전송되었습니다! 메일함을 확인해주세요",
            error: {
                render({ data }: { data: { message: string } }) {
                    return data.message;
                },
            },
        });
    },

    reissueToken: async () => {
        const refresh = store.getState().auth.refreshToken as string;

        const response = await api.post(
            "/auth/reissue",
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${refresh}`,
                },
            },
        );

        if (response.status === 401) {
            toast.error("다시 로그인 해주세요");
            redirect("/auth/signin");
        }
    },
};
