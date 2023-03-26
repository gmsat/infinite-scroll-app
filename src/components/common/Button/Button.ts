import styled from "@emotion/styled";
import { theme } from "../../../assets/themes/theme";

interface ButtonProps {
  backgroundColor?: "primary" | string
}

export const Button = styled('button')<ButtonProps>({
  backgroundColor: theme.colors.primary,
  fontFamily: theme.fonts.primary,
  boxShadow: theme.shadows.button.default,
  padding: "8px",
  borderRadius: "24px",
  border: "none",
  color: "white",
  fontSize: "1rem",
  ':hover': {
    filter: "brightness(95%)",
    boxShadow: theme.shadows.button.hover,
    cursor: "pointer"
  }
}, props => ({
  backgroundColor:
    props.backgroundColor === 'primary' ? theme.colors.primary :
    props.backgroundColor === '' ? theme.colors.primary : props.backgroundColor
}));

