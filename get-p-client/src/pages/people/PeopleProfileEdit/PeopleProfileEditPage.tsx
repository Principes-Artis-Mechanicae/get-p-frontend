import { Button } from "get-p-design";
import { Input } from "get-p-design";
import { Label } from "get-p-design";
import { TextArea } from "get-p-design";
import { Text } from "get-p-design";
import { Title } from "get-p-design";

import { techStack } from "@getp/apps/constants/techstack";

import { withProviders } from "@getp/common/components/helpers/withProviders";
import { AccordionProvider } from "@getp/common/contexts/AccordionContext";
import { HashTagProvider } from "@getp/common/contexts/HashTagContext";
import { TechStackProvider } from "@getp/common/contexts/TechStackContext";
import useFileUpload from "@getp/common/hooks/useFileUpload";

import { PeopleProfile } from "@getp/components/people/PeopleProfile";
import { PeopleProfileHashTag } from "@getp/components/people/PeopleProfileHashTag";
import { TechStackSelector } from "@getp/components/people/TechStackSelector";

import { usePeopleProfileEdit } from "@getp/services/people/usePeopleProfileEdit";

import deleteIcon from "@getp/assets/people/close.svg";

import {
    PeopleProfileEditForm,
    PeopleProfileEditFormItem,
    PeopleProfileEditPageAside,
    PeopleProfileEditPageContainer,
    PeopleProfileEditPageWrapper,
    PortfolioContainer,
    PortfolioCard,
    NameContainer,
    DeleteButton,
    OpenButton,
} from "./PeopleProfileEditPage.style";
import { FileInput } from "./PeopleProfileEditPage.style";
import { css } from "@emotion/react";

const PeopleProfileEditPage = withProviders(
    [<TechStackProvider />, <AccordionProvider />, <HashTagProvider />],
    function PeopleProfileEditPage() {
        const { schoolRef, majorRef, activityAreaRef, introductionRef, handleEditBtnClicked, setAttachmentFiles } =
            usePeopleProfileEdit();

        const { fileInputRef, portfolios, handleFileChange, handleDelete, handleButtonClick } =
            useFileUpload(setAttachmentFiles);

        return (
            <PeopleProfileEditPageWrapper>
                <PeopleProfileEditPageAside>
                    <PeopleProfile
                        width="100%"
                        height="280px"
                        nickname={"닉네임"}
                        likeCount={0}
                        completeProjectsCount={0}
                    />
                    <PeopleProfileHashTag width="100%" minHeight="120px" />
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
                            <TechStackSelector techStack={techStack} width="100%" height="350px" />
                        </PeopleProfileEditFormItem>

                        <PeopleProfileEditFormItem>
                            <Label>포트폴리오</Label>
                            {portfolios.length > 0 && (
                                <PortfolioContainer>
                                    {portfolios.map((portfolio, index) => (
                                        <PortfolioCard key={index}>
                                            <NameContainer>
                                                <DeleteButton onClick={() => handleDelete(portfolio.url)}>
                                                    <img src={deleteIcon} alt="delete" />
                                                </DeleteButton>
                                                {portfolio.description}
                                            </NameContainer>
                                            <OpenButton href={portfolio.url} target="_blank" rel="noopener noreferrer">
                                                파일 열기
                                            </OpenButton>
                                        </PortfolioCard>
                                    ))}
                                </PortfolioContainer>
                            )}
                            <FileInput
                                placeholder="포트폴리오"
                                type="file"
                                accept=".pdf,.png"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                            <Button
                                variant="outline"
                                width="100%"
                                height="50px"
                                css={css`
                                    margin-top: 5px;
                                `}
                                onClick={handleButtonClick}
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
