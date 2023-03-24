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

export const PhotoCard = styled(Card)`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: clip;
  border-radius: 8px;
  position: relative;
`

export const Image = styled('img')({
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute"
});

const ButtonResponsive = styled('button')`
  @media ${theme.breakpoints.device.mobile} {
    font-size: 1.5rem;
  }
  @media ${theme.breakpoints.device.tablet} {
    font-size: 1.1rem;
  }
  @media ${theme.breakpoints.device.laptop} {
    font-size: 1.3rem;
  }
  @media ${theme.breakpoints.device.desktop} {
    font-size: 1.4rem;
  }
  @media ${theme.breakpoints.device.desktopXl} {
    font-size: 1.5rem;
  }
`

export const FavoriteButton = styled(ButtonResponsive)({
  // zIndex: 2,
  cursor: "pointer",
  borderRadius: "36px",
  padding: "12px 24px 10px 24px",
  backgroundColor: "rgba(0,0,0,0)",
  color: "white",
  fontFamily: "Roboto Condensed",
  // fontSize: "1.4rem",
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

// export const Title = styled('text')({
//   color: "white",
//   fontWeight: "bold",
//   fontSize: "1.6rem",
//   textAlign: "center"
// });

const ResponsiveTextSize = styled('text')`
  @container ${theme.breakpoints.device.mobile} {
    font-size: ${theme.breakpoints.fontSize.mobile}
  }
  @container ${theme.breakpoints.device.tablet} {
    font-size: ${theme.breakpoints.fontSize.tablet}
  }
  @container ${theme.breakpoints.device.laptop} {
    font-size: ${theme.breakpoints.fontSize.laptop}
  }
  @container ${theme.breakpoints.device.desktop} {
    font-size: ${theme.breakpoints.fontSize.desktop}
  }
  @container ${theme.breakpoints.device.desktopXl} {
    font-size: ${theme.breakpoints.fontSize.desktopXl}
  }
`

export const Title = styled(ResponsiveTextSize)`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const PhotoAuthor = styled(ResponsiveTextSize)({
  color: "white",
  textAlign: "center",
  fontStyle: "italic"
});

export const Divider = styled('hr')({
  borderTop: "2px solid white",
  width: "100px"
});
