import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const serverSideStorage = () => {
    return {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getItem: (key: string): Promise<string> => {
            return new Promise((resolve) => {
                resolve("{}");
            });
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setItem: (key: string, item: string): Promise<void> => {
            return new Promise((resolve) => {
                resolve();
            });
        },
    };
};

export const persistStorage = typeof window !== "undefined" ? createWebStorage("local") : serverSideStorage();
