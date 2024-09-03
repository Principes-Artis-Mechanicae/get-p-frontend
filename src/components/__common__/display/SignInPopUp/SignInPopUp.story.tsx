import { SignInPopUp } from "./SignInPopUp";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/LogInPopUp",
    component: SignInPopUp,
} satisfies Meta<typeof SignInPopUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
