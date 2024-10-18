import { ProjectRequestStep } from "@getp/components/project/ProjectRequestStep";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectRequestStep",
    component: ProjectRequestStep,
} satisfies Meta<typeof ProjectRequestStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "300px",
        current: 1,
        total: 3,
    },
};
