import { mobile, tablet } from "@getp/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;

    margin: 40px auto;
`;

export const Header = styled.div`
    text-align: center;
    margin: 50px 0px;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    ${tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
`;
