import { ComponentProps } from "react";
import { NavLink } from "react-router-dom";

import { Text } from "@/common/typography/Text";

import { navLinkStyle } from "@/styles/utils";

import { NavBarItemWrapper } from "./NavBarItem.style";

export interface INavBarItem extends ComponentProps<"li"> {
    to: string;
    children: React.ReactNode;
}

export const NavBarItem: React.FC<INavBarItem> = ({ to, children, ...rest }) => {
    return (
        <NavBarItemWrapper {...rest}>
            <NavLink to={to} style={navLinkStyle}>
                <Text size="m" weight="bold">
                    {children}
                </Text>
            </NavLink>
        </NavBarItemWrapper>
    );
};
