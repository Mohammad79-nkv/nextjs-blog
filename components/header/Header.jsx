import Link from "next/link";
import classes from "./main-header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href ="/">NextEvent</Link>
      </div>
      <div className={classes.navigation}>
        <Link href="/event/">
          <a>Browse All Events</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
