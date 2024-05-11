import { forwardRef } from "react";

import { Text } from "../typography/Text";
import { IInputElement, InputElement, InputFeedBack, InputOption, InputWrapper } from "./Input.style";

export interface IInput extends IInputElement {
    children?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({ width, height, children, error, ...rest }, ref) => {
    return (
        <InputWrapper width={width} height={height}>
            <InputElement ref={ref} width={width} height={height} error={error} {...rest}></InputElement>
            <InputOption>{children}</InputOption>
            <InputFeedBack>
                <Text size="xs">{error}</Text>
            </InputFeedBack>
        </InputWrapper>
    );
});
