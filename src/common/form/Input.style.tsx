import styled from "@emotion/styled";

export interface IInputWrapper {
    width: string;
    height: string;
}

export interface IInputElement extends React.ComponentProps<"input"> {
    width: string;
    height: string;
    error?: string | null;
    disabled?: boolean;
}

export const InputWrapper = styled.div<IInputWrapper>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    position: relative;
`;

export const InputElement = styled.input<IInputElement>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border: 0;
    border-bottom: 1px solid #ebedef;

    font-size: 16px;

    &:focus {
        outline: none;
        border-bottom: ${(props) => {
            if (props.error) return "1.5px solid #FF0000";
            else return "1.5px solid #476ff1";
        }};
    }

    &:disabled {
        font-size: 16px;
        color: #000;
        background-color: transparent;
    }
`;

export const InputOption = styled.div`
    height: 100%;

    position: absolute;
    right: 0;
    top: 0;
`;

export const InputFeedBack = styled.p`
    color: #ff0000;
`;
