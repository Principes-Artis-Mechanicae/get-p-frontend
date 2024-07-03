import { TextArea } from "./TextArea";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Form/TextArea",
    component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: "700px",
        height: "220px",
        variant: "primary",
        children:
            "안녕하세요 의뢰자님 반갑습니다^^ \n경북대학교 경영학과 19학번 김수현 입니다. \n다양한 관련 작업을 진행해 왔으며, 많은 경험을 바탕으로 의뢰자님의 서류 가치를 업그레이드 시킬 수 있는 만족스러운 결과물로 보답드리도록 하겠습니다. (*워드파일 원본 제공) \n감사합니다.",
    },
};

export const Secondary: Story = {
    args: {
        width: "440px",
        height: "140px",
        variant: "secondary",
        placeholder: "요구사항을 입력해주세요.",
        children: "",
    },
};
