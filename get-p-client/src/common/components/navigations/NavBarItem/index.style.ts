import { mobile } from "@getp/styles/breakpoint";
import { vertical_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const Container = styled.li`
    ${vertical_center}

    list-style: none;

    ${mobile} {
        display: none;
    }
`;
