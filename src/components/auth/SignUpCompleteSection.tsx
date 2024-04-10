import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { Button } from "@/common/form/Button";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import {
    SignUpCompleteContainer,
    SignUpCompleteItem,
    SignUpCompleteSectionHeader,
    SignUpCompleteSectionWrapper,
    SignUpCompleteTextItem,
} from "./SignUpCompleteSection.style";
import { signUpAction } from "@/store/slice/signup.slice";
import { RootDispatch } from "@/store/store";

export default function SignUpCompleteSection() {
    const navigate = useNavigate();
    const dispatch: RootDispatch = useDispatch();

    const handleLoginBtnClick = useCallback(() => {
        dispatch(signUpAction.initalizeState());
        navigate("/auth/signin");
    }, [navigate, dispatch]);

    const handleRegisterInfoBtnClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <SignUpCompleteSectionWrapper>
                <SignUpCompleteSectionHeader>
                    <Title>가입완료</Title>
                </SignUpCompleteSectionHeader>

                <SignUpCompleteContainer>
                    <SignUpCompleteItem>
                        <img src="/src/assets/auth/congrats2.png" width="312px" height="230px" />
                    </SignUpCompleteItem>

                    <SignUpCompleteTextItem>
                        <Text size="l" color="point" weight="bold">
                            환영합니다.
                        </Text>
                        <br />
                        <Text size="l" color="primary" weight="bold">
                            가입이 완료되었어요.
                        </Text>
                    </SignUpCompleteTextItem>

                    <SignUpCompleteItem>
                        <Button variant="secondary" width="100%" height="54px" onClick={handleLoginBtnClick}>
                            <Text size="s" color="point" weight="bold">
                                로그인하기
                            </Text>
                        </Button>
                    </SignUpCompleteItem>
                    <SignUpCompleteItem>
                        <Button variant="primary" width="100%" height="54px" onClick={handleRegisterInfoBtnClick}>
                            <Text size="s" color="white" weight="bold">
                                내 정보 등록하러 가기
                            </Text>
                        </Button>
                    </SignUpCompleteItem>
                </SignUpCompleteContainer>
            </SignUpCompleteSectionWrapper>
        </motion.div>
    );
}
