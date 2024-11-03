import { vertical_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const MeetingRequestWrapper = styled.section`
    width: min(100%, 600px);
    margin: 0px auto;
`;

export const MeetingRequestHeader = styled.p`
    margin: 50px 0px;

    text-align: center;
`;

export const MeetingRequestContainer = styled.div`
    width: 100%;
`;

export const MeetingRequestItem = styled.div`
    width: 100%;
    margin: 30px 0px;
`;

export const DateContainer = styled.div`
    width: 100%;

    display: flex;
    gap: 10px;
`;

export const TimeInput = styled.input`
    width: 25%;
    height: 50px;
    padding: 15px 20px 15px 15px;

    ${vertical_center}
    align-items: space-between;

    border-radius: 12px;
    background-color: #f9fafa;
    cursor: pointer;

    gap: 20px;
`;
