import React from "react";
import { Card, Button, CardImg } from "react-bootstrap";
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
      <i className="p-0 material-icons" style={{ fontSize: "6rem" }}>
        {props.icon}
      </i>

      <Card.Body className="p-0">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <span className="m-0 p-0">{props.subtitle}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
