import React from 'react';
import '../css/home.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'; // Importez le composant Image
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css'
 const NavBarbrownies = () => {
  return (
    <div className='navbar-brawnie'>
   <Navbar >
        <Container fluid>
         
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
                          {/* <Image src={"../logo.png"} alt="Logo" width="100" /> */}

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
<Nav.Link style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>Home</Nav.Link>
              <Nav.Link style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }} >About</Nav.Link>

              <Nav.Link style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }} >Shop</Nav.Link>
              <Nav.Link style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }} >CONTACT US</Nav.Link>

            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>    </div>
  );
};
export default NavBarbrownies; // Exportez le composant par défaut
