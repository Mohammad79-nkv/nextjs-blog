import EventList from "../components/event/EventList";
import Head from "next/head";
import Image from "next/image";
import { getFeaturedEvents } from './../dummy-data';
import styles from "../styles/Home.module.css";

export default function Home() {
  const FeaturedEvents = getFeaturedEvents();

  return <EventList items={FeaturedEvents} />;
}
