import { ProjectInfo } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectInfo",
    component: ProjectInfo,
} satisfies Meta<typeof ProjectInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        totalDays: 10,
        remainedDays: 5,
        title: "프로젝트 제목",
        hashtags: ["#HASHTAG1", "#HASHTAG2"],
        recruitmentCount: 5,
        applicantsCount: 5,
        applicationDuration: {
            startDate: "2024-01-01",
            endDate: "2024-01-03",
        },
    },
};
