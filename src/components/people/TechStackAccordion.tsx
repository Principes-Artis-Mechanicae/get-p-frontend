import { useCallback, useEffect, useRef, useState } from "react";

import chevronIcon from "@/assets/people/chevron.svg";

import {
    AccordionItemText,
    Chevron,
    TechStackAccordionButton,
    TechStackAccordionContainer,
    TechStackAccordionWrapper,
    TechStackAccordionItem,
} from "./TechStackAccordion.style";
import { useTechStack } from "@/contexts/TechStackContext";

export interface ITechStackAccordionGroup {
    groupName: string;
    groupItems: string[];

    width: string;
}

export const TechStackAccordion: React.FC<ITechStackAccordionGroup> = ({ width, groupName, groupItems }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const iconRef = useRef<HTMLImageElement>(null);

    const [isOpened, setIsOpened] = useState<boolean>(false);

    const { state, dispatch } = useTechStack();

    const handleClick = useCallback(() => {
        setIsOpened((isOpened) => !isOpened);
    }, []);

    const handleItemClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            dispatch({
                type: "TOGGLE_TECH_STACK",
                payload: {
                    value: e.currentTarget.innerText,
                },
            });
        },
        [dispatch],
    );

    useEffect(() => {
        if (containerRef.current && buttonRef.current && iconRef.current) {
            if (isOpened) {
                containerRef.current.style.maxHeight = `${groupItems.length * 56}px`;
                buttonRef.current.style.backgroundColor = `#F8F6F8`;
                iconRef.current.style.transform = `rotate(180deg)`;
            } else {
                containerRef.current.style.maxHeight = `0px`;
                buttonRef.current.style.backgroundColor = `#fff`;
                iconRef.current.style.transform = `rotate(0deg)`;
            }
        }
    }, [isOpened, groupItems.length]);

    return (
        <TechStackAccordionWrapper width={width}>
            <TechStackAccordionButton ref={buttonRef} onClick={handleClick}>
                <AccordionItemText>{groupName}</AccordionItemText>
                <Chevron ref={iconRef} src={chevronIcon}></Chevron>
            </TechStackAccordionButton>

            <TechStackAccordionContainer ref={containerRef}>
                {groupItems.map((item) => {
                    return (
                        <TechStackAccordionItem
                            isSelected={state.selected.findIndex((selectedItem) => selectedItem.value === item) !== -1}
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
