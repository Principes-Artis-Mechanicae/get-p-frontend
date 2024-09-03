export const PEOPLE_QUERY_KEYS = {
    PEOPLE: () => ["people"],
    READ_PEOPLE: (page?: number, size?: number, sort?: string) => ["people", { page, size, sort }],
    READ_PEOPLE_BY_ID: (id: number) => ["people", { id }],
};
