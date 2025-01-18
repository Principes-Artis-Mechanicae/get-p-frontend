import { usePagination } from "get-p-design";

import { useAuth } from "@getp/services/auth/useAuth";
import { PROJECT_QUERY_KEYS } from "@getp/services/project/keys";
import { projectService } from "@getp/services/project/service";

import { useQuery } from "@tanstack/react-query";

export const useAppliedProjects = () => {
    const { nickname } = useAuth();

    const { currentPage, pageGroupSize } = usePagination();

    const query = useQuery({
        queryFn: () => projectService.readAppliedProjects(currentPage - 1, pageGroupSize),
        queryKey: PROJECT_QUERY_KEYS.READ_APPLIED_PROJECTS(currentPage - 1, pageGroupSize),
    });
    return { ...query, nickname };
};
