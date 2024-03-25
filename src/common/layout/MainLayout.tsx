import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const MainLayout = () => {
    return (
        <>
            <Header height="80px" padding="2rem 4rem" gap="25rem" containerGap="1.25rem"/>
            <Outlet />
            <Footer />
        </>
    );
};
