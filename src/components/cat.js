import { useState, useEffect } from "react";
import classes from "./advice.module.css";

import Description from "./description";
import Card from "./Card";

const CatFacts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFact, setLoadedFact] = useState([]);

  const getFact = () => {
    fetch("https://catfact.ninja/fact?max_length=140")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedFact(data);
      });
  };
  useEffect(() => {
    getFact();
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
      <h1 className={classes.title}>Cat Facts</h1>
      <Description />
      <Card>
        <div className={classes.jokes}>
          <p>{loadedFact.fact}</p>
        </div>
      </Card>
      <br />
      <button className={classes.button} onClick={getFact}>
        New fact
      </button>
    </div>
  );
};

export default CatFacts;
