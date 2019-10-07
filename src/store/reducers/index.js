import { combineReducers } from "redux";
import todoBlog from "./blogReducers";
import visibilityFilter from "./blogReducers";

import itemReducer from "./itemReducer";
import postReducers from "./postReducers";

export default combineReducers({
  blog: todoBlog,
  post: postReducers,
  vis: visibilityFilter,
  item: itemReducer
});
