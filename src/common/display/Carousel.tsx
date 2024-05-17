import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { useCarousel } from "@/hooks/useCarousel";

import { CarouselContainer, CarouselItem, CarouselWrapper } from "./Carousel.style";

export interface ICarousel {
    imgArr: string[];
}

export const Carousel: React.FC<ICarousel> = ({ imgArr }) => {
    const { carouselRef, setCurrentSlideIndex } = useCarousel(imgArr, 3);

    return (
        <>
            <CarouselWrapper>
                <CarouselContainer ref={carouselRef} size={imgArr.length}>
                    {[...imgArr, imgArr.at(0)].map((imgSrc, index) => {
                        return <CarouselItem key={index} src={imgSrc} />;
                    })}
                </CarouselContainer>
            </CarouselWrapper>

            <button onClick={() => setCurrentSlideIndex((currentSlideIndex) => currentSlideIndex + 1)}>다음</button>
        </>
    );
};
