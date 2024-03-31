import React, { forwardRef } from "react";

import { Check, CheckBoxLabel } from "./CheckBox.style";

export interface ICheckBox {
    width: string;
    height: string;
    children?: React.ReactNode;
}

export const CheckBox = forwardRef<HTMLInputElement, ICheckBox>(({ width, height, children }, ref) => {
    return (
        <CheckBoxLabel>
            <Check ref={ref} type="checkbox" width={width} height={height}></Check>
            {children}
        </CheckBoxLabel>
    );
});
