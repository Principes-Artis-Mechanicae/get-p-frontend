import styled from "@emotion/styled";
import { CheckBoxProps } from ".";

export const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    color: #676f7c;
    cursor: pointer;
`;

export const CheckBoxElement = styled.input<CheckBoxProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    margin-right: 10px;

    border-radius: 6px;
    border: none;
    outline: none;

    background-color: #ebedef;
    background-image: url("/check.png");
    background-position: center center;
    background-repeat: no-repeat;

    appearance: none;

    &:hover {
        cursor: pointer;
    }
    &:checked {
        background-color: #476ff1;
    }
`;
