import { toast } from "react-toastify";

import { AxiosError } from "axios";

import { api } from "@/config/axios";

import {
    ReadPeopleResponseBody,
    RegisterPeopleProfileRequestBody,
    RegisterPeopleProfileResponseBody,
} from "./people.types";

export const peopleService = {
    readPeople: async (page = 0, size = 1, sort = "peopleId,desc") => {
        const response = await api.get<ReadPeopleResponseBody>(`/people?page=${page}&size=${size}&sort=${sort}`);
        console.log(response.data.data);
        return response.data.data;
    },
    registerPeopleProfile: async (body: RegisterPeopleProfileRequestBody) => {
        const request = async () => {
            const response = await api.post<RegisterPeopleProfileResponseBody>(`/people/me/profile`, body);

            if (response instanceof AxiosError) {
                const status = response.response?.status;
                if (status === 400) throw new Error("필수항목을 입력해주세요");
                if (status === 404) throw new Error("등록된 피플정보가 없습니다. 피플 정보를 먼저 등록해주세요");
            }
            return response.data;
        };

        return toast.promise(request, {
            pending: "피플 프로필 등록 중입니다",
            success: "피플 프로필 등록 성공!",
            error: "피플 프로필 등록 실패",
        });
    },
};
