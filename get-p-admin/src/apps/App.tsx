import { Fragment, useState } from "react";
import styled from "@emotion/styled";

import { mockCoreWebVitalsData } from "../__mocks__/data";

import { Title } from "get-p-design";

import CoreWebVitals from "../components/CoreWebVitals";
import { Sidebar, SidebarContent } from "../components/SideBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Global } from "@emotion/react";
import { resetStyles, rootStyles } from "../styles/root";

export default function App() {
    return (
        <Fragment>
            <Global styles={[resetStyles, rootStyles]} />
            <RouterProvider router={router} />
        </Fragment>
    );
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #f1f5f9;
`;

const MainContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const DashboardContent = styled.div`
    flex: 1;
    padding: 1rem;
    overflow: auto;

    @media (min-width: 768px) {
        padding: 2rem;
    }
`;
