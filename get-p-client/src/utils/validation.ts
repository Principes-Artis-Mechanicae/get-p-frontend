export const isRequestBodyValid = (object: object) => {
    for (const values of Object.values(object)) {
        if (!values) return false;
    }
    return true;
};

/**
 * arr 배열 원소 중 하나라도 falsy 한 값
 * (숫자일 경우 null | undefined) 인 값이 있으면
 * false 를 반환합니다
 * @param {Array} arr 검사할 필드
 * @returns {boolean} true | false
 */
export const isValueAssigned = (arr: unknown[]) => {
    for (const value of arr) {
        if (typeof value === "number" && (value === null || value === undefined)) return false;
        else if (!value) return false;
    }
    return true;
};

/**
 * 시작 날짜가 마감 날짜보다 빠른지 확인합니다
 * @param {string} startDate 시작날짜 (YYYY-MM-DD)
 * @param {string} endDate 마감날짜 (YYYY-MM-DD)
 * @returns {boolean}
 */
export const isValidDuration = (startDate: string, endDate: string): boolean => {
    return Date.parse(startDate) < Date.parse(endDate);
};
