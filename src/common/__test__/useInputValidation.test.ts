import { ChangeEvent } from "react";

import { REGEXP_PASSWORD } from "@/constants/regex";

import { useInputValidation } from "../hooks/useInputValidation";
import { act, renderHook } from "@testing-library/react";

/**
 * 최소한 하나 이상의 소문자(a-z)가 포함되어야 함.
 * 최소한 하나 이상의 숫자(0-9)가 포함되어야 함.
 * 최소한 하나 이상의 특수 문자(!@#$%^&*()-)가 포함되어야 함.
 */
describe("사용자의 입력이 정규표현식에 맞는지 검증합니다", () => {
    test("비밀번호는 최소 하나의 소문자 알파벳이 없는경우 isValid 는 false 를 반환합니다", () => {
        const PASSWORD = "12341234!";
        const { result } = renderHook(() => useInputValidation(REGEXP_PASSWORD));

        // 최초 마운트시 isValid 는 true 를 반환합니다
        expect(result.current.isValid).toBeTruthy();

        act(() => {
            result.current.onChange({ target: { value: PASSWORD } } as ChangeEvent<HTMLInputElement>);
        });

        result.current.onChange = (e) => {
            e.target.value = "12341234!";
        };

        expect(result.current.value).toBe(PASSWORD);
        expect(result.current.isValid).toBeFalsy();
    });

    test("비밀번호는 최소 하나의 숫자가 포함되지 않는 경우 isValid 는 false 를 반환합니다", () => {
        const PASSWORD = "qwerqwer!";
        const { result } = renderHook(() => useInputValidation(REGEXP_PASSWORD));

        expect(result.current.isValid).toBeTruthy();

        act(() => {
            result.current.onChange({ target: { value: PASSWORD } } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.value).toBe(PASSWORD);
        expect(result.current.isValid).toBeFalsy();
    });

    test("비밀번호는 최소 하나의 특수문자가 포함되지 않는 경우 isValid 는 false 를 반환합니다", () => {
        const PASSWORD = "qwer1234";
        const { result } = renderHook(() => useInputValidation(REGEXP_PASSWORD));

        expect(result.current.isValid).toBeTruthy();

        act(() => {
            result.current.onChange({ target: { value: PASSWORD } } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.value).toBe(PASSWORD);
        expect(result.current.isValid).toBeFalsy();
    });

    test("비밀번호는 최소 길이가 8이상이어야 합니다", () => {
        const PASSWORD = "a12345!";
        const { result } = renderHook(() => useInputValidation(REGEXP_PASSWORD));

        expect(result.current.isValid).toBeTruthy();

        act(() => {
            result.current.onChange({ target: { value: PASSWORD } } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.value).toBe(PASSWORD);
        expect(result.current.isValid).toBeFalsy();
    });

    test("비밀번호는 최대 길이가 20자 이하여야 합니다", () => {
        const PASSWORD = "123456789123456789a!@";

        const { result } = renderHook(() => useInputValidation(REGEXP_PASSWORD));

        expect(result.current.isValid).toBeTruthy();

        act(() => {
            result.current.onChange({ target: { value: PASSWORD } } as ChangeEvent<HTMLInputElement>);
        });

        expect(result.current.value).toBe(PASSWORD);
        expect(result.current.isValid).toBeFalsy();
    });
});
