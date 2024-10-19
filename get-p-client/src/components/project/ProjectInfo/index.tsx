import { Text } from "get-p-design";

import * as Styles from "./index.style";

export interface ProjectInfoProps {
    totalDays: number;
    remainedDays: number;
    title: string;
    hashtags: string[];
    recruitmentCount: number;
    applicantsCount: number;
    applicationDuration: {
        startDate: string;
        endDate: string;
    };
}

export const ProjectInfo = ({
    totalDays,
    remainedDays,
    title,
    hashtags,
    recruitmentCount,
    applicantsCount,
    applicationDuration,
}: ProjectInfoProps) => {
    return (
        <Styles.InfoWrapper>
            <Styles.HeaderContainer>
                <Styles.DueDate>D-{remainedDays}</Styles.DueDate>
                <Text size="s" color="secondary" weight="normal">
                    오프라인 미팅
                </Text>
            </Styles.HeaderContainer>

            <Styles.InfoContainer>
                <Text size="22px" weight="bold">
                    {title}
                </Text>
            </Styles.InfoContainer>

            <Styles.InfoContainer>
                <Text size="m" color="secondary" weight="bold">
                    {applicantsCount}명 지원 / {recruitmentCount}명 모집
                </Text>
            </Styles.InfoContainer>

            <Styles.TextContainer>
                <Text size="m" weight="bold">
                    예상 작업 기간: {totalDays}일
                </Text>
                <Text size="m" weight="normal">
                    프로젝트 모집 시작일: {applicationDuration.startDate}일
                </Text>
                <Text size="m" weight="normal">
                    프로젝트 모집 마감일: {applicationDuration.endDate}일
                </Text>
            </Styles.TextContainer>

            <Styles.Line />

            <Styles.HashTagContainer>
                {hashtags?.map((hashtag, index) => {
                    return <Styles.HashTag key={index}>{hashtag}</Styles.HashTag>;
                })}
            </Styles.HashTagContainer>
        </Styles.InfoWrapper>
    );
};
