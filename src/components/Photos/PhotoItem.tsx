import React, { useState } from 'react';
import { Photo } from "./PhotosCuratedList";
import styled from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";

interface PhotoItemProps {
  photo: Photo
}

const Image = styled.img({
  backgroundColor: "rgba(0,0,0,0.1)",
  padding: "10px",
  width: "100%",
  position: "relative",
  ':hover': {
    backgroundColor: "red"
  }
});

const FavoriteButton = styled.button({
  zIndex: 2,
  top: "50%",
  left: "50%"
});

const PhotoItem: React.FC<PhotoItemProps> = ({photo}) => {
  const {addToFavorites, getFavorites, clearFavorites, photoInFavorites, removeFromFavoritesById} = useFavorites();

  const [showDetails, setShowDetails] = useState(false);

  const handleAddToFavorites = (photo: Photo) => {
    if (photoInFavorites(photo)) {
      return;
    }

    addToFavorites(photo);
  }

  const handleRemoveFromFavorites = (photo: Photo) => {
    removeFromFavoritesById(photo);
  }

  function renderAddToFavorites() {
    return (
      <div style={{display: "flex", flexFlow: "column", width: "50%", gap: 4, height: "100%", position: "absolute", top: "50%", left: "50%"}}>
        <FavoriteButton onClick={() => handleAddToFavorites(photo)}>Add to favorites</FavoriteButton>
        <button onClick={() => handleRemoveFromFavorites(photo)}>Remove from favorites</button>
        <button>{photo.id}</button>
      </div>
    )
  }

  return (
    <>
      <div onPointerEnter={() => setShowDetails(true)} onPointerLeave={() => setShowDetails(false)} style={{position: "relative"}}>
        <Image  src={photo.src.medium}/>
        {showDetails && renderAddToFavorites()}
      </div>
    </>

  );
};

export default PhotoItem;