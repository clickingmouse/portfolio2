import { createStore } from "redux";
import rootReducer from "../reducers/index";

const initialState = {
  items: []
};

const store = createStore(rootReducer);
export default store;
