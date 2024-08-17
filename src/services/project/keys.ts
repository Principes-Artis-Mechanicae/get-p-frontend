export const PROJECT_QUERY_KEYS = {
    PROJECT: () => ["project"],
    READ_PROJECTS: (page?: number, size?: number, sort?: string) => ["project", { page, size, sort }],
    READ_PROJECTS_BY_ID: (id: number) => ["project", { id }],
};
