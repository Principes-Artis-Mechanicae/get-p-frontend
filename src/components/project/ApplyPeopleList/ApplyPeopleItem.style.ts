import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const ApplyPeopleItemWrapper = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 125px;

    max-width: 400px;

    margin: 10px 0px;

    border: 1px solid #ebedef;
    border-radius: 12px;

    background-color: #fff;

    &:hover {
        cursor: pointer;
    }
`;

export const ApplyPeopleId = styled.div`
    ${place_center};

    width: 25px;
    height: 100%;
`;

export const ApplyPeopleImage = styled.img`
    display: block;

    width: 90px;
    height: 90px;

    margin: 0px 10px;
`;

export const ApplyPeopleInfo = styled.div`
    span {
        display: block;
    }
    span:first-child {
        margin: 3px 0px;
    }
`;
