import { LogInPopUp } from "./LogInPopUp";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/LogInPopUp",
    component: LogInPopUp,
} satisfies Meta<typeof LogInPopUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
