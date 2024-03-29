import { Button } from "@/common/form/Button";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import {
    FindPasswordContainer,
    FindPasswordItem,
    FindPasswordPageHeader,
    FindPasswordPageWrapper,
} from "./FindPasswordPage.style";

export default function FindPasswordPage() {
    return (
        <>
            <FindPasswordPageWrapper>
                <FindPasswordPageHeader>
                    <Title>비밀번호 찾기</Title>
                    <Text>가입 시 등록한 이메일로 인증하고, 비밀번호를 재설정해요.</Text>
                </FindPasswordPageHeader>

                <FindPasswordContainer>
                    <FindPasswordItem>
                        <Label htmlFor="id">아이디</Label>
                        <Input id="id" width="100%" height="40px" placeholder="이메일을 입력해주세요">
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
                            placeholder="새 비밀번호를 입력해주세요"
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
        </>
    );
}
