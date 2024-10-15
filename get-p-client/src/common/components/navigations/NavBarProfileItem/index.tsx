import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

import defaultProfileImage from "@/assets/common/default-profile.svg";

import * as Styles from "./index.style";

export interface NavProfileItemProps {
    imgSrc?: string;
}

export const NavProfileItem = ({ imgSrc }: NavProfileItemProps) => {
    const dispatch: RootDispatch = useDispatch();

    const handleNavProfileClick = useCallback(() => {
        dispatch(uiActions.toggleNavDropDown());
    }, [dispatch]);

    return (
        <Styles.Container onClick={handleNavProfileClick}>
            <Styles.Image src={imgSrc || defaultProfileImage} alt="nav-profile-image" />
        </Styles.Container>
    );
};
