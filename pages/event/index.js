import EventList from "../../components/event/EventList";
import EventsSearch from "../../components/event/EventsSearch";
import { Fragment } from "react/cjs/react.production.min";
import { getAllEvents } from "../../dummy-data";

const Events = () => {
  const FeaturedEvents = getAllEvents();
  return (
    <Fragment>
      <EventsSearch/>
      <EventList items={FeaturedEvents} />;
    </Fragment>
  );
};

export default Events;
