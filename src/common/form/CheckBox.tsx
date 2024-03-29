import React, { forwardRef } from "react";

import { CheckboxContainer, Check, CheckBoxLabel } from "./CheckBox.style";

export interface ICheckBox {
    width: string;
    height: string;
    checkWidth: string;
    checkHeight: string;
    children?: React.ReactNode;
}

export const CheckBox = forwardRef<HTMLInputElement, ICheckBox>(
    ({ width, height, checkWidth, checkHeight, children }, ref) => {
        return (
            <CheckboxContainer width={width} height={height}>
                <CheckBoxLabel>
                    <Check ref={ref} type="checkbox" checkWidth={checkWidth} checkHeight={checkHeight}></Check>
                    {children}
                </CheckBoxLabel>
            </CheckboxContainer>
        );
    },
);
