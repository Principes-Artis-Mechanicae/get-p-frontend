import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";
import { isRequestBodyValid } from "@/utils/validation";

import { RenderToastFromDerivedError } from "../exception";
import { ReadProjectResponseBody } from "./types";
import { ApplyProjectRequestBody } from "./types";
import { ProjectRequestBody, ProjectRequestResponseBody } from "./types";
import { ReadProjectDetailResponseBody } from "./types";

export const projectService = {
    readProjects: async (page = 0, size = 1, sort = "projectId,desc", liked?: boolean) => {
        const params = new URLSearchParams({
            page: String(page),
            size: String(size),
            sort: sort,
        });

        if (liked !== undefined) {
            params.append("liked", liked ? "true" : "false");
        }

        const response = await api.get<ReadProjectResponseBody>(`/projects?${params.toString()}`);
        return response.data.data;
    },
    readDeadLineProjects: async (size = 4) => {
        const response = await api.get<ReadProjectResponseBody>(
            `/projects?page=0&size=${size}&sort=applicationDuration,asc`,
        );
        return response.data.data;
    },
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
