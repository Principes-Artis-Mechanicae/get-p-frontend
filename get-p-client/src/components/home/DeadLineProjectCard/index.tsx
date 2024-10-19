import { useNavigate } from "react-router-dom";

import { Text } from "get-p-design";

import defaultProfile from "@getp/assets/common/default-profile.svg";

import * as Styles from "./index.style";

export interface DeadLineProjectCardProps {
    projectId: number;
    profileImg?: string;
    deadline: number;
    // location: string; TODO: location 추가
    title: string;
    hashtags: string[];
    payment: number;
    likes: number;
    expectedDuration: number;
    meetingType: string;
}

export const DeadLineProjectCard = (props: DeadLineProjectCardProps) => {
    const navigate = useNavigate();

    return (
        <Styles.Wrapper onClick={() => navigate(`/projects/${props.projectId}`)}>
            <Styles.Header>
                <Styles.Image src={props.profileImg || defaultProfile} alt="client-profile" />
                <Styles.Info>
                    <Text size="s" weight="bold">
                        {/* 우경정보기술 */}
                    </Text>
                </Styles.Info>
            </Styles.Header>

            <Styles.Body>
                <Styles.Left>
                    <Styles.Info>
                        <Text size="s" weight="bolder" color="red">
                            D{props.deadline > 0 ? "+" : "-"}
                            {props.deadline}
                        </Text>{" "}
                        {/* <Text size="s" color="#676F7C">
                            {props.location}
                        </Text> */}
                    </Styles.Info>
                    <Styles.Info>
                        <Text size="m" weight="bold">
                            {props.title}
                        </Text>
                    </Styles.Info>
                    <Styles.Info>
                        {props.hashtags.map((hashtag, index) => {
                            return (
                                <Text size="s" color="#BDA7BC" key={index}>
                                    {hashtag}
                                </Text>
                            );
                        })}
                    </Styles.Info>
                    <Styles.Info>
                        <Text size="s" weight="bold" color="#476FF1">
                            프로젝트 성공 보수 : {props.payment.toLocaleString()}원
                        </Text>
                    </Styles.Info>
                </Styles.Left>

                <Styles.Right>
                    {/* <Styles.Info>
                        <Text size="xs" color="#F19147">
                            예상작업기간 : {props.expectedDuration}
                        </Text>
                    </Styles.Info> */}
                    <Styles.Info>
                        <Text size="xs" color="#F19147">
                            {props.meetingType}
                        </Text>
                    </Styles.Info>
                </Styles.Right>
            </Styles.Body>
        </Styles.Wrapper>
    );
};

export const DeadLineProjectCardSkeleton = () => {
    return (
        <Styles.Wrapper>
            <Styles.Header>
                <Styles.SkeletonImage />
                <Styles.SkeletonInfo>
                    <Styles.SkeletonText width="80px" />
                </Styles.SkeletonInfo>
            </Styles.Header>

            <Styles.Body>
                <Styles.Left>
                    <Styles.SkeletonInfo>
                        <Styles.SkeletonText width="50px" />
                    </Styles.SkeletonInfo>
                    <Styles.SkeletonInfo>
                        <Styles.SkeletonText width="150px" />
                    </Styles.SkeletonInfo>
                    <Styles.SkeletonInfo>
                        <Styles.SkeletonHashtags>
                            <Styles.SkeletonHashtag width="40px" />
                            <Styles.SkeletonHashtag width="40px" />
                            <Styles.SkeletonHashtag width="40px" />
                        </Styles.SkeletonHashtags>
                    </Styles.SkeletonInfo>
                    <Styles.SkeletonInfo>
                        <Styles.SkeletonText width="200px" />
                    </Styles.SkeletonInfo>
                </Styles.Left>

                <Styles.Right>
                    <Styles.SkeletonInfo>
                        <Styles.SkeletonText width="80px" />
                    </Styles.SkeletonInfo>
                    <Styles.SkeletonInfo>
                        <Styles.SkeletonText width="80px" />
                    </Styles.SkeletonInfo>
                </Styles.Right>
            </Styles.Body>
        </Styles.Wrapper>
    );
};
