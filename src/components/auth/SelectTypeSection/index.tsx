import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { motion } from "framer-motion";
import { Button } from "principes-getp";

import { Text } from "@/common/components/typography/Text";

import { MemberTypeCard } from "@/components/auth/MemberTypeCard";

import { MemberType } from "@/services/auth/types";

import { signUpAction } from "@/store/slice/signup.slice";
import { RootDispatch, RootState } from "@/store/store";

import * as Styles from "./index.style";

export default function SelectTypeSection() {
    const dispatch: RootDispatch = useDispatch();
    const { signUpMemberType } = useSelector((state: RootState) => state.signUp);

    const handleNextBtnClick = useCallback(() => {
        if (!signUpMemberType) toast.error("회원 타입을 선택해주세요!");
        else dispatch(signUpAction.nextSignUpSection());
    }, [dispatch, signUpMemberType]);

    const handleClientBtnClick = useCallback(() => {
        dispatch(signUpAction.setSignUpMemberType(MemberType.ROLE_CLIENT));
    }, [dispatch]);

    const handlePeopleBtnClick = useCallback(() => {
        dispatch(signUpAction.setSignUpMemberType(MemberType.ROLE_PEOPLE));
    }, [dispatch]);

    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Styles.SectionWrapper>
                <Styles.SectionHeader>
                    <Text size="xl" color="point" weight="bold">
                        회원타입
                    </Text>
                    <Text size="xl" color="primary" weight="bold">
                        을 선택해주세요
                    </Text>
                </Styles.SectionHeader>

                <Styles.Container>
                    <Styles.TextItem>
                        <Text size="m" color="secondary" weight="normal">
                            회원 타입은 프로젝트를 의뢰하는 '의뢰자 회원'과
                        </Text>
                        <br />
                        <Text size="m" color="secondary" weight="normal">
                            프로젝트에 참여하는 '피플 회원'으로 나누어 집니다.
                        </Text>
                    </Styles.TextItem>

                    <Styles.Item>
                        <MemberTypeCard
                            variant="client"
                            width="208px"
                            height="208px"
                            onClick={handleClientBtnClick}
                            selected={signUpMemberType === "ROLE_CLIENT"}
                        />
                        <MemberTypeCard
                            variant="people"
                            width="208px"
                            height="208px"
                            onClick={handlePeopleBtnClick}
                            selected={signUpMemberType === "ROLE_PEOPLE"}
                        />
                    </Styles.Item>

                    <Styles.Item>
                        <Button
                            variant={signUpMemberType ? "primary" : "disabled"}
                            width="100%"
                            height="54px"
                            onClick={handleNextBtnClick}
                        >
                            완료하기
                        </Button>
                    </Styles.Item>
                </Styles.Container>
            </Styles.SectionWrapper>
        </motion.div>
    );
}
