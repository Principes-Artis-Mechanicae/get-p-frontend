import { toast } from "react-toastify";

import axios, { AxiosError } from "axios";

import { store } from "@/store/store";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const access = store.getState().auth.accessToken as string;
        config.headers["Authorization"] = `Bearer ${access}`;
        return config;
    },
    (error) => {
        const refresh = store.getState().auth.refreshToken as string;
        Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.code === AxiosError.ECONNABORTED) {
            toast.error("서버 응답 시간이 초과하였습니다! 잠시 후 다시 시도 해주세요");
        }
    },
);
