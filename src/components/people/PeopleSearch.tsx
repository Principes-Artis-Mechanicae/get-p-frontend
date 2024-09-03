import { SearchBar } from "principes-getp";

import { useToggle } from "@/hooks/useToggle";

import { Text } from "../__common__/typography/Text";
import {
    PeopleSearchCheckBox,
    PeopleSearchHeader,
    PeopleSearchOptionContainer,
    PeopleSearchOptionItem,
    PeopleSearchOptionWrapper,
    PeopleSearchWrapper,
    TotalProjectIcon,
} from "./PeopleSearch.style";

export interface IPeopleSearch {
    width: string;
    height: string;
}

export const PeopleSearch: React.FC<IPeopleSearch> = ({ width, height }) => {
    const { toggle, handleClick } = useToggle();

    return (
        <PeopleSearchWrapper width={width} height={height}>
            <PeopleSearchHeader>
                <Text size="m" color="primary" weight="bold">
                    어떤 피플을 찾으시나요?
                </Text>
            </PeopleSearchHeader>
            <SearchBar width={width} placeholder="검색어를 입력하세요" />
            <PeopleSearchOptionWrapper>
                <PeopleSearchCheckBox onClick={handleClick}>
                    <TotalProjectIcon checked={toggle} />
                    <Text size="s" color="primary" weight="bold">
                        전체 프로젝트 보기
                    </Text>
                </PeopleSearchCheckBox>

                <PeopleSearchOptionContainer>
                    <PeopleSearchOptionItem>
                        <Text size="s" color="point" weight="bold">
                            기본 정렬
                        </Text>
                    </PeopleSearchOptionItem>
                    <PeopleSearchOptionItem>
                        <Text size="s" color="primary" weight="bold">
                            최신 등록 순
                        </Text>
                    </PeopleSearchOptionItem>
                    <PeopleSearchOptionItem>
                        <Text size="s" color="primary" weight="bold">
                            마감 임박 순
                        </Text>
                    </PeopleSearchOptionItem>
                    <PeopleSearchOptionItem>
                        <Text size="s" color="primary" weight="bold">
                            성공 보수 순
                        </Text>
                    </PeopleSearchOptionItem>
                    <PeopleSearchOptionItem>
                        <Text size="s" color="primary" weight="bold">
                            관심 순
                        </Text>
                    </PeopleSearchOptionItem>
                </PeopleSearchOptionContainer>
            </PeopleSearchOptionWrapper>
        </PeopleSearchWrapper>
    );
};
