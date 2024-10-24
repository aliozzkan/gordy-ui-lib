import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import Header from "./Header";
import LayoutContainer from "../LayoutContainer/LayoutContainer";
import {design} from "../../data/dummy/design";

const meta = {
  title: "GordyUI/Header",
  component: Header,
  argTypes: {
    className: {},
    tabItemList: {
      description: "",
      defaultValue: { summary: 'true' }
    },
    logoUrl: {
      description: "logo url adresi",
      defaultValue: {}
    },
    showLanguageMenuItem: {
      description: "dil ve price button goster/gizle",
      defaultValue: { summary: 'true' }
    },
    showHelpMenuItem: {
      description: "yardim menusu button goster/gizle",
      defaultValue: { summary: 'true' }
    },
    showMyRequestsMenuItem: {
      description: "taleplerim button goster/gizle",
      defaultValue: { summary: 'true' }
    },
    showAccountDropdownItem: {
      description: "hesabim button goster/gizle",
      defaultValue: { summary: 'true' }
    },
    showLogo: {
      description: "logo goster/gizle",
      defaultValue: { summary: 'true' }
    },
    showTabBar: {
      description: "tab listesi goster/gizle",
      defaultValue: { summary: 'true' }
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

const DefaultHeader = {
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    tabItemList: [
      {label: "Otel", icon: "Home", isActive: true},
      {label: "Uçak", icon: "Plane"},
      {label: "Transfer", icon: "CarFront"},
    ],
    logoUrl: "https://place-hold.it/120x40?text=eva logo",
    showLanguageMenuItem: true,
    showHelpMenuItem: true,
    showMyRequestsMenuItem: true,
    showAccountDropdownItem: true,
    showLogo: true,
    showTabBar: true,
    design: design,
  },
} satisfies Story;

export { DefaultHeader };
