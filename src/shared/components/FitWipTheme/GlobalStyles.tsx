import { Global, css } from "@emotion/react";

const globalStyles = css({
  ":root": {
    // Font size
    "--font-size-sm": "clamp(0.875rem, 2vw, 1rem)",
    "--font-size-base": "clamp(1rem, 2.5vw, 1.125rem)",
    "--font-size-md": "clamp(1.125rem, 3vw, 1.25rem)",
    "--font-size-lg": "clamp(1.25rem, 3.5vw, 1.5rem)",
    "--font-size-xl": "clamp(1.5rem, 4vw, 1.75rem)",
    "--font-size-xxl": "clamp(1.75rem, 4.5vw, 2rem)",
    "--font-size-xxxl": "clamp(2rem, 5vw, 2.5rem)",

    // Color
    "--color-primary": "hsla(211, 100%, 50%, 1)",
    "--color-secondary": "hsla(210, 8%, 45%, 1)",
    "--color-success": "hsla(134, 61%, 41%, 1)",
    "--color-danger": "hsla(356, 70%, 53%, 1)",
    "--color-warning": "hsla(45, 100%, 62%, 1)",
    "--color-info": "hsla(188, 73%, 47%, 1)",
    "--color-light": "hsla(210, 36%, 96%, 1)",
    "--color-dark": "hsla(210, 10%, 20%, 1)",
    "--color-text": "hsla(210, 11%, 15%, 1)",
    "--color-background": "hsla(0, 0%, 100%, 1)",

    // Breakpoint variables - for documentation purposes, the variables can't be used in media queries
    "--breakpoint-xs": "576px",
    "--breakpoint-sm": "768px",
    "--breakpoint-md": "992px",
    "--breakpoint-lg": "1200px",
    "--breakpoint-xl": "1400px",

    // Spacing and padding variables with clamp and media queries
    "--spacing-xs": "clamp(0.25rem, 1vw, 0.5rem)",
    "--spacing-sm": "clamp(0.5rem, 1.5vw, 1rem)",
    "--spacing-md": "clamp(1rem, 2vw, 1.5rem)",
    "--spacing-lg": "clamp(1.5rem, 3vw, 2rem)",
    "--spacing-xl": "clamp(2rem, 4vw, 2.5rem)",
    "--spacing-xxl": "clamp(2.5rem, 5vw, 3rem)",

    "--padding-xs": "clamp(0.25rem, 1vw, 0.5rem)",
    "--padding-sm": "clamp(0.5rem, 1.5vw, 1rem)",
    "--padding-md": "clamp(1rem, 2vw, 1.5rem)",
    "--padding-lg": "clamp(1.5rem, 3vw, 2rem)",
    "--padding-xl": "clamp(2rem, 4vw, 2.5rem)",
    "--padding-xxl": "clamp(2.5rem, 5vw, 3rem)",
  },
  "@media (max-width: 576px)": {
    ":root": {
      "--spacing-xs": "0.25rem",
      "--spacing-sm": "0.5rem",
      "--spacing-md": "0.75rem",
      "--spacing-lg": "1rem",
      "--spacing-xl": "1.25rem",
      "--spacing-xxl": "1.5rem",

      "--padding-xs": "0.25rem",
      "--padding-sm": "0.5rem",
      "--padding-md": "0.75rem",
      "--padding-lg": "1rem",
      "--padding-xl": "1.25rem",
      "--padding-xxl": "1.5rem",
    },
  },
  "@media (min-width: 577px) and (max-width: 768px)": {
    ":root": {
      "--spacing-xs": "0.5rem",
      "--spacing-sm": "0.75rem",
      "--spacing-md": "1rem",
      "--spacing-lg": "1.25rem",
      "--spacing-xl": "1.5rem",
      "--spacing-xxl": "1.75rem",

      "--padding-xs": "0.5rem",
      "--padding-sm": "0.75rem",
      "--padding-md": "1rem",
      "--padding-lg": "1.25rem",
      "--padding-xl": "1.5rem",
      "--padding-xxl": "1.75rem",
    },
  },
  "@media (min-width: 769px)": {
    ":root": {
      "--spacing-xs": "0.75rem",
      "--spacing-sm": "1rem",
      "--spacing-md": "1.25rem",
      "--spacing-lg": "1.5rem",
      "--spacing-xl": "1.75rem",
      "--spacing-xxl": "2rem",

      "--padding-xs": "0.75rem",
      "--padding-sm": "1rem",
      "--padding-md": "1.25rem",
      "--padding-lg": "1.5rem",
      "--padding-xl": "1.75rem",
      "--padding-xxl": "2rem",
    },
  },
  "*, *:before, *:after": {
    boxSizing: "border-box",
  },
  "*": {
    margin: 0,
  },
  "@media (prefers-reduced-motion: no-preference)": {
    html: {
      interpolateSize: "allow-keywords",
    },
  },
  body: {
    lineHeight: 1.5,
    WebkitFontSmoothing: "antialiased", // Antialiasing
    MozOsFontSmoothing: "grayscale", // Antialiasing
    fontSize: "var(--font-size-base)",
    fontFamily: "'Roboto', sans-serif",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  p: {
    textWrap: "pretty",
  },
  "h1, h2, h3, h4, h5, h6": {
    textWrap: "balance",
  },
  "#root, #__next": {
    isolation: "isolate",
  },
});

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;