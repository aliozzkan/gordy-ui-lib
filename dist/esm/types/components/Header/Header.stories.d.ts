/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
import "../../index.css";
declare const meta: {
    title: string;
    component: import("react").FC<import("./Header").HeaderProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
