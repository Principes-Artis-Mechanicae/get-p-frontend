import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { navItems } from "@getp/apps/constants/navItems";

import { AuthGuard } from "@getp/common/components/guards/AuthGuard";
import { NavAsideButton } from "@getp/common/components/navigations/NavAsideButton";
import { NavBarItem } from "@getp/common/components/navigations/NavBarItem";
import { NavBarProfileDropDown } from "@getp/common/components/navigations/NavBarProfileDropDown";
import { NavProfileItem } from "@getp/common/components/navigations/NavBarProfileItem";

import { RootState } from "@getp/store/store";

import * as Styles from "./index.style";

export const NavBar = () => {
    const navigate = useNavigate();
    const { isProfileDropDownOpened } = useSelector((state: RootState) => state.ui);
    const { profileImageUri } = useSelector((state: RootState) => state.auth);

    const handleHomeClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <>
            <Styles.Wrapper>
                <Styles.Container>
                    <Styles.Items style={{ gap: "25px" }}>
                        <Styles.HeadItem src="/logo.svg" onClick={handleHomeClick} />

                        {navItems.map((element, index) => {
                            return (
                                <NavBarItem key={index} to={element.to}>
                                    {element.text}
                                </NavBarItem>
                            );
                        })}
                    </Styles.Items>

                    <Styles.Items>
                        <AuthGuard forLoginUser={false}>
                            <NavBarItem to="/auth/signin" style={{ margin: "0px 10px" }}>
                                로그인
                            </NavBarItem>
                            <NavBarItem to="/auth/signup" style={{ margin: "0px 10px" }}>
                                회원가입
                            </NavBarItem>
                        </AuthGuard>

                        <AuthGuard forLoginUser={true}>
                            <NavProfileItem imgSrc={profileImageUri ?? ""} />
                            {isProfileDropDownOpened && <NavBarProfileDropDown />}
                        </AuthGuard>

                        <NavAsideButton />
                    </Styles.Items>
                </Styles.Container>
            </Styles.Wrapper>
        </>
    );
};
