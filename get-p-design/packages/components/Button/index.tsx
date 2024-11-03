import { ButtonElement } from "./index.style";

export interface ButtonProps extends React.ComponentProps<"button"> {
    variant: "primary" | "secondary" | "outline" | "disabled" | "side" | "link" | "rounded" | string;

    width: string;
    height: string;
}

export const Button = (props: ButtonProps) => {
    return <ButtonElement {...props}></ButtonElement>;
};
