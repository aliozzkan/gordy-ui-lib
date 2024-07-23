import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import FlightTravelPlanner from "./FlightTravelPlanner";
import {flightTravelPlannerStrategy} from "../../data/dummy/flighttravelplanner";
import {design} from "../../data/dummy/design";
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/TP Flight",
  component: FlightTravelPlanner,
  argTypes: {
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
} satisfies Meta<typeof FlightTravelPlanner>;

export default meta;

type Story = StoryObj<typeof FlightTravelPlanner>;

const DefaultFlightTravelPlanner = {
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    disabled: false,
    strategy: flightTravelPlannerStrategy,
    tourType: "return",
    tabButtons: [
      {label: "Gidiş Dönüş", value: "return"},
      {label: "Tek Yön", value: "one-way"},
      {label: "Çoklu Uçuş", value: "multi"},
    ],
    tpType: "Agency",
    design: design,
    onSubmit(e: any) {
      console.log(e);
    }
  },
} satisfies Story;

export { DefaultFlightTravelPlanner };
