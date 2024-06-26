import { Outlet } from "react-router-dom";

import { Toast } from "../feedback/Toast";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "@emotion/styled";

export const Main = styled.main`
    width: min(100%, 1440px);
    min-height: 100vh;

    margin: 0px auto;
    padding: 20px;
    padding-top: 80px;
`;

export const MainLayout = () => {
    return (
        <>
            <Toast />

            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};
