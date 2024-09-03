import { Text } from "@/components/__common__/typography/Text";

import { ProjectPaymentWrapper } from "./ProjectPayment.style";

export interface ProjectPaymentProps {
    payment: number;
}

export const ProjectPayment = ({ payment }: ProjectPaymentProps) => {
    return (
        <ProjectPaymentWrapper>
            <Text size="m" color="primary" weight="bold">
                프로젝트 성공 보수
            </Text>
            <Text size="m" color="point" weight="bold">
                {payment} 원
            </Text>
        </ProjectPaymentWrapper>
    );
};
