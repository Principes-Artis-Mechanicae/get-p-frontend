import { toast } from "react-toastify";

import axios, { AxiosError } from "axios";

import { isExpired } from "@getp/common/utils/jwt";

import { authService } from "@getp/services/auth/service";
import { RefreshTokenExpiredException } from "@getp/services/exception";

import { authAction } from "@getp/store/slice/auth.slice";
import { store } from "@getp/store/store";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const api = axios.create({
    baseURL: API_BASE_URL,
    // timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    async (config) => {
        const { accessToken, refreshToken } = store.getState().auth;
        if (accessToken === null || refreshToken === null) return config;

        if (isExpired(accessToken)) {
            const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
                await authService.reissueToken(accessToken);

            store.dispatch(
                authAction.reissueToken({
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken,
                }),
            );

            config.headers["Authorization"] = `Bearer ${newAccessToken}`;
            return config;
        }
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        return config;
    },
    (error: AxiosError) => {
        console.log(error);
        return error;
    },
);

api.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error: AxiosError | RefreshTokenExpiredException) => {
        console.log(error);

        if (error instanceof RefreshTokenExpiredException) {
            toast.error("로그인 세션이 만료되었습니다. 다시 로그인 해주세요");
            store.dispatch(authAction.signOut());
            location.href = "/auth/signin";
        }
        if (error instanceof AxiosError) {
            if (error.code === AxiosError.ECONNABORTED) {
                toast.error("서버 응답 시간이 초과하였습니다! 잠시 후 다시 시도 해주세요");
            }
        }

        return error;
    },
);
