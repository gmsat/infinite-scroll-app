import React from 'react';
import styled from "@emotion/styled";
import { theme } from "../../assets/themes/theme";

interface CardProps {
  shadow?: "primary" | "secondary"
}

export const Card = styled('div')<CardProps>({
  position: "relative"
}, props => ({
  boxShadow:
    props.shadow === "primary" ? theme.shadows.primary :
    props.shadow === "secondary" ? theme.shadows.secondary : "none"
}));

export const PhotoCard = styled(Card)({
  maxHeight: "300px",
  width: "400px",
  overflow: "hidden",
  borderRadius: "8px"
});

export const Image = styled('img')({
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "100%",
  height: "300px",
  objectFit: "cover"
});

export const FavoriteButton = styled('button')({
  zIndex: 2,
  cursor: "pointer",
  borderRadius: "36px",
  padding: "20px 20px 14px 20px",
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
  gap: 4,
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
