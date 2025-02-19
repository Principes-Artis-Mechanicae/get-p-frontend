import { ProjectTeamContainerProps } from ".";

import styled from "@emotion/styled";

export const ProjectTeamContainerWrapper = styled.div<ProjectTeamContainerProps>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
