import { Photo } from "../components/Photos/PhotosCuratedList";

export const useFavorites = () => {

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

  // TODO: check if item already exists in favorites, don't add the item to favorites if it's already there
  const addToFavorites = (photo: Photo) => {
    const favorites = getFavorites();
    favorites.push(photo);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // TODO: get specific item by id to remove from favorites
  // const removeFromFavorites = (photo: Photo) => {
  //   const favorites = getFavorites();
  //
  //   const index = favorites.findIndex(f => f.id === photo.id);
  //
  //   if (index !== -1) {
  //     favorites.splice(index, 1);
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  //   }
  // }

  // const removeFromFavorites = (photo: Photo) => {
  //   const favorites = getFavorites();
  //
  //   const index = favorites.findIndex(f => f.id === photo.id);
  //
  //   if (index !== -1) {
  //     favorites.splice(index, 1);
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  //   }
  // }

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

  return {getFavorites, addToFavorites, clearFavorites, photoInFavorites, removeFromFavoritesById}
}