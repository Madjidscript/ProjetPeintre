
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './hearder.css';

function Hearder() {
  return (
    <Navbar expand="lg" className="success">
      <Container  className="m-auto=" id="box"  >
        <Navbar.Brand href="home" id="titre">Md service</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2 " id="onglet"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='lien' href="service">Service</Nav.Link>
            <Nav.Link className='lien' href="projet">Projet</Nav.Link>
            <Nav.Link className='lien' href="carriere" >Carrière </Nav.Link>
            <Nav.Link className='lien' href="contact" >Contact </Nav.Link>
            
          </Nav>
          <Navbar.Brand href="#" id="num">01 53 53 50 65</Navbar.Brand>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Hearder;