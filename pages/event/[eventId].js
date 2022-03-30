import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { Fragment } from "react/cjs/react.production.min";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";

const SingleEvent = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const singleEvent = getEventById(eventId);
  console.log(singleEvent);
  if (!singleEvent) {
    return <p>no event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={singleEvent.title} />
      <EventLogistics {...singleEvent}/>
      <EventContent>
        <p>{singleEvent.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default SingleEvent;
