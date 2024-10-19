import { place_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;

    display: flex;

    gap: 10px;
`;

export const StarButton = styled.button<{ isActive: boolean }>`
    width: 54px;
    height: 54px;

    flex-shrink: 0;

    ${place_center};

    background-color: ${(props) => (props.isActive ? "#476FF1" : "#ecf0fe")};
    border-radius: 20px;

    cursor: pointer;
`;
