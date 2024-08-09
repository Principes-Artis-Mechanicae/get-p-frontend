import { toast } from "react-toastify";

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
    readPeople: async (page = 0, size = 1, sort = "peopleId,desc") => {
        const response = await api.get<ReadPeopleResponseBody>(`/people?page=${page}&size=${size}&sort=${sort}`);
        console.log(response.data.data);
        return response.data.data;
    },
    registerPeopleInfo: async (body: RegisterPeopleInfoRequestBody) => {
        const request = async () => {
            if (!isRequestBodyValid(body)) throw new Error("모든 정보를 입력해주세요.");

            const response = await api.post<RegisterPeopleInfoRequestBody>("/people/me", body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "필수 항목을 입력해주세요")
                .addCase(404, "등록된 피플정보가 없습니다. 피플 정보를 먼저 등록해주세요")
                .addCase(409, "Conflict")
                .activate();
        };
        return toast.promise(request, {
            pending: "피플 정보 등록 중입니다.",
            success: "피플 정보 등록이 완료되었습니다.",
            error: RenderToastFromDerivedError,
        });
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

export const peopleDetailService = {
    readPeopleDetail: async () => {
        const response = await api.get<ReadPeopleDetailResponseBody>(`/people/1`);
        return response.data.data;
    },
};
