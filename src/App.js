import React, { useEffect } from "react";
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/011-navbar/NavBar";
import NavBar2 from "./components/011-navbar/NavBar2";
import Footer from "./components/011-navbar/Footer";
import Jumbo from "./components/021-jumbo/Jumbo";
import Text from "./components/021-jumbo/Text";
import ReduxPlayground from "./components/redux/ReduxPlayground";
import Blog from "./components/090-blog/Blog";
import { connect } from "react-redux";
///

import MenuCard from "../src/components/011-navbar/MenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../src/components/08-contact/ContactForm";

import { loadUser } from "./store/actions/authActions";

function App(props) {
  console.log(props);
  //console.log(store);

  useEffect(() => {
    console.log("loading user...");
    props.loadUser();
    // props.store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Route path="/" component={NavBar2} />
      <Route exact path="/" component={Jumbo} />
      <Route exact path="/" component={Text} />

      <Route exact path="/contact" component={ContactForm} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default connect(
  null,
  { loadUser }
)(App);
