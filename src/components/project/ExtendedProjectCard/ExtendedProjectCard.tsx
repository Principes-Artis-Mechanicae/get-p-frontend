import React, { useState, useRef } from "react";

import { ProjectManagement } from "../ProjectDetail/ProjectManagement";
import {
    CardWrapper,
    CardContainer,
    HeaderWrapper,
    TopContainer,
    DdayBox,
    MeetingTypeBox,
    ApplicantCount,
    HeaderContainer,
    HeaderItem,
    CardBodyContainer,
    CardUpperSection,
    ProjectInfoWrapper,
    CardLowerSection,
    ProjectTitle,
    CommentBox,
    DurationBox,
    DateBox,
    HashtagWrapper,
    HashtagContainer,
    HashtagItem,
    PaymentBox,
    CardTag,
} from "./ExtendedProjectCard.style";

export interface IProjectCard {
    title: string;
    payment: number;
    applicantsCount: number;
    estimatedDays: number;
    applicationDuration: {
        startDate: string;
        endDate: string;
    };
    hashtags: string[];
    description: string;
    status: string;
}

export const ExtendedProjectCard: React.FC<IProjectCard> = ({
    title,
    payment,
    applicantsCount,
    estimatedDays,
    applicationDuration,
    hashtags,
    description,
    status,
}) => {
    // 아코디언 상태 관리
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // 아코디언 토글 함수
    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <CardTag>프로그램 개발</CardTag>
            <CardWrapper isOpen={isOpen}>
                <CardContainer>
                    <HeaderWrapper onClick={toggleAccordion}>
                        <TopContainer>
                            <DdayBox>D-6</DdayBox>
                            <MeetingTypeBox>오프라인 미팅</MeetingTypeBox>
                        </TopContainer>
                        <HeaderContainer style={{ cursor: "pointer" }}>
                            <HeaderItem>
                                <ProjectTitle>{title}</ProjectTitle>
                            </HeaderItem>
                            <div>{isOpen ? "▲" : "▼"}</div>
                        </HeaderContainer>

                        <ApplicantCount>{applicantsCount}회 지원 / 10명 모집</ApplicantCount>
                    </HeaderWrapper>

                    <CardBodyContainer isOpen={isOpen}>
                        {/* 아코디언 열릴 때만 표시되는 내용 */}
                        {isOpen && (
                            <>
                                <CardUpperSection>
                                    <DurationBox>예상 작업 기간: {estimatedDays}일</DurationBox>
                                    <DateBox>프로젝트 모집 시작일: {applicationDuration.startDate}</DateBox>
                                    <DateBox>프로젝트 모집 마감일: {applicationDuration.endDate}</DateBox>

                                    <HashtagWrapper>
                                        {hashtags.map((item, index) => (
                                            <HashtagContainer key={index}>
                                                <HashtagItem>{item}</HashtagItem>
                                            </HashtagContainer>
                                        ))}
                                    </HashtagWrapper>

                                    <ProjectInfoWrapper>
                                        <ProjectManagement
                                            clientAddress={{
                                                detail: "루트코어",
                                                street: "대구광역시, 북구",
                                            }}
                                            likesCount={14}
                                        />
                                        <PaymentBox>{payment / 10000}만원</PaymentBox>
                                    </ProjectInfoWrapper>
                                </CardUpperSection>

                                <CardLowerSection>
                                    <CommentBox>{description}</CommentBox>
                                </CardLowerSection>
                            </>
                        )}
                    </CardBodyContainer>
                </CardContainer>
            </CardWrapper>
        </>
    );
};
