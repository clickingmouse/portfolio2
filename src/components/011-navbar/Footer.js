import React from "react";
import { Container } from "react-bootstrap";
export default function Footer() {
  return (
    <div style={{ background: "#282828", color: "#f0db4f" }} className="mt-0">
      <Container>
        &#9400; {new Date().getFullYear()}
        <br />
      </Container>
    </div>
  );
}
