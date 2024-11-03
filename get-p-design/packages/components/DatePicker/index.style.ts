import styled from "@emotion/styled";
import { DatePickerProps } from ".";

export const DatePickerElement = styled.input<DatePickerProps>`
    display: block;

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: 0;
    border-bottom: 1px solid #c4c7cc;

    font-size: 16px;

    &:focus {
        outline: none;
    }
    &::-webkit-calendar-picker-indicator {
        height: 100%;
        aspect-ratio: 1/1;
    }
`;
