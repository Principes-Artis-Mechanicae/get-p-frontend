import { useEffect, useState } from "react";

import { clientService } from "@getp/services/client/service";

export type InitialMyClientInfo = {
    clientId: number;
    nickname: string;
    phoneNumber: string;
    email: string;
    profileImageUri: string;
    address: {
        zipcode: string;
        street: string;
        detail: string;
    };
    createdAt: string;
    updatedAt: string;
};

export const useMyClient = () => {
    const [initialMyClientInfo, setInitialMyClientInfo] = useState<InitialMyClientInfo | null>(null);

    useEffect(function fetchInitialMyClientInfo() {
        clientService.readMyClientInfo().then((data) => {
            setInitialMyClientInfo(data);
        });
    }, []);

    return { initialMyClientInfo };
};
