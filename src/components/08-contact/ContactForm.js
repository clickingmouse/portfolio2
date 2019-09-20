import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
export default function ContactForm() {
  return (
    <div>
      Contact Form
      <hr />
      <Container>
        <Row>
          <Col xs={12} sm={5}>
            <div>Leave A Message</div>
          </Col>
          <Col xs={12} sm={7}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>

              <Form.Control size="lg" type="text" placeholder="Large text" />

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
