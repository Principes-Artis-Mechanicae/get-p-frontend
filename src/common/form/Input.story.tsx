import { Button } from "./Button";
import { Input } from "./Input";
import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "form/Input",
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: "text",
        width: "300px",
        height: "45px",
        placeholder: "이메일 주소를 입력해주세요",
    },
};

export const Password: Story = {
    args: {
        type: "password",
        width: "300px",
        height: "45px",
        placeholder: "비밀번호를 입력해주세요",
    },
};

export const Email: Story = {
    args: {
        type: "email",
        width: "300px",
        height: "45px",
    },
    render: (args) => {
        return (
            <Input width={args.width} height={args.height} placeholder="이메일 주소를 입력해주세요">
                <Button variant="side" width="40px" height="45px">
                    인증
                </Button>
            </Input>
        );
    },
};

export const Verify: Story = {
    args: {
        type: "text",
        width: "300px",
        height: "45px",
    },
    render: (args) => {
        return (
            <Input width={args.width} height={args.height} placeholder="인증번호를 입력해주세요">
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                        color: #476ff1;
                        font-weight: bold;
                        height: 100%;
                    `}
                >
                    4:30
                </div>
            </Input>
        );
    },
};
