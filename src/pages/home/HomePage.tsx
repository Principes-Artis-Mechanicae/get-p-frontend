import { SearchBar } from "principes-getp";

import { Toast } from "@/components/__common__/feedback/Toast";
import { Footer } from "@/components/__common__/layout/Footer";
import { Header } from "@/components/__common__/layout/Header";
import { Text } from "@/components/__common__/typography/Text";
import { Carousel } from "@/components/home/Carousel/Carousel";
import { NewPeopleCard, NewPeopleCardSkeleton } from "@/components/home/NewPeople/NewPeopleCard";
import { NewPeopleCardContainer } from "@/components/home/NewPeople/NewPeopleCardContainer";
import { HomePageSection } from "@/components/home/Section/HomePageSection";

import { useNewPeople } from "@/services/people/useNewPeople";

import { carouselImgSrc } from "@/constants/carouselImgSrc";

import { nav_height } from "@/styles/variables";

import { HomePageMainLayout, NewPeopleBadge } from "./HomePage.style";

export default function HomePage() {
    const { isPending, data } = useNewPeople();

    return (
        <>
            <Toast />
            <Header />
            <div style={{ height: nav_height }} />

            <Carousel carouselImgSrc={carouselImgSrc} />

            <HomePageMainLayout>
                <HomePageSection title="어떤 프로젝트를 찾으시나요?" link="">
                    <SearchBar width="100%" placeholder="키워드로 검색해 보세요" />
                </HomePageSection>

                <HomePageSection
                    title="새로 가입한 신인 피플"
                    link=""
                    topBadge={
                        <NewPeopleBadge>
                            <Text size="s">New</Text>
                        </NewPeopleBadge>
                    }
                >
                    <NewPeopleCardContainer>
                        {isPending
                            ? Array.from({ length: 5 }).map(() => <NewPeopleCardSkeleton />)
                            : data &&
                              data?.content.map((people) => {
                                  return (
                                      <NewPeopleCard
                                          key={people.peopleId}
                                          peopleId={people.peopleId}
                                          projectCount={people.completedProjectsCount}
                                          region={people.profile.activityArea}
                                          peopleName={people.nickname}
                                          hashTags={people.profile.hashtags}
                                          likesCount={0}
                                      />
                                  );
                              })}
                    </NewPeopleCardContainer>
                </HomePageSection>

                <HomePageSection title="인기 있는 피플" link="">
                    인기 피플
                </HomePageSection>

                <HomePageSection title="마감 임박 프로젝트" link="">
                    마감 임박 프로젝트
                </HomePageSection>
            </HomePageMainLayout>

            <Footer />
        </>
    );
}
