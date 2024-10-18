import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { uiActions } from "@getp/store/slice/ui.slice";
import { RootDispatch } from "@getp/store/store";

import * as Styles from "./index.style";

export const NavAsideButton = () => {
    const dispatch: RootDispatch = useDispatch();

    const handleAsideBtnClick = useCallback(() => {
        dispatch(uiActions.toggleNavAside());
    }, [dispatch]);

    return (
        <Styles.Wrapper onClick={handleAsideBtnClick}>
            <Styles.Icon src="/icons/bars.svg" alt="nav-aside-icon-bars" />
        </Styles.Wrapper>
    );
};
