import { isRequestBodyValid, isValidDuration } from "../validation";

describe("입력필드가 모두 채워져있는지 검증합니다", () => {
    test("입력필드가 모두 채워진경우 true 를 반환합니다", () => {
        const fields = {
            property1: "property",
            property2: "property",
        };

        expect(isRequestBodyValid(fields)).toBe(true);
    });

    test("입력필드가 하나라도 falsy 한 값을 갖는 경우 false 를 반환합니다", () => {
        const fields = {
            property1: "property",
            property2: null,
        };

        expect(isRequestBodyValid(fields)).toBe(false);
    });
});

describe("해당 날짜 범위가 올바른지 검증합니다", () => {
    test("startDate 가 endDate 보다 빠른경우 true 를 반환합니다", () => {
        const begin = "2000-01-01";
        const end = "2000-01-02";
        expect(isValidDuration(begin, end)).toBeTruthy();
    });

    test("startDate 가 endDate 보다 느린경우 false 를 반환합니다", () => {
        const begin = "2000-01-03";
        const end = "2000-01-02";
        expect(isValidDuration(begin, end)).toBeFalsy();
    });
});
