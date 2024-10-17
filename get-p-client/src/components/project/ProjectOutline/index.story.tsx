import { ProjectOutline } from "@/components/project/ProjectOutline";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectOutline",
    component: ProjectOutline,
} satisfies Meta<typeof ProjectOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        totalDays: 10,
        remainedDays: 3,
        title: "프로젝트 명",
        hashtags: ["#풀스택", "#웹개발"],
        clientAddress: {
            detail: "경북대학교",
            street: "대구광역시 북구 경대로",
        },
        likesCount: 10,
        payment: 100000,
        description: "프로젝트에 대한 설명 프로젝트에 대한 설명 프로젝트에 대한 설명 프로젝트에 대한 설명",
        applicationDuration: {
            startDate: "2024-01-01",
            endDate: "2024-01-01",
        },
    },
};
