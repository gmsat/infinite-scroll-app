export const useFavorites = <T extends {id: string | number}>(storageKey: string) => {
  const getFavorites = (): T[] => {
    const favoritesJson = localStorage.getItem(storageKey);

    if (favoritesJson) {
      return JSON.parse(favoritesJson);
    }

    return [];
  }

  const itemInFavorites = (item: T): boolean => {
    const favorites = getFavorites();
    const photoExists = favorites.find((i) => i.id === item.id);

    if (photoExists) {
      return true;
    }

    return false;
  }

  const addToFavorites = (item: T) => {
    const favorites = getFavorites();
    favorites.push(item);
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  }

  const removeFromFavoritesById = (item: T) => {
    const favorites = getFavorites();
    const photoExists = favorites.find((i) => i.id === item.id);

    if (photoExists) {
      const filtered = favorites.filter((i) => i.id !== item.id);
      localStorage.setItem(storageKey, JSON.stringify(filtered));
    }
  }

  const clearFavorites = () => {
    localStorage.removeItem(storageKey);
  }

  const setAllFavoriteKeyItems = (items: T[]) => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }

  return {
    getFavorites,
    addToFavorites,
    clearFavorites,
    itemInFavorites,
    removeFromFavoritesById,
    setAllFavoriteKeyItems
  }
}