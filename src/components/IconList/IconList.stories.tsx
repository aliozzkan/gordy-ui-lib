import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import IconList from "./IconList";
import {IconListDummy} from "../../data/dummy/iconList";
import {design} from "../../data/dummy/design";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/IconList",
  component: IconList,
  argTypes: {
    className: {},
    strategy: {
      description: "strategy alir",
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof IconList>;

export default meta;

type Story = StoryObj<typeof IconList>;

const DefaultIconList = {
  decorators: [(story) => <LayoutContainer className="">{story()}</LayoutContainer> ],
  args: {
    strategy: IconListDummy,
    design: design,
  },
} satisfies Story;

export { DefaultIconList };
