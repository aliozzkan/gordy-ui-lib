import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../../storybook/Decorator";
import "../../../index.css";
import CorporateCarRentalTravelPlanner from "./CarRentalTravelPlanner";

const meta = {
  title: "GordyUI/TP Car Rental Corporate",
  component: CorporateCarRentalTravelPlanner,
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
    inputPickupLocationText: {
      table: {
        defaultValue: { summary: 'Alış ve Teslim Noktası' },
      },
    },
    inputPickupDateText: {
      table: {
        defaultValue: { summary: 'Alış Tarihi' },
      },
    },
    inputDeliveryDateText: {
      table: {
        defaultValue: { summary: 'Teslim Tarihi' },
      },
    },
    inputTimeText: {
      table: {
        defaultValue: { summary: 'Saat' },
      },
    },
    inputDifferentLocationText: {
      table: {
        defaultValue: { summary: 'Teslim noktası farklı' },
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
} satisfies Meta<typeof CorporateCarRentalTravelPlanner>;

export default meta;

type Story = StoryObj<typeof CorporateCarRentalTravelPlanner>;

const DefaultCorporateCarRentalTravelPlanner = {
  args: {
    disabled: false
  },
} satisfies Story;

export { DefaultCorporateCarRentalTravelPlanner };
