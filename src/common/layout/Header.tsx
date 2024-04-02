import { Link } from "react-router-dom";

import { navItems } from "@/constants/navItems";

import { Text } from "../typography/Text";
import { IHeaderWrapper, HeaderWrapper, HeaderContainer } from "./Header.style";
import logo from "/logo.svg";

export interface IHeader extends IHeaderWrapper {
    containerGap: string;
}

export const Header: React.FC<IHeader> = ({ height, padding, gap, containerGap }) => {
    return (
        <>
            <HeaderWrapper height={height} padding={padding} gap={gap}>
                <HeaderContainer gap={containerGap}>
                    <img src={logo} alt="logo" />
                    {navItems.map((item) => (
                        <Link to={item.to} key={item.key}>
                            <Text size="s" color={item.key === 3 ? "point" : "primary"} weight="bold">
                                {item.text}
                            </Text>
                        </Link>
                    ))}
                </HeaderContainer>
                <HeaderContainer gap={containerGap}>
                    <Link to="auth/signin">
                        <Text size="s" color="primary" weight="bold">
                            로그인
                        </Text>
                    </Link>

                    <Link to="auth/signup">
                        <Text size="s" color="point" weight="bold">
                            회원가입
                        </Text>
                    </Link>
                </HeaderContainer>
            </HeaderWrapper>
        </>
    );
};
