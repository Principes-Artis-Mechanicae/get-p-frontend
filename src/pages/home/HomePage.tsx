import { Carousel } from "@/common/display/Carousel";
import { Toast } from "@/common/feedback/Toast";
import { Footer } from "@/common/layout/Footer";
import { Header } from "@/common/layout/Header";
import { Main } from "@/common/layout/MainLayout";

import { useCarousel } from "@/hooks/useCarousel";

import { carouselImgSrc } from "@/constants/carouselImgSrc";

import { nav_height } from "@/styles/variables";

export default function HomePage() {
    const {
        carouselRef: carouselBackDropRef,
        handleNextSlide: handleNextCarouselBackDrop,
        handlePrevSlide: handlePrevCarouselBackDrop,
    } = useCarousel(carouselImgSrc, 3);

    const { carouselRef, handleNextSlide, handlePrevSlide } = useCarousel(carouselImgSrc, 3);

    return (
        <>
            <Toast />
            <Header />
            <div style={{ height: nav_height }} />

            <Carousel ref={carouselBackDropRef} imgArr={carouselImgSrc} />
            <Carousel ref={carouselRef} imgArr={carouselImgSrc}></Carousel>
            <button
                onClick={() => {
                    handlePrevCarouselBackDrop();
                    handlePrevSlide();
                }}
            >
                이전
            </button>

            <button
                onClick={() => {
                    handleNextCarouselBackDrop();
                    handleNextSlide();
                }}
            >
                다음
            </button>

            <Main>
                <p>Home Page</p>
            </Main>

            <Footer />
        </>
    );
}
