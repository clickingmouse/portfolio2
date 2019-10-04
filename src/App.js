import React from "react";
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/011-navbar/NavBar";
import NavBar2 from "./components/011-navbar/NavBar2";
import Footer from "./components/011-navbar/Footer";
import Jumbo from "./components/021-jumbo/Jumbo";
import Text from "./components/021-jumbo/Text";
import ReduxPlayground from "./components/redux/ReduxPlayground";
///

import MenuCard from "../src/components/011-navbar/MenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../src/components/08-contact/ContactForm";
function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar2} />
      <Route exact path="/" component={Jumbo} />
      <Route exact path="/" component={Text} />
      <Route path="/" component={Footer} />
      <Route exact path="/contact" component={ContactForm} />
    </div>
  );
}

export default App;
