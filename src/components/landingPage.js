import classes from "./landingPage.module.css";
import { Link } from "react-router-dom";

import bookImage from "./images/hand-book.png";

const LandingPage = () => {
  return (
    <div className={classes.section}>
      <div className={classes.main}>
        <img
          className={classes.image}
          src={bookImage}
          alt="books"
          width="450"
          height="550"
        />
      </div>
      <div className={classes.main}>
        <div className={classes.landingActions}>
          <h1 className={classes.title}>Random Advice Generator</h1>
          <p>
            Bored and looking for random ass advice? Well you're just a click
            away.
          </p>
        </div>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#318061",
            padding: "1em 2.5em",
            borderRadius: "7px",
          }}
          to="/advice"
        >
          Lets go
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
