import { mobile } from "@getp/styles/breakpoint";
import { place_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const HomePageMainLayout = styled.main`
    width: min(100%, 1100px);
    min-height: 100vh;

    margin: 0px auto;
    padding: 20px;
`;

export const NewPeopleBadge = styled.div`
    ${place_center}
    width: 40px;
    height: 23px;

    margin: 5px 0px;
    border-radius: 5px;

    background-color: #476ff1;
    color: #fff;
`;

export const PopularPeopleContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);

    ${mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`;
