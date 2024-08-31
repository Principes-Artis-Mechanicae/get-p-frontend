import { useRef } from "react";

import { TextArea, Button } from "principes-getp";

import { Text } from "@/components/__common__/typography/Text";
import { Profile } from "@/components/people/Profile";
import {
    ProfileHashTagWrapper,
    ProfileHashTagContainer,
    ProfileHashTagItem,
} from "@/components/people/ProfileHashTag.style";

import { useProjectApply } from "@/services/project/useProjectApply";

import { vertical_center } from "@/styles/utils";

import {
    PeopleDetailWrapper,
    ProfileContainer,
    InfoContainer,
    TextboxContainer,
    PortfolioContainer,
    PortfolioCard,
    ResponsiveMobileHeading,
    ResponsivePCHeading,
} from "../people/PeopleDetailPage.style";
import styled from "@emotion/styled";

const HashTagTitleContainer = styled.h4`
    width: 100%;
    margin-bottom: 27px;
`;

const DateInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 15px 20px 15px 15px;

    ${vertical_center}
    align-items: space-between;

    border-radius: 12px;
    background-color: #f9fafa;
    cursor: pointer;

    gap: 20px;
`;

const ProjectApplyPage = () => {
    const { setStartDate, setEndDate, descriptionRef, setAttachmentFiles, handleApplyBtnClicked } = useProjectApply();

    const hashtags = ["설계", "기획", "서류작업"];
    const portfolios = ["포트폴리오1", "포트폴리오2"];

    const selectStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setStartDate(date);
    };

    const selectEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setEndDate(date);
    };

    return (
        <PeopleDetailWrapper>
            <ResponsiveMobileHeading>
                <Text size="22px" color="point" weight="bold">
                    프로젝트 지원하기
                </Text>
            </ResponsiveMobileHeading>
            <ProfileContainer>
                <Profile width="268px" height="283px" nickname="People01" likeCount={14} completeProjectsCount={2} />
                <ProfileHashTagWrapper width="268px" minHeight="120px">
                    <ProfileHashTagContainer>
                        <HashTagTitleContainer>
                            <Text size="m" color="secondary" weight="bold">
                                해시태그
                            </Text>
                        </HashTagTitleContainer>
                        {hashtags.map((item, index) => (
                            <ProfileHashTagItem key={index}>{item}</ProfileHashTagItem>
                        ))}
                    </ProfileHashTagContainer>
                </ProfileHashTagWrapper>
            </ProfileContainer>
            <InfoContainer>
                <ResponsivePCHeading>
                    <Text size="22px" color="point" weight="bold">
                        프로젝트 지원하기
                    </Text>
                </ResponsivePCHeading>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        희망 작업 시작일
                    </Text>
                    <DateInput
                        type="date"
                        placeholder="희망하는 작업 시작일을 선택해 주세요."
                        onChange={selectStartDate}
                    />
                </TextboxContainer>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        희망 작업 마감일
                    </Text>
                    <DateInput
                        type="date"
                        placeholder="희망하는 작업 시작일을 선택해 주세요."
                        onChange={selectEndDate}
                    />
                </TextboxContainer>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        지원 내용
                    </Text>
                    <TextArea
                        ref={descriptionRef}
                        variant="secondary"
                        width="100%"
                        height="261px"
                        placeholder="프로젝트 요청사항에 대한 답변, 서비스 진행 방식, 자신만의 강점이나 특징 등을 작성해주세요."
                    ></TextArea>
                </TextboxContainer>

                <TextboxContainer>
                    <Text size="m" color="secondary" weight="bold">
                        포트폴리오
                    </Text>
                    <PortfolioContainer>
                        {portfolios.map((portfolio) => (
                            <PortfolioCard key={portfolio}>{portfolio}</PortfolioCard>
                        ))}
                    </PortfolioContainer>
                </TextboxContainer>

                <TextboxContainer>
                    <Button variant="outline" width="100%" height="50px">
                        + 포트폴리오 파일 첨부하기
                    </Button>
                    <Button variant="primary" width="100%" height="50px">
                        프로젝트 지원하기
                    </Button>
                </TextboxContainer>
            </InfoContainer>
        </PeopleDetailWrapper>
    );
};

export default ProjectApplyPage;
