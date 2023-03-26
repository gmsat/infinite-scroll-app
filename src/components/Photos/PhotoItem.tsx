import React from 'react';
import { Photo } from "./PhotosCuratedList";
import { usePhotoItem } from "./usePhotoItem";
import styled from "@emotion/styled";
import { theme } from "../../assets/themes/theme";
import { Flex, Fade } from "../common";

interface PhotoItemProps {
  photo: Photo
}

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

export const Img = styled('img')({
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute"
});

const ButtonResponsive = styled('button')`
  @container ${theme.breakpoints.device.mobileXs} {
    font-size: 0.8rem;
    margin-bottom: -10px;
    padding: 8px;
  }
  @container ${theme.breakpoints.device.mobile} {
    font-size: 1.5rem;
  }
  @container ${theme.breakpoints.device.tablet} {
    font-size: 1.2rem;
  }
  @container ${theme.breakpoints.device.laptop} {
    font-size: 1.2rem;
  }
  @container ${theme.breakpoints.device.desktop} {
    font-size: 1.4rem;
  }
  @container ${theme.breakpoints.device.desktopXl} {
    font-size: 1.4rem;
  }
`

export const FavoriteButton = styled(ButtonResponsive)({
  cursor: "pointer",
  borderRadius: "36px",
  padding: "12px 24px 10px 24px",
  backgroundColor: "rgba(0,0,0,0)",
  color: "white",
  fontFamily: "Roboto Condensed",
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

const ResponsiveTextSize = styled('text')`
@container ${theme.breakpoints.device.mobileXs} {
  font-size: 1.2rem
} @container ${theme.breakpoints.device.mobile} {
  font-size: 1.5rem
} @container ${theme.breakpoints.device.tablet} {
  font-size: 1.1rem
} @container ${theme.breakpoints.device.laptop} {
  font-size: 1.3rem
} @container ${theme.breakpoints.device.desktop} {
  font-size: 1.4rem
} @container ${theme.breakpoints.device.desktopXl} {
  font-size: 1.4rem
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

export const Image = ({photo}: {photo: Photo}) => {
  return (
    <picture>
      <source srcSet={`
                ${photo.src.medium} 240w, 
                ${photo.src.large} 480w,
                ${photo.src.large2x} 1280w`}/>
      <Img loading={"lazy"} src={photo.src.large} alt={photo.alt}/>
    </picture>
  )
}

export const PhotoItem: React.FC<PhotoItemProps> = ({photo}) => {
  const {
    handleRemoveFromFavorites,
    handleAddToFavorites,
    setShowDetails,
    showDetails,
    photoTitle,
    favoriteButtonState
  } = usePhotoItem(photo);

  function renderPhotoDetails() {
    return (
      <Backdrop>
        <Flex flexDirection={"column"} style={{justifyContent: "flex-end", height: "100%", gap: 10}}>
          <Flex flexDirection={"column"} style={{height: "100%", position: "absolute"}}>
            <Title>{photoTitle}</Title>
            <Divider/>
            <PhotoAuthor>{photo.photographer}</PhotoAuthor>
          </Flex>
          <Flex style={{position: "absolute", bottom: 28}}>
            {
              !favoriteButtonState
                ? <FavoriteButton onClick={() => handleAddToFavorites(photo)}>Favorite</FavoriteButton>
                : <FavoriteButton onClick={() => handleRemoveFromFavorites(photo)}>Un-favorite</FavoriteButton>
            }
          </Flex>
        </Flex>
      </Backdrop>
    );
  }

  return (
    <>
      <PhotoCard shadow={"primary"} onPointerEnter={() => setShowDetails(true)}
                 onPointerLeave={() => setShowDetails(false)}>
        <Image photo={photo}/>
        <Fade show={showDetails}>
          {renderPhotoDetails()}
        </Fade>
      </PhotoCard>
    </>
  );
};
