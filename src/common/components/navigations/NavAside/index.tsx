import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "principes-getp";

import { AuthGuard } from "@/common/components/guards/AuthGuard";
import { Text } from "@/common/components/typography/Text";

import { useNavAside } from "@/hooks/useNavAside";

import { authAction } from "@/store/slice/auth.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

import { navItems } from "@/constants/navItems";

import { navLinkStyle } from "@/styles/utils";

import * as Styles from "./index.style";

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
            <Styles.BackDrop ref={backdropRef} />
            <Styles.Wrapper ref={navasideRef}>
                <Styles.Container>
                    {navItems.map((element, index) => {
                        return (
                            <NavLink key={index} to={element.to} style={navLinkStyle} onClick={handleRoute}>
                                <Styles.Item>{element.text}</Styles.Item>
                            </NavLink>
                        );
                    })}

                    <AuthGuard forLoginUser={false}>
                        <NavLink to="/auth/signin" style={navLinkStyle} onClick={handleRoute}>
                            <Styles.Item>로그인</Styles.Item>
                        </NavLink>
                    </AuthGuard>

                    <AuthGuard forLoginUser={false}>
                        <NavLink to="/auth/signup" style={navLinkStyle} onClick={handleRoute}>
                            <Styles.Item>회원가입</Styles.Item>
                        </NavLink>
                    </AuthGuard>

                    <AuthGuard forLoginUser={true}>
                        <Button variant="link" width="100%" height="50px" onClick={handleLogoutBtnClick}>
                            <Styles.Item>
                                <Text weight="bold">로그아웃</Text>
                            </Styles.Item>
                        </Button>
                    </AuthGuard>
                </Styles.Container>
            </Styles.Wrapper>
        </>
    );
};
