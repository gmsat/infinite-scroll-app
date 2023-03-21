import React from 'react';
import styled from "@emotion/styled";

export const ImageContainer = styled('div')({
  maxHeight: "300px",
  width: "400px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.20)"
});

export const Image = styled('img')({
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "100%",
  height: "300px",
  objectFit: "cover"
});

export const FavoriteButton = styled('button')({
  zIndex: 2,
  top: "50%",
  left: "50%",
  cursor: "pointer",
  borderRadius: "36px",
  padding: "20px 20px 14px 20px",
  backgroundColor: "rgba(0,0,0,0)",
  color: "white",
  fontWeight: "bold",
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

export const Divider = styled('hr')({
  borderTop: "2px solid white",
  width: "100px"
});

export const PhotoAuthor = styled('text')({
  color: "white",
  fontSize: "1.6rem",
  textAlign: "center"
});