import { NavAside } from "@/common/components/navigations/NavAside";
import { NavBar } from "@/common/components/navigations/NavBar";

export const Header: React.FC = () => {
    return (
        <>
            <NavBar />
            <NavAside />
        </>
    );
};
