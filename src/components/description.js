import classes from "./description.module.css";

const Description = () => {
    return <div className={classes.card}>
        <p className={classes.text}>
            To see your random advice, click on the "Click me" button.
        </p>
    </div>
};

export default Description;