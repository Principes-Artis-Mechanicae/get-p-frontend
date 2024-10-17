import { ProjectTeamContainerProps } from ".";

import styled from "@emotion/styled";

export const ProjectTeamContainerWrapper = styled.div<ProjectTeamContainerProps>`
    display: flex;
    flex-wrap: wrap;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
