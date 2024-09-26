import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";

import { RenderToastFromDerivedError } from "../exception";
import { ReadProjectResponseBody, RegisterClientRequestBody, RegisterClientResponseBody } from "./types";

export const clientService = {
    registerClient: async (body: RegisterClientRequestBody) => {
        const request = async () => {
            const response = await api.post<RegisterClientResponseBody>("/client/me", body);

            return new ExceptionHandler.Builder(response)
                .addCase(500, "의뢰자 정보 등록중 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요")
                .activate();
        };

        return toast.promise(request, {
            success: "의뢰자 정보 등록 완료!",
            pending: "의뢰자 정보 등록 중입니다",
            error: RenderToastFromDerivedError,
        });
    },
    editClient: async (body: RegisterClientRequestBody) => {
        const request = async () => {
            const response = await api.put<RegisterClientResponseBody>("/client/me", body);
            return new ExceptionHandler.Builder(response)
                .addCase(500, "의뢰자 정보 등록중 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요")
                .activate();
        };
        return toast.promise(request, {
            success: "의뢰자 정보 수정 완료!",
            pending: "의뢰자 정보 수정 중입니다",
            error: RenderToastFromDerivedError,
        });
    },
    readClientProjects: async (page = 0, size = 1, sort = "projectId,desc") => {
        const response = await api.get<ReadProjectResponseBody>(
            `/client/me/projects?page=${page}&size=${size}&sort=${sort}`,
        );
        return response.data.data;
    },
};
