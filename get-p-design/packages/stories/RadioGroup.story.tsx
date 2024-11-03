import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioItem } from "..";

const meta = {
    title: "Radio",
    component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Group: Story = {
    args: {
        width: "100%",
        height: "auto",
    },
    render: (args) => {
        return (
            <RadioGroup width={args.width} height={args.height}>
                <RadioItem name="options">옵션 1</RadioItem>
                <RadioItem name="options">옵션 2</RadioItem>
                <RadioItem name="options">옵션 3</RadioItem>
            </RadioGroup>
        );
    },
};
