import { Text } from "@/components/__common__/typography/Text";

import { ProjectManagement } from "../ProjectDetail/ProjectManagement";
import {
    ProjectOutlineWrapper,
    ProjectHeaderContainer,
    ProjectDueDate,
    ProjectOutlineContainer,
    ProjectHashTagContainer,
    ProjectHashTag,
    Line,
    ProjectOutlineContent,
} from "./ProjectOutline.style";
import { css } from "@emotion/react";

export interface ProjectOutlineProps {
    totalDays: number;
    remainedDays: number;
    title: string;
    hashtags: string[];
    clientAddress: {
        detail: string;
        street: string;
    };
    likesCount: number;
    payment: number;
    description: string;
    applicationDuration: {
        startDate: string;
        endDate: string;
    };
}

export const ProjectOutline = ({
    totalDays,
    remainedDays,
    title,
    hashtags,
    clientAddress,
    likesCount,
    payment,
    description,
    applicationDuration,
}: ProjectOutlineProps) => {
    return (
        <ProjectOutlineWrapper>
            <ProjectHeaderContainer>
                <ProjectDueDate>D - {remainedDays}</ProjectDueDate>
                <Text size="s" color="secondary" weight="normal">
                    오프라인 미팅
                </Text>
            </ProjectHeaderContainer>
            <ProjectOutlineContainer>
                <Text size="22px" weight="bold">
                    {title}
                </Text>
                <Text size="m" color="secondary" weight="normal">
                    4명 지원
                </Text>
            </ProjectOutlineContainer>
            <ProjectOutlineContainer>
                <Text size="m" weight="bold">
                    예상 작업 기간 : {totalDays}일
                </Text>
                <Text size="s" weight="normal">
                    프로젝트 모집 시작일 : {applicationDuration.startDate}
                </Text>
                <Text size="s" weight="normal">
                    프로젝트 모집 마감일 : {applicationDuration.endDate}
                </Text>
            </ProjectOutlineContainer>

            <ProjectHashTagContainer>
                {hashtags?.map((hashtag, index) => {
                    return <ProjectHashTag key={index}>{hashtag}</ProjectHashTag>;
                })}
            </ProjectHashTagContainer>

            <ProjectManagement
                additionalStyles={css`
                    padding: 0;
                `}
                clientAddress={clientAddress}
                likesCount={likesCount}
            ></ProjectManagement>
            <Text
                css={css`
                    margin-left: auto;
                `}
                size="20px"
                weight="bold"
            >
                {payment.toLocaleString()}원
            </Text>
            <Line></Line>

            <ProjectOutlineContent>{description}</ProjectOutlineContent>
        </ProjectOutlineWrapper>
    );
};
