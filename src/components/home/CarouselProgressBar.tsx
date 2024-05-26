import { Text } from "@/common/typography/Text";

import {
    CarouselProgressBadge,
    CarouselProgressBarContainer,
    CarouselProgressBarWrapper,
    ICarouselProgressBarContainer,
    ICarouselProgressBarWrapper,
} from "./CarouselProgressBar.style";

export interface ICarouselProgressBar extends ICarouselProgressBarWrapper, ICarouselProgressBarContainer {
    //
}

export const CarouselProgressBar: React.FC<ICarouselProgressBar> = ({ currentSlide, maxCarouselSlide }) => {
    return (
        <CarouselProgressBarWrapper>
            <CarouselProgressBadge>
                <Text>1</Text>
                <Text>/</Text>
                <Text>5</Text>
            </CarouselProgressBadge>
            <CarouselProgressBarContainer currentSlide={currentSlide} maxCarouselSlide={maxCarouselSlide} />
        </CarouselProgressBarWrapper>
    );
};
