import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import MediaList from "./MediaList";

const meta = {
  title: "GordyUI/MediaList",
  component: MediaList,
  argTypes: {
    title: {
        defaultValue: { summary: 'Popüler bölgeler' },
    },
    maxItemLength: {
        description: "Gelebilecek en fazla media listesini alir",
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
} satisfies Meta<typeof MediaList>;

export default meta;

type Story = StoryObj<typeof MediaList>;

const DefaultMediaList = {
  args: {
    maxItemLength: 3,
    className: "my-5 py-4",
    //wrapperBgColor: "#f3f3f3",
    showArrows: true,
    showBullets: true,
  },
} satisfies Story;

export { DefaultMediaList };
