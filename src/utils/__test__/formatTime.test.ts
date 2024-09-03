import { formatTime } from "../formatTime";

describe("초 단위를 '분:초' 문자열로 변환합니다", () => {
    test("0초인 경우 '00:00 문자열을 반환합니다", () => {
        expect(formatTime(0)).toBe("00:00");
    });

    test("60초인 경우 '01:00' 문자열을 반환합니다", () => {
        expect(formatTime(60)).toBe("01:00");
    });
});
