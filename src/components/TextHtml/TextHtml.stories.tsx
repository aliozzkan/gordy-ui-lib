import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import TextHtml from "./TextHtml";
import {TextHtmlDummy} from "../../data/dummy/texthtml"
import LayoutContainer from "../LayoutContainer/LayoutContainer";

const meta = {
  title: "GordyUI/TextHtml",
  component: TextHtml,
  parameters: {
    docs: {
      description: {
        story: 'Text componenti, dilediginiz gibi yazabilir resim ve video ekleyebilirsiniz'
      },
    },
  },
  argTypes: {
    strategy: {
        disabled: true,
        control: false,
        description: "Raw HTML ve Text girilebilir",
        defaultValue: { summary: TextHtmlDummy },
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof TextHtml>;

export default meta;

type Story = StoryObj<typeof TextHtml>;

const DefaultTextHtml = {
  decorators: [(story) => <LayoutContainer>{story()}</LayoutContainer> ],
  args: {
    strategy: TextHtmlDummy
  },
} satisfies Story;

export { DefaultTextHtml };
