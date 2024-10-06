import { forwardRef } from "react";

import * as Styles from "./index.style";
import { SerializedStyles } from "@emotion/react";

export interface TextProps extends React.ComponentProps<"span"> {
    size?: "xs" | "s" | "m" | "l" | "xl" | SizeProp;
    color?: "primary" | "secondary" | "point" | "placeholder" | string;
    weight?: "bolder" | "bold" | "normal" | "lighter";
    children?: React.ReactNode;
    css?: SerializedStyles;
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ css, size, color, weight, children, ...rest }, ref) => {
    return (
        <Styles.TextElement css={css} size={size} color={color} weight={weight} {...rest} ref={ref} {...rest}>
            {children}
        </Styles.TextElement>
    );
});
