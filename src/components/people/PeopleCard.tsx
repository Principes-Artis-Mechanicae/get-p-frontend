import { Text } from "@/common/typography/Text";

import {
    PeopleCardWrapper,
    PeopleCardImg,
    PeopleCardContainer,
    PeopleCardHeader,
    PeopleCardComment,
} from "./PeopleCard.style";

export interface IPeopleCard {
    width: string;
    height: string;
    profileImageUri: string;
    nickname: string;
    activityArea: string;
    hashtags: string[];
    completeProjectsCount: number;
    comment: string;
}

export const PeopleCard: React.FC<IPeopleCard> = ({
    width,
    height,
    profileImageUri,
    nickname,
    activityArea,
    hashtags,
    completeProjectsCount,
    comment,
}) => {
    return (
        <PeopleCardWrapper width={width} height={height}>
            <PeopleCardImg src={profileImageUri} />
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
                    <PeopleCardComment>{comment}</PeopleCardComment>
                </Text>
                <Text size="s" color="#BDA7BC" weight="light">
                    {hashtags}
                </Text>
            </PeopleCardContainer>
        </PeopleCardWrapper>
    );
};
