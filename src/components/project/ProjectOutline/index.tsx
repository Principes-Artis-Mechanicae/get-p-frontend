import { Text } from "@/common/components/typography/Text";

import { ProjectManagement } from "../ProjectManagement";
import * as Styles from "./index.style";
import { css } from "@emotion/react";

export interface ProjectOutlineProps {
    totalDays: number;
    remainedDays: number;
    title: string;
    hashtags: string[];
    clientAddress: {
        detail: string;
        street: string;
    };
    likesCount: number;
    payment: number;
    description: string;
    applicationDuration: {
        startDate: string;
        endDate: string;
    };
}

export const ProjectOutline = ({
    totalDays,
    remainedDays,
    title,
    hashtags,
    clientAddress,
    likesCount,
    payment,
    description,
    applicationDuration,
}: ProjectOutlineProps) => {
    return (
        <Styles.Wrapper>
            <Styles.HeaderContainer>
                <Styles.DueDate>D - {remainedDays}</Styles.DueDate>
                <Text size="s" color="secondary" weight="normal">
                    오프라인 미팅
                </Text>
            </Styles.HeaderContainer>
            <Styles.Container>
                <Text size="22px" weight="bold">
                    {title}
                </Text>
                <Text size="m" color="secondary" weight="normal">
                    4명 지원
                </Text>
            </Styles.Container>
            <Styles.Container>
                <Text size="m" weight="bold">
                    예상 작업 기간 : {totalDays}일
                </Text>
                <Text size="s" weight="normal">
                    프로젝트 모집 시작일 : {applicationDuration.startDate}
                </Text>
                <Text size="s" weight="normal">
                    프로젝트 모집 마감일 : {applicationDuration.endDate}
                </Text>
            </Styles.Container>

            <Styles.HashTagContainer>
                {hashtags?.map((hashtag, index) => {
                    return <Styles.HashTag key={index}>{hashtag}</Styles.HashTag>;
                })}
            </Styles.HashTagContainer>

            <ProjectManagement
                additionalStyles={css`
                    padding: 0;
                `}
                clientAddress={clientAddress}
                likesCount={likesCount}
            ></ProjectManagement>
            <Text
                css={css`
                    margin-left: auto;
                `}
                size="20px"
                weight="bold"
            >
                {payment.toLocaleString()}원
            </Text>

            <Styles.Line />

            <Styles.Content>{description}</Styles.Content>
        </Styles.Wrapper>
    );
};
