import { useSearchParams } from "react-router-dom";

import { usePagination } from "get-p-design";

import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const usePeopleList = () => {
    const [searchParams] = useSearchParams();
    const { currentPage } = usePagination();

    const sizeParams = parseInt(searchParams.get("size") ?? "10");
    const sortParams = searchParams.get("sort") as string;
    const likedParams = searchParams.get("liked") === "true";

    const query = useQuery({
        queryKey: PEOPLE_QUERY_KEYS.READ_PEOPLE(currentPage - 1, sizeParams, sortParams, likedParams),
        queryFn: () => peopleService.readPeople(currentPage - 1, sizeParams, sortParams, likedParams),
    });

    return { ...query };
};
