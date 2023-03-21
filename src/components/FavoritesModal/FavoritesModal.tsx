import React, { MouseEventHandler, useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useFavorites } from "../../hooks/useFavorites";
import { Photo } from "../Photos/PhotosCuratedList";
import { PhotoItem } from "../index";
import { ModalPhotoItem } from "../index";
import Modal from "../common/Modal/Modal";

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

const FavoritesModal = ({open, onClose}: {open: boolean, onClose: MouseEventHandler<HTMLDivElement>}) => {
  const {getFavorites, clearFavorites, addToFavorites, removeFromFavoritesById, setAllFavoritePhotos} = useFavorites();
  const [favorites, setFavorites] = useState<Photo[]>(getFavorites());

  const removeFromFavorites = (photo: Photo) => {
    const p = favorites.find((p) => p.id === photo.id);

    if (p) {
      const filtered = favorites.filter((p) => p.id !== photo.id);
      setFavorites(filtered);
      setAllFavoritePhotos(filtered);
    }
  }

  const clearFavoritePhotos = () => {
    setFavorites([]);
    clearFavorites();
  }

  useEffect(() => {
    const items = getFavorites();

    if (items) {
      setFavorites(items);
    }
  }, [open]);

  return (
    <Modal onClose={onClose} open={open}>
      <div style={{display: "flex", flexWrap: "wrap", gap: 10, border: "solid black 1px", padding: 12}}>
        {favorites.map((p, index) => (
          <ModalPhotoItem photo={p} handleRemoveFromFavorites={() => removeFromFavorites(p)}/>
        ))}
      </div>
    </Modal>
  );
};

export default FavoritesModal;