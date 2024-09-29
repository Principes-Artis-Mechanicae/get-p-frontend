import { SearchBar } from "principes-getp";

import { ISortOption } from "@/pages/project/ProjectListPage/ProjectListPage";

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
    options?: ISortOption[];
    order?: ISortOption;
    onSortChange?: (order: ISortOption) => void;
}

export const PeopleSearch = ({ width, height, options, order, onSortChange }: IPeopleSearch) => {
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
                    {options?.map((option) => (
                        <PeopleSearchOptionItem
                            key={option.key}
                            onClick={() => onSortChange && onSortChange(option)}
                            $selected={option.key === "default"}
                        >
                            <Text size="s" color={option.key === order?.key ? "point" : "primary"} weight="bold">
                                {option.title}
                            </Text>
                        </PeopleSearchOptionItem>
                    ))}
                </PeopleSearchOptionContainer>
            </PeopleSearchOptionWrapper>
        </PeopleSearchWrapper>
    );
};
