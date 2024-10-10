import { formatDate, formatTime } from "../format";

describe("초 단위를 '분:초' 문자열로 변환합니다", () => {
    test("0초인 경우 '00:00 문자열을 반환합니다", () => {
        expect(formatTime(0)).toBe("00:00");
    });

    test("60초인 경우 '01:00' 문자열을 반환합니다", () => {
        expect(formatTime(60)).toBe("01:00");
    });
});

describe("'년-월-일' 문자열을 [년, 월, 일] 숫자 배열로 반환합니다", () => {
    // test("올바른 포맷의 경우 일치하는 Date 객체를 반환합니다", () => {
    //     const str = "2000-04-02";
    //     expect(formatDate(str)).toBe(new Date().setFullYear(2000, 4, 2));
    // });

    test("올바른 포맷이 아닐 경우 에러를 반환합니다", () => {
        const str = "1-2";
        expect(formatDate(str)).toThrow("date 필드는 '년-월-일' 의 문자열 타입이어야 합니다");
    });
});
