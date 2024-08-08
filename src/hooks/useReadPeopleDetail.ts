import { peopleDetailService } from "@/services/people/service";

import { useQuery } from "@tanstack/react-query";

export const useReadPeopleDetail = () => {
    const peopleDetail = useQuery({
        queryKey: ["peopleDetail"],
        queryFn: async () => await peopleDetailService.readPeopleDetail(),
    });

    return peopleDetail;
};
