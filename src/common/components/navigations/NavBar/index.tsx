import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AuthGuard } from "@/common/components/guards/AuthGuard";
import { NavAsideButton } from "@/common/components/navigations/NavAsideButton";
import { NavBarItem } from "@/common/components/navigations/NavBarItem";
import { NavBarProfileDropDown } from "@/common/components/navigations/NavBarProfileDropDown";
import { NavProfileItem } from "@/common/components/navigations/NavBarProfileItem";

import { RootState } from "@/store/store";

import { navItems } from "@/constants/navItems";

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
