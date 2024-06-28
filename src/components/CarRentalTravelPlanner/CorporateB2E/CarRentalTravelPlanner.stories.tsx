import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../../storybook/Decorator";
import "../../../index.css";
import CorporateCarRentalTravelPlanner from "./CarRentalTravelPlanner";
import { activityTravelPlannerCorporateStrategy } from "../../../data/dummy/carrentaltravelplanner";
import {design} from "../../../data/dummy/design";

const meta = {
  title: "GordyUI/TP Car Rental Corporate",
  component: CorporateCarRentalTravelPlanner,
  argTypes: {
    strategy: {
      table: {
        defaultValue: { summary: 'stratejisini alir' },
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
    disabled: false,
    strategy: activityTravelPlannerCorporateStrategy,
    design: design,
  },
} satisfies Story;

export { DefaultCorporateCarRentalTravelPlanner };
