import { Button, Title } from "get-p-design";

import * as Styles from "./index.style";
import { menu } from "../../../constants/menu";
import { useNavigate } from "react-router-dom";

export function SideBar() {
    const navigate = useNavigate();

    return (
        <Styles.Container>
            <Title>GET-P DashBoard</Title>
            {menu.map((menuItem) => {
                return (
                    <Button width="100%" height="40px" variant="outline" onClick={() => navigate(menuItem.path)}>
                        {menuItem.label}
                    </Button>
                );
            })}
        </Styles.Container>
    );
}
