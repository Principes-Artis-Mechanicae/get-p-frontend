import { Text } from "@/common/typography/Text";

import likeIcon from "@/assets/people/like.png";
import profileImg from "@/assets/people/profile.png";

import { ProfileWrapper, ProfileContainer, ProfileLike, ProfileProject, ProfileImg, LikeIcon } from "./Profile.style";

export interface IProfile {
    width: string;
    height: string;
    imgSrc?: string;
    nickname: string;
    likeCount: number;
    completeProjectsCount: number;
}

export const Profile: React.FC<IProfile> = ({ width, height, imgSrc, nickname, likeCount, completeProjectsCount }) => {
    return (
        <ProfileWrapper width={width} height={height}>
            <ProfileImg src={imgSrc ? imgSrc : profileImg} alt={nickname} />
            <ProfileContainer>
                <Text size="m" color="primary" weight="bold">
                    {nickname}
                </Text>
                <ProfileLike>
                    <LikeIcon src={likeIcon}></LikeIcon>
                    <Text size="s" color="secondary" weight="normal">
                        {likeCount}
                    </Text>
                </ProfileLike>
                <ProfileProject>
                    <Text size="s" color="secondary" weight="normal">
                        프로젝트 성공 횟수
                    </Text>
                    <Text size="l" color="point" weight="bold">
                        {completeProjectsCount}회
                    </Text>
                </ProfileProject>
            </ProfileContainer>
        </ProfileWrapper>
    );
};
