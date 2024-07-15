import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { MemberProfileResponseBody } from "./member.types";

export const memberService = {
    readMemberProfile: async () => {
        const response = await api.get<MemberProfileResponseBody>("/member/me");
        return response;
    },
    registerProfileImage: async (image: File) => {
        const request = async () => {
            const formData = new FormData();
            formData.append("image", image);

            const response = await api.post("/member/me/profile-image", formData, {
                headers: { "Content-Type": "multipart/formdata" },
            });
            if (response.status !== 201) throw new Error("프로필 사진 업로드 실패");
        };

        return toast.promise(request, {
            pending: "프로필 사진 업로드 중입니다",
            success: "프로필 사진 업로드 완료",
            error: "프로필 사진 업로드 실패",
        });
    },
};
