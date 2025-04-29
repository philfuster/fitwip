import React from "react";
import { ThemeProvider, Theme } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";

const theme = {
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    success: "var(--color-success)",
    danger: "var(--color-danger)",
    warning: "var(--color-warning)",
    info: "var(--color-info)",
    light: "var(--color-light)",
    dark: "var(--color-dark)",
    text: "var(--color-text)",
    background: "var(--color-background)",
  },
  fontSizes: {
    sm: "var(--font-size-sm)",
    base: "var(--font-size-base)",
    md: "var(--font-size-md)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
    xxl: "var(--font-size-xxl)",
    xxxl: "var(--font-size-xxxl)",
  },
  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
    xl: "var(--spacing-xl)",
    xxl: "var(--spacing-xxl)",
  },
  padding: {
    xs: "var(--padding-xs)",
    sm: "var(--padding-sm)",
    md: "var(--padding-md)",
    lg: "var(--padding-lg)",
    xl: "var(--padding-xl)",
    xxl: "var(--padding-xxl)",
  },
  breakpoints: {
    xs: "var(--breakpoint-xs)",
    sm: "var(--breakpoint-sm)",
    md: "var(--breakpoint-md)",
    lg: "var(--breakpoint-lg)",
    xl: "var(--breakpoint-xl)",
  },
} as const satisfies Theme;

const FitWipTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default FitWipTheme;