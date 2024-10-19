import { Link } from "react-router-dom";

import { Text } from "get-p-design";
import { Title } from "get-p-design";

import * as Styles from "./index.style";

export interface HomePageSectionProps {
    title: string;
    link?: string;
    topBadge?: React.ReactNode;
    children?: React.ReactNode;
}

export const HomePageSection = ({ title, link, topBadge, children }: HomePageSectionProps) => {
    return (
        <Styles.Wrapper>
            {topBadge}
            <Styles.Header>
                <Title>{title}</Title>

                <Link to={link ?? ""}>
                    <Text size="s" color="#676F7C">
                        {"더보기 >"}
                    </Text>
                </Link>
            </Styles.Header>

            {children}
        </Styles.Wrapper>
    );
};
