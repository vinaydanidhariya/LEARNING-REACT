import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import Example from "./Example";
import ModalLogin from "./ModalLogin";

const Navigation = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Navbar.Brand href="#home">Movies-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Example />
          {/* <ModalLogin show={modalShow} onHide={() => setModalShow(false)} /> */}
          <Nav.Link  href="/home">
            Home
          </Nav.Link>
          <Nav.Link  href="/about">
            About
          </Nav.Link>
          <Nav.Link  href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link  href="/project">
            Project
          </Nav.Link>

          <NavDropdown title="Sample Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            variant="transparent"
            style={{ width: "50px" }}
            onClick={() => setModalShow(true)}
          >
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
