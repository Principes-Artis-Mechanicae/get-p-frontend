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
        totalItems: 125,
        itemCountPerPage: 5,
        pageCount: 10,
        currentPage: 1,
    },
};
