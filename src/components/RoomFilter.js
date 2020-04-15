import React, { Component } from "react";
import { onChangeAction, roomTypeChange } from "../actions";
import { connect } from "react-redux";
import Title from "./Title";

export class RoomFilter extends Component {
  handleChange = (event) => {
    this.props.onChangeAction(event.target);
    this.props.roomTypeChange();
  };

  getUniqueType = (rooms, value) => {
    return [...new Set(rooms.map((room) => room[value]))];
  };
  renderRoomTypes = (types) => {
    return types.map((type, index) => {
      return (
        <option key={index} value={type}>
          {type}
        </option>
      );
    });
  };

  render() {
    const { type, rooms } = this.props.roomsReducer;

    let types = this.getUniqueType(rooms, "type");
    types = ["all", ...types];

    return (
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={this.handleChange}
            >
              {this.renderRoomTypes(types)}
            </select>
          </div>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    roomsReducer: state.roomsReducer,
  };
};
export default connect(mapStateToProps, { onChangeAction, roomTypeChange })(
  RoomFilter
);
