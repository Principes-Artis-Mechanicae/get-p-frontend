import { useNavigate } from "react-router-dom";

import { Text } from "get-p-design";

import defaultProfile from "@getp/assets/common/default-profile.svg";
import likeIcon from "@getp/assets/people/like.png";

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
    return (
        <Styles.Wrapper>
            <Styles.Contianer>
                <Styles.ProfileImgSkeleton />
                <Styles.LikesInfoSkeleton>
                    <Styles.LikesIconSkeleton />
                    <Styles.SkeletonText width="20px" height="12px" />
                </Styles.LikesInfoSkeleton>
            </Styles.Contianer>

            <Styles.Contianer>
                <Styles.ItemSkeleton>
                    <Styles.SkeletonText width="60px" height="14px" />
                    <Styles.SkeletonText width="40px" height="12px" />
                </Styles.ItemSkeleton>

                <Styles.NameSkeleton>
                    <Styles.SkeletonText width="80px" height="16px" />
                </Styles.NameSkeleton>

                <Styles.HashTagContainerSkeleton>
                    <Styles.HashTagSkeleton>
                        <Styles.SkeletonText width="30px" height="12px" />
                    </Styles.HashTagSkeleton>
                    <Styles.HashTagSkeleton>
                        <Styles.SkeletonText width="40px" height="12px" />
                    </Styles.HashTagSkeleton>
                </Styles.HashTagContainerSkeleton>
            </Styles.Contianer>
        </Styles.Wrapper>
    );
};
