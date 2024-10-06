import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";

export const ProjectManagementWrapper = styled.div<{ additionalStyles?: SerializedStyles }>`
    width: max(100%, 200px);

    display: flex;
    flex-direction: column;
    gap: 10px;

    ${(props) => props.additionalStyles};

    padding: 0px 20px;
`;

export const ProjectManagementContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProjectManagementItem = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;
