import { mobile, tablet } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const CarouselWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 440px;

    ${tablet} {
        height: calc(440px - 90px);
    }
    ${mobile} {
        height: calc(440px - 200px);
    }
`;

export const CarouselItem = styled.img`
    flex-shrink: 0;

    display: block;
    width: 100vw;
    height: 100%;

    object-fit: cover;
`;

export const CarouselBackDropWrapper = styled.div`
    width: 100%;
    height: 340px;
`;

export const CarouselItemWrapper = styled.div`
    position: relative;
    top: -280px;

    display: flex;
    align-items: center;

    width: min(80%, 1100px);
    height: 340px;

    margin: 0px auto;

    ${tablet} {
        top: -320px;
    }
    ${mobile} {
        top: -350px;
    }
`;

export const CarouselControllerWrapper = styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 100%;
    margin: 0px auto;
`;

export const CarouselControllerContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    margin: 0px auto;

    button:first-child {
        position: relative;
        left: -5px;
    }
    button:last-child {
        position: relative;
        right: -5px;
    }

    ${mobile} {
        button {
            width: 35px;
            height: 35px;
        }
    }
`;
