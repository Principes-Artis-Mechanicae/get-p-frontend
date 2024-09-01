import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { isRequestBodyValid } from "@/utils/validation";

import { ReadProjectResponseBody } from "./types";
import { ApplyProjectRequestBody } from "./types";

export const projectService = {
    readProjects: async (page = 0, size = 1, sort = "projectId,desc") => {
        const response = await api.get<ReadProjectResponseBody>(`/projects?page=${page}&size=${size}&sort=${sort}`);
        console.log(response.data.data);
        return response.data.data;
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
