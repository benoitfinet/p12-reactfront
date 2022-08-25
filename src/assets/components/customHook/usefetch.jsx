import { useState, useEffect } from "react";

const useFetch = (url, loading = 1000) => {

      const [data, setData] = useState(null);
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
          fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setTimeout(() => {
                setData(data)
            setIsLoading(false)
            }, loading);
          })
          .catch((err) => console.log(err));
      }, [url, loading]);

      return [data, isLoading];
};

export default useFetch;