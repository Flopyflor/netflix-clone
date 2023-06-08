import { useState, useEffect } from "react";

const useFetch = (service, mapper) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [refresh, setRefresh] = useState(false);
  const refetch = () => setRefresh(!refresh);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await service();

        if (!response.ok ) {
          throw new Error("Algo salió mal");
        }

        const data = await response.json();
        
        setData(mapper(data));
      } catch (err) {
        console.log("Error al cargar:", err)
        setError("Algo salió mal", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
