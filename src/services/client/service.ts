import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ExceptionHandler } from "@/utils/exception";
import { isRequestBodyValid } from "@/utils/validation";

import { RenderToastFromDerivedError } from "../exception";
import {
    RegisterClientRequestBody,
    RegisterClientResponseBody,
    RequestMeetingRequestBody,
    RequestMeetingResponseBody,
} from "./types";

export const clientService = {
    registerClient: async (body: RegisterClientRequestBody) => {
        const request = async () => {
            const response = await api.post<RegisterClientResponseBody>("/client/me", body);

            return new ExceptionHandler.Builder(response)
                .addCase(500, "의뢰자 정보 등록중 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요")
                .activate();
        };

        return toast.promise(request, {
            success: "의뢰자 정보 등록 완료!",
            pending: "의뢰자 정보 등록 중입니다",
            error: RenderToastFromDerivedError,
        });
    },
    editClient: async (body: RegisterClientRequestBody) => {
        const request = async () => {
            const response = await api.put<RegisterClientResponseBody>("/client/me", body);
            return new ExceptionHandler.Builder(response)
                .addCase(500, "의뢰자 정보 등록중 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요")
                .activate();
        };
        return toast.promise(request, {
            success: "의뢰자 정보 수정 완료!",
            pending: "의뢰자 정보 수정 중입니다",
            error: RenderToastFromDerivedError,
        });
    },

    requestMeeting: async (body: RequestMeetingRequestBody, id = 1) => {
        if (!isRequestBodyValid(body)) {
            toast.error("모든 정보를 입력해주세요.");
            throw new Error("모든 정보를 입력해주세요.");
        }

        const request = async () => {
            const response = await api.post<RequestMeetingResponseBody>(`/projects/${id}/meetings`, body);

            return new ExceptionHandler.Builder(response)
                .addCase(400, "잘못된 요청입니다. 다시 시도해주세요.")
                .addCase(500, "사전 미팅 신청서 전달 중 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요")
                .activate();
        };

        return toast.promise(request, {
            pending: "사전 미팅 신청서 전달 중입니다.",
            success: "사전 미팅 신청서 전달이 성공적으로 완료되었습니다.",
            error: RenderToastFromDerivedError,
        });
    },
};
