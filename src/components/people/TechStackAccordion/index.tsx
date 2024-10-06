import { useCallback, useEffect, useRef } from "react";

import { useAccordion } from "@/hooks/useAccordion";
import { useTechStack } from "@/hooks/useTechStack";

import chevronIcon from "@/assets/people/chevron.svg";

import * as Styles from "./index.style";

export interface TechStackAccordionGroupProps {
    groupId: number;
    groupName: string;
    groupItems: string[];

    width: SizeProp;
}

export const TechStackAccordion = ({ width, groupId, groupName, groupItems }: TechStackAccordionGroupProps) => {
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
        <Styles.Wrapper width={width}>
            <Styles.Button ref={buttonRef} onClick={handleClick}>
                <Styles.AccordionItemText>{groupName}</Styles.AccordionItemText>
                <Styles.Chevron ref={iconRef} src={chevronIcon}></Styles.Chevron>
            </Styles.Button>

            <Styles.Container ref={containerRef}>
                {groupItems
                    .filter((item) => item !== "")
                    .map((item) => {
                        return (
                            <Styles.Item
                                isSelected={
                                    techStackState.selected.findIndex((selectedItem) => selectedItem.value === item) !==
                                    -1
                                }
                                onClick={handleItemClick}
                            >
                                {item}
                            </Styles.Item>
                        );
                    })}
            </Styles.Container>
        </Styles.Wrapper>
    );
};
