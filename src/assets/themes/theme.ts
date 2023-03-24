export interface ThemeProps {
  colors: {
    primary: string,
    secondary: string
  },
  spacing: {
    padding:  {
      sm: string,
      md: string,
      lg: string,
      xl: string
    }
  },
  shadows: {
    primary: string,
    secondary: string,
    special: string,
    button: {
      default: string,
      hover: string
    }
  },
  breakpoints: {
    device: {
      mobile: string,
      tablet: string,
      laptop: string,
      desktop: string,
      desktopXl: string
    },
    container: {
      mobile: string,
      tablet: string,
      laptop: string,
      desktop: string,
      desktopXl: string
    },
    fontSize: {
      mobile: string,
      tablet: string,
      laptop: string,
      desktop: string,
      desktopXl: string
    }
  },
  fonts: {
    family: string
  }
}

// const breakpointSize = {
//   xs: "0px",
//   sm: "768px",
//   md: "900px",
//   lg: "1200px",
//   xl: "1563px"
// }

const breakpointSize = {
  xs: "0px",
  sm: "768px",
  md: "1024px",
  lg: "1280px",
  xl: "1536px"
}

export const theme: ThemeProps = {
  colors: {
    primary: "#90ADC6",
    secondary: "#000000",
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
      mobile: `(max-width: ${breakpointSize.sm})`,
      tablet: `(min-width: ${breakpointSize.sm}) and (max-width: ${breakpointSize.md})`,
      laptop: `(min-width: ${breakpointSize.md}) and (max-width: ${breakpointSize.lg})`,
      desktop: `(min-width: ${breakpointSize.lg}) and (max-width: ${breakpointSize.xl})`,
      desktopXl: `(min-width: ${breakpointSize.xl})`
    },
    container: {
      mobile: `(max-width: ${breakpointSize.sm})`,
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
      desktopXl: "1.5rem"
    }
  },
  fonts: {
    family: "Roboto Condensed"
  }
}
