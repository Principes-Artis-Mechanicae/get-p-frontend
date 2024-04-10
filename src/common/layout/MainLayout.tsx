import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

import { Footer } from "./Footer";
import { Header } from "./Header";
import styled from "@emotion/styled";

export const Main = styled.main`
    width: min(100%, 1440px);
    margin: 0px auto;
    padding: 20px;
    padding-top: 80px;
`;

export const MainLayout = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};
