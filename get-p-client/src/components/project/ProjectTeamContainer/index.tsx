import { ProjectTeamContainerWrapper } from "./index.style";

export interface ProjectTeamContainerProps {
    width: SizeProp;
    height: SizeProp;

    children?: React.ReactNode;
}

export const ProjectTeamContainer = ({ width, height, children }: ProjectTeamContainerProps) => {
    return (
        <ProjectTeamContainerWrapper width={width} height={height}>
            {children}
        </ProjectTeamContainerWrapper>
    );
};
