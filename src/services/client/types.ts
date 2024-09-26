import { BaseResponse, PaginatedResponse } from "../types";

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
export interface ProjectData {
    projectId: number;
    title: string;
    payment: number;
    applicantsCount: number;
    estimatedDays: number;
    applicationDuration: {
        startDate: string;
        endDate: string;
    };
    hashtags: string[];
    description: string;
    status: string;
}

export type ReadProjectResponseBody = PaginatedResponse<ProjectData[]>;

export type RegisterClientResponseBody = BaseResponse<{ clientId: number }>;
