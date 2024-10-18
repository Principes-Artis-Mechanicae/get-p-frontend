import { place_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const InfoWrapper = styled.div`
    width: 100%;

    ${place_center}
    flex-direction: column;
    gap: 30px;

    border-radius: 12px;
    border: 1px solid #ebedef;
    padding: 25px;
`;

export const HeaderContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 10px;
`;

export const DueDate = styled.div`
    background-color: #476ff1;
    color: white;

    font-size: 12px;

    border-radius: 4px;
    padding: 4px 10px;
`;

export const InfoContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 20px;
`;

export const TextContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 10px;
`;

export const HashTagContainer = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const HashTag = styled.div`
    height: 36px;
    ${place_center}

    background-color: #ecf0fe;
    color: #476ff1;

    font-size: 16px;
    font-weight: bold;

    padding: 6px 12px;
    border-radius: 12px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;

    background-color: #ebedef;
`;
