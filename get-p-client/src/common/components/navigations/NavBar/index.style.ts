import { mobile } from "@getp/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.nav`
    position: fixed;
    z-index: var(--z-nav-bar);

    width: 100%;
    height: var(--nav-height);

    padding: 0px 100px;

    background-color: #fff;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.06);

    ${mobile} {
        padding: 0px 30px;
    }
`;

export const Container = styled.ul`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: min(100%, 1100px);
    height: 100%;

    margin: 0px auto;
`;

export const Items = styled.div`
    display: flex;
`;

export const HeadItem = styled.img`
    display: block;
    width: 75px;
    height: 100%;

    object-fit: contain;

    &:hover {
        cursor: pointer;
    }
`;
