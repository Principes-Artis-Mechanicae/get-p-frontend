import { AxiosError, AxiosResponse } from "axios";

interface Exception {
    code: number;
    message: string;
}

interface IBuilder {
    response: AxiosResponse | AxiosError;
    exceptions: Exception[];
}

export class ExceptionHandler {
    exceptions: Exception[] = [];

    constructor(builder: IBuilder) {
        this.exceptions = builder.exceptions;
    }

    static Builder = class Builder implements IBuilder {
        response: AxiosResponse | AxiosError;
        exceptions: Exception[] = [];

        constructor(response: AxiosResponse | AxiosError) {
            this.response = response;
        }

        addCase(code: number, message: string) {
            this.exceptions.push({ code, message });
            return this;
        }

        activate() {
            const exceptionFilter = new ExceptionHandler(this);
            if (!(this.response instanceof AxiosError)) return this.response;

            const status = this.response.response?.status;

            for (const exception of exceptionFilter.exceptions) {
                if (exception.code === status) {
                    throw new Error(exception.message);
                }
            }
        }
    };
}
