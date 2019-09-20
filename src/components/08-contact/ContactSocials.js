import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faWhatsappSquare,
  faLinkedinIn,
  faFacebookF,
  faFacebookSquare,
  faTwitterSquare,
  faMobile,
  faEnvelope,
  faEnvelopeSquare,
  faVoicemail,
  faInbox
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faWeixin,
  faFacebookMessenger,
  faWhatsapp,
  faWeibo,
  faQq,
  faSkype,
  faTelegram,
  faLine,
  faBlogger
} from "@fortawesome/free-brands-svg-icons";
//style={{ display: "flex", justifyContent: "space-between" }}
export default function ContactSocials() {
  return (
    <Container>
      <Row>
        <Col
          className="px-0"
          xs={6}
          sm={12}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <FontAwesomeIcon icon={faVoicemail} size="4x" />
          <FontAwesomeIcon icon={faInbox} size="4x" />
          <FontAwesomeIcon icon={faEnvelope} size="4x" />
        </Col>
        <Col
          className="px-0"
          xs={6}
          sm={12}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
          <FontAwesomeIcon icon={faTwitter} size="4x" />
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </Col>
      </Row>
      <Row>
        <Col
          className="px-0"
          xs={6}
          sm={12}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <FontAwesomeIcon icon={faSkype} size="4x" />
          <FontAwesomeIcon icon={faQq} size="4x" />
          <FontAwesomeIcon icon={faInbox} size="4x" />
        </Col>
        <Col
          className="px-0"
          xs={6}
          sm={12}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <FontAwesomeIcon icon={faFacebook} size="4x" />
          <FontAwesomeIcon icon={faWeibo} size="4x" />
          <FontAwesomeIcon icon={faBlogger} size="4x" />
        </Col>
      </Row>
      <Row>
        <Col
          className="px-0"
          xs={6}
          sm={12}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <FontAwesomeIcon icon={faMobile} size="4x" />
          <FontAwesomeIcon icon={faWhatsapp} size="4x" />
          <FontAwesomeIcon icon={faWeixin} size="4x" />
        </Col>
        <Col
          className="px-0"
          xs={6}
          sm={12}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <FontAwesomeIcon icon={faLine} size="4x" />
          <FontAwesomeIcon icon={faTelegram} size="4x" />
          <FontAwesomeIcon icon={faFacebookMessenger} size="4x" />
        </Col>
      </Row>
    </Container>
  );
}
