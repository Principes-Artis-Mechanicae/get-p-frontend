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
}

export type ReadMyPeopleInfoResponseBody = BaseResponse<{
    peopleId: number;
    email: string;
    nickname: string;
    phoneNumber: string;
    profileImageUri: string;
    completedProjectsCount: number;
    likesCount: number;
    createdAt: string;
    updatedAt: string;
}>;

export interface EditPeopleInfoRequestBody {
    nickname: string;
    email: string;
    phoneNumber: string;
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

export type ReadPeopleProfileResponseBody = BaseResponse<{
    introduction: string;
    activityArea: string;
    education: {
        school: string;
        major: string;
    };
    techStacks: string[];
    hashtags: string[];
    portfolios: { description: string; url: string }[];
}>;

export type RegisterPeopleProfileResponseBody = BaseResponse;

export type ReadAppliedProjectByIdResponseBody = {
    applicationId: number;
    type: PeopleType;
    project: {
        projectId: number;
        title: string;
        payment: number;
        recruitmentCount: number;
        applicantsCount: number;
        applicationDuration: {
            startDate: string;
            endDate: string;
        };
        estimatedDuration: {
            startDate: string;
            endDate: string;
        };
        description: string;
        meetingType: string;
        category: string;
        status: string;
        attachmentFiles: string[];
        hashtags: string[];
        likesCount: number;
        liked: boolean;
        client: {
            clientId: number;
            nickname: string;
            address: {
                zipcode: string;
                street: string;
                detail: string;
            };
        };
    };
    expectedDuration: {
        startDate: string;
        endDate: string;
    };
    status: string;
    description: string;
    attachmentFiles: string[];
    teammates: {
        peopleId: number;
        nickname: string;
        status: string;
        profileImageUrl: string;
    }[];
};
