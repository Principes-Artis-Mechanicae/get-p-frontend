import React, { forwardRef, useCallback } from "react";

import { TextAreaContainer, ITextAreaElement, TextAreaElement, TextDeleteButton } from "./TextArea.style";

export interface ITextArea extends ITextAreaElement {
    placeholder?: string;
    children?: React.ReactNode;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ width, height, variant, placeholder, children }, ref) => {
        const handleDelete = useCallback(() => {
            // ref 가 정의 되어 있고
            // ref 객체에 current 프로퍼티가 존재하고
            // ref.current 가 정의된 경우
            if (ref && "current" in ref && ref.current) {
                ref.current.value = "";
            }
        }, [ref]);

        const TextAreaElement_ = (
            <TextAreaElement ref={ref} variant={variant} width={width} height={height} placeholder={placeholder}>
                {children}
            </TextAreaElement>
        );

        return (
            <>
                {variant === "primary" ? (
                    <TextAreaContainer>
                        {TextAreaElement_}
                        <TextDeleteButton onClick={handleDelete} />
                    </TextAreaContainer>
                ) : (
                    TextAreaElement_
                )}
            </>
        );
    },
);
