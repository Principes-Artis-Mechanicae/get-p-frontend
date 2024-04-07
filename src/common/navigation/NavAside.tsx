import { NavLink } from "react-router-dom";

import { useNavAside } from "@/hooks/useNavAside";

import { navItems } from "@/constants/navItems";

import { navLinkStyle } from "@/styles/utils";

import { NavAsdieItem, NavAsideBackDrop, NavAsideContainer, NavAsideWrapper } from "./NavAside.style";

export const NavAside = () => {
    const { backdropRef, navasideRef } = useNavAside();

    return (
        <>
            <NavAsideBackDrop ref={backdropRef} />
            <NavAsideWrapper ref={navasideRef}>
                <NavAsideContainer>
                    {navItems.map((element, index) => {
                        return (
                            <NavLink key={index} to={element.to} style={navLinkStyle}>
                                <NavAsdieItem>{element.text}</NavAsdieItem>
                            </NavLink>
                        );
                    })}

                    <NavLink to="/auth/signin" style={navLinkStyle}>
                        <NavAsdieItem>로그인</NavAsdieItem>
                    </NavLink>

                    <NavLink to="/auth/signup" style={navLinkStyle}>
                        <NavAsdieItem>회원가입</NavAsdieItem>
                    </NavLink>
                </NavAsideContainer>
            </NavAsideWrapper>
        </>
    );
};
