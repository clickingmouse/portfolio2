import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "../src/redux/store/index";
import { addItemActionCreator } from "../src/redux/actions/index";
import { BrowserRouter } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

window.store = store;
window.addItemActionCreator = addItemActionCreator;
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
