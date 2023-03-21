import React, { useState } from 'react';
import { Photo } from "./PhotosCuratedList";
import styled from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";

interface ModalPhotoItemProps {
  photo: Photo,
  handleRemoveFromFavorites: (photo: Photo) => void
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

const ModalPhotoItem: React.FC<ModalPhotoItemProps> = ({photo, handleRemoveFromFavorites}) => {
  const {removeFromFavoritesById} = useFavorites();
  const [showDetails, setShowDetails] = useState(false);

  function renderAddToFavorites() {
    return (
      <div style={{display: "flex", flexFlow: "column", width: "50%", gap: 4, height: "100%", position: "absolute", top: "50%", left: "50%"}}>
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

export default ModalPhotoItem;