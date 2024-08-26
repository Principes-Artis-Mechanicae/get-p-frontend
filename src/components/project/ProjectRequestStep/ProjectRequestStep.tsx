import { ProjectRequestStepItem, ProjectRequestStepWrapper } from "./ProjectRequestStep.style";

export interface ProjectRequestStepProps {
    width: string;
    current: number;
    total: number;
}

export const ProjectRequestStep = ({ width, current, total }: ProjectRequestStepProps) => {
    return (
        <ProjectRequestStepWrapper width={width}>
            {Array.from({ length: total }, (_, index) => index + 1).map((step) => {
                return (
                    <ProjectRequestStepItem key={step} active={current >= step}>
                        STEP {step}
                    </ProjectRequestStepItem>
                );
            })}
        </ProjectRequestStepWrapper>
    );
};
