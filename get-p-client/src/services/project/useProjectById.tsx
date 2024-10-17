import { useParams } from "react-router-dom";

import { PROJECT_QUERY_KEYS } from "./keys";
import { projectService } from "./service";
import { useQuery } from "@tanstack/react-query";

export const useProjectById = () => {
    const { id } = useParams();

    const query = useQuery({
        queryKey: PROJECT_QUERY_KEYS.READ_PROJECT_BY_ID(Number(id)),
        queryFn: () => projectService.readProjectDetail(Number(id)),
    });

    return { ...query };
};
