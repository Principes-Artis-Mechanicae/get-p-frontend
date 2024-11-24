import { useEffect, useState } from "react";

import { peopleService } from "@getp/services/people/service";

export type MyPeopleInfo = {
    nickname: string;
    phoneNumber: string;
    email: string;
};

export const useMyPeople = () => {
    const [initialMyPeopleInfo, setInitialMyPeopleInfo] = useState<MyPeopleInfo | null>(null);

    useEffect(function fetchInitialMyPeopleInfo() {
        peopleService.readMyPeopleInfo().then((data) => {
            setInitialMyPeopleInfo(data);
        });
    }, []);

    return { initialMyPeopleInfo };
};
