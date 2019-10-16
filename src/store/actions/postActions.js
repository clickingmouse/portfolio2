import { GET_POSTS, ADD_POST, DELETE_POST, POSTS_LOADING } from "./postTypes";
import axios from "axios";

// export const getPosts = () => dispatch => {
//   return {
//     type: GET_POSTS
//   };
// };

export const getPosts = () => dispatch => {
  console.log("---------------------------->");
  dispatch(setPostsLoading);
  axios("/api/blog").then(res => {
    console.log("==============>");
    console.log(res.data);
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  });
};

// export const addPost = post => {
//   return {
//     type: ADD_POST,
//     payload: post
//   };
// };

export const addPost = post => dispatch => {
  axios.post("/api/blog", post).then(res => {
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  });
};

export const setPostsLoading = post => {
  console.log("XXXXXXX");
  return {
    type: POSTS_LOADING
  };
};
