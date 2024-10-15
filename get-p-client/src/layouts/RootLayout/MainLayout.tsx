import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Toast } from "../../common/components/overlays/Toast";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styled from "@emotion/styled";

export const Main = styled.main`
    width: min(100%, 1440px);
    min-height: 100vh;

    margin: 0px auto;
    padding: 20px;
    padding-top: 80px;
`;

export const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

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
