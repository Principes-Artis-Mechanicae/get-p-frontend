import { PeopleSearch } from "./PeopleSearch";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "PEOPLE/PeopleSearch",
    component: PeopleSearch,
} satisfies Meta<typeof PeopleSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PeopleSearchBar: Story = {
    args: {
        width: "1068px",
        height: "110px",
    },
};
