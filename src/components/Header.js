import React from "react";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="mb-5" bg="light">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" defaultActiveKey="home">
            <NavItem eventkey="home">
              <Nav.Link eventkey="home" className="px-0">
                <Link className="px-2 dropdown-item" to="/">
                  Главная
                </Link>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link eventkey="calculator" className="px-0">
                <Link to="/calculator" className="px-2 dropdown-item">
                  Calculator
                </Link>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link eventkey="searchFilter" className="px-0">
                <Link to="/searchFilter" className="px-2 dropdown-item">
                  SearchFilter
                </Link>
              </Nav.Link>
            </NavItem>
            <Nav.Link eventkey="counter" className="px-0">
              <Link to="/counter" className="px-2 dropdown-item">
                Counter
              </Link>
            </Nav.Link>
            <Nav.Link eventkey="todo" className="px-0">
              <Link to="/todo" className="px-2 dropdown-item">
                Todo
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
