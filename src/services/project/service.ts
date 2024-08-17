import { api } from "@/config/axios";

import { ReadProjectResponseBody } from "./types";

export const projectService = {
    readProjects: async (page = 0, size = 1, sort = "projectId,desc") => {
        const response = await api.get<ReadProjectResponseBody>(`/projects?page=${page}&size=${size}&sort=${sort}`);
        console.log(response.data.data);
        return response.data.data;
    },
};
