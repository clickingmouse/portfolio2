import { combineReducers } from "redux";
import { ADD_ITEM } from "../actions/types";

const initialState = {
  items: []
};

function rootReducer(state = initialState, action) {
  console.log("...adding item");
  if (action.type == ADD_ITEM)
    return Object.assign({}, state, {
      items: state.items.concat(action.payload)
    });

  return state;
}

export default rootReducer;
