import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { navItems } from "@/constants/navItems";

import { Button } from "../form/Button";
import { AuthGuard } from "../guard/AuthGuard";
import { Text } from "../typography/Text";
import { NavAsideButton } from "./NavAsideButton";
import { NavBarContainer, NavBarHeadItem, NavBarWrapper } from "./NavBar.style";
import { NavBarItem } from "./NavBarItem";
import { authAction } from "@/store/slice/auth.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch } from "@/store/store";

export const NavBar = () => {
    const navigate = useNavigate();
    const dispatch: RootDispatch = useDispatch();

    const handleHomeClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const handleLogoutBtnClick = useCallback(() => {
        dispatch(authAction.signOut());
        dispatch(uiActions.closeNavAside());
        toast.info("로그아웃 되었습니다");
        navigate("/");
    }, [dispatch, navigate]);

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

                    <AuthGuard forLoginUser={false}>
                        <NavBarItem to="/auth/signin">로그인</NavBarItem>
                        <NavBarItem to="/auth/signup">회원가입</NavBarItem>
                    </AuthGuard>

                    <AuthGuard forLoginUser={true}>
                        <Button variant="link" width="auto" height="50px" onClick={handleLogoutBtnClick}>
                            <Text weight="bold">로그아웃</Text>
                        </Button>
                    </AuthGuard>

                    <NavAsideButton />
                </NavBarContainer>
            </NavBarWrapper>
        </>
    );
};
