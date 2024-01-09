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
        description: "Gelebilecek en fazla icon listesini alir",
        defaultValue: { summary: 6 },
    },
    showArrows: {
      description: "Slider'a ait olan ok tuslarini goster/gizle",
      defaultValue: { summary: true },
    },
    showBullets: {
      description: "Slider'a ait olan dot'lari goster/gizle",
      defaultValue: { summary: true },
    },
    className: {},
    wrapperBgColor: {
      description: "kapsayicinin arkaplan rengini degistirir",
    },
    wrapperWidth: {
      description: "kapsayicinin genisligini degistirir",
        defaultValue: { summary: '100%' },
    },
    wrapperHeight: {
      description: "kapsayicinin yuksekligini degistirir",
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
