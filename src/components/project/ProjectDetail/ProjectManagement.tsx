import { Text } from "@/components/__common__/typography/Text";

import likeIcon from "@/assets/people/like.png";
import buildingIcon from "@/assets/project/building.png";
import locationIcon from "@/assets/project/location.png";

import {
    ProjectManagementWrapper,
    ProjectManagementContainer,
    ProjectManagementItem,
    Icon,
} from "./ProjectManagement.style";

export interface ProjectManagementProps {
    clientAddress: {
        detail: string;
        street: string;
    };
    likesCount: number;
}

export const ProjectManagement = ({ clientAddress, likesCount }: ProjectManagementProps) => {
    return (
        <ProjectManagementWrapper>
            <ProjectManagementContainer>
                <ProjectManagementItem>
                    <Icon src={buildingIcon}></Icon>
                    <Text size="m" color="secondary" weight="normal">
                        {clientAddress.detail}
                    </Text>
                </ProjectManagementItem>

                <ProjectManagementItem>
                    <Icon src={likeIcon}></Icon>
                    <Text size="m" color="secondary" weight="normal">
                        {likesCount}
                    </Text>
                </ProjectManagementItem>
            </ProjectManagementContainer>

            <ProjectManagementItem>
                <Icon src={locationIcon}></Icon>
                <Text size="m" color="secondary" weight="normal">
                    {clientAddress.street}
                </Text>
            </ProjectManagementItem>
        </ProjectManagementWrapper>
    );
};
