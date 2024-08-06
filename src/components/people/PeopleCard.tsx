import { Text } from "@/common/typography/Text";

import {
    PeopleCardWrapper,
    PeopleCardImg,
    PeopleCardContainer,
    PeopleCardHeader,
    PeopleCardComment,
} from "./PeopleCard.style";
import { useMediaQuery } from "@mui/material";

export interface IPeopleCard {
    width?: string;
    height?: string;
    profileImageUri: string;
    nickname: string;
    activityArea: string;
    hashtags: {
        value: string;
    }[];
    completeProjectsCount: number;
    introduction: string;
}

export const PeopleCard: React.FC<IPeopleCard> = ({
    width = "522px",
    height = "110px",
    profileImageUri,
    nickname,
    activityArea,
    hashtags,
    completeProjectsCount,
    introduction,
}) => {
    const isTabletOrMobile = useMediaQuery("(max-width: 1200px)");

    return (
        <PeopleCardWrapper width={isTabletOrMobile ? "100%" : width} height={height}>
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
                    <PeopleCardComment width={isTabletOrMobile ? "auto" : "375px"}>{introduction}</PeopleCardComment>
                </Text>
                <Text size="s" color="#BDA7BC" weight="light">
                    {hashtags.map((hashtag) => `${hashtag.value}`).join(" ")}
                </Text>
            </PeopleCardContainer>
        </PeopleCardWrapper>
    );
};
