import { Button } from "principes-getp";

import {
    ProjectCardWrapper,
    ProjectCardContainer,
    ProjectCardHeader,
    ProjectHeaderItem,
    ProjectCarItemLower,
    ProjectCardComment,
    ProjectCardItemUpper,
    ProjectCardItemContainer,
    StatusBox,
    ApplicationDate,
    StatusText,
    ProjectTitle,
    HashTagContainer,
    HashTagItem,
    HashtagWrapper,
    Price,
    ExpectedDuration,
    ApplicantsCountItem,
} from "./ProjectCard.style";
import { useMediaQuery } from "@mui/material";

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

export const ProjectCard: React.FC<IProjectCard> = ({
    title,
    payment,
    applicantsCount,
    estimatedDays,
    applicationDuration,
    hashtags,
    description,
    status,
}) => {
    const isTabletOrMobile = useMediaQuery("(max-width: 1200px)");

    return (
        <ProjectCardWrapper>
            <ApplicantsCountItem>{applicantsCount}회 지원</ApplicantsCountItem>
            <ProjectCardContainer>
                <ProjectCardHeader>
                    <ProjectHeaderItem>
                        <ProjectTitle>{title}</ProjectTitle>
                    </ProjectHeaderItem>
                    <StatusBox>
                        <StatusText>{status}</StatusText>
                    </StatusBox>
                </ProjectCardHeader>
                <ProjectCardItemContainer>
                    <ProjectCardItemUpper>
                        <ExpectedDuration>예상 작업 기간 : {estimatedDays}일</ExpectedDuration>
                        <ApplicationDate>프로젝트 모집 시작일 : {applicationDuration.startDate}</ApplicationDate>
                        <ApplicationDate>프로젝트 모집 마감일 : {applicationDuration.endDate}</ApplicationDate>
                        <ProjectCardComment width={isTabletOrMobile ? "auto" : "375px"}>
                            {description}
                        </ProjectCardComment>
                    </ProjectCardItemUpper>
                    <ProjectCarItemLower>
                        <HashtagWrapper>
                            {hashtags.map((item, index) => (
                                <HashTagContainer>
                                    <HashTagItem key={index}>{item}</HashTagItem>
                                </HashTagContainer>
                            ))}
                        </HashtagWrapper>
                        <Price>{payment / 10000}만원</Price>
                    </ProjectCarItemLower>
                </ProjectCardItemContainer>
                <Button variant="outline" width="100%" height="54px">
                    프로젝트 상세보기
                </Button>
            </ProjectCardContainer>
        </ProjectCardWrapper>
    );
};
