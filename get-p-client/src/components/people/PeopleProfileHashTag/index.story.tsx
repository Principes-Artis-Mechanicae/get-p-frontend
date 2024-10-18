import { PeopleProfileHashTag } from ".";

import { HashTagProvider } from "@getp/common/contexts/HashTagContext";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/People/PeopleProfileHashTag",
    component: PeopleProfileHashTag,
} satisfies Meta<typeof PeopleProfileHashTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "268px",
        minHeight: "120px",
    },
    render: (args) => {
        return (
            <HashTagProvider>
                <PeopleProfileHashTag width={args.width} minHeight={args.minHeight} />
            </HashTagProvider>
        );
    },
};
