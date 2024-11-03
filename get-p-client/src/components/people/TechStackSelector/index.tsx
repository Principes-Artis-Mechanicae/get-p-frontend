import { ChangeEvent, useCallback, useState } from "react";

import { ITechStack } from "@getp/apps/constants/techstack";

import { TechStackAccordion } from "@getp/components/people/TechStackAccordion";
import { TechStackBadge } from "@getp/components/people/TechStackBadge";

import { useAccordion } from "@getp/hooks/people/useAccordion";
import { useTechStack } from "@getp/hooks/people/useTechStack";

import searchIcon from "@getp/assets/people/search.svg";

import * as Styles from "./index.style";

export interface TechStackSelectorProps {
    width: SizeProp;
    height: SizeProp;

    techStack: ITechStack[];
}

export const TechStackSelector = ({ width, height, techStack }: TechStackSelectorProps) => {
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
        <Styles.Wrapper width={width}>
            <Styles.SearchIcon src={searchIcon} />
            <Styles.TechStackSearchInput placeholder="기술 검색" onChange={handleChange} />

            <Styles.Container height={height}>
                <Styles.GroupContainer>
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
                </Styles.GroupContainer>

                <Styles.SelectedTechStacks>
                    {state.selected.map((techStack) => {
                        return <TechStackBadge text={techStack.value} isInput={true} />;
                    })}
                </Styles.SelectedTechStacks>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
