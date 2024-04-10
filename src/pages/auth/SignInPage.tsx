import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { Button } from "@/common/form/Button";
import { CheckBox } from "@/common/form/CheckBox";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import rocketImg from "@/assets/auth/rocket.png";

import {
    SignInWrapper,
    SignInBackground,
    SignInContainer,
    SignInItem,
    OptionItem,
    SignInBody,
    SignInFooter,
} from "./SignInPage.style";

export default function SignInPage() {
    const navigate = useNavigate();

    const handleFindPasswordBtnClick = useCallback(() => {
        navigate("/auth/findpw");
    }, [navigate]);

    const handleSignUpBtnClick = useCallback(() => {
        navigate("/auth/signup");
    }, [navigate]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <SignInWrapper>
                <SignInBackground>
                    <img src={rocketImg} alt="rocket" />
                </SignInBackground>

                <SignInContainer>
                    <SignInBody>
                        <img src="/logo.svg" width={100} height={21} alt="" />
                        <Title>로그인</Title>

                        <SignInItem>
                            <Label htmlFor="id">아이디</Label>
                            <Input
                                id="id"
                                type="email"
                                width="100%"
                                height="40px"
                                placeholder="이메일 주소를 입력해주세요."
                            />
                        </SignInItem>

                        <SignInItem>
                            <Label htmlFor="pw">비밀번호</Label>
                            <Input
                                id="pw"
                                type="password"
                                width="100%"
                                height="40px"
                                placeholder="비밀번호를 입력해주세요."
                            />
                        </SignInItem>

                        <SignInItem>
                            <Button variant="primary" width="100%" height="54px">
                                로그인
                            </Button>
                        </SignInItem>

                        <OptionItem>
                            <CheckBox width="20px" height="20px">
                                <Text size="s">로그인 유지</Text>
                            </CheckBox>
                            <Button variant="link" width="100px" height="20px" onClick={handleFindPasswordBtnClick}>
                                <Text size="s" weight="bold" color="#676F7C">
                                    비밀번호 찾기
                                </Text>
                            </Button>
                        </OptionItem>
                    </SignInBody>

                    <SignInFooter>
                        <Text size="s">아직 GET-P 회원이 아니신가요?</Text>
                        <Button variant="link" width="80px" height="25px" onClick={handleSignUpBtnClick}>
                            <Text size="s" weight="bold" color="#476FF1">
                                회원가입
                            </Text>
                        </Button>
                    </SignInFooter>
                </SignInContainer>
            </SignInWrapper>
        </motion.div>
    );
}
