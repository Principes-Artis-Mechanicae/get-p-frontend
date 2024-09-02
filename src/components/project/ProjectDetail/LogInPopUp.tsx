import { Button } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";

import { LogInPopUpWrapper, LogInPopUpContainer, SignUpButton } from "./LogInPopUp.style";

export const LogInPopUp: React.FC = () => {
    return (
        <LogInPopUpWrapper>
            <Button width="300px" height="50px" variant="primary">
                로그인하고 내용 확인하기
            </Button>
            <LogInPopUpContainer>
                <Text size="s" color="secondary">
                    계정이 없으신가요?
                </Text>
                <SignUpButton>회원가입하기</SignUpButton>
            </LogInPopUpContainer>
        </LogInPopUpWrapper>
    );
};
