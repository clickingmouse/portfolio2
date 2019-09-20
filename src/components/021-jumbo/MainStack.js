import React from "react";
import { ReactComponent as JavaScript } from "../../media/icons/javascript.svg";

import { ReactComponent as ReactJS } from "../../media/icons/react.svg";
import { ReactComponent as ReduxJS } from "../../media/icons/redux-action.svg";
import { ReactComponent as HTML5 } from "../../media/icons/html.svg";
import { ReactComponent as CSS } from "../../media/icons/css.svg";
import { ReactComponent as NodeJS } from "../../media/icons/nodejs.svg";
import { Row, Col, Container } from "react-bootstrap";

export default function MainStack() {
  return (
    <Row>
      <Col sm={2}>
        <JavaScript height="auto" width="auto" />
      </Col>
      <Col sm={2}>
        <ReactJS height="auto" width="auto" />
      </Col>
      <Col sm={2}>
        <ReduxJS height="auto" width="auto" />
      </Col>
      <Col sm={2}>
        <HTML5 height="auto" width="auto" />
      </Col>
      <Col sm={2}>
        <CSS height="auto" width="auto" />
      </Col>
      <Col sm={2}>
        <NodeJS height="auto" width="auto" />
      </Col>
    </Row>
  );
}
