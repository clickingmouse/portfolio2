import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/itemTypes";
const initialState = {
  items: [
    { id: uuid(), title: "ZYX", rant: "uno", date: Date.now() },
    { id: uuid(), title: "WV", rant: "doz", date: Date.now() },
    { id: uuid(), title: "UTS", rant: "tres", date: Date.now() }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case ADD_ITEM:
    case DELETE_ITEM:
    default:
      return state;
  }
}
