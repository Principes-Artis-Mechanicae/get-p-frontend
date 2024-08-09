export const isRequestBodyValid = (object: Record<string, unknown>) => {
    for (const values of Object.values(object)) {
        if (!values) return false;
    }
    return true;
};
