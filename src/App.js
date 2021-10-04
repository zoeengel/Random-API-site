import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Pokemons from "./components/advice";

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
      </Switch>
    </section>
  );
}

export default App;
