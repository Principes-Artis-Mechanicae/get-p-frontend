import { mobile } from "@/styles/breakpoint";

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
    margin: 40px auto;

    display: grid;
    gap: 10px;

    grid-template-columns: repeat(2, 1fr);

    ${mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
