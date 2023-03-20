import React, { useEffect, useState } from 'react';
import styled from "@emotion/styled";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useFavorites } from "../../hooks/useFavorites";
import { Photo } from "../Photos/PhotosCuratedList";

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

const FavoritesModal = ({open}: {open: boolean}) => {
  const {getFavorites, clearFavorites, addToFavorites, removeFromFavoritesById} = useFavorites();
  const [favorites, setFavorites] = useState<Photo[]>([]);

  const Modal = styled.div({
    zIndex: 100,
    width: "60%",
    height: "80%",
    position: "absolute",
    backgroundColor: "white",
    border: "solid black 1px",
    padding: 12,
    visibility: open ? "visible" : "hidden"
  });

  // show local storage items
  useEffect(() => {
    const items = getFavorites();
    if (items) {
      setFavorites(items);
    }
  }, []);

  return (
    <Modal>
      <button onClick={clearFavorites}>Clear local storage</button>
      <div style={{display: "flex", flexWrap: "wrap", gap: 10, border: "solid black 1px", padding: 12}}>
        {JSON.stringify(favorites)}
      </div>
    </Modal>
  );
};

export default FavoritesModal;