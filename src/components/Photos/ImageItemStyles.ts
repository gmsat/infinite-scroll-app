import React from 'react';
import styled from "@emotion/styled";
import { theme } from "../../assets/themes/theme";

interface CardProps {
  shadow?: "primary" | "secondary"
}

export const Card = styled('div')<CardProps>({
  position: "static"
}, props => ({
  boxShadow:
    props.shadow === "primary" ? theme.shadows.primary :
    props.shadow === "secondary" ? theme.shadows.secondary : "none"
}));

export const PhotoCard = styled(Card)({
  // width: "25%",
  width: "400px",
  maxHeight: "300px",
  overflow: "clip",
  borderRadius: "8px",
  position: "relative"
});

export const Image = styled('img')({
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "100%",
  height: "300px",
  objectFit: "cover"
});

export const FavoriteButton = styled('button')({
  // zIndex: 2,
  cursor: "pointer",
  borderRadius: "36px",
  padding: "16px 24px 14px 24px",
  backgroundColor: "rgba(0,0,0,0)",
  color: "white",
  fontSize: "1.4rem",
  border: "solid white 1px",
  marginBottom: "auto"
});

export const Backdrop = styled('div')({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  width: "100%",
  height: "100%",
  top: "0",
  position: "absolute",
  backgroundColor: "rgba(0,0,0,0.4)"
});

export const Title = styled('text')({
  color: "white",
  fontWeight: "bold",
  fontSize: "1.6rem",
  textAlign: "center"
});

export const PhotoAuthor = styled('text')({
  color: "white",
  fontSize: "1.6rem",
  textAlign: "center",
  fontStyle: "italic"
});

export const Divider = styled('hr')({
  borderTop: "2px solid white",
  width: "100px"
});
