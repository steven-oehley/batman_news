import { useEffect, useState, useCallback } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUrl = useCallback(
    async (controller) => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Error fetching data - Error:" + response.statusText);
        }
        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
          setIsLoading(false);
        }
      }
    },
    [url]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchUrl(controller);
    return () => {
      controller.abort();
    };
  }, [fetchUrl]);

  return { data, isLoading, error };
}
