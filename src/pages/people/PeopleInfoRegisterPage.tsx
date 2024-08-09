import { Profile } from "@/common/display/Profile";
import { Button } from "@/common/form/Button";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import { usePeopleInfoRegister } from "@/services/people/usePeopleInfoRegister";

import {
    PeopleInfoRegisterWrapper,
    PeopleInfoRegisterHeader,
    PeopleInfoRegisterContainer,
    PeopleInfoRegisterItem,
    PeopleProfileWrapper,
    PeopleTypeButtonWrapper,
} from "./PeopleInfoRegisterPage.style";

export default function PeopleInfoRegisterPage() {
    const { nicknameRef, emailRef, phoneNumberRef, handleIndividualClick, handleTeamClick, handleNextClick } =
        usePeopleInfoRegister();

    return (
        <PeopleInfoRegisterWrapper>
            <PeopleInfoRegisterHeader>
                <Title>피플 정보 등록</Title>
                <br />
                <Text size="16px" weight="bold" color="point">
                    GET-P
                </Text>
                <Text weight="bold" color="primary">
                    피플 기본 정보를 입력해주세요
                </Text>
            </PeopleInfoRegisterHeader>

            <PeopleProfileWrapper>
                <Profile />
            </PeopleProfileWrapper>

            <PeopleInfoRegisterContainer>
                <PeopleInfoRegisterItem>
                    <Label htmlFor="nickname">닉네임(필수)</Label>
                    <Input
                        ref={nicknameRef}
                        id="nickname"
                        width="100%"
                        height="40px"
                        placeholder="닉네임을 입력해주세요."
                    ></Input>
                </PeopleInfoRegisterItem>

                <PeopleInfoRegisterItem>
                    <Label htmlFor="phoneNumber">전화번호(필수)</Label>
                    <Input
                        ref={phoneNumberRef}
                        id="phoneNumber"
                        width="100%"
                        height="40px"
                        placeholder="전화번호를 입력해주세요('-'빼고 숫자만 입력)."
                    ></Input>
                </PeopleInfoRegisterItem>

                <PeopleInfoRegisterItem>
                    <Label htmlFor="e-mail">이메일(선택)</Label>
                    <Input
                        ref={emailRef}
                        id="e-mail"
                        width="100%"
                        height="40px"
                        placeholder="의뢰 연락을 받을 다른 이메일이 있는 경우 입력해주세요."
                    ></Input>
                </PeopleInfoRegisterItem>

                <PeopleInfoRegisterItem>
                    <Label htmlFor="typeButton">피플유형</Label>
                    <PeopleTypeButtonWrapper id="typeButton">
                        <Button variant="outline" width="50%" height="54px" onClick={handleIndividualClick}>
                            개인
                        </Button>
                        <Button variant="outline" width="50%" height="54px" onClick={handleTeamClick}>
                            팀
                        </Button>
                    </PeopleTypeButtonWrapper>
                </PeopleInfoRegisterItem>

                <PeopleInfoRegisterItem>
                    <Button variant="primary" width="100%" height="54px" onClick={handleNextClick}>
                        완료
                    </Button>
                </PeopleInfoRegisterItem>
            </PeopleInfoRegisterContainer>
        </PeopleInfoRegisterWrapper>
    );
}
