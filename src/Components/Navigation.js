import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ModalLogin from "./ModalLogin";

const Navigation = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Navbar.Brand as={NavLink} to="/home">
        Movies-App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/project">
            Project
          </Nav.Link>
          <NavDropdown title="Programs" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/hooksum">
              Sum Using Hook
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/mapdemo">
              Map Demo
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/news">
              News
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/result">
              Result
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/counter">
              Counter
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/sumdemo">
              Sum Demo
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/product">
              Product
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/movies">
              Movies Search
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown.Item as={NavLink} to="/slider">
            Slider
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/calculator">
            Calculator
          </NavDropdown.Item>
          <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
};
export default Navigation;
