import { mobile } from "@getp/styles/breakpoint";

import styled from "@emotion/styled";

export const PeopleListWrapper = styled.section`
    width: min(100%, 1080px);
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PeopleListContainer = styled.section`
    width: 100%;
    min-height: 850px;
    margin: 40px auto;

    display: grid;
    gap: 20px;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);

    ${mobile} {
        min-height: 1900px;
        grid-template-columns: repeat(1, 1fr);
    }
`;
