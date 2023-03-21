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
  }
}
