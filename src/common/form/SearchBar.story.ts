import { SearchBar } from "./SearchBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "form/SearchBar",
    component: SearchBar,
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "500px",
        placeholder: "검색어를 입력해주세요",
    },
};
