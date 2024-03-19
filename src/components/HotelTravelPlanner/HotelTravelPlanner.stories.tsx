import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import HotelTravelPlanner from "./HotelTravelPlanner";
import {hotelTravelPlannerStrategy} from "../../data/dummy/hoteltravelplanner";

const meta = {
  title: "GordyUI/TP Hotel",
  component: HotelTravelPlanner,
  argTypes: {
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
    strategy: {
      table: {
        description: "",
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
    disabled: false,
    strategy: hotelTravelPlannerStrategy,
  },
} satisfies Story;

export { DefaultHotelTravelPlanner };
