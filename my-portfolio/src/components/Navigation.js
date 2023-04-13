import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Contact from "./modals/Contact";
import { useLocation, useNavigate } from "react-router-dom";
function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex fw-bold">
              {location.pathname == "/" ? (
                <Nav.Link href="/project">Portfolio</Nav.Link>
              ) : (
                <Nav.Link href="/">Home</Nav.Link>
              )}

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
