import { AxiosError, AxiosResponse } from "axios";

interface Exception {
    code: number;
    message: string;
}

interface IBuilder<T> {
    response: AxiosResponse<T> | AxiosError<T>;
    exceptions: Exception[];
}

export class ExceptionHandler<T> {
    exceptions: Exception[] = [];

    constructor(builder: IBuilder<T>) {
        this.exceptions = builder.exceptions;
    }

    static Builder = class Builder<T> implements IBuilder<T> {
        response: AxiosResponse<T> | AxiosError<T>;
        exceptions: Exception[] = [];

        constructor(response: AxiosResponse<T> | AxiosError<T>) {
            this.response = response;
        }

        addCase(code: number, message: string) {
            this.exceptions.push({ code, message });
            return this;
        }

        activate(): AxiosResponse<T> | Error | undefined {
            const exceptionFilter = new ExceptionHandler<T>(this);
            if (!(this.response instanceof AxiosError)) {
                return this.response;
            }

            const status = this.response.response?.status;

            for (const exception of exceptionFilter.exceptions) {
                if (exception.code === status) {
                    throw new Error(exception.message);
                }
            }
        }
    };
}
