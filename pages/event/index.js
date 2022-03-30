import EventList from "../../components/event/EventList";
import { getAllEvents } from "../../dummy-data";

const Events = () => {
  const FeaturedEvents = getAllEvents();
  return <EventList items={FeaturedEvents} />;
};

export default Events;
