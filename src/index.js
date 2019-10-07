import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "../src/store/store";
//import { addItemActionCreator } from "../src/redux/actions/index";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  addBlog,
  toggleBlog,
  setVisibilityFilter,
  VisibilityFilters
} from "../src/store/actions/blogActions";
// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
store.dispatch(addBlog("Learn about actions"));
store.dispatch(addBlog("Learn about reducers"));
store.dispatch(addBlog("Learn about store"));
store.dispatch(toggleBlog(0));
store.dispatch(toggleBlog(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();

window.store = store;
//window.addItemActionCreator = addItemActionCreator;
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
