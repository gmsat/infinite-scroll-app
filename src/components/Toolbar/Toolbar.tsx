import React from 'react';
import { Flex } from "../common/Layout/Flex";
import styled, { CSSObject } from "@emotion/styled";
import { theme } from "../../assets/themes/theme";
import { CSSProperties } from "react";

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
