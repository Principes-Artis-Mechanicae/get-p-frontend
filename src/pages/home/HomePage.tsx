import { SearchBar } from "principes-getp";

import { Toast } from "@/common/components/overlays/Toast";
import { Text } from "@/common/components/typography/Text";

import { Carousel } from "@/components/home/Carousel/Carousel";
import { NewPeopleCard, NewPeopleCardSkeleton } from "@/components/home/NewPeopleCard";
import { NewPeopleCardContainer } from "@/components/home/NewPeopleCardContainer";
import { HomePageSection } from "@/components/home/Section";
import { PeopleCard } from "@/components/people/PeopleCard";

import { useNewPeople } from "@/services/people/useNewPeople";
import { usePopularPeople } from "@/services/people/usePopularPeople";

import { carouselImgSrc } from "@/constants/carouselImgSrc";

import { HomePageMainLayout, NewPeopleBadge, PopularPeopleContainer } from "./HomePage.style";
import { Footer } from "@/layouts/Footer/Footer";
import { Header } from "@/layouts/Header/Header";

export default function HomePage() {
    const { isPending, data } = useNewPeople();

    usePopularPeople();

    const { isPending: isPopularPeoplePending, data: popularPeople } = usePopularPeople();

    return (
        <>
            <Toast />
            <Header />
            <div style={{ height: "var(--nav-height)" }} />

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
                            <Text size="s" color="#fff" weight="bold">
                                New
                            </Text>
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
                    <PopularPeopleContainer>
                        {isPopularPeoplePending
                            ? "loading"
                            : popularPeople?.content.map((people) => {
                                  return (
                                      <PeopleCard
                                          profileImageUri={people.profileImageUri}
                                          nickname={people.nickname}
                                          activityArea={people.profile.activityArea}
                                          hashtags={people.profile.hashtags}
                                          completeProjectsCount={people.completedProjectsCount}
                                          introduction={people.profile.introduction}
                                      />
                                  );
                              })}
                    </PopularPeopleContainer>
                </HomePageSection>

                <HomePageSection title="마감 임박 프로젝트" link="">
                    마감 임박 프로젝트
                </HomePageSection>
            </HomePageMainLayout>

            <Footer />
        </>
    );
}
