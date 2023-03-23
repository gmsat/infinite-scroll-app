interface ThemeProps {
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
    button: {
      default: string,
      hover: string
    }
  },
  breakpoints: {
    sm: string,
    md: string,
    lg: string,
    xl: string
  },
  fonts: {
    family: string
  }
}

export const theme: ThemeProps = {
  colors: {
    primary: "#90ADC6",
    secondary: "green"
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
    button: {
      default: "1px 1px 2px 0px rgba(0,0,0,0.1)",
      hover: "1px 1px 2px 0px rgba(0,0,0,0.2)"
    }
  },
  breakpoints: {
    sm: "",
    md: "",
    lg: "",
    xl: ""
  },
  fonts: {
    family: "Roboto Condensed"
  }
}
