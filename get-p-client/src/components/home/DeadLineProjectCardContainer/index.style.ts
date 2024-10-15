import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;

    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);

    width: 100%;

    ${mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
