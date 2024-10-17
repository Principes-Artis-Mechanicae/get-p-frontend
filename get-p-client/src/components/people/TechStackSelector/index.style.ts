import { mobile } from "@/styles/breakpoint";

import styled from "@emotion/styled";

export const Wrapper = styled.div<{ width: SizeProp }>`
    position: relative;
    width: ${(props) => props.width};
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

    left: 10px;
    top: 5px;

    display: block;

    width: 35px;
    height: 35px;

    padding: 7.5px;
`;

export const Container = styled.div<{ height: SizeProp }>`
    display: flex;

    width: 100%;
    height: ${(props) => props.height};

    border-radius: 10px;
    border: 1px solid #ebedef;

    ${mobile} {
        flex-direction: column;
        height: 600px;
    }
`;

export const GroupContainer = styled.div`
    width: 40%;
    height: 100%;

    overflow: scroll;

    ${mobile} {
        width: 100%;
        height: 55%;
    }
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

    ${mobile} {
        width: 100%;
        height: 45%;
    }
`;
