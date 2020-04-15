import data from "../data";
const INITIAL_STATE = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
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
    default:
      return state;
  }
};
