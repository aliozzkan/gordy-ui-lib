import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import FlightTravelPlanner from "./FlightTravelPlanner";

const meta = {
  title: "GordyUI/TP Flight",
  component: FlightTravelPlanner,
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
} satisfies Meta<typeof FlightTravelPlanner>;

export default meta;

type Story = StoryObj<typeof FlightTravelPlanner>;

const DefaultFlightTravelPlanner = {
  args: {
    disabled: false,
    noReason: false,
    tourType: "return",
    tabButtons: [
      {label: "Gidiş Dönüş", value: "return"},
      {label: "Tek Yön", value: "one-way"},
      {label: "Çoklu Uçuş", value: "multi"},
    ],
    onSubmit(e: any) {
      console.log(e);
    }
  },
} satisfies Story;

export { DefaultFlightTravelPlanner };
