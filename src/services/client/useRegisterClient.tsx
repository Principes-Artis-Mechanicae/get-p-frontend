import { useCallback, useRef } from "react";

import { clientService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useRegisterClient = () => {
    const nicknameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);

    const mutation = useMutation({
        mutationFn: () =>
            clientService.registerClient({
                nickname: nicknameRef.current?.value as string,
                email: emailRef.current?.value as string,
                phoneNumber: phoneNumberRef.current?.value as string,
                address: {
                    zipcode: "",
                    street: "",
                    detail: "",
                },
                bankAccount: {
                    bank: "",
                    accountNumber: "",
                    accountHolder: "",
                },
            }),
    });

    const handleRegisterBtnClick = useCallback(() => {
        mutation.mutate();
    }, [mutation]);

    return { nicknameRef, emailRef, phoneNumberRef, handleRegisterBtnClick };
};
