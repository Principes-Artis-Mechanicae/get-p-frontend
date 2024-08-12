import { vertical_center } from "@/styles/utils";
import { Z_NAV_ASIDE_BACKDROP, Z_NAV_ASIDE_WRAPPER } from "@/styles/zindex";

import styled from "@emotion/styled";

export const NavAsideBackDrop = styled.div`
    z-index: ${Z_NAV_ASIDE_BACKDROP};
    position: fixed;

    width: 100%;
    height: 100vh;

    backdrop-filter: blur(0px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    transition: backdrop-filter 0.5s ease-in-out;
`;

export const NavAsideWrapper = styled.aside`
    z-index: ${Z_NAV_ASIDE_WRAPPER};
    position: fixed;

    margin-left: auto;
    margin-right: 0px;

    width: 100%;
    height: calc(100vh - 80px);

    transform: translateX(300px);
    transition: transform 0.5s ease-in-out;
`;

export const NavAsideContainer = styled.div`
    width: 300px;
    height: 100vh;

    margin-left: auto;
    margin-right: 0px;

    padding-top: 80px;

    background-color: #fff;
`;

export const NavAsdieItem = styled.div`
    ${vertical_center}
    width: 100%;
    height: 50px;

    padding: 0px 40px;

    text-align: left;
    font-weight: bold;
`;
