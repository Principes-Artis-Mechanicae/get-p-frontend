import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const ProjectTeamItemWrapper = styled.div`
    width: 100%;
    max-width: 410px;
    height: 77px;

    display: flex;
    align-items: center;

    margin: 5px;

    border: 1px solid #ebedef;
    border-radius: 12px;

    padding: 10px 5px;

    background-color: #fff;
`;

export const ProjectTeamItemId = styled.div`
    ${place_center};

    width: 30px;
    height: 100%;
`;

export const ProjectTeamItemImage = styled.img`
    width: 47px;
    height: 47px;
`;

export const ProjectTeamInfo = styled.div`
    margin: 0px 15px;
    span {
        display: block;
    }
`;

export const ProjectTeamItemStatus = styled.div<{ isAccepted: boolean }>`
    margin-left: auto;
    margin-right: 20px;

    padding: 10px 15px;

    border-radius: 12px;

    color: ${(props) => {
        if (props.isAccepted) return "#28E751";
        else return "#818181";
    }};

    background-color: ${(props) => {
        if (props.isAccepted) return "#F0FFF4";
        else return "#F4F4F4";
    }};

    font-weight: bold;
`;
