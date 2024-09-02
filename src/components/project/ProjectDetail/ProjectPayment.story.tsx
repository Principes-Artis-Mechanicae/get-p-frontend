import { ProjectPayment } from "./ProjectPayment";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ProjectPayment",
    component: ProjectPayment,
} satisfies Meta<typeof ProjectPayment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
