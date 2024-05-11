import styled from "@emotion/styled";

export interface ICheck {
    width: string;
    height: string;
}

export const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    color: #676f7c;
    cursor: pointer;
`;

export const Check = styled.input<ICheck>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
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
