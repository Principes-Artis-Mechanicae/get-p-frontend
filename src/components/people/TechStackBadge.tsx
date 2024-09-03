import { useCallback } from "react";

import { useTechStack } from "@/hooks/useTechStack";

import closeIcon from "@/assets/people/close.svg";

import { Paragraph } from "../__common__/typography/Paragraph";
import { TechStackBadgeCloseIcon, TechStackBadgeWrapper } from "./TechStackBadge.style";

export interface ITechStackBadge {
    text: string;
    isInput: boolean;
}

export const TechStackBadge: React.FC<ITechStackBadge> = ({ text, isInput }) => {
    const { dispatch } = useTechStack();

    const handleBadgeClick = useCallback(() => {
        dispatch({
            type: "REMOVE_TECH_STACK",
            payload: {
                value: text,
            },
        });
    }, [dispatch, text]);

    return (
        <TechStackBadgeWrapper>
            <Paragraph size="m" weight="bold">
                {text}
            </Paragraph>
            {isInput ? <TechStackBadgeCloseIcon src={closeIcon} onClick={handleBadgeClick} /> : null}
        </TechStackBadgeWrapper>
    );
};
