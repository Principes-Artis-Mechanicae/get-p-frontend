import { useNavigate } from "react-router-dom";

import { Button } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";

import { SignInPopUpWrapper, SignInPopUpContainer, SignUpButton } from "./SignInPopUp.style";

export const SignInPopUp = () => {
    const navigate = useNavigate();

    return (
        <SignInPopUpWrapper>
            <Button width="100%" height="50px" variant="primary" onClick={() => navigate("/auth/signin")}>
                로그인하고 내용 확인하기
            </Button>
            <SignInPopUpContainer>
                <Text size="s" color="secondary">
                    계정이 없으신가요?
                </Text>
                <SignUpButton onClick={() => navigate("/auth/signup")}>회원가입하기</SignUpButton>
            </SignInPopUpContainer>
        </SignInPopUpWrapper>
    );
};
