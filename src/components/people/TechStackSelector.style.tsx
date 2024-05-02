import styled from "@emotion/styled";

export interface ITechStackSelector {
    width: string;
    height: string;
}

export const TechStackSelectorWrapper = styled.div<ITechStackSelector>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export const TechStackSearchInput = styled.input`
    position: relative;
    box-sizing: border-box;

    display: block;
    width: 100%;
    height: 45px;

    margin: 10px 0px;
    border: 0;
    border-radius: 10px;
    padding-left: 60px;

    background-color: #f9fafa;
`;

export const SearchIcon = styled.img`
    z-index: 1;
    position: absolute;

    left: 20px;

    display: block;

    width: 30px;
    height: 30px;

    padding: 7.5px;
`;

export const TechStackSelectorContainer = styled.div`
    display: flex;

    width: 100%;
    height: 305px;

    border-radius: 10px;
    border: 1px solid #ebedef;
`;

export const TechStackSelectorGroupContainer = styled.div`
    width: 40%;
    height: 100%;

    overflow: scroll;
`;

export const TechStackGroup = styled.div`
    width: 100%;
    max-height: 56px;

    border: 1px solid #ebedef;

    overflow: hidden;
`;

export const TechStackItem = styled.div`
    display: flex;
    align-items: center;

    padding: 0px 20px;

    height: 56px;
`;

export const SelectedTechStacks = styled.div`
    box-sizing: border-box;

    width: 60%;
    height: 100%;

    padding: 20px;

    overflow: scroll;
`;
