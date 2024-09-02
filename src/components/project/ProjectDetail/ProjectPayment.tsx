import { Text } from "@/components/__common__/typography/Text";

import { useProjectById } from "@/services/project/useProjectById";

import { ProjectPaymentWrapper } from "./ProjectPayment.style";

export const ProjectPayment: React.FC = () => {
    const { data: project } = useProjectById();

    return (
        <ProjectPaymentWrapper>
            <Text size="m" color="primary" weight="bold">
                프로젝트 성공 보수
            </Text>
            <Text size="m" color="point" weight="bold">
                {project?.payment}원
            </Text>
        </ProjectPaymentWrapper>
    );
};
