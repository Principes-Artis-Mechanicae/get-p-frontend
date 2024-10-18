import { useCallback } from "react";

import { Paragraph } from "@getp/common/components/typography/Paragraph/Paragraph";

import { useTechStack } from "@getp/hooks/people/useTechStack";

import closeIcon from "@getp/assets/people/close.svg";

import * as Styles from "./index.style";

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
        <Styles.Wrapper>
            <Paragraph size="m" weight="bold">
                {text}
            </Paragraph>
            {isInput ? <Styles.CloseIcon src={closeIcon} onClick={handleBadgeClick} /> : null}
        </Styles.Wrapper>
    );
};
