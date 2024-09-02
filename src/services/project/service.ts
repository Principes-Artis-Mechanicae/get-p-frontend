import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";

import { RenderToastFromDerivedError } from "../exception";
import { ReadProjectDetailResponseBody } from "./types";

export const projectService = {
    readProjectDetail: async (id: number) => {
        const response = await api.get<ReadProjectDetailResponseBody>(`/projects/${id}`);
        console.log(response.data.data);
        return response.data.data;
    },
    registerProjectLike: async (id: number) => {
        const request = async () => {
            const response = await api.post(`/projects/${id}/likes`);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "잘못된 요청입니다. 다시 시도해주세요.")
                .addCase(404, "해당 프로젝트를 찾을 수 없습니다.")
                .addCase(409, "이미 좋아요를 등록한 프로젝트입니다.")
                .activate();
        };

        return toast.promise(request, {
            pending: "프로젝트에 좋아요 등록 중입니다.",
            success: "프로젝트에 좋아요가 등록되었습니다.",
            error: RenderToastFromDerivedError,
        });
    },
    deleteProjectLike: async (id: number) => {
        const request = async () => {
            const response = await api.delete(`/projects/${id}/likes`);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "잘못된 요청입니다. 다시 시도해주세요.")
                .addCase(404, "해당 프로젝트를 찾을 수 없습니다.")
                .addCase(409, "이미 좋아요를 취소한 프로젝트입니다.")
                .activate();
        };

        return toast.promise(request, {
            pending: "프로젝트에 좋아요 취소 중입니다.",
            success: "프로젝트에 좋아요가 취소되었습니다.",
            error: RenderToastFromDerivedError,
        });
    },
};
