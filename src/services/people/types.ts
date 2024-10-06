import { BaseResponse, PaginatedResponse } from "../types";

export enum PeopleType {
    INDIVIDUAL = "INDIVIDUAL",
    TEAM = "TEAM",
}

export interface PeopleData {
    peopleId: number;
    nickname: string;
    profileImageUri: string;
    peopleType: PeopleType;
    completedProjectsCount: number;
    likesCount: number;

    profile: {
        introduction: string;
        activityArea: string;
        hashtags: string[];
    };
}

export type ReadPeopleResponseBody = PaginatedResponse<PeopleData[]>;

export type ReadPeopleDetailResponseBody = BaseResponse<{
    peopleId: number;
    nickname: string;
    profileImageUri: string;
    peopleType: string;
    completedProjectsCount: number;
    likesCount: number;
    profile: {
        introduction: string;
        activityArea: string;
        education: {
            school: string;
            major: string;
        };
        techStacks: string[];
        hashtags: string[];
        portfolios: {
            description: string;
            url: string;
        }[];
    };
}>;
export interface RegisterPeopleInfoRequestBody {
    nickname: string;
    email: string;
    phoneNumber: string;
    peopleType: string;
}

export type RegisterPeopleInfoResponseBody = BaseResponse<{
    peopleId: number;
}>;

export interface RegisterPeopleProfileRequestBody {
    education: {
        school: string;
        major: string;
    };
    activityArea: string;
    introduction: string;
    techStacks: string[];
    portfolios: {
        description: string;
        url: string;
    }[];
    hashtags: string[];
}

export type RegisterPeopleProfileResponseBody = BaseResponse;
