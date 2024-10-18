import React, { useState } from "react";

import { ProjectManagement } from "@getp/components/project/ProjectManagement";

import * as Styles from "./index.style";
import { css } from "@emotion/react";

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
}

export const ExtendedProjectCard: React.FC<IProjectCard> = ({
    title,
    payment,
    applicantsCount,
    estimatedDays,
    applicationDuration,
    hashtags,
    description,
}) => {
    // 아코디언 상태 관리
    const [isOpen, setIsOpen] = useState(false);

    // 아코디언 토글 함수
    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <Styles.CardTag>프로그램 개발</Styles.CardTag>
            <Styles.CardWrapper isOpen={isOpen}>
                <Styles.CardContainer>
                    <Styles.HeaderWrapper onClick={toggleAccordion}>
                        <Styles.TopContainer>
                            <Styles.DdayBox>D-6</Styles.DdayBox>
                            <Styles.MeetingTypeBox>오프라인 미팅</Styles.MeetingTypeBox>
                        </Styles.TopContainer>
                        <Styles.HeaderContainer style={{ cursor: "pointer" }}>
                            <Styles.HeaderItem>
                                <Styles.ProjectTitle>{title}</Styles.ProjectTitle>
                            </Styles.HeaderItem>
                            <div>{isOpen ? "▲" : "▼"}</div>
                        </Styles.HeaderContainer>

                        <Styles.ApplicantCount>{applicantsCount}회 지원 / 10명 모집</Styles.ApplicantCount>
                    </Styles.HeaderWrapper>

                    <Styles.CardBodyContainer isOpen={isOpen}>
                        {/* 아코디언 열릴 때만 표시되는 내용 */}
                        {isOpen && (
                            <>
                                <Styles.CardUpperSection>
                                    <Styles.DurationBox>예상 작업 기간: {estimatedDays}일</Styles.DurationBox>
                                    <Styles.DateBox>
                                        프로젝트 모집 시작일: {applicationDuration.startDate}
                                    </Styles.DateBox>
                                    <Styles.DateBox>프로젝트 모집 마감일: {applicationDuration.endDate}</Styles.DateBox>

                                    <Styles.HashtagWrapper>
                                        {hashtags.map((item, index) => (
                                            <Styles.HashtagContainer key={index}>
                                                <Styles.HashtagItem>{item}</Styles.HashtagItem>
                                            </Styles.HashtagContainer>
                                        ))}
                                    </Styles.HashtagWrapper>

                                    <Styles.ProjectInfoWrapper>
                                        <ProjectManagement
                                            clientAddress={{
                                                detail: "루트코어",
                                                street: "대구광역시, 북구",
                                            }}
                                            likesCount={14}
                                            additionalStyles={css`
                                                padding: 0;
                                            `}
                                        />
                                        <Styles.PaymentBox>{payment / 10000}만원</Styles.PaymentBox>
                                    </Styles.ProjectInfoWrapper>
                                </Styles.CardUpperSection>

                                <Styles.CardLowerSection>
                                    <Styles.CommentBox>{description}</Styles.CommentBox>
                                </Styles.CardLowerSection>
                            </>
                        )}
                    </Styles.CardBodyContainer>
                </Styles.CardContainer>
            </Styles.CardWrapper>
        </>
    );
};
