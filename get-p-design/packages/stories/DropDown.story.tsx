import { DropDownContextProvider } from "..";
import { DropDown, DropDownItem } from "..";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "DropDown",
    component: DropDown,
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: "440px",
        height: "54px",
        itemContainerHeight: "150px",
        placeholder: "카테고리를 선택해주세요",
    },
    render: (args) => {
        return (
            <DropDownContextProvider>
                <DropDown
                    width={args.width}
                    height={args.height}
                    itemContainerHeight={args.itemContainerHeight}
                    placeholder={args.placeholder}
                    onValueChange={(value) => {
                        console.log(value);
                    }}
                >
                    <DropDownItem index={1} value="프론트엔드 개발" />
                    <DropDownItem index={2} value="백엔드 개발" />
                    <DropDownItem index={3} value="앱 개발" />
                    <DropDownItem index={4} value="프로그램 개발" />
                </DropDown>
            </DropDownContextProvider>
        );
    },
};
