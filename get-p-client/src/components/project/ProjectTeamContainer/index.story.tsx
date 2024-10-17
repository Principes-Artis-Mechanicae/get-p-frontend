import { ProjectTeamContainer } from ".";

import { ProjectTeamItem } from "../ProjectTeamItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/Project/ProjectTeamContainer",
    component: ProjectTeamContainer,
} satisfies Meta<typeof ProjectTeamContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const teamMembers = new Array(4).fill(null).map((_, index) => ({
    id: index + 1,
    name: "홍길동",
    email: "example@domain.com",
    isAccepted: !!(index % 2),
}));

export const Default: Story = {
    args: {
        width: "100%",
        height: "170px",
    },
    render: (args) => {
        return (
            <ProjectTeamContainer width={args.width} height={args.height}>
                {teamMembers.map((member) => {
                    return (
                        <ProjectTeamItem
                            id={member.id}
                            name={member.name}
                            email={member.email}
                            isAccepted={member.isAccepted}
                        ></ProjectTeamItem>
                    );
                })}
            </ProjectTeamContainer>
        );
    },
};
