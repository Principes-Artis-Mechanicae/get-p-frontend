export interface ReadProjectDetailRequestBody {
    projectId: number;
}

export interface ReadProjectDetailResponseBody {
    status: number;
    data: {
        projectId: number;
        title: string;
        payment: number;
        applicationDuration: {
            startDate: string;
            endDate: string;
        };
        estimatedDuration: {
            startDate: string;
            endDate: string;
        };
        description: string;
        meetingType: string;
        category: string;
        status: string;
        attachmentFiles: string[];
        hashtags: string[];
        likesCount: number;
        client: {
            clientId: number;
            nickname: string;
            address: {
                zipcode: number;
                street: string;
                detail: string;
            };
        };
    };
}

export interface ProjectLikeResponseBody {
    status: number;
}

export interface ProjectLikeCancelResponseBody {
    status: number;
}
