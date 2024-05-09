import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import profileImg from "@/assets/auth/people2.png";

import { profileMenuItems } from "@/constants/profileMenuItems";

import { Paragraph } from "../typography/Paragraph";
import { Text } from "../typography/Text";
import {
    Div,
    MenuContainer,
    MenuItem,
    ProfileContainer,
    ProfileDropDownWrapper,
    ProfileImg,
    ProfileImgContainer,
    ProfileInfoContainer,
    ProfileTag,
} from "./ProfileDropDown.style";
import { authAction } from "@/store/slice/auth.slice";

export interface IProfileDropDown {
    type: "PEOPLE" | "CLIENT";
    nickname: string;
    email: string;
}

export const ProfileDropDown: React.FC<IProfileDropDown> = ({ type, nickname, email }) => {
    const dispatch = useDispatch();

    const handleSignOutBtnClick = useCallback(() => {
        dispatch(authAction.signOut());
    }, [dispatch]);

    return (
        <ProfileDropDownWrapper>
            <ProfileContainer>
                <ProfileImgContainer>
                    <ProfileImg src={profileImg}></ProfileImg>
                    <ProfileTag>{type === "PEOPLE" ? "피플" : "의뢰자"}</ProfileTag>
                </ProfileImgContainer>

                <ProfileInfoContainer>
                    <Paragraph>
                        <Text size="s" weight="bold">
                            {nickname}
                        </Text>
                    </Paragraph>
                    <Paragraph>
                        <Text size="s">{email}</Text>
                    </Paragraph>
                </ProfileInfoContainer>
            </ProfileContainer>

            <Div />

            <MenuContainer>
                {profileMenuItems.map((item) => {
                    return (
                        <MenuItem key={item.id}>
                            <Link to={item.to}>{item.text}</Link>
                        </MenuItem>
                    );
                })}
                <MenuItem onClick={handleSignOutBtnClick}>로그아웃</MenuItem>
            </MenuContainer>
        </ProfileDropDownWrapper>
    );
};
