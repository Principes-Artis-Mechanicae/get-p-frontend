import { ChangeEvent, useCallback, useEffect, useState } from "react";

/**
 * Input 에 대한 유효성 검사를 진행하는 훅입니다
 * @param regex 검사할 정규표현식
 * @returns { isValid, inputRef, onChange }
 */
export const useInputValidation = (regex: RegExp) => {
    const [value, setValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);
    const [validationCheck, setValidationCheck] = useState<boolean>(false);

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            !validationCheck && setValidationCheck(true);
            setValue(e.target.value);
        },
        [validationCheck],
    );

    useEffect(() => {
        if (!validationCheck) return;
        if (regex.test(value)) setIsValid(true);
        else setIsValid(false);
    }, [regex, value, validationCheck]);

    return { value, isValid, onChange };
};
