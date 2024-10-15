import { TechStackAccordion } from ".";

import { AccordionProvider } from "@/contexts/AccordionContext";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "components/People/TechStackAccordion",
    component: TechStackAccordion,
} satisfies Meta<typeof TechStackAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "300px",
        groupId: 1,
        groupName: "IT 프로그래밍",
        groupItems: ["JavaScript", "TypeScript", "Python", "PHP"],
    },
    render: ({ width, groupId, groupName, groupItems }) => {
        return (
            <AccordionProvider>
                <TechStackAccordion
                    width={width}
                    groupId={groupId}
                    groupName={groupName}
                    groupItems={groupItems}
                ></TechStackAccordion>
            </AccordionProvider>
        );
    },
};
