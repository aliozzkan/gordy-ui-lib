import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import HotelTravelPlanner from "./HotelTravelPlanner";

const meta = {
  title: "GordyUI/TP Hotel",
  component: HotelTravelPlanner,
  argTypes: {
    title: {
      table: {
        defaultValue: { summary: 'Title' },
      },
    },
    subTitle: {
      table: {
        defaultValue: { summary: 'Sub-title' },
      },
    },
    buttonText: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Otel ara' },
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
        defaultValue: { summary: 'Nereye gidiyorsun?' },
      },
    },
    inputCheckoutDateText: {
      table: {
        defaultValue: { summary: 'Giriş - Çıkış tarihi seçin' },
      },
    },
    inputGuestInfoText: {
      table: {
        defaultValue: { summary: '2 misafir, 1 oda' },
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
} satisfies Meta<typeof HotelTravelPlanner>;

export default meta;

type Story = StoryObj<typeof HotelTravelPlanner>;

const DefaultHotelTravelPlanner = {
  args: {
    disabled: false
  },
} satisfies Story;

export { DefaultHotelTravelPlanner };
