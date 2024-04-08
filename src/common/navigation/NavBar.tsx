import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { navItems } from "@/constants/navItems";

import { NavAsideButton } from "./NavAsideButton";
import { NavBarContainer, NavBarHeadItem, NavBarWrapper } from "./NavBar.style";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
    const navigate = useNavigate();

    const handleHomeClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <>
            <NavBarWrapper>
                <NavBarContainer>
                    <NavBarHeadItem src="/logo.svg" onClick={handleHomeClick} />

                    {navItems.map((element, index) => {
                        return (
                            <NavBarItem key={index} to={element.to}>
                                {element.text}
                            </NavBarItem>
                        );
                    })}

                    <li style={{ flexGrow: 1, listStyle: "none" }} />

                    <NavBarItem to="/auth/signin">로그인</NavBarItem>
                    <NavBarItem to="/auth/signup">회원가입</NavBarItem>

                    <NavAsideButton />
                </NavBarContainer>
            </NavBarWrapper>
        </>
    );
};
