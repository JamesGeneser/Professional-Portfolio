import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Contact from "./modals/Contact";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
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
              <Button onClick={switchTheme} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigation;
