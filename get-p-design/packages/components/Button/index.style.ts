import styled from "@emotion/styled";
import { place_center } from "../../styles/utils";
import { ButtonProps } from ".";

export const ButtonElement = styled.button<ButtonProps>`
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
            case "link":
                return "transparent";
            case "rounded":
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
            case "link":
                return "#000";
            case "rounded":
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

    border-radius: ${(props) => {
        switch (props.variant) {
            case "rounded":
                return "50%";
        }
    }};

    box-shadow: ${(props) => {
        switch (props.variant) {
            case "rounded":
                return "0px 3px 20px 0px #00000029";
        }
    }};

    &:hover {
        cursor: pointer;
    }
`;
