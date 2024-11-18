import { CLIENT_QUERY_KEYS } from "@getp/services/client/keys";
import { clientService } from "@getp/services/client/service";

import { useQuery } from "@tanstack/react-query";

export const useMyClient = () => {
    const query = useQuery({
        queryFn: () => clientService.readMyClientInfo(),
        queryKey: CLIENT_QUERY_KEYS.READ_MY_CLIENT_INFO(),
    });

    return { ...query };
};
