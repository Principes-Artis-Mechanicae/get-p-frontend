import { SearchBar } from "principes-getp";

import { Text } from "@/common/components/typography/Text";
import { useToggle } from "@/common/hooks/useToggle";

import { ISortOption } from "@/pages/project/ProjectListPage/ProjectListPage";

import * as Styles from "./index.style";

export interface PeopleSearchBarProps {
    width: SizeProp;
    height: SizeProp;

    options?: ISortOption[];
    order?: ISortOption;
    onSortChange?: (order: ISortOption) => void;
    headerText?: string;
}

export const PeopleSearchBar = ({ width, height, options, order, onSortChange, headerText }: PeopleSearchBarProps) => {
    const { handleClick } = useToggle();

    return (
        <Styles.Wrapper width={width} height={height}>
            <Styles.Header>
                <Text size="m" color="primary" weight="bold">
                    {headerText || "어떤 피플을 찾으시나요?"}
                </Text>
            </Styles.Header>

            <SearchBar width={width} placeholder="검색어를 입력하세요" />

            <Styles.OptionWrapper>
                <Styles.CheckBox onClick={handleClick} />

                <Styles.OptionContainer>
                    {options?.map((option) => (
                        <Styles.OptionItem
                            key={option.key}
                            onClick={() => onSortChange && onSortChange(option)}
                            $selected={option.key === "default"}
                        >
                            <Text size="s" color={option.key === order?.key ? "point" : "primary"} weight="bold">
                                {option.title}
                            </Text>
                        </Styles.OptionItem>
                    ))}
                </Styles.OptionContainer>
            </Styles.OptionWrapper>
        </Styles.Wrapper>
    );
};
