import { Button } from "get-p-design";
import { Input } from "get-p-design";
import { Label } from "get-p-design";
import { Title } from "get-p-design";

import { ProfileImageEdit } from "@getp/common/components/displays/ProfileImageEdit";

import { useEditClient } from "@getp/services/client/useEditClient";

import {
    EditClientPageForm,
    EditClientPageFormItem,
    EditClientPageProfileForm,
    EditClientPageWrapper,
} from "./EditClientPage.style";
import { css } from "@emotion/react";

export default function EditClientPage() {
    const { nicknameRef, emailRef, phoneNumberRef, zipCodeRef, streetRef, detailRef, handleRegisterBtnClick } =
        useEditClient();

    return (
        <EditClientPageWrapper>
            <Title>의뢰자 정보 수정</Title>

            <EditClientPageForm>
                <EditClientPageProfileForm>
                    <ProfileImageEdit />
                </EditClientPageProfileForm>

                <EditClientPageFormItem>
                    <Label>닉네임(필수)</Label>
                    <Input ref={nicknameRef} width="100%" height="40px" placeholder="닉네임을 입력해주세요"></Input>
                </EditClientPageFormItem>

                <EditClientPageFormItem>
                    <Label>전화번호(필수)</Label>
                    <Input
                        ref={phoneNumberRef}
                        width="100%"
                        height="40px"
                        placeholder="전화번호를 입력해주세요('-' 빼고 숫자만 입력)"
                    ></Input>
                </EditClientPageFormItem>

                <EditClientPageFormItem>
                    <Label>이메일(선택)</Label>
                    <Input
                        ref={emailRef}
                        width="100%"
                        height="40px"
                        placeholder="의뢰 연락을 받을 다른 이메일이 있는 경우 입력해주세요"
                    ></Input>
                </EditClientPageFormItem>

                <EditClientPageFormItem>
                    <Label>주소(선택)</Label>
                    <Input width="100%" height="45px" placeholder="우편번호" ref={zipCodeRef}>
                        <Button variant="outline" width="100px" height="40px">
                            우편번호 찾기
                        </Button>
                    </Input>
                    <Input width="100%" height="45px" placeholder="도로명주소" ref={streetRef}></Input>
                    <Input width="100%" height="45px" placeholder="상세주소" ref={detailRef}></Input>
                </EditClientPageFormItem>
            </EditClientPageForm>

            <Button
                variant="disabled"
                width="100%"
                height="50px"
                css={css`
                    margin: 100px 0px;
                `}
                onClick={handleRegisterBtnClick}
            >
                프로필 저장하기
            </Button>
        </EditClientPageWrapper>
    );
}
