import { LabelElement } from "./index.style";

export interface LabelProps extends React.ComponentProps<"label"> {}

export const Label = ({ children, ...props }: LabelProps) => {
    return <LabelElement {...props}>{children}</LabelElement>;
};
