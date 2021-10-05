import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import classes from "./advice.module.css";

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAdvice, setLoadedAdvice] = useState([]);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const advices = [];
        for (const key in json) {
          const advice = {
            id: key,
            ...json[key],
          };

          advices.push(advice);
        }
        console.log(json);
        setIsLoading(false);
        setLoadedAdvice(advices);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className={classes.section}>
      <Link to="/">Home</Link>
      <button onClick={getAdvice}>random</button>
      <div>
        <ul>
          {loadedAdvice.map((item) => (
            <li key={item.id}>{item.advice}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemons;
