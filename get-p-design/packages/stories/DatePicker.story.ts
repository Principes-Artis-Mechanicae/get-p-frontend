import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "..";

const meta = {
    title: "DatePicker",
    component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "440px",
        height: "54px",
    },
};
