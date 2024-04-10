import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { motion } from "framer-motion";

import { Button } from "@/common/form/Button";
import { Text } from "@/common/typography/Text";

import { MemberTypeCard } from "@/components/auth/MemberTypeCard";

import {
    SelectTypeContainer,
    SelectTypeItem,
    SelectTypeSectionHeader,
    SelectTypeSectionWrapper,
    SelectTypeTextItem,
} from "./SelectTypeSection.style";
import { signUpAction } from "@/store/slice/signup.slice";
import { RootDispatch } from "@/store/store";

export default function SelectTypeSection() {
    const dispatch: RootDispatch = useDispatch();

    const handleNextBtnClick = useCallback(() => {
        dispatch(signUpAction.nextSignUpSection());
    }, [dispatch]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <SelectTypeSectionWrapper>
                <SelectTypeSectionHeader>
                    <Text size="xl" color="point" weight="bold">
                        회원타입
                    </Text>
                    <Text size="xl" color="primary" weight="bold">
                        을 선택해주세요
                    </Text>
                </SelectTypeSectionHeader>

                <SelectTypeContainer>
                    <SelectTypeTextItem>
                        <Text size="m" color="secondary" weight="normal">
                            회원 타입은 프로젝트를 의뢰하는 '의뢰자 회원'과
                        </Text>
                        <br />
                        <Text size="m" color="secondary" weight="normal">
                            프로젝트에 참여하는 '피플 회원'으로 나누어 집니다.
                        </Text>
                    </SelectTypeTextItem>

                    <SelectTypeItem>
                        <MemberTypeCard
                            variant="client"
                            width="208px"
                            height="208px"
                            imgSrc=""
                            label="의뢰자 회원"
                        ></MemberTypeCard>
                        <MemberTypeCard
                            variant="people"
                            width="208px"
                            height="208px"
                            imgSrc=""
                            label="피플 회원"
                        ></MemberTypeCard>
                    </SelectTypeItem>

                    <SelectTypeItem>
                        <Button variant="disabled" width="100%" height="54px" onClick={handleNextBtnClick}>
                            완료하기
                        </Button>
                    </SelectTypeItem>
                </SelectTypeContainer>
            </SelectTypeSectionWrapper>
        </motion.div>
    );
}
