import { ProjectInfo } from "./ProjectInfo";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ProjectInfo",
    component: ProjectInfo,
} satisfies Meta<typeof ProjectInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
