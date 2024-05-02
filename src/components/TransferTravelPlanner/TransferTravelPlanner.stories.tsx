import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import TransferTravelPlanner from "./TransferTravelPlanner";
import {transferTravelPlannerStrategy} from "../../data/dummy/transfertravelplanner";

const meta = {
  title: "GordyUI/TP Transfer",
  component: TransferTravelPlanner,
  argTypes: {
    tourType: {
      description: "secili <b>TAB'i</b> gostermek icin kullanilir, belirtilmezse default olarak <u>ilk deger</u> kabul edilir <i>(Gidis Donus)</i>",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "undefined" },
      },
    },
    tpType: {
      description: "Tp tipini degistirmek icin kullanilir, belirtilmezse default olarak <u>ilk deger</u> kabul edilir <i>(Agency)</i>",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "undefined" },
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
} satisfies Meta<typeof TransferTravelPlanner>;

export default meta;

type Story = StoryObj<typeof TransferTravelPlanner>;

const DefaultTransferTravelPlanner = {
  args: {
    disabled: false,
    strategy: transferTravelPlannerStrategy,
    noReason: false,
    tourType: "return",
    tpType: "Agency",
    tabButtons: [
      {label: "Gidiş Dönüş", value: "return"},
      {label: "Tek Yön", value: "one-way"},
    ],
    onSubmit(e: any) {
      console.log(e);
    }
  },
} satisfies Story;

export { DefaultTransferTravelPlanner };
