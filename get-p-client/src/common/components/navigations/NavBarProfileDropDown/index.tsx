import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Text } from "get-p-design";
import { Paragraph } from "get-p-design";

import { profileMenu } from "@getp/apps/constants/profileMenuItems";

import { MemberType } from "@getp/services/auth/types";

import { authAction } from "@getp/store/slice/auth.slice";
import { uiActions } from "@getp/store/slice/ui.slice";
import { RootState } from "@getp/store/store";

import defaultProfileImage from "@getp/assets/common/default-profile.svg";
import editIcon from "@getp/assets/common/edit.svg";

import * as Styles from "./index.style";

export const NavBarProfileDropDown = () => {
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
            <Styles.DropDownWrapper>
                <Styles.Container>
                    <Styles.ImageContainer>
                        <Styles.Image src={profileImageUri ?? defaultProfileImage} alt="profile-image" />
                        <Styles.Tag>
                            <Text size="xs" color="#fff">
                                {memberType === MemberType.ROLE_PEOPLE ? "피플" : "의뢰자"}
                            </Text>
                        </Styles.Tag>
                    </Styles.ImageContainer>

                    <Styles.InfoContainer>
                        <Paragraph>
                            <Text size="xs" weight="bold">
                                {nickname ?? "닉네임이 없습니다"}
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <Text size="xs">{email ?? "example@domain.com"}</Text>
                        </Paragraph>
                    </Styles.InfoContainer>

                    <Styles.EditBtn onClick={handleProfileEditBtnClick}>
                        <Styles.ImageContainer>
                            <Styles.EditImage src={editIcon} alt="edit-image-icon" />
                        </Styles.ImageContainer>
                    </Styles.EditBtn>
                </Styles.Container>

                <Styles.Div />

                <Styles.MenuContainer>
                    {profileMenu(memberType).map((item) => {
                        return (
                            <Styles.MenuItem key={item.id}>
                                <Link to={item.to}>
                                    <Text size="xs">{item.text}</Text>
                                </Link>
                            </Styles.MenuItem>
                        );
                    })}
                    <Styles.MenuItem onClick={handleSignOutBtnClick}>
                        <Text size="xs">로그아웃</Text>
                    </Styles.MenuItem>
                </Styles.MenuContainer>
            </Styles.DropDownWrapper>
        </motion.div>
    );
};
