import { toast } from "react-toastify";

import { Input } from "@/common/form/Input";
import { Text } from "@/common/typography/Text";

import { Profile } from "@/components/people/Profile";
import { TechStackBadge } from "@/components/people/TechStackBadge";

import { useReadPeopleDetail } from "@/hooks/useReadPeopleDetail";

import { mobile } from "@/styles/breakpoint";

import {
    PeopleDetailWrapper,
    ProfileContainer,
    HashtagWrapper,
    HashtagContainer,
    HashtagCard,
    InfoContainer,
    TextboxContainer,
    Textbox,
    BadgeContainer,
    PortfolioCard,
    PortfolioContainer,
} from "./PeopleDetailPage.style";
import styled from "@emotion/styled";

const ResponsivePCHeading = styled.h1`
    display: flex;

    ${mobile} {
        display: none;
    }
`;

const ResponsiveMobileHeading = styled.h1`
    display: none;

    ${mobile} {
        display: block;
    }
`;

const PeopleDetailPage = () => {
    const { data: detailInfo, isLoading, isError } = useReadPeopleDetail();

    if (isLoading) {
        const loadingToastId = toast.loading("정보를 불러오는 중입니다...");

        setTimeout(() => {
            toast.dismiss(loadingToastId);
        }, 2000);
    }

    if (isError) {
        toast.error("정보를 불러오는 데 실패하였습니다.");
    }

    if (!detailInfo) {
        return null;
    }

    const handlePortfolioOpen = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <PeopleDetailWrapper>
            <ResponsiveMobileHeading>
                <Text size="l" color="point" weight="bold">
                    피플 상세 조회
                </Text>
            </ResponsiveMobileHeading>
            <ProfileContainer>
                <Profile
                    width="100%"
                    height="283px"
                    nickname={detailInfo.nickname}
                    likeCount={detailInfo.likesCount}
                    completeProjectsCount={detailInfo.completedProjectsCount}
                />
                <HashtagWrapper>
                    <Text size="xs" color="secondary" weight="normal">
                        해시태그
                    </Text>
                    <HashtagContainer>
                        {detailInfo.profile.hashtags.map((hashtag: string) => (
                            <HashtagCard>{`#${hashtag}`}</HashtagCard>
                        ))}
                    </HashtagContainer>
                </HashtagWrapper>
            </ProfileContainer>
            <InfoContainer>
                <ResponsivePCHeading>
                    <Text size="l" color="point" weight="bold">
                        피플 상세 조회
                    </Text>
                </ResponsivePCHeading>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        닉네임
                    </Text>
                    <Input width="100%" height="45px" disabled={true} value={detailInfo.nickname} />
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        피플 유형
                    </Text>
                    <Input
                        width="100%"
                        height="45px"
                        disabled={true}
                        value={detailInfo.peopleType === "INDIVIDAUL" ? "개인" : "팀"}
                    />
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        기술 스택
                    </Text>
                    <BadgeContainer>
                        {detailInfo.profile.techStacks.map((techStack: string) => (
                            <TechStackBadge text={techStack} isInput={false} />
                        ))}
                    </BadgeContainer>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        활동지역
                    </Text>
                    <Input width="100%" height="45px" disabled={true} value={detailInfo.profile.activityArea} />
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        학력
                    </Text>
                    <Input width="100%" height="45px" disabled={true} value={detailInfo.profile.education.school} />
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        소개
                    </Text>
                    <Textbox width="100%">{detailInfo.profile.introduction}</Textbox>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        포트폴리오
                    </Text>
                    <PortfolioContainer>
                        {detailInfo.profile.portfolios.map((portfolio: { description: string; url: string }) => (
                            <PortfolioCard onClick={() => handlePortfolioOpen(portfolio.url)}>
                                {portfolio.description}
                            </PortfolioCard>
                        ))}
                    </PortfolioContainer>
                </TextboxContainer>
            </InfoContainer>
        </PeopleDetailWrapper>
    );
};

export default PeopleDetailPage;
