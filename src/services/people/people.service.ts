import { toast } from "react-toastify";

import { AxiosError } from "axios";

import { api } from "@/config/axios";

import {
    ReadPeopleResponseBody,
    ReadPeopleDetailResponseBody,
    RegisterPeopleInfoRequestBody,
    RegisterPeopleProfileRequestBody,
    RegisterPeopleProfileResponseBody,
} from "./people.types";

export const peopleService = {
    readPeople: async (page = 0, size = 1, sort = "peopleId,desc") => {
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

export const peopleDetailService = {
    readPeopleDetail: async () => {
        const response = await api.get<ReadPeopleDetailResponseBody>(`/people/1`);
        return response.data.data;
    },
};
