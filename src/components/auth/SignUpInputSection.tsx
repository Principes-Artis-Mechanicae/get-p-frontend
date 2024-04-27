import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { motion } from "framer-motion";

import { Modal } from "@/common/feedback/Modal";
import { Button } from "@/common/form/Button";
import { CheckBox } from "@/common/form/CheckBox";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { Paragraph } from "@/common/typography/Paragraph";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import { useInputValidation } from "@/hooks/useInputValidation";

import { authService } from "@/services/auth/auth.service";

import { REGEXP_EMAIL, REGEXP_PASSWORD } from "@/constants/regex";

import {
    SignUpSectionWrapper,
    SignUpSectionHeader,
    SignUpSectionContainer,
    SignUpItem,
    CheckBoxContainer,
    DetailBtn,
} from "./SignUpInputSection.style";
import { signUpAction } from "@/store/slice/signup.slice";
import { uiActions } from "@/store/slice/ui.slice";
import { RootDispatch, RootState } from "@/store/store";
import { signUpThunkAction } from "@/store/thunk/signup.thunk";

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

    const handleEmailVerificationBtnClick = useCallback(() => {
        if (!REGEXP_EMAIL.test(email)) toast.error("올바른 형식이 아닙니다!");
        else {
            authService.verifyEmail({ email });
            setIsEmailVerificationFieldVisible(true);
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
                    <Modal width="350px" height="300px">
                        <Title>
                            <Text size="l" weight="bold">
                                이메일을 받지 못하셨나요 ?
                            </Text>
                        </Title>

                        <Paragraph>
                            <Text>1. 이메일을 올바르게 입력했는지 다시 확인해 보세요.</Text>
                            <Text>2. 스팸함 또는 휴지통을 확인해 보세요.</Text>
                        </Paragraph>
                    </Modal>
                )}

                <SignUpSectionWrapper>
                    <SignUpSectionHeader>
                        <Title>회원가입</Title>
                    </SignUpSectionHeader>

                    <SignUpSectionContainer>
                        <SignUpItem>
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
                        </SignUpItem>

                        {isEmailVerificationFieldVisible && (
                            <>
                                <SignUpItem>
                                    <Input
                                        ref={verificationRef}
                                        id="id"
                                        width="100%"
                                        height="40px"
                                        placeholder="인증번호를 입력해주세요"
                                    >
                                        <Button variant="side" width="50px" height="38px">
                                            <Text weight="bold" color="point">
                                                4:00
                                            </Text>
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
                                </SignUpItem>
                            </>
                        )}

                        <SignUpItem>
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
                            ></Input>
                        </SignUpItem>

                        <SignUpItem>
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
                            ></Input>
                        </SignUpItem>

                        <SignUpItem>
                            <CheckBoxContainer>
                                <CheckBox width="20px" height="20px" ref={termsAgreementRef}>
                                    GET-P 이용약관 (필수)
                                </CheckBox>
                                <DetailBtn>상세보기</DetailBtn>
                            </CheckBoxContainer>

                            <CheckBoxContainer>
                                <CheckBox width="20px" height="20px" ref={infoAgreementRef}>
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
            </motion.div>
        </>
    );
}
