import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authAction } from "@/store/slice/auth.slice";
import { RootDispatch } from "@/store/store";

import { queryClient } from "@/config/query";

import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const usePeopleInfoRegister = () => {
    const dispatch: RootDispatch = useDispatch();

    const emailRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const phoneNumberRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: () =>
            peopleService.registerPeopleInfo({
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PEOPLE_QUERY_KEYS.PEOPLE() });
            dispatch(authAction.registerInfo());
            navigate("/");
        },
    });

    const handleNextClick = useCallback(() => {
        mutate();
    }, [mutate]);

    return {
        nicknameRef,
        emailRef,
        phoneNumberRef,
        handleNextClick,
    };
};
