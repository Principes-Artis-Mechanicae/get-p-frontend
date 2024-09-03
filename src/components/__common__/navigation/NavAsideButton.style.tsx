import { mobile } from "@/styles/breakpoint";
import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const NavAsideButtonWrapper = styled.li`
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

export const NavAsideButtonIcon = styled.img`
    width: 20px;
    height: 20px;
`;
