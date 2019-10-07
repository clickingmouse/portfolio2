import uuid from "uuid";
import { GET_POSTS, ADD_POST, DELETE_POST } from "../actions/postTypes";
const initialState = {
  posts: [
    { id: uuid(), title: "ZYX", rant: "uno", date: Date.now() },
    { id: uuid(), title: "WV", rant: "doz", date: Date.now() },
    { id: uuid(), title: "UTS", rant: "tres", date: Date.now() }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state };
    case ADD_POST:
    case DELETE_POST:
    default:
      return state;
  }
}
