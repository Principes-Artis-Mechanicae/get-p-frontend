import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authAction } from "@getp/store/slice/auth.slice";
import { RootDispatch, RootState } from "@getp/store/store";

export const useRegisterInfoModal = () => {
    const dispatch: RootDispatch = useDispatch();
    const { isAuthenticated, isRegistered, closeRegisterInfoModalForever, isRegisteredModalOpened } = useSelector(
        (state: RootState) => state.auth,
    );

    const isRegisterInfoModalOpened = useMemo(() => {
        return isAuthenticated && !isRegistered && !closeRegisterInfoModalForever && isRegisteredModalOpened;
    }, [isAuthenticated, isRegistered, closeRegisterInfoModalForever, isRegisteredModalOpened]);

    useEffect(() => {
        !isRegistered && dispatch(authAction.openRegisterInfoModal());
    }, [dispatch, isRegistered]);

    return { isRegisterInfoModalOpened };
};
