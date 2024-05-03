import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import FlightTravelPlanner from "./FlightTravelPlanner";
import {flightTravelPlannerStrategy} from "../../data/dummy/flighttravelplanner";

const meta = {
  title: "GordyUI/TP Flight",
  component: FlightTravelPlanner,
  argTypes: {
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
  args: {
    disabled: false,
    strategy: flightTravelPlannerStrategy,
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
