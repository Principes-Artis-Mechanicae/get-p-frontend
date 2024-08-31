import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";

import { RenderToastFromDerivedError } from "../exception";
import { ProjectRequestBody, ProjectRequestResponseBody } from "./types";

export const projectService = {
    requestProject: async (body: ProjectRequestBody) => {
        const request = async () => {
            const response = await api.post<ProjectRequestResponseBody>("/projects", body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "입력 항목이 누락되었거나 올바르지 않습니다")
                .addCase(404, "존재하지 않는 의뢰자입니다. 의뢰자 등록을 먼저 진행해주세요")
                .addCase(409, "시작일이 종료일보다 늦을 수 없습니다")
                .addCase(500, "입력 항목이 누락되었거나 올바르지 않습니다")
                .activate();
        };

        return toast.promise(request, {
            success: "프로젝트 의뢰 완료!",
            pending: "프로젝트 의뢰 생성중",
            error: RenderToastFromDerivedError,
        });
    },
};
