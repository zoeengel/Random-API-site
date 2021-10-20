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
          <h1 className={classes.title}>
            Random <span className={classes.titleMobile}>Advice,</span> <span className={classes.titleMobile}>Jokes</span> and <span className={classes.titleMobile}>Cat Fact</span> Generator
          </h1>
          <p className={classes.desc}>Just something to pass the time.</p>
          
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
      {/* <div className={classes.main}>
        <div className={classes.landingActions}>
          <h1 className={classes.title}>Random Jokes Generator</h1>
          <p className={classes.desc}>From dark humour to innocent puns.</p>
        </div>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#318061",
            padding: "1em 2.5em",
            borderRadius: "7px",
          }}
          to="/funny"
        >
          Lets go
        </Link>
      </div>
      <div className={classes.main}>
        <div className={classes.landingActions}>
          <h1 className={classes.title}>Random Cat Fact Generator</h1>
          <p className={classes.desc}>Wanna find ourt more about cats?</p>
        </div>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#318061",
            padding: "1em 2.5em",
            borderRadius: "7px",
          }}
          to="/cat-fact"
        >
          Lets go
        </Link>
      </div> */}
    </div>
  );
};

export default LandingPage;
