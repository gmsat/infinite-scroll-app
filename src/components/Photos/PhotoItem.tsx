import React from 'react';
import { Photo } from "./PhotosCuratedList";
import { Flex } from "../common/Layout/Flex";
import { Backdrop, Divider, FavoriteButton, Image, PhotoAuthor, PhotoCard, Title } from "./ImageItemStyles";
import { Fade } from "../common/Transitions/Fade";
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
      <PhotoCard shadow={"primary"} onPointerEnter={() => setShowDetails(true)} onPointerLeave={() => setShowDetails(false)}>
        <Image alt={photo.alt} src={photo.src.large}/>
        <Fade show={showDetails}>
          {renderPhotoDetails()}
        </Fade>
      </PhotoCard>
    </>
  );
};

export default PhotoItem;