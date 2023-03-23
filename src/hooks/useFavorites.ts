export const useFavorites = (storageKey: string) => {
  const getFavorites = () => {
    const favoritesJson = localStorage.getItem(storageKey);

    if (favoritesJson) {
      return JSON.parse(favoritesJson);
    }

    return [];
  }

  const itemInFavorites = (item: any): boolean => {
    const favorites: any[] = getFavorites();
    const photoExists = favorites.find((i) => i.id === item.id);

    if (photoExists) {
      return true;
    }

    return false;
  }

  const addToFavorites = (item: any) => {
    const favorites = getFavorites();
    favorites.push(item);
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  }

  const removeFromFavoritesById = (item: any) => {
    const favorites: any[] = getFavorites();
    const photoExists = favorites.find((i) => i.id === item.id);

    if (photoExists) {
      const filtered = favorites.filter((i) => i.id !== item.id);
      localStorage.setItem(storageKey, JSON.stringify(filtered));
    }
  }

  const clearFavorites = () => {
    localStorage.removeItem(storageKey);
  }

  const setAllFavoriteKeyItems = (items: any[]) => {
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