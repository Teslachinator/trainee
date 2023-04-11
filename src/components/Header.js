import React from "react";
import { Container, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="mb-5" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            justify
            variant="pills"
            defaultActiveKey="home"
            className="me-auto"
          >
            <NavItem>
              <Nav.Link eventKey="home">
                <Link className="dropdown-item" to="/">
                  Главная
                </Link>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link eventKey="calculator">
                <Link to="/calculator" className="dropdown-item ">
                  Calculator
                </Link>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link eventKey="searchFilter">
                <Link to="/searchFilter" className="dropdown-item">
                  SearchFilter
                </Link>
              </Nav.Link>
            </NavItem>
            <Nav.Link eventKey="counter">
              <Link to="/counter" className="dropdown-item">
                Counter
              </Link>
            </Nav.Link>
            <Nav.Link eventKey="todo">
              <Link to="/todo" className="dropdown-item">
                Todo
              </Link>
            </Nav.Link>

            {/* <NavDropdown title="Коллекция">
              <Link to="/calculator" className="dropdown-item">
                Calculator
              </Link>
              <Link to="/counter" className="dropdown-item">
                Counter
              </Link>
              <Link to="/searchFilter" className="dropdown-item">
                SearchFilter
              </Link>
              <Link to="/todo" className="dropdown-item">
                Todo
              </Link>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
