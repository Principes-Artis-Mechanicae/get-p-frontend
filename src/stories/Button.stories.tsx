import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: ({ children = "Button", ...props }) => (
    <Button {...props}>{children}</Button>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
      control: { type: "select" },
      defaultValue: "default",
    },
    size: {
      options: ["default", "icon", "lg", "sm"],
      control: { type: "select" },
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
  },
};

export const Sm: Story = {
  args: {
    variant: "default",
    size: "sm",
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: "🚀",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};
