import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import TravelPlanner from "./TravelPlanner";

const meta = {
  title: "GordyUI/TravelPlanner",
  component: TravelPlanner,
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof TravelPlanner>;

export default meta;

type Story = StoryObj<typeof TravelPlanner>;

const DefaultTravelPlanner = {
  args: {
    title: "ChevronDown",
  },
} satisfies Story;

export { DefaultTravelPlanner };
