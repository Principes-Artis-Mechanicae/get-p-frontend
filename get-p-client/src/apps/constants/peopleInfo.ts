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
    comment:
        "저는 다양한 프로젝트에서 풍부한 경험을 쌓은 소프트웨어 개발자입니다. 프론트엔드와 백엔드 모두에 능숙하며, 특히 React와 Node.js를 사용한 웹 애플리케이션 개발에 자신이 있습니다. 사용자 경험을 최우선으로 고려하여 직관적이고 반응성이 뛰어난 인터페이스를 설계하고 구현하는 데 열정을 가지고 있습니다. 팀워크와 커뮤니케이션을 중시하며, 항상 협력하여 더 나은 결과를 만들어내는 것을 목표로 합니다. 새로운 기술과 도구를 배우는 것을 즐기며, 문제 해결을 위한 창의적인 접근 방식을 찾는 것을 좋아합니다. 언제나 성장을 추구하며, 도전적인 과제에 직면할 때마다 배우고 발전하는 기회로 삼고 있습니다.",

    activityArea: "대구광역시 동구",
    hashtags: ["#돈까스", "#히히", "#점심"],
    completeProjectsCount: 5,
}));
