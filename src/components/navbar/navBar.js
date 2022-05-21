import React from 'react';
import { Navbar, Nav,Container } from 'react-bootstrap';
import './navBar.css'

const AppNavBar = () => {
  return (

      <Navbar style={{backgroundColor:"red",marginBottom:"20px"}}>
        <Container>

        <Navbar.Brand className='text-white' href="/">Home</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="w-100 justify-content-center">
                <span><Nav.Link className='text-white pokeball' href="/pokemons"><img style={{width:"50px",height:"50px"}} src={process.env.REACT_APP_LOCALAPI+"/pokeball.png"}></img></Nav.Link></span>
                
              </Nav>
              <Nav>
                <Nav.Link className='text-white' href="/teams">Teams</Nav.Link>
              </Nav>
            </Navbar.Collapse>

        </Container>

      </Navbar>

  );
};

export default AppNavBar;