import { BaseResponse } from "../types";

export enum MemberType {
    ROLE_PEOPLE = "ROLE_PEOPLE",
    ROLE_CLIENT = "ROLE_CLIENT",
}

export interface ServiceTerms {
    tag: "GET-P 서비스 약관";
    agreed: boolean;
}

export interface SignInRequestBody {
    email: string;
    password: string;
}

export type SignInResponseBody = BaseResponse<{
    grantType: string;
    accessToken: string;
    refreshToken: string;
}>;

export interface SignUpRequestBody {
    email: string;
    password: string;
    verificationCode: string;
    serviceTerms: ServiceTerms[];
    memberType: MemberType;
}

export type SignUpResponseBody = BaseResponse<{
    email: string;
    serviceTerms: [
        {
            tag: string;
            required: boolean;
            agreed: boolean;
            revocable: boolean;
            agreedAt: string;
        },
    ];
    memberType: MemberType;
}>;

export interface VerifyEmailRequestBody {
    email: string;
}

export type ReissueTokenResponseBody = BaseResponse<{ grantType: string; accessToken: string; refreshToken: string }>;
