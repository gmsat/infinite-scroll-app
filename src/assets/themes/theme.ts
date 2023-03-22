import { jsx } from "@emotion/react";

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
    primary: string
    secondary: string
  },
  breakpoints: {
    sm: string,
    md: string,
    lg: string,
    xl: string
  }
}

export const theme: ThemeProps = {
  colors: {
    primary: "red",
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
  },
  breakpoints: {
    sm: "",
    md: "",
    lg: "",
    xl: ""
  }
}
