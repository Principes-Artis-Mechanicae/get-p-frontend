import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

/**
 * Input 에 대한 유효성 검사를 진행하는 훅입니다
 * @param regex 검사할 정규표현식
 * @returns { isValid, inputRef, onChange }
 */
export const useInputValidation = (regex: RegExp) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(false);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    useEffect(() => {
        if (regex.test(value)) setIsValid(true);
    }, [regex, value]);

    return { isValid, inputRef, onChange };
};
