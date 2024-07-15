import { toast } from "react-toastify";

import { api } from "@/config/axios";

import { ReadPeopleResponseBody, RegisterPeopleRequestBody, RegisterPeopleResponseBody } from "./people.types";

export const peopleService = {
    readPeople: async (page = 0, size = 10, sort = "peopleId,desc") => {
        const response = await api.get<ReadPeopleResponseBody>(`/people?page=${page}&size=${size}&sort=${sort}`);
        console.log(response.data.data);
        return response.data.data;
    },
    registerPeople: async (body: RegisterPeopleRequestBody) => {
        const request = async () => {
            const response = await api.post<RegisterPeopleResponseBody>("/people", body);
            return response.data;
        };

        return toast.promise(request, {
            pending: "피플 정보 등록 중입니다",
            success: "피플 정보 등록 완료",
            error: "피플 정보 등록 실패",
        });
    },
};
