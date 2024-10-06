import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const usePopularPeople = () => {
    const query = useQuery({
        queryKey: PEOPLE_QUERY_KEYS.READ_PEOPLE(0, 4, "likesCount,desc"),
        queryFn: () => peopleService.readPopularPeople(),
    });

    return { ...query };
};
