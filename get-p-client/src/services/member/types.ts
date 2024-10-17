import { MemberType } from "../auth/types";

export interface MemberProfileResponseBody {
    status: number;
    data: {
        memberId: number;
        email: string;
        nickname: string;
        profileImageUri: string;
        memberType: MemberType;
        createdAt: string;
        updatedAt: string;
    };
}
