import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Random Shit</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/advice">Advice</Link>
          </li>
          {/* <li>
            <Link to="/funny">Jokes</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
