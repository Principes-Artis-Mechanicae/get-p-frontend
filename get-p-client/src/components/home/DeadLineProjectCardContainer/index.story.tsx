import { DeadLineProjectCard } from "@/components/home/DeadLineProjectCard";
import { DeadLineProjectCardContainer } from "@/components/home/DeadLineProjectCardContainer";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Home/DeadLineProjectCardContainer",
    component: DeadLineProjectCardContainer,
} satisfies Meta<typeof DeadLineProjectCardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: () => {
        return (
            <DeadLineProjectCardContainer>
                {Array.from({ length: 6 }).map((_, index) => {
                    return (
                        <DeadLineProjectCard
                            projectId={index}
                            deadline={10}
                            title={"사업계획서 Word 작업"}
                            hashtags={["#설계", "#기획", "#서류작업"]}
                            payment={1000000}
                            likes={13}
                            expectedDuration={0}
                            meetingType={"온라인"}
                        />
                    );
                })}
            </DeadLineProjectCardContainer>
        );
    },
};
