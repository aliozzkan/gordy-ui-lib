import type { Preview } from "@storybook/react";

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: 'grd-dark', // Set your custom dark mode class name
    },
  },
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
