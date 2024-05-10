import profileImg from "@/assets/auth/people2.png";

import { NavProfileContainer, NavProfileImg } from "./NavProfileItem.style";

export interface INavProfileItem {
    imgSrc: string;
}

export const NavProfileItem: React.FC<INavProfileItem> = ({ imgSrc }) => {
    return (
        <NavProfileContainer>
            <NavProfileImg src={imgSrc || profileImg} />
        </NavProfileContainer>
    );
};
