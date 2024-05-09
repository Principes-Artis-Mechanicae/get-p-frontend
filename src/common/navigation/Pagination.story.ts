import { Pagination } from "./Pagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Navigation/Pagination",
    component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 3,
        pageBegin: 1,
        pageLength: 10,
    },
};
