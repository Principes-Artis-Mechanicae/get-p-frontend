import { Pagination } from "../common/navigation/Pagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Navigation/Pagination",
    component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        totalPages: 22,
        pageGroupSize: 5,
    },
};
