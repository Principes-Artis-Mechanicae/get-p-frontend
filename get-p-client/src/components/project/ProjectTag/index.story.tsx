import { ProjectTag } from "@getp/components/project/ProjectTag";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectTag",
    component: ProjectTag,
} satisfies Meta<typeof ProjectTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "태그",
    },
};
