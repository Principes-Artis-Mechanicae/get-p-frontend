export const isRequestBodyValid = (object: object) => {
    for (const values of Object.values(object)) {
        if (!values) return false;
    }
    return true;
};
