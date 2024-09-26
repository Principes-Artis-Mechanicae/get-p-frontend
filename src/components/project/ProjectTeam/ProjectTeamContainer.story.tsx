import { ProjectTeamContainer } from "./ProjectTeamContainer";
import { ProjectTeamItem } from "./ProjectTeamItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ProjectTeamContainer",
    component: ProjectTeamContainer,
} satisfies Meta<typeof ProjectTeamContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "100%",
        height: "170px",
    },
    render: (args) => {
        return (
            <ProjectTeamContainer width={args.width} height={args.height}>
                <ProjectTeamItem
                    id={1}
                    name={"방민혁"}
                    email={"qwer1234@gmail.com"}
                    isAccepted={false}
                ></ProjectTeamItem>
                <ProjectTeamItem
                    id={2}
                    name={"방민혁"}
                    email={"qwer1234@gmail.com"}
                    isAccepted={false}
                ></ProjectTeamItem>
                <ProjectTeamItem
                    id={3}
                    name={"방민혁"}
                    email={"qwer1234@gmail.com"}
                    isAccepted={true}
                ></ProjectTeamItem>
                <ProjectTeamItem
                    id={4}
                    name={"방민혁"}
                    email={"qwer1234@gmail.com"}
                    isAccepted={false}
                ></ProjectTeamItem>
            </ProjectTeamContainer>
        );
    },
};
