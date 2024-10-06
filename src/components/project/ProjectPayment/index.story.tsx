import { ProjectPayment } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectPayment",
    component: ProjectPayment,
} satisfies Meta<typeof ProjectPayment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        payment: 1000,
    },
};
