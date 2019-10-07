import {
  GET_BLOG_POSTS,
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  BLOG_POSTS_LOADING,
  SET_BLOG_VISIBILITY_FILTER,
  TOGGLE_BLOG
} from "./blogActionTypes";

//import axios from "axios";

export const addBlog = text => {
  return { type: ADD_BLOG_POST, text };
};

export const toggleBlog = index => {
  return { type: TOGGLE_BLOG, index };
};

export const setVisibilityFilter = filter => {
  return { type: SET_BLOG_VISIBILITY_FILTER, filter };
};

/// redundant --  to be fixed
export const VisibilityFilters = {
  SHOW_ALL_BLOGS: "SHOW_ALL_BLOGS",
  SHOW_COMPLETED_BLOG: "SHOW_COMPLETED_BLOG",
  SHOW_ACTIVE_BLOG: "SHOW_ACTIVE_BLOG"
};
