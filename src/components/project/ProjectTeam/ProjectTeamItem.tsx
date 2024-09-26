import { Text } from "@/components/__common__/typography/Text";

import defaultProfileImage from "@/assets/common/profile.svg";

import {
    ProjectTeamInfo,
    ProjectTeamItemId,
    ProjectTeamItemImage,
    ProjectTeamItemStatus,
    ProjectTeamItemWrapper,
} from "./ProjectTeamItem.style";

export interface ProjectTeamItemProps {
    id: number;
    name: string;
    email: string;
    profileImage?: string;
    isAccepted: boolean;
}

export const ProjectTeamItem = ({ id, name, email, profileImage, isAccepted }: ProjectTeamItemProps) => {
    return (
        <ProjectTeamItemWrapper>
            <ProjectTeamItemId>{id}</ProjectTeamItemId>
            <ProjectTeamItemImage src={profileImage ?? defaultProfileImage} />

            <ProjectTeamInfo>
                <Text weight="bold">{name}</Text>
                <Text>{email}</Text>
            </ProjectTeamInfo>

            <ProjectTeamItemStatus isAccepted={isAccepted}>
                {isAccepted ? "승인완료" : "승인대기"}
            </ProjectTeamItemStatus>
        </ProjectTeamItemWrapper>
    );
};
