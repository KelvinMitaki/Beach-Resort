import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Room from "../components/Room";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RoomFilter from "../components/RoomFilter";

const Rooms = (props) => {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            RETURN HOME
          </Link>
        </Banner>
      </Hero>
      <RoomFilter />
      <section className="roomslist">
        <div className="roomslist-center">
          {props.sortedRooms.map((room) => {
            return (
              <React.Fragment key={room.id}>
                <Room {...room} />
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    sortedRooms: state.roomsReducer.sortedRooms,
  };
};
export default connect(mapStateToProps)(Rooms);
