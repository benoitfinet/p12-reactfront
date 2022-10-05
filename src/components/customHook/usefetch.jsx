import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

/**
 * A custom hook to fetch data from an url in a component
 * @param {string} url : url of the data we want to fetch
 * @param {string} Factory : factory pattern to use constructor pattern
 * @param {string} type : define the type of the API, in case we had to change API
 * @param {number} loading : set manually the timer of the loader component
 * @param {boolean} err : set the error message
 * @return the data matching the factory and model
 * @return the booleen for the loader
 * @return the booleen for the error
 */
const useFetch = (url, Factory, type, loading = 1000, err) => {

  const [activityData, setActivityData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        setTimeout(() => {
          const sessionData = new Factory(result.data, type);
          setActivityData(sessionData)
          setIsLoaded(true);
        }, loading);

      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
        console.error(err);
      })

  }, [url, Factory, type, loading, err]);

  return [activityData, isLoaded, error];
};

//PropTypes for url, Factory, type, loading, err
useFetch.propTypes = {
  url: PropTypes.string,
  Factory: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.number,
  err: PropTypes.booleen
}

export default useFetch;