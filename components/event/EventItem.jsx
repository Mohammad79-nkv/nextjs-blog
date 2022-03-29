import Link from "next/link";

const EventItem = (props) => {
  const {image, title, id, date, location } = props;

  const formatedLocation = location.replace(",", "\n");
  const formatedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/event/${id}`;
  return (
    <li>
      <img src={"/" + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formatedDate}</time>
          </div>
          <div>
            <address>{formatedLocation}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>explore</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
