import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from ".";

const meta: Meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    css: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
    color: {
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "neutral",
        "success",
        "expired",
      ],
      control: { type: "select" },
      description: "Color merupakan pilihan warna untuk button.",
    },
    outlined: {
      control: { type: "boolean" },
      description: "Outlined merupakan salah satu variant dari button ini",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <Button {...args} />;

export const Solid = Template.bind({});
export const Outlined = Template.bind({});

Solid.args = {
  color: "primar",
  children: "Masuk menggunakan Google",
};

Outlined.args = {
  outlined: "true",
  color: "secondary",
  children: "Masuk menggunakan Github",
};
