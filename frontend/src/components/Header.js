import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">E-Bazar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#cart">
                <FontAwesomeIcon icon={faCartShopping} className="pe-2" />
                Cart
              </Nav.Link>

              <Nav.Link href="#login">
                <FontAwesomeIcon icon={faUser} className="pe-2" />
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
