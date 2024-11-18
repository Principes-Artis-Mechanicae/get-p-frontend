export const CLIENT_QUERY_KEYS = {
    READ_MY_CLIENT_INFO: () => ["client_my_info"],
    CLIENT_PROJECT: () => ["client_project"],
    READ_CLIENT_PROJECT_BY_ID: (id: number) => ["client_project", { id }],
    READ_CLIENT_PROJECTS: (page?: number, size?: number, sort?: string) => ["client_projects", { page, size, sort }],
};
