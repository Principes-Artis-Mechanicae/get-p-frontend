import { vertical_center } from "@/styles/utils";

import styled from "@emotion/styled";

export const HashTagTitleContainer = styled.h4`
    width: 100%;
    margin-bottom: 27px;
`;

export const DateInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 15px 20px 15px 15px;

    ${vertical_center}
    align-items: space-between;

    border-radius: 12px;
    background-color: #f9fafa;
    cursor: pointer;

    gap: 20px;
`;

export const FileInput = styled.input`
    display: none;
`;
