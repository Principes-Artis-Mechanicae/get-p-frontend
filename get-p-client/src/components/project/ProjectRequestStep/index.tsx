import * as Styles from "./index.style";

export interface ProjectRequestStepProps {
    width: SizeProp;
    current: number;
    total: number;
}

export const ProjectRequestStep = ({ width, current, total }: ProjectRequestStepProps) => {
    return (
        <Styles.Wrapper width={width}>
            {Array.from({ length: total }, (_, index) => index + 1).map((step) => {
                return (
                    <Styles.Item key={step} active={current >= step}>
                        STEP {step}
                    </Styles.Item>
                );
            })}
        </Styles.Wrapper>
    );
};
