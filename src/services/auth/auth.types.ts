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

export interface SignInResponseBody {
    status: number;
    data: {
        grantType: string;
        accessToken: string;
        refreshToken: string;
    };
}

export interface SignUpRequestBody {
    email: string;
    password: string;
    verificationCode: string;
    serviceTerms: ServiceTerms;
    memberType: MemberType;
}

export interface SignUpResponseBody {
    status: number;
    data: {
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
    };
}

export interface VerifyEmailRequestBody {
    email: string;
}
