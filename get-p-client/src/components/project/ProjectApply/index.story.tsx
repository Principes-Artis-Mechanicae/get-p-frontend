import { ProjectApply } from "@getp/components/project/ProjectApply";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectApply",
    component: ProjectApply,
    argTypes: {
        isActive: {
            options: [true, false],
            control: "radio",
        },
    },
} satisfies Meta<typeof ProjectApply>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isActive: true,
    },
};
