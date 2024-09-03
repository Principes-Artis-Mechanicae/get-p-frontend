import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { MemberType } from "@/services/auth/types";

import profileImg from "@/assets/auth/people2.png";
import editIcon from "@/assets/common/edit.svg";

import { profileMenu } from "@/constants/profileMenuItems";

import { Paragraph } from "../typography/Paragraph";
import { Text } from "../typography/Text";
import {
    Div,
    MenuContainer,
    MenuItem,
    ProfileContainer,
    ProfileDropDownWrapper,
    ProfileEditBtn,
    ProfileEditImg,
    ProfileEditImgContainer,
    ProfileImg,
    ProfileImgContainer,
    ProfileInfoContainer,
    ProfileTag,
} from "./ProfileDropDown.style";
import { authAction } from "@/store/slice/auth.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootState } from "@/store/store";

export const ProfileDropDown: React.FC = () => {
    const navigate = useNavigate();

    const { memberType, nickname, email, profileImageUri } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const handleSignOutBtnClick = useCallback(() => {
        dispatch(authAction.signOut());
        dispatch(uiActions.closeNavDropDown());
    }, [dispatch]);

    const handleProfileEditBtnClick = useCallback(() => {
        if (memberType === MemberType.ROLE_CLIENT) navigate("/client/edit");
        else if (memberType === MemberType.ROLE_PEOPLE) navigate("/people/edit");
    }, [navigate, memberType]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 30 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ProfileDropDownWrapper>
                <ProfileContainer>
                    <ProfileImgContainer>
                        <ProfileImg src={profileImageUri ?? profileImg}></ProfileImg>
                        <ProfileTag>
                            <Text size="xs">{memberType === MemberType.ROLE_PEOPLE ? "피플" : "의뢰자"}</Text>
                        </ProfileTag>
                    </ProfileImgContainer>

                    <ProfileInfoContainer>
                        <Paragraph>
                            <Text size="xs" weight="bold">
                                {nickname || "닉네임이 없습니다"}
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <Text size="xs">{email}</Text>
                        </Paragraph>
                    </ProfileInfoContainer>

                    <ProfileEditBtn onClick={handleProfileEditBtnClick}>
                        <ProfileEditImgContainer>
                            <ProfileEditImg src={editIcon} />
                        </ProfileEditImgContainer>
                    </ProfileEditBtn>
                </ProfileContainer>

                <Div />

                <MenuContainer>
                    {profileMenu(memberType).map((item) => {
                        return (
                            <MenuItem key={item.id}>
                                <Link to={item.to}>
                                    <Text size="xs">{item.text}</Text>
                                </Link>
                            </MenuItem>
                        );
                    })}
                    <MenuItem onClick={handleSignOutBtnClick}>
                        <Text size="xs">로그아웃</Text>
                    </MenuItem>
                </MenuContainer>
            </ProfileDropDownWrapper>
        </motion.div>
    );
};
