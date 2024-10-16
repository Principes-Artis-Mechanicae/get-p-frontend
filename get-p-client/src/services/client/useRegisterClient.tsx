import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authAction } from "@/store/slice/auth.slice";
import { RootDispatch } from "@/store/store";

import { clientService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useRegisterClient = () => {
    const navigate = useNavigate();
    const dispatch: RootDispatch = useDispatch();

    const nicknameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const zipCodeRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const detailRef = useRef<HTMLInputElement>(null);

    const { mutate } = useMutation({
        mutationFn: () =>
            clientService.registerClient({
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
                address: {
                    zipcode: zipCodeRef.current?.value as string,
                    street: streetRef.current?.value as string,
                    detail: detailRef.current?.value as string,
                },
            }),
        onSuccess: () => {
            dispatch(authAction.registerInfo());
            navigate("/");
        },
    });

    const handleRegisterBtnClick = useCallback(() => {
        mutate();
    }, [mutate]);

    return { nicknameRef, emailRef, phoneNumberRef, zipCodeRef, streetRef, detailRef, handleRegisterBtnClick };
};
