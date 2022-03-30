import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "./../../components/event/EventList";

const FilteredEvents = () => {
  const { query } = useRouter();
  const eventFilterDetail = query.slug;
  let filteredEvents;
  if (eventFilterDetail) {
    const filterInfo = {
      year: +eventFilterDetail[0],
      month: +eventFilterDetail[1],
    };
    filteredEvents = getFilteredEvents(filterInfo);
  }
  if (filteredEvents.length === 0) {
    return <p>No Event Found</p>;
  }
  return <EventList items={filteredEvents} />;
};

export default FilteredEvents;
