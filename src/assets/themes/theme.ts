const breakpointSize = {
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
    special: "2px 2px 120px 0px rgba(0,0,0,0.4)",
    button: {
      default: "1px 1px 2px 0px rgba(0,0,0,0.1)",
      hover: "1px 1px 2px 0px rgba(0,0,0,0.2)"
    }
  },
  breakpoints: {
    device: {
      mobileXs: `(max-width: ${breakpointSize.xs})`,
      mobile: `(min-width: ${breakpointSize.xs}) and (max-width: ${breakpointSize.sm})`,
      tablet: `(min-width: ${breakpointSize.sm}) and (max-width: ${breakpointSize.md})`,
      laptop: `(min-width: ${breakpointSize.md}) and (max-width: ${breakpointSize.lg})`,
      desktop: `(min-width: ${breakpointSize.lg}) and (max-width: ${breakpointSize.xl})`,
      desktopXl: `(min-width: ${breakpointSize.xl})`
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
    family: "Roboto Condensed"
  }
}
