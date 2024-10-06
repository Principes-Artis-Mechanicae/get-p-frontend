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
import { SerializedStyles } from "@emotion/react";

export interface ProjectManagementProps {
    clientAddress: {
        detail: string;
        street: string;
    };
    likesCount: number;
    additionalStyles?: SerializedStyles;
}

export const ProjectManagement = ({ clientAddress, likesCount, additionalStyles }: ProjectManagementProps) => {
    console.log(clientAddress);
    return (
        <ProjectManagementWrapper additionalStyles={additionalStyles}>
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
