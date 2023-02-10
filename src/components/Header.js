import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return(
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>BonMedia - Web3</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link>Web3 Login</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;