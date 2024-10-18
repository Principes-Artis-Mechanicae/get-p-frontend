import { useCallback, useRef } from "react";

import { clientService } from "./service";
import { useMutation } from "@tanstack/react-query";

export const useEditClient = () => {
    const nicknameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const zipCodeRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const detailRef = useRef<HTMLInputElement>(null);

    const { mutate } = useMutation({
        mutationFn: () =>
            clientService.editClient({
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
            // TODO : 내 의뢰자 정보에 대한 query key invalidation 필요
            // queryClient.invalidateQueries({ queryKey: [] });
        },
    });

    const handleRegisterBtnClick = useCallback(() => {
        mutate();
    }, [mutate]);

    return { nicknameRef, emailRef, phoneNumberRef, zipCodeRef, streetRef, detailRef, handleRegisterBtnClick };
};
