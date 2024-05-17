import { forwardRef } from "react";

import { ITextAreaElement, TextAreaElement } from "./TextArea.style";

export interface ITextArea extends ITextAreaElement {
    placeholder?: string;
    children?: React.ReactNode;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ width, height, variant, placeholder, children }, ref) => {
        return (
            <TextAreaElement ref={ref} variant={variant} width={width} height={height} placeholder={placeholder}>
                {children}
            </TextAreaElement>
        );
    },
);
