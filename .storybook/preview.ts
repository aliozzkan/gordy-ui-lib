import type { Preview } from "@storybook/react";

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true,
    },
    // Optional (Default: 'dark')
    className: {
      defaultValue: 'dark', // Set your custom dark mode class name
    },
  },
  parameters: {
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
