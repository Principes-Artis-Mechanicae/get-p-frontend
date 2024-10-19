import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const useNewPeople = () => {
    const query = useQuery({
        queryKey: PEOPLE_QUERY_KEYS.READ_PEOPLE(0, 5, "createdAt,asc"),
        queryFn: () => peopleService.readNewPeople(0, 5),
    });
    return query;
};
