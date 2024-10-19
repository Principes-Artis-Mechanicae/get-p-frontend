import { ComponentProps } from "react";
import { NavLink } from "react-router-dom";

import { Text } from "get-p-design";

import { navLinkStyle } from "@getp/styles/utils";

import * as Styles from "./index.style";

export interface NavBarItemProps extends ComponentProps<"li"> {
    to: string;
    children: React.ReactNode;
}

export const NavBarItem = ({ to, children, ...rest }: NavBarItemProps) => {
    return (
        <Styles.Container {...rest}>
            <NavLink to={to} style={navLinkStyle}>
                <Text size="m" weight="bold">
                    {children}
                </Text>
            </NavLink>
        </Styles.Container>
    );
};
