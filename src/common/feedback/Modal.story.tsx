import { Button } from "../form/Button";
import { Text } from "../typography/Text";
import { Title } from "../typography/Title";
import { Modal } from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "feedback/Modal",
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const FailEmail: Story = {
//     args: {
//         padding: "2.5rem 1.5rem",
//         gap: "3rem",
//     },
// };

export const _Modal: Story = {
    args: {
        width: "200px",
        height: "200px",
    },
    render: (args) => {
        return (
            <Modal width={args.width} height={args.height}>
                <Title>이메일</Title>
                <Text size="m">asdfasdf</Text>
                <Button variant="primary" width="100%" height="40px">
                    이메일 전송
                </Button>
            </Modal>
        );
    },
};
