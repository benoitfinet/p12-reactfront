import { useState, useEffect } from "react";

/**
 * @param {string} url
 * @param {number} loading
 * @param {booleen} err
 * Composant à utiliser sur une autre page ou un autre composant pour faire un fetch de données
 * exemple : "const [infoUser, isLoading, err] = useFetch(`http://localhost:3000/user/${id}/performance`, 700, false)"
 */

const useFetch = (url, loading = 1000, err) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataError, setDataError] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data)
          setIsLoading(false)
        }, loading);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
        setDataError(true)
      })

  }, [url, loading, err]);

  return [data, isLoading, dataError];
};

export default useFetch;