import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { navItems } from "@/constants/navItems";

import { ProfileDropDown } from "../display/ProfileDropDown";
import { AuthGuard } from "../guard/AuthGuard";
import { NavAsideButton } from "./NavAsideButton";
import { NavBarContainer, NavBarHeadItem, NavBarItems, NavBarWrapper } from "./NavBar.style";
import { NavBarItem } from "./NavBarItem";
import { NavProfileItem } from "./NavProfileItem";
import { RootState } from "@/store/store";

export const NavBar = () => {
    const navigate = useNavigate();
    const { isProfileDropDownOpened } = useSelector((state: RootState) => state.ui);
    const { profileImageUri } = useSelector((state: RootState) => state.auth);

    const handleHomeClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <>
            <NavBarWrapper>
                <NavBarContainer>
                    <NavBarItems style={{ gap: "25px" }}>
                        <NavBarHeadItem src="/logo.svg" onClick={handleHomeClick} />

                        {navItems.map((element, index) => {
                            return (
                                <NavBarItem key={index} to={element.to}>
                                    {element.text}
                                </NavBarItem>
                            );
                        })}
                    </NavBarItems>

                    <NavBarItems>
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
                            {isProfileDropDownOpened && <ProfileDropDown />}
                        </AuthGuard>

                        <NavAsideButton />
                    </NavBarItems>
                </NavBarContainer>
            </NavBarWrapper>
        </>
    );
};
