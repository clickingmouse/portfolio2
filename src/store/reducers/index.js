import { combineReducers } from "redux";
import todoBlog from "./blogReducers";
import visibilityFilter from "./blogReducers";

import itemReducer from "./itemReducer";

export default combineReducers({
  blog: todoBlog,
  vis: visibilityFilter,
  item: itemReducer
});
