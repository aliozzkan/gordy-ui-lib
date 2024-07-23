import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import ActivityTravelPlanner from "./ActivityTravelPlanner";
import {activityTravelPlannerStrategy} from "../../data/dummy/activitytravelplanner";
import {design} from "../../data/dummy/design";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/TP Activity",
  component: ActivityTravelPlanner,
  argTypes: {
    strategy: {
      table: {
        defaultValue: { summary: 'stratejisini alir' },
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
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    disabled: false,
    strategy: activityTravelPlannerStrategy,
    design: design,
  },
} satisfies Story;

export { DefaultActivityTravelPlanner };
