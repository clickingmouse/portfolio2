import React from "react";
//react-transition-group
import { Container, Row, Col } from "react-bootstrap";
import BlogPanel from "./BlogPanel";
import ShoppingList from "./ShoppingList";
export default function Blog() {
  return (
    <div>
      <h3>My Blog</h3>
      <hr />
      <Container>
        <Row>
          <Col sm={8}>
            <BlogPanel />
            <ShoppingList />
          </Col>

          <Col sm={4}>
            Sidebar
            <hr />
            <ul>
              <li>Latest</li>
              <li>Search</li>

              <li>Categories</li>
              <li>Archivies</li>
              <li>Tags</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
