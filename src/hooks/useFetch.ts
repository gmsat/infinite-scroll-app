import { useCallback, useEffect, useState } from 'react';

export function useFetch<T>(_url: string, _options?: RequestInit, _fetchOnLoad: boolean = false, _log: boolean = false) {
  const [data, setData] = useState<null | T>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | any>(null);

  const fetchData = useCallback(async () => {
    setData(null);
    setLoading(true);

    try {
      const response = await fetch(_url, _options);
      const data = await response.json();

      if (data) {
        setData(data);
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setError(e as any);
      setLoading(false);
    }
  }, [_url, _options]);

  const reFetch = useCallback(() => {
    fetchData().catch(e => console.log(e));
  }, [fetchData]);

  const clearData = () => setData(null);

  useEffect(() => {
    if (_fetchOnLoad) {
      reFetch();
    }
  }, []);

  return {data, loading, error, reFetch, clearData};
}