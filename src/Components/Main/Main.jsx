import React, { useEffect, useState } from "react";
import "./main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Card from "../Cards/Cards";
import Review from "../Review/Review";

const Main = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.mhilladventure.com/trips/")
      .then((res) => {
        console.log(res.data);
        setTrips(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <section className="main container section">
        <h3 data-aos="fade-right" className="titler">
          Most Visited Destinations
        </h3>
      <Card trips={trips}/>
    </section>
    <Review/>
    </>

  );
};

export default Main;
