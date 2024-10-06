import { Modal } from "@/common/components/overlays/Modal";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "common/Overlays/Modal",
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "300px",
    },
    render: (args) => {
        return <Modal width={args.width}>children</Modal>;
    },
};
