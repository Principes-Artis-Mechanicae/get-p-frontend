import { api } from "@/config/axios";

import { MemberProfileResponseBody } from "./member.types";

export const memberService = {
    readMemberProfile: async () => {
        const response = await api.get<MemberProfileResponseBody>("/member/me");
        return response;
    },
};
