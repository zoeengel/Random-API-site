import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Pokemons from "./components/advice";
import Funny from "./components/funny";

import Navigation from "./components/layout/Navigation";
import CatFacts from "./components/cat";

function App() {
  return (
    <section>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/advice">
          <Pokemons />
        </Route>
        <Route path="/funny">
          <Funny />
        </Route>
        <Route path="/cat-fact">
          <CatFacts />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
