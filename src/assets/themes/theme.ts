import { css } from "@emotion/react";

export const breakpoint = {
  xs: "480px",
  sm: "768px",
  md: "1024px",
  lg: "1280px",
  xl: "1536px"
}

export const theme = {
  colors: {
    primary: "#90ADC6",
    secondary: "#000000"
  },
  spacing: {
    padding: {
      sm: "6px",
      md: "12px",
      lg: "16px",
      xl: "20px"
    }
  },
  shadows: {
    primary: "3px 3px 0px 0px rgba(0,0,0,0.1)",
    secondary: "3px 3px 3px 0px rgba(0,0,0,0.4)",
    special: "2px 2px 160px 0px rgba(0,0,0,0.4)",
    button: {
      default: "1px 1px 2px 0px rgba(0,0,0,0.1)",
      hover: "1px 1px 2px 0px rgba(0,0,0,0.2)"
    }
  },
  breakpoints: {
    device: {
      mobileXs: `(max-width: ${breakpoint.xs})`,
      mobile: `(min-width: ${breakpoint.xs}) and (max-width: ${breakpoint.sm})`,
      tablet: `(min-width: ${breakpoint.sm}) and (max-width: ${breakpoint.md})`,
      laptop: `(min-width: ${breakpoint.md}) and (max-width: ${breakpoint.lg})`,
      desktop: `(min-width: ${breakpoint.lg}) and (max-width: ${breakpoint.xl})`,
      desktopXl: `(min-width: ${breakpoint.xl})`
    },
    fontSize: {
      mobile: "1.5rem",
      tablet: "1.1rem",
      laptop: "1.3rem",
      desktop: "1.4rem",
      desktopXl: "1.4rem"
    }
  },
  fonts: {
    primary: "Roboto Condensed"
  },
  globalCss: css`
    html {
      font-family: "Roboto Condensed",monospace;
    }
    
    body {
      margin: 0;
      padding: 0;
    }
  `
}

export const globalStyles = theme.globalCss;
