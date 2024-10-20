import { useMediaQuery } from "react-responsive";

import { Button } from "get-p-design";

import * as Styles from "./index.style";

export interface ProjectCardProps extends React.ComponentProps<"button"> {
    title: string;
    payment: number;
    applicantsCount: number;
    estimatedDays: number;
    applicationDuration: {
        startDate: string;
        endDate: string;
    };
    hashtags: string[];
    description: string;
    status: string;
}

export const ProjectCard = ({
    title,
    payment,
    applicantsCount,
    estimatedDays,
    applicationDuration,
    hashtags,
    description,
    status,
    onClick,
}: ProjectCardProps) => {
    const isTabletOrMobile = useMediaQuery({
        query: "(max-width: 1200px)",
    });

    // 상태에 따른 텍스트 변환
    const getStatusText = (status: string) => {
        switch (status) {
            case "PREPARING":
                return "준비중";
            case "APPLYING":
                return "모집중";
            case "PROGRESSING":
                return "진행중";
            case "COMPLETED":
                return "완료";
            case "CANCELLED":
                return "취소됨";
            default:
                return status;
        }
    };

    return (
        <Styles.Wrapper>
            <Styles.ApplicantsCountItem>{applicantsCount}회 지원</Styles.ApplicantsCountItem>
            <Styles.Container>
                <Styles.Header>
                    <Styles.ProjectHeaderItem>
                        <Styles.ProjectTitle>{title}</Styles.ProjectTitle>
                    </Styles.ProjectHeaderItem>
                    <Styles.StatusBox status={status}>
                        <Styles.StatusText status={status}>{getStatusText(status)}</Styles.StatusText>
                    </Styles.StatusBox>
                </Styles.Header>
                <Styles.ItemContainer>
                    <Styles.ItemUpper>
                        <Styles.ExpectedDuration>예상 작업 기간 : {estimatedDays}일</Styles.ExpectedDuration>
                        <Styles.ApplicationDate>
                            프로젝트 모집 시작일 : {applicationDuration.startDate}
                        </Styles.ApplicationDate>
                        <Styles.ApplicationDate>
                            프로젝트 모집 마감일 : {applicationDuration.endDate}
                        </Styles.ApplicationDate>
                        <Styles.Comment width={isTabletOrMobile ? "auto" : "375px"}>{description}</Styles.Comment>
                    </Styles.ItemUpper>
                    <Styles.ProjectCarItemLower>
                        <Styles.HashtagWrapper>
                            {hashtags.map((item, index) => (
                                <Styles.HashTagContainer>
                                    <Styles.HashTagItem key={index}>{item}</Styles.HashTagItem>
                                </Styles.HashTagContainer>
                            ))}
                        </Styles.HashtagWrapper>
                        <Styles.Price>{payment / 10000}만원</Styles.Price>
                    </Styles.ProjectCarItemLower>
                </Styles.ItemContainer>
                <Button variant="outline" width="100%" height="54px" onClick={onClick}>
                    프로젝트 상세보기
                </Button>
            </Styles.Container>
        </Styles.Wrapper>
    );
};

export const ProjectCardSkeleton = () => {
    return (
        <Styles.SkeletonWrapper>
            <Styles.SkeletonContainer>
                <Styles.Header>
                    <Styles.ProjectHeaderItem>
                        <Styles.SkeletonProjectTitle />
                    </Styles.ProjectHeaderItem>
                    <Styles.SkeletonStatusBox />
                </Styles.Header>
                <Styles.ItemContainer>
                    <Styles.ItemUpper>
                        <Styles.SkeletonExpectedDuration />
                        <Styles.SkeletonApplicationDate />
                        <Styles.SkeletonApplicationDate />
                        <Styles.SkeletonComment />
                    </Styles.ItemUpper>
                    <Styles.ProjectCarItemLower>
                        <Styles.SkeletonHashtagWrapper>
                            <Styles.SkeletonHashtag />
                            <Styles.SkeletonHashtag />
                            <Styles.SkeletonHashtag />
                        </Styles.SkeletonHashtagWrapper>
                        <Styles.SkeletonPrice />
                    </Styles.ProjectCarItemLower>
                </Styles.ItemContainer>
                <Styles.SkeletonButton />
            </Styles.SkeletonContainer>
        </Styles.SkeletonWrapper>
    );
};
