import { NavAside } from "../navigation/NavAside";
import { NavBar } from "../navigation/NavBar";

export const Header: React.FC = () => {
    return (
        <>
            <NavBar />
            <NavAside />
        </>
    );
};
