import React, { forwardRef, useCallback, useRef } from "react";

import { TextAreaContainer, ITextAreaElement, TextAreaElement, TextDeleteButton } from "./index.style";

export interface ITextArea extends ITextAreaElement {
    placeholder?: string;
    children?: React.ReactNode;
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ width, height, variant, placeholder, children }, ref) => {
        const textAreaRef = useRef<HTMLTextAreaElement>(null);

        const handleDelete = useCallback(() => {
            // ref 가 정의 되어 있고
            // ref 객체에 current 프로퍼티가 존재하고
            // ref.current 가 정의된 경우
            if (!ref && textAreaRef.current) {
                textAreaRef.current.value = "";
            } else if (ref && "current" in ref && ref.current) {
                ref.current.value = "";
            }
        }, [ref]);

        return (
            <>
                {variant === "primary" ? (
                    <TextAreaContainer>
                        <TextAreaElement
                            ref={!ref ? textAreaRef : ref}
                            variant={variant}
                            width={width}
                            height={height}
                            placeholder={placeholder}
                        >
                            {children}
                        </TextAreaElement>
                        <TextDeleteButton onClick={handleDelete} />
                    </TextAreaContainer>
                ) : (
                    <TextAreaElement
                        ref={!ref ? textAreaRef : ref}
                        variant={variant}
                        width={width}
                        height={height}
                        placeholder={placeholder}
                    >
                        {children}
                    </TextAreaElement>
                )}
            </>
        );
    },
);
