import styled from "@emotion/styled";

export const ProjectTagContainer = styled.div`
    width: 100%;
    margin: 5px 0px;
`;

export const ProjectTag = styled.span`
    display: inline-flex;

    margin: 5px;
    padding: 10px;

    border-radius: 10px;

    font-weight: bold;
    color: #476ff1;
    background-color: #ecf0fe;

    &:hover {
        cursor: pointer;
    }
`;
