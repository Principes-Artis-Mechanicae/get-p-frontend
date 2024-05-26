import { Toast } from "@/common/feedback/Toast";
import { SearchBar } from "@/common/form/SearchBar";
import { Footer } from "@/common/layout/Footer";
import { Header } from "@/common/layout/Header";
import { Text } from "@/common/typography/Text";

import { Carousel } from "@/components/home/Carousel";
import { HomePageSection } from "@/components/home/HomePageSection.style";

import { carouselImgSrc } from "@/constants/carouselImgSrc";

import { nav_height } from "@/styles/variables";

import { HomePageMainLayout, NewPeopleBadge } from "./HomePage.style";

export default function HomePage() {
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
                    신인 피플
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
