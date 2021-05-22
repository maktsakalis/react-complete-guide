import "./Card.css";

const Card = (props) => {
  const classes = [];
  classes.push("card");
  classes.push(props.className);

  return <div className={classes.join(" ")}>{props.children}</div>;
};

export default Card;
