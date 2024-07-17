import { toast } from "react-toastify";

import { AxiosError } from "axios";

import { API_BASE_URL, api } from "@/config/axios";

import {
    EmailAlreadyExistException,
    InternalEmailServerException,
    InvalidEmailException,
    InvalidFieldException,
    WrongCredentialsException,
} from "./auth.exception";
import {
    ReissueTokenResponseBody,
    SignInRequestBody,
    SignInResponseBody,
    SignUpRequestBody,
    SignUpResponseBody,
    VerifyEmailRequestBody,
} from "./auth.types";

export const authService = {
    signIn: async (body: SignInRequestBody) => {
        const request = async () => {
            const response = await api.post<SignInResponseBody>("/auth/login", body);

            if (response instanceof AxiosError) {
                if (response.status === 409)
                    throw new WrongCredentialsException("아이디 혹은 비밀번호가 일치하지 않습니다");
            }

            return response;
        };

        return toast.promise(request, {
            pending: "로그인 중입니다",
            error: {
                render({ data }: { data: { message: string } }) {
                    return data.message;
                },
            },
        });
    },

    signUp: async (body: SignUpRequestBody) => {
        const request = async () => {
            const response = await api.post<SignUpResponseBody>("/auth/signup", body);

            if (response instanceof AxiosError) {
                if (response.status === 400)
                    throw new InvalidFieldException("회원유형, 이메일, 비밀번호 형식이 잘못되었습니다");
                else if (response.status === 409)
                    throw new EmailAlreadyExistException("이미 가입된 이메일 이거나 필수약관에 동의하지 않았습니다");
                else throw new Error("");

                /**
                 *
                 *
                 *  HTTP 응답 오류 코드 재확인 필요
                 *
                 *
                 */
            }
            return response;
        };

        await toast.promise(request, {
            pending: "회원가입 진행 중입니다",
            error: {
                render({ data }: { data: { message: string } }) {
                    return data.message;
                },
            },
        });
    },

    verifyEmail: async (body: VerifyEmailRequestBody) => {
        const request = async () => {
            const response = await api.post("/auth/signup/email/send", body);

            if (response instanceof AxiosError) {
                const status = response.response?.status;

                if (status === 400) throw new InvalidEmailException("잘못된 이메일 주소입니다");
                else if (status === 409)
                    throw new EmailAlreadyExistException("이미 인증된 이메일이거나 가입된 이메일입니다");
                else if (status === 500)
                    throw new InternalEmailServerException(
                        "이메일을 전송중 오류가 발생했습니다. 관리자에게 문의해주세요",
                    );

                /**
                 *
                 *
                 *  HTTP 응답 오류 코드 재확인 필요
                 *
                 *
                 */
            }
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

    reissueToken: async (accessToken: string, refreshToken: string) => {
        const response = await fetch(API_BASE_URL + "auth/reissue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
                "Refresh-Token": `Bearer ${refreshToken}`,
            },
        });

        if (response.status === 401) {
            toast.error("다시 로그인 해주세요");
            location.href = "/auth/signin";
        }

        const data = (await response.json()) as ReissueTokenResponseBody;

        const newAccessToken = data.data.accessToken;
        const newRefreshToken = data.data.refreshToken;

        return {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        };
    },
};
