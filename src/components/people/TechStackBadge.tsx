import { useCallback } from "react";

import { Paragraph } from "@/common/typography/Paragraph";

import closeIcon from "@/assets/people/close.svg";

import { TechStackBadgeCloseIcon, TechStackBadgeWrapper } from "./TechStackBadge.style";
import { useTechStack } from "@/contexts/TechStackContext";

export interface ITechStackBadge {
    text: string;
}

export const TechStackBadge: React.FC<ITechStackBadge> = ({ text }) => {
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
            <TechStackBadgeCloseIcon src={closeIcon} onClick={handleBadgeClick} />
        </TechStackBadgeWrapper>
    );
};
