import React, { CSSProperties } from 'react';
import styled from "@emotion/styled";
import { theme } from "../../../assets/themes/theme";

interface ToolbarProps {
  position?: CSSProperties['position']
}

export const Toolbar = styled('div')<ToolbarProps>({
  backgroundColor: theme.colors.primary,
  width: "100%",
  minHeight: "30px"
}, props => ({
  position: props.position
}));
