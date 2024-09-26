import { ProjectTeamContainerWrapper } from "./ProjectTeamContainer.style";

export interface ProjectTeamContainerProps {
    width: string;
    height: string;

    children?: React.ReactNode;
}

export const ProjectTeamContainer = ({ width, height, children }: ProjectTeamContainerProps) => {
    return (
        <ProjectTeamContainerWrapper width={width} height={height}>
            {children}
        </ProjectTeamContainerWrapper>
    );
};
