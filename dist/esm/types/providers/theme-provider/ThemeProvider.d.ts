import type { ProviderProps } from "@/@types/types/provider-props.types";
interface ThemeProviderProps extends ProviderProps {
    customClasses?: string;
}
declare const ThemeProvider: (props: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export default ThemeProvider;
