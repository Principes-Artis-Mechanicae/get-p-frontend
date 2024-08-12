import { Button } from "principes-getp";
import { Input } from "principes-getp";
import { Label } from "principes-getp";

import { Profile } from "@/components/__common__/display/Profile";
import { Title } from "@/components/__common__/typography/Title";

import {
    EditClientPageForm,
    EditClientPageFormItem,
    EditClientPageProfileForm,
    EditClientPageWrapper,
} from "./EditClientPage.style";
import { css } from "@emotion/react";

export default function EditClientPage() {
    return (
        <EditClientPageWrapper>
            <Title>의뢰자 정보 수정</Title>

            <EditClientPageForm>
                <EditClientPageProfileForm>
                    <Profile />
                </EditClientPageProfileForm>

                <EditClientPageFormItem>
                    <Label>닉네임(필수)</Label>
                    <Input width="100%" height="40px" placeholder="닉네임을 입력해주세요"></Input>
                </EditClientPageFormItem>

                <EditClientPageFormItem>
                    <Label>전화번호(필수)</Label>
                    <Input
                        width="100%"
                        height="40px"
                        placeholder="전화번호를 입력해주세요('-' 빼고 숫자만 입력)"
                    ></Input>
                </EditClientPageFormItem>

                <EditClientPageFormItem>
                    <Label>이메일(선택)</Label>
                    <Input
                        width="100%"
                        height="40px"
                        placeholder="의뢰 연락을 받을 다른 이메일이 있는 경우 입력해주세요"
                    ></Input>
                </EditClientPageFormItem>

                <EditClientPageFormItem>
                    <Label>주소(선택)</Label>
                    <Input width="100%" height="45px" placeholder="우편번호">
                        <Button variant="outline" width="100px" height="40px">
                            우편번호 찾기
                        </Button>
                    </Input>
                    <Input width="100%" height="45px" placeholder="도로명주소"></Input>
                    <Input width="100%" height="45px" placeholder="상세주소"></Input>
                </EditClientPageFormItem>

                <EditClientPageFormItem>
                    <Label>계좌(선택)</Label>
                    <Input width="100%" height="45px"></Input>
                    <Input width="100%" height="45px"></Input>
                    <Input width="100%" height="45px"></Input>
                </EditClientPageFormItem>
            </EditClientPageForm>

            <Button
                variant="disabled"
                width="100%"
                height="50px"
                css={css`
                    margin: 100px 0px;
                `}
            >
                프로필 저장하기
            </Button>
        </EditClientPageWrapper>
    );
}
