import { Text } from "@/common/typography/Text";

import { MemberTypeCardImg, MemberTypeCardWrapper } from "./MemberTypeCard.style";

export interface IMemberTypeCard extends React.ComponentProps<"button"> {
    variant: "client" | "people";
    width: string;
    height: string;
    imgSrc: string;
    label: string;
}

export const MemberTypeCard: React.FC<IMemberTypeCard> = ({ variant, width, height, imgSrc, label, ...rest }) => {
    return (
        <MemberTypeCardWrapper variant={variant} width={width} height={height} {...rest}>
            <MemberTypeCardImg src={imgSrc} />
            <Text size="m" weight="bold">
                {label}
            </Text>
        </MemberTypeCardWrapper>
    );
};
