import { ExtendedProjectCard } from "./ExtendedProjectCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ProjectCard",
    component: ExtendedProjectCard,
} satisfies Meta<typeof ExtendedProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DetailedProjectCard: Story = {
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
            "React를 이용해 간단한 캘린더를 제작해주세요. 스토리 보드 및 기획은 이미 완성되어 있는 상태이며, 개발자의 시안 수령 및 구현만이 남아 있습니다. 자세한 api명세와 데이터베이스 관리에 대해서는 논의가 더 필요합니다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 모든 국민은 보건에 관하여 국가의 보호를 받는다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.",
        status: "모집중",
    },
};
