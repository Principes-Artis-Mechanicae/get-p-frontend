import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "@emotion/styled";

export const Main = styled.main`
    width: min(100%, 1440px);
    margin: 0px auto;
    padding-top: 80px;
`;

export const MainLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};
