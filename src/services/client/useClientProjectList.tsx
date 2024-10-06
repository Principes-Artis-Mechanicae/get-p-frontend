import { useSearchParams } from "react-router-dom";

import { usePagination } from "principes-getp";

import { CLIENT_QUERY_KEYS } from "./keys";
import { clientService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const useClientProjectList = () => {
    const [searchParams] = useSearchParams();
    const { currentPage } = usePagination();

    const sizeParams = parseInt(searchParams.get("size") ?? "10");
    const sortParams = searchParams.get("sort") as string;

    const query = useQuery({
        queryKey: CLIENT_QUERY_KEYS.READ_CLIENT_PROJECTS(currentPage - 1, sizeParams, sortParams),
        queryFn: () => clientService.readClientProjects(currentPage - 1, sizeParams, sortParams),
    });

    return { ...query };
};
