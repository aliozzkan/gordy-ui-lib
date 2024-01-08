"use client";


import type { ProviderProps } from "../../@types/types/provider-props.types";

interface ThemeProviderProps extends ProviderProps {
  customClasses?: string;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <>
      <style>{`
        :root {
          --font-family: "Inter, sans-serif";
          ${props.customClasses}
        }
      `}</style>
      {props.children}
    </>
  );
};

export default ThemeProvider;
