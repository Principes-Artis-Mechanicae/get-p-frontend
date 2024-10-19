import { Outlet } from "react-router-dom";
import { Main, PageWrapper } from "./RootLayout.style";
import { SideBar } from "../components/navigation/SideBar";

export const RootLayout = () => {
    return (
        <Main>
            <SideBar />
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </Main>
    );
};
