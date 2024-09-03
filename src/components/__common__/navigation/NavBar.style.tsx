import { mobile } from "@/styles/breakpoint";
import { nav_height } from "@/styles/variables";
import { Z_NAVBAR } from "@/styles/zindex";

import styled from "@emotion/styled";

export const NavBarWrapper = styled.nav`
    position: fixed;
    z-index: ${Z_NAVBAR};

    width: 100%;
    height: ${nav_height};

    padding: 0px 100px;

    background-color: #fff;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.06);

    ${mobile} {
        padding: 0px 30px;
    }
`;

export const NavBarContainer = styled.ul`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: min(100%, 1100px);
    height: 100%;

    margin: 0px auto;
`;

export const NavBarItems = styled.div`
    display: flex;
`;

export const NavBarHeadItem = styled.img`
    display: block;
    width: 75px;
    height: 100%;

    object-fit: contain;

    &:hover {
        cursor: pointer;
    }
`;
