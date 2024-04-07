import { place_center } from "@/styles/utils";

import styled from "@emotion/styled";

export interface IButton {
    variant: "primary" | "secondary" | "outline" | "disabled" | "side";

    width: string;
    height: string;
}

export const Button = styled.button<IButton>`
    ${place_center}

    width: ${(props) => props.width};
    height: ${(props) => props.height};

    border-radius: 12px;

    background-color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#476FF1";
            case "secondary":
                return "#ECF0FE";
            case "outline":
                return "#fff";
            case "disabled":
                return "#EBEDEF";
            case "side":
                return "#fff";
        }
    }};

    color: ${(props) => {
        switch (props.variant) {
            case "primary":
                return "#fff";
            case "secondary":
                return "#476FF1";
            case "outline":
                return "#476FF1";
            case "disabled":
                return "#C4C7CC";
            case "side":
                return "#021026";
        }
    }};

    border: ${(props) => {
        switch (props.variant) {
            case "outline":
                return "1px solid #476FF1";
            case "side":
                return "1px solid #EBEDEF";
            default:
                return "0";
        }
    }};

    &:hover {
        cursor: pointer;
    }
`;
