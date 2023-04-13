import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Contact from "./modals/Contact";

function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex fw-bold">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/project">Portfolio</Nav.Link>

              <Nav.Link
                href="https://www.linkedin.com/in/james-geneser-01967a153/"
                target="_blank"
              >
                LinkedIn
              </Nav.Link>
              <Contact />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
