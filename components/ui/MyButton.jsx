import  Link  from "next/link";
import classes from "./Button.module.css";

const MyButton = (props) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default MyButton;
