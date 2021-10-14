import { useState, useEffect } from "react";
import classes from "./advice.module.css";

import Description from "./description";
import Card from "./Card";

const Funny = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFunny, setLoadedFunny] = useState([]);

  const getFunny = () => {
    fetch("https://v2.jokeapi.dev/joke/pun?type=twopart")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const funnypuns = [];
        for (const key in json) {
          const funnypun = {
            id: key,
            ...json[key],
          };

          funnypuns.push(funnypun);
        }
        console.log(json);
        setIsLoading(false);
        setLoadedFunny(funnypuns);
      });
  };
  useEffect(() => {
    getFunny();
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
      <h1 className={classes.title}>Funny Puns</h1>
      <Description />
      <Card>
        <div className={classes.advice}>
          {loadedFunny.map((items) => (
            <p key={items.id}>
              {items.setup}
              {items.deliver}
            </p>
          ))}
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
