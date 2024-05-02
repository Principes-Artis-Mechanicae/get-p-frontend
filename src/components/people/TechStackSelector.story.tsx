import { techStack } from "@/constants/techstack";

import { TechStackSelector } from "./TechStackSelector";
import { TechStackProvider } from "@/contexts/TechStackContext";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "People/TechStackSelector",
    component: TechStackSelector,
} satisfies Meta<typeof TechStackSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "704px",
        height: "305px",
        techStack: techStack,
    },
    render: ({ techStack, width, height }) => {
        return (
            <TechStackProvider>
                <TechStackSelector techStack={techStack} width={width} height={height} />
            </TechStackProvider>
        );
    },
};
