import styled from "@emotion/styled";

export interface IInputWrapper {
    width: string;
    height: string;
}

export interface IInputElement extends React.ComponentProps<"input"> {
    width: string;
    height: string;
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
        border-bottom: 1.5px solid #476ff1;
    }
`;

export const InputOption = styled.div`
    height: 100%;

    position: absolute;
    right: 0;
    top: 0;
`;
