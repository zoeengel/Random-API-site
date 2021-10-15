import { useState, useEffect } from "react";
import classes from "./advice.module.css";

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
  // const [loadedFunny, setLoadedFunny] = useState([]);

  // const getFunny = () => {
  //   fetch("https://v2.jokeapi.dev/joke/pun?type=twopart")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       const funnypuns = [];
  //       for (const key in json) {
  //         const funnypun = {
  //           id: key,
  //           ...json[key],
  //         };

  //         funnypuns.push(funnypun);
  //       }
  //       console.log(json);
  //       console.log(json.setup);
  //       setIsLoading(false);
  //       setLoadedFunny(funnypuns);
  //     });
  // };
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
      <h1 className={classes.title}>Humour</h1>
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
