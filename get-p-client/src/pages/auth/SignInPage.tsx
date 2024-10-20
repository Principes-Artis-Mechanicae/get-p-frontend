import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { motion } from "framer-motion";
import { Button } from "get-p-design";
import { CheckBox } from "get-p-design";
import { Input } from "get-p-design";
import { Label } from "get-p-design";
import { Text } from "get-p-design";
import { Title } from "get-p-design";

import { RootDispatch } from "@getp/store/store";
import { signInThunkAction } from "@getp/store/thunk/auth.thunk";

import rocketImg from "@getp/assets/auth/rocket.png";

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
    const dispatch: RootDispatch = useDispatch();

    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    const handleFindPasswordBtnClick = useCallback(() => {
        navigate("/auth/findpw");
    }, [navigate]);

    const handleSignUpBtnClick = useCallback(() => {
        navigate("/auth/signup");
    }, [navigate]);

    const handleSignInBtnClick = useCallback(() => {
        if (!idRef.current?.value) toast.error("아이디를 입력해주세요!");
        else if (!pwRef.current?.value) toast.error("비밀번호를 입력해주세요!");
        else dispatch(signInThunkAction(idRef.current.value, pwRef.current.value, navigate));
    }, [dispatch, navigate]);

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
                                ref={idRef}
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
                                ref={pwRef}
                                id="pw"
                                type="password"
                                width="100%"
                                height="40px"
                                placeholder="비밀번호를 입력해주세요."
                            />
                        </SignInItem>

                        <SignInItem>
                            <Button variant="primary" width="100%" height="54px" onClick={handleSignInBtnClick}>
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
