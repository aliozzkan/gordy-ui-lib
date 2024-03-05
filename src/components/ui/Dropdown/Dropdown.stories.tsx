import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProviderDecorators } from "../../../storybook/Decorator";
import Dropdown from "./Dropdown";
import {Button} from "../button";

const meta = {
  title: "GordyUI/Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        story: ''
      },
    },
  },
  argTypes: {
    placement: {
      description: "acilir menu pozisyonunu ayarlar",
      options: [
          'topStart', 'topEnd', 'leftStart', 'leftEnd', 'rightStart', 'rightEnd', 'bottomStart', 'bottomEnd'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "bottomStart" },
      },
    },
  },
  tags: ["autodocs"],
  decorators: ThemeProviderDecorators,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

const renderHeaderDropdownItems = ({onClose, className, ref} : any) => {
  const handleSelect = (eventKey: any) => {
    onClose()
    if (eventKey) {
      switch (eventKey) {
        case "Item A":
          alert("Item A tiklandi")
          return
        case "Item B":
          alert("Item B tiklandi")
          return
        default:
          return
      }
    }
  }

  return (
    <Dropdown.Menu
      className={`${className}`}
      //style={{left: 50}}
      ref={ref}
      onSelect={handleSelect}
    >
      <Dropdown.Item
        className="p-3 cursor-pointer"
        eventKey="Item A"
      >
        Item A
      </Dropdown.Item>
      <hr />
      <Dropdown.Item
        className="p-3 cursor-pointer"
        eventKey="Item B"
      >
        <div>Item B</div>
      </Dropdown.Item>
      <hr />
      <Dropdown.Item
        className="p-3"
      >
        Item C
      </Dropdown.Item>
    </Dropdown.Menu>
  )
}
const DefaultDropdown: Story = {
  args: {
    placement: "bottomStart",
    className: "text-gray-800 text-sm rounded-xl",
    items: renderHeaderDropdownItems,
    title: "Dropdown"
  },
  render: (props) => {

    return (
      <div className="flex items-center justify-center h-[60vh] pb-44">
        <Dropdown items={props.items} placement={props.placement} className={props.className} title={props.title} />
      </div>
    );
  },
};


export { DefaultDropdown };
