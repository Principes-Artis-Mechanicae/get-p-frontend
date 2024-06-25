import { useRef, useLayoutEffect, useState, useCallback } from "react";

export const useCarousel = (imgSrcList: string[], interval: number) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    const handleSlide = useCallback(
        (index: number) => {
            if (!carouselRef.current) return;

            if (index >= imgSrcList.length) setCurrentSlideIndex(() => 0);
            else setCurrentSlideIndex(() => index);

            carouselRef.current.style.transform = `translateX(${currentSlideIndex * -100}vw)`;
        },
        [currentSlideIndex, imgSrcList.length],
    );

    const handlePrevSlide = useCallback(() => {
        handleSlide(currentSlideIndex - 1);
    }, [currentSlideIndex, handleSlide]);

    const handleNextSlide = useCallback(() => {
        handleSlide(currentSlideIndex + 1);
    }, [currentSlideIndex, handleSlide]);

    useLayoutEffect(() => {
        intervalRef.current = setInterval(() => {
            handleSlide(currentSlideIndex + 1);
        }, 1000 * interval);

        return () => {
            intervalRef.current && clearInterval(intervalRef.current);
        };
    }, [currentSlideIndex, handleSlide, interval]);

    return { carouselRef, handlePrevSlide, handleNextSlide, handleSlide };
};
