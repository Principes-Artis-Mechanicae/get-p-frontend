import styled from "@emotion/styled";

export interface IPageButton {
    active: boolean;
}

export const PaginationWrapper = styled.div`
    width: auto;
    height: 34px;

    display: flex;
    gap: 10px;
`;

export const PageButton = styled.button<IPageButton>`
    display: block;

    width: 34px;
    height: 34px;

    border: ${(props) => {
        if (props.active) return "2px solid #476FF1";
        else return "0px";
    }};

    border-radius: 5px;

    background-color: ${(props) => {
        if (props.active) return "#fff";
        else return "#F9FAFA";
    }};

    &:hover {
        cursor: pointer;
    }
`;
