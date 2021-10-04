import classes from "./landingPage.module.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <main className={classes.main}>
        <h1>Random Advice Generator</h1>
        <Link to='/advice'>Lets Go!</Link>
      </main>
    </div>
  );
};

export default LandingPage;
