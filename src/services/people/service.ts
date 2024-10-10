import { toast } from "react-toastify";

import { AxiosError } from "axios";

import { api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";
import { isRequestBodyValid } from "@/utils/validation";

import { RenderToastFromDerivedError } from "../exception";
import {
    ReadPeopleResponseBody,
    ReadPeopleDetailResponseBody,
    RegisterPeopleInfoRequestBody,
    RegisterPeopleProfileRequestBody,
    RegisterPeopleProfileResponseBody,
} from "./types";

export const peopleService = {
    readPeople: async (page = 0, size = 1, sort = "peopleId,desc", liked?: boolean) => {
        const params = new URLSearchParams({
            page: String(page),
            size: String(size),
            sort: sort,
        });

        if (liked !== undefined) {
            params.append("liked", liked ? "true" : "false");
        }

        const response = await api.get<ReadPeopleResponseBody>(`/people?${params.toString()}`);
        //console.log(response.data.data);
        return response.data.data;
    },
    readPeopleById: async (id: number) => {
        const response = await api.get<ReadPeopleDetailResponseBody>(`/people/${id}`);
        console.log(response.data);
        return response.data.data;
    },
    readNewPeople: async (page = 0, size = 5) => {
        const response = await api.get<ReadPeopleResponseBody>(`/people?page=${page}&size=${size}&sort=createdAt,desc`);
        return response.data.data;
    },
    readPopularPeople: async () => {
        const response = await api.get<ReadPeopleResponseBody>(`/people?page=0&size=4&sort=likesCount,desc`);
        return response.data.data;
    },
    registerPeopleInfo: async (body: RegisterPeopleInfoRequestBody) => {
        const request = async () => {
            if (!isRequestBodyValid(body)) throw new Error("모든 정보를 입력해주세요.");

            const response = await api.post<RegisterPeopleInfoRequestBody>("/people/me", body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "필수 항목을 입력해주세요")
                .addCase(404, "등록된 피플정보가 없습니다. 피플 정보를 먼저 등록해주세요")
                .addCase(409, "이미 등록된 피플입니다")
                .activate();
        };
        return toast.promise(request, {
            pending: "피플 정보 등록 중입니다.",
            success: "피플 정보 등록이 완료되었습니다.",
            error: RenderToastFromDerivedError,
        });
    },
    checkInfoRegistered: async () => {
        const response = await api.get("/people/me");
        if (response instanceof AxiosError) {
            if (response.status === 404) return false;
            else if (response.status === 200) return true;
        }
    },
    registerPeopleProfile: async (body: RegisterPeopleProfileRequestBody) => {
        const request = async () => {
            const response = await api.post<RegisterPeopleProfileResponseBody>(`/people/me/profile`, body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "필수 항목을 입력해주세요")
                .addCase(404, "등록된 피플정보가 없습니다. 피플 정보를 먼저 등록해주세요")
                .addCase(409, "Conflict")
                .activate();
        };

        return toast.promise(request, {
            pending: "피플 프로필 등록 중입니다",
            success: "피플 프로필 등록 성공!",
            error: RenderToastFromDerivedError,
        });
    },
};
