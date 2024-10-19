import { ComponentProps } from "react";

import searchIcon from "../../assets/search.svg";

import { SearchInput, SearchBarWrapper, SearchIcon, SearchIconContainer } from "./index.style";

export interface SearchBarProps extends ComponentProps<"input"> {
    width: string;
}

export const SearchBar = ({ width, ...props }: SearchBarProps) => {
    return (
        <SearchBarWrapper width={width}>
            <SearchInput type="text" {...props} />
            <SearchIconContainer>
                <SearchIcon src={searchIcon} />
            </SearchIconContainer>
        </SearchBarWrapper>
    );
};
