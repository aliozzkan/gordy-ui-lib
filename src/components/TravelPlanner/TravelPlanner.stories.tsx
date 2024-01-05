import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import TravelPlanner from "./TravelPlanner";

const meta = {
  title: "GordyUI/TravelPlanner",
  component: TravelPlanner,
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
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof TravelPlanner>;

export default meta;

type Story = StoryObj<typeof TravelPlanner>;

const DefaultTravelPlanner = {
  args: {
    disabled: true
  },
} satisfies Story;

export { DefaultTravelPlanner };
