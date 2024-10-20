import { ProjectCard, ProjectCardSkeleton } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectCard",
    component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "간단한 캘린더 제작",
        payment: 500000,
        applicantsCount: 4,
        estimatedDays: 80,
        applicationDuration: {
            startDate: "2023-12-31",
            endDate: "2024-08-12",
        },
        hashtags: ["#개발", "#웹 개발", "#React"],
        description:
            "React를 이용해 간단한 캘린더를 제작해주세요. 스토리 보드 및 기획은 이미 완성되어 있는 상태이며, 개발자의 시안 수령 및 구현만이 남아 있습니다. 자세한 api명세와 데이터베이스 관리에 대해서는 논의가 더 필요합니다.",
        status: "PREPARING", // 올바른 상태
    },
};

export const PREPARING: Story = {
    args: {
        title: "간단한 캘린더 제작",
        payment: 500000,
        applicantsCount: 4,
        estimatedDays: 80,
        applicationDuration: {
            startDate: "2023-12-31",
            endDate: "2024-08-12",
        },
        hashtags: ["#개발", "#웹 개발", "#React"],
        description:
            "React를 이용해 간단한 캘린더를 제작해주세요. 스토리 보드 및 기획은 이미 완성되어 있는 상태이며, 개발자의 시안 수령 및 구현만이 남아 있습니다. 자세한 api명세와 데이터베이스 관리에 대해서는 논의가 더 필요합니다.",
        status: "PREPARING", // 올바른 상태
    },
};

export const APPLYING: Story = {
    args: {
        title: "간단한 캘린더 제작",
        payment: 500000,
        applicantsCount: 4,
        estimatedDays: 80,
        applicationDuration: {
            startDate: "2023-12-31",
            endDate: "2024-08-12",
        },
        hashtags: ["#개발", "#웹 개발", "#React"],
        description:
            "React를 이용해 간단한 캘린더를 제작해주세요. 스토리 보드 및 기획은 이미 완성되어 있는 상태이며, 개발자의 시안 수령 및 구현만이 남아 있습니다. 자세한 api명세와 데이터베이스 관리에 대해서는 논의가 더 필요합니다. ",
        status: "APPLYING",
    },
};

export const PROGRESSING: Story = {
    args: {
        title: "간단한 캘린더 제작",
        payment: 500000,
        applicantsCount: 4,
        estimatedDays: 80,
        applicationDuration: {
            startDate: "2023-12-31",
            endDate: "2024-08-12",
        },
        hashtags: ["#개발", "#웹 개발", "#React"],
        description:
            "React를 이용해 간단한 캘린더를 제작해주세요. 스토리 보드 및 기획은 이미 완성되어 있는 상태이며, 개발자의 시안 수령 및 구현만이 남아 있습니다. 자세한 api명세와 데이터베이스 관리에 대해서는 논의가 더 필요합니다. ",
        status: "PROGRESSING",
    },
};

export const COMPLETED: Story = {
    args: {
        title: "간단한 캘린더 제작",
        payment: 500000,
        applicantsCount: 4,
        estimatedDays: 80,
        applicationDuration: {
            startDate: "2023-12-31",
            endDate: "2024-08-12",
        },
        hashtags: ["#개발", "#웹 개발", "#React"],
        description:
            "React를 이용해 간단한 캘린더를 제작해주세요. 스토리 보드 및 기획은 이미 완성되어 있는 상태이며, 개발자의 시안 수령 및 구현만이 남아 있습니다. 자세한 api명세와 데이터베이스 관리에 대해서는 논의가 더 필요합니다. ",
        status: "COMPLETED",
    },
};

export const CANCELLED: Story = {
    args: {
        title: "간단한 캘린더 제작",
        payment: 500000,
        applicantsCount: 4,
        estimatedDays: 80,
        applicationDuration: {
            startDate: "2023-12-31",
            endDate: "2024-08-12",
        },
        hashtags: ["#개발", "#웹 개발", "#React"],
        description:
            "React를 이용해 간단한 캘린더를 제작해주세요. 스토리 보드 및 기획은 이미 완성되어 있는 상태이며, 개발자의 시안 수령 및 구현만이 남아 있습니다. 자세한 api명세와 데이터베이스 관리에 대해서는 논의가 더 필요합니다. ",
        status: "CANCELLED",
    },
};

export const Skeleton = {
    render: () => <ProjectCardSkeleton />,
};
