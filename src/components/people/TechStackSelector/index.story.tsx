import { TechStackSelector } from "@/components/people/TechStackSelector";

import { techStack } from "@/constants/techstack";

import { AccordionProvider } from "@/contexts/AccordionContext";
import { TechStackProvider } from "@/contexts/TechStackContext";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/People/TechStackSelector",
    component: TechStackSelector,
} satisfies Meta<typeof TechStackSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "100%",
        height: "305px",
        techStack: techStack,
    },
    render: ({ techStack, width, height }) => {
        return (
            <TechStackProvider>
                <AccordionProvider>
                    <TechStackSelector techStack={techStack} width={width} height={height} />
                </AccordionProvider>
            </TechStackProvider>
        );
    },
};
