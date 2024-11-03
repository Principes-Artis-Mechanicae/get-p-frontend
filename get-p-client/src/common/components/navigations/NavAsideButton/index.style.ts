import { mobile } from "@getp/styles/breakpoint";
import { place_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const Wrapper = styled.li`
    display: none;
    width: 40px;

    list-style: none;
    &:hover {
        cursor: pointer;
    }
    ${mobile} {
        ${place_center}
    }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;
