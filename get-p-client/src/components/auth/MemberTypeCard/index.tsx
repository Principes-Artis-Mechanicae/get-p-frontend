import { Text } from "@getp/common/components/typography/Text";

import * as Styles from "./index.style";

export interface MemberTypeCardProps extends React.ComponentProps<"button"> {
    variant: "client" | "people";
    width: SizeProp;
    height: SizeProp;
    selected: boolean;
}

export const MemberTypeCard = ({ variant, width, height, selected = false, ...rest }: MemberTypeCardProps) => {
    return (
        <Styles.Wrapper variant={variant} width={width} height={height} selected={selected} {...rest}>
            <Text size="m" weight="bold" color={variant === "people" ? "#676F7C" : "#476FF1"}>
                {variant === "people" ? "피플 회원" : "의뢰자 회원"}
            </Text>
        </Styles.Wrapper>
    );
};
