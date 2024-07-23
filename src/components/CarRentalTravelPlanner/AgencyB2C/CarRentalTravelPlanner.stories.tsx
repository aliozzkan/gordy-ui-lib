import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../../storybook/Decorator";
import "../../../index.css";
import AgencyCarRentalTravelPlannerProps from "./CarRentalTravelPlanner";
import {carRentalTravelPlannerAgencyStrategy} from "../../../data/dummy/carrentaltravelplanner";
import {design} from "../../../data/dummy/design";
import LayoutContainer from "../../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/TP Car Rental Agency",
  component: AgencyCarRentalTravelPlannerProps,
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
} satisfies Meta<typeof AgencyCarRentalTravelPlannerProps>;

export default meta;

type Story = StoryObj<typeof AgencyCarRentalTravelPlannerProps>;

const DefaultAgencyCarRentalTravelPlannerProps = {
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    disabled: false,
    strategy: carRentalTravelPlannerAgencyStrategy,
    design: design,
  },
} satisfies Story;

export { DefaultAgencyCarRentalTravelPlannerProps };
