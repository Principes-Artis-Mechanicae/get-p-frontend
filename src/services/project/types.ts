import { BaseResponse } from "../types";
import { PaginatedResponse } from "../types";

export type ProjectMeetingType = "IN_PERSON" | string | null;

export const ProjectCategory = {
    FRONTEND: "프론트엔드 개발",
    BACKEND: "백엔드 개발",
    APP: "앱 개발",
    PROGRAM: "프로그램 개발",
} as const;

export type Duration = {
    startDate: string;
    endDate: string;
};

export type ProjectRequestBody = {
    title: string;
    payment: number;
    applicationDuration: Duration;
    estimatedDuration: Duration;
    description: string;
    meetingType: ProjectMeetingType;
    category: keyof typeof ProjectCategory | null;
    attachmentFiles: string[];
    hashtags: string[];
};

export type ProjectRequestResponseBody = BaseResponse<{
    projectId: number;
}>;

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
export interface ApplyProjectRequestBody {
    expectedDuration: {
        startDate: string;
        endDate: string;
    };
    description: string;
    attachmentFiles: string[];
}
