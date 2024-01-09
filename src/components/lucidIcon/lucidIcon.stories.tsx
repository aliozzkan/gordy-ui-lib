import type { Meta, StoryObj } from "@storybook/react";


import "../../index.css";
import LIcon from "./lucidIcon";

const meta = {
  title: "GordyUI/LucideIcon",
  component: LIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof LIcon>;

export default meta;

type Story = StoryObj<typeof LIcon>;

const DefaultLucideIcon = {
  args: {
    name: "ChevronDown",
    size: 24
  },
} satisfies Story;

export { DefaultLucideIcon };
