import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ReadPeopleResponseBody, RegisterPeopleInfoRequestBody } from "./people.types";

export const peopleService = {
    readPeople: async (page = 0, size = 10, sort = "peopleId,desc") => {
        const response = await api.get<ReadPeopleResponseBody>(`/people?page=${page}&size=${size}&sort=${sort}`);
        console.log(response.data.data);
        return response.data.data;
    },

    registerPeopleInfo: async (body: RegisterPeopleInfoRequestBody) => {
        if (!body.nickname || !body.phoneNumber || !body.peopleType) {
            toast("모든 정보를 입력해주세요.");
            throw new Error("모든 정보를 입력해주세요.");
        }
        const request = async () => {
            const response = await api.post<RegisterPeopleInfoRequestBody>("/people/me", body);
            return response.data;
        };
        return toast.promise(request, {
            pending: "피플 정보 등록 중입니다.",
            success: "피플 정보 등록을 완료되었습니다.",
            error: "피플 정보 등록에 실패하였습니다.",
        });
    },
};
