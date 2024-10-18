import { place_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const PeopleInfoRegisterWrapper = styled.section`
    width: min(100%, 500px);
    margin: 0px auto;
`;

export const PeopleInfoRegisterHeader = styled.p`
    margin: 50px 0px;

    text-align: center;
`;

export const PeopleInfoRegisterContainer = styled.div`
    width: 100%;
`;

export const PeopleInfoRegisterItem = styled.div`
    width: 100%;
    margin: 30px 0px;
`;

export const PeopleProfileWrapper = styled.div`
    ${place_center}
    margin: 50px 0px;
`;

export const PeopleTypeButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    margin: 5px 0px;
`;
