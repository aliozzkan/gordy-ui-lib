import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import MediaList from "./MediaList";
import {MediaListDummy} from "../../data/dummy/mediaList";
import {design} from "../../data/dummy/design";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/MediaList",
  component: MediaList,
  argTypes: {
    strategy: {
      description: "stratejisini alir",
    },
    className: {},
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof MediaList>;

export default meta;

type Story = StoryObj<typeof MediaList>;

const DefaultMediaList = {
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    strategy: MediaListDummy,
    //className: "my-5 py-4",
    design: design,
  },
} satisfies Story;

export { DefaultMediaList };
