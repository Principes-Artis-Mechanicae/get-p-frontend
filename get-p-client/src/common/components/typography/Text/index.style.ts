import { TextProps } from "@getp/common/components/typography/Text";

import styled from "@emotion/styled";

export const TextElement = styled.span<TextProps>`
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-smooth: antialiased;

    font-family: "SpoqaHanSansNeo", "Apple SD Gothic Neo", Sans-serif;
    font-optical-sizing: auto;

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
            case undefined:
                return "#000";
            default:
                return props.color;
        }
    }};

    font-weight: ${(props) => props.weight ?? "normal"};

    font-size: ${(props) => {
        switch (props.size) {
            case "xs":
            case "s":
            case "m":
            case "l":
            case "xl":
                return `var(--font-size-${props.size})`;
            case undefined:
                return "var(--font-size-m)";
            default:
                return props.size;
        }
    }};
`;
