import { NavAside } from "@getp/common/components/navigations/NavAside";
import { NavBar } from "@getp/common/components/navigations/NavBar";

export const Header: React.FC = () => {
    return (
        <>
            <NavBar />
            <NavAside />
        </>
    );
};
