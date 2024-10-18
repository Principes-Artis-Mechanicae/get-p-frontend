import { Button } from "principes-getp";
import { Input } from "principes-getp";
import { Label } from "principes-getp";

import { ProfileImageEdit } from "@getp/common/components/displays/ProfileImageEdit";
import { Paragraph } from "@getp/common/components/typography/Paragraph/Paragraph";
import { Text } from "@getp/common/components/typography/Text";
import { Title } from "@getp/common/components/typography/Title/Title";

import { useRegisterClient } from "@getp/services/client/useRegisterClient";

import {
    RegisterClientPageContainer,
    RegisterClientPageFormItem,
    RegisterClientPageProfileForm,
    RegisterClientPageWrapper,
} from "./RegisterClientPage.style";
import { css } from "@emotion/react";

export default function RegisterClientPage() {
    const { nicknameRef, emailRef, phoneNumberRef, zipCodeRef, streetRef, detailRef, handleRegisterBtnClick } =
        useRegisterClient();

    return (
        <RegisterClientPageWrapper>
            <Title>의뢰자 정보 등록</Title>
            <Paragraph size="l">
                <Text size="l" color="#476FF1" weight="bold">
                    GET-P
                </Text>
                {" 의뢰자 정보를 입력해 주세요"}
            </Paragraph>

            <RegisterClientPageContainer>
                <RegisterClientPageProfileForm>
                    <ProfileImageEdit />
                </RegisterClientPageProfileForm>

                <RegisterClientPageFormItem>
                    <Label>닉네임(필수)</Label>
                    <Input ref={nicknameRef} width="100%" height="40px" placeholder="닉네임을 입력해주세요"></Input>
                </RegisterClientPageFormItem>

                <RegisterClientPageFormItem>
                    <Label>전화번호(필수)</Label>
                    <Input
                        ref={phoneNumberRef}
                        width="100%"
                        height="40px"
                        placeholder="전화번호를 입력해주세요('-' 빼고 숫자만 입력)"
                    ></Input>
                </RegisterClientPageFormItem>

                <RegisterClientPageFormItem>
                    <Label>이메일(선택)</Label>
                    <Input
                        ref={emailRef}
                        width="100%"
                        height="40px"
                        placeholder="의뢰 연락을 받을 다른 이메일이 있는 경우 입력해주세요"
                    ></Input>
                </RegisterClientPageFormItem>

                <RegisterClientPageFormItem>
                    <Label>주소(선택)</Label>
                    <Input width="100%" height="45px" placeholder="우편번호" ref={zipCodeRef}>
                        <Button variant="outline" width="100px" height="40px">
                            우편번호 찾기
                        </Button>
                    </Input>
                    <Input width="100%" height="45px" placeholder="도로명주소" ref={streetRef}></Input>
                    <Input width="100%" height="45px" placeholder="상세주소" ref={detailRef}></Input>
                </RegisterClientPageFormItem>
            </RegisterClientPageContainer>

            <Button
                variant="primary"
                width="100%"
                height="50px"
                css={css`
                    margin: 100px 0px;
                `}
                onClick={handleRegisterBtnClick}
            >
                의뢰자 정보 등록하기
            </Button>
        </RegisterClientPageWrapper>
    );
}
