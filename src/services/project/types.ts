import { PaginatedResponse } from "../types";

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
