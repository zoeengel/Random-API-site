import { useState, useEffect } from "react";

import Card from "../layout/Card";
import classes from "./advice.module.css";
import loader from "./loading.module.css";
import Description from "../layout/description";

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
      <div className={loader.loaderBox}>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className={classes.section}>
      <h1 className={classes.title}>Random Advice</h1>
      <Description />
      <Card>
        <div className={classes.advice}>
          {loadedAdvice.map((item) => (
            <p key={item.id}>{item.advice}</p>
          ))}
        </div>
      </Card>
      <br />
      <button className={classes.button} onClick={getAdvice}>
        Refresh
      </button>
    </div>
  );
};

export default Pokemons;
