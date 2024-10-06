import { PeopleSearch } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/PEOPLE/PeopleSearch",
    component: PeopleSearch,
} satisfies Meta<typeof PeopleSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "600px",
        height: "100px",
    },
};
