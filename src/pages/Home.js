import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting at $299">
        <Link to="/rooms" className="btn-primary">
          OUR ROOMS
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
