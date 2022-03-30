import MyButton from "../ui/MyButton";
import classes from "./event-search.module.css";
import { useRouter } from 'next/router';
import { useState } from "react";

const EventsSearch = () => {
  const [year, setYear] = useState("");
  const [mounth, setMounth] = useState("");
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterDetail = {
      year,
      mounth,
    };
    router.push(`/event/${year}/${mounth}`)
  };

  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" onChange={(e) => setYear(e.target.value)}>
            <option value="2021">2021</option>
            <option valuu="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="mounth"></label>
          <select id="mounth" onChange={(e) => setMounth(e.target.value)}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Des</option>
          </select>
        </div>
      </div>
      <MyButton type="submit">Find Event</MyButton>
    </form>
  );
};

export default EventsSearch;
