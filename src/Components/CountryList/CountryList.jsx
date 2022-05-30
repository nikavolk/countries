import CountryCard from "../CountryCard/CountryCard";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const CountryList = ({ filteredResults, setCountry }) => {
  // catch errors
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountry(result);
        }, //handle error instead of catch block not to swallow exceptions
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        {filteredResults.map((country) => (
          <CountryCard country={country} key={nanoid()} />
        ))}
      </div>
    );
  }
};

export default CountryList;
