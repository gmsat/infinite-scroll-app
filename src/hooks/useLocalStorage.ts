export const useLocalStorage = () => {
  const setItem = (key: string, item: string) => localStorage.setItem(key, item);
  const removeItem = (key: string) => localStorage.removeItem(key);
  const getItem = (key: string) => {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }
  }

  return {setItem, removeItem, getItem};
}