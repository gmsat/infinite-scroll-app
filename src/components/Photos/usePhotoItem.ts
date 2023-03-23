import { useFavorites } from "../../hooks/useFavorites";
import { useEffect, useState } from "react";
import { Photo } from "./PhotosCuratedList";
import { extractStringFromUrl } from "../../helpers/helpers";

export const usePhotoItem = (photo: Photo) => {
  const {addToFavorites, itemInFavorites, removeFromFavoritesById} = useFavorites('favorites');

  const [showDetails, setShowDetails] = useState(false);
  const [photoTitle, setPhotoTitle] = useState<string>("");
  const [favoriteButtonState, setFavoriteButtonState] = useState(false);

  const handleAddToFavorites = (photo: Photo) => {
    if (itemInFavorites(photo)) {
      return;
    }

    addToFavorites(photo);
    setFavoriteButtonState(itemInFavorites(photo));
  }

  const handleRemoveFromFavorites = (photo: Photo) => {
    removeFromFavoritesById(photo);
    setFavoriteButtonState(itemInFavorites(photo));
  }

  useEffect(() => {
    const titleFromUrl = extractStringFromUrl(photo.url, "photo/", "-");
    setPhotoTitle(titleFromUrl);
  }, [photo]);

  useEffect(() => {
    setFavoriteButtonState(itemInFavorites(photo));
  }, [showDetails]);

  return {
    handleAddToFavorites,
    handleRemoveFromFavorites,
    showDetails, setShowDetails,
    photoTitle, setPhotoTitle,
    favoriteButtonState, setFavoriteButtonState
  }
}