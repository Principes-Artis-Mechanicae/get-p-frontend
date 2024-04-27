import { toast } from "react-toastify";

import axios, { AxiosError } from "axios";

import { isExpired } from "@/utils/jwt";

import { store } from "@/store/store";
import { reissueTokenThunkAction } from "@/store/thunk/auth.thunk";

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
        const accessToken = store.getState().auth.accessToken as string;

        if (isExpired(accessToken)) {
            store.dispatch(reissueTokenThunkAction());
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
    (error: AxiosError) => {
        console.log(error);

        if (error.code === AxiosError.ECONNABORTED)
            toast.error("서버 응답 시간이 초과하였습니다! 잠시 후 다시 시도 해주세요");

        return error;
    },
);
