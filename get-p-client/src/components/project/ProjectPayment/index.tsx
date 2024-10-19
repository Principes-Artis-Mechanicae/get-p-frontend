import { Text } from "get-p-design";

import * as Styles from "./index.style";

export interface ProjectPaymentProps {
    payment: number;
}

export const ProjectPayment = ({ payment }: ProjectPaymentProps) => {
    return (
        <Styles.Wrapper>
            <Text size="m" color="primary" weight="bold">
                프로젝트 성공 보수
            </Text>
            <Text size="m" color="point" weight="bold">
                {payment.toLocaleString()} 원
            </Text>
        </Styles.Wrapper>
    );
};
