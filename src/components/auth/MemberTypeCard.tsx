import { Text } from "../__common__/typography/Text";
import { MemberTypeCardImg, MemberTypeCardWrapper } from "./MemberTypeCard.style";

export interface IMemberTypeCard extends React.ComponentProps<"button"> {
    variant: "client" | "people";
    width: string;
    height: string;
    imgSrc: string;
    label: string;
    selected: boolean; // (임시) 선택된 스타일
}

export const MemberTypeCard: React.FC<IMemberTypeCard> = ({
    variant,
    width,
    height,
    imgSrc,
    label,
    selected = false,
    ...rest
}) => {
    return (
        <MemberTypeCardWrapper variant={variant} width={width} height={height} selected={selected} {...rest}>
            <MemberTypeCardImg src={imgSrc} />
            <Text size="m" weight="bold">
                {label}
            </Text>
        </MemberTypeCardWrapper>
    );
};
