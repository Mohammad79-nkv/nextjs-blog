import EventList from "../../components/event/EventList";
import { getFeaturedEvents } from "../../dummy-data";

const Events = () => {
  const FeaturedEvents = getFeaturedEvents();
  return <EventList items={FeaturedEvents} />;
};

export default Events;
