import AddressIcon from "../icon/address-icon";
import ArrowRightIcon from "../icon/arrow-right-icon";
import DateIcon from "../icon/date-icon";
import Link from "next/link";
import MyButton from "../ui/MyButton";
import classes from "./event-item.module.css";

const EventItem = (props) => {
  const { image, title, id, date, location } = props;

  const formatedLocation = location.replace(",", "\n");
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/event/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{formatedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formatedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <MyButton link={exploreLink}>
            <span>Explore</span>
            <span className={classes.icon}><ArrowRightIcon/></span>
          </MyButton>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
