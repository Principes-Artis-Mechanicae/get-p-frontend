import { useSearchParams } from "react-router-dom";

import { usePagination } from "@/hooks/usePagination";

import { PROJECT_QUERY_KEYS } from "./keys";
import { projectService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const useProjectList = () => {
    const [searchParams] = useSearchParams();
    const { currentPage } = usePagination();

    const sizeParams = parseInt(searchParams.get("size") ?? "10");
    const sortParams = searchParams.get("sort") as string;

    const query = useQuery({
        queryKey: PROJECT_QUERY_KEYS.READ_PROJECTS(currentPage - 1, sizeParams, sortParams),
        queryFn: () => projectService.readProjects(currentPage - 1, sizeParams, sortParams),
    });

    return { ...query };
};
