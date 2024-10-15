import { Text } from "@/common/components/typography/Text";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "common/Typography/Text",
    component: Text,

    argTypes: {
        size: {
            options: ["xl", "l", "m", "s", "xs"],
            control: "radio",
        },
        weight: {
            options: ["bolder", "bold", "normal", "lighter"],
            control: "radio",
        },
        color: { control: "color" },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => {
        return (
            <Text size={args.size} color={args.color} weight={args.weight}>
                <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                <br />
                <span>가나다라마바사아자차카타파하</span>
            </Text>
        );
    },
};
