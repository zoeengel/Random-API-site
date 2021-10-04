import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <section>
        <h3>Loading...</h3>
      </section>
    );
  }

  return (
    <section>
      <h1>Click the button for a Random piece of advice</h1>
      <Link to="/">Home</Link>
      <button onClick={getAdvice}>random</button>
      {/* <pre>{JSON.stringify(loadedAdvice, null, 2)}</pre> */}
      <div>
        <ul>
          {loadedAdvice.map((item) => (
            <li key={item.id}>{item.advice}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pokemons;
