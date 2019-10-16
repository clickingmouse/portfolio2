import { combineReducers } from "redux";
import todoBlog from "./blogReducers";
import visibilityFilter from "./blogReducers";

import itemReducer from "./itemReducer";
import postReducer from "./postReducer";

import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  blog: todoBlog,
  post: postReducer,
  vis: visibilityFilter,
  item: itemReducer,
  error: errorReducer,
  auth: authReducer
});
