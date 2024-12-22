import { PROJECT_QUERY_KEYS } from "@getp/services/project/keys";
import { projectService } from "@getp/services/project/service";

import { useQuery } from "@tanstack/react-query";

export const useAppliedProjects = () => {
    const query = useQuery({
        queryFn: () => projectService.readAppliedProjects(),
        queryKey: PROJECT_QUERY_KEYS.READ_APPLIED_PROJECTS(),
    });
    return { ...query };
};
