export interface PeopleData {
    peopleId: number;
    nickname: string;
    peopleType: "INDIVIDUAL";
    profileImageUri: string;
    profile: {
        activityArea: string;
        hashtags: { value: string }[];
        completedProjectsCount: number;
        interestsCount: number;
    };
}

export interface ReadPeopleResponseBody {
    status: number;
    data: {
        content: PeopleData[];

        pageInfo: {
            totalPages: number;
            totalElements: number;
            size: number;
            number: number;
            numberOfElements: number;
            first: boolean;
            last: boolean;
            empty: boolean;
            sort: {
                property: string;
                direction: string;
            };
        };
    };
}

export interface ReadPeopleDetailResponseBody {
    status: number;
    data: {
        peopleId: number;
        nickname: string;
        profileImageUri: string;
        peopleType: string;
        completedProjectsCount: number;
        likesCount: number;
        profile: {
            introduction: string;
            activityArea: string;
            education: {
                school: string;
                major: string;
            };
            techStacks: string[];
            hashtags: string[];
            portfolios: {
                description: string;
                url: string;
            }[];
        };
    };
}
