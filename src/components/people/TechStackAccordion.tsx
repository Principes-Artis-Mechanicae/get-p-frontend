import { useCallback, useEffect, useRef } from "react";

import { useAccordion } from "@/hooks/useAccordion";
import { useTechStack } from "@/hooks/useTechStack";

import chevronIcon from "@/assets/people/chevron.svg";

import {
    AccordionItemText,
    Chevron,
    TechStackAccordionButton,
    TechStackAccordionContainer,
    TechStackAccordionWrapper,
    TechStackAccordionItem,
} from "./TechStackAccordion.style";

export interface ITechStackAccordionGroup {
    groupId: number;
    groupName: string;
    groupItems: string[];

    width: string;
}

export const TechStackAccordion: React.FC<ITechStackAccordionGroup> = ({ width, groupId, groupName, groupItems }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const iconRef = useRef<HTMLImageElement>(null);

    const { state: techStackState, dispatch: techStackDispatch } = useTechStack();
    const { state: accordionState, dispatch: accordionDispatch } = useAccordion();

    const handleClick = useCallback(() => {
        accordionDispatch({
            type: "TOGGLE_BY_GROUP_ID",
            payload: groupId,
        });
    }, [accordionDispatch, groupId]);

    const handleItemClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            techStackDispatch({
                type: "TOGGLE_TECH_STACK",
                payload: {
                    value: e.currentTarget.innerText,
                },
            });
        },
        [techStackDispatch],
    );

    useEffect(() => {
        const group = accordionState.groups.find((group) => group.id === groupId);

        if (containerRef.current && buttonRef.current && iconRef.current) {
            if (group?.isOpened === true) {
                containerRef.current.style.maxHeight = `${groupItems.length * 56}px`;
                buttonRef.current.style.backgroundColor = `#F8F6F8`;
                iconRef.current.style.transform = `rotate(180deg)`;
            } else {
                containerRef.current.style.maxHeight = `0px`;
                buttonRef.current.style.backgroundColor = `#fff`;
                iconRef.current.style.transform = `rotate(0deg)`;
            }
        }
    }, [groupId, groupItems.length, accordionState.groups]);

    return (
        <TechStackAccordionWrapper width={width}>
            <TechStackAccordionButton ref={buttonRef} onClick={handleClick}>
                <AccordionItemText>{groupName}</AccordionItemText>
                <Chevron ref={iconRef} src={chevronIcon}></Chevron>
            </TechStackAccordionButton>

            <TechStackAccordionContainer ref={containerRef}>
                {groupItems
                    .filter((item) => item !== "")
                    .map((item) => {
                        return (
                            <TechStackAccordionItem
                                isSelected={
                                    techStackState.selected.findIndex((selectedItem) => selectedItem.value === item) !==
                                    -1
                                }
                                onClick={handleItemClick}
                            >
                                {item}
                            </TechStackAccordionItem>
                        );
                    })}
            </TechStackAccordionContainer>
        </TechStackAccordionWrapper>
    );
};
