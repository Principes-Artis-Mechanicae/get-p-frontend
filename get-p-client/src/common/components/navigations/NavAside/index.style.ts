import { vertical_center } from "@getp/styles/utils";

import styled from "@emotion/styled";

export const BackDrop = styled.div`
    z-index: var(--z-nav-aside-backdrop);
    position: fixed;

    width: 100%;
    height: 100vh;

    backdrop-filter: blur(0px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    transition: backdrop-filter 0.5s ease-in-out;
`;

export const Wrapper = styled.aside`
    z-index: var(--z-nav-aside-wrapper);
    position: fixed;

    margin-left: auto;
    margin-right: 0px;

    width: 100%;
    height: calc(100vh - 80px);

    transform: translateX(300px);
    transition: transform 0.5s ease-in-out;
`;

export const Container = styled.div`
    width: 300px;
    height: 100vh;

    margin-left: auto;
    margin-right: 0px;

    padding-top: 80px;

    background-color: #fff;
`;

export const Item = styled.div`
    ${vertical_center}
    width: 100%;
    height: 50px;

    padding: 0px 40px;

    text-align: left;
    font-weight: bold;
`;
