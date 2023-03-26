import { useEffect, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Photo } from "./PhotosCuratedList";

interface ApiResult {
  photosData: Photo[],
  loading: boolean,
  error: any,
  elementRef: any
}

export const useInfinitePhotos = (url: string, options?: RequestInit): ApiResult => {
  const [photosData, setPhotosData] = useState<Photo[]>([]);
  const [nextPage, setNextPage] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [fetchingMore, setFetchingMore] = useState(false);

  const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const firstEntry = entries[0];

    if (firstEntry.isIntersecting && nextPage && !fetchingMore) {
      fetchMoreItems();
    }
  }

  const elementRef = useIntersectionObserver(onIntersection);

  async function fetchFirstItems() {
    setLoading(true);

    try {
      const res = await fetch(url, options);
      const json = await res.json();

      setPhotosData(json.photos);
      setNextPage(json.next_page);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  async function fetchMoreItems() {
    setLoading(true);
    setFetchingMore(true);

    if (!nextPage) {
      setLoading(false);
      return;
    }

    if (nextPage) {
      try {
        const res = await fetch(nextPage, options);
        const json = await res.json();

        setPhotosData((prevPhotos) => [...prevPhotos, ...json.photos]);
        setNextPage(json.next_page);
        setLoading(false);
        setFetchingMore(false);
      } catch (e) {
        setError(e);
        setLoading(false);
        setFetchingMore(false);
      }
    }
  }

  useEffect(() => {
    fetchFirstItems();
  }, []);

  return {
    photosData,
    loading,
    error,
    elementRef
  }
}