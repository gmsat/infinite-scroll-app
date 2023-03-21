import React, { ReactNode, useEffect, useState } from 'react';
import { Photo } from "./PhotosCuratedList";
import styled from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";
import { extractStringFromUrl } from "../../helpers/helpers";
import { Flex } from "../common/Layout/Flex";
import { theme } from "../../assets/themes/theme";

interface PhotoItemProps {
  photo: Photo
}

const ImageContainer = styled.div({
  maxHeight: "300px",
  width: "400px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.20)"
});

const Image = styled.img({
  backgroundColor: "rgba(0,0,0,0.1)",
  width: "100%",
  height: "300px",
  objectFit: "cover"
});

const FavoriteButton = styled.button({
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

const Backdrop = styled.div({
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

const Title = styled.text({
  color: "white",
  fontWeight: "bold",
  fontSize: "1.6rem",
  textAlign: "center"
});

const Divider = styled.hr({
  borderTop: "2px solid white",
  width: "100px"
});

const PhotoAuthor = styled.text({
  color: "white",
  fontSize: "1.6rem",
  textAlign: "center"
});

interface FlexProps {
  children?: ReactNode,
  flexDirection?: "row" | "column"
}



const PhotoItem: React.FC<PhotoItemProps> = ({photo}) => {
  const {addToFavorites, photoInFavorites, removeFromFavoritesById} = useFavorites();
  const [showDetails, setShowDetails] = useState(false);
  const [photoTitle, setPhotoTitle] = useState<string>("");
  const [favoriteButtonState, setFavoriteButtonState] = useState(photoInFavorites(photo));

  const handleAddToFavorites = (photo: Photo) => {
    if (photoInFavorites(photo)) {
      return;
    }

    addToFavorites(photo);
    setFavoriteButtonState(photoInFavorites(photo));
  }

  const handleRemoveFromFavorites = (photo: Photo) => {
    removeFromFavoritesById(photo);
    setFavoriteButtonState(photoInFavorites(photo));
  }

  useEffect(() => {
    const titleFromUrl = extractStringFromUrl(photo.url, "photo/", "-");
    setPhotoTitle(titleFromUrl);
  }, []);

  function renderPhotoDetails() {
    return (
      <Backdrop>
        <Flex flexDirection={"column"} style={{position: "absolute", gap: 10, bottom: 0, paddingBottom: 24}}>
          <Flex flexDirection={"column"} padding={"20px"}>
            <Title>{photoTitle}</Title>
            <Divider/>
            <PhotoAuthor>{photo.photographer}</PhotoAuthor>
          </Flex>
          <Flex>
            {
              !photoInFavorites(photo)
                ? <FavoriteButton onClick={() => handleAddToFavorites(photo)}>Favourite</FavoriteButton>
                : <FavoriteButton onClick={() => handleRemoveFromFavorites(photo)}>Un-Favourite</FavoriteButton>
            }
          </Flex>
        </Flex>
      </Backdrop>
    );
  }

  return (
    <>
      <ImageContainer onPointerEnter={() => setShowDetails(true)} onPointerLeave={() => setShowDetails(false)}>
        <Image alt={photo.alt} src={photo.src.large}/>
        {showDetails && renderPhotoDetails()}
      </ImageContainer>
    </>
  );
};

export default PhotoItem;