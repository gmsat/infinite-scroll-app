import { Photo } from "../components/Photos/PhotosCuratedList";
import { useState } from "react";

export const useFavorites = () => {
  const [favoritesStorage, setFavoritesStorage] = useState<Photo[]>([]);

  const getFavorites = (): Photo[] => {
    const favoritesJson = localStorage.getItem('favorites');

    if (favoritesJson) {
      return JSON.parse(favoritesJson);
    }

    return [];
  }

  const photoInFavorites = (photo: Photo): boolean => {
    const favorites = getFavorites();
    const photoExists = favorites.find((p) => p.id === photo.id);

    if (photoExists) {
      return true;
    }

    return false;
  }

  const addToFavorites = (photo: Photo) => {
    const favorites = getFavorites();
    favorites.push(photo);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // TODO: get specific item by id to remove from favorites
  const removeFromFavoritesById = (photo: Photo) => {
    const favorites = getFavorites();
    const photoExists = favorites.find((p) => p.id === photo.id);

    if (photoExists) {
      const filtered = favorites.filter((p) => p.id !== photo.id);
      localStorage.setItem('favorites', JSON.stringify(filtered));
    }
  }

  const clearFavorites = () => {
    localStorage.removeItem('favorites');
  }

  const setAllFavoritePhotos = (photos: Photo[]) => {
    localStorage.setItem('favorites', JSON.stringify(photos));
  }

  return {
    getFavorites,
    addToFavorites,
    clearFavorites,
    photoInFavorites,
    removeFromFavoritesById,
    setAllFavoritePhotos,
    favoritesStorage}
}