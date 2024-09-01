import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";
import { isRequestBodyValid } from "@/utils/validation";

import { RenderToastFromDerivedError } from "../exception";
import { ReadProjectResponseBody } from "./types";
import { ApplyProjectRequestBody } from "./types";
import { ProjectRequestBody, ProjectRequestResponseBody } from "./types";

export const projectService = {
    readProjects: async (page = 0, size = 1, sort = "projectId,desc") => {
        const response = await api.get<ReadProjectResponseBody>(`/projects?page=${page}&size=${size}&sort=${sort}`);
        return response.data.data;
    },

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

    applyProjectById: async (body: ApplyProjectRequestBody, id = 1) => {
        if (!isRequestBodyValid(body)) throw new Error("모든 정보를 입력해주세요.");
        const request = async () => {
            return await api.post<ApplyProjectRequestBody>(`/projects/${id}/applications`, body);
        };

        return toast.promise(request(), {
            pending: "프로젝트 지원 정보를 등록 중입니다.",
            success: "프로젝트에 성공적으로 지원되었습니다.",
            error: "프로젝트 지원에 실패하였습니다. 다시 시도해 주세요.",
        });
    },
};
