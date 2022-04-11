import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Navbar,
  NavLink,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>E-Bazar</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="cart">
                <NavLink>
                  <FontAwesomeIcon icon={faCartShopping} className="pe-2" />
                  Cart
                </NavLink>
              </LinkContainer>
              <LinkContainer to="#login">
                <NavLink>
                  <FontAwesomeIcon icon={faUser} className="pe-2" />
                  Login
                </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
