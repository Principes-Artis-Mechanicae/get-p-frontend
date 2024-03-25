import styled from "@emotion/styled";

export interface IText {
    size?: "xs" | "s" | "m" | "l" | "xl" | string;
    color?: "primary" | "secondary" | "point" | "placeholder" | string;
    weight?: "light" | "normal" | "bold";
    children?: React.ReactNode;
}

export const Text = styled.span<IText>`
    font-weight: ${(props) => props.weight ?? "normal"};

    color: ${(props) => {
        switch (props.color) {
            case "primary":
                return "#000";
            case "secondary":
                return "#676F7C";
            case "point":
                return "#476FF1";
            case "placeholder":
                return "#C4C7CC";
        }
    }};

    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
                return "12px";
            case "s":
                return "14px";
            case "m":
                return "16px";
            case "l":
                return "18px";
            case "xl":
                return "24px";
            case undefined:
                return "16px";
            default:
                return props.size;
        }
    }};
`;
