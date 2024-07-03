import React, { useRef } from "react";

import { TextAreaContainer, ITextAreaElement, TextAreaElement, TextDeleteButton } from "./TextArea.style";

export interface ITextArea extends ITextAreaElement {
    placeholder?: string;
    children?: React.ReactNode;
}

export const TextArea: React.FC<ITextArea> = ({ width, height, variant, placeholder, children }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleDelete = () => {
        if (textAreaRef.current) {
            textAreaRef.current.value = "";
        }
    };

    const textAreaElement = (
        <TextAreaElement ref={textAreaRef} variant={variant} width={width} height={height} placeholder={placeholder}>
            {children}
        </TextAreaElement>
    );

    return (
        <>
            {variant === "primary" ? (
                <TextAreaContainer>
                    {textAreaElement}
                    <TextDeleteButton onClick={handleDelete}></TextDeleteButton>
                </TextAreaContainer>
            ) : (
                textAreaElement
            )}
        </>
    );
};
