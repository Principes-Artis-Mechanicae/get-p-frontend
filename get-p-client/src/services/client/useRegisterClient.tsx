import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RegisterClientRequestBody } from "@getp/services/client/types";

import { authAction } from "@getp/store/slice/auth.slice";
import { RootDispatch } from "@getp/store/store";

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
        mutationFn: () => {
            const requestBody: RegisterClientRequestBody = {
                nickname: nicknameRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
            };
            const address = {
                zipcode: zipCodeRef.current?.value,
                street: streetRef.current?.value,
                detail: detailRef.current?.value,
            };

            if (emailRef.current?.value) requestBody.email = emailRef.current.value;
            if (address.zipcode || address.street || address.detail) requestBody.address = address;

            return clientService.registerClient(requestBody);
        },
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
