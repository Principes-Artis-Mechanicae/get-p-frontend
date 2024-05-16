export interface IPeopleInfo {
    profileImageUri: string;
    nickname: string;
    activityArea: string;
    hashtags: string[];
    completeProjectsCount: number;
    comment: string;
}

export const PeopleInfos: IPeopleInfo[] = new Array(100).fill(null).map(() => ({
    profileImageUri: "/src/assets/people/img_profile_default.png",
    nickname: "유진",
    comment: "안녕하세요. 경북대 컴퓨터학부 김유진입니다. 우하하우하하",
    activityArea: "대구광역시 동구",
    hashtags: ["#돈까스", "#히히", "#점심"],
    completeProjectsCount: 5,
}));
