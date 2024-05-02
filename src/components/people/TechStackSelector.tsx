import { useEffect } from "react";

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
import { useTechStack } from "@/contexts/TechStackContext";

export interface ITechStackSelector {
    techStack: ITechStack[];
    width: string;
    height: string;
}

export const TechStackSelector: React.FC<ITechStackSelector> = ({ width, height, techStack }) => {
    const { state } = useTechStack();

    return (
        <TechStackSelectorWrapper width={width} height={height}>
            <SearchIcon src={searchIcon} />
            <TechStackSearchInput placeholder="기술 검색" />

            <TechStackSelectorContainer>
                <TechStackSelectorGroupContainer>
                    {techStack.map((stack) => {
                        return (
                            <TechStackAccordion
                                width="100%"
                                groupName={stack.groupName}
                                groupItems={stack.groupItems}
                            ></TechStackAccordion>
                        );
                    })}
                </TechStackSelectorGroupContainer>

                <SelectedTechStacks>
                    {state.selected.map((techStack) => {
                        return <TechStackBadge text={techStack.value} />;
                    })}
                </SelectedTechStacks>
            </TechStackSelectorContainer>
        </TechStackSelectorWrapper>
    );
};
