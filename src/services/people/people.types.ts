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

export interface RegisterPeopleInfoRequestBody {
    nickname: string;
    email: string;
    phoneNumber: string;
    peopleType: string;
}

export interface RegisterPeopleInfoResponseBody {
    status: number;
    data: {
        peopleId: number;
    };
}
