import { mobile, tablet } from "@getp/styles/breakpoint";

import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
    width: 100%;
    background-color: #f9fafa;
`;

export const FooterContainer = styled.div`
    display: flex;
    gap: 10px;
    width: min(100%, 1400px);

    margin: 0px auto;
    padding: 20px;
    padding-bottom: 50px;

    ${tablet} {
        flex-direction: column;
    }
    ${mobile} {
        flex-direction: column;
    }
`;

export const FooterIcon = styled.img`
    display: block;
    width: 100px;
    height: 100%;

    margin: 10px;

    ${tablet} {
        margin: 10px 0px;
    }
    ${mobile} {
        margin: 10px 0px;
    }
`;

export const FooterContainerHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const FooterContainerBody = styled.div`
    display: flex;
    gap: 20px;
`;

export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
