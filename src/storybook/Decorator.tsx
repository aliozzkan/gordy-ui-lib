import { brandingData } from "../data/dummy/branding-data";
import { getColorCssVariables } from "../libs/color/color.lib";
import ThemeProvider from "../providers/theme-provider/ThemeProvider";

const customClasses = getColorCssVariables(
  (brandingData as any).primaryColor,
  "primary",
);

const DecoratorProvider = (Story: any) => (
  <ThemeProvider customClasses={customClasses}>
    {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    <Story />
  </ThemeProvider>
);

export const ThemeProviderDecorators = [DecoratorProvider];
