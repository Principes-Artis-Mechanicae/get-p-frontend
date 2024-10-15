export const PEOPLE_QUERY_KEYS = {
    PEOPLE: () => ["people"],
    READ_PEOPLE: (page?: number, size?: number, sort?: string, liked?: boolean) => [
        "people",
        { page, size, sort, liked },
    ],
    READ_PEOPLE_BY_ID: (id: number) => ["people", { id }],
};
