import { ApplyPeopleItem } from "./ApplyPeopleItem";
import { ApplyPeopleList } from "./ApplyPeopleList";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Project/ApplyPeopleList",
    component: ApplyPeopleList,
} satisfies Meta<typeof ApplyPeopleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const applyPeople = new Array(20).fill(undefined).map((_, index) => ({
    id: index + 1,
    name: "방민혁",
    school: "한양대학교 (서울)",
    education: "산업공학과 2학년",
}));

export const Default: Story = {
    args: {
        width: "340px",
        height: "448px",
    },
    render: (args) => {
        return (
            <ApplyPeopleList width={args.width} height={args.height}>
                {applyPeople.map((people) => {
                    return (
                        <ApplyPeopleItem
                            id={people.id}
                            name={people.name}
                            school={people.school}
                            education={people.education}
                        />
                    );
                })}
            </ApplyPeopleList>
        );
    },
};
