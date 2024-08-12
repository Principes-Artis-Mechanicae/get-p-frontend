import { motion } from "framer-motion";
import { Button } from "principes-getp";
import { Input } from "principes-getp";
import { Label } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";
import { Title } from "@/components/__common__/typography/Title";

import {
    FindPasswordContainer,
    FindPasswordItem,
    FindPasswordPageHeader,
    FindPasswordPageWrapper,
} from "./FindPasswordPage.style";

export default function FindPasswordPage() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <FindPasswordPageWrapper>
                    <FindPasswordPageHeader>
                        <Title>비밀번호 찾기</Title>
                        <br />
                        <Text>가입 시 등록한 이메일로 인증하고, 비밀번호를 재설정해요.</Text>
                    </FindPasswordPageHeader>

                    <FindPasswordContainer>
                        <FindPasswordItem>
                            <Label htmlFor="id">아이디</Label>
                            <Input
                                // error="올바른 이메일인지 다시한번 확인하세요"
                                id="id"
                                width="100%"
                                height="40px"
                                placeholder="이메일을 입력해주세요"
                            >
                                <Button variant="side" width="50px" height="38px">
                                    인증
                                </Button>
                            </Input>
                        </FindPasswordItem>

                        <FindPasswordItem>
                            <Label htmlFor="pw">비밀번호</Label>
                            <Input
                                id="pw"
                                type="password"
                                width="100%"
                                height="40px"
                                placeholder="새 비밀번호를 입력해주세요. (영문, 숫자, 특수문자 조합 8-16자)"
                            ></Input>
                        </FindPasswordItem>

                        <FindPasswordItem>
                            <Label htmlFor="pw-verify">비밀번호 확인</Label>
                            <Input
                                id="pw-verify"
                                type="password"
                                width="100%"
                                height="40px"
                                placeholder="비밀번호를 다시 입력해주세요"
                            ></Input>
                        </FindPasswordItem>

                        <FindPasswordItem>
                            <Button variant="primary" width="100%" height="54px">
                                완료하기
                            </Button>
                        </FindPasswordItem>
                    </FindPasswordContainer>
                </FindPasswordPageWrapper>
            </motion.div>
        </>
    );
}
