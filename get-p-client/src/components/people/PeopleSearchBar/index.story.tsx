import { PeopleSearchBar } from "@getp/components/people/PeopleSearchBar";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/PEOPLE/PeopleSearchBar",
    component: PeopleSearchBar,
} satisfies Meta<typeof PeopleSearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "600px",
        height: "100px",
    },
};
