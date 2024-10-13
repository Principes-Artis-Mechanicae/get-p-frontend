import { useNavigate } from "react-router-dom";

import { Text } from "@/common/components/typography/Text";

import defaultProfile from "@/assets/common/default-profile.svg";

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
                        우경정보기술
                    </Text>
                </Styles.Info>
            </Styles.Header>

            <Styles.Body>
                <Styles.Left>
                    <Styles.Info>
                        <Text size="s" weight="bolder" color="red">
                            D-{props.deadline}
                        </Text>{" "}
                        {/* <Text size="s" color="#676F7C">
                            {props.location}
                        </Text> */}
                    </Styles.Info>
                    <Styles.Info>
                        <Text size="m" weight="bold">
                            사업계획서 Word 작업
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
                    <Styles.Info>
                        <Text size="xs" color="#F19147">
                            예상작업기간 : {props.expectedDuration}
                        </Text>
                    </Styles.Info>
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
    return <Styles.Skeleton />;
};
