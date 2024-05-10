import { MemberType } from "../auth/auth.types";

export interface MemberProfileResponseBody {
    status: number;
    data: {
        memberId: number;
        email: string;
        nickname: string;
        memberType: MemberType;
        createdAt: string;
        updatedAt: string;
    };
}
