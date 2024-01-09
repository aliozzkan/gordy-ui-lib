import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import IconList from "./IconList";

const meta = {
  title: "GordyUI/IconList",
  component: IconList,
  argTypes: {
    title: {
        defaultValue: { summary: 'Konaklama seçenekleri' },
    },
    maxItemLength: {
        defaultValue: { summary: 6 },
    },
    showArrows: {
      defaultValue: { summary: true },
    },
    showBullets: {
      defaultValue: { summary: true },
    },
    className: {},
    wrapperBgColor: {},
    wrapperWidth: {
        defaultValue: { summary: '100%' },
    },
    wrapperHeight: {
        defaultValue: { summary: 'auto' },
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof IconList>;

export default meta;

type Story = StoryObj<typeof IconList>;

const DefaultIconList = {
  args: {
    maxItemLength: 4,
    className: "my-5 py-4",
    wrapperBgColor: "#f3f3f3",
    showArrows: true,
    showBullets: false,
  },
} satisfies Story;

export { DefaultIconList };
