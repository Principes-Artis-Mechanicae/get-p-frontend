import { useMediaQuery } from "react-responsive";

import { Text } from "@/common/typography/Text";

import { Profile } from "@/components/people/Profile";
import { TechStackBadge } from "@/components/people/TechStackBadge";

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

const PeopleDetailPage = () => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });

    return (
        <PeopleDetailWrapper>
            {isMobile && (
                <h1>
                    <Text size="l" color="point" weight="bold">
                        피플 상세 조회
                    </Text>
                </h1>
            )}
            <ProfileContainer>
                <Profile width="100%" height="283px" nickname="People01" likeCount={14} completeProjectsCount={2} />
                <HashtagWrapper>
                    <Text size="xs" color="secondary" weight="normal">
                        해시태그
                    </Text>
                    <HashtagContainer>
                        <HashtagCard>#설계</HashtagCard>
                        <HashtagCard>#기획</HashtagCard>
                        <HashtagCard>#서류작업</HashtagCard>
                    </HashtagContainer>
                </HashtagWrapper>
            </ProfileContainer>
            <InfoContainer>
                {!isMobile && (
                    <h1>
                        <Text size="l" color="point" weight="bold">
                            피플 상세 조회
                        </Text>
                    </h1>
                )}
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        닉네임
                    </Text>
                    <Textbox width="100%">People01</Textbox>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        피플 유형
                    </Text>
                    <Textbox width="100%">개인</Textbox>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        기술 스택
                    </Text>
                    <BadgeContainer>
                        <TechStackBadge text="JavaScript" isInput={false}></TechStackBadge>
                        <TechStackBadge text="Adobe Illustrator" isInput={false}></TechStackBadge>
                        <TechStackBadge text="Python" isInput={false}></TechStackBadge>
                        <TechStackBadge text="PHP" isInput={false}></TechStackBadge>
                    </BadgeContainer>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        활동지역
                    </Text>
                    <Textbox width="100%">대구광역시 북구</Textbox>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        학력
                    </Text>
                    <Textbox width="100%">경북대학교 대구캠퍼스</Textbox>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        소개
                    </Text>
                    <Textbox width="100%">
                        안녕하세요 의뢰자님 반갑습니다^^ 경북대학교 경영학과 19학번 김수현 입니다. 다양한 관련 작업을
                        진행해 왔으며, 많은 경험을 바탕으로 의뢰자님의 서류 가치를 업그레이드 시킬 수 있는 만족스러운
                        결과물로 보답드리도록 하겠습니다. (*워드파일 원본 제공) 감사합니다.
                    </Textbox>
                </TextboxContainer>
                <TextboxContainer>
                    <Text size="xs" color="secondary" weight="bold">
                        포트폴리오
                    </Text>
                    <PortfolioContainer>
                        <PortfolioCard>신채원의 포트폴리오1</PortfolioCard>
                        <PortfolioCard>신채원의 포트폴리오2</PortfolioCard>
                    </PortfolioContainer>
                </TextboxContainer>
            </InfoContainer>
        </PeopleDetailWrapper>
    );
};

export default PeopleDetailPage;
