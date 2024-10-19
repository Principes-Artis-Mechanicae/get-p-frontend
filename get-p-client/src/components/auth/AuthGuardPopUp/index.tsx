import { useNavigate } from "react-router-dom";

import { Button } from "get-p-design";
import { Text } from "get-p-design";

import * as Styles from "./index.style";

export const AuthGuardPopUp = () => {
    const navigate = useNavigate();

    return (
        <Styles.Wrapper>
            <Button width="100%" height="50px" variant="primary" onClick={() => navigate("/auth/signin")}>
                로그인하고 내용 확인하기
            </Button>
            <Styles.Container>
                <Text size="s" color="secondary">
                    계정이 없으신가요?
                </Text>
                <Styles.SignUpButton onClick={() => navigate("/auth/signup")}>회원가입하기</Styles.SignUpButton>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
