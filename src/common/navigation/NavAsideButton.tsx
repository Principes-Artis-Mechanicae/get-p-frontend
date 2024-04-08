import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { NavAsideButtonIcon, NavAsideButtonWrapper } from "./NavAsideButton.style";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

export const NavAsideButton = () => {
    const dispatch: RootDispatch = useDispatch();

    const handleAsideBtnClick = useCallback(() => {
        dispatch(uiActions.toggleNavAside());
    }, [dispatch]);

    return (
        <NavAsideButtonWrapper onClick={handleAsideBtnClick}>
            <NavAsideButtonIcon src="/icons/bars.svg" />
        </NavAsideButtonWrapper>
    );
};
