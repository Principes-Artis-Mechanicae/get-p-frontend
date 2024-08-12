import { useCallback } from "react";
import { useDispatch } from "react-redux";

import profileImg from "@/assets/auth/people2.png";

import { NavProfileContainer, NavProfileImg } from "./NavProfileItem.style";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

export interface INavProfileItem {
    imgSrc: string;
}

export const NavProfileItem: React.FC<INavProfileItem> = ({ imgSrc }) => {
    const dispatch: RootDispatch = useDispatch();

    const handleNavProfileClick = useCallback(() => {
        dispatch(uiActions.toggleNavDropDown());
    }, [dispatch]);

    return (
        <NavProfileContainer onClick={handleNavProfileClick}>
            <NavProfileImg src={imgSrc || profileImg} />
        </NavProfileContainer>
    );
};
