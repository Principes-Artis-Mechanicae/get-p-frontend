import { Button } from "@/common/form/Button";
import { CheckBox } from "@/common/form/CheckBox";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { Title } from "@/common/typography/Title";

import SigninImg from "@/assets/auth/signin.svg";

import { CheckBoxContainer } from "../../components/auth/SignUpInputSection.style";
import {
    SigninCardBody,
    SigninHeader,
    SigninCardWrapper,
    SigninItem,
    SigninContainer,
    GotoSignup,
} from "./SignInPage.style";
import { SeekBtn } from "./SignInPage.style";

export default function SignInPage() {
    return (
        <SigninCardBody>
            <img src={SigninImg} alt="signin" />
            <SigninCardWrapper>
                <img src={"/logo.svg"} alt="signin" />
                <SigninHeader>
                    <Title>로그인</Title>
                </SigninHeader>

                <SigninContainer>
                    <SigninItem>
                        <Label htmlFor="id">아이디</Label>
                        <Input id="id" width="100%" height="40px" placeholder="이메일 주소를 입력해주세요." />
                    </SigninItem>

                    <SigninItem>
                        <Label htmlFor="pw">비밀번호</Label>
                        <Input id="pw" width="100%" height="40px" placeholder="비밀번호를 입력해주세요." />
                    </SigninItem>

                    <SigninItem>
                        <Button variant="primary" width="100%" height="54px">
                            로그인
                        </Button>
                    </SigninItem>

                    <CheckBoxContainer>
                        <CheckBox width="20px" height="20px">
                            {"로그인 유지"}
                        </CheckBox>
                        <SeekBtn variant="seek">비밀번호 찾기&gt;</SeekBtn>
                    </CheckBoxContainer>

                    <GotoSignup>
                        아직 GET-P 회원이 아니신가요?
                        <SeekBtn variant="signup">회원가입</SeekBtn>
                    </GotoSignup>
                </SigninContainer>
            </SigninCardWrapper>
        </SigninCardBody>
    );
}
