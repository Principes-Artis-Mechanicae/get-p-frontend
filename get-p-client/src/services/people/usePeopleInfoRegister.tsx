import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { queryClient } from "@getp/apps/config/query";
import { REGEXP_PHONENUMBER } from "@getp/apps/constants/regex";

import { useInputValidation } from "@getp/common/hooks/useInputValidation";

import { authAction } from "@getp/store/slice/auth.slice";
import { RootDispatch } from "@getp/store/store";

import { PEOPLE_QUERY_KEYS } from "./keys";
import { peopleService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const usePeopleInfoRegister = () => {
    const dispatch: RootDispatch = useDispatch();
    const {
        value: phoneNumber,
        isValid: isPhoneNumberValid,
        onChange: onPhoneNumberChange,
    } = useInputValidation(REGEXP_PHONENUMBER);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const phoneNumberRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: () =>
            peopleService.registerPeopleInfo({
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumber,
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: PEOPLE_QUERY_KEYS.PEOPLE() });
            dispatch(authAction.registerInfo());
            navigate("/");
        },
    });

    const handleNextClick = useCallback(() => {
        if (!isPhoneNumberValid) {
            toast.error("전화번호를 형식에 맞게 다시 입력해 주세요!");
            return;
        }
        mutate();
    }, [mutate, isPhoneNumberValid]);

    return {
        nicknameRef,
        emailRef,
        phoneNumberRef,
        isPhoneNumberValid,
        onPhoneNumberChange,
        handleNextClick,
    };
};
