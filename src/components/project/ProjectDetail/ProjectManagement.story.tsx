import { ProjectManagement } from "./ProjectManagement";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ProjectManagement",
    component: ProjectManagement,
} satisfies Meta<typeof ProjectManagement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
