import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const AppNavBar = () => {
  return (

      <Navbar style={{backgroundColor:"red",marginBottom:"20px"}}>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link className='text-white' href="/">Home</Nav.Link>
                <Nav.Link className='text-white' href="/pokemons">Pokédex</Nav.Link>
                <Nav.Link className='text-white' href="/teams">Teams</Nav.Link>
              </Nav>
            </Navbar.Collapse>

      </Navbar>

  );
};

export default AppNavBar;