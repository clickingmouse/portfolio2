import React from "react";
import { Card, Button, CardImg, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuCard(props) {
  console.log(props);
  return (
    <Card
      border="info"
      bg="dark"
      className="p-0"
      style={{ textAlign: "center" }}
    >
      <div style={{ padding: "0.5em" }}> {props.icon}</div>
      <Card.Body className="p-0">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <p className="m-0 p-0">{props.subtitle}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
