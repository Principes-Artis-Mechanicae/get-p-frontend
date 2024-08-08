import { useSearchParams } from "react-router-dom";

import { usePagination } from "@/hooks/usePagination";

import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const usePeopleList = () => {
    const [searchParams] = useSearchParams();
    const { currentPage } = usePagination();

    const sizeParams = parseInt(searchParams.get("size") ?? "10");
    const sortParams = searchParams.get("sort") as string;

    const query = useQuery({
        queryKey: PEOPLE_QUERY_KEYS.READ_PEOPLE(currentPage, sizeParams, sortParams),
        queryFn: () => peopleService.readPeople(currentPage, sizeParams, sortParams),
    });

    return { ...query };
};
