import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import TourTravelPlanner from "./TourTravelPlanner";
import {tourTravelPlannerStrategy} from "../../data/dummy/tourtravelplanner";

const meta = {
  title: "GordyUI/TP Tour",
  component: TourTravelPlanner,
  argTypes: {
    title: {
      table: {
        defaultValue: { summary: 'Hayalinizdeki turu keşfedin!' },
      },
    },
    tourType: {
      description: "secili <b>TAB'i</b> gostermek icin kullanilir, belirtilmezse default olarak <u>ilk deger</u> kabul edilir <i>(Kültür Turları)</i>",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "undefined" },
      },
    },
    buttonText: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ara' },
      },
    },
    buttonBgColor: {
      table: {
        defaultValue: { summary: '#2E90FA' },
      },
    },
    buttonTextColor: {
      table: {
        defaultValue: { summary: '#FFFFFF' },
      },
    },
    inputDestinationText: {
      table: {
        defaultValue: { summary: 'Bölge, tur adı veya tema arayın' },
      },
    },
    inputCheckoutDateText: {
      table: {
        defaultValue: { summary: 'Dönem seçimi' },
      },
    },
    wrapperBgColor: {
      table: {
      },
    },
    backgroundImagePath: {
      description: "arkaplan resmi url adresi"
    },
    wrapperWidth: {
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    wrapperHeight: {
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
    disabled: {
      description: "componenti kullanmak icin false, kilitlemek icin true degeri verin",
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onSubmit: {
      description: "Arama butonuna basildiginda gerekli olan degerleri gonderir",
      table: {
        defaultValue: { summary: `onSubmit={e => console.log(e)}` },
      },

    }
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof TourTravelPlanner>;

export default meta;

type Story = StoryObj<typeof TourTravelPlanner>;

const DefaultTourTravelPlanner = {
  args: {
    disabled: false,
    tourType: "Kultur",
    strategy: tourTravelPlannerStrategy,
    tabButtons: [
      {label: "Kültür Turları", value: "Kultur"},
      {label: "Yurt Dışı Turları", value: "Yurt Disi"},
      {label: "Gemi Turları", value: "Gemi"},
    ],
    onSubmit(e: any) {
      console.log(e);
    }
  },
} satisfies Story;

export { DefaultTourTravelPlanner };
