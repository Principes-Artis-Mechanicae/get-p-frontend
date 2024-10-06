import { mobile } from "@/styles/breakpoint";
import { vertical_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const Container = styled.li`
    ${vertical_center}

    list-style: none;

    ${mobile} {
        display: none;
    }
`;
