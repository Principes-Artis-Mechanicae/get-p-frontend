import { CheckBox } from "../common/form/CheckBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "form/CheckBox",
    component: CheckBox,
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Terms: Story = {
    args: {
        width: "20px",
        height: "20px",
        children: "GET-P 이용약관 (필수)",
    },
};

export const Privacy: Story = {
    args: {
        width: "20px",
        height: "20px",
        children: "개인정보 수집 및 이용 동의 (필수)",
    },
};

export const Marketing: Story = {
    args: {
        width: "20px",
        height: "20px",
        children: "마케팅 정보 수신 (선택)",
    },
};

export const Login: Story = {
    args: {
        width: "20px",
        height: "20px",
        children: "로그인 유지",
    },
};
