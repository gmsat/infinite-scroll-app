import React, { ReactNode, useEffect, useState } from 'react';
import { Photo } from "./PhotosCuratedList";
import styled, { CSSObject } from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";
import { extractStringFromUrl } from "../../helpers/helpers";
import { Flex } from "../common/Layout/Flex";
import { theme } from "../../assets/themes/theme";
import { Card, Image, PhotoAuthor, Title, Backdrop, Divider, FavoriteButton } from "./ImageItemStyles";
import { Fade } from "../common/Transitions/Fade";
import { PhotoCard } from "./ImageItemStyles";
import { usePhotoItem } from "./usePhotoItem";

interface PhotoItemProps {
  photo: Photo
}

const PhotoItem: React.FC<PhotoItemProps> = ({photo}) => {
  const {
    handleRemoveFromFavorites,
    handleAddToFavorites,
    setShowDetails, showDetails,
    photoTitle,
    favoriteButtonState } = usePhotoItem(photo);

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
      <PhotoCard shadow={"primary"} onPointerEnter={() => setShowDetails(true)} onPointerLeave={() => setShowDetails(false)}>
        <Image loading={"lazy"} alt={photo.alt} src={photo.src.large}/>
        <Fade show={showDetails}>
          {renderOnHover()}
        </Fade>
      </PhotoCard>
    </>
  );
};

export default PhotoItem;