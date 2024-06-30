import { Header } from "./Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "layout/Header",
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Wrapper: Story = {
    args: {
        height: "80px",
        padding: "20px",
        gap: "25rem",
        containerGap: "1.25rem",
    },
};
