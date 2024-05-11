import styled from "@emotion/styled";

export interface ITechStackAccordionWrapper {
    width: string;
}

export interface ITechStackAccordionItem {
    isSelected: boolean;
}

export const TechStackAccordionButton = styled.button`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 56px;

    border: 1px solid #ebedef;
    padding-left: 20px;

    text-align: left;

    background-color: #fff;

    &:hover {
        cursor: pointer;
    }
`;

export const TechStackAccordionWrapper = styled.div<ITechStackAccordionWrapper>`
    width: ${(props) => props.width};

    overflow: hidden;
`;

export const TechStackAccordionContainer = styled.div`
    width: 100%;
    max-height: 0px;

    transition: max-height 0.5s ease-in-out;

    background-color: #fff;
`;

export const TechStackAccordionItem = styled.div<ITechStackAccordionItem>`
    display: flex;
    align-items: center;

    width: 100%;
    height: 56px;

    padding: 0px 30px;

    font-weight: ${(props) => {
        if (props.isSelected) return "bold";
        else return "normal";
    }};

    color: ${(props) => {
        if (props.isSelected) return "#476FF1";
        else return "#000";
    }};

    &:hover {
        cursor: pointer;
    }
`;

export const Chevron = styled.img`
    display: block;

    width: 15px;
    height: 100%;

    margin: 0px 20px;
`;

export const AccordionItemText = styled.p`
    display: flex;
    align-items: center;

    height: 100%;

    margin: 0;

    font-size: 16px;

    transition: all 0.5s ease-in-out;
`;
