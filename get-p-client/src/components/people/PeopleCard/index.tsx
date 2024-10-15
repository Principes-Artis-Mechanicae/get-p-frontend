import { Text } from "@/common/components/typography/Text";

import defaultProfileImage from "@/assets/common/default-profile.svg";

import * as Styles from "./index.style";

export interface PeopleCardProps extends React.ComponentProps<"div"> {
    profileImageUri?: string;
    nickname: string;
    activityArea: string;
    hashtags: string[];
    completeProjectsCount: number;
    introduction: string;
}

export const PeopleCard = ({
    profileImageUri,
    nickname,
    activityArea,
    hashtags,
    completeProjectsCount,
    introduction,
    onClick,
}: PeopleCardProps) => {
    return (
        <Styles.Wrapper onClick={onClick}>
            <Styles.Image src={profileImageUri ?? defaultProfileImage} />
            <Styles.Container>
                <Styles.Header>
                    <Text size="s" color="point" weight="bold">
                        {completeProjectsCount}회 완수
                    </Text>
                    <Text size="s" color="secondary" weight="lighter">
                        {activityArea}
                    </Text>
                </Styles.Header>
                <Text size="m" color="primary" weight="bold">
                    {nickname}
                </Text>
                <Text size="s" color="secondary" weight="lighter">
                    <Styles.Comment>{introduction}</Styles.Comment>
                </Text>
                <Text size="s" color="#BDA7BC" weight="lighter">
                    {hashtags.join(" ")}
                </Text>
            </Styles.Container>
        </Styles.Wrapper>
    );
};

export const PeopleCardSkeleton = () => {
    return (
        <Styles.Wrapper>
            <Styles.SkeletonImage />
            <Styles.Container>
                <Styles.Header>
                    <Styles.SkeletonText width="80px" />
                    <Styles.SkeletonText width="60px" />
                </Styles.Header>
                <Styles.SkeletonText width="120px" />
                <Styles.SkeletonComment />
                <Styles.SkeletonText width="100%" />
            </Styles.Container>
        </Styles.Wrapper>
    );
};
