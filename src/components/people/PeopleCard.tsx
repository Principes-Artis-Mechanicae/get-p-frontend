import defaultProfile from "@/assets/people/profile.png";

import { Text } from "../__common__/typography/Text";
import {
    PeopleCardWrapper,
    PeopleCardImg,
    PeopleCardContainer,
    PeopleCardHeader,
    PeopleCardComment,
} from "./PeopleCard.style";

export interface IPeopleCard extends React.ComponentProps<"div"> {
    width?: string;
    height?: string;
    profileImageUri: string;
    nickname: string;
    activityArea: string;
    hashtags: string[];
    completeProjectsCount: number;
    introduction: string;
}

export const PeopleCard: React.FC<IPeopleCard> = ({
    profileImageUri,
    nickname,
    activityArea,
    hashtags,
    completeProjectsCount,
    introduction,
    onClick,
}) => {
    return (
        <PeopleCardWrapper onClick={onClick}>
            <PeopleCardImg src={profileImageUri ?? defaultProfile} />
            <PeopleCardContainer>
                <PeopleCardHeader>
                    <Text size="s" color="point" weight="bold">
                        {completeProjectsCount}회 완수
                    </Text>
                    <Text size="s" color="secondary" weight="light">
                        {activityArea}
                    </Text>
                </PeopleCardHeader>
                <Text size="m" color="primary" weight="bold">
                    {nickname}
                </Text>
                <Text size="s" color="secondary" weight="light">
                    <PeopleCardComment>{introduction}</PeopleCardComment>
                </Text>
                <Text size="s" color="#BDA7BC" weight="light">
                    {hashtags.map((hashtag) => `${hashtag}`).join(" ")}
                </Text>
            </PeopleCardContainer>
        </PeopleCardWrapper>
    );
};
