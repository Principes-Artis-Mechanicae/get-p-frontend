import { Text } from "@/components/__common__/typography/Text";

import {
    ProjectInfoWrapper,
    ProjectHeaderContainer,
    ProjectDueDate,
    ProjectInfoContainer,
    ProjectTextContainer,
    ProjectHashTagContainer,
    ProjectHashTag,
    Line,
} from "./ProjectInfo.style";

export interface ProjectInfoProps {
    totalDays: number;
    remainedDays: number;
    title: string;
    hashtags: string[];
    recruitmentCount: number;
    applicantsCount: number;
    applicationDuration: {
        startDate: string;
        endDate: string;
    };
}

export const ProjectInfo = ({
    totalDays,
    remainedDays,
    title,
    hashtags,
    recruitmentCount,
    applicantsCount,
    applicationDuration,
}: ProjectInfoProps) => {
    return (
        <ProjectInfoWrapper>
            <ProjectHeaderContainer>
                <ProjectDueDate>D-{remainedDays}</ProjectDueDate>
                <Text size="s" color="secondary" weight="normal">
                    오프라인 미팅
                </Text>
            </ProjectHeaderContainer>

            <ProjectInfoContainer>
                <Text size="22px" weight="bold">
                    {title}
                </Text>
            </ProjectInfoContainer>

            <ProjectInfoContainer>
                <Text size="m" color="secondary" weight="bold">
                    {applicantsCount}명 지원 / {recruitmentCount}명 모집
                </Text>
            </ProjectInfoContainer>

            <ProjectTextContainer>
                <Text size="m" weight="bold">
                    예상 작업 기간: {totalDays}일
                </Text>
                <Text size="m" weight="normal">
                    프로젝트 모집 시작일: {applicationDuration.startDate}일
                </Text>
                <Text size="m" weight="normal">
                    프로젝트 모집 마감일: {applicationDuration.endDate}일
                </Text>
            </ProjectTextContainer>

            <Line />

            <ProjectHashTagContainer>
                {hashtags?.map((hashtag, index) => {
                    return <ProjectHashTag key={index}>{hashtag}</ProjectHashTag>;
                })}
            </ProjectHashTagContainer>
        </ProjectInfoWrapper>
    );
};
