import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { queryClient } from "@getp/apps/config/query";

import { Mode, useMode } from "@getp/common/hooks/useMode";

import { authAction } from "@getp/store/slice/auth.slice";
import { RootDispatch } from "@getp/store/store";

import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const usePeopleInfoRegister = () => {
    const dispatch: RootDispatch = useDispatch();

    const emailRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const phoneNumberRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();
    const { mode } = useMode(Mode.REGISTER);

    const { mutate } = useMutation({
        mutationFn: () => {
            const payload = {
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
            };

            return mode === Mode.REGISTER
                ? peopleService.registerPeopleInfo(payload)
                : peopleService.editPeopleInfo(payload);
        },
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
