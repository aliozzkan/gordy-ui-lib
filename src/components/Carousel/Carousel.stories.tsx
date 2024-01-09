import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import Carousel from "./Carousel";
import {CarouselData} from "../../data/dummy/carousel";

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
    sliderData: {
      description: "Slider Listesini alir",
    },
    categoryData: {
      description: "Kategori Listesini alir",
    },
    activeCategoryId: {
      description: "butonlarin initalstate'i icin kullanilir",
      table: {
        defaultValue: { summary: 0 },
      },
    },
    activeSliderIndex: {
      description: "slider'in initalstate'i icin kullanilir",
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
  args: {
    sliderData: CarouselData.sliders,
    categoryData: CarouselData.categories,
    activeCategoryId: 2,
    activeSliderIndex: 3,
  },
} satisfies Story;

export { DefaultCarousel };
