export const PROJECT_QUERY_KEYS = {
    PROJECT: () => ["project"],
    READ_PROJECT_BY_ID: (id: number) => ["project", { id }],
    READ_PROJECTS: (page?: number, size?: number, sort?: string, liked?: boolean) => [
        "projects",
        { page, size, sort, liked },
    ],
    READ_DEADLINE_PROJECTS: (size?: number) => ["project", "deadline", { size }],
};
