import styled from "@emotion/styled";

export interface IText {
    size?: "xs" | "s" | "m" | "l" | "xl" | string;
    weight?: "light" | "normal" | "bold";
}

export const Text = styled.span<IText>`
    font-weight: ${(props) => props.weight ?? "normal"};

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
