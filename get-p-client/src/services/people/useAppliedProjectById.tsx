import { PEOPLE_QUERY_KEYS } from "@getp/services/people/keys";
import { peopleService } from "@getp/services/people/service";

import { useQuery } from "@tanstack/react-query";

export const useAppliedProjectById = (id: number) => {
    return useQuery({
        queryKey: PEOPLE_QUERY_KEYS.READ_APPLIED_PROJECT_BY_ID(id),
        queryFn: () => peopleService.readAppliedProjectById(id),
    });
};
