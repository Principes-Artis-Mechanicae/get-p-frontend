export interface PeopleData {
    peopleId: number;
    nickname: string;
    profileImageUri: string;
    peopleType: "INDIVIDUAL";
    completedProjectsCount: number;
    likesCount: number;

    profile: {
        introduction: string;
        activityArea: string;
        hashtags: { value: string }[];
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

export interface RegisterPeopleProfileRequestBody {
    education: {
        school: string;
        major: string;
    };
    activityArea: string;
    introduction: string;
    techStacks: string[];
    portfolios: {
        description: string;
        url: string;
    }[];
    hashtags: string[];
}

export interface RegisterPeopleProfileResponseBody {
    status: number;
}
