import data from "../data";
const INITIAL_STATE = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FORMAT_DATA":
      const newData = data.map((item) => {
        const id = item.sys.id;
        const images = item.fields.images.map((image) => {
          return image.fields.file.url;
        });
        return { ...item.fields, id, images };
      });
      const featuredRooms = newData.filter((room) => room.featured === true);

      return { ...state, rooms: newData, sortedRooms: newData, featuredRooms };
    case "ON_CHANGE_ACTION":
      let { type, name, value } = action.payload;
      value = type === "checkbox" ? action.payload.checked : value;
      return { ...state, [name]: value };
    case "ROOM_TYPE_CHANGE":
      if (state.type !== "all") {
        const filteredRooms = state.rooms.filter(
          (room) => room.type === state.type
        );

        return { ...state, sortedRooms: filteredRooms };
      } else {
        return { ...state, sortedRooms: state.rooms };
      }
    default:
      return state;
  }
};
