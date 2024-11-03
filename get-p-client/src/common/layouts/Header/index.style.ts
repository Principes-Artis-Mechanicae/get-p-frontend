import styled from "@emotion/styled";

export interface IHeaderWrapper extends React.ComponentProps<"header"> {
    height: string;
    padding: string;
    gap: string;
}

export interface IHeaderContainer {
    gap: string;
}

export interface IHeaderItem {
    width: string;
    height: string;
}

export const HeaderWrapper = styled.header<IHeaderWrapper>`
    width: 100%;
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    gap: ${(props) => props.gap};

    display: inline-flex;
    justify-content: center;
    align-items: flex-start;

    background: #fff;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.06);
`;

export const HeaderContainer = styled.div<IHeaderContainer>`
    gap: ${(props) => props.gap};

    display: flex;
    align-items: flex-start;
`;
