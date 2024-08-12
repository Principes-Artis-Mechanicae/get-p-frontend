import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "principes-getp";

import { useNavAside } from "@/hooks/useNavAside";

import { navItems } from "@/constants/navItems";

import { navLinkStyle } from "@/styles/utils";

import { AuthGuard } from "../guard/AuthGuard";
import { Text } from "../typography/Text";
import { NavAsdieItem, NavAsideBackDrop, NavAsideContainer, NavAsideWrapper } from "./NavAside.style";
import { authAction } from "@/store/slice/auth.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

export const NavAside = () => {
    const navigate = useNavigate();
    const dispatch: RootDispatch = useDispatch();

    const { backdropRef, navasideRef } = useNavAside();

    const handleLogoutBtnClick = useCallback(() => {
        dispatch(authAction.signOut());
        dispatch(uiActions.closeNavAside());
        toast.info("로그아웃 되었습니다");
        navigate("/");
    }, [dispatch, navigate]);

    const handleRoute = useCallback(() => {
        dispatch(uiActions.closeNavAside());
    }, [dispatch]);

    return (
        <>
            <NavAsideBackDrop ref={backdropRef} />
            <NavAsideWrapper ref={navasideRef}>
                <NavAsideContainer>
                    {navItems.map((element, index) => {
                        return (
                            <NavLink key={index} to={element.to} style={navLinkStyle} onClick={handleRoute}>
                                <NavAsdieItem>{element.text}</NavAsdieItem>
                            </NavLink>
                        );
                    })}

                    <AuthGuard forLoginUser={false}>
                        <NavLink to="/auth/signin" style={navLinkStyle} onClick={handleRoute}>
                            <NavAsdieItem>로그인</NavAsdieItem>
                        </NavLink>
                    </AuthGuard>

                    <AuthGuard forLoginUser={false}>
                        <NavLink to="/auth/signup" style={navLinkStyle} onClick={handleRoute}>
                            <NavAsdieItem>회원가입</NavAsdieItem>
                        </NavLink>
                    </AuthGuard>

                    <AuthGuard forLoginUser={true}>
                        <Button variant="link" width="100%" height="50px" onClick={handleLogoutBtnClick}>
                            <NavAsdieItem>
                                <Text weight="bold">로그아웃</Text>
                            </NavAsdieItem>
                        </Button>
                    </AuthGuard>
                </NavAsideContainer>
            </NavAsideWrapper>
        </>
    );
};
