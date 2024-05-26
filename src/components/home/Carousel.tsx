import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { Button } from "@/common/form/Button";

import {
    CarouselBackDropWrapper,
    CarouselControllerWrapper,
    CarouselControllerContainer,
    CarouselItem,
    CarouselItemWrapper,
    CarouselWrapper,
} from "./Carousel.style";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as ISwiper } from "swiper/types";

export interface ICarousel {
    carouselImgSrc: string[];
}

export const Carousel: React.FC<ICarousel> = ({ carouselImgSrc }) => {
    const backdropSwiperRef = useRef<ISwiper | null>(null);
    const mainSwiperRef = useRef<ISwiper | null>(null);

    const handleSlideChange = (swiper: ISwiper) => {
        if (backdropSwiperRef.current && mainSwiperRef.current) {
            const currentIndex = swiper.activeIndex;
            backdropSwiperRef.current.slideTo(currentIndex);
            mainSwiperRef.current.slideTo(currentIndex);
        }
    };

    return (
        <CarouselWrapper>
            <CarouselBackDropWrapper>
                <Swiper
                    css={css`
                        height: 340px;
                    `}
                    autoplay={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    allowTouchMove={false}
                    onSwiper={(swiper) => (backdropSwiperRef.current = swiper)}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    {carouselImgSrc.map((imgSrc, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CarouselItem
                                    src={imgSrc}
                                    css={css`
                                        filter: blur(10px) brightness(0.5);
                                    `}
                                ></CarouselItem>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </CarouselBackDropWrapper>

            <CarouselItemWrapper>
                <Swiper
                    css={css`
                        height: 340px;
                    `}
                    autoplay={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                    allowTouchMove={false}
                >
                    {carouselImgSrc.map((imgSrc, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CarouselItem
                                    src={imgSrc}
                                    css={css`
                                        width: inherit;
                                        height: inherit;
                                        object-fit: contain;
                                    `}
                                ></CarouselItem>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <CarouselControllerWrapper>
                    <CarouselControllerContainer>
                        <Button
                            variant="rounded"
                            width="50px"
                            height="50px"
                            onClick={() => {
                                if (mainSwiperRef.current) {
                                    mainSwiperRef.current.slidePrev();
                                }
                            }}
                        >
                            <FaChevronLeft />
                        </Button>

                        <Button
                            variant="rounded"
                            width="50px"
                            height="50px"
                            onClick={() => {
                                if (mainSwiperRef.current) {
                                    mainSwiperRef.current.slideNext();
                                }
                            }}
                        >
                            <FaChevronRight />
                        </Button>
                    </CarouselControllerContainer>
                </CarouselControllerWrapper>
            </CarouselItemWrapper>
        </CarouselWrapper>
    );
};
