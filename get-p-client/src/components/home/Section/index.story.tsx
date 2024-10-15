import { HomePageSection } from "@/components/home/Section";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Home/HomePageSection",
    component: HomePageSection,
} satisfies Meta<typeof HomePageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "새로 가입한 신인 피플",
    },
};
