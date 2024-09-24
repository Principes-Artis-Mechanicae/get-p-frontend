import { SearchBar } from "principes-getp";

import { ISortOrder } from "@/pages/project/ProjectListPage";

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
    order: ISortOrder;
    onSortChange: (order: ISortOrder) => void;
}

export const PeopleSearch: React.FC<IPeopleSearch> = ({ width, height, order, onSortChange }) => {
    const { toggle, handleClick } = useToggle();

    const sortOptions: ISortOrder[] = ["default", "latest", "closing", "successFee", "like"];

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
                    {sortOptions.map((option) => (
                        <PeopleSearchOptionItem
                            key={option}
                            onClick={() => onSortChange(option)}
                            $selected={option === "default"}
                        >
                            <Text size="s" color={option === order ? "point" : "primary"} weight="bold">
                                {option === "default"
                                    ? "기본 정렬"
                                    : option === "latest"
                                      ? "최신 등록 순"
                                      : option === "closing"
                                        ? "마감 임박 순"
                                        : option === "successFee"
                                          ? "성공 보수 순"
                                          : "관심 순"}
                            </Text>
                        </PeopleSearchOptionItem>
                    ))}
                </PeopleSearchOptionContainer>
            </PeopleSearchOptionWrapper>
        </PeopleSearchWrapper>
    );
};
