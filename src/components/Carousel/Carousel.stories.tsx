import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import Carousel from "./Carousel";
import {TabSliderStrategy} from "../../data/dummy/carousel";
import {design} from "../../data/dummy/design";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/Carousel",
  component: Carousel,
  parameters: {
    docs: {
      description: {
        story: 'carousel componenti, CMS tarafinda b2c kullanicilari icin sayfa yoneticisinde bulunan <a href="https://my-eva.gordios.dev/page-manager/editPage/7?isCustom=true&path=/ensarow" target="_blank"> tab slider  </a>yerinde kullanilir'
      },
    },
  },
  argTypes: {
    strategy: {
      description: "stratejisini alir",
    },
    activeCategoryId: {
      description: "butonlarin initalstate'i icin kullanilir",
      table: {
        defaultValue: { summary: 0 },
      },
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

const DefaultCarousel = {
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    strategy: TabSliderStrategy,
    //activeCategoryId: 0,
    activeSliderIndex: 0,
    design: design,
  },
} satisfies Story;

export { DefaultCarousel };
