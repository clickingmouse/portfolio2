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
  faBlog,
  faLinkedin,
  faLinkedinIn,
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faFeather
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//<Link to="/about/">About</Link>
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
          <CardGroup>
            <Nav.Link href="#home">
              <MenuCardM icon="home" title="Home" subtitle="Sweet Home" />
            </Nav.Link>
            <Nav.Link href="#features">
              <MenuCardM
                icon="assignment"
                title="Projects"
                subtitle="portfolio"
              />
            </Nav.Link>
            <Nav.Link href="#features">
              <MenuCardM icon="info" title="About" subtitle="me!" />
            </Nav.Link>
            <Nav.Link href="#features">
              <MenuCard
                icon={<FontAwesomeIcon icon={faBlog} size="5x" />}
                title="My Blog"
                subtitle="& rants"
              />
            </Nav.Link>
            <Link to="/contact">
              <Nav.Link href="#features">
                <MenuCard
                  icon={<FontAwesomeIcon icon={faFeather} size="5x" />}
                  title="My Blog"
                  subtitle="& rants"
                />
              </Nav.Link>
            </Link>
          </CardGroup>
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
