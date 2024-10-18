import { Text } from "@getp/common/components/typography/Text";

import * as Styles from "./index.style";

export interface ApplyPeopleListProps {
    width: SizeProp;
    height: SizeProp;
    children?: React.ReactNode;
}

export const ApplyPeopleList = ({ width, height, children }: ApplyPeopleListProps) => {
    return (
        <Styles.ListWrapper width={width} height={height}>
            <Text size="m" weight="bold" color="#676F7C">
                지원한 피플 리스트
            </Text>
            <Styles.ListContainer>{children}</Styles.ListContainer>
        </Styles.ListWrapper>
    );
};
