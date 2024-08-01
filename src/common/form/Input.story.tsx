import { useInputValidation } from "@/hooks/useInputValidation";

import { REGEXP_PASSWORD } from "@/constants/regex";

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
    render: (args) => {
        const { value, isValid, onChange } = useInputValidation(REGEXP_PASSWORD);

        return (
            <Input
                type={args.type}
                onChange={onChange}
                value={value}
                width={args.width}
                height={args.height}
                placeholder={args.placeholder}
                error={isValid ? "" : "비밀번호는 영문,숫자,특수문자로 조합된 8-20자 이어야 합니다"}
            />
        );
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
