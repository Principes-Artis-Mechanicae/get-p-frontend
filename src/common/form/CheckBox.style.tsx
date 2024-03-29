import styled from "@emotion/styled";

export interface ICheckBoxContainer {
    width: string;
    height: string;
}

export interface ICheck {
    checkWidth: string;
    checkHeight: string;
}

export const CheckboxContainer = styled.div<ICheckBoxContainer>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    color: #676f7c;
    cursor: pointer;
`;

export const Check = styled.input<ICheck>`
    width: ${(props) => props.checkWidth};
    height: ${(props) => props.checkHeight};
    appearance: none;
    background-color: #ebedef;
    background-image: url("/check.png");
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 6px;
    border: none;
    outline: none;
    margin-right: 10px;
    cursor: pointer;

    &:checked {
        background-color: #476ff1;
    }
`;
