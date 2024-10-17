import { PROJECT_QUERY_KEYS } from "@/services/project/keys";
import { projectService } from "@/services/project/service";

import { useQuery } from "@tanstack/react-query";

export const useDeadLineProject = (size = 4) => {
    const query = useQuery({
        queryKey: PROJECT_QUERY_KEYS.READ_DEADLINE_PROJECTS(size),
        queryFn: () => projectService.readDeadLineProjects(size),
    });

    return { ...query };
};
