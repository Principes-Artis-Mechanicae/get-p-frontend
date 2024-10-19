import styled from "@emotion/styled";

export interface CheckButtonProps {
    width?: string;
    height?: string;

    isChecked?: boolean;
}

export const CheckButtonElement = styled.button<CheckButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: ${(props) => (props.isChecked ? "1px solid #476FF1" : "1px solid #EBEDEF")};
    border-radius: 12px;

    background-color: #fff;
    color: ${(props) => (props.isChecked ? "#476FF1" : "#676F7C")};

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Check = styled.input<CheckButtonProps>`
    width: 20px;
    height: 20px;

    background-color: ${(props) => (props.isChecked ? "#476FF1" : "#EBEDEF")};
    background-image: url("/check.png");
    background-position: center center;
    background-repeat: no-repeat;

    margin: 0px 15px;

    border-radius: 6px;
    border: none;
    outline: none;

    appearance: none;
`;
