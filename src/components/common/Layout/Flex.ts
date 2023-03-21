import styled from "@emotion/styled";

interface FlexStyledProps {
  flexDirection?: "column" | "row",
  padding?: string | number,
  margin?: string | number,
}

export const Flex = styled('div')<FlexStyledProps>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}, props => ({
  flexDirection: props.flexDirection,
  padding: props.padding,
  margin: props.margin
}));