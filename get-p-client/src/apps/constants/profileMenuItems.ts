import { MemberType } from "@getp/services/auth/types";

export interface IProfileMenuItem {
    id: number;
    text: string;
    to: string;
}

export const profileMenu = (memberType: MemberType | null): IProfileMenuItem[] => {
    if (memberType === MemberType.ROLE_CLIENT) {
        return [
            {
                id: 1,
                text: "의뢰자 정보",
                to: "/",
            },
            {
                id: 2,
                text: "관심피플",
                to: "/people?page=1&size=10&sort=peopleId,desc&liked=true",
            },
            {
                id: 3,
                text: "프로젝트 의뢰하기",
                to: "/project/request",
            },
            {
                id: 4,
                text: "프로젝트 관리",
                to: "client/me/projects?page=1&size=9&sort=projectId,desc",
            },
            {
                id: 5,
                text: "결제 관리",
                to: "/",
            },
        ];
    } else {
        return [
            {
                id: 1,
                text: "피플 정보",
                to: "/",
            },
            {
                id: 2,
                text: "피플 프로필",
                to: "/",
            },
            {
                id: 3,
                text: "관심 프로젝트",
                to: "/projects?page=1&size=6&sort=projectId,desc&liked=true",
            },
            {
                id: 4,
                text: "프로젝트 관리",
                to: "/",
            },
            {
                id: 5,
                text: "결제 관리",
                to: "/",
            },
        ];
    }
};
