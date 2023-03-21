import React, { ReactNode, useEffect, useState } from 'react';
import { Photo } from "./PhotosCuratedList";
import styled from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";
import { extractStringFromUrl } from "../../helpers/helpers";
import { Flex } from "../common/Layout/Flex";
import { theme } from "../../assets/themes/theme";
import { ImageContainer, Image, PhotoAuthor, Title, Backdrop, Divider, FavoriteButton } from "./ImageItemStyles";

interface PhotoItemProps {
  photo: Photo
}

const FavoritePhotoItem: React.FC<PhotoItemProps> = ({photo}) => {
  const {addToFavorites, photoInFavorites, removeFromFavoritesById} = useFavorites();
  const [showDetails, setShowDetails] = useState(false);
  const [photoTitle, setPhotoTitle] = useState<string>("");
  const [favoriteButtonState, setFavoriteButtonState] = useState(false);

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

  useEffect(() => {
    setFavoriteButtonState(photoInFavorites(photo));
  }, [showDetails]);

  function renderOnHover() {
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
              !favoriteButtonState
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
        {showDetails && renderOnHover()}
      </ImageContainer>
    </>
  );
};

export default FavoritePhotoItem;