import { mobile, tablet } from "@getp/styles/breakpoint";

import styled from "@emotion/styled";

export const NotFoundPageWrapper = styled.div`
    width: 100%;

    text-align: center;
    p {
        margin: 5px 0px;
    }
`;

export const NotFoundImg = styled.img`
    display: block;
    width: 200px;

    margin: 50px auto;

    ${tablet} {
        width: 150px;
    }
    ${mobile} {
        width: 150px;
    }
`;
