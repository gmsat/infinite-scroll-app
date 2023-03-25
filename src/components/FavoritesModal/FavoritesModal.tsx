import React, { MouseEventHandler, useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";
import { Photo } from "../Photos/PhotosCuratedList";
import { PhotoItem } from "../index";
import { ModalPhotoItem } from "../index";
import Modal from "../common/Modal/Modal";
import { Flex } from "../index";
import { Fade } from "../common/Transitions/Fade";
import { inlineSizeContainer } from "../common/Modal/Modal";
import { PhotosContainer } from "../Photos/PhotosCuratedList";
import { PhotosGrid } from "../Photos/PhotosCuratedList";

const photoItem = {
  "id": 2880507,
  "width": 4000,
  "height": 6000,
  "url": "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
  "photographer": "Deden Dicky Ramdhani",
  "photographer_url": "https://www.pexels.com/@drdeden88",
  "photographer_id": 1378810,
  "avg_color": "#7E7F7B",
  "src": {
    "original": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg",
    "large2x": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "large": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "medium": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=350",
    "small": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
    "portrait": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "landscape": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "tiny": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
  },
  "liked": false,
  "alt": "Brown Rocks During Golden Hour"
}

const BigText = styled('div')({
  fontSize: "3.4rem",
  textAlign: "center"
});

interface FavoritesModalProps {
  open: boolean,
  onClose: MouseEventHandler<HTMLDivElement>
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({open, onClose}) => {
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

  const clearFavoritePhotos = () => {
    setFavorites([]);
    clearFavorites();
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
      <div style={{height: "70vh", maxHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto"}}>
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

export default FavoritesModal;