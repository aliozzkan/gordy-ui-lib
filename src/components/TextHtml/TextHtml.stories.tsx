import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../storybook/Decorator";
import "../../index.css";
import TextHtml from "./TextHtml";
import {TextHtmlDummy} from "../../data/dummy/texthtml"

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
    content: {
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
  args: {
    content: TextHtmlDummy,
    getContent(content: any) {
      console.log(content);
    }
  },
} satisfies Story;

export { DefaultTextHtml };
