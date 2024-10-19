import { useSearchParams } from "react-router-dom";

import { usePagination } from "get-p-design";

import { PROJECT_QUERY_KEYS } from "./keys";
import { projectService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const useProjectList = () => {
    const [searchParams] = useSearchParams();
    const { currentPage } = usePagination();

    const sizeParams = parseInt(searchParams.get("size") ?? "10");
    const sortParams = searchParams.get("sort") as string;
    const likedParams = searchParams.get("liked") === "true";

    const query = useQuery({
        queryKey: PROJECT_QUERY_KEYS.READ_PROJECTS(currentPage - 1, sizeParams, sortParams, likedParams),
        queryFn: () => projectService.readProjects(currentPage - 1, sizeParams, sortParams, likedParams),
    });

    return { ...query };
};
