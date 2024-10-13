import { useNavigate } from "react-router-dom";

import { Text } from "@/common/components/typography/Text";

import defaultProfile from "@/assets/common/default-profile.svg";
import likeIcon from "@/assets/people/like.png";

import * as Styles from "./index.style";

export interface NewPeopleCardProps {
    peopleId: number;
    peopleName: string;

    projectCount: number;
    profileImg?: string;

    hashTags: string[];
    likesCount: number;
    region: string;
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
                <Styles.ProfileImg src={profileImg || defaultProfile} />
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
                    {hashTags.map((hashtag, index) => {
                        return (
                            <Styles.HashTag key={index}>
                                <Text size="xs" weight="bold" color="#fff">
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
