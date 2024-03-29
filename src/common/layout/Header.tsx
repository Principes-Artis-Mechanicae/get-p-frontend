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
                        <Text key={item.key} size="s" color={item.key === 3 ? "point" : "primary"} weight="bold">
                            {item.text}
                        </Text>
                    ))}
                </HeaderContainer>
                <HeaderContainer gap={containerGap}>
                    <Text size="s" color="primary" weight="bold">
                        로그인
                    </Text>
                    <Text size="s" color="point" weight="bold">
                        회원가입
                    </Text>
                </HeaderContainer>
            </HeaderWrapper>
        </>
    );
};
