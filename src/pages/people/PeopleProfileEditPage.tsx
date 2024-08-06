import { Button } from "@/common/form/Button";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { TextArea } from "@/common/form/TextArea";
import { withProviders } from "@/common/helper/withProviders";
import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import { Profile } from "@/components/people/Profile";
import { ProfileHashTag } from "@/components/people/ProfileHashTag";
import { TechStackSelector } from "@/components/people/TechStackSelector";

import { usePeopleProfileEdit } from "@/services/people/usePeopleProfileEdit";

import { techStack } from "@/constants/techstack";

import {
    PeopleProfileEditForm,
    PeopleProfileEditFormItem,
    PeopleProfileEditPageAside,
    PeopleProfileEditPageContainer,
    PeopleProfileEditPageWrapper,
} from "./PeopleProfileEditPage.style";
import { AccordionProvider } from "@/contexts/AccordionContext";
import { HashTagProvider } from "@/contexts/HashTagContext";
import { TechStackProvider } from "@/contexts/TechStackContext";
import { css } from "@emotion/react";

const PeopleProfileEditPage = withProviders(
    [<TechStackProvider />, <AccordionProvider />, <HashTagProvider />],
    function PeopleProfileEditPage() {
        const { schoolRef, majorRef, activityAreaRef, introductionRef, handleAddPortfolio, handleEditBtnClicked } =
            usePeopleProfileEdit();

        return (
            <PeopleProfileEditPageWrapper>
                <PeopleProfileEditPageAside>
                    <Profile width="100%" height="280px" nickname={"닉네임"} likeCount={0} completeProjectsCount={0} />
                    <ProfileHashTag width="100%" minHeight="120px" />
                </PeopleProfileEditPageAside>

                <PeopleProfileEditPageContainer>
                    <Title>
                        <Text size="l" weight="bold" color="#476FF1">
                            피플 프로필 편집하기
                        </Text>
                    </Title>

                    <PeopleProfileEditForm>
                        <PeopleProfileEditFormItem>
                            <Label>학교명</Label>
                            <Input ref={schoolRef} width="100%" height="35px"></Input>
                        </PeopleProfileEditFormItem>

                        <PeopleProfileEditFormItem>
                            <Label>전공명</Label>
                            <Input ref={majorRef} width="100%" height="35px"></Input>
                        </PeopleProfileEditFormItem>

                        <PeopleProfileEditFormItem>
                            <Label>활동지역</Label>
                            <Input ref={activityAreaRef} width="100%" height="35px"></Input>
                        </PeopleProfileEditFormItem>

                        <PeopleProfileEditFormItem>
                            <Label>소개</Label>
                            <TextArea ref={introductionRef} variant="primary" width="100%" height="240px"></TextArea>
                        </PeopleProfileEditFormItem>

                        <PeopleProfileEditFormItem>
                            <Label>기술스택</Label>
                            <TechStackSelector techStack={techStack} width="100$" height="350px" />
                        </PeopleProfileEditFormItem>

                        <PeopleProfileEditFormItem>
                            <Label>포트폴리오</Label>
                            <Button
                                variant="outline"
                                width="100%"
                                height="50px"
                                css={css`
                                    margin-top: 5px;
                                `}
                                onClick={handleAddPortfolio}
                            >
                                + 포트폴리오 파일 첨부하기
                            </Button>
                        </PeopleProfileEditFormItem>

                        <PeopleProfileEditFormItem>
                            <Button variant="primary" width="100%" height="50px" onClick={handleEditBtnClicked}>
                                프로필 저장하기
                            </Button>
                        </PeopleProfileEditFormItem>
                    </PeopleProfileEditForm>
                </PeopleProfileEditPageContainer>
            </PeopleProfileEditPageWrapper>
        );
    },
);

export default PeopleProfileEditPage;
