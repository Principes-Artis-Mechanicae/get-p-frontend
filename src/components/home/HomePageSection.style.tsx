import { Link } from "react-router-dom";

import { Text } from "@/common/typography/Text";
import { Title } from "@/common/typography/Title";

import { HomePageSectionHeader, HomePageSectionWrapper } from "./HomePageSection";

export interface IHomePageSection {
    title: string;
    link: string;
    topBadge?: React.ReactNode;
    children: React.ReactNode;
}

export const HomePageSection: React.FC<IHomePageSection> = ({ title, link, topBadge, children }) => {
    return (
        <HomePageSectionWrapper>
            {topBadge}
            <HomePageSectionHeader>
                <Title>{title}</Title>

                <Link to={link}>
                    <Text size="s" color="#676F7C">
                        {"더보기 >"}
                    </Text>
                </Link>
            </HomePageSectionHeader>

            {children}
        </HomePageSectionWrapper>
    );
};
