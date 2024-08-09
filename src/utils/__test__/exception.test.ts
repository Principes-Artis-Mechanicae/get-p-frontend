import { AxiosError, AxiosResponse } from "axios";

import { ExceptionFilter } from "../exception";

const ERR_CODE = 500 as const;
const ERR_MESSAGE = "Error Message" as const;

describe("비정상적인 응답에 대해 커스텀한 에러 메시지를 검증합니다", () => {
    test("비정상적인 응답에 대한 검증을 진행합니다", () => {
        expect(() => {
            const err = new AxiosError(ERR_MESSAGE, ERR_CODE.toString());

            new ExceptionFilter.Builder(err).addCase(ERR_CODE, ERR_MESSAGE).activate();
        }).toThrow(ERR_MESSAGE);
    });

    test("정상적인 응답에 대한 검증을 진행합니다", () => {
        const SUCCESS_RESPONSE = {
            status: 200,
            data: {},
            statusText: "200",
        } as AxiosResponse;

        expect(new ExceptionFilter.Builder(SUCCESS_RESPONSE).activate()).toEqual(SUCCESS_RESPONSE);
    });
});
