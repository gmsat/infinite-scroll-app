import styled from "@emotion/styled";

interface FlexStyledProps {
  flexDirection?: "column" | "row",
  padding?: string | number,
  margin?: string | number,
  gap?: number | string,
  position?: string
}

export const Flex = styled('div')<FlexStyledProps>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap"
}, props => ({
  flexDirection: props.flexDirection,
  padding: props.padding,
  margin: props.margin,
  gap: props.gap
}));