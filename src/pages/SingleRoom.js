import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

export class SingleRoom extends Component {
  render() {
    if (this.props.singleRoom) {
      console.log(this.props.singleRoom);
      const { name, description, price, size, images } = this.props.singleRoom;
      return (
        <div>
          <StyledHero image={images[0]}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back To Rooms
              </Link>
            </Banner>
          </StyledHero>
          <h3>${price}</h3>
          <h4>Size: {size}</h4>
          <p>{description}</p>
        </div>
      );
    } else {
      return (
        <div className="error">
          <h3>No such rooms could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.slug);
  const singleRoom = state.roomsReducer.rooms.find(
    (room) => room.slug === ownProps.match.params.slug
  );

  return {
    singleRoom,
  };
};
export default connect(mapStateToProps)(SingleRoom);
