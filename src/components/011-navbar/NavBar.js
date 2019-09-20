import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Col,
  Row,
  Image,
  CardDeck,
  CardGroup
} from "react-bootstrap";
import MenuCard from "./MenuCard";
import MenuCardM from "./MenuCardM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../media/logo/pngguru.com-id-bxand.png";
import logo2 from "../../media/logo/blue-orange.png";
import logo3 from "../../media/logo/000527-Phoenix-03.png";
import {
  faCoffee,
  faHome,
  faBriefcase,
  faAddressCard,
  faBlog
} from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Image
          src={logo3}
          fluid
          style={{ height: "auto", maxHeight: "158px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Row>
            <Col xs={3} className="m-0 p-0">
              <Nav.Link href="#home">
                <MenuCardM icon="home" title="Home" subtitle="Sweet Home" />
              </Nav.Link>
            </Col>
            <Col xs={3} className="m-0 p-0">
              <Nav.Link href="#features">
                <MenuCardM
                  icon="assignment"
                  title="Projects"
                  subtitle="portfolio"
                />
              </Nav.Link>
            </Col>
            <Col xs={3} className="m-0 p-0">
              <Nav.Link href="#features">
                <MenuCard
                  icon={
                    <FontAwesomeIcon
                      icon={faBlog}
                      size="5x"
                      style={{ fontSize: "6rem" }}
                    />
                  }
                  title="More Info"
                  subtitle="about me"
                />
              </Nav.Link>
            </Col>
            <Col xs={3} className="m-0 p-0">
              <Nav.Link href="#features">
                <MenuCardM icon="email" title="Contact " subtitle="me!" />
              </Nav.Link>
            </Col>
          </Row>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
