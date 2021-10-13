import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Pokemons from "./components/advice";
import Funny from "./components/funny";

function App() {
  return (
    <section>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/advice">
          <Pokemons />
        </Route>
        <Route>
          <Funny path="/funny"/>
        </Route>
      </Switch>
    </section>
  );
}

export default App;
