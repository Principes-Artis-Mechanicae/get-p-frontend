import { Text } from "@/common/components/typography/Text";

import defaultProfileImage from "@/assets/common/default-profile.svg";

import * as Styles from "./index.style";

export interface ProjectTeamItemProps {
    id: number;
    name: string;
    email: string;
    profileImage?: string;
    isAccepted: boolean;
}

export const ProjectTeamItem = ({ id, name, email, profileImage, isAccepted }: ProjectTeamItemProps) => {
    return (
        <Styles.ItemWrapper>
            <Styles.ItemId>{id}</Styles.ItemId>
            <Styles.ItemImage src={profileImage ?? defaultProfileImage} />

            <Styles.Info>
                <Text weight="bold">{name}</Text>
                <Text>{email}</Text>
            </Styles.Info>

            <Styles.ItemStatus isAccepted={isAccepted}>{isAccepted ? "승인완료" : "승인대기"}</Styles.ItemStatus>
        </Styles.ItemWrapper>
    );
};
