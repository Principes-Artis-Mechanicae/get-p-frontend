import { useCallback, useRef, useState } from "react";

import { peopleService } from "../people.service";
import { PeopleType } from "../people.types";
import { useMutation } from "@tanstack/react-query";

export const useRegisterPeople = (profileImageUri: string) => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const phoneNumberRef = useRef<HTMLInputElement | null>(null);
    const [peopleType, setPeopleType] = useState<PeopleType | null>(null);

    const mutation = useMutation({
        mutationFn: () =>
            peopleService.registerPeople({
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
                peopleType: peopleType as PeopleType,
                profileImageUri: profileImageUri,
            }),
    });

    const handleIndividualClick = useCallback(() => {
        setPeopleType(PeopleType.INDIVIDUAL);
    }, []);

    const handleTeamClick = useCallback(() => {
        setPeopleType(PeopleType.TEAM);
    }, []);

    const handleRegisterButtonClick = useCallback(() => {
        mutation.mutate();
    }, [mutation]);

    return {
        peopleType,
        emailRef,
        nicknameRef,
        phoneNumberRef,
        handleIndividualClick,
        handleTeamClick,
        handleRegisterButtonClick,
        ...mutation,
    };
};
