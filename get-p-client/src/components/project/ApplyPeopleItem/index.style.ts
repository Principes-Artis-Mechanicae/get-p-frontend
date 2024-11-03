import { place_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 400px;
    height: 125px;

    margin: 10px 0px;
    border: 1px solid #ebedef;
    border-radius: 12px;

    background-color: #fff;

    &:hover {
        cursor: pointer;
    }
`;

export const Id = styled.div`
    ${place_center};

    width: 25px;
    height: 100%;
`;

export const Image = styled.img`
    display: block;

    width: 90px;
    height: 90px;

    margin: 0px 10px;
`;

export const Info = styled.div`
    span {
        display: block;
    }
    span:first-child {
        margin: 3px 0px;
    }
`;
