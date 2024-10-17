import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { Button } from "principes-getp";

import { Text } from "@/common/components/typography/Text";
import { Title } from "@/common/components/typography/Title/Title";

import { signUpAction } from "@/store/slice/signup.slice";
import { RootDispatch } from "@/store/store";

import congratsImage from "@/assets/auth/congrats1.png";

import * as Styles from "./index.style";

export default function SignUpCompleteSection() {
    const navigate = useNavigate();
    const dispatch: RootDispatch = useDispatch();

    const handleLoginBtnClick = useCallback(() => {
        dispatch(signUpAction.initializeSection());
        navigate("/auth/signin");
    }, [navigate, dispatch]);

    const handleRegisterInfoBtnClick = useCallback(() => {
        dispatch(signUpAction.initializeSection());
        navigate("/");
    }, [navigate, dispatch]);

    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Styles.SectionWrapper>
                <Styles.SectionHeader>
                    <Title>가입완료</Title>
                </Styles.SectionHeader>

                <Styles.Container>
                    <Styles.Item>
                        <img src={congratsImage} width="312px" height="230px" alt="congrats-signup-complete" />
                    </Styles.Item>

                    <Styles.TextItem>
                        <Text size="l" color="point" weight="bold">
                            환영합니다.
                        </Text>
                        <br />
                        <Text size="l" color="primary" weight="bold">
                            가입이 완료되었어요.
                        </Text>
                    </Styles.TextItem>

                    <Styles.Item>
                        <Button variant="secondary" width="100%" height="54px" onClick={handleLoginBtnClick}>
                            <Text size="s" color="point" weight="bold">
                                로그인하기
                            </Text>
                        </Button>
                    </Styles.Item>
                    <Styles.Item>
                        <Button variant="primary" width="100%" height="54px" onClick={handleRegisterInfoBtnClick}>
                            <Text size="s" color="white" weight="bold">
                                내 정보 등록하러 가기
                            </Text>
                        </Button>
                    </Styles.Item>
                </Styles.Container>
            </Styles.SectionWrapper>
        </motion.div>
    );
}
