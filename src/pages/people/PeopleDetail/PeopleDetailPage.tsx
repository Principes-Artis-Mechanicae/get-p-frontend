import { useCallback } from "react";

import { Input } from "principes-getp";

import { AuthGuardBlur } from "@/components/__common__/display/AuthGuardBlur/AuthGuardBlur";
import { Text } from "@/components/__common__/typography/Text";
import { Profile } from "@/components/people/Profile";
import { TechStackBadge } from "@/components/people/TechStackBadge";

import { usePeopleById } from "@/services/people/usePeopleById";

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
    ResponsiveMobileHeading,
    ResponsivePCHeading,
} from "./PeopleDetailPage.style";

export default function PeopleDetailPage() {
    const { isPending, data: people } = usePeopleById();

    const handlePortfolioOpen = useCallback((url: string) => {
        window.open(url, "_blank");
    }, []);

    if (isPending) return <>loading...</>;

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
                    nickname={people?.nickname as string}
                    likeCount={people?.likesCount as number}
                    completeProjectsCount={people?.completedProjectsCount as number}
                />
                <HashtagWrapper>
                    <Text size="xs" color="secondary" weight="normal">
                        해시태그
                    </Text>
                    <HashtagContainer>
                        {people?.profile.hashtags &&
                            people.profile.hashtags.map((hashtag: string) => {
                                return <HashtagCard>{hashtag}</HashtagCard>;
                            })}
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
                    <Input width="100%" height="45px" disabled={true} value={people?.nickname as string} />
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        피플 유형
                    </Text>
                    <Input
                        width="100%"
                        height="45px"
                        disabled={true}
                        value={people?.peopleType === "INDIVIDAUL" ? "개인" : "팀"}
                    />
                </TextboxContainer>
                <AuthGuardBlur width="100%" height="100%" withButton={true}>
                    <TextboxContainer>
                        <Text size="xs" color="secondary" weight="bold">
                            기술 스택
                        </Text>
                        <BadgeContainer>
                            {people?.profile.techStacks.map((techStack: string) => (
                                <TechStackBadge text={techStack} isInput={false} />
                            ))}
                        </BadgeContainer>
                    </TextboxContainer>
                    <TextboxContainer>
                        <Text size="xs" color="secondary" weight="bold">
                            활동지역
                        </Text>
                        <Input width="100%" height="45px" disabled={true} value={people?.profile.activityArea} />
                    </TextboxContainer>
                    <TextboxContainer>
                        <Text size="xs" color="secondary" weight="bold">
                            학력
                        </Text>
                        <Input width="100%" height="45px" disabled={true} value={people?.profile.education.school} />
                    </TextboxContainer>
                    <TextboxContainer>
                        <Text size="xs" color="secondary" weight="bold">
                            소개
                        </Text>
                        <Textbox width="100%">{people?.profile.introduction}</Textbox>
                    </TextboxContainer>
                    <TextboxContainer>
                        <Text size="xs" color="secondary" weight="bold">
                            포트폴리오
                        </Text>
                        <PortfolioContainer>
                            {people?.profile.portfolios.map((portfolio) => (
                                <PortfolioCard onClick={() => handlePortfolioOpen(portfolio.url)}>
                                    {portfolio.description}
                                </PortfolioCard>
                            ))}
                        </PortfolioContainer>
                    </TextboxContainer>
                </AuthGuardBlur>
            </InfoContainer>
        </PeopleDetailWrapper>
    );
}
