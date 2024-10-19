import styled from "@emotion/styled";
import { DropDownProps } from ".";

export const DropDownWrapper = styled.div<Pick<DropDownProps, "width">>`
    position: relative;

    width: ${(props) => props.width};

    background-color: #fff;
`;

export const DropDownContainer = styled.div<{ height: string; isOpened: boolean }>`
    box-sizing: border-box;

    display: flex;
    align-items: center;

    width: 100%;
    height: ${(props) => props.height};

    padding: 0px 20px;

    border: 1px solid;
    border-radius: 12px;
    border-color: ${(props) => {
        if (props.isOpened) return "#476FF1";
        else return "#EBEDEF";
    }};

    img {
        margin-left: auto;
        transform: ${(props) => {
            if (props.isOpened) return "rotate(180deg)";
            else return "rotate(0deg)";
        }};
        transition: transform 0.3s ease-in-out;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const DropDownItemsContainer = styled.div<{ isOpened: boolean; maxHeight: string }>`
    position: absolute;
    top: calc(100% + 10px);

    width: 100%;
    overflow: scroll;

    border-radius: 12px;

    border: ${(props) => {
        if (props.isOpened) return "1px solid #ebedef";
        else return "none";
    }};

    max-height: ${(props) => {
        if (props.isOpened) return props.maxHeight;
        else return "0px";
    }};

    transition: max-height 0.3s ease-in-out;

    background-color: #fff;
`;

export const DropDownItemWrapper = styled.div<{ active: boolean }>`
    box-sizing: border-box;

    display: flex;
    align-items: center;

    width: 100%;
    height: 54px;

    padding: 0px 20px;

    &:hover {
        background-color: #fafafa;
        cursor: pointer;
    }

    font-weight: ${(props) => {
        if (props.active) return "bold";
        else return "normal";
    }};

    color: ${(props) => {
        if (props.active) return "#476FF1";
        else return "#021026";
    }};
`;
