import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/landingPage";
import Pokemons from "./components/pages/advice";
import Funny from "./components/pages/funny";
import CatFacts from "./components/pages/cat";
import Navigation from "./components/layout/Navigation";


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
