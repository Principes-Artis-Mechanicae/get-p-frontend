import { nav_height } from "@/styles/variables";

import styled from "@emotion/styled";

export interface ICarouselContainer {
    size: number;
}

export const CarouselWrapper = styled.section`
    width: 100%;
    height: auto;

    background-color: gray;

    overflow: hidden;
`;

export const CarouselContainer = styled.div<ICarouselContainer>`
    display: flex;
    width: ${(props) => `${(props.size + 1) * 100}vw`};
    height: ${`calc(340px - ${nav_height})`};

    overflow: hidden;

    transition: transform 1s ease-in-out;
`;

export const CarouselItem = styled.img`
    flex-shrink: 0;

    display: block;
    width: 100vw;
    height: 100%;

    object-fit: cover;
`;
