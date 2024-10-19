import styled from "@emotion/styled";
import { RadioContainerProps } from ".";

import checkActive from "../../assets/btn-check__active.svg";
import checkInActive from "../../assets/btn-check__inactive.svg";

import { vertical_center } from "../../styles/utils";

export const RadioGroupWrapper = styled.div<RadioContainerProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const RadioItemWrapper = styled.div`
    position: relative;

    display: block;
    width: 100%;
    height: 54px;
`;

export const RadioItemElement = styled.input`
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    margin: 0;
    width: 100%;
    height: 54px;

    border-radius: 15px;

    appearance: none;

    border: 1.5px solid #ebedef;

    &:checked {
        border: 1.5px solid #476ff1;
    }
    &:hover {
        cursor: pointer;
    }
`;

export const RadioItemLabel = styled.label`
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;

    margin-left: 40px;

    & > :checked::before {
        content: url(${checkActive});

        ${vertical_center};
        width: 20px;
        height: 100%;

        margin-right: 10px;
        padding: 0px 15px;
    }

    & > :not(:checked)::before {
        content: url(${checkInActive});

        ${vertical_center};
        width: 20px;
        height: 100%;

        margin-right: 10px;
        padding: 0px 15px;
    }
`;
