import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import HotelTravelPlanner from "./HotelTravelPlanner";
import {hotelTravelPlannerStrategy} from "../../data/dummy/hoteltravelplanner";
import {design} from "../../data/dummy/design";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/TP Hotel",
  component: HotelTravelPlanner,
  argTypes: {
    strategy: {
      table: {
        defaultValue: { summary: 'stratejisini alir' },
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
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    disabled: false,
    strategy: hotelTravelPlannerStrategy,
    design: design,
  },
} satisfies Story;

export { DefaultHotelTravelPlanner };
