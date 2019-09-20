import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Skills from "./Skills";
import Text from "./Text";
import TopIcons from "./TopIcons";
import MainStack from "./MainStack";
import Misc from "./Misc";
export default function Jumbo() {
  return (
    <Jumbotron fluid bg="dark" style={{ background: "#282828" }}>
      <Container style={{ color: "#66ff66" }}>
        <MainStack />
        <Misc />
        <Row>
          <Col />
          <Col xs={6}></Col>
          <Col />
        </Row>
      </Container>
    </Jumbotron>
  );
}
