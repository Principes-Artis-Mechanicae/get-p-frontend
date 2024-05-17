import { forwardRef } from "react";

import { CarouselContainer, CarouselItem, CarouselWrapper } from "./Carousel.style";

export interface ICarousel {
    imgArr: string[];
}

export const Carousel = forwardRef<HTMLDivElement, ICarousel>(({ imgArr }, ref) => {
    return (
        <CarouselWrapper>
            <CarouselContainer ref={ref} size={imgArr.length}>
                {imgArr.map((imgSrc, index) => {
                    return <CarouselItem key={index} src={imgSrc} />;
                })}
            </CarouselContainer>
        </CarouselWrapper>
    );
});
