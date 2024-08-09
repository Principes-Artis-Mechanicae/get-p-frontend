import { useCallback, useRef, useState } from "react";

import { queryClient } from "@/config/query";

import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export enum PEOPLE_TYPE {
    INDIVIDUAL = "INDIVIDUAL",
    TEAM = "TEAM",
}

export const usePeopleInfoRegister = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const phoneNumberRef = useRef<HTMLInputElement | null>(null);
    const [peopleType, setPeopleType] = useState<PEOPLE_TYPE | null>(null);

    const mutation = useMutation({
        mutationFn: () =>
            peopleService.registerPeopleInfo({
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
                peopleType: peopleType as string,
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PEOPLE_QUERY_KEYS.PEOPLE() });
        },
    });

    const handleIndividualClick = useCallback(() => {
        setPeopleType(PEOPLE_TYPE.INDIVIDUAL);
    }, []);

    const handleTeamClick = useCallback(() => {
        setPeopleType(PEOPLE_TYPE.TEAM);
    }, []);

    const handleNextClick = useCallback(() => {
        mutation.mutate();
    }, [mutation]);

    return {
        nicknameRef,
        emailRef,
        phoneNumberRef,
        handleIndividualClick,
        handleTeamClick,
        handleNextClick,
        peopleType,
        ...mutation,
    };
};
