import Link from "next/link";
import classes from "./Button.module.css";

const MyButton = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button type={props.type} onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default MyButton;
