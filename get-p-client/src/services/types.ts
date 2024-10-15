export type BaseResponse<D = null> = {
    status: number;
    data: D;
};

export type PaginatedResponse<D> = BaseResponse<{
    content: D;
    pageInfo: Page;
}>;

export interface Page {
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
}
