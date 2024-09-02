export const PROJECT_QUERY_KEYS = {
    PROJECT: () => ["project"],
    READ_PROJECT_BY_ID: (id: number) => ["project", { id }],
};
