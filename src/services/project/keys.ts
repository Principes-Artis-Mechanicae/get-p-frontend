export const PROJECT_QUERY_KEYS = {
    PROJECT: () => ["project"],
    READ_PROJECT_BY_ID: (id: number) => ["project", { id }],
    READ_PROJECTS: (page?: number, size?: number, sort?: string) => ["projects", { page, size, sort }],
};
