import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

//import { ReactComponent as JS } from "../../media/stack/Unofficial_JavaScript_logo_2.svg";
import { ReactComponent as Python } from "../../media/stack/python-logo2.svg";
import { ReactComponent as Php } from "../../media/stack/php-seeklogo.com.svg";
import { ReactComponent as Php3 } from "../../media/stack/Webysther_20160423_-_Elephpant.svg";

//import { ReactComponent as Tcl } from "../../media/stack/Tcl.svg";
import { ReactComponent as Html } from "../../media/stack/HTML5_logo_and_wordmark.svg";
import { ReactComponent as Css } from "../../media/stack/CSS.3.svg";
import { ReactComponent as Clang } from "../../media/stack/c-seeklogo.com.svg";
import { ReactComponent as Cplusplus } from "../../media/stack/ISO_Cplusplus_Logo.svg";
import { ReactComponent as Mongo } from "../../media/stack/Antu_mongodb.svg";
import { ReactComponent as Mysql } from "../../media/stack/Mysql-dolphin-logo2.svg";
import { ReactComponent as Nodejs } from "../../media/stack/nodejs-icon.svg";
import { ReactComponent as Apache } from "../../media/stack/Apache_Feather_Logo.svg";
import { ReactComponent as Reactjs } from "../../media/stack/React-icon3.svg";
import { ReactComponent as Reduxjs } from "../../media/stack/redux.svg";
//import {ReactComponent as mongoose}  from "../../media/stack/"
import { ReactComponent as Expressjs } from "../../media/stack/express-wordmark-34a802bfbe8e565ddbafab23613de99d7c6bdeee057b11721ed43423926d5e7d.svg";
import { ReactComponent as Linux } from "../../media/stack/linux-logo.svg";
import { ReactComponent as JS } from "../../media/stack/Unofficial_JavaScript_logo_2.svg";
import { ReactComponent as JS2 } from "../../media/icons/javascript.svg";
import { ReactComponent as JS3 } from "../../media/icons/language-javascript.svg";

// import { ReactComponent as b } from "../../media/stack";
// import { ReactComponent as c } from "../../media/stack";
// import { ReactComponent as d } from "../../media/stack";
// import { ReactComponent as e } from "../../media/stack";
// import { ReactComponent as f } from "../../media/stack";
// import { ReactComponent as g } from "../../media/stack";
// import { ReactComponent as h } from "../../media/stack";

export default function Skills() {
  return (
    <div>
      X
      <hr />
      <Row>
        <Col xs={2}>
          <Clang width="auto" height="auto" fill="#66ff66" />
        </Col>
        <Col xs={2}>
          <Cplusplus width="auto" height="auto" style={{ fill: "#66ff66" }} />
        </Col>
        <Col xs={2}>
          <Reactjs width="auto" height="auto" fill="#66ff66" />
        </Col>
        <Col xs={2}>
          <Php3 width="auto" height="auto" style={{ fill: "#66ff66" }} />
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <JS width="auto" height="auto" />
        </Col>
        <Col xs={2}>
          <Python width="auto" height="auto" />
        </Col>
        <Col xs={2}>
          <Php width="auto" height="auto" />
        </Col>
        <Col xs={2}>
          <Mongo width="auto" height="auto" />
        </Col>

        <Col xs={2}>
          <Mysql style={{ width: "100%", height: "auto", fill: "#76ff03" }} />
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <Html style={{ width: "100%", height: "100%", fill: "#76ff03" }} />
        </Col>
        <Col xs={2}>
          <Css style={{ width: "100%", height: "100%", fill: "#76ff03" }} />
        </Col>
        <Col xs={2}>
          <Nodejs width="auto" height="auto" />
        </Col>
        <Col xs={2}>
          <Reactjs width="100%" height="100%" fill="#66ff66" />
        </Col>
        <Col xs={2}>
          <Reduxjs width="auto" height="auto" style={{ fill: "#66ff66" }} />
        </Col>
        <Col xs={2}>
          <Expressjs width="auto" height="auto" />
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}
