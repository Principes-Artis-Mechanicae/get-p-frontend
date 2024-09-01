export const PROJECT_QUERY_KEYS = {
    PROJECT: () => ["projects"],
    READ_PROJECTS: (page?: number, size?: number, sort?: string) => ["projects", { page, size, sort }],
    READ_PROJECTS_BY_ID: (id: number) => ["projects", { id }],
};
