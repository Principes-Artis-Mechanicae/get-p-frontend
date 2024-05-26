import { Text } from "@/common/typography/Text";

import {
    CarouselProgressBadge,
    CarouselProgressBarContainer,
    CarouselProgressBarWrapper,
    ICarouselProgressBarContainer,
} from "./CarouselProgressBar.style";

export type ICarouselProgressBar = ICarouselProgressBarContainer;

export const CarouselProgressBar: React.FC<ICarouselProgressBar> = ({ currentSlide, maxCarouselSlide }) => {
    return (
        <CarouselProgressBarWrapper>
            <CarouselProgressBadge>
                <Text>{currentSlide}</Text>
                <Text>/</Text>
                <Text>{maxCarouselSlide}</Text>
            </CarouselProgressBadge>
            <CarouselProgressBarContainer currentSlide={currentSlide} maxCarouselSlide={maxCarouselSlide} />
        </CarouselProgressBarWrapper>
    );
};
