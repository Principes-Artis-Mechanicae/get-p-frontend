import { vertical_center } from "../../styles/utils";

import { SearchBarProps } from ".";
import styled from "@emotion/styled";

export const SearchBarWrapper = styled.div<SearchBarProps>`
    position: relative;

    width: ${(props) => props.width};
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 46px;

    border: 0;
    border-radius: 10px;
    padding: 0px 20px;

    background-color: #f9fafa;
    &:focus {
        outline-color: #476ff1;
    }
`;

export const SearchIconContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    ${vertical_center}
    height: 100%;
`;

export const SearchIcon = styled.img`
    height: 30px;
    aspect-ratio: 1/1;

    margin: 0px 10px;
`;
