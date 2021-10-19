import { useState, useEffect } from "react";
import classes from "./advice.module.css";
import loader from "./loading.module.css"

import Description from "./description";
import Card from "./Card";

const Funny = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFunny, setLoadedFunny] = useState([]);

  const getFunny = () => {
    fetch("https://v2.jokeapi.dev/joke/any?type=twopart")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedFunny(data);
      });
  };
  useEffect(() => {
    getFunny();
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
      <h1 className={classes.title}>Random Jokes</h1>
      <Description />
      <Card>
        <div className={classes.jokes}>
          <p>{loadedFunny.setup}</p>
          <p>{loadedFunny.delivery}</p>
        </div>
      </Card>
      <br />
      <button className={classes.button} onClick={getFunny}>
        Get a new Joke
      </button>
    </div>
  );
};

export default Funny;
