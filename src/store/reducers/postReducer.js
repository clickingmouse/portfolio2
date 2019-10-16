//import uuid from "uuid";
import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  POSTS_LOADING
} from "../actions/postTypes";
// const initialState = {
//   posts: [
//     { id: uuid(), title: "ZYX", rant: "uno", date: Date.now() },
//     { id: uuid(), title: "WV", rant: "doz", date: Date.now() },
//     { id: uuid(), title: "UTS", rant: "tres", date: Date.now() }
//   ]
// };

const initialState = {
  posts: [],
  loading: false
};

export default function(state = initialState, action) {
  console.log("postReducer>>>", action);
  switch (action.type) {
    case GET_POSTS:
      //return { ...state };
      return { ...state, posts: action.payload, loading: false };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case POSTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case DELETE_POST:
    default:
      return state;
  }
}
