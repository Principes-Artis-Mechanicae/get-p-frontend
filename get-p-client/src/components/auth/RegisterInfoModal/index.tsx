import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "principes-getp";

import { Paragraph } from "@getp/common/components/typography/Paragraph/Paragraph";
import { Text } from "@getp/common/components/typography/Text";
import { Title } from "@getp/common/components/typography/Title/Title";

import { MemberType } from "@getp/services/auth/types";

import { authAction } from "@getp/store/slice/auth.slice";
import { RootDispatch, RootState } from "@getp/store/store";

import * as Styles from "./index.style";
import { css } from "@emotion/react";

export const RegisterInfoModal = () => {
    const navigate = useNavigate();
    const dispatch: RootDispatch = useDispatch();
    const { memberType } = useSelector((state: RootState) => state.auth);

    const member = useMemo(() => {
        return memberType === MemberType.ROLE_CLIENT ? "의뢰자" : "피플";
    }, [memberType]);

    const handleClose = useCallback(() => {
        dispatch(authAction.closeRegisterInfoModal());
    }, [dispatch]);

    const handleCloseForever = useCallback(() => {
        dispatch(authAction.closeRegisterInfoModalForever());
    }, [dispatch]);

    const navigateToRegister = useCallback(() => {
        handleClose();
        navigate(memberType === MemberType.ROLE_CLIENT ? "/client/register" : "/people/register");
    }, [handleClose, memberType, navigate]);

    return (
        <>
            <Styles.BackDrop />
            <Styles.Wrapper width="400px">
                <Styles.Controller width="400px" onClick={handleClose}>
                    <img src="/close.svg" alt="close-icon" />
                </Styles.Controller>
                <Styles.Container>
                    <Title>아직 {member}정보를 등록하지 않았어요!</Title>

                    <br />
                    <Paragraph>{member} 정보을 등록하면 GET-P 의</Paragraph>
                    <Paragraph>모든 서비스를 이용할 수 있어요!</Paragraph>

                    <br />
                    <Button variant="primary" width="100%" height="50px" onClick={navigateToRegister}>
                        {member} 정보 등록하기
                    </Button>

                    <Button
                        variant="link"
                        width="fit-content"
                        height="30px"
                        onClick={handleCloseForever}
                        css={css`
                            margin-left: auto;
                        `}
                    >
                        <Text size="xs">다음 로그인까지 다시보지 않기</Text>
                    </Button>
                </Styles.Container>
            </Styles.Wrapper>
        </>
    );
};
