import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container className="d-flex justify-content-center">
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="d-flex justify-content-center w-100">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Navbar.Brand
              style={{
                fontFamily: 'Reenie Beanie, cursive',
                fontSize: '1.7rem',
                marginLeft: '50px',
                marginRight: '50px'
              }}
            >
              Alannah Bennett
            </Navbar.Brand>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
