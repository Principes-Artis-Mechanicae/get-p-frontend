import { Text } from "@/components/__common__/typography/Text";

import { useProjectById } from "@/services/project/useProjectById";

import {
    ProjectInfoWrapper,
    ProjectHeaderContainer,
    ProjectDueDate,
    ProjectHashTagContainer,
    ProjectHashTag,
    Line,
} from "./ProjectInfo.style";

export const ProjectInfo: React.FC = () => {
    const { data: project } = useProjectById();

    const calculateDays = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDifference = Math.abs(end.getTime() - start.getTime());
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return Math.round(daysDifference);
    };

    const totalDays = project?.applicationDuration
        ? calculateDays(project.applicationDuration.startDate, project.applicationDuration.endDate)
        : 0;

    return (
        <ProjectInfoWrapper>
            <ProjectHeaderContainer>
                <ProjectDueDate>D-{totalDays}</ProjectDueDate>
                <Text size="s" color="secondary" weight="normal">
                    오프라인 미팅
                </Text>
            </ProjectHeaderContainer>
            <Text size="22px" weight="bold">
                {project?.title}
            </Text>
            <Line />
            <ProjectHashTagContainer>
                {project?.hashtags?.map((hashtag, index) => <ProjectHashTag key={index}>{hashtag}</ProjectHashTag>)}
            </ProjectHashTagContainer>
        </ProjectInfoWrapper>
    );
};
