import { ProjectInfo } from "./ProjectInfo";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ProjectInfo",
    component: ProjectInfo,
} satisfies Meta<typeof ProjectInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        totalDays: 10,
        remainedDays: 5,
        title: "title",
        hashtags: ["#HASHTAG1", "#HASHTAG2"],
        recruitmentCount: 5,
        applicantsCount: 5,
        applicationDuration: {
            startDate: "2024-01-01",
            endDate: "2024-01-03",
        },
    },
};
