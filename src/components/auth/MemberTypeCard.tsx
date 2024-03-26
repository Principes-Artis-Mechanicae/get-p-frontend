import { Text } from "@/common/typography/Text";

import { MemberTypeCardImg, MemberTypeCardWrapper } from "./MemberTypeCard.style";

export interface IMemberTypeCard {
    variant: "client" | "people";
    width: string;
    height: string;
    imgSrc: string;
    label: string;
}

export const MemberTypeCard: React.FC<IMemberTypeCard> = ({ variant, width, height, imgSrc, label }) => {
    return (
        <MemberTypeCardWrapper variant={variant} width={width} height={height}>
            <MemberTypeCardImg src={imgSrc} />
            <Text size="m" weight="bold">
                {label}
            </Text>
        </MemberTypeCardWrapper>
    );
};
