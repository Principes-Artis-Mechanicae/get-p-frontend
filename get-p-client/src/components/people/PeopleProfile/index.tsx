import { Text } from "get-p-design";

import defaultProfileImage from "@getp/assets/common/default-profile.svg";
import likeIcon from "@getp/assets/people/like.png";

import * as Styles from "./index.style";

export interface PeopleProfileProps {
    width?: SizeProp;
    height?: SizeProp;

    imgSrc?: string;
    nickname: string;
    likeCount: number;
    completeProjectsCount: number;
}

export const PeopleProfile = ({
    width = "268px",
    height = "283px",
    imgSrc,
    nickname,
    likeCount,
    completeProjectsCount,
}: PeopleProfileProps) => {
    return (
        <Styles.Wrapper width={width} height={height}>
            <Styles.Image src={imgSrc ?? defaultProfileImage} alt={nickname} />
            <Styles.Container>
                <Text size="m" color="primary" weight="bold">
                    {nickname}
                </Text>
                <Styles.Like>
                    <Styles.LikeIcon src={likeIcon}></Styles.LikeIcon>
                    <Text size="s" color="secondary" weight="normal">
                        {likeCount}
                    </Text>
                </Styles.Like>
                <Styles.Project>
                    <Text size="s" color="secondary" weight="normal">
                        프로젝트 성공 횟수
                    </Text>
                    <Text size="l" color="point" weight="bold">
                        {completeProjectsCount}회
                    </Text>
                </Styles.Project>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
