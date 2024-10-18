import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { motion } from "framer-motion";
import { Button } from "principes-getp";
import { CheckBox } from "principes-getp";
import { Input } from "principes-getp";
import { Label } from "principes-getp";

import { REGEXP_PASSWORD, REGEXP_EMAIL } from "@getp/apps/constants/regex";

import { Modal } from "@getp/common/components/overlays/Modal";
import { Paragraph } from "@getp/common/components/typography/Paragraph/Paragraph";
import { Text } from "@getp/common/components/typography/Text";
import { Title } from "@getp/common/components/typography/Title/Title";
import { useInputValidation } from "@getp/common/hooks/useInputValidation";
import { formatTime } from "@getp/common/utils/format";

import { authService } from "@getp/services/auth/service";

import { signUpAction } from "@getp/store/slice/signup.slice";
import { uiActions } from "@getp/store/slice/ui.slice";
import { RootDispatch, RootState } from "@getp/store/store";
import { signUpThunkAction } from "@getp/store/thunk/signup.thunk";

import * as Styles from "./index.style";

export default function SignUpInputSection() {
    const dispatch: RootDispatch = useDispatch();
    const { isModalOpened } = useSelector((state: RootState) => state.ui);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordCheckRef = useRef<HTMLInputElement>(null);
    const termsAgreementRef = useRef<HTMLInputElement>(null);
    const infoAgreementRef = useRef<HTMLInputElement>(null);
    const verificationRef = useRef<HTMLInputElement>(null);

    const [isEmailVerificationFieldVisible, setIsEmailVerificationFieldVisible] = useState<boolean>(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(240);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

    const {
        value: email,
        isValid: isEmailAddressValid,
        onChange: onEmailAddressChange,
    } = useInputValidation(REGEXP_EMAIL);

    const {
        value: password,
        isValid: isPasswordValid,
        onChange: onPasswordChange,
    } = useInputValidation(REGEXP_PASSWORD);

    const startTimer = () => {
        setTimer(240);
        setIsTimerRunning(true);
        const intervalId = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);
    };

    const handleEmailVerificationBtnClick = useCallback(() => {
        if (!REGEXP_EMAIL.test(email)) toast.error("올바른 형식이 아닙니다!");
        else {
            authService.verifyEmail({ email });
            setIsEmailVerificationFieldVisible(true);
            startTimer();
        }
    }, [email]);

    const handlePasswordChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (password === e.target.value) setIsPasswordCorrect(true);
            else setIsPasswordCorrect(false);
        },
        [password],
    );

    const handleVerificationFailBtnClick = useCallback(() => {
        dispatch(uiActions.showModal());
    }, [dispatch]);

    const handleNextStepBtnClick = useCallback(() => {
        if (!emailRef.current?.value) toast.error("이메일을 입력해주세요!");
        else if (!passwordRef.current?.value) toast.error("비밀번호를 입력해주세요!");
        else if (passwordRef.current.value !== passwordCheckRef.current?.value)
            toast.error("비밀번호가 일치하지 않습니다!");
        else if (!(termsAgreementRef.current?.checked && infoAgreementRef.current?.checked))
            toast.error("이용약관 및 개인정보 수집에 동의해주세요!");
        else if (!verificationRef.current?.value) toast.error("인증 번호를 입력해주세요!");
        else {
            dispatch(signUpAction.setSignUpEmailValue(emailRef.current.value));
            dispatch(signUpAction.setSignUpPasswordValue(passwordRef.current.value));
            dispatch(signUpAction.setSignUpAgreementValue(true));
            dispatch(signUpAction.setVerificationCode(verificationRef.current.value));
            dispatch(signUpThunkAction());
        }
    }, [dispatch]);

    return (
        <>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {isModalOpened && (
                    <Modal width="400px">
                        <Title>
                            <Text size="l" weight="bold">
                                이메일을 받지 못하셨나요 ?
                            </Text>
                        </Title>

                        <Paragraph>
                            <Text>1. 이메일을 올바르게 입력했는지 다시 확인해 보세요.</Text>
                        </Paragraph>
                        <Paragraph>
                            <Text>2. 스팸함 또는 휴지통을 확인해 보세요.</Text>
                        </Paragraph>
                    </Modal>
                )}

                <Styles.SectionWrapper>
                    <Styles.SectionHeader>
                        <Title>회원가입</Title>
                    </Styles.SectionHeader>

                    <Styles.SectionContainer>
                        <Styles.Item>
                            <Label htmlFor="id">아이디</Label>
                            <Input
                                ref={emailRef}
                                id="id"
                                width="100%"
                                height="40px"
                                placeholder="이메일 주소를 입력해주세요"
                                onChange={onEmailAddressChange}
                                error={!isEmailAddressValid ? "올바른 형식이 아닙니다" : ""}
                            >
                                <Button
                                    variant="side"
                                    width="50px"
                                    height="38px"
                                    onClick={handleEmailVerificationBtnClick}
                                >
                                    인증
                                </Button>
                            </Input>
                        </Styles.Item>

                        {isEmailVerificationFieldVisible && (
                            <>
                                <Styles.Item>
                                    <Input
                                        ref={verificationRef}
                                        id="id"
                                        width="100%"
                                        height="40px"
                                        placeholder="인증번호를 입력해주세요"
                                    >
                                        <Button variant="side" width="50px" height="38px">
                                            {isTimerRunning && (
                                                <Text weight="bold" color="point">
                                                    {formatTime(timer)}
                                                </Text>
                                            )}
                                        </Button>
                                    </Input>
                                    <Button
                                        variant="link"
                                        width="auto"
                                        height="25px"
                                        onClick={handleVerificationFailBtnClick}
                                    >
                                        <Text size="xs" weight="bold">
                                            인증번호를 받지 못하셨나요?
                                        </Text>
                                    </Button>
                                </Styles.Item>
                            </>
                        )}

                        <Styles.Item>
                            <Label htmlFor="pw">비밀번호</Label>
                            <Input
                                ref={passwordRef}
                                id="pw"
                                type="password"
                                width="100%"
                                height="40px"
                                placeholder="비밀번호를 입력해주세요. (영문,숫자,특수문자 조합 8-20자)"
                                onChange={onPasswordChange}
                                error={
                                    !isPasswordValid
                                        ? "비밀번호는 영문,숫자,특수문자로 조합된 8-20자 이어야 합니다"
                                        : ""
                                }
                            />
                        </Styles.Item>

                        <Styles.Item>
                            <Label htmlFor="pw-verify">비밀번호 확인</Label>
                            <Input
                                ref={passwordCheckRef}
                                id="pw-verify"
                                type="password"
                                width="100%"
                                height="40px"
                                placeholder="비밀번호를 다시 입력해주세요"
                                onChange={handlePasswordChange}
                                error={!isPasswordCorrect ? "비밀번호가 일치하지 않습니다" : ""}
                            />
                        </Styles.Item>

                        <Styles.Item>
                            <Styles.CheckBoxContainer>
                                <CheckBox width="20px" height="20px" ref={termsAgreementRef}>
                                    GET-P 이용약관 (필수)
                                </CheckBox>
                                <Styles.DetailButton>상세보기</Styles.DetailButton>
                            </Styles.CheckBoxContainer>

                            <Styles.CheckBoxContainer>
                                <CheckBox width="20px" height="20px" ref={infoAgreementRef}>
                                    개인정보 수집 및 이용 동의 (필수)
                                </CheckBox>
                                <Styles.DetailButton>상세보기</Styles.DetailButton>
                            </Styles.CheckBoxContainer>

                            <CheckBox width="20px" height="20px">
                                마케팅 정보 수신 (선택)
                            </CheckBox>
                        </Styles.Item>

                        <Styles.Item>
                            <Button variant="primary" width="100%" height="54px" onClick={handleNextStepBtnClick}>
                                다음으로
                            </Button>
                        </Styles.Item>
                    </Styles.SectionContainer>
                </Styles.SectionWrapper>
            </motion.div>
        </>
    );
}
