import styled from "@emotion/styled";
import { theme } from "../../../assets/themes/theme";

interface ButtonProps {
  backgroundColor?: "primary" | string
}

export const Button = styled('button')<ButtonProps>({
  padding: "8px",
  borderRadius: "24px",
  border: "none",
  backgroundColor: `${theme.colors.primary}`,
  color: "white",
  fontSize: "1rem",
  boxShadow: `${theme.shadows.button.default}`,
  ':hover': {
    filter: "brightness(95%)",
    boxShadow: `${theme.shadows.button.hover}`,
    cursor: "pointer"
  }
}, props => ({
  backgroundColor:
    props.backgroundColor === 'primary' ? theme.colors.primary :
    props.backgroundColor === '' ? theme.colors.primary : props.backgroundColor
}));

