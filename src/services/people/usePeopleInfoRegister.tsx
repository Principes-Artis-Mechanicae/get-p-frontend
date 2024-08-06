import { useRef, useState } from "react";

import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const usePeopleInfoRegister = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const phoneNumberRef = useRef<HTMLInputElement | null>(null);
    const [peopleType, setPeopleType] = useState<string | null>(null);

    const mutation = useMutation({
        mutationFn: () =>
            peopleService.registerPeopleInfo({
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
                peopleType: peopleType as string,
            }),
    });

    const handleIndividualClick = () => {
        setPeopleType("INDIVIDUAL");
    };

    const handleTeamClick = () => {
        setPeopleType("TEAM");
    };

    const handleNextClick = () => {
        mutation.mutate();
    };

    return {
        nicknameRef,
        emailRef,
        phoneNumberRef,
        handleIndividualClick,
        handleTeamClick,
        handleNextClick,
        ...mutation,
    };
};
