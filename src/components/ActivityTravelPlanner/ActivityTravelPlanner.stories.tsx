import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import ActivityTravelPlanner from "./ActivityTravelPlanner";

const meta = {
  title: "GordyUI/TP Activity",
  component: ActivityTravelPlanner,
  argTypes: {
    title: {
      table: {
        defaultValue: { summary: 'Yapılacak harika şeyleri keşfedin!' },
      },
    },
    subTitle: {
      table: {
        defaultValue: { summary: 'Aktiviteler, konserler, atölyeler ve çok daha fazlası' },
      },
    },
    buttonText: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ara' },
      },
    },
    buttonBgColor: {
      table: {
        defaultValue: { summary: '#2E90FA' },
      },
    },
    buttonTextColor: {
      table: {
        defaultValue: { summary: '#FFFFFF' },
      },
    },
    inputDestinationText: {
      table: {
        defaultValue: { summary: 'Nereye gideceksiniz?' },
      },
    },
    inputCheckoutDateText: {
      table: {
        defaultValue: { summary: 'Tarihler' },
      },
    },
    wrapperBgColor: {
      table: {
      },
    },
    wrapperWidth: {
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    wrapperHeight: {
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
    disabled: {
      description: "componenti kullanmak icin false, kilitlemek icin true degeri verin",
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof ActivityTravelPlanner>;

export default meta;

type Story = StoryObj<typeof ActivityTravelPlanner>;

const DefaultActivityTravelPlanner = {
  args: {
    disabled: false
  },
} satisfies Story;

export { DefaultActivityTravelPlanner };
