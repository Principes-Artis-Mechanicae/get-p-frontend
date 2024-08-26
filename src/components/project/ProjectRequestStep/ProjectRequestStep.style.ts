import styled from "@emotion/styled";

export const ProjectRequestStepWrapper = styled.div<{ width: string }>`
    width: ${(props) => props.width};

    display: flex;
    gap: 30px;

    margin: 25px 0px;
`;

export const ProjectRequestStepItem = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    font-size: 18px;
    font-weight: bold;

    color: ${(props) => (props.active ? "black" : "#bebebe")};

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;

        margin: 10px 0px;

        background-color: ${(props) => (props.active ? "black" : "#bebebe")};
    }
`;
