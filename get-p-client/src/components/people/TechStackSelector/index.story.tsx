import { techStack } from "@getp/apps/constants/techstack";

import { AccordionProvider } from "@getp/common/contexts/AccordionContext";
import { TechStackProvider } from "@getp/common/contexts/TechStackContext";

import { TechStackSelector } from "@getp/components/people/TechStackSelector";

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
