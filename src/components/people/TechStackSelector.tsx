import { ChangeEvent, useCallback, useState } from "react";

import { useAccordion } from "@/hooks/useAccordion";
import { useTechStack } from "@/hooks/useTechStack";

import searchIcon from "@/assets/people/search.svg";

import { ITechStack } from "@/constants/techstack";

import { TechStackAccordion } from "./TechStackAccordion";
import { TechStackBadge } from "./TechStackBadge";
import {
    SearchIcon,
    SelectedTechStacks,
    TechStackSearchInput,
    TechStackSelectorContainer,
    TechStackSelectorGroupContainer,
    TechStackSelectorWrapper,
} from "./TechStackSelector.style";

export interface ITechStackSelector {
    techStack: ITechStack[];
    width: string;
    height: string;
}

export const TechStackSelector: React.FC<ITechStackSelector> = ({ width, height, techStack }) => {
    const [searchInput, setSearchInput] = useState<string>("");

    const { state } = useTechStack();
    const { dispatch: accordionDispatch } = useAccordion();

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value !== "") {
                accordionDispatch({
                    type: "OPEN_ALL",
                    payload: NaN,
                });
            } else {
                accordionDispatch({
                    type: "CLOSE_ALL",
                    payload: NaN,
                });
            }
            setSearchInput(e.target.value);
        },
        [accordionDispatch],
    );

    return (
        <TechStackSelectorWrapper width={width}>
            <SearchIcon src={searchIcon} />
            <TechStackSearchInput placeholder="기술 검색" onChange={handleChange} />

            <TechStackSelectorContainer height={height}>
                <TechStackSelectorGroupContainer>
                    {techStack
                        .map((stack) => {
                            return {
                                groupId: stack.groupId,
                                groupName: stack.groupName,
                                groupItems: stack.groupItems.map((item) => {
                                    if (item.includes(searchInput)) return item;
                                    return "";
                                }),
                            };
                        })
                        .map((stack) => {
                            return (
                                <TechStackAccordion
                                    width="100%"
                                    groupId={stack.groupId}
                                    groupName={stack.groupName}
                                    groupItems={stack.groupItems}
                                ></TechStackAccordion>
                            );
                        })}
                </TechStackSelectorGroupContainer>

                <SelectedTechStacks>
                    {state.selected.map((techStack) => {
                        return <TechStackBadge text={techStack.value} isInput={true} />;
                    })}
                </SelectedTechStacks>
            </TechStackSelectorContainer>
        </TechStackSelectorWrapper>
    );
};
