import { useSelector } from "react-redux";

import { RootState } from "@getp/store/store";

export const useAuth = () => {
    return useSelector((state: RootState) => state.auth);
};
