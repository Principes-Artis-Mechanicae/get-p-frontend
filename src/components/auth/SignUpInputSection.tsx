import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@/common/form/Button";
import { CheckBox } from "@/common/form/CheckBox";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { Title } from "@/common/typography/Title";

import {
    SignUpSectionWrapper,
    SignUpSectionHeader,
    SignUpSectionContainer,
    SignUpItem,
    CheckBoxContainer,
    DetailBtn,
} from "./SignUpInputSection.style";
import { pageActions } from "@/store/slice/page.slice";
import { RootDispatch } from "@/store/store";

export default function SignUpInputSection() {
    const dispatch: RootDispatch = useDispatch();

    const handleNextStepBtnClick = useCallback(() => {
        dispatch(pageActions.nextPage());
    }, [dispatch]);

    return (
        <>
            <SignUpSectionWrapper>
                <SignUpSectionHeader>
                    <Title>회원가입</Title>
                </SignUpSectionHeader>

                <SignUpSectionContainer>
                    <SignUpItem>
                        <Label htmlFor="id">아이디</Label>
                        <Input id="id" width="100%" height="40px" placeholder="이메일 주소를 입력해주세요">
                            <Button variant="side" width="50px" height="38px">
                                인증
                            </Button>
                        </Input>
                    </SignUpItem>

                    <SignUpItem>
                        <Label htmlFor="pw">비밀번호</Label>
                        <Input
                            id="pw"
                            type="password"
                            width="100%"
                            height="40px"
                            placeholder="비밀번호를 입력해주세요. (영문,숫자,특수문자 조합 8-20자)"
                        ></Input>
                    </SignUpItem>

                    <SignUpItem>
                        <Label htmlFor="pw-verify">비밀번호 확인</Label>
                        <Input
                            id="pw-verify"
                            type="password"
                            width="100%"
                            height="40px"
                            placeholder="비밀번호를 다시 입력해주세요"
                        ></Input>
                    </SignUpItem>

                    <SignUpItem>
                        <CheckBoxContainer>
                            <CheckBox width="20px" height="20px">
                                GET-P 이용약관 (필수)
                            </CheckBox>
                            <DetailBtn>상세보기</DetailBtn>
                        </CheckBoxContainer>

                        <CheckBoxContainer>
                            <CheckBox width="20px" height="20px">
                                개인정보 수집 및 이용 동의 (필수)
                            </CheckBox>
                            <DetailBtn>상세보기</DetailBtn>
                        </CheckBoxContainer>

                        <CheckBox width="20px" height="20px">
                            마케팅 정보 수신 (선택)
                        </CheckBox>
                    </SignUpItem>

                    <SignUpItem>
                        <Button variant="primary" width="100%" height="54px" onClick={handleNextStepBtnClick}>
                            다음으로
                        </Button>
                    </SignUpItem>
                </SignUpSectionContainer>
            </SignUpSectionWrapper>
        </>
    );
}
