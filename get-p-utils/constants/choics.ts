export const GET_P_CLIENT = {
    CREATE_NEW_COMPONENT: "GET_P_CLIENT_CREATE_NEW_COMOPONENT",
    ADD_API_ENDPOINT: "GET_P_CLIENT_ADD_API_ENDPOINT",
};
export const GET_P_ADMIN = {
    CREATE_NEW_COMPONENT: "GET_P_ADMIN_CREATE_NEW_COMOPONENT",
    ADD_API_ENDPOINT: "GET_P_ADMIN_ADD_API_ENDPOINT",
};

export const choices = [
    { name: "Create New Component (get-p-client)", value: GET_P_CLIENT.CREATE_NEW_COMPONENT },
    { name: "Create New Component (get-p-admin)", value: GET_P_ADMIN.CREATE_NEW_COMPONENT },
    { name: "Add API Endpoint (get-p-client)", value: GET_P_CLIENT.ADD_API_ENDPOINT },
    { name: "Add API Endpoint (get-p-admin)", value: GET_P_ADMIN.ADD_API_ENDPOINT },
];
