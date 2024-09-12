import { Text } from "@/components/__common__/typography/Text";

import { ApplyPeopleListContainer, ApplyPeopleListWrapper } from "./ApplyPeopleList.style";

export interface ApplyPeopleListProps {
    width: string;
    height: string;
    children?: React.ReactNode;
}

export const ApplyPeopleList = ({ width, height, children }: ApplyPeopleListProps) => {
    return (
        <ApplyPeopleListWrapper width={width} height={height}>
            <Text size="m" weight="bold" color="#676F7C">
                지원한 피플 리스트
            </Text>
            <ApplyPeopleListContainer>{children}</ApplyPeopleListContainer>
        </ApplyPeopleListWrapper>
    );
};
