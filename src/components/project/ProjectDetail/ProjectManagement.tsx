import { Text } from "@/components/__common__/typography/Text";

import { useProjectById } from "@/services/project/useProjectById";

import likeIcon from "@/assets/people/like.png";
import buildingIcon from "@/assets/project/building.png";
import locationIcon from "@/assets/project/location.png";

import {
    ProjectManagementWrapper,
    ProjectManagementContainer,
    ProjectManagementItem,
    Icon,
} from "./ProjectManagement.style";

export const ProjectManagement: React.FC = () => {
    const { data: project } = useProjectById();
    return (
        <ProjectManagementWrapper>
            <ProjectManagementContainer>
                <ProjectManagementItem>
                    <Icon src={buildingIcon}></Icon>
                    <Text size="m" color="secondary" weight="normal">
                        {project?.client.address.detail}
                    </Text>
                </ProjectManagementItem>

                <ProjectManagementItem>
                    <Icon src={likeIcon}></Icon>
                    <Text size="m" color="secondary" weight="normal">
                        {project?.likesCount}
                    </Text>
                </ProjectManagementItem>
            </ProjectManagementContainer>

            <ProjectManagementItem>
                <Icon src={locationIcon}></Icon>
                <Text size="m" color="secondary" weight="normal">
                    {project?.client.address.street}
                </Text>
            </ProjectManagementItem>
        </ProjectManagementWrapper>
    );
};
