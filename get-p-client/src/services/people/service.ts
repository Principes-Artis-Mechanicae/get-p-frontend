import { toast } from "react-toastify";

import { AxiosError } from "axios";

import { api } from "@getp/apps/config/axios";

import { ExceptionHandler } from "@getp/common/utils/exception";
import { isRequestBodyValid } from "@getp/common/utils/validation";

import { RenderToastFromDerivedError } from "../exception";
import {
    ReadPeopleResponseBody,
    ReadPeopleDetailResponseBody,
    RegisterPeopleInfoRequestBody,
    ReadPeopleProfileResponseBody,
    RegisterPeopleProfileRequestBody,
    RegisterPeopleProfileResponseBody,
    EditPeopleInfoRequestBody,
    ReadMyPeopleInfoResponseBody,
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
        return response.data.data;
    },
    readPeopleById: async (id: number) => {
        const response = await api.get<ReadPeopleDetailResponseBody>(`/people/${id}`);
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
    readMyPeopleInfo: async () => {
        const request = async () => {
            const response = await api.get<ReadMyPeopleInfoResponseBody>("/people/me");
            return response.data.data;
        };
        return request();
    },
    registerPeopleInfo: async (body: RegisterPeopleInfoRequestBody) => {
        const request = async () => {
            if (!isRequestBodyValid(body)) throw new Error("모든 정보를 입력해주세요.");

            const response = await api.post<RegisterPeopleInfoRequestBody>("/people/me", body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "필수 항목을 입력해주세요")
                .addCase(404, "등록된 피플정보가 없습니다. 피플 정보를 먼저 등록해주세요")
                .addCase(409, "이미 등록된 피플 정보가 있습니다.")
                .activate();
        };
        return toast.promise(request, {
            pending: "피플 정보 등록 중입니다.",
            success: "피플 정보 등록이 완료되었습니다.",
            error: RenderToastFromDerivedError,
        });
    },
    editPeopleInfo: async (body: EditPeopleInfoRequestBody) => {
        const request = async () => {
            const response = await api.put("/people/me", body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "잘못된 입력 형식입니다")
                .addCase(500, "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")
                .activate();
        };
        return toast.promise(request, {
            pending: "피플 정보 수정 중입니다.",
            success: "피플 정보 수정이 완료되었습니다.",
            error: RenderToastFromDerivedError,
        });
    },
    checkInfoRegistered: async () => {
        const response = await api.get("/people/me");
        if (response.status === 200) return true;
        if (response instanceof AxiosError) {
            if (response.status === 404) return false;
        }
    },
    readPeopleProfile: async () => {
        const response = await api.get<ReadPeopleProfileResponseBody>("/people/me/profile");
        return response.data.data;
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
