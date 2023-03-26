import React, { MouseEventHandler, useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";
import { Photo, PhotosContainer, PhotosGrid } from "../Photos/PhotosCuratedList";
import { ModalPhotoItem } from "../index";
import { Modal } from "../common";

const BigText = styled('div')({
  fontSize: "3.4rem",
  textAlign: "center"
});

interface FavoritesModalProps {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({open, onClose}) => {
  const {getFavorites, clearFavorites, setAllFavoriteKeyItems} = useFavorites('favorites');
  const [favorites, setFavorites] = useState<Photo[]>(getFavorites());

  const removeFromFavorites = (photo: Photo) => {
    const p = favorites.find((p) => p.id === photo.id);

    if (p) {
      const filtered = favorites.filter((p) => p.id !== photo.id);
      setFavorites(filtered);
      setAllFavoriteKeyItems(filtered);
    }
  }

  function renderFavorites() {
    return (
      <PhotosContainer>
        <PhotosGrid>
          {favorites.map((p, index) => (
            <ModalPhotoItem key={index} photo={p} removePhotoItem={() => removeFromFavorites(p)}/>
          ))}
        </PhotosGrid>
      </PhotosContainer>
    )
  }

  function renderIfFavoritesEmpty() {
    return (
      <div style={{
        height: "70vh",
        maxHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
      }}>
        <BigText>No favorites saved!</BigText>
      </div>
    )
  }

  useEffect(() => {
    const items = getFavorites();

    if (items) {
      setFavorites(items);
    }
  }, [open]);

  return (
    <Modal onClose={onClose} open={open} title={"Favorites"}>
      <>
        {favorites.length > 0
          ? renderFavorites()
          : renderIfFavoritesEmpty()
        }
      </>
    </Modal>
  );
};
