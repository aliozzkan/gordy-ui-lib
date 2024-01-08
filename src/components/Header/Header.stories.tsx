import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import Header from "./Header";

const meta = {
  title: "GordyUI/Header",
  component: Header,
  argTypes: {},
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

const DefaultHeader = {
  args: {
    username: "Ensar"
  },
} satisfies Story;

export { DefaultHeader };
