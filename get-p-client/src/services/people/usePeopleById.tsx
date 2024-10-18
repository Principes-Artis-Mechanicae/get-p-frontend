import { useParams } from "react-router-dom";

import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const usePeopleById = () => {
    const { id } = useParams();

    const query = useQuery({
        queryKey: PEOPLE_QUERY_KEYS.READ_PEOPLE_BY_ID(Number(id)),
        queryFn: () => peopleService.readPeopleById(Number(id)),
    });

    return { ...query };
};
