import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export interface ICarouselProgressBarContainer {
    currentSlide: number;
    maxCarouselSlide: number;
}

export const CarouselProgressBarWrapper = styled.div`
    position: absolute;
    bottom: 60px;
    z-index: 2;

    width: 100%;
    margin: 0px auto;

    padding: 0px 150px;
`;

export const CarouselProgressBarContainer = styled.div<ICarouselProgressBarContainer>`
    width: 100%;
    height: 3px;
    background-color: #fff;

    &::before {
        content: "";
        background-color: #021026;
        border-radius: 5px;
        display: block;
        width: ${(props) => `${100 / props.maxCarouselSlide}%`};
        height: 100%;
        transform: ${(props) => `translateX(${props.currentSlide * (100 / props.maxCarouselSlide)}%)`};
        transition: transform 0.3s ease-in-out;
    }
`;

export const CarouselProgressBadge = styled.div`
    ${place_center}

    width: 50px;
    height: 28px;

    margin: 10px 0px;
    border-radius: 30px;

    color: #fff;
    background: #02102699;
`;
