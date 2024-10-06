import { useNavigate } from "react-router-dom";

import { Text } from "@/components/__common__/typography/Text";

import defaultProfile from "@/assets/common/profile.svg";
import likeIcon from "@/assets/people/like.png";

import * as Styles from "./NewPeopleCard.style";

export interface NewPeopleCardProps {
    profileImg?: string;

    peopleId: number;
    projectCount: number;
    region: string;
    peopleName: string;
    hashTags: string[];
    likesCount: number;
}

export const NewPeopleCard = ({
    peopleId,
    profileImg,
    projectCount,
    region,
    peopleName,
    hashTags,
    likesCount,
}: NewPeopleCardProps) => {
    const navigate = useNavigate();

    return (
        <Styles.Wrapper onClick={() => navigate(`/people/${peopleId}`)}>
            <Styles.Contianer>
                <Styles.ProfileImg src={profileImg ?? defaultProfile} />
                <Styles.LikesInfo>
                    <Styles.LikesIcon src={likeIcon} />
                    <Text size="xs" weight="bold">
                        {likesCount}
                    </Text>
                </Styles.LikesInfo>
            </Styles.Contianer>

            <Styles.Contianer>
                <Styles.Item>
                    <Text size="s" weight="bold" color="point">
                        {projectCount}회 완수
                    </Text>
                    <Text size="xs" weight="bold">
                        {region}
                    </Text>
                </Styles.Item>

                <Styles.Name>
                    <Text size="m" weight="bold">
                        {peopleName}
                    </Text>
                </Styles.Name>

                <Styles.HashTagContainer>
                    {hashTags.map((hashtag) => {
                        return (
                            <Styles.HashTag>
                                <Text size="xs" weight="bold">
                                    {hashtag}
                                </Text>
                            </Styles.HashTag>
                        );
                    })}
                </Styles.HashTagContainer>
            </Styles.Contianer>
        </Styles.Wrapper>
    );
};

export const NewPeopleCardSkeleton = () => {
    return <Styles.Skeleton />;
};
