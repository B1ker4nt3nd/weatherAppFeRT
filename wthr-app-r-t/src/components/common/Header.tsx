import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="spray-prediction">
              Permetezés tervező
            </Nav.Link>
            <Nav.Link as={NavLink} to="about">
              Oldal információk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav>
    //   <NavLink to="spray-prediction" activeStyle={activeStyle} exact>
    //     Permetezés tervező
    //   </NavLink>
    //   {' | '}
    //   <NavLink to="about" activeStyle={activeStyle}>
    //     Oldal információk
    //   </NavLink>
    // </nav>
  );
}

export default Header;
