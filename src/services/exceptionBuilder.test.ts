/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ExceptionFilter } from "./exceptionBuilder";

test("exceptionBuilder builder 테스트", () => {
    const exceptionFilter = new ExceptionFilter.Builder()
        .UnAuthorizedExceptionHandler()
        .BadRequestExceptionHandler()
        .NotFoundExceptionHandler()
        .build()
        .activate();

    expect(exceptionFilter).toHaveProperty("unAuthorizedExceptionHandler", true);
});
