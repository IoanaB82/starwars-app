import { useState, useEffect, useRef } from "react";

const baseUrl = "https://swapi.dev/api";

//https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/
const useFetch = (url) => {
  const cache = useRef({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //  let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      setIsLoading(true);
      if (cache.current[baseUrl + url]) {
        const data = cache.current[baseUrl + url];

        setData(data);
        console.log(data);
        setIsLoading(false);
      } else {
        try {
          const response = await fetch(baseUrl + url);
          const data = await response.json();
          cache.current[baseUrl + url] = data;
          //  if(cancelRequest) return;
          setData(data);
          console.log(data);
          setIsLoading(false);
        } catch (error) {
          // if(cancelRequest) return;
          setError(error);
          throw error;
        }
      }
    };

    fetchData();

    return () => {
      //    cancelRequest = true;
    };
  }, [url]);

  return { data, isLoading, error };

  /* const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, isLoading };*/
};

export default useFetch;
