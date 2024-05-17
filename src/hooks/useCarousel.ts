import { useRef, useLayoutEffect, useState } from "react";

export const useCarousel = (imgSrcList: string[], interval: number) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    useLayoutEffect(() => {
        intervalRef.current = setInterval(() => {
            if (!carouselRef.current) return;

            carouselRef.current.style.transition = `transform 1s ease-in-out`;
            carouselRef.current.style.transform = `translateX(${currentSlideIndex * -100}vw)`;
            setCurrentSlideIndex((currentSlideIndex) => currentSlideIndex + 1);

            if (imgSrcList.length + 1 === currentSlideIndex) {
                carouselRef.current.style.transition = ``;
                carouselRef.current.style.transform = `translateX(0vw)`;
                setCurrentSlideIndex(() => 0);
            }
        }, 1000 * interval);

        return () => {
            intervalRef.current && clearInterval(intervalRef.current);
        };
    }, [currentSlideIndex, imgSrcList.length, interval]);

    return { carouselRef, setCurrentSlideIndex };
};
