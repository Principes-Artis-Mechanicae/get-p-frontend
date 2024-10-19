import { AxiosError, AxiosResponse } from "axios";

export class AxiosMockResponseBuilder {
    static Response = class Builder<D> {
        axiosResponse: AxiosResponse<D>;

        constructor() {
            this.axiosResponse = {} as AxiosResponse<D>;
        }

        setStatus(status: number) {
            this.axiosResponse.status = status;
            this.axiosResponse.statusText = status.toString();
            return this;
        }

        setData(data: D) {
            this.axiosResponse.data = data;
            return this;
        }

        build() {
            return this.axiosResponse;
        }
    };

    static Error = class Builder<D> {
        axiosError: AxiosError;

        constructor() {
            this.axiosError = new AxiosError();
            this.axiosError.response = {} as AxiosResponse;
        }

        setStatus(status: number) {
            if (!this.axiosError.response) throw new Error("axiosError.response is undefined!");

            this.axiosError.code = status.toString();
            this.axiosError.response.status = status;
            this.axiosError.response.statusText = status.toString();
            return this;
        }

        setData(data: D) {
            if (!this.axiosError.response) throw new Error("axiosError.response is undefined!");
            this.axiosError.response.data = data;
            return this;
        }

        build() {
            return this.axiosError;
        }
    };
}
