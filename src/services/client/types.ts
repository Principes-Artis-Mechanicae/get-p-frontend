import { BaseResponse } from "../types";

export type RegisterClientRequestBody = {
    nickname: string;
    email: string;
    phoneNumber: string;
    address: {
        zipcode: string;
        street: string;
        detail: string;
    };
    bankAccount: {
        bank: string;
        accountNumber: string;
        accountHolder: string;
    };
};

export type RegisterClientResponseBody = BaseResponse<{ clientId: number }>;

export type RequestMeetingRequestBody = {
    applicantId: number;
    location: string;
    schedule: {
        date: string;
        startTime: string;
        endTime: string;
    };
    phoneNumber: string;
    description: string;
};

export type RequestMeetingResponseBody = {
    status: number;
    data: {
        meetingId: number;
    };
};
