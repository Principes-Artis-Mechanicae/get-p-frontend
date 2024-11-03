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
