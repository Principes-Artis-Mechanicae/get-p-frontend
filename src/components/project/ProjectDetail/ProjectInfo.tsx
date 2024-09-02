import { Text } from "@/components/__common__/typography/Text";

import { useProjectById } from "@/services/project/useProjectById";

import { calculateDays } from "@/utils/calculateDays";

import {
    ProjectInfoWrapper,
    ProjectHeaderContainer,
    ProjectDueDate,
    ProjectHashTagContainer,
    ProjectHashTag,
    Line,
} from "./ProjectInfo.style";

export interface ProjectInfoProps {
    remainedDays: number;
    title: string;
    hashtags: string[];
}

export const ProjectInfo = ({ remainedDays, title, hashtags }: ProjectInfoProps) => {
    return (
        <ProjectInfoWrapper>
            <ProjectHeaderContainer>
                <ProjectDueDate>D-{remainedDays}</ProjectDueDate>
                <Text size="s" color="secondary" weight="normal">
                    오프라인 미팅
                </Text>
            </ProjectHeaderContainer>
            <Text size="22px" weight="bold">
                {title}
            </Text>
            <Line />
            <ProjectHashTagContainer>
                {hashtags?.map((hashtag, index) => {
                    return <ProjectHashTag key={index}>{hashtag}</ProjectHashTag>;
                })}
            </ProjectHashTagContainer>
        </ProjectInfoWrapper>
    );
};
