import { IInputElement, InputElement, InputOption, InputWrapper } from "./Input.style";

export interface IInput extends IInputElement {
    children?: React.ReactNode;
}

export const Input: React.FC<IInput> = ({ width, height, children, ...rest }) => {
    return (
        <InputWrapper width={width} height={height}>
            <InputElement width={width} height={height} {...rest}></InputElement>
            <InputOption>{children}</InputOption>
        </InputWrapper>
    );
};
