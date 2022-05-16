import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const AppNavBar = () => {
  return (

      <Navbar>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/pokemons">Pokemon</Nav.Link>
                <Nav.Link href="/teams">Teams</Nav.Link>
              </Nav>
            </Navbar.Collapse>

      </Navbar>

  );
};

export default AppNavBar;