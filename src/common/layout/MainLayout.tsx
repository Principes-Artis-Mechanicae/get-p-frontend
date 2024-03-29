import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "@emotion/styled";

export const Main = styled.main`
    width: min(100%, 1440px);
    margin: 0px auto;
`;

export const MainLayout = () => {
    return (
        <>
            <Header height="80px" padding="2rem 4rem" gap="25rem" containerGap="1.25rem" />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};
