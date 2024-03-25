import { Modal } from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "feedback/Modal",
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FailEmail: Story = {
    args: {
        padding: "2.5rem 1.5rem",
        gap: "3rem",
    },
};
